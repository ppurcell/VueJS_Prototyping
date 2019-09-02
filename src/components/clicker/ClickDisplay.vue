<template>
    <div class="click-display">
        <span>Clicked: {{clicked}}</span>
        <span>Produced: {{Math.floor(this.produced)}}</span>
    </div>

</template>

<script>
    export default {
        props: ['clicked', 'produced'],
        components: {
        },

//        computed: {
//            ceilProduced() {
//                return Math.floor(this.produced);
//            },
//
//        },
        methods: {
            deleteTodo(todo) {
                const todoIndex = this.todos.indexOf(todo);
                this.todos.splice(todoIndex, 1);
                this.deletedTodos++;
            },
        },
    };
</script>

<style>

</style>
