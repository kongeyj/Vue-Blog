<template>
    <div class=" space-x-4">
        <router-link class="tag-box-bg tag-box-text n" v-for="tag in tags" :key="tag"
            :to="{ name: 'tag', params: { tagId: tag } }">{{ tag
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