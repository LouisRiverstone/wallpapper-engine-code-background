<template>
  <div class="d-flex flex-column list py-1">
    <div
      class="
        d-flex
        flex-row
        justify-content-between
        align-items-center
        px-3
        py-1
        list
      "
      :class="{ selected: i == 0 }"
      v-for="(k, i) in 5"
      :key="i"
    >
      <span class="ball"></span>
      <span class="spacement"></span>
      <span class="fake-text"></span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.selected {
  background-color: #353a51;
}

.ball {
  width: 0.8rem;
  height: 0.8rem;
  background-color: #efd81d;
  border-radius: 1rem;
}

.fake-text {
  background-color: #51597c;
  width: 5rem;
  height: 0.35rem;
  border-radius: 1rem;
}

.spacement {
  width: 0.5rem;
}
</style>