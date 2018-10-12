<template>
  <div class="md-layout-item md-xsmall-size-50 md-small-size-50 md-medium-size-33 md-large-size-20">
    <div class="inventory-container hvr-grow">
      <div class="content">
        <div class="md-xsmall-hide title">
          ADD ITEM
        </div>
        <div class="body">
          <md-icon class="md-size-1x">add_circle</md-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InventorySlot',
  props: [''],
  data: () => ({}),
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
    /*background-color: rgba(255, 255, 255, 1);*/
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .title {
    text-align:center;
    /*border:1px solid black;*/
    border-bottom: 1px solid white;
    position:relative;
    font-family: "Helvetica";
    font-size:10px;
    /*font-weight:bold;*/
    line-height:1px;
    padding:6px;
    background-color: rgba(0, 0, 0, .5);
    color: white;
  }
  .body {
    height:100%;
    padding:5px;
    text-align:center;
    background-color: rgba(255, 255, 255, 0.65);
    position:relative;
    display:flex;
    flex-direction:column;
  }
  i {
    /*top:50%;*/
    position:relative;
    opacity: 1;
    text-shadow: 2px 1px black;
  }
  .body:before {
    /*content: '';*/
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    margin-right: -0.25em; /* Adjusts for spacing */
  }

  .hvr-grow:hover,
  .hvr-grow:focus {
    transform: scale(1.05);
  }
  .hvr-grow:active {
    transform: scale(1.00);
  }
</style>
