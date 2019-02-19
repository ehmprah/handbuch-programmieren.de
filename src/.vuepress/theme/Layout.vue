<template>
  <div class="page">
    <header class="page__header">
      <Header/>
    </header>
    <main class="page__main">
      <div class="page__content">
        <Content/>
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
// TODO different layouts in https://forestry.io/blog/an-introduction-to-theming-in-vuepress/
export default {
  mounted() {
    console.log(this.$site);
    console.log(this.$page);
  },
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style lang="scss">
@import './styles/normalize';
@import './styles/variables';
@import './styles/typography';

.page {
  background: $color-background;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100vh;
  width: 100vw;
  &__main {
    display: flex;
    padding: 0 1em;
    flex-basis: 100%;
  }
  &__header {
    padding: 1em 2em;
    color: $color-text-light;
  }
  &__content {
    background: $color-content;
    flex: 1 1 auto;
    flex-basis: 600px;
    padding: 1em;
  }
  &__sidebar {
    flex: 1 1 auto;
    flex-basis: 200px;
    padding: 1em;
    color: $color-text-light;
  }
}
</style>
