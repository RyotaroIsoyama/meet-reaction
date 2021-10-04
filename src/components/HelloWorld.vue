<template>
  <div>
    <p>{{ defaultText }}</p>
    <a :style="('font-size:'+String(size)+'px')">{{ msg }}</a>
    <a>{{String(size)}}</a>
    <input type="text" v-model="msg">
    <button @click="clear()">clear</button>
    <button @click="sizeUp()">sizeUp</button>
  </div>
</template>

<script>
import firestore from '@/plugins/firebase.js'

export default {
  name: 'HelloWorld',
  style: "10",
  mounted () {
    const snapshot = firestore.collection("pages").get()
    snapshot.forEach((doc) => {
      console.log(doc.id, '=>', doc.data())
    })
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
    }
  },
  data () {
    return {
      msg: "hogehogeMessage",
      size: 10
    }
  },
  methods: {
    clear() {
      this.msg = ""
    },
    sizeUp() {
      this.size += 10
    }
  }
}
</script>

<style scoped>
p {
  font-size: 20px;
}
</style>
