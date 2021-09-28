<template>
    <div class="p-4 flex relative space-x-3">
        <div>
            <div class="bg-red-700 w-2 h-full rounded-xl block" v-if="unread > 0"></div>

            <div class="bg-gray-500 w-2 h-full rounded-xl block" v-if="unread === 0"></div>
        </div>

        <div>
            <h2>{{ name }}</h2>
            <p class="text-gray-500 text-sm">{{ unread }} unread | {{ total ? total : 0 }} total</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        name: {
            type: String,
            required: true,
        },
        unread: {
            type: Number,
            required: true,
        },
        total: {
            type: Number,
            required: true,
        },
    },
}
</script>

<style scoped>

</style>