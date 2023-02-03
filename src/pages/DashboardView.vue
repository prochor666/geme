<!-- eslint-disable vue/no-v-html -->
<template>
    <Headify :data="headMeta" />

    <div class="bg-white min-w-[1024px]">
        <main class="w-full mx-auto max-w-4xl px-2 sm:px-4 pt-20">
            <h1 class="text-2xl font-medium text-neutral-600 py-2 text-center">
                Geme me
            </h1>

            <div class="border border-neutral-600 rounded-t-md">
                <div class="p-0">
                    <div class="bg-gray-50 rounded-t-md">
                        <div class="block p-0">
                            <div
                                class="flex justify-start p-4 space-x-2"
                                @mouseenter="onDragEnd($event)"
                                @mouseup="onDragEnd($event)"
                                @mousedown="onDragEnd($event)"
                            >
                                <label
                                    for="text-edit"
                                    class="sr-only block text-sm font-medium text-gray-700 select-none"
                                >
                                    Editor
                                </label>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.texts[gemeData.selected]
                                            .align === 'text-left'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.texts[
                                            gemeData.selected
                                        ].align = 'text-left'
                                    "
                                >
                                    <MdiFormatAlignLeft class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.texts[gemeData.selected]
                                            .align === 'text-center'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.texts[
                                            gemeData.selected
                                        ].align = 'text-center'
                                    "
                                >
                                    <MdiFormatAlignCenter class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.texts[gemeData.selected]
                                            .align === 'text-right'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.texts[
                                            gemeData.selected
                                        ].align = 'text-right'
                                    "
                                >
                                    <MdiFormatAlignRight class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.texts[gemeData.selected]
                                            .align === 'text-justify'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.texts[
                                            gemeData.selected
                                        ].align = 'text-justify'
                                    "
                                >
                                    <MdiFormatAlignJustify class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.texts[gemeData.selected]
                                            .fontWeight === 'font-black'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.texts[
                                            gemeData.selected
                                        ].fontWeight =
                                            gemeData.texts[gemeData.selected]
                                                .fontWeight === 'font-black'
                                                ? ''
                                                : 'font-black'
                                    "
                                >
                                    <MdiFormatBold class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.texts[gemeData.selected]
                                            .fontItalic === 'italic'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.texts[
                                            gemeData.selected
                                        ].fontItalic =
                                            gemeData.texts[gemeData.selected]
                                                .fontItalic === 'italic'
                                                ? 'not-italic'
                                                : 'italic'
                                    "
                                >
                                    <MdiFormatItalic class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.texts[gemeData.selected]
                                            .textStroke === 'line-through'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.texts[
                                            gemeData.selected
                                        ].textStroke =
                                            gemeData.texts[gemeData.selected]
                                                .textStroke === 'line-through'
                                                ? ''
                                                : 'line-through'
                                    "
                                >
                                    <MdiFormatStrikethrough class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.texts[gemeData.selected]
                                            .textUnderline === 'underline'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.texts[
                                            gemeData.selected
                                        ].textUnderline =
                                            gemeData.texts[gemeData.selected]
                                                .textUnderline === 'underline'
                                                ? ''
                                                : 'underline'
                                    "
                                >
                                    <MdiFormatUnderline class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-0 text-md text-gray-400 hover:text-gray-700 hover:bg-gray-200"
                                >
                                    <div
                                        ref="colorWidget"
                                        class="p-1 flex-none inline-block text-sm relative"
                                    >
                                        <!-- @click="editor.chain().focus().setColor(editor.getAttributes('textStyle').color || '#000000').run()" -->
                                        <!--  @blur="colorOpen = false" -->
                                        <button
                                            class="flex"
                                            @click="colorOpen = true"
                                        >
                                            <MdiFormatColorText
                                                class="w-6 h-6"
                                            />
                                            <MdiChevronDown
                                                class="w-4 h-6"
                                                :style="`color:${
                                                    gemeData.texts[
                                                        gemeData.selected
                                                    ].color
                                                };`"
                                            />
                                        </button>

                                        <div
                                            :class="
                                                colorOpen === true
                                                    ? 'absolute top-0 left-0'
                                                    : 'hidden'
                                            "
                                        >
                                            <color-picker
                                                v-model:pureColor="pureColor"
                                                v-model:gradientColor="
                                                    defaultGradient
                                                "
                                                picker-type="fk"
                                                use-type="pure"
                                                shape="square"
                                                lang="en"
                                                :is-widget="true"
                                                :disable-alpha="true"
                                                @pure-color-change="
                                                    changeColor(pureColor)
                                                "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div
                                    class="p-1 text-md text-gray-400 hover:text-gray-700 hover:bg-gray-200"
                                >
                                    <div class="flex">
                                        <MdiFormatSize class="w-6 h-6" />
                                        <select
                                            id="font-size"
                                            v-model="
                                                gemeData.texts[
                                                    gemeData.selected
                                                ].fontSize
                                            "
                                            name="font-size"
                                            class="ml-1 block w-full rounded-md border-gray-300 py-0.5 pl-2 pr-10 text-sm text-gray-700"
                                        >
                                            <option
                                                v-for="(size, index) in fonts()
                                                    .size"
                                                :key="size"
                                            >
                                                {{ size }}
                                            </option>
                                        </select>
                                    </div>
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.texts[gemeData.selected]
                                            .textUnderline === 'underline'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                >
                                    <label for="im-file">
                                        <MdiFileImagePlus class="w-6 h-6" />
                                        <input
                                            id="im-file"
                                            type="file"
                                            class="hidden"
                                            accept="image/png,image/jpg,image/jpeg"
                                        />
                                    </label>
                                </div>
                                <div
                                    class="flex p-1 w-36 text-sm text-gray-400 hover:text-gray-700 hover:bg-gray-200"
                                >
                                    <MdiMouse class="w-6 h-6" />
                                    <div class="ml-1 py-1">
                                        Track:
                                        {{
                                            `${
                                                gemeData.texts[
                                                    gemeData.selected
                                                ].x
                                            }x${
                                                gemeData.texts[
                                                    gemeData.selected
                                                ].y
                                            }`
                                        }}
                                    </div>
                                </div>
                                <!-- <div
                                    class="block p-1 w-36 text-md border border-solid border-gray-400"
                                >
                                    Mouse: {{ mousePosition.x }} x
                                    {{ mousePosition.y }}
                                </div>
                                <div
                                    class="block p-1 w-36 text-md border border-solid border-gray-400"
                                >
                                    Editor: {{ getEditorPosition().w }} x
                                    {{ getEditorPosition().h }}
                                </div> -->
                            </div>
                            <textarea
                                id="text-edit"
                                v-model="
                                    gemeData.texts[gemeData.selected].value
                                "
                                placeholder="Meme text goes here"
                                name="text-edit"
                                class="mt-1 block min-w-full border-0 border-y border-solid border-y-gray-200 focus:outline-none focus:ring-0 focus:border-y-neutral-400 sm:text-sm resize-none min-h-[140px] max-h-[140px]"
                            >
                            </textarea>
                        </div>
                    </div>
                </div>

                <div class="py-4 max-w-[1024px] mx-auto text-center">
                    <div id="editor-wrapper" class="mx-auto relative drop-zone">
                        <div
                            v-for="(textObject, gmKey) in gemeData.texts"
                            :id="`target-${gmKey}`"
                            :key="gmKey"
                            class="overflow-hidden py-2 cursor-move select-none absolute inline-block text-transparent bg-clip-text subpixel-antialiased slashed-zero tracking-wider leading-tight p-1"
                            :class="[
                                gemeData.selected === gmKey
                                    ? 'border border-dotted bg-gray-800 z-[1000] cursor-move'
                                    : 'border border-solid border-transparent z-[10]',
                                `font-${gemeData.texts[gmKey].font} ${gemeData.texts[gmKey].fontWeight} ${gemeData.texts[gmKey].fontItalic} ${gemeData.texts[gmKey].textStroke} ${gemeData.texts[gmKey].textUnderline} ${gemeData.texts[gmKey].fontSize} ${gemeData.texts[gmKey].align}`,
                            ]"
                            :style="`color:${
                                gemeData.texts[gmKey].color
                            };border-color:${
                                gemeData.selected === gmKey
                                    ? gemeData.texts[gmKey].color
                                    : 'transparent'
                            };left: ${gemeData.texts[gmKey].x}px; top: ${
                                gemeData.texts[gmKey].y
                            }px;text-shadow: ${
                                gemeData.texts[gmKey].fontStroke
                            }px ${
                                gemeData.texts[gmKey].fontStroke
                            }px 0 #000, -${
                                gemeData.texts[gmKey].fontStroke
                            }px -${
                                gemeData.texts[gmKey].fontStroke
                            }px 0 #000, ${
                                gemeData.texts[gmKey].fontStroke
                            }px -${
                                gemeData.texts[gmKey].fontStroke
                            }px 0 #000, -${
                                gemeData.texts[gmKey].fontStroke
                            }px ${
                                gemeData.texts[gmKey].fontStroke
                            }px 0 #000, 0px ${
                                gemeData.texts[gmKey].fontStroke
                            }px 0 #000, ${
                                gemeData.texts[gmKey].fontStroke
                            }px 0px 0 #000, 0px -${
                                gemeData.texts[gmKey].fontStroke
                            }px 0 #000, -${
                                gemeData.texts[gmKey].fontStroke
                            }px 0px 0 #000;`"
                            @click="gemeData.selected = gmKey"
                            @mousedown="
                                gemeData.selected = gmKey;
                                onDragStart($event);
                            "
                            @mouseup="onDragEnd($event)"
                            @mousemove="onDragging($event)"
                            v-html="nl2br(gemeData.texts[gmKey].value)"
                        ></div>
                        <div
                            class="w-full border-dashed border-t border-b border-neutral-600"
                        >
                            <img
                                id="editor-canvas"
                                :src="gemeData.image"
                                alt="cnv"
                                class="w-full"
                            />
                        </div>
                        <!--
                            <canvas
                            id="editor-canvas"
                            ref="canvas"
                            class="w-full border-dashed border-t border-b border-neutral-600"
                        >
                        </canvas>
                        -->
                    </div>
                </div>
            </div>

            <div class="py-4 max-w-[800px] mx-auto">
                <p
                    class="text-center text-xl text-gray-400 font-black antialiased"
                >
                    ~ OR ~
                </p>
            </div>

            <div class="py-4 max-w-[800px] mx-auto">
                <div class="flex justify-center items-center w-full">
                    <label
                        for="dropzone-file"
                        class="flex flex-col justify-center items-center w-full h-36 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer hover:bg-gray-100 text-gray-400 hover:text-gray-700"
                    >
                        <div
                            class="flex flex-col justify-center items-center pt-5 pb-6"
                        >
                            <MdiCloudUpload class="w-6 h-6" />
                            <p class="mb-2 text-sm">
                                <span class="font-semibold">
                                    Click to upload
                                </span>
                            </p>
                            <p class="text-xs">PNG, JPG or GIF</p>
                        </div>
                        <input
                            id="dropzone-file"
                            type="file"
                            class="hidden"
                            accept="image/png,image/jpg,image/jpeg"
                            @change="dropFileFromInput(gemeData)"
                        />
                    </label>
                </div>

                <!-- <label class="block">
                    <span class="sr-only">Choose image</span>
                    <input
                        type="file"
                        class="block w-full text-sm text-neutral-500 rounded-md border border-solid border-gray-300 file:mr-4 file:py-2 file:px-4 file:text-sm font-medium file:rounded-md file:border-0 file:bg-neutral-200 dark:file:bg-neutral-700 file:hover:bg-neutral-300 dark:file:hover:bg-neutral-800 file:text-gray-700 dark:file:text-gray-200"
                        accept="image/png,image/jpg,image/jpeg"
                        @change="dropFileFromInput(gemeData)"
                    />
                </label> -->
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, reactive, onMounted, watch } from 'vue';
import { asleep } from '../composables/utils';
import {
    dropFileFromInput,
    insertImageFromStorage,
} from '../composables/useImage';
import { fonts } from '../composables/useFonts';
import Headify from '../components/HeadifyComponent.vue';
import { ColorPicker } from 'vue3-colorpicker';
import 'vue3-colorpicker/style.css';
import useClickOutside from '../composables/useClickOutside';

import {
    MdiFormatAlignLeft,
    MdiFormatAlignCenter,
    MdiFormatAlignRight,
    MdiFormatAlignJustify,
    MdiFormatBold,
    MdiFormatItalic,
    MdiFormatStrikethrough,
    MdiFormatUnderline,
    MdiFormatColorText,
    MdiCloudUpload,
    MdiChevronDown,
    MdiFormatSize,
    MdiFileImagePlus,
    MdiMouse,
} from 'materialdesignicons-vue3/icons/';

const defaultGradient = ref(
    'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)',
);
const colorWidget = ref(null);
const colorOpen = ref(false);

const headMeta = [
    {
        tag: 'title',
        params: {
            innerHTML: 'GeMe me pls',
        },
    },
    {
        tag: 'meta',
        params: {
            name: 'description',
            content: 'Just another meme generator for dummies',
        },
    },
];

const mousePosition = reactive({
    x: 0,
    y: 0,
    offsetX: 0,
    offsetY: 0,
});

const mouseTrack = (event, withOffset = false) => {
    const editor = getEditorPosition();
    // mousePosition.x = event.clientX - editor.l;
    // mousePosition.y = event.clientY - editor.t;
    mousePosition.x = event.pageX - editor.l;
    mousePosition.y = event.pageY - editor.t;

    if (withOffset === true) {
        mousePosition.offsetX = event.offsetX;
        mousePosition.offsetY = event.offsetY;
    }
    //console.log('Mouse track', mousePosition);
    return mousePosition;
};

const nl2br = (value) => {
    return value.replaceAll('\n', '<br>').replaceAll(' ', '&nbsp;');
};

const getElementArea = (element) => {
    const result = {
        w: 0,
        h: 0,
        l: 0,
        t: 0,
        r: 0,
        b: 0,
    };

    if (element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
        result.w = element.clientWidth;
        result.h = element.clientHeight;
        result.l = element.offsetLeft - element.scrollLeft;
        result.t = element.offsetTop - element.scrollTop;
        result.r = result.l + result.w;
        result.b = result.t + result.h;
    }

    //console.log('Element dimensions and coords:', element.id, result);
    return result;
};

const getEditorPosition = () => {
    const editorWrapper = document.querySelector('#editor-wrapper');
    return getElementArea(editorWrapper);
};

// Drag & drop
const onDragStart = async (event) => {
    gemeData.dragging = true;
    //event.target.style.cursor = 'move';
    mouseTrack(event, true);
    console.log('Drag start', event.target.id, getElementArea(event.target));
};

const onDragging = (event) => {
    if (gemeData.dragging === true) {
        mouseTrack(event);
        //event.target.style.cursor = 'move';
        adjustElementPosition(event);
    }
};

const onDragEnd = (event) => {
    console.log('drag protocol onDragEnd');
    if (gemeData.dragging === true) {
        gemeData.dragging = false;
        console.log('Released', event.target.id, getElementArea(event.target));
    }
};

const adjustElementPosition = (event) => {
    const editor = getEditorPosition(),
        elementX = mousePosition.x - mousePosition.offsetX,
        elementY = mousePosition.y - mousePosition.offsetY,
        elementW = event.target.clientWidth,
        elementH = event.target.clientHeight;
    let left = elementX,
        top = elementY;

    if (elementX < 0) {
        //console.log('Fixing horizontal left boundary for elementX');
        left = 0;
    }

    if (left > 0 && elementX > editor.w - elementW - 2) {
        //console.log('Fixing horizontal right boundary for elementX');
        left = editor.w - elementW - 2;
    }

    if (elementY < 0) {
        //console.log('Setting vertical top boundary for elementY');
        top = 0;
    }

    if (top > 0 && elementY > editor.h - elementH - 2) {
        //console.log('Setting vertical bottom boundary for elementY');
        top = editor.h - elementH - 2;
    }

    gemeData.texts[gemeData.selected].x = left;
    gemeData.texts[gemeData.selected].y = top;
    event.target.style.left = `${left}px`;
    event.target.style.top = `${top}px`;
    //console.log('Element position', gemeData.dragging, left, top);
};

const changeColor = (pureColor) => {
    console.log('Color changed', pureColor);
    gemeData.texts[gemeData.selected].color = pureColor;
};

const gemeData = reactive({
    image: '',
    selected: 0,
    dragging: false,
    texts: [
        {
            align: 'text-center',
            value: '🚀 Change me',
            x: 10,
            y: 10,
            class: 'bg-gradient-to-r from-neutral-400 to-pink-600',
            color: '#ffAA00',
            font: 'LeagueSpartanBold',
            fontSize: 'text-3xl',
            fontWeight: 'font-normal',
            fontItalic: 'not-italic',
            textUnderline: '',
            fontStroke: 2,
            textStroke: '',
            type: 'text',
        },
        {
            align: 'text-center',
            value: `abcdefghijklmn
opqrstuvwxyz
ABCDEFGHIJKLMN
OPQRSTUVWXYZ
ĚŠČŘŽÝÁÍÉŮÚ`,
            x: 480,
            y: 210,
            class: 'bg-gradient-to-r from-neutral-400 to-pink-600',
            color: '#eb1d4e',
            font: 'LeagueSpartanBold',
            fontSize: 'text-3xl',
            fontWeight: 'font-normal',
            fontItalic: 'not-italic',
            textUnderline: '',
            fontStroke: 2,
            textStroke: '',
            type: 'text',
        },
    ],
});

watch(
    () => gemeData,
    (newValue, oldValue) => {
        console.log('Geme changed', newValue, oldValue);
    },
);

gemeData.image = '/defaults/default.png';

//await asleep(10);

const pureColor = ref(gemeData.texts[gemeData.selected].color);

console.log('Geme: gemeData', gemeData);

useClickOutside(colorWidget, () => {
    colorOpen.value = false;
});

onMounted(async () => {
    await insertImageFromStorage(gemeData.image);
});
</script>
<style lang="scss">
.vc-hue-slider__bar {
    background: -webkit-linear-gradient(
        left,
        red 0%,
        yellow 16.66%,
        lime 33.33%,
        aqua 50%,
        blue 66.66%,
        fuchsia 83.33%,
        red 100%
    );
    background-image: -webkit-linear-gradient(
        left,
        red 0%,
        yellow 16.66%,
        lime 33.33%,
        aqua 50%,
        blue 66.66%,
        fuchsia 83.33%,
        red 100%
    );
    background-position: initial;
    background-size: initial;
    background-repeat: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: initial;
}
</style>
