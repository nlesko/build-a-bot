export default {
  created() {
    this.$store.dispatch('robotsModule/getParts');
  },
  computed: {
    parts() {
      return this.$store.state.robotsModule.parts || {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
    },
  },
};
