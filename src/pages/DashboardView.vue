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
                                        gemeData.parts[gemeData.selected]
                                            .align === 'text-left'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.parts[
                                            gemeData.selected
                                        ].align = 'text-left'
                                    "
                                >
                                    <MdiFormatAlignLeft class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.parts[gemeData.selected]
                                            .align === 'text-center'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.parts[
                                            gemeData.selected
                                        ].align = 'text-center'
                                    "
                                >
                                    <MdiFormatAlignCenter class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.parts[gemeData.selected]
                                            .align === 'text-right'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.parts[
                                            gemeData.selected
                                        ].align = 'text-right'
                                    "
                                >
                                    <MdiFormatAlignRight class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.parts[gemeData.selected]
                                            .align === 'text-justify'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.parts[
                                            gemeData.selected
                                        ].align = 'text-justify'
                                    "
                                >
                                    <MdiFormatAlignJustify class="w-6 h-6" />
                                </div>
                                <div
                                    class="p-1 text-md hover:text-gray-700 hover:bg-gray-200"
                                    :class="
                                        gemeData.parts[gemeData.selected]
                                            .fontWeight === 'font-black'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.parts[
                                            gemeData.selected
                                        ].fontWeight =
                                            gemeData.parts[gemeData.selected]
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
                                        gemeData.parts[gemeData.selected]
                                            .fontItalic === 'italic'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.parts[
                                            gemeData.selected
                                        ].fontItalic =
                                            gemeData.parts[gemeData.selected]
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
                                        gemeData.parts[gemeData.selected]
                                            .textStroke === 'line-through'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.parts[
                                            gemeData.selected
                                        ].textStroke =
                                            gemeData.parts[gemeData.selected]
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
                                        gemeData.parts[gemeData.selected]
                                            .textUnderline === 'underline'
                                            ? 'text-gray-700'
                                            : 'text-gray-400'
                                    "
                                    @click="
                                        gemeData.parts[
                                            gemeData.selected
                                        ].textUnderline =
                                            gemeData.parts[gemeData.selected]
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
                                                    gemeData.parts[
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
                                                gemeData.parts[
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
                                        gemeData.parts[gemeData.selected]
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
                                                gemeData.parts[
                                                    gemeData.selected
                                                ].x
                                            }x${
                                                gemeData.parts[
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
                                    gemeData.parts[gemeData.selected].value
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
                            v-for="(textObject, gmKey) in gemeData.parts"
                            :id="`target-${gmKey}`"
                            :key="gmKey"
                            class="overflow-hidden py-2 cursor-move select-none absolute inline-block slashed-zero tracking-wider leading-tight p-1"
                            :class="[
                                gemeData.selected === gmKey
                                    ? 'border border-dotted bg-gray-800 z-[1000] cursor-move'
                                    : 'border border-solid border-transparent z-[10]',
                                `font-${gemeData.parts[gmKey].font} ${gemeData.parts[gmKey].fontWeight} ${gemeData.parts[gmKey].fontItalic} ${gemeData.parts[gmKey].textStroke} ${gemeData.parts[gmKey].textUnderline} ${gemeData.parts[gmKey].fontSize} ${gemeData.parts[gmKey].align}`,
                                gemeData.parts[gmKey].type === 'text'
                                    ? 'text-transparent bg-clip-text subpixel-antialiased'
                                    : '',
                            ]"
                            :style="
                                gemeData.parts[gmKey].type === 'text'
                                    ? `color:${
                                          gemeData.parts[gmKey].color
                                      };border-color:${
                                          gemeData.selected === gmKey
                                              ? gemeData.parts[gmKey].color
                                              : 'transparent'
                                      };left: ${
                                          gemeData.parts[gmKey].x
                                      }px; top: ${
                                          gemeData.parts[gmKey].y
                                      }px;text-shadow: ${
                                          gemeData.parts[gmKey].fontStroke
                                      }px ${
                                          gemeData.parts[gmKey].fontStroke
                                      }px 0 #000, -${
                                          gemeData.parts[gmKey].fontStroke
                                      }px -${
                                          gemeData.parts[gmKey].fontStroke
                                      }px 0 #000, ${
                                          gemeData.parts[gmKey].fontStroke
                                      }px -${
                                          gemeData.parts[gmKey].fontStroke
                                      }px 0 #000, -${
                                          gemeData.parts[gmKey].fontStroke
                                      }px ${
                                          gemeData.parts[gmKey].fontStroke
                                      }px 0 #000, 0px ${
                                          gemeData.parts[gmKey].fontStroke
                                      }px 0 #000, ${
                                          gemeData.parts[gmKey].fontStroke
                                      }px 0px 0 #000, 0px -${
                                          gemeData.parts[gmKey].fontStroke
                                      }px 0 #000, -${
                                          gemeData.parts[gmKey].fontStroke
                                      }px 0px 0 #000;`
                                    : `border-color:${
                                          gemeData.selected === gmKey
                                              ? gemeData.parts[gmKey].color
                                              : 'transparent'
                                      };left: ${
                                          gemeData.parts[gmKey].x
                                      }px; top: ${
                                          gemeData.parts[gmKey].y
                                      }px; width: ${
                                          gemeData.parts[gmKey].w
                                      }px; height: ${
                                          gemeData.parts[gmKey].h
                                      }px; background-image: url('${
                                          gemeData.parts[gmKey].uri
                                      }'); background-color: transparent; background-repeat: no-repeat; background-position: center; background-size: ${
                                          gemeData.parts[gmKey].w
                                      }px ${gemeData.parts[gmKey].h}px;`
                            "
                            @click="gemeData.selected = gmKey"
                            @mousemove="onDragging($event)"
                            @mousedown="
                                gemeData.selected = gmKey;
                                onDragStart($event);
                            "
                            @mouseup="onDragEnd($event)"
                            v-html="nl2br(gemeData.parts[gmKey].value)"
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

    gemeData.parts[gemeData.selected].x = left;
    gemeData.parts[gemeData.selected].y = top;
    event.target.style.left = `${left}px`;
    event.target.style.top = `${top}px`;
    //console.log('Element position', gemeData.dragging, left, top);
};

const changeColor = (pureColor) => {
    console.log('Color changed', pureColor);
    gemeData.parts[gemeData.selected].color = pureColor;
};

const gemeData = reactive({
    image: '',
    selected: 0,
    dragging: false,
    parts: [
        {
            align: 'text-center',
            value: '🚀 Change me',
            x: 70,
            y: 70,
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
            value: `Weird
operators
in PHP`,
            x: 700,
            y: 50,
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
        {
            align: 'text-center',
            value: '',
            uri: 'data:image/png;base64,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',
            x: 50,
            y: 200,
            w: 150,
            h: 150,
            class: 'bg-gradient-to-r from-neutral-400 to-pink-600',
            color: '#ffAA00',
            font: 'LeagueSpartanBold',
            fontSize: 'text-3xl',
            fontWeight: 'font-normal',
            fontItalic: 'not-italic',
            textUnderline: '',
            fontStroke: 2,
            textStroke: '',
            type: 'image',
        },
    ],
});

const addImage = () => {
    const item = {
        align: 'text-center',
        value: '',
        uri: '',
        x: 0,
        y: 0,
        w: 50,
        h: 50,
        class: 'bg-gradient-to-r from-neutral-400 to-pink-600',
        color: '#000000',
        font: 'LeagueSpartanBold',
        fontSize: 'text-3xl',
        fontWeight: 'font-normal',
        fontItalic: 'not-italic',
        textUnderline: '',
        fontStroke: 2,
        textStroke: '',
        type: 'image',
    };

    gemeData.push(item);
};

watch(
    () => gemeData,
    (newValue, oldValue) => {
        console.log('Geme changed', newValue, oldValue);
    },
);

const images = () => {
    return gemeData.parts.filter((item) => item.type === 'image');
};

gemeData.image = '/defaults/default.png';

//await asleep(10);

const pureColor = ref(gemeData.parts[gemeData.selected].color);

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
