<template>
    <div class="flex-col space-y-1">
        <div class="">
            <span class="font-bold">{{ label }}</span>
        </div>

        <div class="flex-1">
            <p class="text-gray-800 dark:text-gray-300">{{ value }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListItem",
    props: {
        label: {
            type: String,
            required: false,
        },
        value: {
            type: String,
            required: false,
        },
    },
}
</script>

<style scoped>

</style>