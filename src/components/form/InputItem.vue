<template>
    <div class="flex-col space-y-1">
        <div>
            <label class="text-lg font-medium text-gray-900 dark:text-white" v-if="label" :for="`input_${name}`">{{ label }}</label>
        </div>

        <input
            v-if="type !== 'textarea'"
            class="block dark:bg-gray-600 w-full h-10 transition duration-75 border-gray-300 dark:border-gray-800 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-red-600 focus:border-red-600"
            :type="type"
            :id="`input_${name}`"
            :name="name"
            @change="$emit('update:modelValue', $event.target.value)">

        <textarea
            v-if="type === 'textarea'"
            class="block dark:bg-gray-600 w-full transition duration-75 border-gray-300 dark:border-gray-800 rounded-lg shadow-sm focus:ring-1 focus:ring-inset focus:ring-red-600 focus:border-red-600"
            :id="`input_${name}`"
            :name="name"
            @change="$emit('update:modelValue', $event.target.value)"
            rows="5"></textarea>
    </div>
</template>

<script>
export default {
    name: "InputItem",
    props: {
        label: {
            type: String,
            required: false,
        },
        name: {
            type: String,
            required: true,
        },
        modelValue: {},
        type: {
            type: String,
            required: false,
            default: 'text',
        },
    },
    emits: [
        'update:modelValue',
    ],
}
</script>

<style scoped>

</style>