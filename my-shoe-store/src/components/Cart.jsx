import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import CheckoutForm from './CheckoutForm';
import '../css/cart.css'; 

const Cart = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  
    useEffect(() => {
      // Подписка на изменения localStorage
      const handleStorageChange = () => {
        setItems(JSON.parse(localStorage.getItem('cart')) || []);
      };
  
      window.addEventListener('storage', handleStorageChange);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, []);

    const handleRemove = (itemId) => {
        const updatedItems = items.filter(item => item.id !== itemId);
        localStorage.setItem('cart', JSON.stringify(updatedItems)); // Сначала обновляем localStorage
        setItems(updatedItems); // Затем обновляем состояние
      };

  const handleQuantityChange = (itemId, quantity) => {
    const updatedItems = items.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: parseInt(quantity, 10) };
      }
      return item;
    });
    setItems(updatedItems);
    // Обновляем localStorage
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  };

  const totalCost = items && items.length
  ? items.reduce((total, item) => total + (item.price * item.quantity), 0)
  : 0;

  return (
    <div>
      <h1>Корзина</h1>
      {items.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onRemove={handleRemove}
          onQuantityChange={handleQuantityChange}
        />
      ))}
      <div>Общая стоимость: {totalCost} руб.</div>
      <h1>Оформить заказ</h1>
      <CheckoutForm items={items} />
    </div>
  );
};

export default Cart;