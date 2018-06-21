<template>
  <section class="zf-container-fluid">
    <Homepage :entry='entry'>
    </Homepage>
  </section>
</template>

<script>
import Homepage from "@/components/Homepage";
import Stack from "~/plugins/entry.js";

export default {
  components: {
    Homepage
  },
  async asyncData() {
    let res = await Stack.getEntry({
      contentType: "homepageVersion1",
      reference: "content_modules"
    });
    return { entry: res };
  }
};
</script>

<style>
</style>
