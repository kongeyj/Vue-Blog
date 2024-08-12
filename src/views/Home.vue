<template>
    <div>
        <card>
            <p class="text-theme text-4xl w-full h-auto my-8 font-bold">HELLO</p>
            <p class="text-theme text-2xl w-full h-auto my-8 font-bold">This is a simple Blog</p>
        </card>
        <card-row>
            <p class="text-theme mx-2 my-4">Home页面</p>
        </card-row>
    </div>
</template>

<script>
import Card from '@/components/Card.vue'
import CardRow from '@/components/CardRow.vue'

export default {
    components: {
        Card,
        CardRow
    },
    data() {
        return {

        }
    }
}
</script>

<style></style>