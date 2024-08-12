<template>
    <card>
        <div class="flex flex-col-reverse md:flex-row md:items-center">
            <div class="md:w-1/2 p-4 pt-0">
                <router-link class="title" :to="{ name: 'blog', params: { id: blog.index } }">
                    {{ blog.title }}
                </router-link>
                <p class="author">author: {{ blog.author }}</p>
                <p class="time">{{ blog.time.toString().slice(0, 10) }}</p>
                <smail-tags class="text-theme my-1" :tags="blog.tags">
                </smail-tags>
            </div>
            <div class="md:w-1/2 p-4">
                <img src="../assets/2.jpg" alt="1" class="w-full h-auto rounded-xl">
            </div>
        </div>
    </card>

</template>

<script>
import Card from './Card.vue'
import SmailTags from './SmailTags.vue'

export default {
    props: {
        blog: {
            type: Object,
            required: true
        }
    },
    components: {
        Card,
        SmailTags
    }
}
</script>

<style scoped></style>