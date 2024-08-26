export interface TourTypes {
    id: number;
    city: string;
    country: string;
    name: string;
    review: string;
    price: number;
    duration: string;
    avgReview: number;
    date_start: string;
    date_end: string;
}

export interface TourProps {
    tour: TourTypes;
    reviewCount: number;
  }