<template>
    <div class="left-bar">
        <div class="panel-item">
            <dl>
                <dt>选品管理</dt>
                <dd class="cur"><nuxt-link to="/productType">全部选品</nuxt-link></dd>
                <dd><nuxt-link to="/productType/counter">成本计算器</nuxt-link></dd>
            </dl>
        </div>
        <div class="panel-bottom">
            <dl>
                <dt><nuxt-link to="/frontend/HelperDocument/index" target="_blank">帮助手册</nuxt-link></dt>
            </dl>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    @import '~/assets/style/variable.scss';
    .left-bar {
        width: 212px;
        font-size: 13px;
        flex-shrink: 0;
        flex-grow: 0;
        display: block;
        .panel-item, .panel-bottom{
            border: 1px solid #ddd;
            dt, dd{
                height: 36px;
                line-height: 36px;
                border-bottom: 1px solid #ddd;
                a{
                    display: block;
                    color: inherit;
                    text-decoration: none;
                }
            }
            dt{
                font-weight: bold;
                background: rgb(245, 247, 250);
                padding-left: 10px; 
            }
            dd{
                padding-left: 20px; 
                &:hover, &.cur{
                    background: $themeColor;
                    color: #fff;
                }
            }
        }
        .panel-item{
            dd:last-child{
                border-bottom: 0
            }
            &:not(:first-child){
                border-top:0;
            }
        }
        .panel-bottom{
            text-align: center;
            border-top: 0;
            dt{
                padding: 0;
                border-bottom:0;
            }
        }
    }
</style>