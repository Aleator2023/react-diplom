import React from 'react';
import '../css/cartitem.css';

const CartItem = ({ item, onRemove, onQuantityChange, index }) => {
  return (
    <tr className="cart-item">
      <td>{index + 1}</td>
      <td><a href={`/products/${item.id}.html`}>{item.name}</a></td>
      <td>{item.size} US</td>
      <td>
        <input
          type="number"
          className="form-control"
          value={item.quantity}
          onChange={(e) => onQuantityChange(item.id, e.target.value)}
        />
      </td>
      <td className="price">{item.price.toLocaleString()} руб.</td>
      <td className="total">{(item.price * item.quantity).toLocaleString()} руб.</td>
      <td className="action-buttons">
        <button className="btn btn-outline-danger btn-sm" onClick={() => onRemove(item.id)}>
          Удалить
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
