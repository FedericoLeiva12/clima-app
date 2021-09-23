## Configuración del proyecto
Necesitas contar con una api key del siguiente servicio:
- [OpenWeatherMap](https://openweathermap.org/)

Dicho api key deberá ser ingresado en un archivo llamado `.env` en la carpeta principal del proyecto.

```shell
REACT_APP_WEATHER_API_KEY=your_api_key
```

Una vez realizado esto, debes asegurarte de instalar todas las dependencias del proyecto ejecutando el siguiente comando:
```shell
npm run install
```

Hecho esto, podrás iniciar el proyecto con el siguiente comando:
```shell
npm run start
```

## Notas
- No configuré `react-navigator` debido a que lo consideré innecesario para este proyecto.
- No configuré ninguna librería para contar con una estructura flux(Redux, PushState, etc) debido a que lo considero innecesario para este proyecto.
- No he llegado a mostrar los datos de los siguientes 4 dias.