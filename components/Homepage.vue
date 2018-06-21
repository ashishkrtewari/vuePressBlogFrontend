<template>
    <div v-if="entry">
      <div class="zf-cms" id="zf-homepage">

        <!--- Content Modules For Loop End -->
        <div :key="index" v-for="(module, index) in entry.content_modules">
          <!--- Modular Blocks For Loop End -->
          <div :key="index" v-for="(block, index) in module.modular_blockv1">

            <!-- A1 Module-->
            <div v-if="block.a1storytile" class="container-fluid zf-mb-xs-40">
              <div class="row row-flex">
                <div class="zf-tile">
                  <picture>
                    <source :srcset="block.a1storytile.a1storytile_image_desktop" media="(min-width: 1440px)">
                    <source :srcset="block.a1storytile.a1storytile_image_desktop" media="(min-width: 1024px)">
                    <source :srcset="block.a1storytile.a1storytile_image_mobile_tablet" media="(min-width: 320px)">
                    <img class="img-responsive" :src="block.a1storytile.a1storytile_image_desktop" alt="A1 module">
                  </picture>
                  <div class="zf-sheet center middle">
                    <div class="text-center zf-white">
                      <h4 v-if="block.a1storytile.a1storytile_eyebrow" class="zf-eyebrow white zf-ff-light"><strong>{{block.a1storytile.a1storytile_eyebrow}}</strong></h4>
                      <h1 class="zf-mtb-xs-10">{{block.a1storytile.a1storytile_title}}</h1>
                      <p class="zf-mtb-xs-10">{{block.a1storytile.a1storytile_copy}}</p>
                      <a v-if="block.a1storytile.a1storytile_cta[0]" class="btn btn-underline-white zf-fs-md-20-22 zf-fs-xs-13-15" :href="block.a1storytile.a1storytile_cta[0].cta1.href">{{block.a1storytile.a1storytile_cta[0].cta1.title}}</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- A1 Module ENDS -->

            <div v-if="index === 0" class="zf-container zf-products zf-mb-xs-40">
              <div class="row row-flex">
                  <div class="col-xs-10 col-md-10">
                    <div class="zf-slider-default">
                      <slick ref="slick" :options="slickParams.defaultParams">
                        <div class="zf-tile">
                            <a href="#">
                                <img class="img-responsive" src="https://via.placeholder.com/210x280" alt="productImage">
                                <div class="text-left">
                                    <h5 class="product-name">H5 - Product Name</h5>
                                    <h5 class="product-price">H5 - $145</h5>
                                </div>
                            </a>
                        </div>
                        <div class="zf-tile">
                            <a href="#">
                                <img class="img-responsive" src="https://via.placeholder.com/210x280" alt="productImage">
                                <div class="text-left">
                                    <h5 class="product-name">H5 - Product Name</h5>
                                    <h5 class="product-price">H5 - $145</h5>
                                </div>
                            </a>
                        </div>
                        <div class="zf-tile">
                            <a href="#">
                                <img class="img-responsive" src="https://via.placeholder.com/210x280" alt="productImage">
                                <div class="text-left">
                                    <h5 class="product-name">H5 - Product Name</h5>
                                    <h5 class="product-price">H5 - $145</h5>
                                </div>
                            </a>
                        </div>
                        <div class="zf-tile">
                            <a href="#">
                                <img class="img-responsive" src="https://via.placeholder.com/210x280" alt="productImage">
                                <div class="text-left">
                                    <h5 class="product-name">H5 - Product Name</h5>
                                    <h5 class="product-price">H5 - $145</h5>
                                </div>
                            </a>
                        </div>
                        <div class="zf-tile">
                            <a href="#">
                                <img class="img-responsive" src="https://via.placeholder.com/210x280" alt="productImage">
                                <div class="text-left">
                                    <h5 class="product-name">H5 - Product Name</h5>
                                    <h5 class="product-price">H5 - $145</h5>
                                </div>
                            </a>
                        </div>
                        <div class="zf-tile">
                            <a href="#">
                                <img class="img-responsive" src="https://via.placeholder.com/210x280" alt="productImage">
                                <div class="text-left">
                                    <h5 class="product-name">H5 - Product Name</h5>
                                    <h5 class="product-price">H5 - $145</h5>
                                </div>
                            </a>
                        </div>
                      </slick>
                    </div>
                  </div>
              </div>
            </div>

            <!-- <p>{{slickParams}}</p> -->

            <!-- A2 Module-->

            <div v-if="block.a2storytile" class="zf-container zf-mb-xs-40">
              <div class="row">
                <div class="zf-tile">
                  <picture>
                    <source :srcset="block.a2storytile.a2storytile_image_desktop" media="(min-width: 1440px)">
                    <source :srcset="block.a2storytile.a2storytile_image_desktop" media="(min-width: 1024px)">
                    <source :srcset="block.a2storytile.a2storytile_image_mobile_tablet" media="(min-width: 320px)">
                    <img class="img-responsive" :src="block.a2storytile.a2storytile_image_desktop" alt="A2 module">
                  </picture>
                  <div class="zf-sheet center middle hidden-sm hidden-xs">
                    <div class="text-center zf-white">
                      <h4 v-if="block.a2storytile.a1storytile_eyebrow" class="zf-eyebrow white">{{block.a2storytile.a2storytile_eyebrow}}</h4>
                      <h2>{{block.a2storytile.a2storytile_title}}</h2>
                      <a v-if="block.a2storytile.a2storytile_cta[0]" class="btn btn-underline-white zf-fs-md-20-22 zf-fs-xs-13-15" :href="block.a2storytile.a2storytile_cta[0].cta1.href">{{block.a2storytile.a2storytile_cta[0].cta1.title}}</a>
                      <a v-if="block.a2storytile.a2storytile_cta[1]" class="btn btn-underline-white zf-fs-md-20-22 zf-fs-xs-13-15" :href="block.a2storytile.a2storytile_cta[1].cta2.href">{{block.a2storytile.a2storytile_cta[1].cta2.title}}</a>
                    </div>
                  </div>
                </div>
                <div class="visible-sm visible-xs">
                  <div class="text-center">
                    <h4 v-if="block.a2storytile.a1storytile_eyebrow" class="zf-eyebrow black zf-mt-xs-30">{{block.a2storytile.a2storytile_eyebrow}}</h4>
                    <h2>{{block.a2storytile.a2storytile_title}}</h2>
                    <a v-if="block.a2storytile.a2storytile_cta[0]" class="btn btn-underline-white zf-fs-md-20-22 zf-fs-xs-13-15" :href="block.a2storytile.a2storytile_cta[0].cta1.href">{{block.a2storytile.a2storytile_cta[0].cta1.title}}</a>
                    <a v-if="block.a2storytile.a2storytile_cta[1]" class="btn btn-underline-white zf-fs-md-20-22 zf-fs-xs-13-15" :href="block.a2storytile.a2storytile_cta[1].cta2.href">{{block.a2storytile.a2storytile_cta[1].cta2.title}}</a>
                  </div>
                </div>
              </div>
            </div>
            <!-- A2 Module ENDS -->


            <!-- PROMO 1 -->
            <div v-if="block.promolarge" class="zf-container zf-mb-xs-60">
              <div class="row">
                <div class="zf-tile">
                  <picture>
                    <source :srcset="block.promolarge.promolarge_image_desktop" media="(min-width: 1440px)">
                    <source :srcset="block.promolarge.promolarge_image_desktop" media="(min-width: 1024px)">
                    <source :srcset="block.promolarge.promolarge_image_mobile_tablet" media="(min-width: 320px)">
                    <img class="img-responsive" :src="block.promolarge.promolarge_image_desktop" alt="Promo Large">
                  </picture>
                  <div class="zf-sheet center middle">
                    <div class="text-center">
                      <h3 class="zf-fs-head-34">{{block.promolarge.promolarge_title}}</h3>
                      <a v-if="block.promolarge.promolarge_cta[0]" class="btn btn-underline-black" :href="block.promolarge.promolarge_cta[0].cta1.href">{{block.promolarge.promolarge_cta[0].cta1.title}}</a>
                      <a v-if="block.promolarge.promolarge_cta[1]" class="btn btn-underline-black" :href="block.promolarge.promolarge_cta[1].cta2.href">{{block.promolarge.promolarge_cta[1].cta2.title}}</a>
                      <p class="zf-fs-xs-12-16">{{block.promolarge.promolarge_copy}}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  Promo 1 end-->

            <!-- PROMO 2 -->
            <div v-if="block.promosmall" class="zf-container zf-mb-xs-60">
              <div class="row row-flex">
                <div class="col-xs-12 col-sm-10 col-md-10 col-lg-10">
                  <div class="zf-tile">
                    <picture>
                      <source :srcset="block.promosmall.promosmall_image_desktop" media="(min-width: 1024px)">
                      <source :srcset="block.promosmall.promosmall_image_mobile_tablet" media="(min-width: 320px)">
                      <img class="img-responsive" :src="block.promosmall.promosmall_image_desktop" alt="Promo Small">
                    </picture>
                    <div class="zf-sheet center middle">
                      <div class="text-center">
                        <h3 class="zf-fs-head-34">{{block.promosmall.promosmall_title}}</h3>
                        <a v-if="block.promosmall.promosmall_cta[0]" class="btn btn-underline-black" :href="block.promosmall.promosmall_cta[0].cta1.href">{{block.promosmall.promosmall_cta[0].cta1.title}}</a>
                        <a v-if="block.promosmall.promosmall_cta[1]" class="btn btn-underline-black" :href="block.promosmall.promosmall_cta[1].cta2.href">{{block.promosmall.promosmall_cta[1].cta2.title}}</a>
                        <p class="zf-fs-xs-12-16">{{block.promosmall.promosmall_copy}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Promo 2 end-->

            <!-- FreeForm Module -->
            <div v-if="block.freeformtile" class="zf-container zf-freeform zf-mb-xs-60">
              <div class="row">
                <div class="zf-tile visible-xs">
                  <div class="text-center">
                    <h2>{{block.freeformtile.freeformtile_title}}</h2>
                    <p class="zf-mb-xs-10">{{block.freeformtile.freeformtile_copy}}</p>
                  </div>
                </div>
                <div class="zf-tile clearfix">
                  <div class="col-xs-9 col-sm-5 col-sm-offset-4 col-md-5 col-md-offset-4 col-lg-5 col-lg-offset-4 image-one">       
                    <picture>
                      <source :srcset="block.freeformtile.freeformtile_image1[0].desktop" media="(min-width: 1024px)">
                      <source :srcset="block.freeformtile.freeformtile_image1[0].mobile_tablet" media="(min-width: 320px)">
                      <img class="img-responsive" :src="block.freeformtile.freeformtile_image1[0].desktop" alt="Freeform module">
                    </picture>
                  </div>
                  <div class="zf-sheet left middle image-two">
                    <div class="zf-tile col-xs-5 col-xs-push-7 col-sm-3 col-sm-push-8 col-md-3 col-md-push-8 col-lg-3 col-lg-push-8">
                      <picture>
                        <source :srcset="block.freeformtile.freeformtile_image2[0].desktop" media="(min-width: 1024px)">
                        <source :srcset="block.freeformtile.freeformtile_image2[0].mobile_tablet" media="(min-width: 320px)">
                        <img class="img-responsive" :src="block.freeformtile.freeformtile_image2[0].desktop" alt="Freeform module">
                      </picture>
                    </div>
                  </div>
                  <div class="zf-sheet middle hidden-xs zf-copy">
                    <div class="zf-tile col-sm-6 col-md-7 col-lg-7">
                      <div class="text-center">
                        <h2>{{block.freeformtile.freeformtile_title}}</h2>
                        <p class="zf-p-xs-10">{{block.freeformtile.freeformtile_copy}}</p>
                        <a v-if="block.freeformtile.freeformtile_cta[0]" class="btn btn-underline-black" :href="block.freeformtile.freeformtile_cta[0].cta1.href">{{block.freeformtile.freeformtile_cta[0].cta1.title}}</a>
                        <br>
                        <a v-if="block.freeformtile.freeformtile_cta[1]" class="btn btn-underline-black" :href="block.freeformtile.freeformtile_cta[1].cta2.href">{{block.freeformtile.freeformtile_cta[1].cta2.title}}</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="zf-tile col-xs-12 visible-xs">
                  <div class="text-center">
                    <a v-if="block.freeformtile.freeformtile_cta[0]" class="btn btn-underline-black" :href="block.freeformtile.freeformtile_cta[0].cta1.href">{{block.freeformtile.freeformtile_cta[0].cta1.title}}</a>
                    <a v-if="block.freeformtile.freeformtile_cta[1]" class="btn btn-underline-black" :href="block.freeformtile.freeformtile_cta[1].cta2.href">{{block.freeformtile.freeformtile_cta[1].cta2.title}}</a>
                  </div>
                </div>
              </div>
            </div>
            <!--  FreeForm Module end-->


            <!-- Doorway Three -->
            <div v-if="block.threedoorwaytile" class="zf-container zf-doorway-three zf-mb-xs-60">
              <div class="text-center">
                <h4 class="zf-mb-xs-20 zf-fs-22-24">{{block.threedoorwaytile.threedoorwaytile_title}}</h4>
                <p class="zf-mb-xs-10">{{block.threedoorwaytile.threedoorwaytile_copy}}</p>
              </div>
              <div class="row">
                <div v-if="block.threedoorwaytile.threedoorwaytile_cta[0]" class="col-xs-6 col-md-4">
                  <a :href="block.threedoorwaytile.threedoorwaytile_cta[0].cta1.href">
                    <picture>
                      <source :srcset="block.threedoorwaytile.threedoorwaytile_image1[0].desktop" media="(min-width: 1024px)">
                      <source :srcset="block.threedoorwaytile.threedoorwaytile_image1[0].mobile_tablet" media="(min-width: 320px)">
                      <img class="img-responsive" :src="block.threedoorwaytile.threedoorwaytile_image1[0].desktop" alt="threedoorwaytile">
                    </picture>
                    <div class="text-center">
                      <span class="btn btn-underline-black">{{block.threedoorwaytile.threedoorwaytile_cta[0].cta2.title}}</span>
                    </div>
                  </a>
                </div>
                <div v-if="block.threedoorwaytile.threedoorwaytile_cta[1]" class="col-xs-6 col-md-4">
                  <a :href="block.threedoorwaytile.threedoorwaytile_cta[1].cta1.href">
                    <picture>
                      <source :srcset="block.threedoorwaytile.threedoorwaytile_image2[0].desktop" media="(min-width: 1024px)">
                      <source :srcset="block.threedoorwaytile.threedoorwaytile_image2[0].mobile_tablet" media="(min-width: 320px)">
                      <img class="img-responsive" :src="block.threedoorwaytile.threedoorwaytile_image2[0].desktop" alt="threedoorwaytile">
                    </picture>
                    <div class="text-center">
                      <span class="btn btn-underline-black">{{block.threedoorwaytile.threedoorwaytile_cta[1].cta2.title}}</span>
                    </div>
                  </a>
                </div>
                <div v-if="block.threedoorwaytile.threedoorwaytile_cta[2]" class="col-xs-12 col-md-4 zf-mt-xs-30 zf-mt-md-0">
                  <a :href="block.threedoorwaytile.threedoorwaytile_cta[2].cta3.href">
                    <picture>
                      <source :srcset="block.threedoorwaytile.threedoorwaytile_image3[0].desktop" media="(min-width: 1024px)">
                      <source :srcset="block.threedoorwaytile.threedoorwaytile_image3[0].mobile_tablet" media="(min-width: 320px)">
                      <img class="img-responsive" :src="block.threedoorwaytile.threedoorwaytile_image3[0].desktop" alt="threedoorwaytile">
                    </picture>
                    <div class="text-center">
                      <span class="btn btn-underline-black">{{block.threedoorwaytile.threedoorwaytile_cta[2].cta3.title}}</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!--  Doorway Three end-->

            <!-- Two Doorway  -->
            <div v-if="block.twodoorwaytile" class="zf-container zf-doorway-two zf-mb-xs-60">
              <div class="text-center">
                <h4 class="zf-mb-xs-20 zf-fs-22-24">{{block.twodoorwaytile.twodoorwaytile_title}}</h4>
              </div>
              <div class="row row-flex">
                <div class="col-xs-6 col-md-4">
                  <a :href="block.twodoorwaytile.twodoorwaytile_cta[0].cta1.href">
                    <picture>
                      <source :srcset="block.twodoorwaytile.twodoorwaytile_image1[0].desktop" media="(min-width: 1024px)">
                      <source :srcset="block.twodoorwaytile.twodoorwaytile_image1[0].mobile_tablet" media="(min-width: 320px)">
                      <img class="img-responsive" :src="block.twodoorwaytile.twodoorwaytile_image1[0].desktop" alt="twodoorwaytile">
                    </picture>
                    <div class="text-center">
                      <p class="zf-fs-xs-12-16 zf-p-xs-10">{{block.twodoorwaytile.twodoorwaytile_cta[0].cta1.title}}</p>
                    </div>
                  </a>
                </div>
                <div class="col-xs-6 col-md-4">
                  <a :href="block.twodoorwaytile.twodoorwaytile_cta[0].cta2.href">
                    <picture>
                      <source :srcset="block.twodoorwaytile.twodoorwaytile_image2[0].desktop" media="(min-width: 1024px)">
                      <source :srcset="block.twodoorwaytile.twodoorwaytile_image2[0].mobile_tablet" media="(min-width: 320px)">
                      <img class="img-responsive" :src="block.twodoorwaytile.twodoorwaytile_image2[0].desktop" alt="twodoorwaytile">
                    </picture>
                    <div class="text-center">
                      <p class="zf-fs-xs-12-16 zf-p-xs-10">{{block.twodoorwaytile.twodoorwaytile_cta[0].cta2.title}}</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <!-- Two Doorway ENDS -->

            <!--Product Carousel -->
            <!--<div v-if="block.productcarousel" class="zf-container zf-products zf-mb-xs-60">
              <div class="row row-flex">
                <div class="col-xs-12 col-sm-11 col-sm-offset-1 col-md-10 col-md-offset-0 col-lg-10 col-lg-offset-0">
                  <div class="text-center">
                    <h4 class="zf-mb-xs-10 zf-md-20">{{block.productcarousel.productcarousel_title}}</h4>
                  </div>
                  <div class="zf-slider-default">
                    <div class="zf-tile">
                      <a href="#">
                        <img class="img-responsive" :src="block.productcarousel.productcarousel_productImage" alt="productImage">
                        <div class="text-left">
                          <h5 class="product-name">H5 - Product Name</h5>
                          <h5 class="product-price">H5 - $145</h5>
                        </div>
                      </a>
                    </div>
                    <div class="zf-tile">
                      <a href="#">
                        <img class="img-responsive" :src="block.productcarousel.productcarousel_productImage" alt="productImage">
                        <div class="text-left">
                          <h5 class="product-name">H5 - Product Name</h5>
                          <h5 class="product-price">H5 - $145</h5>
                        </div>
                      </a>
                    </div>
                    <div class="zf-tile">
                      <a href="#">
                        <img class="img-responsive" :src="block.productcarousel.productcarousel_productImage" alt="productImage">
                        <div class="text-left">
                          <h5 class="product-name">H5 - Product Name</h5>
                          <h5 class="product-price">H5 - $145</h5>
                        </div>
                      </a>
                    </div>
                    <div class="zf-tile">
                      <a href="#">
                        <img class="img-responsive" :src="block.productcarousel.productcarousel_productImage" alt="productImage">
                        <div class="text-left">
                          <h5 class="product-name">H5 - Product Name</h5>
                          <h5 class="product-price">H5 - $145</h5>
                        </div>
                      </a>
                    </div>
                    <div class="zf-tile">
                      <a href="#">
                        <img class="img-responsive" :src="block.productcarousel.productcarousel_productImage" alt="productImage">
                        <div class="text-left">
                          <h5 class="product-name">H5 - Product Name</h5>
                          <h5 class="product-price">H5 - $145</h5>
                        </div>
                      </a>
                    </div>
                    <div class="zf-tile">
                      <a href="#">
                        <img class="img-responsive" :src="block.productcarousel.productcarousel_productImage" alt="productImage">
                        <div class="text-left">
                          <h5 class="product-name">H5 - Product Name</h5>
                          <h5 class="product-price">H5 - $145</h5>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>-->
            <!--  Product carousel end-->

            <!-- Left Aside -->
            <!--
            <div v-if="block.leftAsideTile" class="zf-container zf-doorway-two zf-mb-xs-60">
              <div class="row zf-display-flex zf-justify-content-xs-center zf-flex-xs-column zf-flex-md-row">
                <div class="col-xs-12 col-md-5">
                  <a href="#">
                    <picture>
                      <source srcset="https://placeimg.com/407/543/people/sepia" media="(min-width: 1024px)">
                      <source srcset="https://placeimg.com/300/400/people/sepia" media="(min-width: 320px)">
                      <img class="img-responsive" src="https://placeimg.com/407/543/people/sepia" alt="">
                    </picture>
                  </a>
                </div>
                <div class="col-xs-12 col-md-5 zf-mt-xs-20 zf-mt-md-0">
                  <div :class="{'zf-sheet center middle': zfVueWidth > 1023 }">
                    <div class="text-center">
                      <h3 class="zf-fs-22-24">Left Aside Heading</h3>
                      <p>left Aside Subcopy</p>
                      <a href="#" class="btn btn-underline-black">BTN Underline-black</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            -->
            <!-- Left Aside Ends -->

            <!-- Right Aside -->
            <!--
            <div v-if="block.rightAsideTile" class="zf-container zf-doorway-two zf-mb-xs-60">
              <div class="row zf-display-flex zf-justify-content-xs-center zf-flex-xs-column zf-flex-md-row-reverse">
                <div class="col-xs-12 col-md-5">
                  <a href="#">
                    <picture>
                      <source srcset="https://placeimg.com/407/543/people/sepia" media="(min-width: 1024px)">
                      <source srcset="https://placeimg.com/300/400/people/sepia" media="(min-width: 320px)">
                      <img class="img-responsive" src="https://placeimg.com/407/543/people/sepia" alt="">
                    </picture>
                  </a>
                </div>
                <div class="col-xs-12 col-md-5 zf-mt-xs-20 zf-mt-md-0">
                  <div :class="{'zf-sheet center middle': zfVueWidth > 1023 }">
                    <div class="text-center">
                      <h3 class="zf-fs-22-24">Right Aside Heading</h3>
                      <p>Right Aside Subcopy</p>
                      <a href="#" class="btn btn-underline-black">BTN Underline-black</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            -->
            <!-- Right Aside Ends -->

            <!-- Double Aside -->
            <!--
            <div v-if="block.doubleAsideTile" class="zf-container zf-doorway-two zf-mb-xs-60">
              <div class="row zf-display-flex zf-align-items-md-end zf-justify-content-xs-center zf-flex-xs-column-reverse zf-flex-md-row">
                <div class="col-xs-12 col-md-5 zf-mt-xs-30 zf-mt-md-0" :class="{'text-center' : zfVueWidth < 1024}">
                  <picture>
                    <source srcset="https://placeimg.com/407/543/people/sepia" media="(min-width: 1024px)">
                    <source srcset="https://placeimg.com/300/400/people/sepia" media="(min-width: 320px)">
                    <img class="img-responsive" src="https://placeimg.com/407/543/people/sepia" alt="">
                  </picture>
                  <a href="#" class="btn btn-underline-black zf-tt-capitalize">product one,</a>
                  <a href="#" class="btn btn-underline-black zf-tt-capitalize">product two,</a>
                  <a href="#" class="btn btn-underline-black zf-tt-capitalize">product three</a>
                </div>
                <div class="col-xs-12 col-md-5" :class="{'text-center' : zfVueWidth < 1024}">
                  <picture>
                    <source srcset="https://placeimg.com/407/543/people/sepia" media="(min-width: 1024px)">
                    <source srcset="https://placeimg.com/300/400/people/sepia" media="(min-width: 320px)">
                    <img class="img-responsive" src="https://placeimg.com/407/543/people/sepia" alt="">
                  </picture>
                  <a href="#" class="btn btn-underline-black zf-tt-capitalize">product one,</a>
                  <a href="#" class="btn btn-underline-black zf-tt-capitalize">product two,</a>
                  <a href="#" class="btn btn-underline-black zf-tt-capitalize">product three</a>
                  <div class="zf-mt-xs-20 zf-mt-md-120 zf-mb-md-35">
                    <h5 class="zf-fs-head-20 zf-ff-medium">Right Aside Heading</h5>
                    <p class="zf-ff-bold zf-fs-head-24">“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque porta enim tortor, eget rhoncus orci ultrices nec. ”</p>
                  </div>
                </div>
              </div>
            </div>
            -->
            <!-- Double Aside Ends -->
          </div>
          <!--- Modular Blocks For Loop End -->
        </div>
        <!--- Content Modules For Loop End -->

      </div>
    </div>
</template>

<script>
// import { data as slickParams } from "../static/javascript/businessmain.js";
export default {
  props: ["entry"],
  data() {
    return {
      slickParams: {
        defaultParams: {
          infinite: true,
          slidesToShow: 3.5,
          slidesToScroll: 3,
          centerMode: false,
          responsive: [{
            breakpoint: 1024,
            settings: {
              infinite: false,
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false
            }
          }]
        },
        centeredParams: {
          infinite: true,
          responsive: [{
            breakpoint: 1920,
            settings: "unslick"
          }, {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '10vw',
              arrows: false,
              variableWidth: true
            }
          }, {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '18.2vw',
              arrows: false
            }
          }]
        },
        doorwayParams: {
          responsive: [{
            breakpoint: 1920,
            settings: "unslick"
          }, {
            breakpoint: 640,
            settings: {
              infinite: true,
              slidesToShow: 2.5,
              slidesToScroll: 1,
              arrows: false,
              accessibility: true,
              touchMove: true,
              swipe: true
            }
          }]
        }
      }
    };
  }
};
</script>
