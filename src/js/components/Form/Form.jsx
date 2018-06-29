import React from 'react';
import {BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom';
import update from 'immutability-helper';
import classSet from 'react-classset';
import Recaptcha from 'react-recaptcha';

import "./Form.scss";

export default class Form extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            busy: false,
            submitted: false,
            status: 0,
            formData: {
                fname: '',
                lname: '',
                firm: '',
                email: '',
                title: '',
                inquiry: '',
                captcha: '',
            },
            errors: {
                fname: false,
                lname: false,
                firm: false,
                email: false,
                title: false,
                inquiry: false,
                captcha: false
            }
        };

        this.captcha = undefined;
    }


    handleChange = (data, event) => {
        this.setState(update(this.state, {
            formData: {
                [data.name]: {
                    $set: event.target.value
                }
            },
            errors: {
                [data.name]: {
                    $set: false
                }
            }
        }));
    };



    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.busy || this.state.submitted) {
            return false;
        }

        this.setState({busy: true});

        let errors = {};
        let hasError = false;

        Object.keys(this.state.formData).map((elem) => {

            if (elem === 'captcha' && this.state.formData[elem] === '') {
                // fix for missing events
                this.state.formData.captcha = (global.grecaptcha && global.grecaptcha.getResponse ? global.grecaptcha.getResponse() : '');
            }

            if (this.state.formData[elem] === '') {
                errors[elem] = {
                    $set: true
                };
                hasError = true;
            } else {
                errors[elem] = {
                    $set: false
                };
            }
        });

        this.setState(update(this.state, {errors: errors}));

        if (hasError) {
            return;
        } else {
            this.data = this.state.formData
            fetch("/api/mail.php", {
                headers: {
                    'Accept': 'application/json',
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(this.data)
            }).then((response) => {
                this.setState({
                    busy: false,
                    status: response.status,
                    submitted: (response.status === 200)
                });

                if (response.status === 406) {
                    this.captcha.reset();
                    this.setState(update(this.state, {
                        formData: {
                            captcha: {$set: ''}
                        }
                    }))
                }
            });
        }
    }

    render() {


        const form = (<div className="row">
            <h2 className="col-lg-12 col-md-12 col-sm-12 col-xs-12">Contact</h2>
            <label className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p>Title</p>
                <select className={classSet({error: this.state.errors.title})} name="title" onChange={this.handleChange.bind(this, {name: 'title'})}>
                    <option value="" defaultValue="defaultValue" hidden="hidden">Please Choose...</option>
                    <option value="Herr">Mr.</option>
                    <option value="Frau">Mrs.</option>
                </select>
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p>First Name</p>
                <input className={classSet({error: this.state.errors.fname})} type="text" name="fname" onChange={this.handleChange.bind(this, {name: 'fname'})}/>

            </label>
            <label className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p>Last Name</p>
                <input className={classSet({error: this.state.errors.lanem})} type="text" name="lanem" onChange={this.handleChange.bind(this, {name: 'lanem'})}/>
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p>Firm</p>
                <input className={classSet({error: this.state.errors.firm})} type="text" name="firm" onChange={this.handleChange.bind(this, {name: 'firm'})}/>
            </label>
            <label className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <p>Email</p>
                <input className={classSet({error: this.state.errors.email})} style={{"textTransform":"lowercase"}} type="email" name="email" pattern="[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$" onChange={this.handleChange.bind(this, {name: 'email'})}/>
            </label>
            <label className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <p>Inquiry</p>
                <textarea className={classSet({error: this.state.errors.textarea})} type="textarea" name="inquiry" rows="10" cols="100" onChange={this.handleChange.bind(this, {name: 'inquiry'})}/>
            </label>
            <Recaptcha ref={ elem => { this.captcha = elem; global.captcha = elem } } sitekey={'#'} verifyCallback={this.onVerify} expiredCallback={this.onExpire} />
        </div>
        )

        return (
        <form onSubmit={this.handleSubmit} className="reg-form col-lg-6 col-md-6 col-lg-offset-3 col-md-offset-3 col-sm-10 col-sm-offset-1 col-xs-offset-1 col-xs-10">
            {this.state.submitted ? null : form}
            { this.anyErrors() ? <div className="panel error">Please fill put all the input fields.</div> : null }
            {this.state.status === 400 ? <div className="panel error">There was an error. Please try again or contact me directly via <a href="mailto:info@test.com" target="_blank">email</a>.</div> : null}
            {this.state.status === 200 ? <div className="panel success">Youre inquiery was successfull.</div> : null}
            { this.state.submitted ? null : <input className="col-lg-6 col-md-6 col-sm-12 col-xs-12" type="submit" value="Submit" disabled={this.state.busy}/>}
        </form>)
    }

    anyErrors = () => {
        for (var field in this.state.errors) {
            if (this.state.errors.hasOwnProperty(field)) {
                if(this.state.errors[field] === true) return true;
            }
        }
        return false;
    }

    onVerify = (value) => {
        this.setState(update(this.state, {
            formData: {
                captcha: {$set: value}
            },
            errors: {
                captcha: {$set: false}
            }
        }));
    }

    onExpire = () => {
        this.setState(update(this.state, {
            formData: {
                captcha: {$set: ''}
            },
            errors: {
                captcha: {$set: false}
            }
        }));
    }
}
