<template>
    <div class="space-x-4 flex flex-wrap gap-2">
        <router-link
            class="m-2 border-2 p-2 border-black rounded-lg border-spacing-1 dark:border-white dark:text-white text-center text-2xl w-auto block"
            v-for="tag in tags" :key="tag" :to="{ name: 'tag', params: { tagId: tag } }">{{
                tag
            }}</router-link>
    </div>
</template>

<script>
export default {
    props: {
        tags: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped></style>