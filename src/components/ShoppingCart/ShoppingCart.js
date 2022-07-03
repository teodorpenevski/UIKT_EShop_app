import React, {useEffect, useState} from 'react';
import EShopRepository from "../../repository/EShopRepository";
import ShoppingCartTerm from "./ShoppingCartTerm";
import {Link, useParams} from "react-router-dom";
import EShopService from "../../repository/EShopRepository";

const ShoppingCart = (props) => {


    const { id } = useParams();

    const [shoppingCart, setShoppingCart] = useState({
        id : 1,
        dateCreated: Date.now(),
        products: [
            {
                id : undefined,
                name : undefined,
                price : undefined,
                category: {
                    id : undefined,
                    name : undefined,
                    description: undefined,
                }
            }
        ],
        status: undefined,
    });

    useEffect(()=>{
        EShopService.fetchShoppingCart(id).then((data)=>{
            setShoppingCart(data.data)
        })
        // setShoppingCart(EShopService.fetchShoppingCart(1));
    }, [id]);

    const handleDelete = (id) => {
        EShopRepository.deleteShoppingCartItem(id).then(r => setShoppingCart((prev) =>
        {
            let newState = {...prev}
            newState.products = prev.products.filter(obj => obj.id !== id);
            return newState;
        }));
        // setShoppingCart((prev) =>
        // {
        //     let newState = {...prev}
        //         newState.products = prev.products.filter(obj => obj.id !== id);
        //     return newState;
        // })
    }

    const sum = shoppingCart.products.map(p => p.price).reduce((partialSum, a) => partialSum + a, 0);

    return (
        <div className={"container mm-4 mt-5"}>
            <div className={"row"}>
                <h1>My Shopping Cart</h1>
                <div className={"table-responsive"}>
                    <table className={"table table-striped"}>
                        <thead>
                        <tr>
                            <th scope={"col"}>Name</th>
                            <th scope={"col"}>Price</th>
                            <th scope={"col"} className="text-right pr-5">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {shoppingCart.products.map((term) => {
                            return (
                                <ShoppingCartTerm term={term} onDelete={handleDelete}/>
                            );
                        })}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td colSpan={3} className="text-right h4">Total price: ${sum}</td>
                            </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td className="d-flex justify-content-end">
                                <Link className={"btn m-2 btn-success"} to={"/home"}>Checkout</Link>
                                <Link className={"btn m-2 btn-secondary"} to={"/home"}>Cancel</Link>
                            </td>
                        </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;


