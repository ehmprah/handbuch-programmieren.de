<template>
  <div class="next-page" v-if="nextPage">
    <div class="next-page__label">Nächstes Kapitel:</div>
    <a :href="nextPage.path">{{ nextPage.title }}</a>
  </div>
</template>

<script>
import chapters from './mixins/chapters';

export default {
  mixins: [chapters],
  computed: {
    nextPage: function() {
      let afterCurrent = false;
      for (let chapter in this.chapters) {
        for (let page of this.chapters[chapter]) {
          if (afterCurrent) {
            return page;
          }
          if (page === this.$page) {
            afterCurrent = true;
          }
        }
      }
      return false;
    },
  },
};
</script>

<style lang="scss">
@import '~@theme/styles/variables';

.next-page {
  border-top: 1px solid $color-text-light;
  padding: 2em 2em 0 2em;
  margin: 2em 0 0 0;
  text-align: center;
  &__label {
    margin-bottom: 0.5em;
  }
}
</style>



