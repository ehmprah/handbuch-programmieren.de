<template>
  <div class="updated" v-if="showUpdated">Zuletzt aktualisiert am {{ lastUpdated }}</div>
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
.updated {
  text-align: right;
  margin-bottom: 1em;
}
</style>



