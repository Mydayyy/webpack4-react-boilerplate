import React from "react";
import {Link} from "react-router-dom";

import Button from "~/components/Button/Button";

import image from "__assets__/img/dummy.png";

class Page1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Page1</h1>
                <img src={image}/>
                <p>
					Lorem ipsum dolor sit amet, sea dico impetus et, id nec probo delectus urbanitas. Ullum malorum veritus pro an. Nec nibh epicurei ne, no solet salutandi has, vix ex habemus eligendi. Possit utamur quo cu, sonet delenit ut usu. Quodsi patrioque eu vis. Vis ei sint virtute consectetuer. Quas mazim te mel, no nec libris accusata, solet necessitatibus sea ei. Nam cu lucilius definitiones. Mei option epicurei recusabo et, ei sint harum interesset sea. Sea ea summo aliquam, facilisis consetetur eam no, facete feugait ne quo. Est no zril semper necessitatibus, ea vel causae nusquam intellegebat. Id albucius gloriatur has, vocent urbanitas mediocritatem pri ea. Ea mel dolorem iudicabit. Epicuri erroribus gloriatur at sed. Has iisque admodum expetenda an, nostrum tractatos nec ei, nibh justo invenire et qui. An pro lorem novum. Meliore epicurei appetere id est, mollis nusquam quaestio ne mea. Habeo iusto vituperata pri ex. Diam forensibus intellegebat usu ea. Eos posidonium delicatissimi ut, fierent nominati ei sed. Et his meis forensibus, in posse impedit mediocrem pro, libris consequat prodesset ad vix. Per alia falli at. Vim et primis eirmod assueverit, an tale lobortis mel. Quo alia vivendum ne. Quas inani eruditi nam ne, mazim epicurei legendos nam te. Ut prima veniam sed, unum labore nec id, in ius errem dolorem. Pro omnium bonorum id, quo nostrum suscipit ex. Te alia cibo nusquam qui. Ut eos novum omnium commune, ad per purto praesent. Mei ut animal invidunt rationibus, ne enim intellegebat reprehendunt sea. Nam definiebas assueverit te. Eam ei oratio indoctum salutatus, vix an elitr albucius. Ei duis dissentias quo, qui an prima populo feugait. Nullam facilisi an sit, sed principes iracundia dissentiet te. Usu ea duis atqui deserunt, cu odio torquatos suscipiantur sed. Ubique eripuit nec in. Quo dolore soluta option at, veniam eruditi debitis et eum, mei euismod rationibus inciderint ad. Eu tale solum eum, ex pri impetus deleniti. Veri persecuti id eum, cibo probatus appellantur eu sit. Adipisci pericula mei ad, sit ex ancillae philosophia. In mel congue nostrud, duo cu graeci laoreet. Nonumes instructior nec in, alia eligendi vim et. Graecis fierent pri no. Ei vitae nostrud voluptatibus quo. Ridens habemus blandit no vix, ut velit comprehensam mel, quo clita elaboraret no. An nonumy mandamus duo, pro cu utamur repudiare. Quas diceret ius et, vel altera virtute inimicus te, in vix assum populo tacimates. Sit ex quod etiam aperiam, eos graeci offendit inimicus cu. Veri choro interpretaris eu vix. Sit at delectus intellegebat, nec adhuc explicari cu, est ne nulla regione.
				</p>
                <Link to={"/page2"}>
                    <Button name="Go to page2" />
                </Link>
            </div>
        );
    }
}

export default Page1;
