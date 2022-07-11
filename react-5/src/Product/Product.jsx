import React, { Component } from 'react'
class Product extends Component {
    state = {
        product_Name: "Xiaomi 11i 5G ",
        price: 25000,
        qty: 1,
        image: 'https://rukminim1.flixcart.com/image/224/224/ky7lci80/mobile/w/3/c/-original-imagag2gzgkcd5yx.jpeg?q=90'
    }
    decrHandler = () => {
        this.setState({
            qty: this.state.qty - 1
        })
    }

    incrnHanlder = () => {
        this.setState({
            qty: this.state.qty + 1
        })
    }
    render() {
        return (
            <div className='container mt-5'>
                <div className="row">
                    <div className="col-md-6">
                        <table className="table table-hover">
                            <thead>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.product_Name}</td>
                                    <td> <img src={this.state.image} height="80px" /></td>
                                    <td> {this.state.price}</td>
                                    <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i> {this.state.qty} <i className="fa fa-plus-circle" onClick={this.incrnHanlder}></i></td>
                                    <td> {this.state.price * this.state.qty}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
