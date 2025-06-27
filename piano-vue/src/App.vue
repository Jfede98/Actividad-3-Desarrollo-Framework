<template>
  <ComponentHeader />
  <router-view />
  <ComponentFooter />
</template>

<script>
import ComponentHeader from "./components/Header/ComponentHeader.vue";

import ComponentFooter from "./components/Footer/ComponentFooter";

export default {
  components: {
    ComponentHeader,

    ComponentFooter,
  },
};
</script>

<style></style>
