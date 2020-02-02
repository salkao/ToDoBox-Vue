export default {
  data() {
    return {
      windowWidth: window.screen.width,
    };
  },
  created() {
    window.addEventListener('resize', () => {
      this.windowWidth = window.innerWidth;
    });
  },
  computed: {
    width() {
      return this.windowWidth;
    },
  },
};
