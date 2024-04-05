<template>
    <button class="rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 text-white" style="width: 100px; height: 50px;" @click="open = true">
        Finalizar
    </button>
    <transition name="fade">
        <div v-if="open" class="fixed bg-blue-100 h-52 w-56 rounded-xl grid justify-center items-center border border-blue-300 shadow p-4 max-w-sm mx-auto" style="top: 30%; left: 50%; transform: translate(-50%, -50%);">
            <div class="meu-text-xs text-slate-700">Você também pode fazer um pix para</div>
            <div class="meu-text-xs text-slate-700">nós, nosso pix é o Cpf 389.598.558-98</div>
            <div class="text-xl block font-medium text-slate-700">Digite o seu nome</div>
            <input class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none" type="text" v-model="nome">
            <div class="mt-4 flex gap-4">
                <button class="w-6/12 rounded-full bg-red-500 hover:bg-red-600 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 text-white" style="height: 36px;" @click="cancelar">
                    Cancelar
                </button>
                <button class="w-6/12 rounded-full bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300 text-white" style="height: 36px;" @click="salvar">
                    Salvar
                </button>
            </div>
        </div>
    </transition>
</template>

<script setup>
import { ref } from 'vue'
const emit = defineEmits(['aoSalvar'])

const open = ref(false)
const nome = ref('')

const salvar = () => {
    emit('aoSalvar', nome.value)
    open.value = false
    nome.value = ''
}
const cancelar = () => {
    open.value = false
    nome.value = ''
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.meu-text-xs {
    font-size: 0.675rem
}
</style>
