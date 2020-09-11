<template>
    <div>
        <div class="panel-nav">
            <i class="icon-pack-up" @click="toggleLeftBar"></i>
            <span class="path">工单管理 > <span class="blue">我的工单</span></span>
        </div>
        <div class="com-search-field">
            <el-form ref="form" :model="form" label-width="90px">
                <el-form-item label="活动名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="创建时间">
                    <el-date-picker
                        v-model="form.time"
                        type="daterange"
                        range-separator="~"
                        start-placeholder="开始时间"
                        end-placeholder="结束时间">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="特殊资源">
                    <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">搜索</el-button>
                    <el-button>重置</el-button>
                </el-form-item>
            </el-form>
        </div>
        <!-- <nuxt-link to="/productType/edit/100">商品详情</nuxt-link> -->
    </div>
</template>

<script>
export default {
    layout: 'default',
    data(){
        return {
            form: {
                time: '',
                name: '',
                region: '',
                date1: '',
                date2: '',
                delivery: false,
                type: [],
                resource: '',
                desc: ''
            }
        }
    },
    methods: {
        toggleLeftBar(){
            let isHidden = this.$store.state.left.isHidden;
            this.$store.commit("left/UPDATE_LEFT_STATUS", !isHidden);
        },
        onSubmit() {
            console.log('submit!');
        }
    }
}
</script>

<style lang="scss">
    .panel-nav{
        border-style: solid;
        border-width: 1px;
        border-color: rgb(221, 221, 221);
        background-color: rgb(245, 247, 250);
        height: 40px;
        line-height: 40px;
        padding: 0 18px;
        &>i{
            font-size: 18px;
            vertical-align: middle;
            margin-right: 10px;
            cursor: pointer;
        }
        .path{
            font-weight: bold;
            vertical-align: middle;
            margin-right: 10px;
        }
    }
</style>