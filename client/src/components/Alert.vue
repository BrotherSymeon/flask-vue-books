<template>
  <div>
    <b-alert :show="show" variant="success" >{{ message }}</b-alert>
    <br>
  </div>
</template>
<script>
import { BAlert } from 'bootstrap-vue';

export default {
  components: {
    BAlert,
  },
  name: 'alert',
  props: ['message', 'show'],
};
</script>
