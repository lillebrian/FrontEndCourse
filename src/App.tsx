import { Dispatch, SetStateAction, useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import "@fontsource/roboto";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "@fontsource/roboto/100-italic.css";
import "@fontsource/roboto/300-italic.css";
import "@fontsource/roboto/400-italic.css";
import "@fontsource/roboto/500-italic.css";
import "@fontsource/roboto/700-italic.css";
import "@fontsource/roboto/900-italic.css";
import ListItem from './components/listItem'
import './App.css'
import './css/MainLayout.css'
import './css/Checkout.css'
import logo from './assets/shoppingbag.png'
import { itemList, storeItem } from './store/Items'
import { CheckoutSection } from './CheckoutSection';



export interface CartItem {
  id: string,
  specificItem: storeItem,
  quantity: number,
}

function App() {
  const currency = "DKK"
  const [price, setPrice] = useState<number>();
  const [items, setItems] = useState<CartItem[]>(itemList.map((item, i) => {
    return {
      id: item.id,
      specificItem: item,
      quantity: 1,
  }}));
  
  // UPDATES THE TOTAL PRICE ON CART CHANGE
  useEffect(() => {
    console.log(price);
    setPrice(totalPrice())
 }, [items])
  
  
  const handleItemChange = (index: number, id: string, value: number) => {
    console.log(index, id, value)
    const updatedItems = [...items]
    if(!updatedItems[index].id.match(id))
      return alert("Ikke rigtig genstand. Noget gik galt!")
    if(value < 0)
      return
    updatedItems[index].quantity = value
    setItems(updatedItems)
  }
  
  // CALCULATES TOTAL PRICE
  let totalPrice = () => { 
    let s: number = 0;
    items.forEach(item => s+= item.quantity*item.specificItem.price)
    return s;
  }
  
  return (
    <div className="App">
      <div className='flexContainer'>
        <div className='box'>
          <h1> Checkout Flow </h1>
        </div>
        <div className='box'>
          <img src={logo} className="shoppingLogo" alt="TEST"></img>
          <h1 className='title'> My Cart </h1>
        </div>
        <div className='cartBox'>
          <div className='Checkout'>
            <div className='itemBox'>
              {items.map((t,i) => <ListItem item={t} handleChange={handleItemChange} index={i} key={i} />)}
            </div>
            <div className='checkoutBox'>
              <CheckoutSection cartQuantity={items.length} totalPrice={price} currency={currency}/>
            </div>
        </div>
          </div>
      </div>
    </div>
  )
}

export default App
