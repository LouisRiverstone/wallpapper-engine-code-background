<template>
  <div class="d-flex flex-column lateral-list">
    <div
      class="icons"
      v-for="(k, i) in 5"
      :class="{ selected: i == 0 }"
      :key="i"
    >
      <div class="icon" :class="{ 'selected-icon': i == 0 }"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.selected {
  border-left: 3px solid #739cf0 !important;
}

.selected-icon {
  background-color: #739cf0 !important;
}

.icons {
  border-left: 3px solid #292d3e;
  border-right: 3px solid #292d3e;
}

.icon {
  width: 2rem;
  height: 2rem;
  background-color: #54517c;
  border-radius: 1rem;
}

.icon {
  margin: 0.5rem 0.5rem;
}
</style>