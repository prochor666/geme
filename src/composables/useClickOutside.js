import { onMounted, onBeforeMount } from 'vue';

export function useClickOutside(target_ref, callback) {
    if (!target_ref) {
        return;
    }

    let listener = (e) => {
        if (
            e.target === target_ref.value ||
            e.composedPath().includes(target_ref.value)
        ) {
            // Detected inside click
            return;
        }

        if (typeof callback === 'function') {
            // Detected outside click
            callback();
        }
    };

    onMounted(() => {
        window.addEventListener('click', listener);
    });

    onBeforeMount(() => {
        window.removeEventListener('click', listener);
    });

    return {
        listener,
    };
}

export default useClickOutside;
