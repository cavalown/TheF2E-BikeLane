<template>
  <div class="search-lane">
    <Header />
    <div class="content">
      <div class="left-side">
        <div class="search-area">
          <h2>尋找車道</h2>
          <SearchColumn />
        </div>
        <hr />
        <div class="search-advanced">
          <h5>進階篩選</h5>
          <div class="distance-and-direction">
            <div class="distance">
              <select name="distance-option" v-model="chooseDistance">
                <option value="">距離</option>
                <option v-for="distance of distances" :key="distance">
                  {{ distance }}
                </option>
              </select>
            </div>
            <div class="direction-option">
              <select name="direction" v-model="chooseDirect">
                <option value="">方向</option>
                <option v-for="direction of directions" :key="direction">
                  {{ direction }}
                </option>
              </select>
            </div>
          </div>
        </div>
        <hr />
        <div class="search-result">
          <div class="search-result-item">
            <h5>臺中市大安濱海自行車道</h5>
            <div class="info">
              <div class="address">
                <img src="../assets/images/address.png" alt="map logo" />
                <p class="body2">臺中市 大安區</p>
              </div>
              <div class="direction-and-distance">
                <div class="direction">
                  <img
                    src="../assets/images/direction.png"
                    alt="direction icon"
                  />
                  <p class="body2">雙向</p>
                </div>
                <div class="distance">
                  <img
                    src="../assets/images/distance.png"
                    alt="distance icon"
                  />
                  <p class="body2">26000公尺</p>
                </div>
              </div>
              <div class="time-start">
                <p class="subtitle">
                  開始 <span class="body2">頂安海堤安心橋</span>
                </p>
              </div>
              <div class="time-end">
                <p class="subtitle">
                  結束 <span class="body2">台61縣西部濱海公路南下144公里</span>
                </p>
              </div>
              <br />
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
  name: 'SearchLanePage',
  data() {
    return {
      directions: ['東', '南', '西', '北'],
      chooseDirect: '',
      distances: ['由近到遠', '由遠到近'],
      chooseDistance: '',
    }
  },
}
</script>

<style lang="scss">
.search-lane {
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
      .search-advanced {
        h5 {
          text-align: right;
          color: var(--primary-dark);
          margin-right: 12px;
          margin-bottom: 16px;
        }
        .distance-and-direction {
          display: flex;
          justify-content: center;
          gap: 12px;
          select {
            width: 144px;
            height: 40px;
            text-align: center;
          }
        }
      }
      .search-result {
        overflow-y: overlay;
        height: 380px;
        padding-bottom: 16px;
        .search-result-item {
          padding: 0px 8px;
          background-color: var(--gray-100);
          border-radius: 8px;
          margin-bottom: 12px;
          h5 {
            padding-top: 16px;
            margin-bottom: 12px;
          }
          .info {
            .address {
              display: flex;

              img {
                width: 16px;
                height: 20px;
                margin-right: 8px;
              }
              p {
                color: var(--gray-800);
              }
            }
            .direction-and-distance {
              display: flex;
              justify-content: flex-start;
              margin-top: 15px;
              .direction,
              .distance {
                display: flex;
                width: 100px;
                gap: 10px;
                img {
                  width: 20px;
                  height: 20px;
                }
              }
            }
            .time-start,
            .time-end {
              margin-top: 15px;
              p {
                color: var(--primary-dark);
              }
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
