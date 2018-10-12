<template>
  <div class="md-layout-item md-xsmall-size-50 md-small-size-50 md-medium-size-33 md-large-size-20"
       v-on:click="clicked">
    <div class="inventory-container hvr-grow">
      <div class="content">
       <div class="md-xsmall-hide title">
         {{inventorySlot.title}}
       </div>
        <div class= "body"  v-bind:style="this.color">
          <md-icon class="md-size-1x"> {{this.icon}}</md-icon>
          <div class = "num"></div>
          <div class = "progress"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InventorySlot',
  props: ['inventorySlot'],
  data: () => ({
    color: {
      backgroundColor: '',
    },
    icon: '',
    opacity: 50,
  }),
  created() {
    const color = this.$options.propsData.inventorySlot.color;
    const icon = this.$options.propsData.inventorySlot.icon;

    this.color.backgroundColor = this.convertHex((color == null) ? '#3F51B5' : color);
    this.icon = (icon == null) ? 'build' : icon;
  },
  methods: {
    convertHex(color) {
      const color1 = color.replace('#', '');
      const r = parseInt(color1.substring(0, 2), 16);
      const g = parseInt(color1.substring(2, 4), 16);
      const b = parseInt(color1.substring(4, 6), 16);
      const result = `rgba(${r},${g},${b},${this.opacity / 100})`;
      return result;
    },
    clicked() {
      this.$emit('inventory-clicked', this.inventorySlot);
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "~vue-material/dist/theme/engine";
  @import "~vue-material/dist/theme/all";

  @include md-register-theme("purple-card", (
    primary: md-get-palette-color(purple, 500)
  ));
  .inventory-container {
    margin:5px;
    border: white 1px solid;
    position:relative;
    box-shadow: 3px 3px black;
  }
  .inventory-container:after {
    content: '';
    display: block;
    margin-top: 100%;
  }
  .content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .body {
    height:100%;
    padding:5px;
    text-align:center;
    position:relative;
    display:flex;
    flex-direction:column;
  }
  .body:before {
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em; /* Adjusts for spacing */
  }

  .title {
    text-align:center;
    border-bottom: 1px solid white;
    position:relative;
    font-family: "Helvetica";
    font-size:11px;
    line-height:1px;
    padding:10px;
    background-color: rgba(0, 0, 0, .5);
    color: white;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  i {
    position:relative;
    opacity: 1;
    text-shadow: 2px 1px black;
  }

  .hvr-grow:hover,
  .hvr-grow:focus {
    transform: scale(1.05);
  }
  .hvr-grow:active {
    transform: scale(1.00);
  }
</style>
