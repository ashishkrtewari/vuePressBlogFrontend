<template>
  <div class="zf-container-fluid">
    <nuxt-link to="/blog">
      <a>
        <img :src="featuredImage" :class="[{'img-responsive':!carouselTile},{'zf-img-adaptive':carouselTile}]" alt="Blog Post Image">
        <div class="zf-mt-xs-20" :class="[{'text-center':hero},{'zf-ml-xs-15':!hero}]">
          <h3 :class="[{'zf-fs-head-34':hero},{'zf-fs-head-24':!hero}]" v-html="head"></h3>
          <p v-html="subCopy"></p>
          <div class="zf-brand"><span>READ MORE</span></div>
        </div>
      </a>
    </nuxt-link>
  </div>
</template>

<script>
export default {  
  props: ['featuredImage', 'head', 'subCopy', 'url','hero','carouselTile'],
  data() {
    if(this.hero === undefined){
      this.hero = false; 
    }
    return {}
  }
};
</script>
