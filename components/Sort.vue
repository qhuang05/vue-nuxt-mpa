<template>
    <div class="sorting-box">
        <el-form-item label="排序方式：">
            <el-button 
                type="primary" 
                size="mini"
            >
                按创建时间
                <i class="el-icon-caret-bottom" v-if="listForm.sortType=='desc'"></i>
                <i class="el-icon-caret-top" v-else></i>
            </el-button>
            <el-button  
                size="mini"
            >
                按更新时间
            </el-button>
        </el-form-item>
    </div>
</template>

<script>
export default {
    props: {
        sortField: {
            type: String,
            default: ''
        },
        sortType: {
            type: String,
            default: ''
        }
    },
    data(){
        return {

        }
    },
}
</script>

<style lang="scss" scoped>

</style>
