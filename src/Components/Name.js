import React from "react";

class Name extends React.Component{
    render() {
        let name = this.props.name;
        return(
            <div>
            <b>Fresh name is:</b> {name}
            </div>
        )
    }
}

export default Name;