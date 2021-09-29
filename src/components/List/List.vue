<template>
    <div class="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 space-y-3">
        <div v-if="label">
            <h4 class="font-bold text-xl text-red-700">{{ label }}</h4>
        </div>

        <slot />
    </div>
</template>

<script>
export default {
    name: "List",
    props: {
        label: {
            type: String,
            required: false,
        },
    },
}
</script>