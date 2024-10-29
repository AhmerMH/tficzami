<template>
  <DemoContainer title="Buttons">
    <TficzamiButton text="Basic Button" type="basic" />
    <TficzamiButton text="Primary Button" type="primary" class="ml-2x" />
    <TficzamiButton text="Secondary Button" type="secondary" class="ml-2x" />
    <TficzamiButton text="Link button" type="link" class="ml-2x" />
  </DemoContainer>
</template>

<script setup lang="ts">
import DemoContainer from '@/app-components/demo/DemoContainer.vue';
import TficzamiButton from '../tfz-button.vue';
</script>
