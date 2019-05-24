<template>
  <div class="header">
    <a class="header__name" href="/">handbuch-programmieren.de</a>
    <div class="header__description">{{ $site.description }}</div>
  </div>
</template>

<script>
</script>

<style lang="scss">
.header {
  &__name {
    font-size: 1.5em;
    font-weight: bold;
    text-decoration: none;
  }
  &__description {
    margin-top: 0.5em;
  }
}
</style>
