<template>
    <div class="zf-container zf-mb-xs-40 zf-mb-md-60">
        <div class="row zf-display-flex zf-justify-content-xs-center zf-flex-xs-column zf-flex-md-row">
            <div class="col-xs-12 col-md-5">
                <a href="#">
                    <img :src="content.image" alt="" class="img-responsive">
                </a>
            </div>
            <div class="col-xs-12 col-md-5 zf-mt-xs-20 zf-mt-md-0">
                <div class="zf-display-flex zf-align-items-xs-center zf-min-hei-100">
                    <div class="text-left zf-plr-xs-50">
                        <h3 class="zf-fs-head-24" v-html="content.head"></h3>
                        <p v-html="content.subCopy"></p>
                    </div>
                </div>
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

