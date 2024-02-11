<template>
  <div v-if='expanded'>
    <v-text-field label="Search" v-model="searchTerm"></v-text-field>
    <v-list>
      <v-list-item-group>
        <v-list-item v-for="trackItem in filteredTracks" :key="trackItem.id">
          <v-list-item-content>
            <v-card>
              <v-card-title>{{ trackItem.track.features[0].properties.name }}</v-card-title>
              <v-card-text>
                <div>created by {{ trackItem.track.properties.author.name }} at {{ formatDate(trackItem.createdAt) }}</div>
              </v-card-text>
            </v-card>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import tracks from '/Users/emma.cortes/Desktop/Projects/trackcatcher/frontend/mockData/tracks';

export default defineComponent({
  name: 'ListComponent',
  props: {
    expanded: Boolean,
  },
  setup(props, { emit }) {
    const searchTerm = ref('');
    const tracksList = ref(tracks);

    const filteredTracks = computed(() => {
      return tracksList.value.filter(track => {
        return track.name.toLowerCase().includes(searchTerm.value.toLowerCase());
      });
    });

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      return `${day}-${month}-${year}`;
    };

    const toggleExpand = () => {
      emit('toggle-expand');
    }

    return {
      searchTerm,
      tracksList,
      filteredTracks,
      formatDate,
      toggleExpand,
    }
  },
})
</script>
