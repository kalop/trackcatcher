<template>
  <div id="barBox">
    <v-switch
      v-model="checked_options"
      inset
      :label="`Fit bounds track`"
      @change="check($event)"
      :value="fit_bounds_selected"
    ></v-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fit_bounds_selected: "fit_bounds_selected",
      checked_options: []
    };
  },
  methods: {
    check: function() {
      console.log(this.checked_options);
      this.$emit("optionsChecked", this.checked_options);
    }
  }
};
</script>
<style scoped>
#barBox {
  background-color: yellow;
  height: 100%;
  padding: 0.5em;
}
</style>
