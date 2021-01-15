import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "../css/LocationMap.css";

export default function LocationMap(props){
    const {latitude, longitude} = props;
    
    return (latitude && longitude) ? 
            <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[latitude, longitude]}>
                <Popup>
                    You're here!
                </Popup>
                </Marker>
            </MapContainer> : null;
}