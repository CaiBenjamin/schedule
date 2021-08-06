import React, { useState, useEffect, Component} from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus, faTrash, faSms } from '@fortawesome/free-solid-svg-icons';

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

	const [shoppingList, setShoppingList] = useState('');

	console.log(shopList.state.message + "sasdk;lfjasdfjaskl;fj;alksdfj;sadk")
  
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
    loop();
	};

	const toggleComplete = (index) => {

	
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	const toggleComplete2 = (index) => {

	
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

	const handleTrash2 = (index) => {
		const newItems = [...items2];
		newItems[index].quantity = newItems[index].quantity;

		setItems2(newItems);
	
		if (index == 0) {
			setItems2(newItems.slice(1, newItems.length));
		} else {
			const tempArrayFirst = newItems.slice(0, index)
			const tempArraySecond = newItems.slice(index + 1, newItems.length);
			setItems2(tempArrayFirst.concat(tempArraySecond));
		}
		console.log(newItems);

  };
  
  const loop = () =>{
    let toPrint = '';
    let n = 0;
    console.log(toPrint + " :toPrintStart");
    while(n < items.length){
      toPrint += items[n].itemName + ""
      // console.log(toPrint + " :toPrint");
      // console.log(items[n].itemName + " :item[n].itemName ");
      // console.log(items.length + " :items length");
      // console.log("\n");
      n++;
    }

    console.log(toPrint + " :toPrintEND");
    setShoppingList(toPrint)
		console.log(shoppingList + ":shoppingList");
		console.log("\n");
		shoppingList2 = shoppingList;
		console.log(shoppingList2 + ":shoppingList2 bleh");

  }

	const mystyle = {
		color: "white",
		padding: "10px",
		fontFamily: "Arial"
    };
    
	return (
			<div className='main-container'>

					<div> 
						<h1 style={mystyle}> Hello Benjamin. The date is {time} </h1>
					</div>

					<div class="row">
						<div class="col">

							<div> Shopping List </div>
							<div className='add-item-box'>

								<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder={display} />
								<button>
								<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick(1)} />
								</button>

								<SMSForm />

			
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
						</div>

						<div class="col">
							<div> TODO List </div>
							<div className='add-item-box2'>
								<input value={inputValue2} onChange={(event2) => setInputValue2(event2.target.value)} className='add-item-input' placeholder={display2} />
								<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick(2)} />
							</div>
							<div className='item-list2'>
								{items2.map((item, index) => (
									<div className='item-container'>
										<div className='item-name' onClick={() => toggleComplete2(index)}>
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

										<div className='delete'>
											<button>
												<FontAwesomeIcon icon={faTrash} onClick={() => handleTrash2(index)} size= '4x' />
											</button>
										</div>

										

									</div>
								))}
							</div>

						</div>

						<div class="col">

						<div> Notes </div>
							<div>
							<textarea className='textbox'>

							</textarea>
							</div>
						</div>

           			</div>
					
			</div>
		
	);
};

// class shoppingList2 extends Component{
// 	constructor(props) {
// 		super(props);
//     this.state = {
//       message: shoppingList
//     };

//   }
// }

class SMSForm extends Component {
  constructor(props) {
		super(props);
		console.log("THIS GOT CALLED2");
		console.log(shoppingList2);
    this.state = {
      message: {
        to: '3016488214',
        body: shoppingList2,
      },
      submitting: false,
      error: false
    };
    this.onSubmit = this.onSubmit.bind(this);
    this.onHandleChange = this.onHandleChange.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();
    this.setState({ submitting: true });
    fetch('/api/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state.message)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
					console.log("THIS GOT CALLED");

					console.log(shopList.state.message + "PPSSSLDFJSS BEEE HEREREE")
          this.setState({
            error: false,
            submitting: false,
            message: {
              to: '3016488214',
              body: '',
            }
          });
        } else {
          this.setState({
            error: true,
            submitting: false
          });
        }
      });
  }

  onHandleChange(event) {
    const name = event.target.getAttribute('name');
    this.setState({
      message: { ...this.state.message, [name]: event.target.value }
    });
  }

  render() {
    return (
      <form
        onSubmit={this.onSubmit}
        className={this.state.error ? 'error sms-form' : 'sms-form'}
      >


      <button>
      <FontAwesomeIcon icon={faSms} disabled={this.state.submitting} />
      </button>
       
       </form>
    );
  }
}




export default App;








