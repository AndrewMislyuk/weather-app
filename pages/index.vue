<template>
  <NuxtLayout name="main-layout">
    <div class="index">
      <TheHeader :menu="menu" @toggle-menu="toggleMenu" />

      <Weather :weatherData="weatherData" :date="date" @get-date="setDate" />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const weatherData = ref<WeatherType>(undefined);
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

  console.log("get calendar date: ", date.value);
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

  callApi();
};

onBeforeMount(() => {
  callApi();
});

const callApi = async () => {
  const filteredCity: Array<Menu> | undefined = menu.value.filter(
    (f: Menu) => f.active
  );
  const currentCity = filteredCity?.length ? filteredCity[0] : undefined;

  const currentWeather = await $fetch<WeatherType>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${currentCity?.lat}&lon=${currentCity?.lon}&units=metric&appid=d24e10a982b4a7cbd32ec016bb307427`
  );

  weatherData.value = currentWeather;
};
</script>

<style lang="scss"></style>
