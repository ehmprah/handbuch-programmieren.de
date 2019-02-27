<template>
  <div class="page">
    <header class="page__header">
      <Header/>
    </header>
    <main class="page__main">
      <section class="page__content">
        <ArticleHeader v-if="type === 'article'"/>
        <Content/>
        <Share v-if="type === 'article'"/>
        <NextPage v-if="type === 'article'"/>
      </section>
      <aside class="page__sidebar">
        <Sidebar/>
      </aside>
    </main>
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue';
import Sidebar from '@theme/components/Sidebar.vue';
import Share from '@theme/components/Share.vue';
import NextPage from '@theme/components/NextPage.vue';
import ArticleHeader from '@theme/components/ArticleHeader.vue';

export default {
  // mounted() {
  //   console.log(this.$site);
  //   console.log(this.$page);
  // },
  computed: {
    type: function() {
      if (this.$page.frontmatter.type) {
        return this.$page.frontmatter.type;
      }
      return '';
    },
  },
  components: {
    Header,
    Sidebar,
    Share,
    NextPage,
    ArticleHeader,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fira+Sans');
@import '~@theme/styles/normalize';
@import '~@theme/styles/variables';
@import '~@theme/styles/typography';

.page {
  background: $color-background;

  &__header {
    padding: 1.5em 2em;
    color: $color-text-light;
  }

  &__content {
    padding: 2em;
    background: $color-content;
    flex: 1 1 auto;
    max-width: 600px;
  }

  &__sidebar {
    padding: 2em;
    color: $color-text-light;
  }
}

@media (min-width: 1024px) {
  .page {
    background: $color-background;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100vw;

    &__header {
      margin-left: 2em;
    }

    &__main {
      display: flex;
      flex-basis: 100%;
    }

    &__content {
      margin-left: 2em;
      flex: 1 1 auto;
      max-width: 600px;
    }

    &__sidebar {
      flex: 1 1 auto;
      flex-basis: 200px;
    }
  }
}
</style>
