
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  category: 'Hair' | 'Beard' | 'Face' | 'Combo';
}

export interface Recommendation {
  style: string;
  description: string;
  why: string;
}
