<template>
  <div class="inventory-details">
    <div class="details-hd">
      <div class="hd-title">
        {{inventoryItem.title}}
      </div>
      <div class="hd-subtitle">
        {{inventoryItem.subtitle}}
      </div>
    </div>
    <div class="details-bd">
      <div class="details-bd-desc" v-html="inventoryItem.description" >
          <span style="white-space: pre-wrap">
                  <!--<hr class="sexy_line separator"/>-->
         {{inventoryItem.description}}
       </span>
      </div>
      <!--<hr class="sexy_line separator"/>-->
      <div class="details-bd-stats">
      </div>
    </div>
    <div class="stats">

    </div>
  </div>
</template>

<script>
export default {
  name: 'InventoryDetails',
  props: ['inventoryItem'],
  data: () => ({}),
  methods: {
    update(inventoryItem) {
      this.inventoryItem = inventoryItem;
    },
  },
};
</script>

<style lang="scss" scoped>
  .inventory-details{
    width: 50%;
    /*margin-top:80px;*/
    padding: 40px;
  }
  .details-hd {
    background-color: rgba(#3F51B5, 0.5);
    color:white;
    text-transform: uppercase;
    padding: 4px;
  }
  .hd-title {
    font-size: 1.5em;
  }
  .hd-subtitle {
    font-size: .75em;
  }
  .details-bd {
    background-color: rgba(#461D2D, .5);
    color:white;
    min-height:100px;
  }
  .details-bd-desc {
    text-align:center;
  }
  .sexy_line {
    width:50%;
    margin:auto;
    margin-top:5px;
    &.separator {
      margin-top: 0px;
      margin-bottom:0px;
    }
  }
</style>
