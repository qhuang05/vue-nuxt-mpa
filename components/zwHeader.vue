<template>
    <header class="top-nav">
        <div class="logo">
            <nuxt-link to="/"><i class="icon-logo"></i></nuxt-link>
        </div>
        <ul class="nav-list">
            <li class="nav-item" v-for="item,index in menuList" :key="item.name">
                <nuxt-link :to="item.path">{{item.name}}</nuxt-link>
                <div class="nav-panel arrow" v-if="item.children">
                    <div class="nav-panel-item" v-for="pItem,pIndex in item.children" :key="pItem.title">
                        <div class="tit">{{pItem.title}}</div>
                        <ul>
                            <li v-for="sItem,sIndex in pItem.items" :key="sItem.path">
                                <nuxt-link :to="sItem.path">{{sItem.name}}</nuxt-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            <!-- <li class="nav-item cur">
                <a href="">首页</a>
            </li>
            <li class="nav-item">
                <a href="">刊登</a>
                <div class="nav-panel arrow">
                    <div class="nav-panel-item">
                        <div class="tit">通用数据</div>
                        <ul>
                            <li><a>定制产品</a></li>
                            <li><a>出单产品</a></li>
                        </ul>
                    </div>
                    <div class="nav-panel-item">
                        <div class="tit">亚马逊</div>
                        <ul>
                            <li><a>定制产品</a></li>
                            <li><a>产品模板</a></li>
                        </ul>
                    </div>
                </div>
            </li> -->
        </ul>
        <div class="account-wrap">
            <a class="notice">
                <el-badge :value="3" class="item">
                    <i class="icon-information"></i>
                </el-badge>
                <span class="ml5">消息</span>
            </a>
            <div class="account-items">
                <div class="user">
                    <i class="icon-personal blue mr5" style="font-size:16px;"></i>
                    <span class="mr5">{{userInfo ? userInfo.username : ''}}</span>
                    <span class="account-level level-icon4"></span>
                    <i class="icon-down blue mr5"></i> 
                    <span class="mr5" style="font-size:16px;">|</span>
                    <el-badge :value="3" class="item">
                        <i class="icon-carts" style="font-size:18px;vertical-align:-4px;"></i>
                    </el-badge>
                </div>
                <div class="nav-panel">
                    <div class="nav-panel-item" v-for="item,index in sideMenuList" :key="item.title">
                        <div class="tit">{{item.title}}</div>
                        <ul>
                            <li v-for="sItem,sIndex in item.items" :key="sItem.path">
                                <nuxt-link :to="sItem.path">{{sItem.name}}</nuxt-link>
                            </li>
                        </ul>
                    </div>
                    <div class="panel-bottom">
                        <a class="mr10 blue o8 pointer">切换关联主账号</a>
                        <a class="blue o8 pointer" @click="logout">退出登录</a>
                    </div>
                    <!-- <div class="nav-panel-item">
                        <div class="tit">账号管理</div>
                        <ul>
                            <li><a>我的账号</a></li>
                            <li><a>绑定登录</a></li>
                        </ul>
                    </div> -->
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import Cookie from 'js-cookie'
export default {
    computed: {
        userInfo(){
            if(process.client){
                let userInfo = window.localStorage.getItem('userInfo');
                return userInfo ? JSON.parse(userInfo) : ''
            }
            // return this.$store.user.userInfo;
        },
        menuList() {
            return this.$store.state.user.menuList;
        },
        sideMenuList(){
            return this.$store.state.user.sideMenuList;
        }
    },
    methods: {
        async getMenu() {
            let userInfo = window.localStorage.getItem('userInfo');
            if(userInfo){
                let {username} = JSON.parse(userInfo);
                await this.$store.dispatch('user/getMenu', {username});
            } else {
                this.$router.push('/login');
            }
        },
        async logout(){
            await this.$store.dispatch('user/logout');
            this.$router.push('/login');
        }
    },
    async mounted(){
        this.getMenu();
    }
}
</script>
<style lang="scss" scoped>
    @import '~/assets/style/variable.scss';
    .top-nav{
        background-color: $color1;
        box-shadow: 0px 3px 6px 0px rgba(214, 214, 214, 0.5);
        display: flex;
        justify-content: space-between;
        height: 60px;
        font-size: 16px;
        .logo{
            width: 230px;
            text-align: center;
            align-self: center;
            a{
                color: #fff;
                cursor: pointer;
                font-size: 38px;
                i{
                    vertical-align: -5px;
                }
            }
        }
    }
    .nav-list{
        padding:0;
        margin:0;
        display: flex;
        line-height: 38px;
        flex: 1; 
        align-self: flex-end;      
        li{
            list-style: none;
        }
        a{
            text-decoration: none;
        }
    }
    .nav-item{
        position: relative;
        &>a{
            display: inline-block;
            color: #fff;
            padding: 0 17px;
            margin-right: 5px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
        }
        &:hover>a,
        &.cur>a{
            background: $color2;
            border-radius: 2px 2px 0 0;
        } 
        &:hover .nav-panel{
            display:block;
        }
    }
    .nav-panel{
        background: #fff;
        box-shadow: 0px 0px 6px 0px rgba(68, 68, 68, 0.49);
        padding: 0 15px;
        font-size: 14px;
        left: -102px;
        top: 38px; 
        position: absolute;
        display:none;
        &.arrow::before{
            content: '';
            display: block;
            width:0;
            height: 0;
            border: 6px transparent solid;
            border-bottom-color: #fff;
            position: absolute;
            top: -12px;
            left: 125px; 
        }
        .nav-panel-item:last-child{
            border-bottom: 0;
        }
    }
    .nav-panel-item{
        display: flex;
        line-height: 20px;
        padding: 10px 0;
        border-bottom: 1px dashed #ececec;
        .tit{
            min-width: 92px;
            font-weight: bold;
            padding-top: 5px;
        }
        ul{
            min-width: 320px;
            padding:0;
            margin:0;
            display: flex;
            flex-wrap: wrap
        }
        li{
            padding: 0 5px;
            margin: 5px 0;
            min-width: 80px;
            list-style: none;
            a{
                cursor: pointer;
                text-decoration: none;
                color: inherit;
                &:hover{
                    background: $color2;
                    color: #fff;
                }
            }
        }
    }
    .account-wrap{
        display: flex;
        align-items: flex-end;
        .notice{
            color: #fff;
            margin-right: 10px;
            padding-bottom: 10px;
            font-size: 14px;
            font-weight: bold;
        }
        .account-items{
            display: flex;
            padding: 0 18px;
            background-color: #fff;
            border-radius: 5px 5px 0 0;
            height: 38px;
            margin-right: 20px;
            font-size: 12px;
            position: relative;
            .user{
                display: flex;
                align-items: center;
            }
            .nav-panel{
                display: none;
                left: auto;
                right:0;
            }
            &:hover .nav-panel{
                display: block;
            }
            .panel-bottom{
                padding: 10px 0;
                text-align: right;
            }
        }
    }
</style>