<template>
    <Toasts />

    <Suspense>
        <template #default>
            <router-view></router-view>
        </template>
        <template #fallback>
            <Spinner
                type="complex"
                :color="`text-blue-600`"
                :color2="`text-lime-600`"
                :text-color="`text-lime-400`"
                :overlay="true"
                :speed="1000"
                :dots="true"
                :dot-char="'*'"
                :dot-dual="true"
                :dot-reverse="true"
                text="Loading"
                :inline="false"
                :pulse="true"
            />
        </template>
    </Suspense>
</template>

<script setup>
import Spinner from './components/SpinnerComponent.vue';
import Toasts from './components/ToastsComponent.vue';
</script>

<style>
#app {
    /* font-family: Avenir, Helvetica, Arial, sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    font-family:
        'Inter var',
        ui-sans-serif,
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        Roboto,
        'Helvetica Neue',
        Arial,
        'Noto Sans',
        sans-serif,
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji';
}

input:autofill {
    filter: none;
    background: none; /* or any other */
}

:-moz-autofill,
:-moz-autofill-preview {
    filter: none;
    background: none;
}

* {
    --scrollbarBG: rgb(255, 255, 255);
    --thumbBG: rgb(160, 160, 160);
}
/*
*.dark,
html.dark * {
    --scrollbarBG: rgb(31, 31, 31);
    --thumbBG: rgb(80, 80, 80);
}
 */
*::-webkit-scrollbar {
    width: 12px;
}
* {
    scrollbar-width: thin;
    scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}

*::-webkit-scrollbar-track {
    background: var(--scrollbarBG);
}

*::-webkit-scrollbar-thumb {
    background-color: var(--thumbBG);
    border-radius: 5px;
    border: 2px solid var(--scrollbarBG);
}

/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-active {
    opacity: 0;
}

.child-view {
    position: absolute;
    width: 100%;
    left: 0;
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
}
</style>
