<template>
  <div class="newTask hvr-grow">
    <div class="md-layout">
      <div class="md-layout-item md-large-size-100 md-alignment-center-center"
           @click="showDialog = true">
        <div class="info-icon">
          <md-icon class="md-size-1x">add_circle</md-icon>
        </div>
      </div>
    </div>
    <md-dialog :md-active.sync="showDialog" style = "padding:10px;">
      <div class="modal-content" style="padding:5px;border:1px solid white">
      <md-dialog-title> Create new Task</md-dialog-title>
      <form class="md-layout md-small-size-100">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-100 md-small-size-100">
              <md-field>
                <label>Task Description</label>
                <md-input name="task-description" v-model="form.description"/>
              </md-field>
            </div>
            <div class="md-layout-item md-size-100 md-small-size-100">
              <md-field>
                <label>Task Phase</label>
                <md-select v-model="form.phase">
                  <md-option value=0 >To Do</md-option>
                  <md-option value=1 >Found</md-option>
                  <md-option value=2 >Submitted</md-option>
                  <md-option value=3 >Accepted</md-option>
                </md-select>
              </md-field>
            </div>
          </div>
      </form>
      <md-dialog-actions>
        <button class='md-button' v-on:click="sendForm()">Create</button>
        <button class='md-button' v-on:click="closeForm">Cancel</button>
      </md-dialog-actions>
      </div>
    </md-dialog>
  </div>
</template>
<script>
export default {
  name: 'NewTask',
  props: [],
  data: () => ({
    form: {
      description: null,
      phase: null,
    },
    showDialog: false,
  }),
  components: {
  },
  methods: {
    blankForm() {
      this.form.description = null;
      this.form.phase = null;
    },
    sendForm() {
      if (this.form.phase != null && this.form.description != null) {
        const phase = parseFloat(this.form.phase);
        const description = this.form.description;
        this.$emit('new-task', {
          description,
          phase,
        });
        this.showDialog = false;
        this.blankForm();
      }
    },
    closeForm() {
      this.showDialog = false;
      this.blankForm();
    },
  },
};
</script>
<style lang="scss" scoped>
  .newTask {
    border: 1px solid white;
    width:45px;
    margin: 15px auto 2px;
    /*padding:5px;*/
    background-color:rgba(0,0,255, .05);
    height: calc(100% - 14px);
  }
</style>
