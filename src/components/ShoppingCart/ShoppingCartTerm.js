import React from 'react';

const ShoppingCartTerm = (props) => {

    return (
        <tr key={props.term.id}>
            <td>{props.term.name}</td>
            <td>{props.term.price}</td>
            <td className="d-flex justify-content-end">
                <button className="btn btn-danger" onClick={() => props.onDelete(props.term.id)}>Delete</button>
            </td>
        </tr>
    )}

export default ShoppingCartTerm;
