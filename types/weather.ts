type Clouds = {
  all: number;
};

type Sys = {
  pod: string;
};

type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

type WeatherDetail = {
  id: number;
  main: string;
  description: string;
  icon: string;
};

type Main = {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
};

type WeatherType =
  | {
      clouds: Clouds;
      dt: number;
      dt_txt: string;
      main: Main;
      pop: number;
      sys: Sys;
      visibility: number;
      weather: Array<WeatherDetail>;
      wind: Wind;
    }
  | null;
