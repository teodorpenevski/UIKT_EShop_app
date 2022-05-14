import React from 'react';
import { useHistory } from 'react-router'

const KeyboardAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        price: 0.0,
        spill_resistant: false,
        is_gaming: false,
        cable_length_in_cm: 0,
        number_of_keys: 0,
        category: 0
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
        const spill_resistant = formData.spill_resistant;
        const is_gaming = formData.is_gaming;
        const cable_length_in_cm = formData.cable_length_in_cm;
        const number_of_keys = formData.number_of_keys;
        const category = formData.category;

        props.onAddKeyboard(name, price, spill_resistant, is_gaming, cable_length_in_cm,
            number_of_keys, category);
        history.push( "/home");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <h2>Add new keyboard</h2>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group m-2">
                        <label htmlFor="name">Keyboard name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter keyboard name"
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
                        <label htmlFor="spill_resistant">Is spill resistant?</label><br/>
                        <input className={"m-2"} type="radio" id="spill_resistant" name="spill_resistant" value="true" onChange={handleChange} />Yes
                        <input className={"m-2"} type="radio" id="spill_resistant" name="spill_resistant" value="false" onChange={handleChange} />No
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="is_gaming">Is gaming?</label><br/>
                        <input className={"m-2"} type="radio" id="is_gaming" name="is_gaming" value="true" onChange={handleChange} />Yes
                        <input className={"m-2"} type="radio" id="is_gaming" name="is_gaming" value="false" onChange={handleChange} />No
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="cable_length_in_cm">Cable length in cm</label>
                        <input type="number"
                               className="form-control"
                               id="cable_length_in_cm"
                               name="cable_length_in_cm"
                               placeholder="Cable length in cm"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="number_of_keys">Number of keys</label>
                        <input type="number"
                               className="form-control"
                               id="number_of_keys"
                               name="number_of_keys"
                               placeholder="Number of keys"
                               required
                               onChange={handleChange}
                        />
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

export default KeyboardAdd;
