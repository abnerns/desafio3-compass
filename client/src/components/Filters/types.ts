export interface Categ {
    id?: number;
    name: string;
}

export interface Destination {
    id?: number;
    name: string;
}

export interface FiltersProps {
    onCategoryChange: (id: number | null) => void;
    onReviewFilterChange: (minAvgReview: number | null) => void;
    onDestinationChange: (id: number | null) => void;
    onPriceFilterChange: (minPrice: number | null) => void;
    onSearchChange: (name: string) => void;
}