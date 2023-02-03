// ADVICE: Fold this method first
export const colors = () => {
    const src = {
        //transparent: 'transparent',
        codes: [
            'transparent',
            'white',
            'black',
            'slate',
            'gray',
            'zinc',
            'neutral',
            'stone',
            'red',
            'orange',
            'amber',
            'yellow',
            'lime',
            'green',
            'emerald',
            'teal',
            'cyan',
            'sky',
            'blue',
            'indigo',
            'violet',
            'purple',
            'fuchsia',
            'pink',
            'rose',
        ],
        simple: ['transparent','white', 'black'],
        steps: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900],
    };
    const result = [];
    for (let c in src.codes) {
        if (src.simple.includes(src.codes[c])) {
            result.push(src.codes[c]);
        } else {
            for (let s in src.steps) {
                result.push(`${src.codes[c]}-${src.steps[s]}`);
            }
        }
    }
    console.log('Codes all ', result);
    return result;
};

export const useColors = {
    colors: colors,
};

export default useColors;
