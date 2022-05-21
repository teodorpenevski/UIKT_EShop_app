import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import EShopService from "../../../repository/EShopRepository";

const Details =(props)=>{
    const id = useParams();
    const [product, setProduct] = useState({
        id : undefined,
        name : undefined,
        price : undefined,
        category: {
            id : undefined,
            name : undefined,
            description: undefined,
        }
    });
    useEffect(()=>{
        EShopService.getProduct(id).then((data)=>{
            setProduct(data.data)
        })
    }, [id]);

    return (
        <>
            <h1 className='justify-content-center text-center'>
                Product details
            </h1>
            <div className='row d-flex justify-content-center'>
                <div className='col-8'>
                    <div className='row'>
                        <div className='col-6 text-right'>
                            PRODUCT NAME
                        </div>
                        <div className='col-6'>
                            {product.name}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 text-right'>
                            PRODUCT PRICE
                        </div>
                        <div className='col-6'>
                            {product.price}
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 text-right'>
                            PRODUCT CATEGORY
                        </div>
                        <div className='col-6'>
                            {product.category.name}
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}
export default Details