<template>
    <transition name="fade">
        <div v-if="open" class="fixed bg-blue-100 h-52 w-56 rounded-xl grid justify-center items-center border border-blue-300 shadow p-4 max-w-sm mx-auto" style="top: 30%; left: 50%; transform: translate(-50%, -50%);">
            <div class="text-xl block font-medium text-red-600 text-center">Selecione pelo menos uma fralda</div>
            <div class="mt-4 flex gap-4 justify-center">
                <button class="w-6/12 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 text-white" style="height: 36px;" @click="ok">
                    Ok
                </button>
            </div>
        </div>
    </transition>
</template>

<script setup>
import {ref, watch} from 'vue'
const emit = defineEmits(['update:abrirErro'])
const props = defineProps({
    abrirErro: Boolean
})

const open = ref(false)

watch(() => props.abrirErro, (newValue) => {
    open.value = newValue
})

const ok = () => {
    open.value = false
    emit('update:abrirErro', false)
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
</style>
