import React from 'react';
import {Link} from "react-router-dom";

const productTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.price}</td>
            <td>
                <Link className={"btn btn-secondary"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={"/products/edit/" + props.term.id}>
                    Edit
                </Link>
            </td>
        </tr>
    )}

export default productTerm;
