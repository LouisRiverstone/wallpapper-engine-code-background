<template>
  <div :id="id"></div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import Konva from "konva";
import { computed } from "@vue/runtime-core";

export default {
  data() {
    return {
      stage: null,
      interval: null,
      transitionAudioData: [],
      canvas: {
        height: 30,
      },
    };
  },
  computed: {
    id() {
      return uuidv4();
    },
  },
  methods: {
    draw() {
      const editor = document.querySelector("#editor");

      this.stage = new Konva.Stage({
        container: this.id,
        width: editor.offsetWidth,
        height: this.canvas.height,
      });

      const layer = new Konva.Layer();

      this.transitionAudioData = window.audio ?? [];

      for (let x = 0; x < this.transitionAudioData.length; x++) {
        const audioValue = this.transitionAudioData[x];

        const bar = new Konva.Rect({
          x: 0 + (x * editor.offsetWidth) / 128,
          y: 0,
          width: editor.offsetWidth / 128 - 1,
          height: audioValue * this.canvas.height,

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

      layer.draw();

      const intervaler = setInterval(() => {
        this.stage.destroy();
        clearInterval(intervaler);
      }, 1000 / 60);

      requestAnimationFrame(this.draw);
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
    this.draw();
  },
};
</script>

<style>
</style>