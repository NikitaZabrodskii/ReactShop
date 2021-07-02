import React from 'react';

export default function Busketitems(props) {
	const {
		id,
		name,
		price,
		quantity,
		delInBusket = Function.prototype,
		inqQuantity = Function.prototype,
		decQuantity = Function.prototype,
	} = props;
	
	return (
		<li className='collection-item lictive'>
			{name} x {quantity} = {quantity * price}{' '}
			<button class='material-icons' onClick={() => inqQuantity(id)}>
				add
			</button>{' '}
			<button class='material-icons' onClick={() => decQuantity(id)}>
			remove_circle_outline
			</button>
			<span className='secondary-content'>
				<i class='material-icons basket-delete' onClick={() => delInBusket(id)}>
					close
				</i>
			</span>
		</li>
	);
}
