<template>
  <div class="home">
    <div class="content">
      <div class="logo">
        <a href="#/result"
          ><img
            src="@/assets/images/main-logo1.png"
            alt="logo"
            class="logo-image"/></a>
        <article>
          <h2>尋找車道</h2>
          <h1>踏上單車</h1>
          <p>來趟輕鬆之旅</p>
        </article>
      </div>
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
          <a href="#/result"><button type="button">找單車</button></a>
          <a href="#/result"><button type="button">找車道</button></a>
          <a href="#/result"><button type="button">找附近</button></a>
        </div>
        <hr>
        <ul class="icon-group">
          <li><img src="@/assets/images/icon-bike.png" class="icon-item" alt="bike icon"></li>
          <li><img src="@/assets/images/icon-spot.png" class="icon-item" alt="spot icon"></li>
          <li><img src="@/assets/images/icon-restaurant.png" class="icon-item" alt="restaurant icon"></li>
          <li><img src="@/assets/images/icon-camera.png" class="icon-item" alt="camera icon"></li>
          <li><img src="@/assets/images/icon-route.png" class="icon-item" alt="route icon"></li>
          <li><img src="@/assets/images/icon-bike.png" class="icon-item" alt="bike icon"></li>
          <li><img src="@/assets/images/icon-spot.png" class="icon-item" alt="spot icon"></li>
          <li><img src="@/assets/images/icon-restaurant.png" class="icon-item" alt="restaurant icon"></li>
          <li><img src="@/assets/images/icon-camera.png" class="icon-item" alt="camera icon"></li>
          <li><img src="@/assets/images/icon-route.png" class="icon-item" alt="route icon"></li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <RideBike/>
      <ul class="trees">
        <li><img src="@/assets/images/tree1.png" alt="tree" class="tree"></li>
        <li><img src="@/assets/images/tree2.png" alt="tree" class="tree"></li>
      </ul>
    </div>
  </div>
</template>

<script>
import RideBike from '@/components/RideBike.vue'

export default {
  name: 'Home',
  components: {
    RideBike
  }
}
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
.home{
  // max-width: 1920;
  margin: 0 auto;
  background-image: url('../assets/images/background.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @include pad {
    background-image: url('../assets/images/background2.png');
  }
  .content{
    padding-top: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    @include padpro{
      flex-direction: column;
    }
    .logo img{
      margin-top: 20px;
      width: 280px;
      background-image: url('../assets/images/main-logo2.png');
      background-repeat: no-repeat;
      @include phone{
        width: 180px;
        background-size: 45px;
      }
    }
    article{
      margin-top: 20px;
      font-size: 40px;
      line-height: 50px;
      width: 280px;
      text-align: left;
      @include padpro{
        text-align: center;
      }
      @include phone{
        font-size: 22px;
        line-height: 30px;
      }
    }
    .search-group{
      margin-left: 80px;
      margin-top: 80px;
      @include padpro{
      margin-left: 0px;
    }
    @include phone{
          margin-top: 20px;
        }
      .area-item{
        width: 500px;
        font-size: 40px;
        text-align: center;
        margin-bottom: 40px;
        border-radius: 10px;
        color: #0E5978;
        background: white;
        @include phone{
          width: 300px;
          font-size: 30px;
          margin-bottom: 20px;
        }
      }
      .search-type{
        display: flex;
        justify-content: space-between;
        text-align: center;
        margin-bottom: 60px;
        @include phone{
          margin-bottom: 0px;
        }
        a{
          text-decoration: none;
          button {
          display: block;
          width: 150px;
          font-size: 30px;
          border-radius: 10px;
          background: #0E5978;
          color: white;
          @include phone{
            width: 90px;
            font-size: 23px;
          }
          }
        }
      }
      hr {
        background: #106285;
        height: 4.5px;
        margin-bottom: 10px;
        @include padpro{
          display: none;
        }
      }
      .icon-group{
        display: flex;
        justify-content: space-between;
        @include padpro{
          display: none;
        }
      }
    }
  }
  .footer{
    .trees{
      display: flex;
      justify-content: flex-end;
      .tree{
        margin-right: 50px;
        height: 400px;
        @include padpro{
          margin-right: 20px;
          height: 250px;
        }
        @include phone{
          height: 150px;
          margin-right: 0;
        }
      }
    }
  }
}
</style>
