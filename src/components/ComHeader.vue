<template>
    <nav>
        <div @click="toggleTheme"><i
                :class="[theme ? 'pi pi-sun text-light-text' : 'pi pi-moon text-dark-text', 'text-3xl', 'p-2']"></i>
        </div>
        <div class=" w-2/3 grid grid-cols-4">
            <router-link to="/home" class="title-box text-theme text-hover-theme">首页</router-link>
            <router-link to="/blogs" class="title-box text-theme text-hover-theme">博客</router-link>
            <router-link to="/about" class="title-box text-theme text-hover-theme">关于</router-link>
            <router-link to="/tags" class="title-box text-theme text-hover-theme">标签</router-link>
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters(["theme"])
    },
    methods: {
        ...mapActions(['toggleTheme']),
    },
    mounted() {
        document.documentElement.className = this.theme ? "" : "dark";
    },

}
</script>

<style scoped></style>