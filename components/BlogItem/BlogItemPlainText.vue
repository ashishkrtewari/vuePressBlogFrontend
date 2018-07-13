<template>
    <div class="zf-container zf-mb-xs-40 zf-mb-md-60">
        <div class="row row-flex">
            <div class="col-xs-12 col-md-8">
                <p v-html="content.subCopy"></p>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    props: {
        content: {}
    }
}
</script>

