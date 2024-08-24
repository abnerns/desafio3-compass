export interface Tour {
    id?: number;
    name: string;
    city: string;
    country: string;
    date_start: string;
    date_end: string;
    avgReview: number;
    duration: number;
    price: number;
}

export interface Categ {
    id?: number;
    name: string;
}

export interface Review {
    user_name: string;
    user_email: string;
    message: string;
    services: number;
    price: number;
    location: number;
    food: number;
    amenities: number;
    comfort: number;
  }