import React from "react";

class Description extends React.Component{
    render() {
        let description = this.props.description;
        return(
            <div>
                <b>Description:</b> {description}
            </div>
        )
    }
}
export default Description;