<template>
  <div class="base-progress">
    <div class="inner" :style="{ width: w + '%' }">
      <span>{{ w }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  // props: ["w"],
  props:{
  // 1.基础写法（类型校验）
    // w:Number
    //检验的属性名：类型   Number String Boolean Object Function.......

  // 2.完整写法（类型、是否必填、默认值、自定义校验）
    //校验的属性名：{
    // type:类型
    // required：true 是否必填
    // default：默认值
    // validator（value）{
      // 自定义校验逻辑
      // return 是否通过校验
    // }
    // }
    w:{
      type:Number,
      // required:true,
      default:0,
      validator(value){ 
        if(value >= 0&&value <=100){
          return true
        }else{
          console.error("0-100的数字")
          return false
        }
      }

    }
  

    
    
  }


}
</script>

<style scoped>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.inner {
  position: relative;
  background: #379bff;
  border-radius: 15px;
  height: 25px;
  box-sizing: border-box;
  left: -3px;
  top: -2px;
}
.inner span {
  position: absolute;
  right: 0;
  top: 26px;
}
</style>