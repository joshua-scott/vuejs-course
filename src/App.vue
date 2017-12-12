<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <app-quote>
          <h2 slot="title">Here we're using Slots</h2>
          <span slot="subtitle" class="subtitle">There is indeed text here, so this is what's shown. But if this wasn't passed down, the fallback text (from the Quote component itself) would be displayed.</span>
          <div>
            <p>This allows us to put html code *inside* other components... groovy!</p>
            <p>When using slots:</p>
            <ul>
              <li><strong>Styles</strong> from the <strong>child</strong> component are what matters</li>
              <li>All other data/methods etc are on the <strong>parent</strong> component</li>
            </ul>
          </div>
        </app-quote>
      </div>
    </div>
  </div>
</template>

<script>
  import Quote from './components/Quote.vue'

  export default {
    components: {
      appQuote: Quote
    }
  }
</script>

<style>
  li {
    list-style: none;
  }

  .subtitle {
    color: #ccc;
  }
</style>
