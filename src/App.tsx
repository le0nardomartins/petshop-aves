import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/ui/HeroSection';
import { ProductSection } from './components/ui/ProductSection';
import { CartSidebar } from './components/ui/CartSidebar';
import { FavoritesPage } from './components/ui/FavoritesPage';
import { CheckoutPage } from './components/ui/CheckoutPage';
import { ProductModal } from './components/ui/ProductModal';
import { useCart } from './hooks/useCart';
import { useFavorites } from './hooks/useFavorites';
import type { Product } from './types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getItemCount
  } = useCart();

  const {
    favorites,
    toggleFavorite,
    isFavorite,
    removeFromFavorites,
    clearFavorites,
    favoriteCount
  } = useFavorites();

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    // Opcional: mostrar notificação de sucesso
  };

  const handleQuickView = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const handleCloseProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleCheckout = () => {
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    clearCart();
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <Header 
        cartItemCount={getItemCount()}
        favoriteCount={favoriteCount}
        onCartClick={() => setIsCartOpen(true)}
        onFavoritesClick={() => setIsFavoritesOpen(true)}
        onSearch={handleSearch}
      />

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <HeroSection />

        {/* Products Section */}
        <ProductSection 
          onAddToCart={handleAddToCart}
          onQuickView={handleQuickView}
          onToggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
          searchQuery={searchQuery}
        />

        {/* About Section */}
        <section id="about" className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="gradient-text">Sobre o Recanto das Asas</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Somos uma empresa familiar dedicada há mais de 10 anos ao cuidado e criação 
                de pássaros especiais. Nossa paixão é conectar famílias com companheiros 
                alados que trarão alegria, música e amor para seus lares.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="text-4xl mb-4">🏆</div>
                  <h3 className="font-semibold text-lg mb-2">Experiência</h3>
                  <p className="text-gray-600">Mais de 10 anos no mercado</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">❤️</div>
                  <h3 className="font-semibold text-lg mb-2">Cuidado</h3>
                  <p className="text-gray-600">Amor e dedicação em cada detalhe</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl mb-4">🌟</div>
                  <h3 className="font-semibold text-lg mb-2">Qualidade</h3>
                  <p className="text-gray-600">Pássaros saudáveis e felizes</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section-padding bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                <span className="gradient-text">Entre em Contato</span>
              </h2>
              <p className="text-xl text-gray-600 mb-12">
                Tem dúvidas? Quer conhecer nosso criadouro? Entre em contato conosco!
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card p-8">
                  <h3 className="font-semibold text-xl mb-4">Informações de Contato</h3>
                  <div className="space-y-4 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">📞</span>
                      <span>(11) 9 9999-9999</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="text-primary-600">📧</span>
                      <span>contato@recantodasasas.com.br</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-primary-600">📍</span>
                      <span>
                        Rua dos Pássaros, 123<br />
                        Vila Aviária - São Paulo/SP<br />
                        CEP: 01234-567
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card p-8">
                  <h3 className="font-semibold text-xl mb-4">Horário de Funcionamento</h3>
                  <div className="space-y-3 text-left">
                    <div className="flex justify-between">
                      <span>Segunda à Sexta:</span>
                      <span className="font-medium">8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábado:</span>
                      <span className="font-medium">8h às 16h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Domingo:</span>
                      <span className="font-medium">9h às 14h</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <button className="btn-primary w-full">
                      Agendar Visita
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        onCheckout={handleCheckout}
      />

      {/* Favorites Page */}
      <FavoritesPage
        isOpen={isFavoritesOpen}
        onClose={() => setIsFavoritesOpen(false)}
        favorites={favorites}
        onRemoveFromFavorites={removeFromFavorites}
        onAddToCart={handleAddToCart}
        onClearFavorites={clearFavorites}
      />

      {/* Checkout Page */}
      <CheckoutPage
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        onOrderComplete={handleOrderComplete}
      />

      {/* Product Modal */}
      <ProductModal
        product={selectedProduct}
        isOpen={isProductModalOpen}
        onClose={handleCloseProductModal}
        onAddToCart={handleAddToCart}
        onToggleFavorite={toggleFavorite}
        isFavorite={selectedProduct ? isFavorite(selectedProduct.id) : false}
      />
    </div>
  );
}

export default App;
