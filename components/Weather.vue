<template>
  <section class="weather">
    <div class="container">
      <div class="weather__wrapper">
        <div class="weather__results"></div>
        <div class="weather__calendar">
          <ClientOnly>
            <v-date-picker
              v-model="date"
              @update:modelValue="getDate"
            />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const date = ref(new Date());

const getDate = (date: any) => {
  console.log(date);
};
</script>

<style lang="scss"></style>
