<template>
    <div>
        <blog-card v-for="blog in allBlogs" :key="blog.index" :blog="blog"></blog-card>
    </div>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
    components: {
        BlogCard
    },
    methods: {
        ...mapActions(['fetchBlogs']),
    },
    computed: {
        ...mapGetters(["allBlogs"])
    },
    created() {
        this.fetchBlogs();
        // console.log(allBlogs);
    }
}
</script>

<style scoped></style>