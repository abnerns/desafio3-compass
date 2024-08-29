import { useEffect, useState } from "react";
import TourCard from "../TourCard/TourCard";
import { TourCardTypes } from "../TourCard/types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CountCategoryData, LowestPriceData, TourCount } from "./types";

const CarouselCategory = () => {
    const [categories, setCategories] = useState<TourCardTypes[]>([]);
    const [tourCounts, setCount] = useState<TourCount[]>([]);
    const [lowestPrices, setLowestPrices] = useState<{ idCateg: number; lowestPrice: number }[]>([]);

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2
    };

    useEffect(() => {
        fetch("http://localhost:8000/categories")
          .then((response) => response.json())
          .then((data) => {
            console.log("Dados recebidos do servidor:", data);
            setCategories(data);
          })
          .catch((error) => console.error("Erro", error));

          fetch("http://localhost:8000/countByCategory")
          .then((response) => response.json())
          .then((data : CountCategoryData[]) => {
            const formattedData = data.map((item) => ({ idCateg: item.idCateg, count: item._count.idCateg }));
            setCount(formattedData);
          })
          .catch((error) => console.error("Erro ao buscar contagem", error));

          fetch("http://localhost:8000/lowestPrice")
          .then((response) => response.json())
          .then((data : LowestPriceData[] ) => {
            const formattedPrices = data.map((item) => ({
              idCateg: item.idCateg,
              lowestPrice: item._min.price,
            }));
            setLowestPrices(formattedPrices);
          })
          .catch((error) => console.error("Erro ao buscar menor preço", error));
      }, []);

    const getCountByCategory = (idCateg: number) => {
      const categoryCount = tourCounts.find((count) => count.idCateg === idCateg);
      return categoryCount ? categoryCount.count : 0;
    };

    const getLowestPrice = (idCateg: number) => {
      const categoryPrice = lowestPrices.find((price) => price.idCateg === idCateg);
      return categoryPrice ? categoryPrice.lowestPrice : 0;
  };

  return (
    <div style={{width: '76.8vw'}}>
        <Slider {...settings}>
          {categories.map((category) => (
            <TourCard key={category.id} category={category} tourCount={getCountByCategory(category.id)} lowestPrice={getLowestPrice(category.id)} />
          ))}
        </Slider>
    </div>
  );
}

export default CarouselCategory;
