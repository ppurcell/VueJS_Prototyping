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
          <div class="description">{{task.description}}</div>
          <div class="progress-indicator">
            <div class="md-layout md-alignment-center">
              <div v-for="(phase, index) in phases" v-bind:key="index"
                   ref="list"
                   class="md-layout-item md-large-size-20 md-small-size-40 hvr-grow">
                <button class="progress-label"
                        v-on:click='onClick(index)'
                        v-bind:class="[{active: isActive(phase)},
                         ('progress-label_' + phase.class) ]">
                  {{phase.name}}
                </button>
              </div>
            </div>
          </div>
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

export default {
  name: 'Task',
  props: ['task'],
  data: () => ({
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
  components: {
    CollapsiblePanel,
  },
  methods: {
    onClick(index) {
      if (this.task.phase !== index) {
        for (let i = 0; i < this.phases.length; i += 1) {
          this.phases[i].active = false;
        }
        this.phases[index].active = true;
        this.$emit('phase-change', this.task, index);
      }
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
  .description {
    text-align:center;
    margin-bottom:5px;
  }
  .progress-label {
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
  .progress-label.active {
    border: solid 1px white;
    color:white;
    font-weight:bold;
    &.progress-label_accepted {
      background-color: rgba(255, 255, 0, 0.51);
    }
    &.progress-label_todo {
      background-color: rgba(120, 120, 120, .5);
    }
    &.progress-label_found {
      background-color: rgba(52, 135, 59, 0.51);
    }
  &.progress-label_submitted {
    background-color: rgba(0, 74, 255, 0.51);
    }
  }

  .md-layout-item{
    border:none;
  }
  .info-icon {
    padding:5px;
    text-align:center;
    position:relative;
    display:flex;
    flex-direction:row;
    height:100%;
  }
  .info-icon:before {
    display: inline-block;
    vertical-align: middle;
    margin-right: -0.25em; /* Adjusts for spacing */
  }
  .md-icon.disabled {
    color:gray;
  }

  .hvr-grow:hover,
  .hvr-grow:focus {
    transform: scale(1.05);
  }
  .hvr-grow:active {
    transform: scale(1.00);
  }
</style>
