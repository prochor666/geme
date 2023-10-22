const prefix = 'geme';

export const asleep = async (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

export const cloneData = (data) => {
    return JSON.parse(JSON.stringify(data));
};

export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) {
        return '0 B';
    }

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
};

export const decodePath = (path) => {
    return path.split('|').join('/');
};

export const encodePath = (path) => {
    return path.split('/').join('|');
};

export const getRndKey = () => {
    return (Math.random() + 1).toString(36).substring(7);
};

export const fileExtension = (filename) => {
    const ext = /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : [''];
    return ext[0];
};

export const getRandomColor = () => {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

export const mergeObject = (origin, updater) => {
    return { ...origin, ...updater };
};

export const keeper = (key, value = undefined) => {
    const safeKey = `${prefix}_${key}`;
    const storageEngine = localStorage;

    if (typeof value === 'undefined') {
        return JSON.parse(storageEngine.getItem(safeKey));
    }

    return storageEngine.setItem(safeKey, JSON.stringify(value));
};

export const keeperRemove = (key, valueIf = undefined) => {
    const safeKey = `${prefix}_${key}`;
    const storageEngine = localStorage;

    if (
        typeof valueIf === 'undefined' ||
        valueIf === storageEngine.getItem(safeKey)
    ) {
        return storageEngine.removeItem(safeKey);
    }
};

const utils = () => {
    return {
        sleep: sleep,
        asleep: asleep,
        cloneData: cloneData,
        formatBytes: formatBytes,
        decodePath: decodePath,
        encodePath: encodePath,
        getRndKey: getRndKey,
        fileExtension: fileExtension,
        getRandomColor: getRandomColor,
        mergeObject: mergeObject,
        keeper: keeper,
    };
};

export default utils;
