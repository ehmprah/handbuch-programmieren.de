<template>
  <div class="page">
    <header class="page__header">
      <Header/>
    </header>
    <main class="page__main">
      <div class="page__content">
        <Updated/>
        <!-- TODO add title and updated in ARTICLE_HEAD COMPONENT -->
        <!-- TODO add breadcrumb navigation (chapter, glossary) -->
        <Content/>
        <!-- TODO add prev / next navigation -->
        <Share/>
      </div>
      <aside class="page__sidebar">
        <Sidebar/>
      </aside>
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Share from './components/Share.vue';
import Updated from './components/Updated.vue';

export default {
  mounted() {
    console.log(this.$site);
    console.log(this.$page);
  },
  components: {
    Header,
    Sidebar,
    Share,
    Updated,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');
@import './styles/normalize';
@import './styles/variables';
@import './styles/typography';

.page {
  background: $color-background;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100vw;
  &__main {
    display: flex;
    flex-basis: 100%;
  }
  &__header {
    margin-left: 2em;
    padding: 1.5em 2em;
    color: $color-text-light;
  }
  &__content {
    margin-left: 2em;
    padding: 2em;
    background: $color-content;
    flex: 1 1 auto;
    max-width: 600px;
    text-align: justify;
  }
  &__sidebar {
    padding: 2em;
    flex: 1 1 auto;
    flex-basis: 200px;
    color: $color-text-light;
  }
}
</style>
