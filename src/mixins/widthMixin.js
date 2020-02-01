export default {
  data() {
    return {
      windowWidth: null,
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
