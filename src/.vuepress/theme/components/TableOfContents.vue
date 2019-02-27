<template>
  <ol class="toc">
    <li class="toc__chapter" v-for="(pages, title) in chapters">
      {{ title }}
      <ol class="toc__pages">
        <li v-for="page in pages">
          <a :href="page.path">{{ page.title }}</a>
        </li>
      </ol>
    </li>
  </ol>
</template>

<script>
import chapters from './mixins/chapters';

export default {
  mixins: [chapters],
};
</script>

<style lang="scss">
@import '~@theme/styles/variables';

.toc {
  list-style-type: none;
  padding-left: 0;
  margin: 2em 0;
  &__pages {
    list-style-type: lower-alpha;
    margin: 0.75em 0;
    padding-left: 1em;
    list-style-position: inside;
  }
}
</style>




