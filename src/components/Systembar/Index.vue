<template>
  <section
    class="d-flex flex-row justify-content-between align-items-center bar py-1"
  >
    <div class="d-flex align-items-center py-1">
      <span class="ball code icon"></span>
      <span class="fake-text-small"></span>
      <span class="fake-text-small"></span>
      <span class="fake-text-small"></span>
    </div>
    <div class="d-flex">
      <span class="fake-text"></span>
    </div>
    <div class="d-flex py-1">
      <span class="ball icon"></span>
      <span class="ball icon"></span>
      <span class="ball icon close"></span>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.code {
  background-color: #36a6f2 !important;
  margin: 0 0.8rem !important;
}

.bar {
  background-color: #3d435d;
  height: 2rem !important;
}

.close {
  background-color: #e51400 !important;
  margin-right: 0.5rem !important;
}

.icon {
  margin: 0 0.1rem;
}

.ball {
  width: 0.8rem;
  height: 0.8rem;
  background-color: #b3b1cc;
  border-radius: 1rem;
}

.fake-text {
  background-color: #51597c;
  width: 5rem;
  height: 0.5rem;
  border-radius: 1rem;
}

.fake-text-small {
  background-color: #51597c;
  width: 2rem;
  height: 0.5rem;
  margin: 0 0.2rem;
  border-radius: 1rem;
}
</style>