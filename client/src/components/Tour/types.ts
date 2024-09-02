export interface TourTypes {
    id: number;
    city: string;
    country: string;
    name: string;
    review: string;
    price: number;
    duration: string;
    date_start: string;
    avgReview: number;
    minAge: number;
    maxPeople: number;
}

export interface TourProps {
    tour: TourTypes;
    reviewCount: number;
  }