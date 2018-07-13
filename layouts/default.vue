<template>
  <div>
    <TheHeader />
    <div class="main">
      <nuxt/>
    </div>
    <!-- jQuery -->
    <script src="/javascript/jquery-3.2.1.js"></script>
    <!-- Bootstrap Core JavaScript -->
    <script src="/javascript/bootstrap.min.js"></script>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  components:{
    TheHeader
  },
  head: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [{ rel: "stylesheet", href: "/css/style.css" }]
  }
};
</script>

<style>
.main {
  margin-top: 100px;
}
</style>
