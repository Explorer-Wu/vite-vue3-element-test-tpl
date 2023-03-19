<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
defineProps<{ msg: string }>()
const count = ref(0)
const input = ref('element-plus')
const curDate = ref('')
const toast = () => {
  ElMessage.success('Hello')
}
</script>

<template>
  <!-- <div class="greetings"></div> -->
  <h1>{{ msg }}</h1>

  <p>
    See
    <a href="https://element-plus.org" target="_blank">element-plus</a> for
    more information.
  </p>

  <!-- example components -->
  <div class="mb-4">
    <el-button size="large" @click="toast">El Message</el-button>
  </div>

  <div class="my-2 text-center flex flex-wrap justify-center items-center">
    <el-button @click="count++">count is: {{ count }}</el-button>
    <el-button type="primary" @click="count++">count is: {{ count }}</el-button>
    <el-button type="success" @click="count++">count is: {{ count }}</el-button>
    <el-button type="warning" @click="count++">count is: {{ count }}</el-button>
    <el-button type="danger" @click="count++">count is: {{ count }}</el-button>
    <el-button type="info" @click="count++">count is: {{ count }}</el-button>
  </div>

  <div>
    <el-tag type="success" class="m-1">Tag 1</el-tag>
    <el-tag type="warning" class="m-1">Tag 1</el-tag>
    <el-tag type="danger" class="m-1">Tag 1</el-tag>
    <el-tag type="info" class="m-1">Tag 1</el-tag>
  </div>

  <div class="my-2">
    <el-input class="m-2" v-model="input" style="width: 200px;" />
    <el-date-picker class="m-2" v-model="curDate" type="date" placeholder="Pick a day"></el-date-picker>
  </div>

  <p>For example, we can custom primary color to 'green'.</p>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test components.
  </p>
  <p>
    Edit
    <code>styles/element/var.scss</code> to test scss variables.
  </p>

  <p>
    Full Example:
    <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
    <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>
    | On demand Example:
    <a
      href="https://github.com/element-plus/unplugin-element-plus"
      target="_blank"
    >unplugin-element-plus/examples/vite</a>
  </p>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
