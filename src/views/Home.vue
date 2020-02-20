<template>
  <div class="home">
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

    <Lists />
  </div>
</template>

<script>
// @ is an alias to /src
import Message from '@/components/Message.vue'
import Lists from '@/components/Lists.vue'


export default {
  name: 'Home',
  components: {
    Message,
    Lists,
  }
}
</script>

<style lang="scss">
.social {
  text-align: center;
  padding: 60px 0;
  }
</style>
