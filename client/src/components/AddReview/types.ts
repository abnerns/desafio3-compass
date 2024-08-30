export interface ReviewTypes {
    id: number;
    user_name: string;
    user_email: string;
    message: string;
    services: number;
    price: number;
    location: number;
    food: number;
    amenities: number;
    comfort: number;
    created_at: string;
}

export interface ReviewProps {
    reviews: ReviewTypes[];
  }