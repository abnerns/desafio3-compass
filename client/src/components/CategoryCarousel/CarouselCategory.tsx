import { useEffect, useState } from "react";
import TourCard from "../TourCard/TourCard";
import { TourCardTypes } from "../TourCard/types";

const CarouselCategory = () => {
    const [categories, setCategories] = useState<TourCardTypes[]>([]);

    useEffect(() => {
        fetch("http://localhost:8000/categories")
          .then((response) => response.json())
          .then((data) => {
            console.log("Dados recebidos do servidor:", data);
            setCategories(data);
          })
          .catch((error) => console.error("Erro ao buscar dados:", error));
      }, []);

  return (
    <div>
        {categories.map((category) => (
          <TourCard key={category.id} category={category} />
        ))}
    </div>
  );
}

export default CarouselCategory;
