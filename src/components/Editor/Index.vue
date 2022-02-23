<template>
  <section class="d-flex flex-column shadow-lg rounded">
    <Systembar />
    <div class="d-flex flex-row">
      <Sidebar ref="sidebar" @setSelected="setSelected" :selected="selected" />
      <Code :selected="selected" @setSelected="setSelected" />
    </div>
    <div class="bar w-100">{{ selected }}</div>
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
  data() {
    return { selected: 0 };
  },
  methods: {
    setSelected(id) {
      this.selected = id;
    },
  },
};
</script>

<style scoped>
.bar {
  height: 1rem;
  background-color: #31354a;
}
</style>