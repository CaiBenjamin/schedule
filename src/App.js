import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


// import {getCurrentDate} from './utils'
// console.log(getCurrentDate())

const App = () => {
	// HINT: each "item" in our list names a name, a boolean to tell if its been completed, and a quantity
	const time = new Date().toDateString();
	console.log(time);
	//change string to better

	const [items, setItems] = useState([
		{ itemName: 'item 1 dsfasdkfjl', quantity: 1, isSelected: false },
		{ itemName: 'item 2', quantity: 3, isSelected: true },
		{ itemName: 'item 3', quantity: 2, isSelected: false },
	]);
	const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(6);
	const display = "Add to Shopping List";

	const [items2, setItems2] = useState([
		{ itemName: 'item 69', quantity: 1, isSelected: false },
		{ itemName: 'item 12', quantity: 3, isSelected: true },
		{ itemName: 'item poop', quantity: 2, isSelected: false },
	]);

	const [inputValue2, setInputValue2] = useState('');
	const [totalItemCount2, setTotalItemCount2] = useState(6);
	const display2 = "Add to TODO List";

	const [items3, setItems3] = useState([
	]);

	const [inputValue3, setInputValue3] = useState('');
	const [totalItemCount3, setTotalItemCount3] = useState(6);
	const display3 = "Type Notes here"


	const handleAddButtonClick = (num) => {
		//asdfsadfasdfsadf
		// max 16 characters
	
		if (num == 1) {
			var inputv = inputValue
		} else {
			var inputv = inputValue2
		}

		console.log(inputv + ": inputV" + inputv.length);
		
		var temp = inputv.substring(0,13) + inputv.substring(13,inputv.length);
		console.log(temp)

		const newItem = {
			itemName: temp,
			quantity: 1,
			isSelected: false,
		};

		if (num == 1) {
			const newItems = [...items, newItem];
			setItems(newItems);
		} else {
			const newItems = [...items2, newItem];
			setItems2(newItems);
		}
		setInputValue('');
	};

	const toggleComplete = (index) => {
		const newItems = [...items2];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems2(newItems);
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity--;
		setItems(newItems);
		calculateTotal();
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

	const handleTrash = (index) => {
		const newItems = [...items];
		newItems[index].quantity = newItems[index].quantity + 69;

		setItems(newItems);
		calculateTotal();
		console.log(newItems);
		console.log(index + "index");
		console.log(newItems.length + "length");

		if (index == 0) {
			setItems(newItems.slice(1, newItems.length));
		} else {
			const tempArrayFirst = newItems.slice(0, index)
			const tempArraySecond = newItems.slice(index + 1, newItems.length);
			setItems(tempArrayFirst.concat(tempArraySecond));
		}
		console.log(newItems);

	};

	// const http = require('http');
	// const express = require('express');
	// const MessagingResponse = require('twilio').twiml.MessagingResponse;

	// const app = express();
	// app.post('/sms', (req, res) => {
	// const twiml = new MessagingResponse();

	// twiml.message('The Robots are coming! Head for the hills!');

	// res.writeHead(200, {'Content-Type': 'text/xml'});
	// res.end(twiml.toString());
	// });

	// http.createServer(app).listen(1337, () => {
	// console.log('Express server listening on port 1337');
	// });


	return (
			<div className='main-container'>

					<div className='add-item-box'>
						<div> Hello Benjamin. The date is {time} </div>
					</div>

					<Row>
						<Col>
							<div> Shopping List </div>
							<div className='add-item-box'>
								<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder={display} />
								<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick(1)} />
							</div>
							<div className='item-list'>
								{items.map((item, index) => (
									<div className='item-container'>
										<div className='item-name' onClick={() => toggleComplete(index)}>
											{item.isSelected ? (
												<>
													<span className='completed'>{item.itemName}</span>
												</>
											) : (
													<>
														<span>{item.itemName}</span>
													</>
												)}
										</div>
										<div className='quantity'>
											<button>
												<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
											</button>
											<span> {item.quantity} </span>
											<button>
												<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
											</button>
											<button>
												<FontAwesomeIcon icon={faTrash} onClick={() => handleTrash(index)} size='2x' />
											</button>
										</div>
									</div>
								))}
							</div>
							{/* <div className='total'>Total: {totalItemCount}</div> */}
						</Col>
						<Col>
							<div> TODO List </div>
							<div className='add-item-box2'>
								<input value={inputValue2} onChange={(event2) => setInputValue2(event2.target.value)} className='add-item-input' placeholder={display2} />
								<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick(2)} />
							</div>
							<div className='item-list2'>
								{items2.map((item, index) => (
									<div className='item-container'>
										<div className='item-name' onClick={() => toggleComplete(index)}>
											{item.isSelected ? (
												<>
													<span className='completed'>{item.itemName}</span>
												</>
											) : (
													<>
														<span>{item.itemName}</span>
													</>
												)}
										</div>

									</div>
								))}
							</div>

						</Col>
						<Col>
						<div> Notes </div>
							<div>
							<textarea className='textbox'>
								{/* <input value={inputValue3} className='add-item-input' placeholder={display3} /> */}

							</textarea>
							</div>
						</Col>
					
					</Row>

			</div>
		
	);
};


export default App;
