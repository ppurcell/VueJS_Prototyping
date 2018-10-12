<template>
  <div class="inventory-wrapper">
    <InventoryStatus />
    <PageControl v-bind:pageIndex="0"/>
    <div class="bottom-wrapper">
      <div class="inventory-slots">
        <div class="inventory-title">
          VUE PROJECTS
          <span class="inventory-title-context">[{{ListItems.length * 2}} WEEKS]</span>
        </div>
        <hr class="sexy_line"/>
        <div class="inventory-container">
          <div class="md-layout md-alignment-top-left">
            <InventorySlot
              v-for="item in ListItems"
              v-bind:inventorySlot="item"
              v-on:inventory-clicked="clickerClicked"
              :key="item.title"/>
            <NewInventorySlot/>
            <BlankInventorySlot/>
            <BlankInventorySlot/>
            <!--<BlankInventorySlot/>-->
          </div>
        </div>
      </div>
      <InventoryDetails v-bind:inventoryItem = ListItems[0] ref="inventoryDetails"/>
    </div>
  </div>
</template>
<script>
import InventorySlot from './InventorySlot';
import NewInventorySlot from './NewInventorySlot';
import BlankInventorySlot from './BlankInventorySlot';
import InventoryStatus from './InventoryStatus';
import InventoryDetails from './InventoryDetails';
import PageControl from '../common/PageControl';


export default {
  name: 'Root',
  components: {
    InventorySlot,
    NewInventorySlot,
    BlankInventorySlot,
    InventoryStatus,
    InventoryDetails,
    PageControl,
  },
  data: () => ({
    ListItems: [
      {
        title: 'ROADMAP',
        subtitle: 'Sprint #1',
        description: 'Create a RoadMap that serves as a jumping off point for future weeks' +
        '<hr class="sexy_line" style = "width:50%"/><ul>' +
        '<li>Create Core Project</li>' +
        '<li>Initial GIT Commit</li>' +
        '<li>Familiarization with Vue</li>' +
        '<li>Semantic Framework</li>' +
        '<li>Mock up "NMS" UI</li>' +
        '</ul>',
        color: '#3F51B5',
        icon: 'map',
      },
      {
        title: 'SCAV HUNT',
        subtitle: 'Sprint #2',
        description: 'A small twist on a simple todo style "Hello World" Style Application.',
        color: '#03a9f4',
        icon: 'list',
        disabled: true,
      },
      {
        title: 'CARD GENERATOR',
        subtitle: 'Sprint #3',
        description: 'Duplicate the RoadMap in a different framework.',
        color: '#461D2D',
        icon: 'view_module',
        disabled: true,
      },
      {
        title: 'SOCIAL GEN',
        subtitle: 'Sprint #4',
        description: 'Duplicate the RoadMap in a different framework.',
        color: '#CA4862',
        icon: 'person',
        disabled: true,
      },
      {
        title: 'CODE KATA #1',
        subtitle: 'Sprint #5',
        description: 'Duplicate the RoadMap in a different framework.',
        color: '#461D2D',
        icon: 'looks_one',
        disabled: true,
      },
      {
        title: 'CODE KATA #2',
        subtitle: 'Sprint #6',
        description: 'Duplicate the RoadMap in a different framework.',
        color: '#461D2D',
        icon: 'looks_two',
        disabled: true,
      },
    ],
    notification: ['sound', 'vibrate'],
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
    width: 50%;
    /*margin-top:80px;*/
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
    margin:auto;
    margin-top:5px;
    &.separator {
      margin-top: 0px;
      margin-bottom:0px;
    }
  }
</style>
