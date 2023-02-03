export const load = () => {
    const _config = {
        name: 'GeMe',
        description: 'Just another meme generator',
        version: '0.2.0',
    };

    return _config;
};

export const useConfig = () => {
    return {
        load: load,
    };
};

export default useConfig;
