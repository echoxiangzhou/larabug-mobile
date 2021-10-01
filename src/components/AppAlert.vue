<template>
    <div :class="[
            defaultClasses, variantClasses[type],
            ]">
        <div class="mx-1">
            <slot />
        </div>
    </div>
</template>

<script>
const defaultClasses = 'border-l-4 p-4 text-sm my-2';
const variantClasses = {
    info: 'bg-blue-50 border-blue-400 text-blue-700 dark:bg-blue-700 dark:text-blue-300 dark:border-blue-900',
    warning: 'bg-yellow-50 border-yellow-400 text-yellow-700',
    danger: 'bg-red-50 border-red-400 text-red-700',
    success: 'bg-green-50 border-green-400 text-green-700',
};

export default {
    data() {
        return {
            defaultClasses,
            variantClasses,
        };
    },

    props: {
        type: {
            type: String,
            default: 'info'
        }
    }
}
</script>