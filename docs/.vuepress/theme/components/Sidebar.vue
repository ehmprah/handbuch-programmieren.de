<template>
  <div class="sidebar">
    <div class="sidebar__headline">Inhaltsverzeichnis</div>
    <TableOfContents/>

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
import TableOfContents from '@theme/components/TableOfContents';

export default {
  components: {
    TableOfContents,
  },
};
</script>

<style lang="scss">
@import '~@theme/styles/variables';

.sidebar {
  &__headline {
    color: $color-text-grey;
    border-bottom: 1px dashed $color-text-grey;
    padding-bottom: 0.5em;
    margin-bottom: 1em;
  }
}
</style>




