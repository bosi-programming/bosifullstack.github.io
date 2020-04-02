<template>
  <article class="container">
    <div class="lists">
      <h1 class="lists__title">Programming Abilities</h1>
      <div class="flex">
        <div class="programming">
          <h2 class="programming__title">
            Programming Languages
          </h2>
          <ul class="nes-list is-disc">
            <li class="lists__point flex">
              <h3 class="lists__subtitle">
                HTML & CSS:
              </h3>
              <div class="stars__div">
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
              </div>
            </li>
            <li class="lists__point flex">
              <h3 class="lists__subtitle">
                JavaScript:
              </h3>
              <div class="stars__div">
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star is-transparent"></i>
              </div>
            </li>
            <li class="lists__point flex">
              <h3 class="lists__subtitle">
                TypeScript:
              </h3>
              <div class="starts__div">
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star is-half"></i>
                <i class="nes-icon star is-transparent"></i>
              </div>
            </li>
            <li class="lists__point flex">
              <h3 class="lists__subtitle">
                Node.js:
              </h3>
              <div class="starts__div">
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star is-transparent"></i>
                <i class="nes-icon star is-transparent"></i>
              </div>
            </li>
            <li class="lists__point flex">
              <h3 class="lists__subtitle">
                PHP:
              </h3>
              <div class="starts__div">
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star is-transparent"></i>
                <i class="nes-icon star is-transparent"></i>
              </div>
            </li>
            <li class="lists__point flex">
              <h3 class="lists__subtitle">
                Python:
              </h3>
              <div class="starts__div">
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star is-transparent"></i>
                <i class="nes-icon star is-transparent"></i>
              </div>
            </li>
            <li class="lists__point flex">
              <h3 class="lists__subtitle">
                Java:
              </h3>
              <div class="starts__div">
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star is-transparent"></i>
                <i class="nes-icon star is-transparent"></i>
                <i class="nes-icon star is-transparent"></i>
              </div>
            </li>
          </ul>
        </div>

        <div class="programming">
          <h2 class="programming__title">
            Frameworks
          </h2>
          <ul class="nes-list is-disc">
            <li class="lists__point flex">
              <h3 class="lists__subtitle">
                Vue:
              </h3>
              <div class="stars__div">
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star is-transparent"></i>
              </div>
            </li>
            <li class="lists__point flex">
              <h3 class="lists__subtitle">
                Svelte:
              </h3>
              <div class="stars__div">
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star is-transparent"></i>
                <i class="nes-icon star is-transparent"></i>
              </div>
            </li>
            <li class="lists__point flex">
              <h3 class="lists__subtitle">
                React:
              </h3>
              <div class="starts__div">
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star is-transparent"></i>
                <i class="nes-icon star is-transparent"></i>
              </div>
            </li>
            <li class="lists__point flex">
              <h3 class="lists__subtitle">
                Angular:
              </h3>
              <div class="starts__div">
                <i class="nes-icon star"></i>
                <i class="nes-icon star"></i>
                <i class="nes-icon star is-transparent"></i>
                <i class="nes-icon star is-transparent"></i>
                <i class="nes-icon star is-transparent"></i>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class ProgrammingLanguages extends Vue {}
</script>

<style lang="scss">
.flex {
  display: flex;
  justify-content: space-between;
}
</style>
