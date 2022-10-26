<template>
  <section class="weather">
    <div class="container">
      <div class="weather__wrapper">
        <div class="weather__results" v-if="weatherData">
          <div class="weather__row">
            <div class="weather__col">
              <div
                class="weather__results-img"
                :style="{
                  'background-image':
                    'url(http://openweathermap.org/img/wn/' +
                    weatherData?.weather[0].icon +
                    '@2x.png)',
                }"
              />
            </div>
            <div class="weather__col">
              <div class="weather__results-day">
                {{ toDate(weatherData?.dt) }},
                {{ weatherData?.weather[0].main }}
              </div>

              <div class="weather__results-temperature">
                {{ weatherData?.main?.temp }} - ℃
              </div>
              <div class="weather__results-humidity">
                {{ weatherData?.main?.humidity }} - Humidity
              </div>
              <div class="weather__results-wind">
                {{ weatherData?.wind?.speed }} - Kilometers per hour
              </div>
            </div>
          </div>
        </div>
        <div class="weather__results" v-if="weatherError.length">
          <div class="weather__results-error">
            {{ weatherError }}
          </div>
        </div>

        <div class="weather__calendar">
          <ClientOnly>
            <v-date-picker v-model="innerDate" @update:modelValue="getDate" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import moment from "moment";
import { PropType } from "vue";

const props = defineProps({
  date: {
    type: Date,
  },

  weatherData: {
    type: Object as PropType<WeatherType>,
  },

  weatherError: {
    type: String,
    default: "",
  },
});

const innerDate = ref(props.date);

const emit = defineEmits<{
  (e: "get-date", value: Date): void;
}>();

const getDate = (date: Date) => {
  emit("get-date", date);
};

const toDate = (value: number | undefined) => {
  return value ? moment.unix(value).format("dddd") : value;
};
</script>

<style lang="scss"></style>
