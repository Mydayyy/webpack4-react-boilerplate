import React from "react";
import {Link} from "react-router-dom";

import Button from "~/components/Button/Button";

class Page2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {};
    }

    render() {
        return (
            <div>
                <h1>Page2</h1>
                <p>
					Ac tincidunt vitae semper quis lectus nulla. Congue quisque egestas diam in arcu cursus euismod quis. Nisl pretium fusce id velit. Id semper risus in hendrerit gravida rutrum. Id velit ut tortor pretium viverra. Sit amet consectetur adipiscing elit pellentesque habitant morbi tristique senectus. Donec et odio pellentesque diam. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Convallis aenean et tortor at risus viverra. Sed viverra tellus in hac habitasse platea. Enim nunc faucibus a pellentesque sit amet. Ultrices dui sapien eget mi. Ac tortor dignissim convallis aenean et tortor at risus viverra. Porttitor lacus luctus accumsan tortor posuere ac ut consequat. Donec ultrices tincidunt arcu non sodales neque. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Quam lacus suspendisse faucibus interdum posuere lorem. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Eget sit amet tellus cras adipiscing enim eu turpis.
                    Diam sit amet nisl suscipit adipiscing bibendum est ultricies integer. Viverra vitae congue eu consequat ac. Praesent tristique magna sit amet purus gravida quis. Sit amet facilisis magna etiam. Facilisis leo vel fringilla est ullamcorper. Leo vel orci porta non pulvinar neque laoreet suspendisse. Tristique sollicitudin nibh sit amet commodo. Pulvinar neque laoreet suspendisse interdum consectetur libero. Facilisis gravida neque convallis a cras semper auctor. In cursus turpis massa tincidunt dui ut ornare. Id velit ut tortor pretium viverra suspendisse potenti nullam. Et malesuada fames ac turpis. Sed felis eget velit aliquet sagittis id consectetur.
                    Enim lobortis scelerisque fermentum dui faucibus in ornare quam. Et tortor at risus viverra adipiscing. Sed libero enim sed faucibus. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Ut faucibus pulvinar elementum integer enim neque. Ultricies leo integer malesuada nunc vel risus commodo. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. Eros donec ac odio tempor. Id aliquet lectus proin nibh nisl condimentum id venenatis a. Nam libero justo laoreet sit amet cursus sit amet dictum. Urna molestie at elementum eu facilisis sed odio morbi quis.
				</p>
                <Link to={"/"}>
                    <Button name="Go to page1"/>
                </Link>
            </div>
        );
    }
}

export default Page2;
