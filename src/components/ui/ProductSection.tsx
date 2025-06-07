import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { products, categories } from '../../data/products';
import type { Product } from '../../types';

interface ProductSectionProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onToggleFavorite: (product: Product) => void;
  isFavorite: (productId: string) => boolean;
  searchQuery: string;
}

export const ProductSection: React.FC<ProductSectionProps> = ({
  onAddToCart,
  onQuickView,
  onToggleFavorite,
  isFavorite,
  searchQuery
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [showFilters, setShowFilters] = useState(false);

  const filteredAndSortedProducts = useMemo(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.species.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.characteristics.some(char => char.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(product => product.category === selectedCategory);
    }

    // Sort products
    switch (sortBy) {
      case 'featured':
        filtered = [...filtered].sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return 0;
        });
        break;
      case 'price-low':
        filtered = [...filtered].sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = [...filtered].sort((a, b) => b.price - a.price);
        break;
      case 'name':
        filtered = [...filtered].sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  }, [selectedCategory, sortBy, searchQuery]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="gradient-text">Nossos Pássaros</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça nossa coleção exclusiva de pássaros especiais, criados com amor e cuidado
          </p>
          
          {/* Search Results Info */}
          {searchQuery.trim() && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 p-3 bg-primary-50 rounded-lg inline-block"
            >
              <p className="text-sm text-primary-700">
                {filteredAndSortedProducts.length} resultado(s) para "<strong>{searchQuery}</strong>"
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          {/* Filter Toggle for Mobile */}
          <div className="flex items-center justify-between mb-4 md:hidden">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 btn-primary"
            >
              <Filter className="w-4 h-4" />
              <span>Filtros</span>
            </button>
          </div>

          {/* Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} md:block`}>
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 mb-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-primary-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Todos ({products.length})
              </motion.button>
              
              {categories.map(category => {
                const count = products.filter(p => p.category === category.id).length;
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-full font-medium transition-all ${
                      selectedCategory === category.id
                        ? 'bg-primary-500 text-white shadow-lg'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.icon} {category.name} ({count})
                  </motion.button>
                );
              })}
            </div>

            {/* Sort Options */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Ordenar por:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="featured">Destaques</option>
                  <option value="price-low">Menor Preço</option>
                  <option value="price-high">Maior Preço</option>
                  <option value="name">Nome A-Z</option>
                </select>
              </div>

              <div className="text-sm text-gray-600">
                {filteredAndSortedProducts.length} {filteredAndSortedProducts.length === 1 ? 'produto' : 'produtos'}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                onToggleFavorite={onToggleFavorite}
                isFavorite={isFavorite(product.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredAndSortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🦜</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {searchQuery.trim() ? 'Nenhum resultado encontrado' : 'Nenhum pássaro encontrado'}
            </h3>
            <p className="text-gray-500 mb-4">
              {searchQuery.trim() 
                ? `Não encontramos pássaros que correspondem a "${searchQuery}"`
                : 'Tente ajustar os filtros para encontrar o que procura'
              }
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSortBy('featured');
              }}
              className="btn-primary"
            >
              {searchQuery.trim() ? 'Ver Todos os Produtos' : 'Limpar Filtros'}
            </button>
          </motion.div>
        )}

        {/* Load More Button (for future pagination) */}
        {filteredAndSortedProducts.length > 0 && filteredAndSortedProducts.length >= 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white border-2 border-primary-500 text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-xl transition-all duration-300"
            >
              Ver Mais Produtos
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}; 