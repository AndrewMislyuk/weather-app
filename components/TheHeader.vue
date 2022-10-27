<template>
  <header class="bg-white shadow">
    <div class="container mx-auto bg-white">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 my-10">
        Weather App
      </h1>
    </div>

    <nav class="bg-gray-800 py-2">
      <div class="container mx-auto">
        <ul class="flex items-center">
          <li
            v-for="li in menu"
            :key="li.id"
            class="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            :class="{ 'text-white bg-gray-700': li.active }"
            @click="toggleMenu(li.id)"
          >
            {{ li.name }}
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
const props = defineProps({
  menu: {
    type: Array<Menu>,
  },
});

const emit = defineEmits<{
  (e: "toggle-menu", value: number): void;
}>();

const toggleMenu = (id: number) => {
  emit("toggle-menu", id);
};
</script>

<style lang="scss"></style>
