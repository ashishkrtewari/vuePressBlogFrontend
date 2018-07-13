<template>
  <BlogItem :postData="postData" />
</template>

<script>
import axios from 'axios';
import postData from '@/sample-data/sample-post.json';
import BlogItem from "@/components/BlogItem/BlogItem";

export default {
  components: {
    BlogItem
  },
  data(){
    console.log(postData);
    return {postData} ;
  }

  // async asyncData() {
  //    axios.get('/sample-data/sample-post.json')
  //         .then(function (response) {
  //            console.log(response);
  //         })
  //         .catch(function (error) {
  //           console.log(error);
  //         });
  // }
};
</script>

<style>
</style>
