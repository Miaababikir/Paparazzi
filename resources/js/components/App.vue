<template>
    <div class="flex flex-col h-screen font-roboto">
        <the-navbar></the-navbar>
        <div class="flex-1 overflow-scroll">
            <div class="container mx-auto px-4 py-8 sm:py-16">
                <base-panel>...</base-panel>
            </div>
        </div>
    </div>
</template>

<script>

    import TheNavbar from './TheNavbar'

    export default {
        components: { TheNavbar }
    }
</script>
