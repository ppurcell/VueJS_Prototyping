<template>
    <div class="clickGame">
        <div class="wrapper">
            <div class="row">
                HEADER
            </div>
            <div class="row">
                <div class="column-2">
                    <div class="row">
                        METRICS COLUMN
                        <div class="column-12">
                            <click-display v-bind:clicked="this.clicked"
                                           v-bind:produced="this.produced"></click-display>
                        </div>
                    </div>
                </div>
                <div class="column-8">
                    <div class="row">
                        TAB SECTION
                    </div>
                    <div class="row">
                        TAB SECTION
                    </div>
                    <div class="row">
                        <div class="column-6">
                            <first-child></first-child>
                        </div>
                        <div class="column-6">
                            <first-child static-content="">Some Slot Content</first-child>
                        </div>
                        <div class="column-6">
                            <first-child></first-child>
                        </div>
                        <div class="column-6">
                            <first-child static-content="">Some Slot Content</first-child>
                        </div>

                    </div>
                </div>
                <div class="column-2">
                    <div class="row">
                        UPDATE COLUMN
                        <div class="column-12">
                            <clicker v-on:clicker-clicked="clickerClicked"></clicker>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                FOOTER
            </div>
        </div>


    </div>
</template>

<script>
    import Clicker from './Clicker';
    import ClickDisplay from './ClickDisplay';
    import FirstChild from './FirstChild';

    export default {
        props: [],
        components: {
            Clicker,
            ClickDisplay,
            FirstChild,

        },
        data() {
            return {
                clicked: 0,
                produced: 0,
                tick: 60,
            };
        },
        methods: {
            clickerClicked() {
                this.clicked = this.clicked + 1;
            },

            timeFucked() {
                return 1000 / this.clicked;
            },
        },

        mounted() {
            window.setInterval(() => {
                this.produced = this.produced + (this.clicked / this.tick);
            }, 1000 / this.tick);
        },
    };
</script>

<style>

</style>
