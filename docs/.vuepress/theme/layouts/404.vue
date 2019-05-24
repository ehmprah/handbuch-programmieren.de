<template>
  <div class="page">
    <header class="page__header">
      <Header/>
    </header>
    <main class="page__main">
      <section class="page__content">
        <h1>404</h1>
        <p>Satz mit X, das war wohl nix!</p>
      </section>
      <aside class="page__sidebar">
        <Sidebar/>
      </aside>
    </main>
  </div>
</template>

<script>
import Header from '@theme/components/Header.vue';
import Sidebar from '@theme/components/Sidebar.vue';

export default {
  components: {
    Header,
    Sidebar,
  },
};
</script>

<style src="../styles/page.scss" lang="scss"></style>
