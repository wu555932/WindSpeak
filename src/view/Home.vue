<template>
  <div class="layout">
    <!-- <div id="test"></div> -->
    <Layout class="container">
        <Header>
            <h2>WindSpeak</h2>
        </Header>
        <Layout class="center">
            <Sider>
                <Menu>
                  <!-- <Submenu>
                      <template slot="title">
                        <Icon type="md-barcode" />
                        WebSocket
                      </template>
                  </Submenu>
                  <Submenu>
                      <template slot="title">
                        <Icon type="md-camera" />
                        数据可视化
                      </template>
                  </Submenu> -->
                  <MenuGroup>
                      <MenuItem name="1" to="/socket">
                          <Icon type="md-barcode" />
                          WebSocket
                      </MenuItem>
                      <MenuItem name="2" to="/datavisible">
                          <Icon type="md-camera" />
                          数据可视化
                      </MenuItem>
                  </MenuGroup>
                </Menu>
            </Sider>
            <Content class="content">
              <router-view></router-view>
            </Content>
        </Layout>
        <Footer>Footer</Footer>
    </Layout>
  </div>
</template>

<script>
  // import Test from './Test.vue'
  export default {
    name: 'HomePage',
  }
  // new Test().$mount('#test');    
  // 只能挂载在根节点。
</script>

<style lang="scss" scoped>
.layout {
  // width: 100%;
  height: 100%;
  background-color: #ffffff;
}
::v-deep .ivu-menu {
  width: 200px !important;
  height: 100%;
}
::v-deep .ivu-layout-header  {
  background-color: #ffffff;
  text-align: center;
}
::v-deep .ivu-layout-sider {
  background-color: #ffffff;
  // text-align: center;
  height: 100%;
  width: 100%;
}
</style>