<template>
  <button
    class="tfz-btn tfz-btn-basic"
    @click="$emit('click', $event)"
    @keyup.space.enter="$emit('keyup', $event)"
  >
    <slot v-if="props.text"> {{ props.text }}</slot>
    <slot name="custom"></slot>
  </button>
</template>

<script setup lang="ts">
defineOptions({
  name: 'TficzamiButton',
});

const props = defineProps({
  text: {
    type: String,
    required: false,
  },
});
</script>

<style>
.tfz-btn {
  padding: var(--sp-3x);
  border-radius: var(--rd-3x);
  font-size: var(--font-size-sm);
  cursor: pointer;
}

.tfz-btn:active {
  transform: scale(0.95);
}

.tfz-btn-basic {
  color: var(--font-basic);
  background: var(--bg-basic);
  border: 2px solid var(--border-color-basic);
}
</style>
