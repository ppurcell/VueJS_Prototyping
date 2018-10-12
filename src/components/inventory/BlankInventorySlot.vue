<template>
  <div class="md-layout-item md-xsmall-size-50 md-small-size-50 md-medium-size-33 md-large-size-20">
    <div class="inventory-container">
      <div class="content">
        <div class="title">
        </div>
        <div class="body">
          <!--<md-icon class="md-size-3x">add_circle_outline</md-icon>-->
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

  @include md-register-theme("purple-card", (
    primary: md-get-palette-color(purple, 500)
  ));
  .inventory-container {
    margin:5px;
    border: rgba(255, 255, 255, 0.11) 1px solid;
    position:relative;
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
    /*background-color: rgba(255, 255, 255, .05);*/
    background-image: url('../../assets/squares.png');
    opacity: .2;

    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .title {
    text-align:center;
    /*border:1px solid black;*/
    position:relative;
    font-family: "Courier";
    font-size:12px;
    font-weight:bold;
  }
  .body {
    height:100%;
    padding:5px;
    /*margin: 5px;*/
    /*border: 1px red solid;*/
    text-align:center;
    /*vertical-align:middle;*/
    /*background-color: rgba(255, 255, 255, 0.1);*/
  }
  i {
    /*top:50%;*/
    position:relative;
    opacity: .95;
  }


  @import "~vue-material/dist/theme/all";
</style>
