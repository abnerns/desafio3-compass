export interface TourTypes {
    id: number;
    city: string;
    name: string;
    review: string;
    price: number;
    duration: string;
    date_start: string;
    avgReview: number;
    minAge: number;
    maxPeople: number;
    destinationName: string;
    categoryName: string;
}

export interface TourProps {
    tour: TourTypes;
    reviewCount: number;
  }