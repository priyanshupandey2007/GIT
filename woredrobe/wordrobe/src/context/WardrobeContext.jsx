import React, { createContext, useContext, useState, useEffect } from 'react';

const WardrobeContext = createContext();

export const WardrobeProvider = ({ children }) => {
  const [items, setItems] = useState(() => {
    const saved = localStorage.getItem('boutique_wardrobe');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('boutique_wardrobe', JSON.stringify(items));
  }, [items]);

  const addItem = (item) => setItems([...items, { ...item, id: Date.now() }]);
  const removeItem = (id) => setItems(items.filter(i => i.id !== id));

  return (
    <WardrobeContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </WardrobeContext.Provider>
  );
};

export const useWardrobe = () => useContext(WardrobeContext);