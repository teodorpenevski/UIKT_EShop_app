import { Link } from "react-router-dom";
import React from "react";

const Details =(props)=>{

    return (
        <div className="app">
            {
                <div className="details" key={props.product.id}>

                    <div className="box">
                        <div className="row">
                            <h2> Product name: {props.product.name} </h2>
                        </div>
                        <h2>Product price: ${props.product.price}</h2>
                        <h2>Product category:
                            {props.categories.map((item) => {
                                if(props.product.category !== undefined
                               && item.id === props.product.category.id)
                             return item.name
                            })}
                        </h2>
                        <Link className={"btn m-2 btn-primary"} to={"/home"}>Cancel</Link>
                    </div>
                </div>
            }
        </div>
    )

}

export default Details;