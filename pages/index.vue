<template>
  <NuxtLayout name="main-layout">
    <div class="index">
      <TheHeader :menu="menu" @toggle-menu="toggleMenu" />

      <Weather
        :weatherError="weatherError"
        :weatherData="weatherData"
        :date="date"
        @get-date="setDate"
      />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import moment from "moment";

definePageMeta({
  layout: false,
});

const config = useRuntimeConfig();
const weatherError = ref<string>("");
const weatherList = ref<Array<WeatherType>>([]);
const weatherData = ref<WeatherType>(null);
const date = ref(new Date());
const menu = ref<Array<Menu>>([
  {
    id: 1,
    name: "New York",
    active: true,
    lat: "40.730610",
    lon: "-73.935242",
  },

  {
    id: 2,
    name: "London",
    active: false,
    lat: "51.50853",
    lon: "-0.12574",
  },

  {
    id: 3,
    name: "Berlin",
    active: false,
    lat: "52.520008",
    lon: "13.404954",
  },

  {
    id: 4,
    name: "Paris",
    active: false,
    lat: "48.864716",
    lon: "2.349014",
  },

  {
    id: 5,
    name: "Tokyo",
    active: false,
    lat: "35.652832",
    lon: "139.839478",
  },
]);

const setDate = (value: Date) => {
  date.value = value;
  weatherError.value = "";

  currentWeatherFilter();
};

const toggleMenu = (id: number) => {
  menu.value = menu.value.map((m: Menu) => {
    if (m.id === id) {
      m.active = true;
    } else {
      m.active = false;
    }

    return m;
  });

  callCurrentApi();
};

onBeforeMount(() => {
  callCurrentApi();
});

const callCurrentApi = async () => {
  const filteredCity: Array<Menu> = menu.value.filter((f: Menu) => f.active);
  const currentCity = filteredCity?.length ? filteredCity[0] : undefined;

  await fetchWeather(currentCity?.lat, currentCity?.lon);

  if (!weatherError.value) {
    currentWeatherFilter();
  }
};

const fetchWeather = async (
  lat: string | undefined,
  lon: string | undefined
) => {
  try {
    const { list }: { list: Array<WeatherType> } = await $fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${config.apiKey}`
    );

    weatherList.value = list;
  } catch (error: any) {
    weatherError.value = error?.message;
  }
};

const currentWeatherFilter = () => {
  const filteredWeather: Array<WeatherType> = weatherList.value.filter(
    (f: WeatherType) =>
      moment.unix(Number(f?.dt)).format("YYYY-MM-DD") ===
      moment(date.value).format("YYYY-MM-DD")
  );

  if (filteredWeather.length) {
    weatherData.value = filteredWeather[0];
    return;
  }

  weatherError.value = "No Data";
};
</script>

<style lang="scss"></style>
