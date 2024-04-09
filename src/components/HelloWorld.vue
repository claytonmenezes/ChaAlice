<template>
  <div class="grid grid-cols-12 gap-10 pt-10">
    <div class="col-span-12 flex justify-center">
      <img src="../../public/imagem3.png" style="width: 10%; height: 100%;">
      <img src="../../public/imagem4.png" style="width: 50%; height: 50%; margin-top: 8%;">
      <img src="../../public/imagem2.png" style="width: 10%; height: 100%;">
    </div>
    <div class="col-span-12 flex flex-wrap gap-10 pl-28 sm:justify-center">
      <div v-for="(grupo, index) in grupos" :key="index">
        <div class="inline-block text-xl font-semibold border-solid p-1 border-4 rounded-full border-blue-300 px-5 mb-4 ">
          {{ grupo.nome }}
        </div>
        <div v-for="(item, index) in grupo.itens" :key="index" class="pb-1 pl-6 flex gap-2 flex-nowrap">
          <input v-if="item.qtde > 0" type="checkbox" v-model="item.selecionado"/>
          <div v-if="item.qtde > 0">
            {{ item.nomeItem }}
          </div>
          <div v-else class="line-through">
            {{ item.nomeItem }}
          </div>
        </div>
      </div>
    </div>
    <div class="col-span-12 flex justify-center pb-10">
      <Modal @aoSalvar="aoSalvar"/>
    </div>
    <div class="col-span-12 flex justify-center pb-10">
      <ModalErro :abrirErro="modalErro" @update:abrirErro="modalErro = $event"/>
    </div>
    <div v-if="load" class="fixed h-full w-full bg-opacity-50 grid justify-center items-center bg-gray-500" style="top: 50%; left: 50%; transform: translate(-50%, -50%);">
      <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Modal from './Modal.vue'
import ModalErro from './ModalErro.vue'
import { listar, atualizar } from '../metodos/db'

const grupos = ref([])
const modalErro = ref(false)
const load = ref(true)

const aoSalvar = async (nome) => {
  const selecionados = ref([])
  let selecionouFralda = false
  for (const grupo of grupos.value) {
    for (const item of grupo.itens) {
      if (item.selecionado) {
        if (grupo.nome === 'Fraldas') {
          selecionouFralda = true
        }
        item.nome = nome
        selecionados.value.push(item)
      }
    }
  }
  if (selecionouFralda) {
    await atualizar(selecionados.value)
    for (const selecionado of selecionados.value) {
      selecionado.selecionado = false
      selecionado.qtde--
    }
  } else {
    modalErro.value = true
  }
}
const agruparItensPorGrupo = (lista) => {
  const grupos = []
  for (const item of lista) {
    const index = grupos.findIndex(g => g.nome === item.grupo)
    if (index === -1) {
      grupos.push({
        nome: item.grupo,
        itens: [
          {id: item.id, nomeItem: item.item, selecionado: item.selecionado, qtde: item.qtde, nome: item.nome}
        ]
      })
    } else {
      grupos[index].itens.push({id: item.id, nomeItem: item.item, selecionado: item.selecionado, qtde: item.qtde, nome: item.nome})
    }
  }
  return grupos
}
onMounted(async () => {
  load.value = true
  // const itens = await listar()
  grupos.value = agruparItensPorGrupo(itens)
  load.value = false
})
</script>
