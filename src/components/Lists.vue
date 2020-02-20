<template>
  <b-container>
    <div class="lists">
    <ul class="nes-list is-circle">
      <li class="lists__point"><a class="lists__link" href="https://github.com/bosifullstack/startpage">StartPage</a></li>
      <p class="lists__text"> A PWA StartPage made with HTML, CSS and JS</p>
      <li>Thou hast had a good night's sleep, I hope.</li>
      <li>Thou hast had a good afternoon</li>
      <li>Good night.</li>
    </ul>
  </div>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Lists extends Vue {

}
</script>

<style lang="scss">
.lists {
  &__point {
    text-align: left;
  }
  &__link {
    color: #42b983;
    &:hover {
      color: #357a5a;
      text-decoration: none;
    }
  }
}
</style>