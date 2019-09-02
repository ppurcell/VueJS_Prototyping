<template>
  <div class="phase-indicator">
    <div class="md-layout md-alignment-center">
      <div v-for="(phase, index) in phases" v-bind:key="index"
           ref="list"
           class="md-layout-item md-large-size-20 md-small-size-40 hvr-grow">
        <button class="phase-label"
                v-on:click='onClick(index)'
                v-bind:class="[{active: isActive(phase)},
                         ('phase-label_' + phase.class) ]">
          {{phase.name}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PhaseIndicator',
  props: {
    initialIndex: Number,
  },
  data: () => ({
    phaseIndex: 0,
    phases: [
      { name: 'TO DO',
        class: 'todo',
        active: false,
      },
      { name: 'FOUND',
        class: 'found',
        active: false,
      },
      { name: 'SUBMITTED',
        class: 'submitted',
        active: false,
      },
      { name: 'ACCEPTED',
        class: 'accepted',
        active: false,
      },
    ],
  }),
  methods: {
    onClick(index) {
      if (this.phaseIndex !== index) {
        for (let i = 0; i < this.phases.length; i += 1) {
          this.phases[i].active = false;
        }
        this.phases[index].active = true;
        this.phaseIndex = index;
        this.$emit('phase-change', index);
      }
    },
    isActive(phase) {
      if (this.phases.indexOf(phase) !== this.phaseIndex) {
        return '';
      }
      return 'active';
    },
  },
  mounted() {
    // `this` points to the vm instance
    this.phaseIndex = this.initialIndex;
    // console.log(`${this.phaseIndex}`);
  },
};
</script>

<style lang ="scss" scoped>
  .phase-label {
    border: solid 1px gray;
    padding:2px;
    text-align:center;
    font-size: .5em;
    color:gray;
    background-color:rgba(0,0,0,.75);
    box-shadow: 3px 3px black;
    box-sizing:border-box;
    width: calc(100% - 10px);
    display:inline-block;
  }
  .phase-label.active {
    border: solid 1px white;
    color:white;
    font-weight:bold;
  &.phase-label {
     background-color: rgba(255, 255, 0, 0.51);
   }
  &.phase-label_todo {
     background-color: rgba(120, 120, 120, .5);
   }
  &.phase-label_found {
     background-color: rgba(52, 135, 59, 0.51);
   }
  &.phase-label_submitted {
     background-color: rgba(0, 74, 255, 0.51);
   }
  }
</style>
