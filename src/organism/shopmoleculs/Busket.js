import React from 'react';
import Busketitems from './Busketitems';



export default function Busket(props) {





	

   
	const {
		orders = [],
		showBusket = Function.prototype,
		delInBusket = Function.prototype,
		inqQuantity = Function.prototype,
		decQuantity = Function.prototype
	} = props;
   

	const TotalPrice = orders.reduce((sum, el) => {
		return sum + el.price * el.quantity;
	}, 0);

	return (
		<ul className='collection basket-list'>
			<li className='collection-item active'>Корзина </li>
			{orders.length ? (
				orders.map((order) => (
					<Busketitems
						id={order.id}
						name={order.name}
						price={order.price}
						quantity={order.quantity}
						delInBusket={delInBusket}
						decQuantity ={decQuantity}
						inqQuantity = {inqQuantity}

                        
					/>
				))
			) : (
				<li className='collection-item '>Корзина пуста</li>
			)}
			<li className='collection-item'>Общая стоимость: { TotalPrice} </li>
			<i class='material-icons basket-close' onClick={showBusket}>
				close
			</i>
		</ul>
	);
}
