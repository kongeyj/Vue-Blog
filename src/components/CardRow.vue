<template>
    <card>
        <img src="../assets/1.jpg" alt="1" class="w-full h-auto rounded-xl">
        <slot></slot>
    </card>

</template>

<script>
import Card from '@/components/Card.vue'
export default {
    components: {
        Card
    }
}
</script>

<style scoped></style>