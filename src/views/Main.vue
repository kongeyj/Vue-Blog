<template>
    <div>
        <com-header></com-header>
        <router-view></router-view>
        <com-foot></com-foot>
    </div>

</template>

<script>
import ComHeader from '@/components/ComHeader.vue'
import ComFoot from '@/components/ComFoot.vue'

export default {
    components: {
        ComHeader,
        ComFoot
    },
    data() {
        return {

        }
    }
}
</script>

<style scoped></style>