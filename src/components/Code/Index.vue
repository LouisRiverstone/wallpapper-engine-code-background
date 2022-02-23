<template>
  <section class="w-100">
    <div class="d-flex flex-column">
      <div class="w-100 bar d-flex flex-row">
        <div
          class="d-flex align-items-center section"
          v-for="(k, i) in 5"
          :class="{ selected: selected == i }"
          :key="i"
          @click.prevent="$emit('setSelected', i)"
        >
          <span class="ball"></span>
          <span class="fake-text"></span>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex flex-row justify-content-between">
          <pre
            v-highlightjs
          ><code class="javascript" id="code">{{code[0]}}</code></pre>
          <span class="scroll"></span>
        </div>
      </div>
      <div class="d-flex flex-column">
        <div class="d-flex flex-row terminal-header w-100 py-2">
          <span class="fake-text terminal-header-spacement"></span>
          <span class="fake-text terminal-header-spacement"></span>
          <span class="fake-text terminal-header-spacement"></span>
        </div>
        <div class="d-flex flex-column py-2 px-2">
          <span class="d-flex flex-row w-100 mb-2">
            <span class="fake-text-large terminal-header-spacement"></span>
            <span class="fake-text-large"></span>
            <span class="fake-text terminal-header-spacement"></span>
            <span class="fake-text-large"></span>
          </span>
          <span class="d-flex flex-row w-100 mb-2">
            <span class="fake-text terminal-header-spacement"></span>
            <span class="fake-text-large"></span>
          </span>
          <span class="d-flex flex-row w-100 mb-2">
            <span class="fake-text-large terminal-header-spacement"></span>
            <span class="fake-text-large"></span>
            <span class="fake-text terminal-header-spacement"></span>
          </span>
          <span class="d-flex flex-row w-100 mb-2">
            <span class="fake-text terminal-header-spacement"></span>
            <span class="fake-text-large"></span>
            <span class="fake-text terminal-header-spacement"></span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TypeIt from "typeit";

export default {
  props: {
    selected: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      tipeIt: null,
      freezed: false,
      code: [
        `
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
        `console.log('hello world')`,
      ],
    };
  },
  methods: {
    start() {
      if (this.tipeIt) {
        console.log({ ...this.tipeIt });
        this.tipeIt.destroy(true);
      }

      this.tipeIt = new TypeIt("#code", {
        speed: 50,
        breakLines: true,
        cursor: true,
        loop: true,
        cursorChar: "|",
        lifeLike: true,
      }).go();
    },
    freeze() {
      if (this.freezed) {
        this.tipeIt.unfreeze();
        this.freezed = false;
      } else {
        this.tipeIt.freeze();
        this.freezed = true;
      }
    },
  },
  mounted() {
    this.start();
  },
  // watch: {
  //   selected() {
  //     this.start();
  //   },
  // },
};
</script>

<style scoped>
section {
  background-color: #292d3e;
}

code {
  padding: 0em;
}

.terminal {
  background-color: #292d3e !important;
}

.terminal-header {
  padding: 0px 0.5rem;
  background-color: #414762;
}

.terminal-header-spacement {
  margin: 0px 0.3rem;
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

.fake-text-large {
  background-color: #51597c;
  width: 5rem;
  height: 0.5rem;
  border-radius: 1rem;
}

.scroll {
  height: 20rem;
  width: 1rem;
  background-color: #494f6e;
}

#code {
  height: 25rem;
}
</style>