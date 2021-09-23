import { message } from "antd";
import { useEffect, useState } from "react";
import ClimaCard from "../components/ClimaCard";
import ClimaInfoCard from "../components/ClimaInfoCard";
import Header from "../components/Header";
import MainLayout from "../layout/MainLayout";
import { getLocation } from "../services/geolocation.service";
import { getWeather } from "../services/weather.service";

import classes from './styles.module.css'

export default function HomeScreen() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState([null]);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [selectedWeather, setSelectedWeather] = useState(null);

  const onSearch = (query) => {
    getWeather(query).then((res) => {
      if (weather.find((w) => w.city === res.name)) {
        return message.error("Ya has listado esta ciudad.");
      }

      setWeather([...weather, {
        city: res.name,
        temperature: res.main.temp,
        minTemperature: res.main.temp_min,
        maxTemperature: res.main.temp_max,
        description: res.weather[0].description,
        humidity: res.main.humidity,
        windSpeed: res.wind.speed,
        windDirection: res.wind.deg,
      }]);
      message.success("Ciudad agregada a la lista.");
    }).catch((err) => {
      console.error(err);
      message.error("No se pudo agregar la ciudad.");
    })
  };

  const onCloseInfo = () => {
    setIsInfoOpen(false);
    setSelectedWeather(null);
  }

  const onDeleteCard = () => {
    if (weather.indexOf(selectedWeather) === 0) {
      return message.error("No puedes eliminar tu ciudad de la lista.");
    }

    setWeather(weather.filter((item) => item !== selectedWeather));
    setIsInfoOpen(false);
    setSelectedWeather(null);
    message.success("Ciudad eliminada de la lista.")
  }

  const onInfoOpen = (index) => {
    console.log(index, weather[index]);
    setSelectedWeather(weather[index]);
    setIsInfoOpen(true);
  }

  useEffect(() => {
    getLocation().then((location) => {
      setLocation(location.regionName);
    });
  }, []);

  useEffect(() => {
    if (location && !weather[0]) {
      getWeather(location).then((res) => {
        console.log(res)
        const weatherArr = [...weather];
        weatherArr[0] = {
          city: res.name,
          temperature: res.main.temp,
          minTemperature: res.main.temp_min,
          maxTemperature: res.main.temp_max,
          description: res.weather[0].description,
          humidity: res.main.humidity,
          windSpeed: res.wind.speed,
          windDirection: res.wind.deg,
        };
        setWeather(weatherArr);
      });
    }
  }, [location, weather]);

  return (
    <MainLayout
      header={<Header onSearch={onSearch} />}
      content={
        <div className={classes.container}>
          {weather.map((weath, index) => weath !== null && (
            <ClimaCard
              city={weath.city}
              temperature={weath.temperature}
              description={weath.description}
              onInfoOpen={() => onInfoOpen(index)}
            />
          ))}

          <ClimaInfoCard
            weather={selectedWeather}
            open={isInfoOpen}
            onClose={onCloseInfo}
            onDelete={onDeleteCard}
          />
        </div>
      }
    />
  );
}
