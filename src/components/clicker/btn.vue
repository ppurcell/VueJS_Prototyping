<template>
    <div class="">
        <!--<input type="button" class="">-->
        <button type='button' class='btn btn_animated' v-on:click='onClick'>
            <div class="position_test">{{internalText}}</div>
            <!--<div class=''>-->
                <div id='myBar' ref='devBar' class='w3-green' style='height:24px;width:0'></div>
            <!--</div>-->
        </button>
    </div>
</template>

<script type="text/javascript">
    import TweenLite from 'gsap';

    export default {
        props: ['btnText'],
        data() {
            return {
                isAnimating: false,
                internalText: this.btnText,
            };
        },
        methods: {
            clicked() {
                this.$emit('clicker-clicked', 1);
            },
            onClick() {
                if (!this.isAnimating) {
                    this.isAnimating = true;
                    console.log('CLICK');
                    TweenLite.to(this.$refs.devBar, 0, { width: '0%' });
                    TweenLite.to(this.$refs.devBar, 2, { width: '100%', onComplete: this.doStuff });
                }
            },
            doStuff() {
//                this.isAnimating = false;
                console.log('OnComplete');
                TweenLite.to(this.$refs.devBar, 1, { width: '0%', onComplete: this.onComplete });
            },
            onComplete() {
                this.isAnimating = false;
            },
        },
    };

</script>


<style>
    .w3-green, .w3-hover-green:hover {
        /*color: #fff !important;*/
        background-color: rgba(44, 121, 51, 0.8) !important;
        /*background-color:#222;*/

    }

    .w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {
        /*color: #000 !important;*/
        /*background-color: #f1f1f1 !important;*/
        background-color:#222;

    }

    .position_test {
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        left: 0;
        right: 0;
        vertical-align: middle;
        top: 25%;
    }
    .position_test :before {
        content: '';
        display: inline-block;
        height: 100%;
        vertical-align: middle;
        margin-right: -0.25em; /* Adjusts for spacing */
    }


</style>
