<template>
    <div>
        <BreadCrumb>
            工单管理 > <span class="blue">我的工单</span>
        </BreadCrumb>
        <el-form ref="listForm" :model="listForm" :rules="listRules" size="mini" :hide-required-asterisk="false" label-width="100px" class="zw-search-form">
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
            <el-form-item label="账号：">
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="状态：">
                <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
                    <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
                </el-checkbox-group>
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
                created_to: ''
            },
            listRules: {
                keyword:[
                    {required:true, message:'请输入关键字', trigger:'blur'},
                    {pattern: /^[A-z]+$/, message: '关键字必须为纯字母', trigger: 'blur'}
                ]
            },
            checkAll: false,
            checkedCities: ['上海', '北京'],
            cities: cityOptions,
            isIndeterminate: true
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