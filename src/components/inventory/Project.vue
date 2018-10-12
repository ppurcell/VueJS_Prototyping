<template>
  <div class="md-layout-item md-xsmall-size-100">
  <md-card class=" project-slot md-primary" md-theme="purple-card" md-with-hover>
    <md-ripple>
      <md-card-header>
        <div class="md-title">{{project.title}}</div>
        <div class="md-subhead">{{project.subtitle}}</div>
      </md-card-header>

      <md-card-content>
        {{project.description}}
      </md-card-content>
    </md-ripple>
  </md-card>
  </div>
</template>

<script>
export default {
  name: 'Project',
  props: ['project'],
  data: () => ({}),
};
</script>

<style lang="scss" scoped>
  @import "~vue-material/dist/theme/engine";

  @include md-register-theme("purple-card", (
    primary: md-get-palette-color(purple, 500)
  ));

  .project-slot {
    :before {
      content: "";
      display: block;
      margin-top: 100%;
    }
  }
  @import "~vue-material/dist/theme/all";
</style>
