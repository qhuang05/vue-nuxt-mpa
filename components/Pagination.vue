<template>
    <div class="zw-pagination">
        <el-row type="flex" justify="space-between" align="middle">
            <el-row>共?个</el-row>
            <el-row type="flex" justify="end" align="middle">
                <div style="margin-right:10px">
                    显示
                    <el-select v-model="perPage" size="mini" placeholder="">
                        <el-option label="20" value="20"></el-option>
                        <el-option label="30" value="30"></el-option>
                        <el-option label="50" value="50"></el-option>
                        <el-option label="100" value="100"></el-option>
                        <el-option label="200" value="200"></el-option>
                    </el-select>每页
                </div>
                <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="total"
                    :current-page="curPage"
                    :page-sizes="pageSizes"
                >
                </el-pagination>
                <div style="margin-left:10px;">共 ? 页</div>
                <div style="margin-left:20px">
                    到第
                    <el-input v-model="toPage" placeholder="" size="mini" @input="onlyNumber"></el-input>
                    页
                    <el-button size="mini" style="margin-left:20px" @click="gotoPage">确定</el-button>
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
            default:1
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
    methods:{
        onlyNumber(){
            this.toPage = this.toPage.replace(/[^\d]+/g, '');
        },
        gotoPage(){
            
        }
    }
}
</script>

<style lang="scss" scoped>
    .zw-pagination{
        padding: 10px;
    }
    /deep/ .el-select{
        width: 70px;
    }
    /deep/ .el-input{
        width: 60px;
    }
</style>
