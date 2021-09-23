import { Modal } from "antd";

export default function ClimaInfoCard({ weather, open, onClose, onDelete }) {
  return (
    <Modal
      title={weather?.city}
      visible={open}
      onText="Cerrar"
      cancelText="Borrar"
      onOk={onClose}
      onCancel={onDelete}
    >
      <p>Temperatura: {weather?.temperature}&#176;</p>
      <p>Temperatura minima: {weather?.minTemperature}&#176;</p>
      <p>Temperatura maxima: {weather?.maxTemperature}&#176;</p>
      <p>Humedad: {weather?.humidity}</p>
      <p>Velocidad del viento: {weather?.windSpeed} Metros por segundo</p>
      <p>Dirección del viento: {weather?.windDirection}&#176;</p>
      <p>Descripción: {weather?.description}</p>
    </Modal>
  );
}
