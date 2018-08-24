<template>
    <div>
        由cluas-cli生成的vue页面组件
    </div>
</template>

<script>
    <% if (meta.module) {%>
    import { mapState } from "vuex";
    <%}%>
    export default {
        <% if (meta.module) {%>
        computed: {
            ...mapState("<%= meta.name%>", {
                demo: (state) => state.demo
            })
        }
        <%}%>
    }
</script>

<style scoped>

</style>