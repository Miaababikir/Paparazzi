<template>
    <div class="w-full bg-white border-b">
        <div class="flex items-center container mx-auto px-4 py-3 text-gray-600">
            <div class="flex items-center hover:text-gray-900 cursor-pointer">
                <img class="h-6" src="https://singlepagelaravel.com/apple-touch-icon.png" alt="Logo">
                <div class="hidden sm:block ml-4 uppercase tracking-widest font-medium">Paparazzi</div>
            </div>
            <template v-if="auth.check()">
                <div class="ml-auto" v-text="auth.user().name"></div>
                <a class="font-medium ml-4 hover:text-gray-900" href="#">Logout</a>
            </template>

            <template v-else>
                <a class="font-medium ml-auto hover:text-gray-900" href="#">Login</a>
                <a class="font-medium ml-4 hover:text-gray-900" href="#">Register</a>
            </template>

        </div>
    </div>
</template>

<script>

    import { auth } from '@stubs';

    export default {
        data() {
            return {
                auth
            }
        }
    }
</script>
