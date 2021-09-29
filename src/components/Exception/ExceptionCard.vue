<template>
    <div class="p-4 flex relative space-x-3">
        <div>
            <div class="bg-red-700 w-2 h-full rounded-xl block" v-if="status === 'open'"></div>

            <div class="bg-green-700 w-2 h-full rounded-xl block" v-if="status === 'fixed'"></div>

            <div class="bg-blue-700 w-2 h-full rounded-xl block" v-if="status === 'read'"></div>
        </div>

        <div>
            <h2 class="break-all">{{ `${title.substr(0, 100)}...` }}</h2>
            <p class="text-gray-500 text-sm">{{ date }} | {{ status }}</p>
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
        date: {
            type: String,
            required: false,
        },
    },
}
</script>

<style scoped>

</style>