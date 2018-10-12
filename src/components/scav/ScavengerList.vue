<template>
  <div class="inventory-wrapper">
    <InventoryStatus/>
    <PageControl v-bind:pageIndex="1"/>
    <div class="bottom-wrapper">
      <div class="inventory-slots">
        <div class="md-layout md-alignment-top-left ">
          <div class="collapse-container md-layout-item md-large-size-100">
            <Category
              v-for = '(category, index) in categories'
              v-bind:key="index" :category = category />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import InventoryStatus from '../inventory/InventoryStatus';
import PageControl from '../common/PageControl';
import Category from './Category';

export default {
  name: 'Root',
  components: {
    InventoryStatus,
    Category,
    PageControl,
  },
  data: () => ({
    categories: [
      {
        title: 'One Point Challenges',
        points: 1,
      },
      {
        title: 'Two Point Challenges',
        points: 2,
      },
      {
        title: 'Three Point Challenges',
        points: 3,
      },
    ],
  }),
  methods: {
    convertHex(color) {
      const color1 = color.replace('#', '');
      const r = parseInt(color1.substring(0, 2), 16);
      const g = parseInt(color1.substring(2, 4), 16);
      const b = parseInt(color1.substring(4, 6), 16);
      const result = `rgba(${r},${g},${b},${this.opacity / 100})`;
      return result;
    },
    clickerClicked(inventoryItem) {
      this.$refs.inventoryDetails.update(inventoryItem);
    },
  },
};
</script>
<style lang="scss" scoped>
  .inventory-container {
    padding: 0 12px;
    border: 1px solid rgba(255, 255, 255, .5);
    -webkit-background-clip: padding-box; /* for Safari */
    background-clip: padding-box; /* for IE9+, Firefox 4+, Opera, Chrome */
    margin: 10px;
  }

  .inventory-wrapper {
    padding-top: 25px;
    width: 100%;
  }
  .bottom-wrapper {
    display:flex;
    flex-direction:row;
  }
  .inventory-slots{
    width: 75%;
    margin-top:80px;
    margin:auto;
  }


  .inventory-title {
    color: white;
    text-align: center;
    font-weight: bold;
    border-bottom: 1px white;
    text-shadow: 2px 2px black;
  }

  .inventory-title-context {
    color: TEAL;
    margin-left: 5px;
  }
  .sexy_line {
    width:50%;
    &.separator {
      margin-top: 0px;
      margin-bottom:0px;
    }
  }
  .collapse-container {
  }
</style>
