<template>
  <div class="article-header">
    <div class="article-header__updated" v-if="showUpdated">Aktualisiert am {{ lastUpdated }}</div>
    <div class="article-header__chapter">{{ $page.frontmatter.chapter }}</div>
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
@import '~@theme/styles/variables';

.article-header {
  &__chapter,
  &__updated {
    color: $color-text-grey;
  }

  &__title {
    margin-top: 0.5em;
  }

  &__chapter {
    display: none;
  }
}

@media (min-width: 1024px) {
  .article-header {
    &__chapter {
      display: block;
    }
    &__updated {
      float: right;
    }
    &__title {
      clear: both;
    }
  }
}
</style>



