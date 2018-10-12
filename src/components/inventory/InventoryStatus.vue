<template>
  <div class="inventory-status">
    <div class="status-panel">
      <hr class="sexy-line"/>
      <div class="top-panel">
        <div class="top-panel_title">Bi-Weekly Vue Projects</div>
      </div>
      <!--<div class="bottom-panel">-->
        <!--<div class="nts">-->
          <!--<div class="nts_icon">-->
            <!--<md-icon class="md-size-1x black">grade</md-icon>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="nts">-->
          <!--<div class="nts_icon">-->
            <!--<md-icon class="md-size-1x black">calendar_today</md-icon>-->
          <!--</div>-->
        <!--</div>-->
        <!--<div class="nts">-->
          <!--<div class="nts_icon">-->
            <!--<md-icon class="md-size-1x black">update</md-icon>-->
          <!--</div>-->

        <!--</div>-->
      <!--</div>-->
    </div>
    <div class="giant_line"/>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
  .inventory-status{
    /*vertical-align:middle;*/
    text-align:center;
    /*margin: auto 0;*/
    /*width:100%;*/
    /*border: 1px solid white;*/
  }
  .status-panel {
    /*margin: auto 0;*/
    /*display:table;*/
    display:inline-block;
    width:450px;
    /*z-index:100;*/
    /*margin-left:100px;*/
    border: 1px solid black;
    /*box-shadow: 1px 1px black;*/
    background: black;
  }
  .top-panel {
    width:100%;
    height:40px;
    /*border: 1px red solid;*/
    /*box-shadow: 1px 1px black;*/
    background-image:
      linear-gradient(
          to right,
          rgba(255, 69,0,.5) 75%,
          rgba(0, 0, 0,.5)
      );
    border-bottom: 1px solid black;
  }
  .top-panel_title {
    color:white;
    font-size:1.8em;
    margin-left:10px;
    font-family:Roboto, sans-serif;
    line-height:40px;
    text-transform: uppercase;
  }
  .bottom-panel {
    width:100%;
    height:40px;
    display:flex;
    background-image:
      linear-gradient(
          to right,
          rgba(0, 37, 109, .5) 75%,
          rgba(0, 0, 0,.5)
      );
  }
  .sexy-line{
    margin-top:0px;
    margin-bottom:1px;
    height: 5px;
    background-color:orangered;
    border: 1px solid orangered;
  }
  .giant_line {
    position:relative;
      width: 100%;
      margin-bottom:20px;
      background-color: red;
      border: 1px solid black;
      height:4px;
      /*box-shadow: 1px 1px black;*/
      //margin-top:-43px;
      z-index: -1;
  }
  .nts {
    width:33.33%;
    height:100%;
    box-shadow: 1px 1px black;
  }
  .nts_icon {
    width:30px;
    height:30px;
    /*border: 1px solid white;*/
    background: rgba(255,255,255,.5);
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
</style>
