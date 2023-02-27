import "./css/CheckoutSection.css"
import lockLogo from "./assets/lockicon.png"

interface ICheckoutSection {
   cartQuantity: number,
   totalPrice: number | undefined
   currency: string
}

export const CheckoutSection = ({cartQuantity, totalPrice, currency}: ICheckoutSection) => {
   
   return (
      <div className="primaryContainer">
         <div className="textSection">
            Items in cart:
            <div className="textEnd">
               {cartQuantity}
            </div>
         </div>
         <div className="textSection">
            Total price of items:
            <div className="textEnd">
               {totalPrice + ",- " + currency}
            </div>
         </div>
         <div>
            <button className="checkoutButton">
               <img src={lockLogo} className="checkoutButtonIcon"/>
               Checkout
            </button>
         </div>
      </div>
   );
}