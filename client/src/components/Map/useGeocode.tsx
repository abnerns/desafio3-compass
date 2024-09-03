import { useEffect, useState } from "react";

const useGeocode = (city: string) => {
  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);

  useEffect(() => {
    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?city=${city}&format=json`
        );
        const data = await response.json();

        if (data && data.length > 0) {
          const { lat, lon } = data[0];
          setCoordinates([parseFloat(lat), parseFloat(lon)]);
        } else {
          console.error("Nenhuma coordenada encontrada para essa cidade/país.");
        }
      } catch (error) {
        console.error("Erro ao buscar as coordenadas:", error);
      }
    };

    fetchCoordinates();
  }, [city]);

  return coordinates;
};

export default useGeocode