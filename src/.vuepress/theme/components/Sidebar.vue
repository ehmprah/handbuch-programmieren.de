<template>
  <div class="sidebar">
    <div class="sidebar__headline">Inhaltsverzeichnis</div>

    <div class="toc">
      <!-- TODO turn chapters into ol as well! -->
      <!-- TODO fix padding -->
      <div class="toc__chapter" v-for="(pages, title) in chapters">
        <div class="toc__chapter-title">{{ title }}</div>
        <ol class="toc__list">
          <li v-for="page in pages">
            <a :href="page.path">{{ page.title }}</a>
          </li>
        </ol>
      </div>
    </div>

    <div class="sidebar__headline">Mehr vom Autor</div>
    <p>
      Ich blogge auf
      <a target="_blank" href="https://frgmnts.blog">frgmnts.blog</a> und bin auf
      <a target="_blank" href="https://twitter.com/ehmprah">Twitter</a> und
      <a target="_blank" href="https://www.linkedin.com/in/ehmprah/">Linkedin</a>.
      Den Quellcode für handbuch-programmieren.de gibt's auf
      <a
        href="https://github.com/ehmprah/handbuch-programmieren.de"
      >Github</a>.
    </p>

    <div class="sidebar__headline">Sonstiges</div>
    <p>
      <a href="/impressum/">Impressum</a>
    </p>
  </div>
</template>

<script>
import chapters from './mixins/chapters';

export default {
  mixins: [chapters],
  mounted() {
    console.log(this.$site);
    console.log(this.$page);
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




