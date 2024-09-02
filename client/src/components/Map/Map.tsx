import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useGeocode from './useGeocode';

const Map = ({ city, country }: { city: string, country: string }) => {
  const coordinates = useGeocode(city, country);

  if (!coordinates) {
    return <p>Loading map...</p>;
  }

  return (
    <MapContainer center={coordinates} zoom={13} style={{ height: '380px' }}>
      <TileLayer
        attribution='Map data &copy; OpenStreetMap contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}>
        <Popup>{city}</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
