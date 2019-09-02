<template>
    <div v-bind:class="'CollapsiblePanel ' + borderColor">
        <div class="panel panel-hd">
          <slot name ="header"/>
          <!--<div class="panel-title">{{ title }}</div>-->
          <div class="panel-button" ref="panelButton" v-on:click="onclick"></div>
        </div>
        <div class="panel panel-bd" ref="panelBody">
            <slot name="body"/>
        </div>
    </div>
</template>

<script>
export default {
  props: ['borderColor', 'title'],
  methods: {
    data() {
      return {
        collapsed: false,
      };
    },
    onclick() {
      const newStyle = this.collapsed ? 'block' : 'none';
      this.$refs.panelBody.style.display = newStyle;
      this.collapsed = !this.collapsed;

      this.$refs.panelButton.classList.toggle('collapsed');
    },
  },
};

</script>

<style>

    .panel-title {
        position: absolute;
        text-transform: uppercase;
        top: calc(50% - 7px);
        width: 100%;
    }

    .panel-button {
        /*width: 30px;*/
        /*height: 30px;*/
    }

    .panel-button:after {
        content: '\002B';
        color: #777;
        font-weight: bold;
        position: absolute;
        right: 10px;
        /*top: 7px;*/
        top:25%;
        font-size: 2em;
    }

    .panel-button.collapsed:after {
        content: '\2212';
    }

    .panel {
      border: 1px solid;
    }

    .panel-hd {
        /*min-height: 30px;*/
        position: relative;
        background: #222;
    }

    .panel-bd {
        padding: 10px;
        /*height: 200px;*/
    }

</style>
