<template>
    <Teleport v-if="data.length > 0" to="head">
        <component
            :is="tag"
            v-for="(tag, index) in nodes"
            :key="index"
        ></component>
    </Teleport>
</template>

<script setup>
import { h, Teleport } from 'vue';

defineExpose({
    name: 'Headify',
});

const props = defineProps({
    data: {
        type: Object,
        default: () => {
            return {};
        },
    },
});

const data = props.data;
const nodes = [];

for (let i in data) {
    nodes.push(h(data[i].tag, data[i].params));
}
</script>
