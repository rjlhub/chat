<template>
  <div class="general-header row">
    <div class="back box row">
      <p v-show="is_back==1">返回</p>
    </div>
    <p v-show="is_title==1" class="title">{{name}}</p>
    <div class="more-ctrl box row">
      <p v-show="is_more==1">...</p>
    </div>
  </div>
</template>
<script>
export default {
  props:['name','is_back','is_title','is_more'],
  data(){
    return{

    }
  }
}
</script>

<style>
  .general-header {
    height: 0.5rem;
    font-size: 0.18rem;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    background-image: linear-gradient(160deg, #0a7ddc 20%,#00b3ff 80%);
    
  }
  .box {
    width: 0.5rem;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
  .title {
    color: white;
    font-family: 500;
  }
</style>
