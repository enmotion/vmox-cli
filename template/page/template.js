const contentVue =`<template>
  <div class="grow-1 flex-col">
    &PAGE-NAME&
  </div>
  
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import { useRouter, useRoute } from "@src/router/use.lib"; // The route API reencapsulated by introducing the vmox-cli project.
import publicStores from "@src/stores";

export default defineComponent({
  name:'&PAGE-NAME&-pg',
  components:{ },
  setup(props,context){
    const { proxy } = getCurrentInstance() as { proxy:any }
    const route = useRoute();
    const router = useRouter();
    return {
      route,
      router,
      publicStores
    }
  }
})
</script>`

const contentPgTs=`
import type { VmoxRouteRecordRaw } from "@src/router/use.lib";

const router: VmoxRouteRecordRaw = {
 name: '&PAGE-NAME&-pg',
 path: '&PAGE-PATH&',
 meta: {
   keepAlive: true,
   tokenRequire: true,
   pageName: '&PAGE-TITLE&',
   powerRequire: [],
 },
 component:()=>import('./page.vue')
};
export default router;`

module.exports ={
  contentVue,
  contentPgTs
}