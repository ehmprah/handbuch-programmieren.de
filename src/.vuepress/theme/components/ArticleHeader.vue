<template>
  <div class="article-header">
    <div class="article-header__updated" v-if="showUpdated">aktualisiert am {{ lastUpdated }}</div>
    <div>{{ $page.frontmatter.chapter }}</div>
    <h1 class="article-header__title">{{ $page.frontmatter.title }}</h1>
  </div>
</template>

<script>
export default {
  computed: {
    showUpdated: function() {
      return (
        this.$page.frontmatter.type === 'article' ||
        this.$page.frontmatter.type === 'glossary'
      );
    },
    lastUpdated: function() {
      const date = new Date(this.$page.lastUpdated);
      return `${('0' + date.getDate()).slice(-2)}.${(
        '0' + date.getMonth()
      ).slice(-2)}.${date.getFullYear()}`;
    },
  },
};
</script>

<style lang="scss">
.article-header {
  &__updated {
    float: right;
  }
  &__title {
    clear: both;
    margin-top: 1em;
  }
}
</style>



