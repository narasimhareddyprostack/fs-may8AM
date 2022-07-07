import React from 'react'
class Order extends React.Component {
    order_Status = "Successfully Delivered"
    render() {
        return <div>
            <h4>Order Comp |</h4>
            <span>{this.order_Status}</span>
        </div>
    }
}
export default Order