<template>
  <section class="main">
    <div class="d-flex flex-column box">
      <Editor id="editor" />
      <AudioSpectrum />
    </div>
  </section>
</template>

<script>
import Editor from "./components/Editor/Index.vue";
import AudioSpectrum from "./components/AudioSpectrum/Index.vue";
import Smoke from "./components/Smoke/Index.vue";

export default {
  components: {
    Editor,
    AudioSpectrum,
    Smoke,
  },
};
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(322deg, #0071c5, #7b68ee);
  background-size: 400% 400%;

  -webkit-animation: background-animation 13s ease infinite;
  -moz-animation: background-animation 13s ease infinite;
  animation: background-animation 13s ease infinite;
}

@-webkit-keyframes background-animation {
  0% {
    background-position: 7% 0%;
  }
  50% {
    background-position: 94% 100%;
  }
  100% {
    background-position: 7% 0%;
  }
}
@-moz-keyframes background-animation {
  0% {
    background-position: 7% 0%;
  }
  50% {
    background-position: 94% 100%;
  }
  100% {
    background-position: 7% 0%;
  }
}
@keyframes background-animation {
  0% {
    background-position: 7% 0%;
  }
  50% {
    background-position: 94% 100%;
  }
  100% {
    background-position: 7% 0%;
  }
}

.box {
  width: 60rem;
}
</style>