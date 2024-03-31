
"use client";

import { Transition } from "../Transition";
import { Map } from "leaflet";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { MarkerHouse } from "./MarkerHouse";

export function Location() {
    const coordinatePoints = {
        lat: 40.463667,
        lng: -3.74922,
    };

    const centerMarker = (position: { lat: number; lng: number }, fnMap: Map) => {
        fnMap.flyTo({
            lat: position.lat,
            lng: position.lng,
        });
    };

    return (
        <Transition className="px-4 py-8 md:py-44 md:px-36">
            <h4 className="font-semibold text-center text-secondary" id="location">
                Ubicación
            </h4>
            <h2 className="max-w-2xl my-4 mb-8 mx-auto text-3xl font-semibold text-center">
                Disponibles en todo el mundo, con la comunidad mas grande de propiedades
                desde 2008
            </h2>

            <MapContainer
                center={coordinatePoints}
                zoom={6}
                scrollWheelZoom={false}
                className="w-full h-[700px] md:h-[500px] rounded-3xl"
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerHouse selectMarker={centerMarker} />
            </MapContainer>
        </Transition>
    );
}
