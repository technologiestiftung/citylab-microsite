<template>
  <div>
    <Navigation
      :lang="lang"
      :content="content"
      :direct="direct"
      :anchor-tags="true"
    />
    <MissionStatement
      style="margin-top: 100px;"
      :lang="lang"
      :content="content"
      :direct="direct"
    />
    <Tiles :lang="lang" :content="content" :direct="direct" />
    <Team :lang="lang" :content="content" :direct="direct" />
    <Footer :lang="lang" :content="content" />
    <Matomo />
  </div>
</template>

<script>
  import { content } from '../assets/content.js';

  import Navigation from '../components/Navigation.vue';
  import Footer from '../components/Footer.vue';
  import MissionStatement from '../components/MissionStatement.vue';
  import Paragraph from '../components/Paragraph.vue';
  import Matomo from '../components/Matomo.vue';
  import Tiles from '../components/Tiles.vue';
  import Teaser from '../components/Teaser.vue';
  import Team from '../components/Team.vue';

  export default {
    components: {
      Navigation,
      Footer,
      Paragraph,
      Matomo,
      Tiles,
      Team,
      MissionStatement,
      Teaser,
    },
    data() {
      return {
        lang: 'de',
        content: content,
        direct: '/about_us_en',
      };
    },
  };
</script>

<style lang="scss" scoped>
  @import '../assets/style/style.scss';
  h1.title,
  h3.title {
    color: $color-secondary;
  }

  details {
    padding: 15px;
    background: $color-primary;

    &[open] {
      background: $color-primary;
    }
  }
</style>
