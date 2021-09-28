<template>
    <div class="p-4 flex relative space-x-3">
        <div>
            <div class="bg-red-700 w-2 h-full rounded-xl block" v-if="status === 'open'"></div>

            <div class="bg-green-700 w-2 h-full rounded-xl block" v-if="status === 'fixed'"></div>

            <div class="bg-blue-700 w-2 h-full rounded-xl block" v-if="status === 'read'"></div>
        </div>

        <div>
            <h2>{{ title }}</h2>
            <p class="text-gray-500 text-sm">3m ago | {{ status }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ExceptionCard",
    components: {
    },
    props: {
        title: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped>

</style>