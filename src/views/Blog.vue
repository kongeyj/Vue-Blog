<template>
    <card>
        <p class="title">{{ getBlog.title }}</p>
        <p class="author">{{ getBlog.author }}</p>
        <p class="time">{{ getBlog.time.toString().slice(0, 10) }}</p>
        <smail-tags class="text-theme my-1 p-1 border-b border-black" :tags="getBlog.tags">
        </smail-tags>
        <p class="text-theme text-2xl my-4">{{ getBlog.content }}</p>
    </card>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue';
import Card from '@/components/Card.vue';
import SmailTags from '@/components/SmailTags.vue'

import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';
export default {
    data() {
        return {
            blog: {
                title: "",
                auther: "",
                time: "",
                tags: [],
                content: ""
            }
        }
    },
    components: {
        Card,
        BlogCard,
        SmailTags
    },
    methods: {
        ...mapActions(['fetchBlogs']),
    },
    computed: {
        ...mapGetters(["getBlogById"]),
        postId() {
            // 访问动态路由参数
            return Number(this.$route.params.id);
        },
        getBlog() {
            const blog = this.getBlogById(this.postId)
            if (blog) {
                this.blog.time = blog.time
                this.blog.auther = blog.auther
                this.blog.title = blog.title
                this.blog.tags = blog.tags
                this.blog.content = blog.content
            }
            return this.blog
        }
    },
    created() {
        this.fetchBlogs();
    }
}
</script>

<style scoped></style>