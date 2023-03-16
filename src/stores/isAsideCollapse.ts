import {ref} from "vue";
import {defineStore} from "pinia";

export const useAsideCollapseStore = defineStore('isAsideCollapse', () => {
    const isAsideCollapse = ref(false);

    function toggleAsideCollapse() {
        isAsideCollapse.value = !isAsideCollapse.value;
    }

    return {isAsideCollapse, toggleAsideCollapse}
})