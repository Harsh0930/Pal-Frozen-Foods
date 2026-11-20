import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
const BrandContext = createContext(null);
export const brandNames = { 'pal-fresh': 'Pal Fresh', frozzo: 'Frozzo' };
export function BrandProvider({ children }) {
  const [brand, setBrand] = useState('pal-fresh');
  useEffect(() => {
    document.documentElement.dataset.brand = brand;
  }, [brand]);
  const value = useMemo(() => ({ brand, setBrand }), [brand]);
  return <BrandContext.Provider value={value}>{children}</BrandContext.Provider>;
}
export function useBrand() {
  return useContext(BrandContext);
}
