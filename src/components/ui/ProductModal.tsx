import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart, ShoppingCart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product } from '../../types';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: boolean;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  isOpen,
  onClose,
  onAddToCart,
  onToggleFavorite,
  isFavorite
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

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
            className="fixed inset-0 bg-black/60 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            className="fixed inset-4 md:inset-8 lg:inset-16 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
          >
            <div className="flex flex-col md:flex-row h-full">
              {/* Image Section */}
              <div className="md:w-1/2 relative bg-gray-50">
                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                >
                  <X className="w-5 h-5" />
                </motion.button>

                {/* Image carousel */}
                <div className="relative h-full">
                  <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Navigation arrows */}
                  {product.images.length > 1 && (
                    <>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/80 rounded-full shadow-lg hover:bg-white transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </motion.button>
                    </>
                  )}

                  {/* Image indicators */}
                  {product.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {product.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                          }`}
                        />
                      ))}
                    </div>
                  )}

                  {/* Badges */}
                  <div className="absolute top-4 left-4 space-y-2">
                    {discount > 0 && (
                      <span className="bg-accent-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        -{discount}%
                      </span>
                    )}
                    {product.featured && (
                      <span className="bg-secondary-500 text-white text-sm font-bold px-3 py-1 rounded-full block">
                        Destaque
                      </span>
                    )}
                    {!product.inStock && (
                      <span className="bg-gray-500 text-white text-sm font-bold px-3 py-1 rounded-full block">
                        Esgotado
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Content Section */}
              <div className="md:w-1/2 flex flex-col">
                <div className="flex-1 p-6 md:p-8 overflow-y-auto">
                  {/* Category and rating */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-primary-600 font-medium uppercase tracking-wide">
                      {product.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">4.8</span>
                    </div>
                  </div>

                  {/* Name and species */}
                  <h1 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  <p className="text-lg text-gray-600 mb-4 italic">
                    {product.species}
                  </p>

                  {/* Price */}
                  <div className="flex items-center space-x-3 mb-6">
                    <span className="text-3xl font-bold text-gray-900">
                      R$ {product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xl text-gray-500 line-through">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Info */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <span className="text-sm text-gray-500">Idade:</span>
                      <p className="font-medium">{product.age}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500">Sexo:</span>
                      <p className="font-medium capitalize">{product.sex}</p>
                    </div>
                  </div>

                  {/* Characteristics */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Características</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.characteristics.map((char, index) => (
                        <span
                          key={index}
                          className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Care instructions */}
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Cuidados Especiais</h3>
                    <ul className="space-y-2">
                      {product.care.map((care, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <span className="text-primary-500 mt-1">•</span>
                          <span className="text-gray-700">{care}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="border-t border-gray-200 p-6 md:p-8">
                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onToggleFavorite(product)}
                      className="flex-shrink-0 p-3 border-2 border-gray-300 rounded-xl hover:border-red-300 hover:bg-red-50 transition-colors"
                    >
                      <Heart 
                        className={`w-5 h-5 ${
                          isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'
                        }`}
                      />
                    </motion.button>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => onAddToCart(product)}
                      disabled={!product.inStock}
                      className="flex-1 btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      <span>
                        {product.inStock ? 'Adicionar ao Carrinho' : 'Indisponível'}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}; 