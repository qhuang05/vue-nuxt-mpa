<template>
    <li>
        <div class="title">{{data.name}}</div>
        <ul v-if="data.children">
            <MenuItem class="item" v-for="item in data.children" :key="item.path" :data="item"></MenuItem>
        </ul>
    </li>
</template>

<script>
export default {
    props: ['data']
}
</script>

<style>

</style>