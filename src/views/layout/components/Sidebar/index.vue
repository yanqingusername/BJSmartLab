<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
     <!-- :default-active="$route.path" -->
    <el-menu
      :show-timeout="200"
      :default-active="activeMenu"
      :collapse="isCollapse"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <!-- <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"/> -->
      <sidebar-item v-for="route in permission_routes" :key="route.path" :item="route" :base-path="route.path" />
    </el-menu>
  </el-scrollbar>
</template>
<script>
import { mapGetters } from 'vuex'
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    // routes() {
    //   return this.$router.options.routes
    // },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}
</script>
