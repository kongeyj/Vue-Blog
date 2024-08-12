<template>
    <div>
        <div v-if="getBlogs.length > 0">
            <blog-card v-for="blog in getBlogs" :key="blog.index" :blog="blog"></blog-card>
        </div>
        <div v-else>
            <card>
                <block-link :tags="allTags"></block-link>
            </card>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
import BlockLink from '@/components/BlockLink.vue';
import BlogCard from '@/components/BlogCard.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    data() {
        return {
        }
    },
    components: {
        Card,
        BlockLink,
        BlogCard
    },
    computed: {
        ...mapGetters(["allTags", "getBlogByTag"]),
        getTag() {
            // 访问动态路由参数
            const tagId = this.$route.params.tagId;
            if (tagId && this.allTags) {
                if (this.allTags.includes(tagId)) {
                    return tagId;
                }
            }
            return null;
        },
        getBlogs() {
            const tag = this.getTag; // 调用 getTag 计算属性
            if (tag) {
                const blogs = this.getBlogByTag(tag); // 传入标签 ID 获取博客
                return blogs;
            }
            return [];
        }
    },
    methods: {
        ...mapActions(['fetchTags', 'fetchBlogs']),
    },
    created() {
        this.fetchBlogs()
        this.fetchTags()
    }
}
</script>

<style scoped></style>