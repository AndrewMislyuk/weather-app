<template>
  <NuxtLayout name="main-layout">
    <div class="index">
      <TheHeader :menu="menu" @toggle-menu="toggleMenu" />

      <Weather />
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

const menu = ref<Array<Menu>>([
  {
    id: 1,
    name: "New York",
    active: true,
  },

  {
    id: 2,
    name: "London",
    active: false,
  },

  {
    id: 3,
    name: "Berlin",
    active: false,
  },

  {
    id: 4,
    name: "Paris",
    active: false,
  },

  {
    id: 5,
    name: "Tokyo",
    active: false,
  },
]);

const toggleMenu = (id: number) => {
  menu.value = menu.value.map((m: Menu) => {
    if (m.id === id) {
      m.active = true;
    } else {
      m.active = false;
    }

    return m;
  });
};
</script>

<style lang="scss"></style>
