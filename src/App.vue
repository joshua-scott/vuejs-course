<template>
    <div class="container">
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-quote-grid :quotes="quotes"></app-quote-grid>
        <div class="row">
          <div class="col-sm-12 text-center">
            <div class="alert alert-info">Simply click on a quote to delete it.</div>
          </div>
        </div>
    </div>
</template>

<script>
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";

export default {
  data: function() {
    return {
      quotes: [
        "Just a quote to see something",
        "and another",
        "striker!!!",
        "foot like a traction engine",
        "shit!!!",
        "did ya see that??!!"
      ],
      maxQuotes: 10
    };
  },
  methods: {
    newQuote(text) {
      if (this.quotes.length + 1 <= this.maxQuotes) {
        this.quotes.push(text);
      } else {
        alert(`You already have ${this.maxQuotes} quotes!`);
      }
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote
  }
};
</script>

<style>

</style>
