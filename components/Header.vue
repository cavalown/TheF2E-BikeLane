<template>
  <div class="header">
    <div class="logo">
      <NuxtLink to="/"
        ><img src="../assets/images/LOGO.svg" alt="logo"
      /></NuxtLink>
    </div>
    <ul class="navbar">
      <li>
        <NuxtLink to="/searchBike">尋找單車</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/searchLane">尋找車道</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {}
  },
}
</script>

<style lang="scss">
.header {
  height: 80px;
  border-bottom: rgba(36, 33, 33, 0.3) 2px solid;
  display: flex;
  justify-content: space-between;
  background-color: white;

  .logo {
    width: 1px;
    height: 44px;
    margin-left: 40px;
  }

  ul {
    display: flex;
    margin-right: 136px;
    align-items: center;
    list-style: none;

    li {
      margin-left: 24px;
      list-style-type: none;
      width: 96px;
      height: 40px;
      display: block;
      text-align: center;

      a {
        text-decoration: none;
        color: rgba(14, 89, 120, 1);
        line-height: 24px;
        font-size: 16px;
        font-weight: 700;
        position: relative;
        top: 20%;
      }

      &:hover {
        background-color: rgba(14, 89, 120, 1);

        a {
          color: white;
        }
      }
    }
  }
}
</style>
