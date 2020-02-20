<template>
  <b-container>
    <div class="nes-container is-dark message" :class="withTitle">
      <p class="title message__title">{{ title }}</p>
      <p class="message__text">{{ text }}</p>
    </div>
  </b-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Message extends Vue {
  @Prop(String) private title!: string;
  @Prop(String) private text!: string;

  private withTitle: string = (this.title !== '') ? 'with-title' : '';
}
</script>

<style lang="scss">
.message {
  &__title {
    @media (min-width: 768px) {
      font-size: 24px !important;
    }
  }
  &__text {
    text-align: left;
  }
}
</style>