<template>
  <div>
    <ul>
      <li v-for="page in entries">
        <a :href="page.path">{{ page.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    entries: function() {
      const entries = [];
      this.$site.pages.forEach(page => {
        if (page.frontmatter.type === 'glossary') {
          entries.push(page);
        }
      });
      return entries;
    },
  },
};
</script>

<style lang="scss">
</style>



