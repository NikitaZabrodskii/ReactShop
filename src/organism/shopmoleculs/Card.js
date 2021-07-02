function Card(props) {
    const { quantity = 0 , showBusket=Function.prototype} = props;
    return (
        <div
            className='cart blue darken-4 white-text'
          onClick={showBusket}
        >
            <i className='material-icons'>shopping_cart</i>
            {quantity ? (
                <span className='cart-quantity'>{quantity}</span>
            ) : 0}

        </div>
    );
}

export default Card;