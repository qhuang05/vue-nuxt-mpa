<template>
    <div class="login-box">
        <div class="title">指纹定制，让创业更简单</div>
        <el-form ref="loginForm" :model="form" :rules="rules" size="medium">
            <el-form-item prop="username">
                <el-input 
                    placeholder="用户名/邮箱/手机"
                    v-model="form.username"
                    class="input-item"
                >
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input
                    placeholder="请输入登录密码"
                    v-model="form.password"
                    class="input-item"
                >
                </el-input>
            </el-form-item>
            <el-button type="primary" size="medium" @click="login">登录</el-button>
        </el-form>
    </div>
</template>

<script>
import {checkUsername, checkPassword} from '~/utils/validators.js'
export default {
    layout: 'blank',
    data() {
        return {
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    {required: true, message: '用户名不能为空', trigger: 'blur'},
                    {validator: checkUsername, trigger: 'blur'}
                ],
                password: [
                    {required: true, message: '请输入密码', trigger: 'blur'},
                    {validator: checkPassword, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        login() {
            this.$refs.loginForm.validate( isValid => {
                if(!isValid) return false;
                this.$store.dispatch('user/login', this.form).then( data => {
                    this.$router.push('/home')
                })
            })
        }
    }
}
</script>

<style lang="scss" scoped>
    .login-box{
        width: 390px;
        padding: 40px;
        border:1px solid #efefef;
        margin: 0 auto;
        .title{
            font-size: 16px;
            color: rgb(20, 171, 244);
            font-weight: bold;
            text-align: center;
            padding-bottom: 30px;
        }
        /deep/ .el-input--medium .el-input__inner{
            height: 44px;
            line-height: 44px;
        }
        /deep/ .el-button--medium{
            padding: 12px 20px;
            width: 100%;
            background-color: rgb(20, 171, 244);
            border-color: rgb(20, 171, 244);
            font-size: 14px;
            letter-spacing: 5px;
        }
    }
</style>
