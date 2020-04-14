<template>
    <div class="auth">
        <div class="login-pane">
            <VanForm @submit="login">
                <VanField name="account" placeholder="account" :rules="rules.account" v-model="account"/>
                <VanField type="password" name="password" placeholder="password" :rules="rules.password" v-model="password"/>
                <van-button style="margin-top: 30px;" round block type="info" native-type="submit">提交</van-button>
            </VanForm>
        </div>
    </div>
</template>
<script>
export default {
    name: "Auth",
    data() {
        return {
            account: '',
            password: '',
            rules: {
                account: [{ required: true, message: '请输入account' }],
                password: [{ required: true, message: '请输入password' }]
            }
        }
    },
    methods: {
        login(values) {
            const { account, password } = values;
            this.$toast.loading('请求中');
            this.$net.post('/auth/login', { account, password }).then(res => {
                if (res.code == 0 && res.data) {
                    this.$toast.success('登录成功');
                    setTimeout(() => {
                        this.$router.push('index');
                    }, 1000);
                } else throw new Error(res.data);
            }).catch(err => {
                this.$toast.fail(err + '');
            }).finally(() => {
                
            });
        }
    }
}
</script>
<style lang="less" scoped>
.auth {
    width: 100%;
    height: 100%;
    background: linear-gradient(#1abc9c, #2980b9);
    display: flex;
    justify-content: center;
    align-items: center;
    .login-pane {
        background-color: #fff;
        box-sizing: border-box;
        width: 90vw;
        padding: 5vw;
        box-shadow: 0 12px 24px rgba(7, 17, 27, .3);
        border-radius: 10px;;
        .van-field {
            padding-bottom: 30px;
        }
    }
}
</style>