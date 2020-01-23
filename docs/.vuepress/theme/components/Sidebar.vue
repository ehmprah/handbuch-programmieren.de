<template>
  <div class="sidebar">
    <div class="sidebar__headline">Inhaltsverzeichnis</div>
    <div class="sidebar__content">
      <TableOfContents/>
    </div>

    <div class="sidebar__headline">Mehr vom Autor</div>
    <div class="sidebar__content">
      Ich bin Mario "ehmprah" Kaiser und entwickle Games und andere Dinge, die du auf
      <a target="_blank" href="https://ehmprah.com/">ehmprah.com</a> findest. Folge mir auf
      <a target="_blank" href="https://twitter.com/ehmprah">Twitter</a> für Updates.
      Den Quellcode für handbuch-programmieren.de gibt's übrigens auf
      <a
        href="https://github.com/ehmprah/handbuch-programmieren.de"
      >Github</a>.
    </div>

    <div class="sidebar__headline">English version</div>
    <div class="sidebar__content">
      I'm also creating an English version of this book: <a href="https://programming-guidebook.com/">Programming Guidebook</a>.
    </div>

    <div class="sidebar__headline">Sonstiges</div>
    <div class="sidebar__content">
      <a href="/impressum/">Impressum</a>
    </div>
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

  &__content {
    margin-bottom: 2em;
  }
}
</style>




