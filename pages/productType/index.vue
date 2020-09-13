<template>
    <div>
        <BreadCrumb>
            工单管理 > <span class="main-color">我的工单</span>
        </BreadCrumb>
        <el-form ref="listForm" :model="listForm" :rules="listRules" size="mini" :hide-required-asterisk="false" label-width="90px" class="zw-search-form">
            <el-form-item label="账号：">
                <MultiCheckbox 
                    :data="customerList" 
                    v-model="listForm.account_id"
                    :multi-flag.sync="listForm.account_id_flag"
                    :is-multi="true"
                    label="账号">
                </MultiCheckbox>
            </el-form-item>
            <el-form-item label="关键字：" prop="keyword">
                <el-col :span="12">
                    <el-input v-model="listForm.keyword" placeholder="请输入关键字" clearable></el-input>
                </el-col>
            </el-form-item>
            <el-form-item label="区域：" prop="region">
                <el-select v-model="listForm.region" placeholder="请选择区域">
                    <el-option label="北京" value="1"></el-option>
                    <el-option label="上海" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="创建时间：" style="margin-bottom:0">
                <el-col :span="12" class="flex">
                    <el-form-item prop="created_from">        
                        <el-date-picker
                            v-model="listForm.created_from"
                            type="date"
                            placeholder="开始时间"
                            style="width:100%"
                        >
                        </el-date-picker>
                    </el-form-item>
                    <span style="padding:0 5px">~</span>
                    <el-form-item prop="created_to">
                        <el-date-picker
                            v-model="listForm.created_to"
                            type="date"
                            placeholder="结束时间"
                            style="width:100%"
                        >
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-form-item>
            
            <el-form-item>
                <el-button type="primary" @click="formSearch('listForm')">搜索</el-button>
                <el-button @click="formReset('listForm')">重置</el-button>
            </el-form-item>
        </el-form>
        <!-- <nuxt-link to="/productType/edit/100">商品详情</nuxt-link> -->
    </div>
</template>

<script>
const cityOptions = ['上海', '北京', '广州', '深圳'];
export default {
    layout: 'default',
    data(){
        return {
            listForm: {
                keyword: '',
                region: '',
                created_from: '',
                created_to: '',
                account_id: '',
                account_id_flag: 0
            },
            listRules: {
                keyword:[
                    {required:true, message:'请输入关键字', trigger:'blur'},
                    {pattern: /^[A-z]+$/, message: '关键字必须为纯字母', trigger: 'blur'}
                ]
            },
            customerList: [{"id":18042437776,"name":"cyf","title":"cyf_child3"},{"id":20090486749,"name":"嘎嘎","title":"yssxl1"},{"id":20073166500,"name":"2020-xuelxuelxuel","title":"2020-xuelxuelxuel"},{"id":20071424888,"name":"倩倩","title":"xiaoqian"},{"id":20042725669,"name":"gy","title":"guoyue"},{"id":20011636534,"name":"20200116","title":"20200116"},{"id":19111380948,"name":"link009","title":"link009"},{"id":19102497398,"name":"陈svip","title":"cyrsvip"},{"id":19102349929,"name":"20191023","title":"20191023"},{"id":19092610993,"name":"2019-0926","title":"2019-0926"},{"id":19091819920,"name":"20190918-1","title":"20190918-1"},{"id":19091890029,"name":"20190918","title":"20190918"},{"id":19082664237,"name":"福州分享图库-外部图片【侵权&不侵权】","title":"180018test"},{"id":19080822630,"name":"20190808","title":"20190808"},{"id":19062768525,"name":"zw001","title":"zw001"},{"id":19062490131,"name":"aaa","title":"1231231231231"},{"id":19013086355,"name":"2222222222","title":"2222222222"},{"id":19011185603,"name":"wuyan123","title":"wuyan123"},{"id":18102099226,"name":"ddddd","title":"ddddd"},{"id":18080147649,"name":"wy1110","title":"wy1110"},{"id":18072470619,"name":"wuyan","title":"wuyan"},{"id":18042599205,"name":"xue6","title":"xue6"},{"id":18042444067,"name":"xue5","title":"xue5"},{"id":18042465787,"name":"xue4","title":"xue4"},{"id":18042429330,"name":"xue3","title":"xue3"},{"id":18042474438,"name":"cyf","title":"cyf_child1"},{"id":18042489480,"name":"xue2","title":"xue2"},{"id":18042485470,"name":"cyf","title":"cyf_child2"},{"id":18042459484,"name":"cyf","title":"cyf_child"},{"id":18041799823,"name":"xue1","title":"xue1"}],
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true
        }
    },
    watch: {
        'listForm.account_id': function(newval, oldval){
            console.log('account_id=>', newval)
        }
    },
    methods: {
        // 搜索
        formSearch(formName){
            this.$refs[formName].validate(isValid => {
                if(isValid){
                    console.log('submit');
                } else{
                    console.log('error');
                }
            });
        },
        // 重置
        formReset(formName){
            this.$refs[formName].resetFields();
        },
        handleCheckAllChange(val) {
            this.checkedCities = val ? cityOptions : [];
            this.isIndeterminate = false;
        },
        handleCheckedCitiesChange(value) {
            let checkedCount = value.length;
            this.checkAll = checkedCount === this.cities.length;
            this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
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