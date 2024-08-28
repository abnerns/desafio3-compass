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
    date_end: string;
    avgReview: number;
    duration: number;
    price: number;
    review: string;
}