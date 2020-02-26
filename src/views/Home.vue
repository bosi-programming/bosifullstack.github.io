<template>
  <main class="home">
    <Message title="Felipe Azevedo Bosi" text="Fullstack developer specialized in solutions for educational systems." />
    <b-container class="social">
      <b-row>

        <b-col md="3" cols="6">
          <a href="https://github.com/bosifullstack"><i class="nes-icon github is-large" title="GitHub"></i></a>
        </b-col>

        <b-col md="3" cols="6">
          <a href="https://www.linkedin.com/in/felipebosi/"><i class="nes-icon linkedin is-large" title="LinkedIn"></i></a>
        </b-col>

        <b-col md="3" cols="6">
          <a href="https://twitter.com/bosiarquitetura"><i class="nes-icon twitter is-large" title="Twitter"></i></a>
        </b-col>

        <b-col md="3" cols="6">
          <a href="mailto:bosifullstack@gmail.com"><i class="nes-icon gmail is-large" title="Email"></i></a>
        </b-col>

      </b-row>
    </b-container>

    <Lists 
      title="Main open-source projects" 
      description="Here are my main open-source projects. You can see the rest of them on my GitHub account."
      :items="openSourceItems"
    />

    <Lists 
      title="Work experiences" 
      description="Here you can see some of the private projects that I made or participate on the main developer team."
      :items="workExperiencesItems"
    />

  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// @ is an alias to /src
import Message from '@/components/Message.vue'
import Lists from '@/components/Lists.vue'

@Component({
  components: {
    Message,
    Lists,
  }
})

export default class Home extends Vue{
  private openSourceItems: Array<object> = [
    {title: "StartPage", link: "https://github.com/bosifullstack/startpage", description: "A PWA StartPage made with vanilla javascript"},
    {title: "React FakeStore", link: "https://bosifullstack.github.io/fakeStore/", description: "A fake store website made with React and Redux"},
    {title: "Get Stock", link: "https://github.com/bosifullstack/cotacoes", description: "A website that get data of a stock from an API"},
    {title: "To-Do CLI", link: "https://github.com/bosifullstack/ToDo-CLI", description: "A ToDo list CLI app made with Node.js"},
  ]

  private workExperiencesItems: Array<object> = [
    { title: "Chen Tai Chi Brasil", link: "https://chentaichibrasil.com/", description: "Main developer of the website. Made on Wordpress, its purpose is to be a plataform for the Brazilian Chen Tai Chi community" },
    { title: "UVV", link: "https://www.uvv.br/", description: "Part of the front-end team responsable to maintain the site running" },
    { title: "Phidelis", link: "https://phidelis.com.br/", description: "Part of the front-end/design team. Responsable for the implementation of Vue.js and Nuxt.js on the product." },
    { title: "Foca Enem", link: "https://focaenem.folhavitoria.com.br/", description: "Part of the front-end/design team responsable refactor all of the product" },
  ]
}
</script>

<style lang="scss">
.social {
  text-align: center;
  padding: 60px 0;
  }
</style>
