<template>
  <div class="ride-boke">
    <ul class="riders">
        <li><img src="@/assets/images/rider1.png" alt="rider" class="rider"></li>
        <li><img src="@/assets/images/rider2.png" alt="rider" class="rider"></li>
        <li><img src="@/assets/images/rider3.png" alt="rider" class="rider"></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
.ride-boke{
    .riders{
        display: flex;
        justify-content: flex-end;
        margin-top: 100px;
        @include padpro{
          justify-content: center;
        }
        .rider{
            width: 250px;
            margin-right: 10px;
            @include padpro{
              width: 150px;
            }
            @include phone{
              width: 100px;
            }
        }
    }
}
</style>
