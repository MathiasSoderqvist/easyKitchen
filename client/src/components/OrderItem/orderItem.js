import './orderItem.css'

function OrderItem ({ order }) {

  return (
    <div className='orderItem'>
      <p>Order ID: {order.id}</p>
      <p>Name: {order.clientName}</p>
      <p>Address:  {order.clientAddress}</p>
      <p>Phone: {order.clientPhone}</p>
      <p>Comments: {order.comments}</p>

      {order.Dishes.map((dish) =>
        <div key={dish.id}>
          <p >{dish.title}</p>
        </div>
      )}
    </div>
  )
}

export default OrderItem;