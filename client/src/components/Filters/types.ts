export interface Categ {
    id?: number;
    name: string;
}

export interface TourType {
    id?: number;
    name: string;
    city: string;
    country: string;
    date_start: string;
    avgReview: number;
    duration: number;
    price: number;
    review: string;
    minAge: number;
    maxPeople: number;
    categoryName: string;
}

export interface Destination {
    id?: number;
    name: string;
}
  