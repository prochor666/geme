import { reactive } from 'vue';
export const gemeData = reactive({
    doc: {
        w: 1024,
        h: 768,
    },
    backgroundImage: '',
    selected: 0,
    dragging: false,
    parts: [],
});

export const selected = (config = []) => {
    Object.keys(config).map((key) => {
        if (Object.keys(gemeData.parts[gemeData.selected]).includes(key)) {
            gemeData.parts[gemeData.selected][key] = config[key];
        }
    });
    return gemeData.parts[gemeData.selected];
};

export const addPart = (config) => {
    const part = {
        align: config.textAllign || 'text-center',
        value: config.value || '',
        uri: config.uri || '',
        x: config.x || 0,
        y: config.y || 0,
        w: config.w || 100,
        h: config.h || 50,
        class: 'bg-gradient-to-r from-neutral-400 to-pink-600',
        color: config.color || '#ffAA00',
        borderColor: config.borderColor || '#000000',
        font: config.font || 'LeagueSpartanBold',
        fontSize: config.fontSize || 'text-3xl',
        fontWeight: config.fontWeight || 'font-normal',
        fontItalic: config.fontItalic || 'not-italic',
        textUnderline: config.textUnderline || '',
        fontStroke: config.fontStroke || 2,
        textStroke: config.textStroke || '',
        type: config.type || 'text',
    };
    gemeData.parts.push(part);
};

export const deletePart = (index) => {
    Array.slice(index, 0, gemeData.parts);
};

export const useGemeData = {
    gemeData: gemeData,
    selected: selected,
    addPart: addPart,
    deletePart: deletePart,
};

export default useGemeData;
