import React from 'react';
import './index.scss';
import {
    useLocation
} from "react-router-dom";


function Error(){

    let location = useLocation();

    return (
        <div>
            <h3>
            No Match for <code>{location.pathname} 404</code>
            </h3>
        </div>
    )
}


export default Error;