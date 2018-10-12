<template>
  <div class="category">
    <CollapsiblePanel border-color='red' title="Level I Scavenger Items">
      <template slot="header">
        <div class="resetHeader"/>
        <div class="header">
        <div class="info md-layout">
          <div class="title md-layout-item md-large-size-20 md-medium-size-100">
            {{category.title}}
          </div>
          <div class="info-graph md-layout md-layout-item md-large-size-80 md-medium-size-100">
            <div class="info-graph-bar md-layout-item md-large-size-85">
              <div ref='devBar' :style="infoGraphProgress" class='info-graph-progress'></div>
            </div>
            <div class="info-graph-number md-layout-item md-large-size-10">
              <sup>{{acceptedTasks}}</sup>/<sub>{{tasks.length}}</sub>
            </div>
          </div>
        </div>
        </div>
      </template>
      <template slot="body">
        <div class="body-slot">
          <div class="md-layout">
            <div v-for="(task, index) in tasks" v-bind:key="index"
                 class="md-layout-item md-large-size-50 md-medium-size-100">
              <Task v-bind:task="task"
                    v-on:phase-change="phaseChange"
                    v-on:delete-task="deleteTask"
              @change="saveTasks"/>
            </div>
            <div class="md-layout-item md-large-size-100">
              <NewTask v-on:new-task = 'newTask'/>
            </div >
          </div>
        </div>
      </template>
    </CollapsiblePanel>
  </div>
</template>
<script>
import CollapsiblePanel from './CollapsiblePanel';
import NewTask from './NewTask';
import Task from './Task';

export default {
  name: 'Category',
  props: ['category'],
  components: {
    CollapsiblePanel,
    NewTask,
    Task,
  },
  data: () => ({
    parsedTitle: null,
    acceptedTasks: 0,
    tasks: [
      {
        description: 'Sample task',
        points: 1,
        phase: 0,
      },
    ],
  }),
  created() {
    this.calculateAcceptedTasks();
    this.parsedTitle = this.category.title.split(' ').join('_').toLocaleLowerCase();
  },
  mounted() {
    if (localStorage.getItem(`${this.$package}.${this.parsedTitle}`)) {
      try {
        this.tasks = JSON.parse(localStorage.getItem(`${this.$package}.${this.parsedTitle}`));
      } catch (e) {
        localStorage.removeItem(`${this.$package}.${this.parsedTitle}`);
      }
    } else {
      this.saveTasks();
    }
    this.calculateAcceptedTasks();
  },
  computed: {
    infoGraphProgress() {
      return {
        width: `${100 * (this.acceptedTasks / this.tasks.length)}%`,
      };
    },
  },
  methods: {
    phaseChange(task, newPhase) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks[taskIndex].phase = newPhase;
      this.calculateAcceptedTasks();
      this.saveTasks();
    },
    newTask(task) {
      this.tasks.push({
        description: task.description,
        points: this.category.points,
        phase: task.phase,
      });
      this.saveTasks();
    },
    deleteTask(task) {
      const taskIndex = this.tasks.indexOf(task);
      this.tasks.splice(taskIndex, 1);
      this.calculateAcceptedTasks();
      this.saveTasks();
    },
    saveTasks() {
      const parsedTasks = JSON.stringify(this.tasks);
      localStorage.setItem(`${this.$package}.${this.parsedTitle}`, parsedTasks);
    },
    calculateAcceptedTasks() {
      this.acceptedTasks = this.tasks.reduce((n, val) => n + (val.phase === 3), 0);
    },
  },
};
</script>
<style lang="scss" scoped>
  @import '../../assets/sass/base/_fonts.scss';
  div {
    color:white;
  }
  .category {
    margin-bottom:15px;
    border: 2px solid white;
  }
  .header {
    padding:10px;
    background-color: rgba(0, 0, 0, 0.2);
    /*border-bottom: 1px solid white;*/
  }
  .title{
    font-family: $burbank-big;
    font-size:2em;
    text-transform: uppercase;
  }
  .info-icon {
    padding:5px;
    text-align:center;
    position:relative;
    display:flex;
    flex-direction:column;
  }
  .info-icon:before {
    display: inline-block;
    vertical-align: middle;
    margin-right: -0.25em; /* Adjusts for spacing */
  }
  i {
    position:relative;
    opacity: 1;
    text-shadow: 2px 1px black;
    font-size:40px!important;
  }
  .info-graph {
    display:flex;
    align-items:center;
  }
  .info-graph-bar {
    border: 3px solid white;
    height: 20px;
    padding:0px;
  }
  .info-graph-progress {
    height:100%;
    background-color: rgba(44, 121, 51, 0.8) !important;
    width:70%;
  }
  .info-graph-number{
    font-family:$burbank-big;
    font-weight:bold;
    text-align:center;
    font-size: 1em;
  }
  sup {vertical-align: super; }
  sub { vertical-align: sub; }
</style>
