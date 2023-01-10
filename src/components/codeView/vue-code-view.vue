<template>
  <div style="width: 100%;height: 100%;overflow-y: auto">
    <code-viewer layout="right"></code-viewer>
  </div>
</template>

<script>
export default {
  name: "code-view",
  props:{
    type:{
      type: String,
      required: ''
    }
  }
}
</script>

<style scoped>

</style>