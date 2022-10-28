<template>
  <div class="select">
    <div class="select__field" @click="isOpen = !isOpen">
      {{ currentValue[0].name }}
    </div>

    <div class="select__options" v-if="otherValues.length && isOpen">
      <div
        class="select__options-li"
        v-for="value in otherValues"
        :key="value.id"
        @click="toggleMenu(value.id)"
      >
        {{ value.name }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  list: {
    type: Array<Menu>,
  },
});

const emit = defineEmits<{
  (e: "toggle-menu", value: number): void;
}>();

const isOpen = ref<boolean>(false);

const currentValue = computed(
  () => props.list?.filter((f: Menu) => f.active) || []
);

const otherValues = computed(
  () => props.list?.filter((f: Menu) => !f.active) || []
);

const toggleMenu = (value: number) => {
  isOpen.value = false;
  emit("toggle-menu", value);
};
</script>

<style lang="scss"></style>
