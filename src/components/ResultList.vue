<template>
  <div class="ride-boke" id="app">
    <ul class="riders">
        <li>
          <h1>{{ bikeStation }}</h1>
          <p>{{ address }}</p>
          <div class="station-info">
            <p class="total-amount">{{ totalAmount }}</p>
            <p class="left-amount">{{ leftAmount }}</p>
          </div>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ResultList',
  props: {
    bikeStation: String,
    address: String,
    totalAmount: String,
    leftAmount: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
// RWD
@mixin padpro {
  @media (max-width: 1024px) {
    @content;
  }
}
@mixin pad {
  @media (max-width: 768px) {
    @content;
  }
}

@mixin phone {
  @media (max-width: 568px) {
    @content;
  }
}
</style>
