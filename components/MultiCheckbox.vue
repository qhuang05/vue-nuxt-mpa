<template>
    <div class="zw-checkbox">
        <el-row type="flex" justify="space-between">
            <el-row class="flex-1">
                <el-radio-group 
                    v-model="selectedOne" 
                    @change="selectHandler('one')" 
                    v-show="multiFlag==0&&!isShowSearchOne&&!isShowSearchMulti"
                    class="selected-one-bar"
                >
                    <el-radio label="" v-if="isShowAll">全选</el-radio>
                    <el-radio 
                        v-for="item in limitList"
                        :key="item.id" 
                        :label="item.id"
                        :title="item.name">{{item.name}}</el-radio>
                </el-radio-group>
                <el-row 
                    type="flex" 
                    justify="space-between" 
                    class="selected-multi-bar" 
                    v-show="multiFlag==1&&!isShowSearchMulti"
                >
                    <div class="flex-1">{{selectedMultiText}}</div>
                    <a class="main-color blue pointer" @click="clearMultiSelect">清除多选 <i class="icon-X"></i></a>
                </el-row>
                <el-row class="search-panel" v-show="isShowSearchOne || isShowSearchMulti">
                    <el-row class="panel-tit" type="flex" justify="end">
                        <el-input
                            v-model="searchKey"
                            size="mini"
                            style="width:200px;"
                            clearable
                            @change="searchHandler"
                        >
                            <i slot="suffix" class="el-input__icon el-icon-search" @click="searchHandler"></i>
                        </el-input>
                    </el-row>
                    <div class="panel-cont">
                        <el-radio-group v-model="selectedOne" v-show="isShowSearchOne">
                            <el-radio
                                v-for="item in filterList" 
                                :key="item.id" 
                                :label="item.id"
                                @change="selectHandler('one')">{{item.name}}  
                            </el-radio>
                        </el-radio-group>
                        <el-checkbox-group v-model="selectedMulti" v-show="isShowSearchMulti">
                            <el-checkbox
                                v-for="item in filterList"
                                :key="item.id"
                                :label="item.id"
                            >{{item.name}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <div class="panel-bottom" v-show="isShowSearchMulti">
                        <el-row>
                            已选{{label}}：
                            <el-checkbox-group v-model="selectedMulti" style="display:inline;">
                                <el-checkbox 
                                    v-for="item in selectedMultiArr"
                                    :key="item.id"
                                    :label="item.id"
                                >{{item.name}}</el-checkbox>
                            </el-checkbox-group>
                        </el-row>
                        <el-row type="flex" justify="center" style="margin-top:5px;">
                            <el-button @click="hideSearchMulti">取消</el-button>
                            <el-button type="primary" @click="selectHandler('multi')">提交</el-button>
                        </el-row>
                    </div>
                </el-row>
            </el-row>
            <el-row class="btns" style="margin-left:15px">
                <el-button size="mini" v-if="!isShowSearchOne&&!isShowSearchMulti&&multiFlag==0" @click="showSearchOne">更多<i class="icon-down1"></i></el-button>
                <el-button size="mini" v-if="isShowSearchOne&&!isShowSearchMulti&&multiFlag==0" @click="hideSearchOne">收起<i class="icon-top"></i></el-button>
                <el-button size="mini" v-if="isMulti&&!isShowSearchMulti&&!isShowSearchOne" @click="showSearchMulti">+多选</el-button>
            </el-row>
        </el-row>
    </div>
</template>

<script>
export default {
    props: {
        data: {
            type: [Array, Object]
        },
        value: {
            type: String | Number | Boolean
        },
        multiFlag: 0,    //初始值是否为多选，0单选，1单选
        isMulti: {
            type: Boolean,
            default: false
        },
        isShowAll: {
            type: Boolean,
            default: true
        },
        label: '',
    },
    data(){
        return {
            selectedOne: this.value,
            selectedMulti: this.value ? String(this.value).split(',') : [],
            searchKey: '',
            isShowSearchOne: false,
            isShowSearchMulti: false,
            filterList: this.data.constructor=='Array' ? [...this.data] : Object.values(this.data),
        }
   },
   computed: {
        list(){
            return this.data.constructor=='Array' ? [...this.data] : Object.values(this.data);
        },
        limitList(){
            let ret = [...this.list].slice(0, 15);
            if(!ret.some(a=>a.id==this.selectedOne)){
                let item = this.list.find(a=>a.id==this.selectedOne);
                if(item){
                    ret.push(item)
                }
            }
            return ret;
        },
        selectedMultiArr(){
            let ret = [];
            for(let i=0; i<this.list.length; i++){
                let item = this.list[i];
                if(this.selectedMulti.join(',').includes(item.id)){
                    ret.push(item);
                }
            }
            return ret;
        },
        selectedMultiText(){
            return this.selectedMultiArr.map(item=>item.name).join('、');
        }
   },
   watch: {
       'value': function(newval, oldval){
           this.selectedOne = newval;
           this.selectedMulti = newval ? String(newval).split(',') : [];
       }
   },
   methods: {
        selectHandler(type){
            if(type=='one'){
                this.$emit('input', this.selectedOne);
                this.$emit('update:multiFlag', 0);
                this.isShowSearchOne = false;
            } else{
                this.$emit('input', this.selectedMulti.join(','));
                this.$emit('update:multiFlag', 1);
                this.isShowSearchMulti = false;
            }
        },
        clearMultiSelect(){
            this.selectedOne = '';
            this.selectedMulti = [];
            this.$emit('input', this.selectedOne);
            this.$emit('update:multiFlag', 0);
        },
        searchHandler(){
            this.filterList = this.list.filter(item=>{
                if(item.name.indexOf(this.searchKey) > -1){
                    return true;
                }
                return false;
            })
        },
        showSearchOne(){
            this.isShowSearchOne = true;
            this.searchKey = '';
            this.filterList = [...this.list];
        },
        hideSearchOne(){
            this.isShowSearchOne = false;
        },
        showSearchMulti(){
            this.isShowSearchMulti = true;
            this.searchKey = '';
            this.filterList = [...this.list];
        },
        hideSearchMulti(){
            this.isShowSearchMulti = false;
        }
   }
}
</script>

<style lang="scss" scoped>
    @import '~/assets/style/variable.scss';
    .zw-checkbox {
        font-size: 12px;
        /deep/ .el-radio{
            margin-right: 20px;
            line-height: 2;
            max-width: 150px;
            overflow: hidden;
            text-overflow: ellipsis;
            vertical-align: top;
        }
        /deep/ .el-radio__label{
            padding: 2px 5px;
        }
        /deep/ .el-radio__input{
            display: none;
        }
        /deep/ .el-checkbox__label{
            padding-left: 5px;
        }
        /deep/ .el-radio__input.is-checked + .el-radio__label{
            background:#428bca;
            color: #fff;
        }
        /deep/ .el-checkbox__input.is-checked + .el-checkbox__label{
            color: inherit;
        }
    }
    .search-panel{
        border: 1px solid $themeColor;
        .panel-tit{
            position: relative;
            height: 44px;
            line-height: 44px;
            padding: 0 10px;
            background: #f5f7fa;
        }
        .panel-cont{
            max-height: 127px;
            overflow-y: auto;
            padding: 15px 20px;
        }
        .panel-bottom{
            padding: 10px 20px;
            background: #fafafa;
        }
    }
    .selected-multi-bar{
        background: #f5f5f5;
        padding: 0 10px;
        i{
            font-size: 12px;
        }
    }
</style>
