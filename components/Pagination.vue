<template>
    <div class="zw-pagination">
        <el-row type="flex" justify="space-between" align="middle">
            <el-row>共{{total}}个</el-row>
            <el-row type="flex" justify="end" align="middle">
                <div style="margin-right:10px">
                    显示
                    <el-select :value="perPage" size="mini" placeholder="" @change="changePageSize">
                        <el-option 
                            :label="item" 
                            :value="item" 
                            v-for="item in pageSizes" 
                            :key="item"
                        ></el-option>
                    </el-select> 每页
                </div>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="total"
                    :current-page="curPage"
                    :page-size="perPage"
                    @current-change="changePage"
                >
                </el-pagination>
                <div style="margin-left:10px;">共 {{maxPage}} 页</div>
                <div style="margin-left:20px">
                    到第
                    <el-input v-model="toPage" placeholder="" size="mini" @input="onlyNumber" @change="changePage"></el-input>
                    页
                    <el-button size="mini" style="margin-left:20px" @click="changePage('confirm')">确定</el-button>
                </div>
            </el-row>
        </el-row>
    </div>
</template>

<script>
export default {
    props:{
        total: {
            type: Number,
            default: 0
        },
        curPage: {
            type: Number,
            default: 1
        },
        perPage: {
            type: Number,
            default: 20
        },
        pageSizes: {
            type: Array,
            default: ()=>([20,30,50,100,200])
        }
    },
    data(){
        return {
            toPage: ''
        }
    },
    computed: {
        maxPage(){
            return Math.ceil(this.total/this.perPage);
        }
    },
    methods:{
        onlyNumber(){
            this.toPage = this.toPage.replace(/[^\d]+/g, '');   
        },
        changePage(n){
            let val = Number(n);
            if(n=='confirm'){
                val = Number(this.toPage);
            }
            if(val > this.maxPage) {
                this.$message({
                    message: '请输入正确的页数',
                    type: 'error'
                })
                this.toPage = '';
                return;
            }
            this.$emit('update:curPage', val);
            this.$emit('change', {
                curPage: val,
                perPage: this.perPage
            });
        },
        changePageSize(val){
            this.$emit('update:perPage', val);
            this.$emit('change', {
                curPage: this.curPage,
                perPage: val
            })
        },
    }
}
</script>

<style lang="scss" scoped>
    .zw-pagination{
        padding: 10px;
    }
    /deep/ .el-select > .el-input{
        width: 80px;
    }
    /deep/ .el-input{
        width: 60px;
    }
</style>
