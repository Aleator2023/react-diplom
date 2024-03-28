import React, { useState } from 'react';
import { useCategories, useItems } from './apiHooks';

const CatalogComponent = () => {
  const { categories, loading: loadingCategories, error: errorCategories } = useCategories();
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [offset, setOffset] = useState(0);
  const { items, loading: loadingItems, error: errorItems, hasMore } = useItems(selectedCategoryId, offset);

  const handleCategoryChange = (categoryId) => {
    setSelectedCategoryId(categoryId);
    setOffset(0); // Сбросить offset при смене категории
  };

  const handleLoadMore = () => {
    setOffset(prevOffset => prevOffset + 6); // Увеличиваем offset для подгрузки следующих элементов
  };

  return (
    <section className="catalog">
      <h2 className="text-center">Каталог</h2>
      {loadingCategories && <div className="preloader">Загрузка категорий...</div>}
      {errorCategories && <div>Error: {errorCategories.message}</div>}
      <div>
      {categories.map(category => (
  <button
    key={category.id}
    onClick={() => handleCategoryChange(category.id)}
    className={`category-button ${selectedCategoryId === category.id ? 'active' : ''}`}
  >
    {category.title}
  </button>
))}
      </div>
      {loadingItems && <div className="preloader">Загрузка товаров...</div>}
      {errorItems && <div>Error: {errorItems.message}</div>}
      <div className="products-container">
        {items.map(item => (
          <div className="product-card" key={item.id}>
            <img src={item.images[0]} alt={item.title} className="product-image" />
            <div className="product-info">
              <h3 className="product-title">{item.title}</h3>
              <p className="product-price">{item.price} руб.</p>
              <button className="order-button">Заказать</button>
            </div>
          </div>
        ))}
      </div>
      {hasMore && !loadingItems && (
        <button onClick={handleLoadMore} disabled={loadingItems}>Загрузить ещё</button>
      )}
    </section>
  );
};

export default CatalogComponent;
