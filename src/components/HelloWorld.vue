<template>
  <div>
    <p>{{ defaultText }}</p>
    <a :style="('font-size:'+style+'px')">{{ msg }}</a>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
    <button @click="sizeUp()">sizeUp</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  style: "10",
  a: 10,
  mounted () {
    browser.runtime.sendMessage({})
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    }
  },
  data () {
    return {
      msg: "hogehogeMessage"
    }
  },
  methods: {
    clear() {
      this.msg = ""
    },
    sizeUp() {
      this.style = "20"
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
