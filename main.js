new Vue({
  // Declare an element name '#app'.
  // These JS code will effect all the <div id="app"> content.
  el: "#app",

  // data section includes the data will be used in JS.
  // To use data in HTML, use double curly brackets {{}}.
  data: {
    quotes,
    currentQuote: quotes[0],
    show: true,
  },

  // methods section includes functions in JS.
  methods: {
    // Let newQuote be a function that can generate random quotes.
    newQuote: function () {
      // Generate a random number within the range 0 to length.
      const num = Math.floor(Math.random() * quotes.length); // Math.random() generates number from 0 to 1.
      this.currentQuote = quotes[num];
      this.show = !this.show;
      setTimeout(() => {
        this.show = !this.show;
      }, 200);
    },
  },
});
