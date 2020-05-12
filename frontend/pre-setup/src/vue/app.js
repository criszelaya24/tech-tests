import "https://unpkg.com/vue@latest/dist/vue.js";

const app = {
  template: `
    <div>
      <button @click.prevent="incrementCounter">
        Clicked {{count}} times
      </button>
    </div>
  `,
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incrementCounter: function () {
      this.count += 1;
    },
  },
};


new Vue({
  el: "#root",
  components: {
    app,
  },
});