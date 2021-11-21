<template>
  <div class="result-page" id="app">
    <div class="content">
      <div class="search-group">
        <div class="search-area">
          <select class="area-item" aria-label="city">
            <option selected>選擇地區</option>
            <option value="Taipei" class="city">臺北市</option>
            <option value="NewTaipei" class="city">新北市</option>
            <option value="Taoyuan" class="city">桃園市</option>
            <option value="Taichung" class="city">臺中市</option>
            <option value="Tainan" class="city">臺南市</option>
            <option value="Kaohsiung" class="city">高雄市</option>
            <option value="Keelung" class="city">基隆市</option>
            <option value="Hsinchu" class="city">新竹市</option>
            <option value="HsinchuCounty" class="city">新竹縣</option>
            <option value="MiaoliCounty" class="city">苗栗縣</option>
            <option value="ChanghuaCounty" class="city">彰化縣</option>
            <option value="NantouCounty" class="city">南投縣</option>
            <option value="YunlinCounty" class="city">雲林縣</option>
            <option value="ChiayiCounty" class="city">嘉義縣</option>
            <option value="Chiayi" class="city">嘉義市</option>
            <option value="PingtungCounty" class="city">屏東縣</option>
            <option value="YilanCounty" class="city">宜蘭縣</option>
            <option value="HualienCounty" class="city">花蓮縣</option>
            <option value="TaitungCounty" class="city">臺東縣</option>
            <option value="KinmenCounty" class="city">金門縣</option>
            <option value="PenghuCounty" class="city">澎湖縣</option>
            <option value="LienchiangCounty" class="city">連江縣</option>
          </select>
        </div>
        <div class="search-type">
          <button type="submit">找單車</button>
          <button type="submit">找車道</button>
          <button type="submit">找單車和車道</button>
        </div>
      </div>
      <div class="result-group">
        <ResultList />
      </div>
    </div>
    <div class="map"></div>
  </div>
</template>

<script>
import ResultList from '@/components/ResultList.vue'
// import Vue from 'vue'
// import axios from 'axios'

export default {
  name: 'ResultPage',
  components: {
    ResultList
  }
}

// const res = axios.get(`https://ptx.transportdata.tw/MOTC?t=Bike&v=2#!/Bike/BikeApi_Availability`);

// const App = {
//   bikeStation: String,
//   address: String,
//   totalAmount: String,
//   leftAmount: String
// }

// Vue.createApp(App).mount('#app');
</script>

<style lang="scss">
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

.result-page{
  max-width: 1920px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  .content{
    width: 450px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    .search-group{
      margin-top: 50px;
      text-align: center;
      .area-item{
        width: 380px;
        font-size: 35px;
        text-align: center;
        border-radius: 10px;
        color: #0E5978;
        background: white;
        margin-bottom: 20px;
      }
      .search-type{
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        button{
          width: 100px;
          font-size: 24px;
          border-radius: 10px;
          background: #0E5978;
          color: white;
        }
      }
    }
  }
  .map{
    width: 1200px;
  }
}

</style>
