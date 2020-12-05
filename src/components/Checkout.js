import React from 'react';
import '../styles/Checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';


function Checkout() {
  const [{basket}] = useStateValue();

  return (
    <div className="checkout">
      <img 
        className="checkout__ad"
        src="https://images-na.ssl-images-amazon.com/images/G/01/subsamazon/merch/2020-07/SnDBox_ILM_July2020_650x45_ToysKids._CB410496909_.jpg"
        alt="ad image"
      />
      {/* ternary expression */}
      {basket?.length === 0 ? (
        <div>
          <h2>Your Shopping Basket is empty</h2>
          <p>
            You have no items in your basket. To buy one or more items, click
            "Add to basket" next to the item.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* list lout all of the checkout product */}
          {basket?.map((item) => {
            return (
            <CheckoutProduct 
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
            )
          }
          )}
        </div>
      )}
    </div>
  )
}

export default Checkout
