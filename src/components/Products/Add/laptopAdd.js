import React from 'react';
import { useHistory } from 'react-router'

const LaptopAdd = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        price: 0.0,
        cpu: "",
        gpu: "",
        ram: "",
        dimensions: "",
        operating_system: "",
        storage: "",
        weight_in_kg: 0,
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
        const cpu = formData.cpu;
        const gpu = formData.gpu;
        const ram = formData.ram;
        const dimensions = formData.dimensions;
        const operating_system = formData.operating_system;
        const storage = formData.storage;
        const weight_in_kg = formData.weight_in_kg;
        const category = formData.category;

        props.onAddLaptop(name, price, cpu,ram,storage, gpu, weight_in_kg, operating_system,
            dimensions, category);
        history.push( "/home");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <h2>Add new laptop</h2>
                <form onSubmit={onFormSubmit}>
                    <div className="form-group m-2">
                        <label htmlFor="name">Laptop name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               required
                               placeholder="Enter laptop name"
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
                        <label htmlFor="cpu">CPU</label>
                        <input type="text"
                               className="form-control"
                               id="cpu"
                               name="cpu"
                               placeholder="CPU"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="gpu">GPU</label>
                        <input type="text"
                               className="form-control"
                               id="gpu"
                               name="gpu"
                               placeholder="GPU"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="ram">RAM</label>
                        <input type="text"
                               className="form-control"
                               id="ram"
                               name="ram"
                               placeholder="RAM"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="dimensions">Dimensions</label>
                        <input type="text"
                               className="form-control"
                               id="dimensions"
                               name="dimensions"
                               placeholder="Dimensions"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="operating_system">Operating system</label>
                        <input type="text"
                               className="form-control"
                               id="operating_system"
                               name="operating_system"
                               placeholder="Operating System"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="storage">Storage</label>
                        <input type="text"
                               className="form-control"
                               id="storage"
                               name="storage"
                               placeholder="Storage"
                               required
                               onChange={handleChange}
                        />
                    </div>
                    <div className="form-group m-2">
                        <label htmlFor="weight_in_kg">Weight in kg</label>
                        <input type="number"
                               className="form-control"
                               id="weight_in_kg"
                               name="weight_in_kg"
                               placeholder="Weight in kg"
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

export default LaptopAdd;
