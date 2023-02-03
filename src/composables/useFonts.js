// ADVICE: Fold this method first
export const fonts = () => {
    const src = {
        //transparent: 'transparent',
        family: ['RobotoSlabRegular', 'LeagueSpartanBold', 'LibraSans'],
        size: [
            'text-xl',
            'text-2xl',
            'text-3xl',
            'text-4xl',
            'text-5xl',
            'text-6xl',
            'text-7xl',
            'text-8xl',
            'text-9xl',
        ],
    };
    return src;
};

export const useFonts = {
    fonts: fonts,
};

export default useFonts;
