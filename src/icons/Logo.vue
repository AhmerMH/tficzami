<template>
  <div class="logo">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
    >
      <circle
        cx="12.3"
        cy="12"
        r="6"
        fill="none"
        stroke="#C8A66F"
        stroke-width="0.2"
      />
      <path
        d="M11.5 9.6 L13.3 9.6 L9.9 8.8 L14.6 9.6 L14.6 10.8 L13.3 10.8 L13.3 14.4 L11.5 15.7 L11.5 10.8 L9.9 10.8 L9.9 9.6 L13.3 9.84 Z"
        class="T"
        stroke-width="0.2"
      />
    </svg>
  </div>
</template>

<style lang="postcss">
.logo {
  width: 250px;
  height: 250px;
  display: inherit !important;
}

.T {
  fill: #4b4442;
}

@media (prefers-color-scheme: dark) {
  .T {
    fill: rgba(0, 255, 0);
  }
}
</style>
