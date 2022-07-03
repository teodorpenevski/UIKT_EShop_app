import React from 'react';
import { useHistory } from 'react-router'

const MouseAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        price: 0.0,
        cable_length: "",
        cable_type: "",
        dpiresolution: "",
        is_gaming: false,
        category : 0
    })

    const handleChange = (e) => {

        let updatedValue = e.currentTarget.value;
        if (updatedValue === "true" || updatedValue === "false") {
            updatedValue = JSON.parse(updatedValue);
        }

        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const price = formData.price;
        const cable_length = formData.cable_length;
        const cable_type = formData.cable_type;
        const dpiresolution = formData.dpiresolution;
        const is_gaming= formData.is_gaming;
        const category = formData.category;

        props.onAddMouse(name, price, cable_length, cable_type, dpiresolution, is_gaming, category);
        history.push( "/home");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <h2>Add new mouse</h2>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group m-2">
                        <label htmlFor="name">Mouse name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter mouse name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="price">Price</label>
                        <input type="number"
                               className="form-control"
                               id="price"
                               name="price"
                               placeholder="Price"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="cable_length">Cable length</label>
                        <input type="text"
                               className="form-control"
                               id="cable_length"
                               name="cable_length"
                               placeholder="Cable length"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="cable_type">Cable type</label>
                        <input type="text"
                               className="form-control"
                               id="cable_type"
                               name="cable_type"
                               placeholder="Cable type"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="dpiresolution">DPI Resolution</label>
                        <input type="text"
                               className="form-control"
                               id="dpiresolution"
                               name="dpiresolution"
                               placeholder="DPI Resolution"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="is_gaming">Is gaming?</label><br/>
                        <input className={"m-2"} type="radio" id="is_gaming" name="is_gaming" value="true" onChange={handleChange} />Yes
                            <input className={"m-2"} type="radio" id="is_gaming" name="is_gaming" value="false" onChange={handleChange} />No
                    </div>
                    <div className="form-group m-2">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            <option selected disabled>Choose one</option>
                            {props.categories.map((item) =>
                                <option value={item.id}>{item.name}</option>
                            )}
                        </select>
                    </div>
                    <br/>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            <br/>
        </div>
    )
}

export default MouseAdd;
