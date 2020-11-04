import React, {Component} from "react";
import Price from "./Price";
import Name from "./Name";
import Description from "./Description";

class Product extends Component{
    render() {
        let name = this.props.name;
        let description = this.props.description;
        let price = this.props.price;
        let currency = this.props.currency;
        return(
            <>
                <Name name={name}/>
                <Price price={price} currency={currency}/>
                <Description description={description}/>
            </>
        )
    }
}

export default Product;