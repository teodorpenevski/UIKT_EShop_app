import React from 'react';
import { useHistory } from 'react-router'

const MonitorAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        price: 0.0,
        back_light_type: "",
        color: "",
        power_in_kw: 0,
        resolution: "",
        category : 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name;
        const price = formData.price;
        const back_light_type = formData.back_light_type;
        const color = formData.color;
        const power_in_kw = formData.power_in_kw;
        const resolution = formData.resolution;
        const category = formData.category;

        props.onAddMonitor(name, price, back_light_type,color, power_in_kw, resolution, category);
        history.push( "/home");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <h2>Add new monitor</h2>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group m-2">
                        <label htmlFor="name">Monitor name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter monitor name"
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="price">Price</label>
                        <input type="text"
                               className="form-control"
                               id="price"
                               name="price"
                               placeholder="Price"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="back_light_type">BackLight Type</label>
                        <input type="text"
                               className="form-control"
                               id="back_light_type"
                               name="back_light_type"
                               placeholder="BackLight Type"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="color">Color</label>
                        <input type="text"
                               className="form-control"
                               id="color"
                               name="color"
                               placeholder="Color"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="power_in_kw">Power in KW</label>
                        <input type="number"
                               className="form-control"
                               id="power_in_kw"
                               name="power_in_kw"
                               placeholder="Power in KW"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="resolution">Resolution</label>
                        <input type="text"
                               className="form-control"
                               id="resolution"
                               name="resolution"
                               placeholder="Resolution"
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

export default MonitorAdd;
