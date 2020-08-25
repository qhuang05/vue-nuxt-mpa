<template>
  <div class="menu-list">
      导航菜单：
      {{menuList}}
      <ul>
          <MenuItem class="item" v-for="item in menuList" :key="item.path" :data="item"></MenuItem>
      </ul>
      <!-- <ul>
          <li>
              <div>首页</div>
          </li>
          <li>
              <div>选品</div>
              <ul>
                    <li>
                        <div>全部产品</div>
                    </li>
                    <li>
                        <div>成本计算器</div>
                        <ul>
                            <li>
                                <div>javascript</div>
                            </li>
                            <li>
                                <div>typescript</div>
                            </li>
                        </ul>
                    </li>
              </ul>
          </li>
      </ul> -->
  </div>
</template>

<script>
export default {
    computed: {
        menuList() {
            return this.$store.state.user.menuList;
        }
    },
    methods: {
        async getMenuList() {
            let username = JSON.parse(window.localStorage.getItem('userInfo')).username;
            let ret = await this.$store.dispatch('user/getMenu', {username});
        }
    },
    mounted(){
        this.getMenuList();
    }
}
</script>

<style>
    .menu-list{
        padding-top: 30px;
    }
</style>