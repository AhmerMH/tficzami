<template>
  <div class="demo-container">
    <div class="header-wrapper">
      <Logo :size="75" />
      <h2>{{ title }}</h2>
      <div class="header-item"></div>
    </div>
    <div class="demo-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import Logo from '../../Logo.vue';

defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style>
.demo-container {
  width: 100%;
  height: 100%;
}

.header-wrapper {
  position: absolute;
  height: 75px;
  border-bottom: 1px solid #e7e7e7;
  width: 100%;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
}

.demo-body {
  padding-top: 100px;
}
</style>
