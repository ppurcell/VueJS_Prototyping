<template>
  <div class="task">
    <div class="md-layout">
      <div class="md-layout-item md-large-size-10">
        <div class="info-icon">
          <md-icon class="md-size-1x"
                   v-bind:class="{disabled: isDisabledIcon}">{{currentIcon}}</md-icon>
        </div>
      </div>
      <div class="md-layout-item md-large-size-80">
        <div class="task-info">
          <div class="task-description">{{task.description}}</div>
          <PhaseIndicator  v-on:phase-change="phaseChange" :initialIndex = task.phase />
        </div>
      </div>
      <div class="md-layout-item md-large-size-10">
        <div class="info-icon">
          <i class="md-icon md-size-1x" v-on:click="deleteTask(task)" >delete</i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CollapsiblePanel from './CollapsiblePanel';
import PhaseIndicator from './PhaseIndicator';

export default {
  name: 'Task',
  props: ['task'],
  data: () => ({
  }),
  components: {
    CollapsiblePanel,
    PhaseIndicator,
  },
  methods: {
    phaseChange(index) {
      this.$emit('phase-change', this.task, index);
    },
    deleteTask(task) {
      this.$emit('delete-task', task);
    },
    isActive(phase) {
      if (this.phases.indexOf(phase) !== this.task.phase) {
        return '';
      }
      return 'active';
    },
  },
  computed: {
    isDisabledIcon() {
      return this.task.phase !== 3;
    },
    currentIcon() {
      switch (this.task.points) {
        case 1: return 'looks_one';
        case 2: return 'looks_two';
        case 3: return 'looks_3';
        default: return 'error';
      }
    },
  },
};
</script>
<style lang="scss" scoped>
  .task {
    border: 1px solid white;
    margin:2px;
    padding:5px;
    background-color:rgba(0,0,255, .1);
  }
  .task-description {
    text-align:center;
    margin-bottom:5px;
  }
</style>
