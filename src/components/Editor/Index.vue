<template>
  <section class="d-flex flex-column shadow-lg rounded">
    <Systembar />
    <div class="d-flex flex-row">
      <Sidebar />
      <Code />
    </div>
    <div class="bar w-100"></div>
  </section>
</template>

<script>
import Code from "../Code/Index.vue";
import Sidebar from "../Sidebar/Index.vue";
import Systembar from "../Systembar/Index.vue";

export default {
  components: {
    Code,
    Sidebar,
    Systembar,
  },
};
</script>

<style scoped>
.bar {
  height: 1rem;
  background-color: #31354a;
}
</style>