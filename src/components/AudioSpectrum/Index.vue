<template>
  <section>
    <div :id="id"></div>
  </section>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import Konva from "konva";
import SmokeMachine from "@bijection/smoke";

export default {
  data() {
    return {
      stage: null,
      interval: null,
      transitionAudioData: [],
      canvas: {
        height: 100,
      },
    };
  },
  computed: {
    id() {
      return uuidv4();
    },
  },
  methods: {
    setup() {
      const editor = document.querySelector("#editor");

      this.stage = new Konva.Stage({
        container: this.id,
        width: editor.offsetWidth,
        height: this.canvas.height,
      });
    },
    draw() {
      const layer = new Konva.Layer();
      const editor = document.querySelector("#editor");

      this.transitionAudioData = window.audio ?? [];

      for (let x = 0; x < this.transitionAudioData.length; x++) {
        const audioValue = this.transitionAudioData[x];

        const bar = new Konva.Rect({
          x: 0 + (x * editor.offsetWidth) / 128,
          y: 0,
          width: editor.offsetWidth / 128 - 1,
          height: audioValue * (this.canvas.height - 20),

          fillLinearGradientStartPoint: {
            x: 0,
            y: 50,
          },
          fillLinearGradientEndPoint: {
            x: 100,
            y: -50,
          },
          fillLinearGradientColorStops: [
            0,
            "#494f6e",
            0.25,
            "#414762",
            0.5,
            "#393e56",
            0.75,
            "#31354a",
            1.0,
            "#292d3e",
          ],
        });

        layer.add(bar);
      }

      this.stage.add(layer);

      const timeout = setTimeout(() => {
        this.stage.destroyChildren();
        clearTimeout(timeout);
        requestAnimationFrame(this.draw);
      }, 1000 / 60);
    },
    debug() {
      if (this.interval) {
        clearInterval(this.interval);
      }

      this.interval = setInterval(() => {
        this.transitionAudioData = [];
        for (let x = 0; x < 128; x++) {
          this.transitionAudioData.push(Math.random() * 1);
        }
      }, 75);
    },
  },
  mounted() {
    this.setup();
    // this.debug();
    this.draw();
  },
};
</script>

<style>
</style>