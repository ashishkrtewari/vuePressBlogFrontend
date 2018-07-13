<template>
    <div class="zf-cms" id="zf-homepage">
      <BlogPost :hero=true featured-image="https://www.levi.com/wp-content/uploads/2018/06/SEO-Summer-Concert-Dressing_Header.jpg" head="WHAT TO WEAR TO A SUMMER CONCERT" sub-copy="A guide to outdoor event outfits." url="https://www.levi.com/US/en_US/blog/article/what-to-wear-to-a-summer-concert/" />
        <div class="zf-slider-default zf-mtb-xs-60">
          <slick ref="slick" :options="slickParams.defaultParams">
            <BlogPost :key="num" v-for="num in 5" :carousel-tile=true :hero=false featured-image="https://www.levi.com/wp-content/uploads/2018/06/SEO-Summer-Concert-Dressing_Header.jpg" head="WHAT TO WEAR TO A SUMMER CONCERT" sub-copy="A guide to outdoor event outfits." url="https://www.levi.com/US/en_US/blog/article/what-to-wear-to-a-summer-concert/" />
          </slick>
        </div>
        <hr>
        <div class="zf-container">
          <div class="col-xs-10 col-xs-offset-1">
            <div class="zf-container-fluid zf-mb-xs-60">
              <h3 class="zf-fs-head-24 zf-mb-xs-20 zf-ml-xs-10">COLLABORATIONS</h3>
                <div class="row row-flex">
                  <div class="col-xs-10 col-sm-6" :key="num" v-for="num in 2">
                    <BlogPost :key="num" :carousel-tile='zfVueWidth > 1024?false:true' :hero=false featured-image="https://www.levi.com/wp-content/uploads/2018/06/SEO-Summer-Concert-Dressing_Header.jpg" head="WHAT TO WEAR TO A SUMMER CONCERT" sub-copy="A guide to outdoor event outfits." url="https://www.levi.com/US/en_US/blog/article/what-to-wear-to-a-summer-concert/" />
                  </div>
                </div>
            </div>
            <hr>
            <div class="zf-container-fluid">
              <h3 class="zf-fs-head-24 zf-mb-xs-20 zf-ml-xs-10">STYLED BY LEVI'S®</h3>
              <div class="row row-flex">
                <div class="col-xs-10 col-sm-6" :key="num" v-for="num in 2">
                  <BlogPost :key="num" :carousel-tile='zfVueWidth > 1024?false:true' :hero=false featured-image="https://www.levi.com/wp-content/uploads/2018/06/SEO-Summer-Concert-Dressing_Header.jpg" head="WHAT TO WEAR TO A SUMMER CONCERT" sub-copy="A guide to outdoor event outfits." url="https://www.levi.com/US/en_US/blog/article/what-to-wear-to-a-summer-concert/" />
                </div>
              </div>
            </div>
            <hr>
          </div>
        </div>                  
    </div>
</template>

<script>
import BlogPost from "@/components/BlogPost";
export default {
  components: {
    BlogPost
  },
  props: ["entry"],
  data() {
    return {
      slickParams: {
        defaultParams: {
          infinite: true,
          slidesToShow: 1.83,
          slidesToScroll: 1,
          centerMode: true,
          responsive: [{
            breakpoint: 1024,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              centerMode: true
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
            breakpoint: 1024,
            settings: {
              infinite: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
              centerMode: true
            }
          }]
        }
      },
      zfVueWidth: null,
      eventsBinded: false
    }
  },
  mounted(){
    this.zfVueWidth = window.innerWidth;
    if(!this.eventsBinded){
      window.addEventListener('resize', function(){
      this.zfVueWidth = window.innerWidth;
    }.bind(this));
    this.eventsBinded = true;
    }
  }
}
</script>
