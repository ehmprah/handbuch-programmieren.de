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

<style src="../styles/page.scss" lang="scss"></style>
