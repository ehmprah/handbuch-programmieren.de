export default {
  computed: {
    chapters: function() {
      const chapters = {};
      // Group all article pages by chapter
      this.$site.pages.forEach(page => {
        if (page.frontmatter.type === 'article' && page.frontmatter.published) {
          if (chapters[page.frontmatter.chapter] === undefined) {
            chapters[page.frontmatter.chapter] = [];
          }
          chapters[page.frontmatter.chapter].push(page);
        }
      });
      // Sort by article weight
      for (let chapter in chapters) {
        chapters[chapter].sort((a, b) => {
          if (a.frontmatter.weight < b.frontmatter.weight) return -1;
          if (a.frontmatter.weight > b.frontmatter.weight) return 1;
          return 0;
        });
      }
      // Order by chapter
      const ordered = {};
      Object.keys(chapters)
        .sort()
        .forEach(key => {
          ordered[key] = chapters[key];
        });
      return ordered;
    },
  },
};
