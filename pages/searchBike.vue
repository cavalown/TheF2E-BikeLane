<template>
  <div class="search-bike">
    <Header />
    <div class="content">
      <div class="left-side">
        <div class="search-area">
          <h2>尋找單車</h2>
          <SearchColumn />
        </div>
        <hr />
        <div class="search-result">
          <div class="search-result-item">
            <h5>Title</h5>
            <div class="address">
              <img src="../assets/images/address.png" alt="map logo" />
              <p class="body2">臺灣大道三段/惠來路二段</p>
            </div>
            <div class="situation">
              <p class="body2">正常營運</p>
              <p class="body2">正常營運</p>
              <p class="body2">正常營運</p>
            </div>
          </div>
          <div class="search-result-item">
            <h5>Title</h5>
            <div class="address">
              <img src="../assets/images/address.png" alt="map logo" />
              <p class="body2">臺灣大道三段/惠來路二段</p>
            </div>
            <div class="situation">
              <p class="body2">正常營運</p>
              <p class="body2">正常營運</p>
              <p class="body2">正常營運</p>
            </div>
          </div>
          <div class="search-result-item">
            <h5>Title</h5>
            <div class="address">
              <img src="../assets/images/address.png" alt="map logo" />
              <p class="body2">臺灣大道三段/惠來路二段</p>
            </div>
            <div class="situation">
              <p class="body2">正常營運</p>
              <p class="body2">正常營運</p>
              <p class="body2">正常營運</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right-side"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBikePage',
  data() {
    return {
      searchResult: {},
    }
  },
}
</script>

<style lang="scss">
.search-bike {
  .content {
    .left-side {
      width: 348px;
      --left-side-height: calc(100vh - 145px);
      --search-area-height: 172px;
      --search-result-height: calc(var(--left-side-height) - 172px);
      height: var(--left-side-height);
      box-shadow: 0px 1px 10px rgba(38, 38, 38, 0.15);
      padding: 24px;
      .search-area {
        height: var(--search-area-height);
        padding: 16px;
        border-top: 24px solid var(--primary);
        box-shadow: 0px 0px 10px rgba(38, 38, 38, 0.25);
        border-radius: 8px;
        h2 {
          margin-bottom: 16px;
        }
      }
      .search-result {
        overflow-y: overlay;
        height: 380px;
        padding-bottom: 16px;
        .search-result-item {
          width: 348px;
          height: 134px;
          padding: 16px 8px;
          background-color: var(--gray-100);
          border-radius: 8px;
          margin-bottom: 12px;
          .address {
            display: flex;
            margin-top: 12px;
            margin-bottom: 15px;
            img {
              width: 16px;
              height: 20px;
              margin-right: 8px;
            }
            p {
              color: var(--gray-800);
            }
          }
          .situation {
            display: flex;
            p {
              width: 72px;
              height: 29px;
              margin-right: 12px;
              color: var(--primary-dark);
              border: 1px solid var(--primary-dark);
              border-radius: 4px;
              background-color: var(--primary-tiny);
              padding: 4px 8px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
        }
      }
    }
    .right-side {
    }
  }
}
</style>
