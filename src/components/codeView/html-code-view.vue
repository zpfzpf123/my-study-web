<template>
  <div style="width: 100%;height: 100%;overflow-y: auto">
    <!-- slug是codeopen上对应的url  tab是需要显示的tab -->
    <code-open :height="700" title="Conditional rendering" slug="oNXdbpB" tab="js,result" />
  </div>
</template>

<script>
import CodeOpen from "@/components/codePen/codeOpen";
export default {
  name: "html-code-view",
  components: {
    CodeOpen
  }
}
</script>

<style scoped>

</style>