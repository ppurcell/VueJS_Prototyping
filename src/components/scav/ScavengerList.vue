<template>
  <div class="inventory-wrapper">
    <!--<InventoryStatus/>-->
    <!--<PageControl v-bind:pageIndex="1"/>-->
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
  methods: {},
};
</script>
<style lang="scss" scoped>
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
    margin: auto;
  }
</style>
