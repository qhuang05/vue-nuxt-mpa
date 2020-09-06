<template>
    <header class="top-nav">
        <div class="logo">
            <a class="iconfont bubble-icon">&#xe70a;</a>
        </div>
        <ul class="nav-list">
            <li class="nav-item cur">
                <a href="">首页</a>
            </li>
            <li class="nav-item">
                <a href="">图库</a>
            </li>
            <li class="nav-item">
                <a href="">设计</a>
                <div class="nav-panel">
                    <div class="nav-panel-item">
                        <div class="tit">设计</div>
                        <ul>
                            <li><a>设计器</a></li>
                            <li><a>批量设计</a></li>
                        </ul>
                    </div>
                </div>
            </li>
            <li class="nav-item">
                <a href="">刊登</a>
                <div class="nav-panel">
                    <div class="nav-panel-item">
                        <div class="tit">通用数据</div>
                        <ul>
                            <li><a>定制产品</a></li>
                            <li><a>出单产品</a></li>
                            <li><a>反解SKU</a></li>
                            <li><a>素材管理</a></li>
                            <li><a>通用模板</a></li>
                            <li><a>汇出记录</a></li>
                        </ul>
                    </div>
                    <div class="nav-panel-item">
                        <div class="tit">亚马逊</div>
                        <ul>
                            <li><a>定制产品</a></li>
                            <li><a>产品模板</a></li>
                            <li><a>汇出记录</a></li>
                            <li><a>UPC管理</a></li>
                            <li><a>维权举报</a></li>
                        </ul>
                    </div>
                </div>
            </li>
        </ul>
        <div class="account-wrap">
            <a>消息</a>
            <div>
                <div>test | 购物车</div>
                <div class="nav-panel">
                    <div class="nav-panel-item">
                        <div class="tit">通用数据</div>
                        <ul>
                            <li><a>定制产品</a></li>
                            <li><a>出单产品</a></li>
                            <li><a>反解SKU</a></li>
                            <li><a>素材管理</a></li>
                            <li><a>通用模板</a></li>
                            <li><a>汇出记录</a></li>
                        </ul>
                    </div>
                    <div class="nav-panel-item">
                        <div class="tit">亚马逊</div>
                        <ul>
                            <li><a>定制产品</a></li>
                            <li><a>产品模板</a></li>
                            <li><a>汇出记录</a></li>
                            <li><a>UPC管理</a></li>
                            <li><a>维权举报</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {

}
</script>
<style lang="scss" scoped>
    @import '~/assets/style/variable.scss';
    .top-nav{
        background-color: $COLOR_1;
        display: flex;
        justify-content: space-between;
        height: 60px;
        .logo{
            width: 230px;
            color: #fff;
            cursor: pointer;
            text-align: center;
            font-size: 30px;
            align-self: center;
            // padding-top:15px;
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
            background: $COLOR_2;
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
        &::before{
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
            display: flex;
            flex-wrap: wrap
        }
        li{
            padding: 0 5px;
            margin: 5px 0;
            min-width: 80px;
            a{
                cursor: pointer;
                &:hover{
                    background: $COLOR_1;
                    color: #fff;
                }
            }
        }
    }
</style>