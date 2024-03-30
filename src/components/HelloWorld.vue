<template>
  <div class="grid grid-cols-12 gap-10 pt-10">
    <div class="col-span-12 flex justify-center">
      <img src="../../public/imagem3.png" style="width: 10%; height: 100%;">
      <div class="font-['Curlz_MT'] text-5xl sm:text-6xl md:text-8xl lg:text-9xl pt-20 text-blue-300">Chá da Alice</div>
      <img src="../../public/imagem2.png" style="width: 10%; height: 100%;">
    </div>
    <div class="col-span-12 flex flex-wrap gap-10 pl-28 sm:justify-center">
      <div v-for="(grupo, index) in grupos" :key="index">
        <div class="inline-block text-xl font-semibold border-solid p-1 border-4 rounded-full border-blue-300 px-5 mb-4 ">
          {{ grupo.nome }}
        </div>
        <div v-for="(item, index) in grupo.itens" :key="index" class="pb-1">
          <input type="checkbox" v-model="item.selecionado" />
          {{ item.nome }}
        </div>
      </div>
    </div>
    <div class="col-span-12 flex justify-center pb-10">
      <Modal/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Modal from './Modal.vue'

const grupos = ref([
  {
    nome: 'Fraldas',
    itens: [
      {nome: 'Fralda M', selecionado: false},
      {nome: 'Fralda G', selecionado: false},
    ]
  },
  {
    nome: 'Quarto',
    itens: [
      {nome: 'Berço desmontável', selecionado: false},
      {nome: 'Jogos de lençol para berço desmontável', selecionado: false},
      {nome: 'Mantas', selecionado: false},
      {nome: 'Cobertores de berço', selecionado: false},
      {nome: 'Cobertores de enrolar', selecionado: false},
      {nome: 'Colchonete para berço desmontável', selecionado: false},
      {nome: 'Jogos de lençol para berço', selecionado: false},
      {nome: 'Fronhas avulsas', selecionado: false},
      {nome: 'Travesseiro antirrefluxo', selecionado: false},
      {nome: 'Travesseiros antissufocante', selecionado: false},
      {nome: 'Posicionador para dormir', selecionado: false},
      {nome: 'Kits para berço', selecionado: false},
      {nome: 'Mosquiteiro', selecionado: false},
      {nome: 'Kits de fralda de boca', selecionado: false},
      {nome: 'Blanket ( naninha )', selecionado: false},
      {nome: 'Ninho', selecionado: false},
      {nome: 'Móbile', selecionado: false},
      {nome: 'Kits de cabide', selecionado: false},
    ]
  },
  {
    nome: 'Roupinhas de bebê',
    itens: [
      {nome: 'Fralda RN', selecionado: false},
      {nome: 'Fralda P', selecionado: false},
      {nome: 'Fralda M', selecionado: false},
      {nome: 'Fralda G', selecionado: false},
    ]
  }
])
</script>
