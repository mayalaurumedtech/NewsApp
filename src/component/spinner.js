import React, { Component } from 'react';
import loader from "../Iphone-spinner-1.gif";

class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-4">
                <img src={loader} alt="loader gif" />
            </div>
        );
    }
}

export default Spinner;
