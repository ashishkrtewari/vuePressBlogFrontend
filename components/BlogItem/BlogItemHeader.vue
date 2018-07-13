<template>
    <div class="zf-container-fluid zf-mb-xs-40 zf-mb-md-60">
        <div class="row">
            <figure>
                <img :src="featuredImage" :alt="postTitle" class="img-responsive">
            </figure>
            <div class="text-center">
                <h2 class="zf-fs-head-54 zf-mt-xs-20" v-html="postTitle"></h2>
                <p class="zf-mt-xs-20" v-html="postDescription"></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        featuredImage:String,
        postTitle:String,
        postDescription:String,
    }
}
</script>
<style>
figure{
    max-height: 50vh;
    width: 100%;
    overflow:hidden;
}
</style>

