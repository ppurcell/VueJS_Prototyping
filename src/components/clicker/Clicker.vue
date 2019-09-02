<template>
    <input type="button" class="btn" v-on:click="clicked" Value="Click Me"/>
</template>

<script type = "text/javascript">
    export default{
        props: [],
        methods: {
            clicked() {
                this.$emit('clicker-clicked', 1);
            },
        },
    };

</script>

<style>

</style>
