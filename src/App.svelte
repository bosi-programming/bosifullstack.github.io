<script lang="ts">
  import Message from "./components/atoms/Message.svelte";
  import SocialSection from "./components/atoms/SocialSection.svelte";
  import ListWithLinks from "./components/molecules/ListWithLinks.svelte";
  import type { itemProps } from "./components/atoms/ItemWithDescription.type";
  export let name: string;

  const openSourceItems: itemProps[] = [
    {
      title: "StartPage",
      link: "https://github.com/bosifullstack/startpage",
      description: "A PWA StartPage made with svelte",
    },
    {
      title: "React FakeStore",
      link: "https://bosifullstack.github.io/fakeStore/",
      description: "A fake store website made with React and Redux",
    },
    {
      title: "Get Stock",
      link: "https://github.com/bosifullstack/cotacoes",
      description: "A website that get data of a stock from an API",
    },
    {
      title: "To-Do CLI",
      link: "https://github.com/bosifullstack/ToDo-CLI",
      description: "A ToDo list CLI app made with Node.js",
    },
  ];
  const workExperiencesItems: itemProps[] = [
    {
      title: "Luma Health",
      link: "https://www.lumahealth.io/",
      description:
        "Main developer of the blog and part of the frontend team responsible from the company's app. The blog is made in Wordpress and the app is in React",
    },
    {
      title: "UVV",
      link: "https://www.uvv.br/",
      description:
        "Part of the front-end team responsible to maintain the site running",
    },
    {
      title: "Phidelis",
      link: "https://phidelis.com.br/",
      description:
        "Part of the front-end/design team. Responsable for the implementation of Vue.js and Nuxt.js on the product.",
    },
    {
      title: "Foca Enem",
      link: "https://focaenem.folhavitoria.com.br/",
      description:
        "Part of the front-end/design team responsable refactor all of the product",
    },
  ];
</script>

<style>
</style>

<main>
  <div class="container">
    <h1>Hello {name}!</h1>
    <p>
      Visit the
      <a href="https://svelte.dev/tutorial">Svelte tutorial</a>
      to learn how to build Svelte apps.
    </p>
    <Message
      title={'Felipe Azevedo Bosi'}
      text={'Frontend developer specialized in solutions for educational and health care systems.'} />
    <SocialSection />
    <ListWithLinks
      title="Main open-source projects"
      description="Here are my main open-source projects. You can see the rest of them on my GitHub account."
      items={openSourceItems} />
    <ListWithLinks
      title="Work experiences"
      description="Here you can see some of the private projects that I made or participate on the main developer team."
      items={workExperiencesItems} />
  </div>
</main>

