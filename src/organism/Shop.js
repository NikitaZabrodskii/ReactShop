import React, { useEffect, useState } from 'react';
import Items from './shopmoleculs/Items';
import Card from './shopmoleculs/Card';
import Preloader from './shopmoleculs/Preloader';
import Busket from './shopmoleculs/Busket';
import Alert from './Alert';

export default function Shop() {
	const [goods, setGoods] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [order, setOrder] = useState([]);
	const [isBusketShow, setShow] = useState(false);
	const [alertName, setAlertName] = useState('');

	useEffect(() => {
		fetch('https://fortniteapi.io/v1/shop?lang=en&=', {
			headers: {
				Authorization: '59daafa2-2276f836-62cd21c1-b7de8e42',
			},
		})
			.then((response) => response.json())
			.then((data) => setGoods(data.featured));
		setIsLoading(false);
	}, []);

	const addToBusket = (item) => {
		
		const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

		if (itemIndex < 0) {
			const newItem = {
				...item,
				quantity: 1,
			};
			setOrder([...order, newItem]);
		} else {
			const newOrder = order.map((orderItem, index) => {
				if (index === itemIndex) {
					return {
						...orderItem,
						quantity: orderItem.quantity + 1,
					};
				} else {
					return orderItem;
				}
			});

			setOrder(newOrder);
		}
		setAlertName(item.name)
	};

	const inqQuantity = (itemId) => {
		const newOrder = order.map((el) => {
			if (el.id === itemId) {
				const newQuantity = el.quantity + 1;
				return {
					...el,
					quantity: newQuantity,
				};
			} else {
				return el;
			}
		});
		setOrder(newOrder);
	};

	const handleAlert = () =>{
		setAlertName('')
	}
	
	const decQuantity = (itemId) => {
		const newOrder = order.map((el) => {
			if (el.id === itemId) {
				const newQuantity = el.quantity - 1;
				return {
					...el,
					quantity: newQuantity <= 0 ? 0 : newQuantity,
				};
			} else {
				return el;
			}
		});
		setOrder(newOrder);
	};

	const showBusket = () => {
		setShow(!isBusketShow);
	};

	const delInBusket = (itemId) => {
		const newOrder = order.filter((el) => el.id !== itemId);
		setOrder(newOrder);
	};

	return (
		<div className='container content'>
			<Card quantity={order.length} showBusket={showBusket} />
			{isLoading ? (
				<Preloader />
			) : (
				<Items goods={goods} addToBusket={addToBusket}  />
			)}
			{isBusketShow ? (
				<Busket
					orders={order}
					showBusket={showBusket}
					delInBusket={delInBusket}
					inqQuantity={inqQuantity}
					decQuantity={decQuantity}
				/>
			) : null}
			{
				alertName && <Alert name ={alertName} handleAlert ={handleAlert}/>
				
			}
		</div>
	);
}
