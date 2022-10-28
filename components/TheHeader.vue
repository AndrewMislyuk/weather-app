<template>
  <header class="bg-white shadow">
    <div class="container mx-auto bg-white">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900 my-10">
        Weather App
      </h1>
    </div>

    <nav class="bg-gray-800 py-2">
      <div class="container mx-auto">
        <UISelect :list="menu" @toggle-menu="toggleMenu" />
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
