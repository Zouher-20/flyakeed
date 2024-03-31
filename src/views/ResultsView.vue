<script setup>
import { useAmadeus } from '@/stores/amadeus';
import { onMounted } from 'vue';

const store = useAmadeus();

onMounted(() => {
    // 
    store.getLocations('ter')
});
</script>

<template>
    results page
</template>

