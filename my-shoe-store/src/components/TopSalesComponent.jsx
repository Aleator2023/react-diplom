import React from 'react';
import { useTopSales } from './apiHooks';

const TopSalesComponent = () => {
  const { data, loading, error } = useTopSales();

  if (loading) return (
    <div className="preloader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );

  if (error) return <div>Error: {error.message}</div>;

    return (
    <div className="top-sales">
      <h2 className="text-center">Хиты продаж!</h2>
      <div className="products-container"> {/* Новый контейнер для карточек товаров */}
        {data.map(item => (
          <div className="product-card" key={item.id}>
            <img src={item.images[0]} alt={item.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{item.title}</h3>
              <p className="product-price">{item.price} руб.</p>
              <a href="#order" className="order-button">Заказать</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSalesComponent;
