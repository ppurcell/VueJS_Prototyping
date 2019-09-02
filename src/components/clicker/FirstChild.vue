<template>
    <CollapsiblePanel border-color='red' title='WEAPONS EMPLACEMENT'>
        <div class='firstChild'>
            {{internalText}}
            <btn btnText="LOAD ORDINANCE"></btn>
            <btn btnText="TARGET ACQUISITION"></btn>
            <btn btnText="PERFORM FIRING SOLUTION"></btn>
            <slot></slot>
        </div>

    </CollapsiblePanel>

</template>

<script>
    import CollapsiblePanel from './CollapsiblePanel';
    import btn from './btn';

    export default {
        props: ['staticContent'],
        components: { CollapsiblePanel, btn },
        data() {
            return {
                demo: { score: 0 },
                isAnimating: false,
                internalText: this.staticContent,
            };
        },
        methods: {
            showScore() {
                this.$refs.scoreDisplay.innerHTML = this.demo.score.toFixed(0);
                console.log('showScore');
            },
        },
    };

</script>

<style>
    .firstChild {
        margin-top: 1em;
    }

    .w3-green, .w3-hover-green:hover {
        color: #fff !important;
        background-color: #4CAF50 !important;
    }

    .w3-light-grey, .w3-hover-light-grey:hover, .w3-light-gray, .w3-hover-light-gray:hover {
        color: #000 !important;
        background-color: #f1f1f1 !important;
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
