<template>
  <div v-if='expanded'>
    <v-text-field label="Search" v-model="searchTerm"></v-text-field>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="name in names" :key="name">
          <v-list-item-content>
            <v-list-item-title>{{ name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'ListComponent',
  props: {
    expanded: Boolean,
  },
  setup(props, { emit }) {
  const searchTerm = ref('')
  const names = ref(['Track 1', 'Track 2', 'Track 3'])

  const toggleExpand = () => {
    emit('toggle-expand')
  }

  return {
    searchTerm,
    names,
    toggleExpand,
  }
},
})
</script>
