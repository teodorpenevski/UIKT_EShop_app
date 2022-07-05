import axios from '../custom-axios/axios';

const EShopService = {

    fetchProducts: () => {
        return axios.get("/products");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    addMonitor: (name, price, back_light_type,color, power_in_kw, resolution, category) => {
        return axios.post("/monitors/addMonitor", {
            "name": name,
            "price": price,
            "backLightType": back_light_type,
            "color": color,
            "powerInKw": power_in_kw,
            "resolution": resolution,
            "category": category
        });
    },
    addMouse: (name, price,cable_length, cable_type, dpiresolution, is_gaming,
               category) => {
        return axios.post("/mice/addMice", {
            "name": name,
            "price": price,
            "cableLength": cable_length,
            "cableType": cable_type,
            "dpiresolution": dpiresolution,
            "isGaming": is_gaming,
            "category": category
        });
    },
    addKeyboard: (name, price,spill_resistant, is_gaming,
                  cable_length_in_cm, number_of_keys, category) => {
        return axios.post("/keyboards/addKeyboard", {
            "name": name,
            "price": price,
            "spillResistant": spill_resistant,
            "isGaming": is_gaming,
            "cableLengthInCm": cable_length_in_cm,
            "numberOfKeys": number_of_keys,
            "category": category
        });
    },
    addLaptop: (name, price, cpu,ram, storage, gpu, weight_in_kg, operating_system,
                dimensions, category) => {
        return axios.post("/laptops/addLaptop", {
            "name": name,
            "price": price,
            "cpu": cpu,
            "ram": ram,
            "storage": storage,
            "gpu": gpu,
            "weightInKg": weight_in_kg,
            "operatingSystem": operating_system,
            "dimensions": dimensions,
            "category": category
        });
    },
    getProduct: (id) => {
        return axios.get(`/products/${id}`);
    },
    editProduct: (id, price) => {
        return axios.put(`/products/edit/${id}`, {
            "price": price
        });
    },
    fetchShoppingCart: (id) => {
        return axios.get(`/shoppingCart/${id}`)
    },
    deleteShoppingCartItem: (id) => {
        return axios.delete(`/shoppingCart/delete/${id}`)
    },
    addToCart: (productId) => {
        return axios.post("/shoppingCart/add-product/1", {
            "productId" : productId
        })
    }
}

export default EShopService;