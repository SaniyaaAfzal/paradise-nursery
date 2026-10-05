```jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './CartSlice';

const plants = [
  // Indoor Plants
  {
    id: 1,
    name: 'Snake Plant',
    price: 25,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b8a'
  },
  {
    id: 2,
    name: 'Peace Lily',
    price: 30,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee'
  },
  {
    id: 3,
    name: 'Monstera',
    price: 35,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1614594575746-7f6e4e4c3b5e'
  },
  {
    id: 4,
    name: 'Spider Plant',
    price: 20,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333'
  },
  {
    id: 5,
    name: 'ZZ Plant',
    price: 28,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1632207691144-0e56f9e6c6e8'
  },
  {
    id: 6,
    name: 'Aloe Vera',
    price: 22,
    category: 'Indoor Plants',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09'
  },

  // Succulents
  {
    id: 7,
    name: 'Echeveria',
    price: 18,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1525490829609-d166ddb58678'
  },
  {
    id: 8,
    name: 'Jade Plant',
    price: 24,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333'
  },
  {
    id: 9,
    name: 'Haworthia',
    price: 19,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc'
  },
  {
    id: 10,
    name: 'String of Pearls',
    price: 27,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee'
  },
  {
    id: 11,
    name: 'Zebra Haworthia',
    price: 21,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09'
  },
  {
    id: 12,
    name: 'Burro Tail',
    price: 26,
    category: 'Succulents',
    image: 'https://images.unsplash.com/photo-1525490829609-d166ddb58678'
  },

  // Flowering Plants
  {
    id: 13,
    name: 'Rose Plant',
    price: 32,
    category: 'Flowering Plants',
    image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322'
  },
  {
    id: 14,
    name: 'Orchid',
    price: 40,
    category: 'Flowering Plants',
    image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb'
  },
  {
    id: 15,
    name: 'Anthurium',
    price: 36,
    category: 'Flowering Plants',
    image: 'https://images.unsplash.com/photo-1593691509543-c55fb32e5cee'
  },
  {
    id: 16,
    name: 'African Violet',
    price: 29,
    category: 'Flowering Plants',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc'
  },
  {
    id: 17,
    name: 'Begonia',
    price: 31,
    category: 'Flowering Plants',
    image: 'https://images.unsplash.com/photo-1496062031456-07b8f162a322'
  },
  {
    id: 18,
    name: 'Geranium',
    price: 27,
    category: 'Flowering Plants',
    image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb'
  }
];

function ProductList() {
  const dispatch = useDispatch();

  const cartItems = useSelector(
    (state) => state.cart.items
  );

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const categories = [
    'Indoor Plants',
    'Succulents',
    'Flowering Plants'
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  const isInCart = (id) => {
    return cartItems.some((item) => item.id === id);
  };

  return (
    <div className="product-page">

      {/* Navigation Bar */}
      <nav className="navbar">
        <h2>Paradise Nursery</h2>

        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/plants">Plants</a>
          <a href="/cart">
            🛒 Cart ({cartCount})
          </a>
        </div>
      </nav>

      <main className="product-list">

        <h1>Our Plants</h1>

        {categories.map((category) => (
          <section key={category} className="category-section">

            <h2>{category}</h2>

            <div className="plant-grid">

              {plants
                .filter((plant) => plant.category === category)
                .map((plant) => (

                  <div
                    className="plant-card"
                    key={plant.id}
                  >

                    <img
                      src={plant.image}
                      alt={plant.name}
                    />

                    <h3>{plant.name}</h3>

                    <p>
                      ${plant.price}
                    </p>

                    <button
                      onClick={() => handleAddToCart(plant)}
                      disabled={isInCart(plant.id)}
                    >
                      {isInCart(plant.id)
                        ? 'Added to Cart'
                        : 'Add to Cart'}
                    </button>

                  </div>

                ))}

            </div>
          </section>
        ))}

      </main>
    </div>
  );
}

export default ProductList;
```
