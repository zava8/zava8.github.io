<template>
    <table class="table">
    <thead class="thead-dark">
        <tr>
        <th scope="col">#</th>
        <th scope="col">oस</th>
        <th scope="col">लaनguage</th>
        <th scope="col">फoनट</th>
        <th scope="col">hao_टo_iनसटaलल</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="ro in roz" :key="ro.id"> 
            <td>{{ ro.id }}</td>
            <td>{{ ro.os }}</td>
            <td>{{ ro.lang }}</td>
            <td>{{ ro.font }}</td>
            <td><a :href="ro.insurl">install</a></td>
        </tr>     
    </tbody>
    </table>
</template>

<script setup>
import { ref } from 'vue'

const roz = ref([
  { id: 1, os: 'लiनux', lang: "हiनदi" , font: "hin58.ttf" , insurl: ""},
])
</script>