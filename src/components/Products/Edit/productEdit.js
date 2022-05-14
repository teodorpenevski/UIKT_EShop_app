import React from 'react';
import {useHistory} from 'react-router-dom';


const ProductEdit = (props) => {

    const [formData, updateFormData] = React.useState({
        price: 0.0
    })

    const history = useHistory();

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const price = formData.price !== 0.0 ? formData.price : props.product.price;

        props.onEditProduct(props.product.id,price);
        history.push("/home");
    }


    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <h2>Change the price for {props.product.name}</h2>
                    <div className="form-group">
                        <label htmlFor="price">Price</label>
                        <input type="number"
                               className="form-control"
                               id="price"
                               name="price"
                               placeholder={props.product.price}
                               onChange={handleChange}
                        />
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>                    <br/>
                </form>
                <br/>
            </div>
        </div>
    )
}

export default ProductEdit;
