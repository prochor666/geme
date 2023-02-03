import { fileExtension } from '../composables/utils';

export const dropFileFromEditorInput = async (gemeData) => {
    const image = document.querySelector('#im-file').files[0];

    if (
        ['png', 'jpg', 'jpeg', 'gif'].includes(
            fileExtension(image.name).toLowerCase(),
        )
    ) {
        // Setup load end event
        const reader = new FileReader();
        reader.onloadend = () => {
            // Convert to Base64 string
            const base64 = reader.result;
            console.log('Loaded image from btn input', image.name, image.type, image);
            updateEditorImage(gemeData, base64);
        };
        reader.readAsDataURL(image);
    }
};

export const updateEditorImage = (gemeData, imageRaw) => {
    const item = {
        align: 'text-center',
        value: '',
        uri: imageRaw,
        x: 0,
        y: 0,
        w: 100,
        h: 100,
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

    gemeData.parts.push(item);
};

export const useAddImage = {
    dropFileFromEditorInput: dropFileFromEditorInput,
    updateEditorImage: updateEditorImage,
};

export default useAddImage;
