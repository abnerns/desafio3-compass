export interface TourCardTypes {
    id: number;
    name: string;
}

export interface TourCardProps {
    category: TourCardTypes;
    tourCount: number;
    lowestPrice: number;
}