<template>
  <button
    class="tfz-btn"
    :class="`tfz-btn-${props.type}`"
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
  type: {
    type: String,
    required: false,
    default: 'basic',
    validator: (value: string) =>
      ['basic', 'primary', 'secondary', 'link'].includes(value),
  },
});
</script>

<style>
.tfz-btn {
  padding: var(--sp-3x);
  border-radius: var(--rd-3x);
  font-size: var(--font-size-sm);
  cursor: pointer;

  &:hover {
    color: var(--tfz-orangish-red);
    background: var(--border-color-basic);
    transition: 0.5s;
  }

  &:active {
    transform: scale(0.95);
  }
}

.tfz-btn-basic {
  color: var(--font-basic);
  background: var(--bg-basic);
  border: 2px solid var(--border-color-basic);
}

.tfz-btn-primary {
  color: var(--font-primary);
  background: var(--bg-primary);
  border: 2px solid var(--border-color-primary);
  font-weight: 600;
}

.tfz-btn-secondary {
  color: var(--font-secondary);
  background: var(--bg-secondary);
  border: 0;
  padding: calc(var(--sp-3x) + 2px);
  font-weight: 600;
}

.tfz-btn-link {
  color: var(--font-link);
  background: transparent;
  border: 0;
  padding: 0;
  text-decoration: underline;

  & :hover {
    background: transparent;
    color: var(--font-link);
  }
}
</style>
