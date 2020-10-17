<template>
  <div>
    <!-- <v-row v-for="i in 100" :key="i" no-gutters style="height: 150px;"> -->
    <v-row v-for="i in 100" :key="i" style="height: 9em; width:100%">
      <v-col>
        <v-card class="pa-15" tile>Row {{i}}</v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

