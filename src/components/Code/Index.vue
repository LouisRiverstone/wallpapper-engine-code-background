<template>
  <section class="w-100">
    <div class="d-flex flex-column">
      <div class="w-100 bar d-flex flex-row">
        <div
          class="d-flex align-items-center section"
          v-for="(k, i) in 2"
          :class="{ selected: i == 0 }"
          :key="i"
        >
          <span class="ball"></span>
          <span class="fake-text"></span>
        </div>
      </div>
      <div class="d-flex flex-row justify-content-between">
        <pre
          v-highlightjs
        ><code class="javascript" id="code">{{code}}</code></pre>
        <span class="scroll"></span>
      </div>
    </div>
  </section>
</template>

<script>
import TypeIt from "typeit";

export default {
  data() {
    return {
      code: `
function merge(left, right) {
    let sortedArr = []; // the sorted elements will go here
    while (left.length && right.length) {
        // insert the smallest element to the sortedArr
        if (left[0] < right[0]) {
            sortedArr.push(left.shift());
        } else {
            sortedArr.push(right.shift());
        }
    }
}
    `,
    };
  },
  mounted() {
    new TypeIt("#code", {
      speed: 120,
      breakLines: true,
      cursor: true,
      loop: true,
      cursorChar: "|",
      lifeLike: true,
    }).go();
  },
};
</script>

<style scoped>
section {
  background-color: #292d3e;
}

code {
  padding: 0em;
}

.bar {
  background-color: #393e56 !important;
  height: 1.8rem !important;
}

.section {
  padding: 0 1rem;
}

.ball {
  width: 0.5rem;
  height: 0.5rem;
  background-color: #efd81d;
  border-radius: 1rem;
  margin-right: 0.5rem;
}

.selected {
  background-color: #414762 !important;
}

.fake-text {
  background-color: #51597c;
  width: 3rem;
  height: 0.5rem;
  border-radius: 1rem;
}

.scroll {
  height: 45rem;
  width: 1rem;
  background-color: #494f6e;
}

#code {
  height: 25rem;
}
</style>