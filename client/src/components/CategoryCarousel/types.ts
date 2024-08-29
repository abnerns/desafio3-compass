export interface TourCount {
    idCateg: number;
    count: number;
}

export interface LowestPriceData {
    idCateg: number;
    _min: {
      price: number;
    };
 }

 export interface CountCategoryData {
    idCateg: number;
    _count: {
      idCateg: number;
    };
 }