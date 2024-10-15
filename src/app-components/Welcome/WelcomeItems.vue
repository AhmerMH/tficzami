<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue';
import DocumentationIcon from '../../icons/IconDocumentation.vue';
import ToolingIcon from '../../icons/IconTooling.vue';
import EcosystemIcon from '../../icons/IconEcosystem.vue';
import CommunityIcon from '../../icons/IconCommunity.vue';
import SupportIcon from '../../icons/IconSupport.vue';
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Icons</template>

    Reusable and scalable SVG icon component designed for easy integration and
    customization within the UI component library.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>Components</template>

    Reusable UI components provide consistency and efficiency across the
    application. Each component is built for flexibility, allowing seamless
    integration into various use cases while maintaining a cohesive design
    system. By leveraging these components, developers can enhance their
    workflow and ensure a consistent, unified user experience throughout the
    application.
  </WelcomeItem>
</template>
