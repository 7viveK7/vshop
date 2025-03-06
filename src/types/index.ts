export interface User {
  id: string;
  email: string;
}

export interface Product {
  id: number;
  name: string;
  brand: string;
  price: number;
  originalPrice: number;
  discount: string;
  description?: string;
  sizes?: string[];
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
  size?: string;
}

export interface WishlistItem extends Product {}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
 
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
}