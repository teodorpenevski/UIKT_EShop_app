import React from 'react';
import {Link} from 'react-router-dom';

const products = (props) => {

        return (
            <div className={"container mm-4 mt-5"}>
                <div className="col mb-3">
                    <div className="row">
                        <div className="col-sm-12 col-md-12">
                            <div className="row">
                                <Link className={"btn col-2 m-2 btn-info"} to={"/monitors/addMonitor"}>Add new
                                    monitor</Link>
                                <Link className={"btn col-2 m-2 btn-info"} to={"/mice/addMice"}>Add new mouse</Link>
                                <Link className={"btn col-2 m-2 btn-info"} to={"/laptops/addLaptop"}>Add new
                                    laptop</Link>
                                <Link className={"btn col-2 m-2 btn-info"} to={"/keyboards/addKeyboard"}>Add new
                                    keyboard</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

export default products;


