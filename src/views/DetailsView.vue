<template>
  <div id="Details" class="container">
    <div class="product-page">
      <div class="product-container">
        <div class="left">
          <!-- 商品轮播 -->
          <swiper class="swiper" :modules="[Thumbs]" :thumbs="{ swiper: thumbsSwiper, autoScrollOffset: 1 }" :loop="true">
            <swiper-slide v-for="(item, index) in goodsData.imgs" :key="index">
              <img :src="item.src" :alt="item.alt" />
            </swiper-slide>
          </swiper>

          <div id="Share" class="share">
            <div class="share-text">
              <SvgIcon name="share" :size="22"></SvgIcon>
              Share this on:
            </div>
            <div class="share-list">
              <a class="share-item" href="#Share" v-for="(item, index) in shareIconList" :key="index">
                <SvgIcon :name="item.name" :size="item.size"></SvgIcon>
              </a>
            </div>
          </div>
          <!-- 轮播缩略图 -->
          <swiper class="swiper swiper-thumbs" :modules="[Thumbs]" :slidesPerView="3" :spaceBetween="10"
            watchSlidesProgress @swiper="setThumbsSwiper">
            <swiper-slide class="thumbs-slide" v-for="(item, index) in goodsData.thumbs" :key="index">
              <img :src="item.src" :alt="item.alt" />
            </swiper-slide>
          </swiper>

          <div class="tools-group">
            <div class="tools-item" v-for="(item, index) in toolsList" :key="index" @click="toolsClick(item)">
              <SvgIcon :name="item.name" :class="{ 'active': item.active }" :size="item.size"></SvgIcon>
              <span>{{ item.text }}</span>
            </div>
          </div>

          <div class="advantages">
            <div class="advantages-item">
              <SvgIcon name="transport" :size="22"></SvgIcon>
              <span>Fast And Safe Logistics</span>
            </div>
            <div class="advantages-item">
              <SvgIcon name="conversion" :size="25"></SvgIcon>
              <span>14-Day Return & Refund Service</span>
            </div>
          </div>
        </div>

        <div class="right">
          <!-- 面包屑导航 -->
          <n-breadcrumb>
            <n-breadcrumb-item href="/">Home</n-breadcrumb-item>
            <n-breadcrumb-item href="/all-products">Products</n-breadcrumb-item>
          </n-breadcrumb>
          <!-- 产品标题 -->
          <h3 class="product-title ellipsis-2">{{ goodsData.title }}</h3>
          <!-- 产品描述 -->
          <p class="product-desc ellipsis-2">{{ goodsData.desc }}</p>
          <!-- 产品价格 -->
          <div class="product-price">
            <div class="product-price_item">
              <div class="old">$199.00</div>
              <div class="new">$<n-number-animation ref="numberAnimationInstRef" :from="0" :to="260.00" :precision="2" />
              </div>
            </div>
          </div>
          <!-- 产品规格 -->
          <ul class="product-specs">
            <li class="specs-item" :class="{ 'active': currentSpecIndex == index }"
              v-for="(spec, index) in goodsData.specs" :key="index" @click="specClick(index)">
              <img :src="spec.pic" alt="" />
              <div class="specs-meta">
                <span class="name">{{ spec.title }}</span>
                <span class="cot">${{ spec.price }}</span>
              </div>
            </li>
          </ul>
          <!-- Tabs -->
          <ViTabs :tabs="tabsList"></ViTabs>

        </div>
      </div>
      <!-- 比价 -->
      <ContactUs></ContactUs>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { Thumbs } from 'swiper'
import ViTabs from '../components/ViTabs/ViTabs.vue'
import ContactUs from '../components/ContactUs/ContactUs.vue';

let currentSpecIndex = ref(0)

const shareIconList = reactive([
  { name: 'instagram', size: '22' },
  { name: 'twitter', size: '22' },
  { name: 'facebook', size: '22' },
  { name: 'email', size: '22' }
])
const toolsList = reactive([
  {
    name: 'compare',
    size: '22',
    text: 'Compare',
    active: false
  },
  {
    name: 'wishlist',
    size: '22',
    text: 'Add to Wishlist',
    active: false
  }
])

const thumbsSwiper = ref(null)
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper
}

const goodsData = ({
  imgs: [
    { src: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, alt: '' },
    { src: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, alt: '' },
    { src: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, alt: '' },
    { src: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, alt: '' }
  ],
  thumbs: [
    { src: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, alt: '' },
    { src: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, alt: '' },
    { src: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, alt: '' },
    { src: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, alt: '' },
  ],
  title: '750W-12V-DC Power Supply50W-12V-DC Power Supply50W-12V-DC Power Supply50W- 12V-DC Power Supply',
  desc: 'Nam sole orto magnitudine angusti gurgitis sed profundi a transituarce et dum piscatorios quaerunt lenunculos vel innare',
  specs: [
    { pic: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, title: 'HLG-120H-42', price: '22.00' },
    { pic: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, title: 'HLG-120H-42', price: '22.00' },
    { pic: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, title: 'HLG-120H-42', price: '22.00' },
    { pic: new URL('../assets/imgs/goods-01.jpg', import.meta.url).href, title: 'HLG-120H-42', price: '22.00' }
  ]
})

const tabsList = [
  {
    title: 'Series Product',
    pane: [
      { value: 'LPC-35', href: '#' },
      { value: 'HLG-60H-CD', href: '#' },
      { value: 'ceshi21', href: '#' },
      { value: 'HLG-60H-CD', href: '#' },
      { value: 'LPC-35', href: '#' },
      { value: 'LPC-35', href: '#' },
      { value: 'ceshi21', href: '#' }
    ]
  },
  {
    title: 'Different Spec',
    pane: [
      { value: 'LPC-35', href: '#' }
    ]
  }
]


const toolsClick = (item) => {
  console.log(item.name)
  if (item.name === 'wishlist' && !item.active) {
    item.name = 'wishlist-fill'
    item.active = true

  } else if (item.name === 'wishlist-fill' && item.active) {
    item.name = 'wishlist'
    item.active = false

  }
}

const specClick = (index) => {
  currentSpecIndex.value = index
}

</script>


<style scoped lang="scss">
/* Page: product */
.product-page {
  display: flex;
  align-items: flex-start;
  width: 1220px;
  margin: 0 auto;

  .product-container {
    display: flex;
    flex-grow: 1;
    border: 1px solid #ececec;
    border-radius: 4px;
    overflow: hidden;

    /* Product Left */
    .left {
      display: flex;
      flex-direction: column;
      max-width: 280px;
      box-sizing: border-box;

      /* Swiper: 商品轮播 */
      .swiper {
        width: 100%;

        .swiper-slide img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      /* Thumbs: 轮播缩略图 */
      .swiper-thumbs {
        margin: 15px 20px;
        width: calc(100% - 40px);

        .thumbs-slide {
          border: 1px solid #ececec;
          border-radius: 4px;
          overflow: hidden;
        }

        .thumbs-slide.product-thumb-active {
          border: 1px solid #23ac38;
        }
      }

      /* Share */
      .share {
        display: flex;
        flex-direction: column;
        margin: 15px 0;
        padding: 0 20px;

        .share-text {
          display: flex;
          align-items: center;
        }

        .share-text .svg-icon {
          margin-right: 5px;
          color: #767676;
        }

        .share-list {
          display: flex;
          margin-top: 15px;

          .share-item {
            display: flex;
            width: 30px;
            height: 30px;
            margin-right: 10px;
            background: #3C93C9;
            color: #fff;
            transition: opacity .2s ease;

            &:hover {
              opacity: .75;
            }

            .svg-icon {
              margin: auto;
            }
          }
        }
      }

      /* Tools */
      .tools-group {
        display: flex;
        margin: 10px 0;
        padding: 0 20px;

        .tools-item {
          user-select: none;
          cursor: pointer;
          display: flex;
          align-items: center;

          &:nth-child(1) {
            margin-right: 15px;
          }

          &:hover:nth-child(1) .svg-icon {
            transform: rotateY(180deg);
          }

          &:hover:nth-child(2) .svg-icon {
            transform: scale(1.1);
          }

          .svg-icon {
            margin-right: 5px;
            transition: all .2s ease;

            &.active {
              color: #ef3369;
            }
          }

          span {
            line-height: 1em;
            font-size: 14px;
          }
        }
      }

      /* Advantages */
      .advantages {
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        padding: 0 20px;
        font-size: 14px;

        .advantages-item {
          display: flex;
          align-items: flex-start;
          margin: 5px 0;
          color: #444;

          .svg-icon {
            margin-right: 10px;
            color: #23ac38;
          }
        }
      }
    }


    /* Product Right */
    .right {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 20px;

      .product-title {
        margin: 20px 0;
        font-size: 22px;
        line-height: 1.5;
      }

      .product-desc {
        margin: 0 0 20px 0;
        font-size: 18px;
        color: #767676;
      }

      /* Price */
      .product-price {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        padding: 10px 0 15px 0;
        border-bottom: 1px solid #ececec;

        .product-price_item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;

          .new {
            color: #23ac38;
            font-size: 28px;
            font-weight: bold;
          }

          .old {
            color: #767676;
            font-size: 16px;
            text-decoration: line-through;
          }
        }
      }

      /* Specs */
      .product-specs {
        display: flex;
        flex-wrap: wrap;
        margin: 20px 0 15px 0;

        .specs-item {
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          width: calc((100% - 20px) / 3);
          overflow: hidden;
          box-sizing: border-box;
          border: 1px solid #ececec;
          border-radius: 4px;
          margin-right: 10px;
          margin-bottom: 10px;
          padding: 10px 6px;
          transition: border .2s ease;

          &.specs-item.active {
            border: 1px solid #23ac38;
          }

          &:nth-child(3n) {
            margin-right: 0;
          }

          img {
            display: inline-block;
            height: 40px;
          }

          .specs-meta {
            display: inline-flex;
            flex-direction: column;
            margin-left: 10px;
            font-size: 16px;

            .name {
              margin-bottom: 10px;
              word-break: break-all;
              font-weight: bold;
              line-height: 1em;
              color: #333;
            }

            .cot {
              color: #23ac38;
              font-size: 16px;
              line-height: 1em;
            }
          }
        }
      }
    }
  }
}


.animate-beat {
  animation: beat .3s ease 1;
}

@keyframes beat {
  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1.0);
  }
}

@media screen and (max-width: 1220px) {

  /* Specs */
  .product-container .specs-item {
    width: calc((100% - 10px) / 2);
  }

  .product-container .specs-item:nth-child(n) {
    margin-right: 10px;
  }

  .product-container .specs-item:nth-child(2n) {
    margin-right: 0;
  }

  /* Tabs Card */
  .tabs-card .tabs-content_item .ctab {
    width: calc((100% - 30px) / 4);
    transition: none;
  }

  .tabs-card .tabs-content_item .ctab:nth-child(4n) {
    margin-right: 0;
  }

  .tabs-card .tabs-content_item .ctab:nth-child(5n) {
    margin-right: 10px;
  }
}

@media screen and (max-width: 872px) {
  .product-page {
    flex-direction: column;
  }

  .product-container {
    width: 100%;
    border: none;
    flex-direction: column;
  }

  /* Product Left */
  .product-container .left {
    width: 100%;
    padding-bottom: 0;
  }

  /* Swiper */
  .product-container .swiper {
    min-width: 100%;
    height: 400px;
  }

  /* Thumbs */
  .product-container .left .swiper-thumbs {
    width: 100vw;
  }

  /* Tools */
  .product-container .tools-group {
    font-size: 16px;
  }

  .product-container .tools-item i {
    font-size: 24px;
  }

  /* Specs */
  .product-container .specs-item {
    width: calc((100% - 10px) / 2);
    transition: none;
  }

  .product-container .specs-item:nth-child(2n) {
    margin-right: 0;
  }

  .product-container .specs-item:nth-child(3n) {
    margin-right: 10px;
  }

  /* Tabs Card */
  .tabs-card .tabs-header_item {
    transition: none;
  }

  .tabs-card .tabs-content_item .ctab {
    width: calc((100% - 20px) / 3);
    transition: none;
  }

  .tabs-card .tabs-content_item .ctab:nth-child(3n) {
    margin-right: 0;
  }

  .tabs-card .tabs-content_item .ctab:nth-child(4n) {
    margin-right: 10px;
  }

  /* Inquiry */
  .inquiry {
    margin: 0 10px 10px 10px;
  }
}
</style>