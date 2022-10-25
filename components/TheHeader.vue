<template>
  <header class="header">
    <div class="container">
      <h1 class="header__title">Weather App</h1>

      <nav class="header__menu">
        <ul>
          <li
            v-for="li in menu"
            :key="li.id"
            :class="{ '--active': li.active }"
            @click="toggleMenu(li.id)"
          >
            {{ li.name }}
          </li>
        </ul>
      </nav>
    </div>
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
