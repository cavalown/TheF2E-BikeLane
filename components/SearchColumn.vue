<template>
  <div class="search-column">
    <form>
      <input type="text" placeholder="請輸入關鍵字" v-model="keyword" />
      <div class="actions">
        <select name="city" v-model="chooseCity">
          <option value="">縣市</option>
          <option v-for="city of citys" :key="city">
            {{ city }}
          </option>
        </select>
        <button type="submit">搜尋</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchColumn',
  data() {
    return {
      keyword: '',
      chooseCity: '',
      citys: [
        '台北市',
        '新北市',
        '桃園市',
        '新竹市',
        '苗栗縣',
        '台中市',
        '彰化縣',
        '雲林縣',
        '嘉義縣',
        '台南市',
        '高雄市',
        '屏東縣',
        '宜蘭縣',
        '花蓮縣',
        '台東縣',
        '澎湖縣',
        '金門縣',
      ],
    }
  },
}
</script>

<style lang="scss">
.search-column {
  background: none;
  box-shadow: none;
  form {
    width: calc(100% - 1px);
    input {
      width: 98%;
      height: 40px;
    }
    .actions {
      margin-top: 12px;
      display: flex;
      justify-content: space-between;
      select {
        width: 48%;
        height: 40px;
        border-radius: 4px;
        text-align: center;
      }
      button {
        width: 48%;
        height: 40px;
        border: none;
        background-color: rgba(14, 89, 120, 1);
        color: white;
        border-radius: 4px;
      }
    }
  }
}
</style>
