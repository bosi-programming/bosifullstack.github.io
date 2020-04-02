<template>
  <main class="home">
    <Message
      title="Felipe Azevedo Bosi"
      text="Frontend developer specialized in solutions for educational and health care systems."
    />
    <b-container class="social">
      <b-row>
        <b-col md="3" cols="6">
          <a
            href="https://github.com/bosifullstack"
            rel="noopener noreferrer"
            target="_blank"
            ><i class="nes-icon github is-large" title="GitHub"></i
          ></a>
        </b-col>

        <b-col md="3" cols="6">
          <a
            href="https://www.linkedin.com/in/felipebosi/"
            rel="noopener noreferrer"
            target="_blank"
            ><i class="nes-icon linkedin is-large" title="LinkedIn"></i
          ></a>
        </b-col>

        <b-col md="3" cols="6">
          <a
            href="https://twitter.com/bosiarquitetura"
            rel="noopener noreferrer"
            target="_blank"
            ><i class="nes-icon twitter is-large" title="Twitter"></i
          ></a>
        </b-col>

        <b-col md="3" cols="6">
          <a
            href="mailto:bosifullstack@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
            ><i class="nes-icon gmail is-large" title="Email"></i
          ></a>
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

    <ProgrammingLanguages />
  </main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

// @ is an alias to /src
import Message from "@/components/Message.vue";
import Lists from "@/components/Lists.vue";
import ProgrammingLanguages from "@/components/TheProgrammingLanguagesList.vue";

@Component({
  components: {
    Message,
    Lists,
    ProgrammingLanguages
  }
})
export default class Home extends Vue {
  private openSourceItems: Array<object> = [
    {
      title: "StartPage",
      link: "https://github.com/bosifullstack/startpage",
      description: "A PWA StartPage made with vanilla javascript"
    },
    {
      title: "React FakeStore",
      link: "https://bosifullstack.github.io/fakeStore/",
      description: "A fake store website made with React and Redux"
    },
    {
      title: "Get Stock",
      link: "https://github.com/bosifullstack/cotacoes",
      description: "A website that get data of a stock from an API"
    },
    {
      title: "To-Do CLI",
      link: "https://github.com/bosifullstack/ToDo-CLI",
      description: "A ToDo list CLI app made with Node.js"
    }
  ];

  private workExperiencesItems: Array<object> = [
    {
      title: "Chen Tai Chi Brasil",
      link: "https://chentaichibrasil.com/",
      description:
        "Main developer of the website. Made on Wordpress, its purpose is to be a plataform for the Brazilian Chen Tai Chi community"
    },
    {
      title: "UVV",
      link: "https://www.uvv.br/",
      description:
        "Part of the front-end team responsable to maintain the site running"
    },
    {
      title: "Phidelis",
      link: "https://phidelis.com.br/",
      description:
        "Part of the front-end/design team. Responsable for the implementation of Vue.js and Nuxt.js on the product."
    },
    {
      title: "Foca Enem",
      link: "https://focaenem.folhavitoria.com.br/",
      description:
        "Part of the front-end/design team responsable refactor all of the product"
    }
  ];
}
</script>

<style lang="scss">
.home {
  margin-top: 30px;
}
.social {
  padding: 60px 0;
}
.link {
  color: #42b983;
  &:hover {
    color: #357a5a;
    text-decoration: none;
  }
}
</style>
