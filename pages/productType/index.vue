<template>
    <div>
        <BreadCrumb>
            选品管理 > <span class="main-color">全部产品</span>
        </BreadCrumb>
        <el-form ref="listForm" :model="listForm" :rules="listRules" size="mini" :hide-required-asterisk="false" label-width="90px" class="zw-search-form">
            <el-form-item label="账号：">
                <MultiCheckbox 
                    :data="accountList" 
                    v-model="listForm.account_id"
                    :multi-flag.sync="listForm.account_id_flag"
                    :is-multi="true"
                    label="账号">
                </MultiCheckbox>
            </el-form-item>
            <el-form-item label="关键字：" prop="keyword">
                <el-row>
                    <el-col :span="12">
                        <el-input 
                            v-model="listForm.keyword" 
                            placeholder="请输入关键字" 
                            clearable>
                        </el-input>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="区域：">
                <el-row>
                    <el-col :span="12">
                        <el-select 
                            v-model="listForm.region" 
                            placeholder="请选择区域" 
                            style="width:100%"
                        >
                            <el-option 
                                :label="item.name" 
                                :value="item.id" 
                                v-for="item in regionList" 
                                :key="item.id">
                            </el-option>
                        </el-select>
                    </el-col>
                </el-row>
            </el-form-item>
            <el-form-item label="创建时间：" style="margin-bottom:0">
                <el-row>
                    <el-col :span="12">
                        <el-row type="flex">
                            <el-form-item prop="created_from" style="width:100%">        
                                <el-date-picker
                                    v-model="listForm.created_from"
                                    type="date"
                                    placeholder="开始时间"
                                    style="width:100%"
                                >
                                </el-date-picker>
                            </el-form-item>
                            <span style="padding:0 5px">~</span>
                            <el-form-item prop="created_to" style="width:100%">
                                <el-date-picker
                                    v-model="listForm.created_to"
                                    type="date"
                                    placeholder="结束时间"
                                    style="width:100%"
                                >
                                </el-date-picker>
                            </el-form-item>
                        </el-row>
                    </el-col>
                    <el-col :span="12" style="padding-left: 20px;">    
                        <el-button type="primary" @click="formSearch">搜索</el-button>
                        <el-button @click="formReset">重置</el-button>
                    </el-col>
                </el-row>
            </el-form-item>
            <div class="sorting-box">
                <el-form-item label="排序方式：">
                    <el-button 
                        v-for="item in sortingList"
                        :key="item.field"
                        :type="`${listForm.sortField==item.field ? 'primary' : ''}`"
                        size="mini"
                        @click="sortHandler(item.field, listForm.field==item.filed ? (listForm.sortType=='asc' ? 'desc' : 'asc') : item.default)"
                    >
                        {{item.name}}
                        <template v-if="listForm.sortField==item.field">
                            <i class="el-icon-caret-bottom" v-if="listForm.sortType=='desc'"></i>
                            <i class="el-icon-caret-top" v-else></i>
                        </template>
                    </el-button>
                </el-form-item>
            </div>
        </el-form>
        <div class="zw-table-box">
            <Pagination
                :total.sync="total"
                :cur-page.sync="curPage"
                :per-page.sync="perPage"
                @change="formSearch"
                ref="pager1"
            ></Pagination>
            <el-table
                class="zw-table"
                :data="tableData"
                header-cell-class-name="table-th"
                cell-class-name="table-td"
                border>
                <el-table-column
                    prop="date"
                    label="日期">
                </el-table-column>
                <el-table-column
                    prop="name"
                    label="姓名">
                </el-table-column>
                <el-table-column
                    prop="address"
                    label="地址">
                </el-table-column>
            </el-table>
             <Pagination
                :total.sync="total"
                :cur-page.sync="curPage"
                :per-page.sync="perPage"
                @change="formSearch"
                ref="pager2"
            ></Pagination>
        </div>
        <!-- <nuxt-link to="/productType/edit/100">商品详情</nuxt-link> -->
    </div>
</template>

<script>
const accountList = [{"id":18042437776,"name":"cyf","title":"cyf_child3"},{"id":20090486749,"name":"嘎嘎","title":"yssxl1"},{"id":20073166500,"name":"2020-xuelxuelxuel","title":"2020-xuelxuelxuel"},{"id":20071424888,"name":"倩倩","title":"xiaoqian"},{"id":20042725669,"name":"gy","title":"guoyue"},{"id":20011636534,"name":"20200116","title":"20200116"},{"id":19111380948,"name":"link009","title":"link009"},{"id":19102497398,"name":"陈svip","title":"cyrsvip"},{"id":19102349929,"name":"20191023","title":"20191023"},{"id":19092610993,"name":"2019-0926","title":"2019-0926"},{"id":19091819920,"name":"20190918-1","title":"20190918-1"},{"id":19091890029,"name":"20190918","title":"20190918"},{"id":19082664237,"name":"福州分享图库-外部图片【侵权&不侵权】","title":"180018test"},{"id":19080822630,"name":"20190808","title":"20190808"},{"id":19062768525,"name":"zw001","title":"zw001"},{"id":19062490131,"name":"aaa","title":"1231231231231"},{"id":19013086355,"name":"2222222222","title":"2222222222"},{"id":19011185603,"name":"wuyan123","title":"wuyan123"},{"id":18102099226,"name":"ddddd","title":"ddddd"},{"id":18080147649,"name":"wy1110","title":"wy1110"},{"id":18072470619,"name":"wuyan","title":"wuyan"},{"id":18042599205,"name":"xue6","title":"xue6"},{"id":18042444067,"name":"xue5","title":"xue5"},{"id":18042465787,"name":"xue4","title":"xue4"},{"id":18042429330,"name":"xue3","title":"xue3"},{"id":18042474438,"name":"cyf","title":"cyf_child1"},{"id":18042489480,"name":"xue2","title":"xue2"},{"id":18042485470,"name":"cyf","title":"cyf_child2"},{"id":18042459484,"name":"cyf","title":"cyf_child"},{"id":18041799823,"name":"xue1","title":"xue1"}];
const regionList = [{id:1, name:'上海'},{id:2, name:'北京'},{id:3, name:'广州'},{id:4, name:'深圳'}];
const sortingList = [{field:"created",name:"按创建时间",default:'asc'},{field:"modified",name:"按更新时间",default:'desc'}];
export default {
    layout: 'default',
    data(){
        return {
            accountList,
            regionList,
            sortingList,
            // 搜索区域
            listForm: {
                account_id: '',
                account_id_flag: 0,
                keyword: '',
                region: '',
                created_from: '',
                created_to: '',
                sortField: 'created',
                sortType: 'asc'
            },
            // 搜索规则
            listRules: {
                // keyword:[
                //     {required:true, message:'请输入关键字', trigger:'blur'},
                // ]
            },
            // 搜索结果
            total: 0,
            curPage: 1,
            perPage: 20,
            tableData: [{
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄'
            }, {
                date: '2016-05-04',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1517 弄'
            }, {
                date: '2016-05-01',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1519 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }, {
                date: '2016-05-03',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1516 弄'
            }],
        }
    },
    watch: {
        'listForm.account_id': function(newval, oldval){
            console.log('==>', newval)
            this.formSearch();
        }
    },
    methods: {
        // 搜索
        formSearch(){
            this.$refs['listForm'].validate(isValid => {
                if(isValid){
                    console.log('searchParams => ', JSON.stringify(this.listForm))
                }   
            });
        },
        // 重置
        formReset(){
            this.$refs['listForm'].resetFields();
            this.$set(this.listForm, 'account_id', '');
            this.$set(this.listForm, 'account_id_flag', 0);
            this.$set(this.listForm, 'sortField', 'created');
            this.$set(this.listForm, 'sortType', 'asc');
            this.formSearch();
        },
        // 排序
        sortHandler(sortField, sortType){
            this.$set(this.listForm, 'sortField', sortField);
            this.$set(this.listForm, 'sortType', sortType);
            this.formSearch('listForm');
        }
    },
    mounted(){
        this.formSearch();
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