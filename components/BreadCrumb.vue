<template>
    <div class="panel-nav">
        <i @click="toggleLeft" :class="{'icon-pack-up': !isLeftHidden, 'icon-menu_l': isLeftHidden}"></i>
        <span class="path">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    computed: {
        isLeftHidden() {return this.$store.state.left.isHidden}
    },
    methods: {
        toggleLeft(){
            this.$store.commit('left/toggleLeft', !this.isLeftHidden);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>