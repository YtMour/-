<template>
  <div class="app">
    <!-- v-mode => :value + @input -->
    <BaseSelect
    v-mode="selectId"
    ></BaseSelect>
  </div>
</template>

<script>
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  components: {
    BaseSelect,
  },
  methods: {
    handleChange(e) {
      console.log(e);
      this.selectId = e
    }
    
  }
}
</script>

<style>
</style>