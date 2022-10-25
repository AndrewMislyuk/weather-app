import { defineNuxtPlugin } from "#app";
// @ts-ignore
import VCalendar from "v-calendar";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VCalendar);
});
