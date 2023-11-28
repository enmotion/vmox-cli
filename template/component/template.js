const contentVue =`<template>
  <div class="grow-1 flex-col">
    _COMP-NAME_
  </div>
  
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from 'vue';
import publicStores from "@src/stores";

export default defineComponent({
  name:'vmo-_COMP-NAME_',
  components:{},
  emits:[],
  setup(props,context){
    const { proxy } = getCurrentInstance() as { proxy:any }
    return {
      publicStores
    }
  }
})
</script>`

const contentCpTs=`import { defineAsyncComponent } from 'vue';
const component = defineAsyncComponent(() => import('./component.vue')); // vue3 的懒加载方式
export default component;`

module.exports ={
  contentVue,
  contentCpTs
}