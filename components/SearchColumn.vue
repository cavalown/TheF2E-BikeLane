<template>
  <div class="wrap">
    <form>
      <input type="text" placeholder="請輸入關鍵字" />
      <div class="actions">
        <select name="city" id="">
          <option value="">縣市</option>
          <option value="city">City-Name</option>
        </select>
        <button type="submit">搜尋</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SearchColumn',
}
</script>

<style lang="scss">
.wrap {
  background: none;
  box-shadow: none;
  form {
    width: 100%;
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
