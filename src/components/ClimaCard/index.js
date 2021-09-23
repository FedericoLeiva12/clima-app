import { Card, Typography } from "antd";

export default function ClimaCard({
  city,
  temperature,
  description,
  onInfoOpen,
}) {
  return (
    <Card
      title={city}
      extra={
        <a href="#" onClick={onInfoOpen}>
          Más info
        </a>
      }
      style={{ width: 250 }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography.Title>{temperature}&#176;</Typography.Title>
        <Typography.Paragraph>{description}</Typography.Paragraph>
      </div>
    </Card>
  );
}
