<template>
    <section>
        <BlogItemHeader :featured-image="postData.featuredImage" :post-title="postData.postTitle" :post-description="postData.postDescription" />
        <template v-for="(item,index) in postData.content">
            <BlogItemLeftAside :key="index" v-if="item.template === 'leftAside'" :content="item" />
            <BlogItemRightAside :key="index" v-if="item.template === 'rightAside'" :content="item" />
            <BlogItemPlainText :key="index" v-if="item.template === 'plainText'" :content="item" />
        </template>
    </section>
</template>

<script>
import BlogItemHeader from "@/components/BlogItem/BlogItemHeader";
import BlogItemLeftAside from "@/components/BlogItem/BlogItemLeftAside";
import BlogItemRightAside from "@/components/BlogItem/BlogItemRightAside";
import BlogItemPlainText from "@/components/BlogItem/BlogItemPlainText";

export default {
    components: {
        BlogItemHeader,
        BlogItemLeftAside,
        BlogItemRightAside,
        BlogItemPlainText
  },
    props: {
        postData:{}
    }
}
</script>

