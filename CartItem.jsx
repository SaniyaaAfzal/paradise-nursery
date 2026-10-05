```jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  removeItem,
  updateQuantity
} from './CartSlice';

function CartItem() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const totalAmount = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  const handleIncrease = (item) => {
    dispatch(
      updateQuantity({
        id: item.id,
        quantity: item.quantity + 1
      })
    );
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1
        })
      );
    }
  };

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleCheckout = () => {
    alert('Coming Soon!');
  };

  return (
    <div className="cart-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">Cart</a>
        </div>
      </nav>

      <main className="cart-container">

        <h1>Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <h2>Your cart is empty</h2>

            <a href="/plants">
              <button>
                Continue Shopping
              </button>
            </a>
          </div>
        ) : (
          <>
            {cartItems.map((item) => (

              <div
                className="cart-item"
                key={item.id}
              >

                {/* Plant Thumbnail */}
                <img
                  src={item.image}
                  alt={item.name}
                />

                {/* Plant Details */}
                <div className="item-details">

                  <h3>{item.name}</h3>

                  <p>
                    Unit Price: ${item.price}
                  </p>

                  <p>
                    Total:
                    {' '}
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>

                </div>

                {/* Quantity Controls */}
                <div className="quantity-controls">

                  <button
                    onClick={() =>
                      handleDecrease(item)
                    }
                  >
                    -
                  </button>

                  <span>
                    {item.quantity}
                  </span>

                  <button
                    onClick={() =>
                      handleIncrease(item)
                    }
                  >
                    +
                  </button>

                </div>

                {/* Delete Button */}
                <button
                  className="delete-btn"
                  onClick={() =>
                    handleRemove(item.id)
                  }
                >
                  Delete
                </button>

              </div>
            ))}

            {/* Cart Summary */}
            <div className="cart-summary">

              <h2>
                Total Amount: $
                {totalAmount.toFixed(2)}
              </h2>

              {/* Checkout */}
              <button
                className="checkout-btn"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              {/* Continue Shopping */}
              <a href="/plants">
                <button className="continue-btn">
                  Continue Shopping
                </button>
              </a>

            </div>
          </>
        )}

      </main>
    </div>
  );
}

export default CartItem;
```

### ✅ How this satisfies Task 7

| Grading requirement            | Included                 |
| ------------------------------ | ------------------------ |
| Show total cart amount         | ✅                        |
| Show total cost for each plant | ✅                        |
| Thumbnail for each plant       | ✅                        |
| Plant name                     | ✅                        |
| Unit price                     | ✅                        |
| Increase quantity              | ✅                        |
| Decrease quantity              | ✅                        |
| Delete item                    | ✅                        |
| Checkout button                | ✅ Shows **Coming Soon!** |
| Continue Shopping button       | ✅                        |
| Navbar                         | ✅                        |
| Home / Plants / Cart links     | ✅                        |

### 📁 File location

If your project structure is:

```text
paradise-nursery/
└── src/
    ├── App.jsx
    ├── App.css
    ├── CartSlice.jsx
    ├── ProductList.jsx
    └── CartItem.jsx
```

your GitHub URL will be:

```text
https://github.com/YourUsername/YourRepository/blob/main/src/CartItem.jsx
```

### ⚠️ Important

Make sure the import matches where your `CartSlice.jsx` actually is.

If both files are directly inside `src`:

```jsx
import { removeItem, updateQuantity } from './CartSlice';
```

If `CartSlice.jsx` is inside `src/redux`:

```jsx
import { removeItem, updateQuantity } from './redux/CartSlice';
```

**Task 7 answer box → paste only the public GitHub URL of `CartItem.jsx`.**
