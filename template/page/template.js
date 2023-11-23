const contentVue =`<template>
  <div class="grow-1 flex-col">
    _PAGE-NAME_
  </div>
  
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import { useRouter, useRoute } from "@src/router";
import publicStores from "@src/stores";

export default defineComponent({
  name:'_PAGE-NAME_-pg',
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

const contentPgTs=`/*
* @Author: enmotion
* @Last Modified by: enmotion
*/

import type { VmoxRouteRecordRaw } from "@src/router/use.lib";

const router: VmoxRouteRecordRaw = {
 name: '_PAGE-NAME_-pg',
 path: '_PAGE-PATH_',
 meta: {
   keepAlive: true,
   tokenRequire: true,
   pageName: '_PAGE-TITLE_',
   powerRequire: [],
 },
 component:()=>import('./page.vue')
};
export default router;`

module.exports ={
  contentVue,
  contentPgTs
}