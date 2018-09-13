<template>
    <div class="layout">
        <Header></Header>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
import Header from '@/components/header'
export default {
  components: {
      Header
  },
  data() {
      return {}
  }
}
</script>
<style lang="scss" scoped>

</style>

