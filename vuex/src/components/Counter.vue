<template>
    <p :style="{ color: $store.state.colorCode }">{{ $store.state.counter }}</p>
</template>