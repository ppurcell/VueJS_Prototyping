<template>
  <div class="pageControl">
    <div class="md-layout md-gutter md-alignment-center-center">
      <div v-for="(page,index) in pages" :key="index">
        <div  class="title hvr-grow"
             v-bind:class="[{separator: hasSeparator(index)}, {title_active: isActive(index)}]">
          <a :href="page.href">{{page.title}}</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'NewTask',
  props: ['pageIndex'],
  data: () => ({
    index: null,
    pages: [{
      title: 'ROADMAP',
      href: '/#/inventory',
    },
    {
      title: 'SCAV HUNT',
      href: '/#/scavenge',
    },
    ],
  }),
  methods: {
    hasSeparator(index) {
      return index !== (this.pages.length - 1);
    },
    isActive(index) {
      if (this.pageIndex != null && this.pageIndex === index) {
        return true;
      }
      return false;
    },
  },
  create() {
  },
  mounted() {
    this.index = this.$options.propsData.pageIndex;
    // if (localStorage.getItem('index')) {
    // this.index = localStorage.getItem('index');
    // } else {
    localStorage.setItem(`${this.$package}.index`, this.index);
    // }
  },
};
</script>
<style lang="scss" scoped>
  .pageControl{
    color:white;
    margin:auto auto 10px auto ;
  }
  .title {
    text-align:center;
    font-size:1.8em;
    display:inline;
  }
  .title_active {
    font-size: 1.8em;
    font-weight:bold;
  }

  .separator {
    border-right:1px solid white;
    padding-right: 5px;
    margin: 0 5px;
  }
  .hvr-grow:hover,
  .hvr-grow:focus {
    transform: scale(1.10);
  }
  .hvr-grow:active {
    transform: scale(1.00);
  }
  a {
    color:white;
  }
  a:visited {color:white;}
  a:active {color:white;}
  a:focus {color:white;}
</style>
