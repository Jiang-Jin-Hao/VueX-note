<template>
  <div>

    <!--需求：希望在MyHelloWorld.vue里用index.js里的count-->

    <!--    <div>{{ this.$store.state.count }}</div>-->

    <div>{{ count }}</div>
    <div>
      <button @click="add">点我</button>
    </div>

    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
    </ul>

  </div>
</template>

<script>

import {mapState, mapGetters} from 'vuex'

export default {
  name: "MyHelloWorld",
  // 计算属性
  computed: {
    ...mapState(['count', 'todos']),
    ...mapGetters(['doneTodos'])
  },
  methods: {
    add() {
      // 调用index.js的更新方法
      this.$store.commit("increment", 2)
    }
  }
}
</script>

<style>

</style>