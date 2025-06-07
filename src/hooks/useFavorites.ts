import { useState, useCallback } from 'react';
import type { Product } from '../types';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  const addToFavorites = useCallback((product: Product) => {
    setFavorites(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev; // Já está nos favoritos
      }
      return [...prev, product];
    });
  }, []);

  const removeFromFavorites = useCallback((productId: string) => {
    setFavorites(prev => prev.filter(item => item.id !== productId));
  }, []);

  const toggleFavorite = useCallback((product: Product) => {
    setFavorites(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      }
      return [...prev, product];
    });
  }, []);

  const isFavorite = useCallback((productId: string) => {
    return favorites.some(item => item.id === productId);
  }, [favorites]);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return {
    favorites,
    addToFavorites,
    removeFromFavorites,
    toggleFavorite,
    isFavorite,
    clearFavorites,
    favoriteCount: favorites.length
  };
}; 