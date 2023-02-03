<template>
    <div :key="ckey">
        <div
            v-if="overlay === true && inline === false"
            class="fixed inset-0 opacity-90 bg-black dark:opacity-7 z-9000 w-screen h-screen pointer-events-none"
        ></div>

        <div :class="`${mainClass} flex place-content-center`">
            <div :class="`${subClass} ${color}`">
                <svg
                    v-if="type === 'complex'"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                    xml:space="preserve"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                    stroke="none"
                    :class="`mx-auto w-16 h-16 mx-auto ${color}`"
                >
                    <path
                        d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z"
                    >
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            :dur="speedFull"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path
                        d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z"
                    >
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            :dur="speedHalf"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite"
                        />
                    </path>
                    <path
                        d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z"
                        :class="colorAccent"
                    >
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            :dur="speedFull"
                            from="0 50 50"
                            to="-360 50 50"
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>

                <svg
                    v-if="type === 'clock'"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                    xml:space="preserve"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="none"
                    stroke="currentColor"
                    :class="`mx-auto w-16 h-16 mx-auto ${color}`"
                >
                    <circle
                        stroke-width="4"
                        stroke-miterlimit="10"
                        cx="50"
                        cy="50"
                        r="48"
                    />
                    <line
                        stroke-linecap="round"
                        stroke-width="4"
                        stroke-miterlimit="10"
                        x1="50"
                        y1="50"
                        x2="85"
                        y2="50.5"
                        :class="colorAccent"
                    >
                        <animateTransform
                            attributeName="transform"
                            :dur="speedHalf"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite"
                        />
                    </line>
                    <line
                        stroke-linecap="round"
                        stroke-width="4"
                        stroke-miterlimit="10"
                        x1="50"
                        y1="50"
                        x2="49.5"
                        y2="74"
                    >
                        <animateTransform
                            attributeName="transform"
                            :dur="speedFull"
                            type="rotate"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite"
                        />
                    </line>
                </svg>

                <svg
                    v-if="type === 'dots'"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                    xml:space="preserve"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                    stroke="none"
                    :class="`mx-auto w-16 h-16 mx-auto ${color}`"
                >
                    <circle cx="10" cy="50" r="10">
                        <animate
                            attributeName="opacity"
                            :dur="speedFull"
                            values="0;1;0"
                            repeatCount="indefinite"
                            :begin="beginOffset(speedFull, 1)"
                        />
                    </circle>
                    <circle cx="50" cy="50" r="10" :class="colorAccent">
                        <animate
                            attributeName="opacity"
                            :dur="speedFull"
                            values="0;1;0"
                            repeatCount="indefinite"
                            :begin="beginOffset(speedFull, 2)"
                        />
                    </circle>
                    <circle cx="90" cy="50" r="10">
                        <animate
                            attributeName="opacity"
                            :dur="speedFull"
                            values="0;1;0"
                            repeatCount="indefinite"
                            :begin="beginOffset(speedFull, 3)"
                        />
                    </circle>
                </svg>

                <svg
                    v-if="type === 'circle'"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                    xml:space="preserve"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                    stroke="none"
                    :class="`mx-auto w-16 h-16 mx-auto ${color}`"
                >
                    <path
                        d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"
                    >
                        <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            type="rotate"
                            :dur="speedFull"
                            from="0 50 50"
                            to="360 50 50"
                            repeatCount="indefinite"
                        />
                    </path>
                </svg>

                <svg
                    v-if="type === 'bars'"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 100 100"
                    enable-background="new 0 0 100 100"
                    xml:space="preserve"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    fill="currentColor"
                    stroke="none"
                    :class="`mx-auto w-16 h-16 mx-auto ${color}`"
                >
                    <rect
                        x="8"
                        width="5"
                        height="100"
                        transform="translate(0) rotate(180 8 50)"
                    >
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            :dur="speedFull"
                            values="30; 100; 30"
                            repeatCount="indefinite"
                        />
                    </rect>
                    <rect
                        x="25"
                        width="5"
                        height="100"
                        transform="translate(0) rotate(180 25 50)"
                        :class="colorAccent"
                    >
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            :dur="speedFull"
                            values="30; 100; 30"
                            repeatCount="indefinite"
                            :begin="beginOffset(speedFull, 1)"
                        />
                    </rect>
                    <rect
                        x="43"
                        width="5"
                        height="100"
                        transform="translate(0) rotate(180 43 50)"
                    >
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            :dur="speedFull"
                            values="30; 100; 30"
                            repeatCount="indefinite"
                            :begin="beginOffset(speedFull, 3)"
                        />
                    </rect>
                    <rect
                        x="63"
                        width="5"
                        height="100"
                        transform="translate(0) rotate(180 61 50)"
                        :class="colorAccent"
                    >
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            :dur="speedFull"
                            values="30; 100; 30"
                            repeatCount="indefinite"
                            :begin="beginOffset(speedFull, 5)"
                        />
                    </rect>
                    <rect
                        x="83"
                        width="5"
                        height="100"
                        transform="translate(0) rotate(180 79 50)"
                    >
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            :dur="speedFull"
                            values="30; 100; 30"
                            repeatCount="indefinite"
                            :begin="beginOffset(speedFull, 7)"
                        />
                    </rect>
                    <rect
                        x="103"
                        width="5"
                        height="100"
                        transform="translate(0) rotate(180 97 50)"
                        :class="colorAccent"
                    >
                        <animate
                            attributeName="height"
                            attributeType="XML"
                            :dur="speedFull"
                            values="30; 100; 30"
                            repeatCount="indefinite"
                            :begin="beginOffset(speedFull, 9)"
                        />
                    </rect>
                </svg>

                <div
                    v-if="text.length > 0 || dots === true"
                    :class="`text-sm mx-auto mt-2 font-medium font-mono select-none ${animation} ${textColor}`"
                >
                    <span
                        v-if="dots === true && dotDual === true"
                        :class="[
                            dotReverse === true ? '' : '-scale-x-100 transform',
                            'inline-block mr-1',
                        ]"
                        >{{ dotsStr }}</span
                    >
                    <span v-if="text.length > 0" v-html="text"></span>
                    <span
                        v-if="dots === true"
                        :class="[
                            dotReverse === true ? '-scale-x-100 transform' : '',
                            'inline-block ml-1',
                        ]"
                        >{{ dotsStr }}</span
                    >
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, toRef } from 'vue';

defineExpose({
    name: 'spinner',
});

const props = defineProps({
    type: {
        type: String,
        default: 'dots',
    },
    color: {
        type: String,
        default: 'text-gray-600',
    },
    color2: {
        type: String,
        default: 'none',
    },
    textColor: {
        type: String,
        default: 'text-gray-600',
    },
    inline: {
        type: Boolean,
        default: false,
    },
    overlay: {
        type: Boolean,
        default: true,
    },
    pulse: {
        type: Boolean,
        default: true,
    },
    speed: {
        type: Number,
        default: 1000,
    },
    dots: {
        type: Boolean,
        default: true,
    },
    dotChar: {
        type: String,
        default: '.',
    },
    dotDual: {
        type: Boolean,
        default: false,
    },
    dotReverse: {
        type: Boolean,
        default: false,
    },
    text: {
        type: String,
        default: '',
    },
    ckey: {
        type: String,
        default: `v-${Math.random()}`,
    },
});

const type = toRef(props, 'type'),
    color = toRef(props, 'color'),
    color2 = toRef(props, 'color2'),
    inline = toRef(props, 'inline'),
    overlay = toRef(props, 'overlay'),
    pulse = toRef(props, 'pulse'),
    text = toRef(props, 'text'),
    speed = toRef(props, 'speed'),
    dots = toRef(props, 'dots'),
    dotChar = toRef(props, 'dotChar'),
    dotDual = toRef(props, 'dotDual'),
    dotReverse = toRef(props, 'dotReverse'),
    textColor = toRef(props, 'textColor'),
    speedFull = `${parseInt(speed.value)}ms`,
    speedHalf = `${parseInt(speed.value / 2)}ms`,
    ckey = toRef(props, 'ckey'),
    dotsStr = ref('');

let dotsFill = 0,
    dotsFillPattern = '\xa0'.repeat(dotChar.value.length),
    dotsMax = 3,
    animation = pulse.value ? 'animate-pulse' : '';

dotsStr.value = dotsStr.value.padEnd(
    dotsMax * dotChar.value.length,
    dotsFillPattern,
);

let colorAccent = color.value;

if (color2.value !== 'none') {
    colorAccent = color2.value;
}

const mainClass = ref('z-[9001] fixed inset-0 w-full h-hull');
const subClass = ref('z-[9002] self-center text-center');

if (inline.value === true) {
    mainClass.value = 'z-0 static inline-block w-full h-full';
    subClass.value = 'z-0 self-center text-center';
}

const beginOffset = (s, o) => {
    const x = parseInt(parseInt(s) / 10) * o;
    return `${x}ms`;
};

setInterval(() => {
    dotsFill = dotsFill === dotsMax ? 0 : dotsFill + 1;
    dotsStr.value = dotChar.value.repeat(dotsFill);
    dotsStr.value = dotsStr.value.padEnd(
        dotsMax * dotChar.value.length,
        dotsFillPattern,
    );
}, parseInt(speed.value / 4));
</script>

<style></style>
