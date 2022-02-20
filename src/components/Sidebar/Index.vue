<template>
  <section class="d-flex flex-row">
    <Menu />
    <div class="d-flex flex-column list py-1">
      <div class="d-flex justify-content-between py-2 px-2">
        <div class="d-flex">
          <span class="fake-text"></span>
        </div>
        <div class="d-flex flex-row justify-content-end align-items-center">
          <span class="ball-mini"></span>
          <span class="ball-mini"></span>
          <span class="ball-mini"></span>
        </div>
      </div>

      <div
        class="
          py-2
          px-2
          d-flex
          flex-row
          justify-content-start
          align-items-center
        "
      >
        <span class="ball"></span>
        <span class="spacement"></span>
        <span class="fake-text"></span>
      </div>
      <List />
    </div>
  </section>
</template>

<script>
import List from "../List/Index.vue";
import Menu from "../Menu/Index.vue";

export default {
  components: {
    List,
    Menu,
  },
};
</script>

<style scoped>
.list {
  background-color: #3d435d;
}

.lateral-list {
  background-color: #292d3e;
}

.fake-text {
  background-color: #51597c;
  width: 3rem;
  height: 0.5rem;
  border-radius: 1rem;
}

.ball {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #54517c;
  border-radius: 1rem;
}

.ball-mini {
  margin: 0 0.05rem;
  width: 0.1rem;
  height: 0.1rem;
  background-color: #b3b1cc;
  border-radius: 1rem;
}

.spacement {
  width: 0.5rem;
}
</style>