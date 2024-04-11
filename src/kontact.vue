<template>
    <table class="table">
    <thead class="thead-dark">
        <tr>
        <th scope="col">#</th>
        <th scope="col">type</th>
        <th scope="col">language</th>
        <th scope="col">clicktogo</th>
        <th scope="col">phone</th>
        </tr>
    </thead>
        <tbody>
        <tr v-for="ro in roz" :key="ro.id"> 
            <td>{{ ro[0] }}</td>
            <td>{{ ro[1] }}</td>
            <td>{{ ro[2] }}</td>
            <td><a :href="ro[3]">{{ ro[4] }}</a></td>
            <td>{{ ro[5] }}</td>
        </tr>     
    </tbody>
    </table>
</template>
*/
<script setup>
import { ref } from 'vue'

const roz = ref([
  [0, 'eमaiल', "हiनदi","mailto:vimalkg@gmail.com","वiमaल कuमaर","7291098286"],
  [1, 'coनटacट', "","","","7291098286"],
  [2, 'फaceबooक',"हiनदi","https://fb.com/ztrabc","zटरaबc",""],
  [3, 'फaceबooक',"हiनदi","https://fb.com/ztrabc","zटरaबc",""],
  [4, 'vk.com',"हiनदi","https://vk.com/zs810","vk.com/zs810","",""],
  [5, 'twitter.com',"हiनदi","https://twitter.com/etphor","twitter.com/etphor",""],
  [6, 'फaceबooक',"हiनदi","https://fb.com/8fgrm","8 फiनgeर मअतhस",""],
  [7, 'फaceबooक',"Tmil","https://fb.com/Tmil58","தமiல58(8aiueohcg)",""],
  [8, 'फaceबooक',"हiनदi","https://fb.com/hin584","हiन58(8aiueohcg)",""],
]);
</script>