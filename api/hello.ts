import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const RetreiveWeatherData = async (lat, lon) => {
    var response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        lat +
        "&longitude=" +
        lon +
        "&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,weathercode,uv_index,uv_index_clear_sky&daily=precipitation_probability_mean,weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_sum&current_weather=true&windspeed_unit=ms&forecast_days=14&timezone=Europe%2FBerlin"
    );
    const data = await response.json();

    return data;
  };
  const data = await RetreiveWeatherData(52.520008, 13.404954);
  return res.json({
    weatherData: data,
  });
}
