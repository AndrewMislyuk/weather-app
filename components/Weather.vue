<template>
  <section class="bg-white">
    <div class="container mx-auto w-3/4">
      <div class="flex justify-between">
        <div class="py-10" v-if="weatherData && !weatherError.length">
          <div class="flex items-center">
            <div>
              <div
                class="weather-image mr-5"
                :style="{
                  'background-image':
                    'url(http://openweathermap.org/img/wn/' +
                    weatherData?.weather[0].icon +
                    '@2x.png)',
                }"
              />
            </div>
            <div>
              <p
                class="mb-3 text-lg font-light text-gray-800 md:text-xl dark:text-gray-500"
              >
                {{ toDate(weatherData?.dt) }},
                {{ weatherData?.weather[0].main }}
              </p>

              <p
                class="mb-3 text-lg font-light text-gray-800 md:text-xl dark:text-gray-500"
              >
                {{ weatherData?.main?.temp }} - ℃
              </p>
              <p
                class="mb-3 text-lg font-light text-gray-800 md:text-xl dark:text-gray-500"
              >
                {{ weatherData?.main?.humidity }} - Humidity
              </p>
              <p
                class="mb-3 text-lg font-light text-gray-800 md:text-xl dark:text-gray-500"
              >
                {{ weatherData?.wind?.speed }} - Kilometers per hour
              </p>
            </div>
          </div>
        </div>
        <div class="py-10" v-else>
          <p class="font-bold text-red-700">
            {{ weatherError }}
          </p>
        </div>

        <div class="py-3">
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
