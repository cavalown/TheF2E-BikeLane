<template>
  <div class="home">
    <Header />
    <div class="content">
      <img src="../assets/images/LOGO-big.svg" alt="big logo" />
      <h1>尋找單車,</h1>
      <h2>來場悠閒的放鬆之旅!</h2>
      <div class="search-column">
        <SearchColumn />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>

<style lang="scss">
.home {
  width: 100%;
  min-height: 750px;
  margin: 0 auto;
  font-family: 'Noto Sans';
  background: rgba(240, 249, 252, 1);
  background-image: url('../assets/images/bg-1.svg'),
    url('../assets/images/bg-2.svg'), url('../assets/images/person1.svg'),
    url('../assets/images/person2.svg'), url('../assets/images/person3.svg');
  background-repeat: no-repeat;
  background-position: -120px bottom, right top, 40% bottom, 60% bottom,
    80% bottom;

  .content {
    margin-left: 20%;
    margin-top: 30px;
    width: 430px;

    h1,
    h2 {
      line-height: 50px;
      font-size: 40px;
      font-weight: 700;
      color: rgba(10, 66, 89, 1);
    }

    .search-column {
      margin-top: 40px;
    }
  }
}
</style>
