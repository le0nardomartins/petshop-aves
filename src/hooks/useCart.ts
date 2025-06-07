import { useState, useCallback } from 'react';
import type { Cart, Product } from '../types';

export const useCart = () => {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItemIndex = prevCart.items.findIndex(item => item.product.id === product.id);
      
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevCart.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + quantity
        };
        
        return {
          items: updatedItems,
          total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        };
      } else {
        const newItems = [...prevCart.items, { product, quantity }];
        return {
          items: newItems,
          total: newItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
        };
      }
    });
  }, []);

  const removeFromCart = useCallback((productId: string) => {
    setCart(prevCart => {
      const updatedItems = prevCart.items.filter(item => item.product.id !== productId);
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    });
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart(prevCart => {
      const updatedItems = prevCart.items.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      );
      return {
        items: updatedItems,
        total: updatedItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0)
      };
    });
  }, [removeFromCart]);

  const clearCart = useCallback(() => {
    setCart({ items: [], total: 0 });
  }, []);

  const getItemCount = useCallback(() => {
    return cart.items.reduce((sum, item) => sum + item.quantity, 0);
  }, [cart.items]);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount
  };
}; 