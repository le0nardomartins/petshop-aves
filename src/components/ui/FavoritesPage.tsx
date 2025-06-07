import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingCart, Trash2 } from 'lucide-react';
import type { Product } from '../../types';

interface FavoritesPageProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: Product[];
  onRemoveFromFavorites: (productId: string) => void;
  onAddToCart: (product: Product) => void;
  onClearFavorites: () => void;
}

export const FavoritesPage: React.FC<FavoritesPageProps> = ({
  isOpen,
  onClose,
  favorites,
  onRemoveFromFavorites,
  onAddToCart,
  onClearFavorites
}) => {
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

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Heart className="w-6 h-6 text-red-500 fill-red-500" />
                <h2 className="text-2xl font-display font-bold">
                  Meus Favoritos
                </h2>
                <span className="bg-red-100 text-red-600 text-sm font-medium px-3 py-1 rounded-full">
                  {favorites.length}
                </span>
              </div>
              
              <div className="flex items-center space-x-2">
                {favorites.length > 0 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClearFavorites}
                    className="flex items-center space-x-2 text-red-600 hover:text-red-700 text-sm font-medium px-3 py-2 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Limpar Tudo</span>
                  </motion.button>
                )}
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </motion.button>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6">
              {favorites.length === 0 ? (
                // Empty state
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="text-8xl mb-6">💔</div>
                  <h3 className="text-2xl font-semibold text-gray-700 mb-3">
                    Nenhum favorito ainda
                  </h3>
                  <p className="text-gray-500 mb-8 max-w-md">
                    Explore nossa coleção de pássaros especiais e adicione seus favoritos clicando no coração
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="btn-primary"
                  >
                    Explorar Pássaros
                  </motion.button>
                </div>
              ) : (
                // Favorites grid
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {favorites.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="card overflow-hidden group"
                      >
                        {/* Image */}
                        <div className="relative aspect-square overflow-hidden">
                          <img
                            src={product.images[0]}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                          
                          {/* Remove from favorites */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => onRemoveFromFavorites(product.id)}
                            className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-lg hover:bg-red-50 transition-colors"
                          >
                            <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                          </motion.button>

                          {/* Quick add to cart */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => onAddToCart(product)}
                            className="absolute bottom-2 right-2 p-2 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-colors opacity-0 group-hover:opacity-100"
                          >
                            <ShoppingCart className="w-4 h-4" />
                          </motion.button>
                        </div>

                        {/* Content */}
                        <div className="p-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs text-primary-600 font-medium uppercase">
                              {product.category}
                            </span>
                            {product.originalPrice && (
                              <span className="bg-accent-500 text-white text-xs px-2 py-1 rounded-full">
                                -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                              </span>
                            )}
                          </div>

                          <h3 className="font-semibold text-gray-900 mb-1 line-clamp-1">
                            {product.name}
                          </h3>
                          
                          <p className="text-sm text-gray-600 mb-3 italic">
                            {product.species}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <span className="text-lg font-bold text-gray-900">
                                R$ {product.price.toFixed(2)}
                              </span>
                              {product.originalPrice && (
                                <span className="text-sm text-gray-500 line-through">
                                  R$ {product.originalPrice.toFixed(2)}
                                </span>
                              )}
                            </div>
                            
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => onAddToCart(product)}
                              disabled={!product.inStock}
                              className="text-primary-600 hover:text-primary-700 font-medium text-sm disabled:opacity-50"
                            >
                              {product.inStock ? 'Comprar' : 'Esgotado'}
                            </motion.button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              )}
            </div>

            {/* Footer */}
            {favorites.length > 0 && (
              <div className="border-t border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => {
                      favorites.forEach(product => onAddToCart(product));
                    }}
                    className="flex-1 btn-primary"
                  >
                    Adicionar Todos ao Carrinho
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={onClose}
                    className="flex-1 bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-medium py-3 px-6 rounded-xl transition-all duration-300"
                  >
                    Continuar Navegando
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