<template>
  <article class="container">
    <div class="lists">
      <h1 class="lists__title">{{ title }}</h1>
      <p class="lists__description">
        {{ description }}
      </p>
      <ul class="nes-list is-circle">
        <li
          v-for="(item, i) in items"
          :key="`${i}-${item}`"
          class="lists__point"
        >
          <a
            class="lists__link"
            :href="item.link"
            target="_blank"
            rel="noopener noreferrer"
          >
            {{ item.title }}
          </a>
          <p class="lists__text">
            {{ item.description }}
          </p>
        </li>
      </ul>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Lists extends Vue {
  @Prop(String) private title!: string;
  @Prop(String) private description!: string;
  @Prop(Array) private items!: Array<object>;
}
</script>

<style lang="scss">
.lists {
  padding: 45px 0;

  &__title {
    padding-bottom: 30px;
  }
  &__subtitle {
    display: inline;
    vertical-align: text-bottom;
  }
  &__description {
    padding-bottom: 15px;
  }

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
