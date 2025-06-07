import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, Trash2 } from 'lucide-react';
import type { Cart } from '../../types';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cart: Cart;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

export const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
  onCheckout
}) => {
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    onCheckout();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5 text-primary-600" />
                <h2 className="text-xl font-display font-semibold">
                  Meu Carrinho
                </h2>
                <span className="bg-primary-100 text-primary-600 text-sm font-medium px-2 py-1 rounded-full">
                  {itemCount}
                </span>
              </div>
              
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto">
              {cart.items.length === 0 ? (
                // Empty state
                <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                  <div className="text-6xl mb-4">🛒</div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Carrinho vazio
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Adicione alguns pássaros especiais ao seu carrinho
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="btn-primary"
                  >
                    Continuar Comprando
                  </motion.button>
                </div>
              ) : (
                // Cart items
                <div className="p-4 space-y-4">
                  <AnimatePresence>
                    {cart.items.map((item) => (
                      <motion.div
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="bg-gray-50 rounded-xl p-4"
                      >
                        <div className="flex space-x-4">
                          {/* Product Image */}
                          <div className="w-16 h-16 rounded-lg overflow-hidden bg-white">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-gray-900 truncate">
                              {item.product.name}
                            </h4>
                            <p className="text-sm text-gray-500 truncate">
                              {item.product.species}
                            </p>
                            <p className="text-sm font-semibold text-primary-600">
                              R$ {item.product.price.toFixed(2)}
                            </p>
                          </div>

                          {/* Remove button */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => onRemoveItem(item.product.id)}
                            className="p-1 hover:bg-red-100 text-red-500 rounded-full transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </motion.button>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center space-x-2">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                              className="p-1 hover:bg-white rounded-full transition-colors border border-gray-300"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-3 h-3" />
                            </motion.button>
                            
                            <span className="font-medium min-w-[2rem] text-center">
                              {item.quantity}
                            </span>
                            
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                              className="p-1 hover:bg-white rounded-full transition-colors border border-gray-300"
                            >
                              <Plus className="w-3 h-3" />
                            </motion.button>
                          </div>

                          <span className="font-semibold text-gray-900">
                            R$ {(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>

                  {/* Clear Cart Button */}
                  {cart.items.length > 0 && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={onClearCart}
                      className="w-full text-red-600 hover:text-red-700 text-sm font-medium py-2 transition-colors"
                    >
                      Limpar Carrinho
                    </motion.button>
                  )}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total:</span>
                  <span className="text-2xl font-bold text-primary-600">
                    R$ {cart.total.toFixed(2)}
                  </span>
                </div>

                {/* Shipping Info */}
                <div className="text-sm text-gray-600 bg-green-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <span className="text-green-600">✓</span>
                    <span>Frete grátis para compras acima de R$ 500</span>
                  </div>
                  {cart.total < 500 && (
                    <div className="mt-1">
                      Faltam R$ {(500 - cart.total).toFixed(2)} para frete grátis
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleCheckout}
                    className="w-full btn-primary text-lg py-4"
                  >
                    Finalizar Compra
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="w-full bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 rounded-xl transition-all duration-300"
                  >
                    Continuar Comprando
                  </motion.button>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 