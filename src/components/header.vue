<template>
  <div class="header">
    <a href="javascript:" class="header-left">
      <Icon type="ios-list" />
      <p>深圳402科技有限公司</p>
    </a>
    <div class="header-center">
      <h1>diandianrenwu</h1>
      <Icon type="md-apps" />
    </div>
    <div class="header-right">
      <a href="javascript:" class="btn">工作台</a>
      <a href="javascript:" class="btn">日历</a>
      <Icon type="ios-help-circle-outline" />
      <Icon type="ios-notifications-outline" />
      <Icon type="md-text" />
      <Poptip >
        
      </Poptip>
      <Poptip class="avatar-wrap" placement="bottom-end">
        <Avatar size="large" class="avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
        <div class="poptip-content" slot="content">
          <Card icon="ios-options" :padding="0" shadow style="width: 300px;">
              <CellGroup>
                  <Cell title="创建企业" selected/>
                  <Cell title="个人项目" />
                  <Divider />
                  <Cell title="账号设置"/>
                  <Cell title="偏好设置" />
                  <Cell title="切换至国际服务器" label="正在使用中国大陆服务器" />
                  <Divider />
                  <Cell title="退出" />
              </CellGroup>
          </Card>
        </div>
    </Poptip>
    </div>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 50px;
  background: #fff;
  box-shadow:  0 1px 3px 0 rgba(0,0,0,.15);
  .header-left:hover {
    color: #3da8f5;
  }
  .header-center {
    color: #333;
  }
  & > div, & > a {
    display: flex;
    align-items: center;
    font-size: 14px;
    color: gray;
    i {
      margin: 0 6px;
      font-size: 24px;
    }
    .btn {
      padding: 0 16px;
      border-right: 1px solid #e5e5e5;
      color: gray;
      &:hover {
        color: #3da8f5;
      }
    }
  }
  .avatar {
    margin-left: 10px;
  }
}
</style>
