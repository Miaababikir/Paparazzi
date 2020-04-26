<template>
    <label class="flex items-center">
        <input
            class="form-checkbox text-gray-800 border-gray-400 cursor-pointer"
            type="checkbox"
            :checked="value"
            @input="$emit('input', $event.target.checked)"
        >
        <div
            class="text-sm font-semibold ml-2"
            v-if="label"
            v-text="label"
        ></div>
    </label>
</template>

<script>
    export default {
        props: {
            value: Boolean,
            label: String,
        },
    }
</script>
