import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";

import "leaflet/dist/leaflet.css";

function OrderMap({ onCancel }) {
  // Kuryerning boshlang'ich joyi
  const courierPosition = [41.3111, 69.2797];

  // Buyurtma manzili
  const destination = [41.2995, 69.2401];

  // Kuryer yo'nalishi
  const route = [
    [41.3111, 69.2797],
    [41.3095, 69.2730],
    [41.3060, 69.2650],
    [41.3030, 69.2570],
    [41.3010, 69.2490],
    [41.2995, 69.2401],
  ];


  return (
    <div className="order-map-wrapper">

      <div className="order-map-header">

        <div>
          <h3>🛵 Курьер едет</h3>

          <p>
            Курьер направляется к вам
          </p>
        </div>

        <button
          type="button"
          className="order-cancel-button"
          onClick={onCancel}
        >
          Отменить заказ
        </button>

      </div>

      <MapContainer
        center={courierPosition}
        zoom={13}
        scrollWheelZoom={true}
        className="order-map"
      >

        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Kuryer */}
        <Marker position={courierPosition}>
          <Popup>
            🛵 Курьер здесь
          </Popup>
        </Marker>

        {/* Buyurtma manzili */}
        <Marker position={destination}>
          <Popup>
            📍 Ваш заказ
          </Popup>
        </Marker>

        {/* Kuryer yo'nalishi */}
        <Polyline
          positions={route}
          pathOptions={{
            color: "#ffab08",
            weight: 6,
            opacity: 0.9,
          }}
        />

      </MapContainer>

    </div>
  );
}

export default OrderMap;