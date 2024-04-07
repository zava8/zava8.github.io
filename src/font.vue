<template>
    <a 
      href="https://docs.google.com/spreadsheets/d/1yZCQ7s5q3Trs82y1Jz7IxdqQsS9LJArsu_kgZmm4HPk/edit?usp=sharing"
      target="blank">
        फoनट डauनलoaड अoर iनसटaलल करनe कe लiयe gugल सheeट पर वiसiट करe.
    </a>
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
            <td><a :href="ro.durl">{{ ro.durlt }}</a></td>
            <td><a :href="ro.iurl">{{ ro.iurlt }}</a></td>
        </tr>     
    </tbody>
    </table>
</template>

<script setup>
import { ref } from 'vue'

const roz = ref([
  {
    id: 1, os: 'लiनux', lang: "हiनदi" ,
    durlt: "डauनलoड hin58.ttf font", durl: "https://github.com/zava8/free/blob/master/font/hin58.ttf",
    iurlt: "iनसटaलल hin58.ttf font", iurl: "",
  },
])
</script>