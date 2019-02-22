<template>
  <div class="sidebar">
    <div class="sidebar__headline">Inhaltsverzeichnis</div>
    <ul class="contents">
      <li v-for="page in pages">
        <a :href="page.path">{{ page.title }}</a>
      </li>
    </ul>

    <div class="sidebar__headline">Folgen Sie dem Autor</div>
    <p>
      Mario Kaiser bloggt unter
      <a target="_blank" href="https://frgmnts.blog">frgmnts.blog</a>, ist auf
      <a target="_blank" href="https://twitter.com/ehmprah">Twitter</a> und
      <a target="_blank" href="https://www.linkedin.com/in/ehmprah/">Linkedin</a>.
    </p>

    <p>
      Der Quellcode für handbuch-programmieren.de ist auf
      <a
        href="https://github.com/ehmprah/handbuch-programmieren.de"
      >Github</a>.
    </p>

    <div class="sidebar__headline">Sonstige Links</div>
    <p>
      <a href="/glossar">Glossar</a>
    </p>
    <p>
      <a href="/impressum">Impressum</a>
    </p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$site);
    console.log(this.$page);
  },
  computed: {
    pages: function() {
      const pages = [];
      this.$site.pages.forEach(page => {
        if (page.frontmatter.type === 'article') {
          pages.push(page);
        }
      });
      return pages;
    },
  },
};
</script>

<style lang="scss">
@import '../styles/variables';

.sidebar {
  &__headline {
    color: $color-text-grey;
    border-bottom: 1px dashed $color-text-grey;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
  }
}
</style>




