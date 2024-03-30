<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
    <button class="rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300" style="width: 100px; height: 50px;" @click="open = true">
        Finalizar
    </button>
    <transition name="fade">
        <div v-if="open" class="fixed bg-blue-100 h-52 w-56 rounded-xl grid justify-center items-center border border-blue-300 shadow p-4 max-w-sm mx-auto" style="top: 30%; left: 50%; transform: translate(-50%, -50%);">
            <div class="text-xl block font-medium text-slate-700">Digite o seu nome</div>
            <input class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" type="text">
            <button class="mt-4 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300" style="height: 36px;" @click="open = false">
                Salvar
            </button>
        </div>
    </transition>
</template>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
