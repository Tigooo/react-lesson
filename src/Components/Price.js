import React from "react";

class Price extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            price: props.price,
            currency: props.currency
        }
    }

    handleClick = () => {
        let usd = "$";
        if (this.state.currency === usd) {
            this.setState({
                price: this.state.price * 487,
                currency: "AMD"
            });
        }
        else if (this.state.currency === "AMD") {
            this.setState({
                price: this.state.price / 487,
                currency: "$"
            });
        }
        else {
            this.setState({
                price: this.state.price
            })
        }
    };


    render() {
        let {price} = this.state;
        return (
            <div>
                <b>Price: </b> {price}
                <button onClick={this.handleClick}> Change the currency</button>
            </div>
        )
    }
}

export default Price;