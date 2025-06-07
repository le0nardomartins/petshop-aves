export interface Product {
  id: string;
  name: string;
  species: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: 'canários' | 'papagaios' | 'calopsitas' | 'periquitos' | 'pássaros-exóticos' | 'acessórios';
  age: string;
  sex: 'macho' | 'fêmea' | 'não-definido';
  inStock: boolean;
  featured: boolean;
  characteristics: string[];
  care: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
}

export interface Order {
  id: string;
  user: User;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered';
  createdAt: Date;
} 