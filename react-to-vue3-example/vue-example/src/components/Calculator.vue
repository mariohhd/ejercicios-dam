<template>
  <section>
    <input
      type="number"
      v-model="number1"
    />
    <input
      type="number"
      v-model="number2"
    />
    <label for="sum">Suma</label>
    <input
      id="sum"
      type="radio"
      v-model="operation.sum"
    />
    <label for="sum">Resta</label>
    <input
      id="sum"
      type="radio"
      v-model="operation.sub"
    />
    <label for="product">Product</label>
    <input
      id="sum"
      type="radio"
      v-model="operation.product"
    />
    <label for="modules">module</label>
    <input
      id="sum"
      type="radio"
      v-model="operation.module"
    />
    <p>Total Sum: {{ sum }}</p>
  </section>
</template>

<script setup>
  import { ref, computed, reactive } from 'vue';
  const number1 = ref(0);
  const number2 = ref(0);
  const operation = reactive({
    sum: true,
    sub: false,
    product: false,
    module: false
  })
  const sum = computed(() => number1.value + number2.value);
</script>

<style lang="less" scoped>
</style>