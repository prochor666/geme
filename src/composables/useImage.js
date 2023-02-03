import { fileExtension } from '../composables/utils';

export const dropFileFromInput = async () => {
    const image = document.querySelector('#dropzone-file').files[0];

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
            console.log('Loaded image from input', image.name, image.type);
            updateSourceImage(base64);
        };
        reader.readAsDataURL(image);
    }
};

export const dropFileFromPath = async (imagePath) => {
    // Get the remote image as a Blob with the fetch API
    fetch(imagePath)
        .then((res) => res.blob())
        .then((blob) => {
            // Read the Blob as DataURL using the FileReader API
            const reader = new FileReader();
            reader.onloadend = () => {
                // Convert to Base64 string
                const base64 = reader.result;
                console.log('Loaded image from URL', imagePath, blob.type);
                updateSourceImage(base64);
            };
            reader.readAsDataURL(blob);
        });
};

export const insertImageFromStorage = async (imagePath) => {
    await dropFileFromPath(imagePath);
};

export const updateSourceImage = (imageRaw) => {
    const canvas = document.querySelector('#editor-canvas');
    canvas.src = imageRaw;
};

export const drawImageToCanvas = (imageRaw) => {
    const wrapper = document.querySelector('#editor-wrapper');
    const baseImageObj = new Image();
    baseImageObj.src = imageRaw;
    baseImageObj.onload = () => {
        let imageWidth = baseImageObj.naturalWidth;
        let imageHeight = baseImageObj.naturalHeight;
        let imageAspect = imageWidth / imageHeight;
        const canvas = document.querySelector('#editor-canvas');
        console.log(
            'Image before conversion',
            imageWidth,
            imageHeight,
            imageAspect,
        );
        canvas.width = 700;
        canvas.height = 400;

        //if (canvas.width > image)

        if (imageWidth > imageHeight) {
            if (imageWidth > canvas.width) {
                imageHeight *= canvas.width / imageWidth;
                imageWidth = canvas.width;
            }
        } else {
            if (imageHeight > canvas.height) {
                imageWidth *= canvas.height / imageHeight;
                imageHeight = canvas.height;
            }
        }

        if (imageWidth >= 700) {
            canvas.classList.add('w-full');
        } else {
            canvas.classList.remove('w-full');
        }

        canvas.width = imageWidth;
        canvas.height = imageHeight;
        wrapper.style.width = imageWidth;
        wrapper.style.height = imageHeight;

        console.log(
            'Image after conversion',
            imageWidth,
            imageHeight,
            imageAspect,
        );
        console.log('Canvas', canvas.width, canvas.height);
        const context = canvas.getContext('2d');
        // Prepare
        context.clearRect(0, 0, imageWidth, imageWidth / imageAspect);
        // Draw
        context.drawImage(
            baseImageObj,
            0,
            0,
            imageWidth,
            imageWidth / imageAspect,
        );
    };
};

export const drawText = (canvasContext, text) => {
    canvasContext.font = text.font || '48px sans-serif';
    const x = text.x || 10,
        y = text.y || 50;
    canvasContext.strokeText(text.content, x, y);
};

export const useImage = {
    dropFileFromInput: dropFileFromInput,
    insertImageFromStorage: insertImageFromStorage,
    drawText: drawText,
};

export default useImage;
