<template>
    <header class="header" :class="{ 'theme-dark': themeStore.isThemeDark && !isCollapsed, 'collapsed': isCollapsed }">
        <div class="header-container header-meta">
            <div class="content">
                <p>The World’s Leading Switching Power Supply Manufacturer</p>
                <a href="#">Company Entrance</a> 
            </div>
        </div>
        <div class="header-container header-tools">
            <div class="content">
                <!-- logo -->
                <a href="/" class="logo">
                    <img src="../assets/imgs/kulon_logo.png" alt="kulon logo">
                </a>
                <div class="tools-wrap">
                    <!-- 搜索框 -->
                    <div class="search">
                        <n-input-group>
                            <n-select
                                class="search-select"
                                style="background: transparent;"
                                v-model:value="searchSelectValueRef"
                                :options="searchSelectOptions"
                                :consistent-menu-width="false"
                                size="large"
                            />
                            <n-auto-complete
                                v-model:value="searchInputValueRef"
                                :input-props="{ autocomplete: 'disabled' }"
                                :options="searchInputOptions"
                                style="width: 350px; min-width: 350px;"
                                size="large"
                                placeholder="Search..."
                            />
                            <n-button type="primary" size="large" color="#052743">
                                <SvgIcon name="search" size="24"></SvgIcon>
                            </n-button>
                        </n-input-group>
                    </div>
                    <div class="group">
                        <n-dropdown :options="accountDropdwonOptions" trigger="click">
                            <div class="group-item account">
                                <SvgIcon name="account" size="24"></SvgIcon>
                                <span>My Account</span>
                            </div>
                        </n-dropdown>
                        <div class="group-item wishlist">
                            <SvgIcon name="wishlist" size="24"></SvgIcon>
                            <span>Wishlist</span>
                        </div>
                        <n-dropdown :options="cartDropdownOptions" trigger="click">
                            <div class="group-item cart">
                                <SvgIcon name="cart" size="24"></SvgIcon>
                                <span>Cart</span>
                            </div>
                        </n-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-container header-nav">
            <div class="content">
                <ul class="topnav">
                    <RouterLink
                        v-for="(item, index) in topnavList"
                        :key="index"
                        :to="item.path"
                        custom
                        v-slot="{ href, route, isActive, isExactActive }">
                        <n-dropdown :options="item.children" size="huge">
                            <li 
                                class="topnav-item"
                                :class="{ 'topnav-item_active': isActive }">
                                <span @click="navItemClick(item)">{{ item.name }}</span>
                                <SvgIcon name="arrow_down" size="16" v-if="item.children"></SvgIcon>
                            </li>
                        </n-dropdown>
                    </RouterLink>
                </ul>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useThemeStore } from '@/stores'

const router = useRouter()

/* 是否折叠 header */
const isCollapsed = ref(false)
/* 当前页面是否为黑暗主题 */
const themeStore = useThemeStore()

/* 搜索下拉框值 | 搜索下拉菜单选项 */
const searchSelectValueRef = ref('All')
const searchSelectOptions = ref([
    {
        label: 'All',
        value: 'All'
    },
    {
        label: 'AC/DC Power Supply',
        value: 'AC/DC Power Supply'
    },
    {
        label: 'AC⇄DC Bidirectional Power',
        value: 'AC⇄DC Bidirectional Power'
    },
    {
        label: 'DC/AC Inverter',
        value: 'DC/AC Inverter'
    },
    {
        label: 'DC/DC Converter',
        value: 'DC/DC Converter'
    },
    {
        label: 'Uncategorized',
        value: 'Uncategorized'
    }
])
/* 搜索框值 | 搜索框自动填充菜单选项 */
const searchInputValueRef = ref('')
const searchInputOptions = computed(() => {
    return ["@gmail.com", "@163.com", "@qq.com"].map((suffix) => {
        const prefix = searchInputValueRef.value.split("@")[0];
        return {
        label: prefix + suffix,
        value: prefix + suffix
        };
    });
})
/* 账户下拉菜单选项 */
const accountDropdwonOptions = ref([
    {
        label: 'All',
        key: 'All'  
    }
])
/* 购物车下拉菜单选项 */
const cartDropdownOptions = ref([
    {
        label: 'All',
        key: 'All'
    }
])
/* 模拟导航栏列表 */
const topnavList = ref([
    {
        path: '/',
        name: 'Home'
    },
    {
        path: '/products',
        name: 'Products'
    },
    {
        path: '/new-arrival',
        name: 'New Arrival'
    },
    {
        path: '/applications',
        name: 'Applications',
        children: [{
            label: 'Building Power',
            key: 'Building Power'
        }, {
            label: 'LED Display',
            key: 'LED Display'
        }, {
            label: 'LED Power',
            key: 'LED Power'
        }, {
            label: 'Medical Power',
            key: 'Medical Power'
        }]
    }
])

/**
 * 导航栏点击事件
 */
const navItemClick = (item) => {
    if(!item.children) {
        router.push(item.path)
    }
}

onMounted(()=>{
    const offsetY = 300;
    /* 监听鼠标滚动 header 折叠 */
    window.addEventListener('scroll', (e)=>{
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop   // 获取当前滚动距离
        let opacity = scrollTop / offsetY    // 根据滚动距离实时计算透明度
        if(opacity > 1) {   // 边界情况：最大透明度为 1
            opacity = 1
        }
        document.querySelector('.header').style.setProperty('background', `rgba(255, 255, 255, ${opacity})`)

        if(scrollTop > offsetY) {   // 当滚动距离超过设定最大偏移量，触发 header 折叠
            isCollapsed.value = true
        } else {
            isCollapsed.value = false
        }
    })
})

</script>

<style scoped lang="scss">
.header {
    /* header主题变量 */
    --text-color: #606266;
    --text-primary-color: #303133;
    --border-color: #b5b5b540;
    &.theme-dark {
        --text-color: #ffffffbf;
        --text-primary-color: #ffffff;
        --border-color: #b5b5b540;
    }

    z-index: 99;
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 100%;
    transition: all .4s ease;
    /* 折叠状态菜单栏 */
    &.collapsed {
        transform: translateY(-134px);
        background: #fff;   // 回退动画, 防止 js 不生效
        .header-tools .content {
            .logo {
                top: 102px;
                transform: translateY(0);
            }
            .tools-wrap {
                margin-left: 0;
            }
        } 
        .header-nav .topnav {
            margin-left: 160px;
        }    
        .header-nav .topnav .topnav-item {
            color: var(--text-color)
        }
    }
    /* header-container 公共样式 */
    .header-container {
        display: flex;
        width: 100%;
        border-bottom: 1px solid var(--border-color);
        .content {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 1220px;
            margin: 0 auto;
            @media screen and (max-width: 782px) {
                width: 100%;
            }
        }
    }
    .header-meta {
        .content {
            height: 40px;
            font-size: 13px;
            color: var(--text-color);
            a {
                color: var(--text-color);
            }
        }
    }
    .header-tools {
        @media screen and (max-width: 782px) {
            display: none;
        }
        .content {
            position: relative;
            height: 90px;
            justify-content: flex-start;
            .logo {
                position: absolute;
                top: 50%;
                transform: translateY(-50%);
                left: 0;
                transition: all .4s ease;
                img {
                    display: block;
                    height: 40px;
                    object-fit: cover;
                }
            }
            .tools-wrap {
                display: flex;
                justify-content: space-between;
                align-items: center;
                flex-grow: 1;
                margin-left: 25%;
                transition: margin-left .4s ease;
            }
            .search {
                .search-select {
                    width: 140px; 
                    min-width: 140px;
                }
            }
            .group {
                display: flex;
                .group-item {
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    color: var(--text-primary-color);
                    min-width: 90px;
                    transition: all .2s ease;
                    .svg-icon {
                        transition: transform .2s ease;
                    }
                    span {
                        margin-top: 2px;
                        line-height: 1em;
                        font-size: 14px;
                    }
                    &:hover {
                        color: var(--color-success);
                        .svg-icon {
                            transform: scale(1.1);
                        }
                    }
                }
            }
        }
    }
    .header-nav {
        border-bottom: none;
        .topnav {
            display: flex;
            width: 100%;
            transition: margin-left .3s ease;
            @media screen and (max-width: 782px) {
                display: none;
            }
            .topnav-item {
                cursor: pointer;
                display: inline-flex;
                justify-content: center;
                align-items: center;
                box-sizing: border-box;
                height: 60px;
                margin: 0 10px 0 0;
                padding: 0 15px;
                font-size: 18px;
                text-align: center;
                line-height: 60px;
                color: var(--text-color);
                transition: color .4s ease;
                &:hover {
                    color: var(--text-primary-color);
                }
                &.topnav-item_active {
                    color: rgba(255, 255, 255, 1);
                    background: var(--color-success);
                }
                .svg-icon {
                    margin-left: 5px;
                }
            }
        }
    }
}

</style>