<script setup>
import { ref } from 'vue'
////////////////
/* import { i_to_u8 } from './assets/ztr8/i_to_u8.js'

import { u_to_u8hin } from './assets/ztr8/u_to_u8hin.js'
import { u_to_u8pnz } from './assets/ztr8/u_to_u8pnz.js'
import { u_to_u8guzrati } from './assets/ztr8/u_to_u8guzrati.js'
import { u_to_u8bngali } from './assets/ztr8/u_to_u8bngali.js'
import { u_to_u8odia } from './assets/ztr8/u_to_u8odia.js'

import { u_to_u8tmil } from './assets/ztr8/u_to_u8tmil.js'
import { u_to_u8telugu } from './assets/ztr8/u_to_u8telugu.js'
import { u_to_u8mlyalm } from './assets/ztr8/u_to_u8mlyalm.js'
import { u_to_u8knrra } from './assets/ztr8/u_to_u8knrra.js' */
////////////////
import { i_to_u8 } from './ztr8/i_to_u8.js'

import { u_to_u8hin } from './ztr8/u_to_u8hin.js'
import { u_to_u8pnz } from './ztr8/u_to_u8pnz.js'
import { u_to_u8guzrati } from './ztr8/u_to_u8guzrati.js'
import { u_to_u8bngali } from './ztr8/u_to_u8bngali.js'
import { u_to_u8odia } from './ztr8/u_to_u8odia.js'

import { u_to_u8tmil } from './ztr8/u_to_u8tmil.js'
import { u_to_u8telugu } from './ztr8/u_to_u8telugu.js'
import { u_to_u8mlyalm } from './ztr8/u_to_u8mlyalm.js'
import { u_to_u8knrra } from './ztr8/u_to_u8knrra.js'
////////////////



const itekst = ref("0. ram Tere kiTne nam. 1. रaम तeरe कiतनe नaम. gलoबaल मoडeरन सchooल. 2. રaમ તeરe કiતનe નaમ. gલoબaલ મoડeરન સchooલ.")
const ztrdir = ref("")
const otekst = ref("")
const olc = ref(0)
function itekst_on_input() { doztr() }
function ztrdir_changed() { doztr() }
// function i_to_u8hin_click() { ztrdir.value = "i_to_u8hin"; doztr(); }
//function u_to_u8hin_click() { ztrdir.value = "u_to_u8hin"; doztr(); } 
function u_to_all_click() {
				let all_text = ''; // ('1. ' + itekst.value + "\n") ;
				ztrdir.value = "u_to_u8hin"; doztr();
				all_text += ('1. ' + otekst.value + "\n") ;
				ztrdir.value = "u_to_u8guzrati"; doztr();
				all_text += ('2. ' + otekst.value + "\n") ;
				ztrdir.value = "u_to_u8pnz"; doztr();
				all_text += ('3. ' + otekst.value + "\n") ;
				ztrdir.value = "u_to_u8bngali"; doztr();
				all_text += ('4. ' + otekst.value + "\n") ;
				ztrdir.value = "u_to_u8odia"; doztr();
				all_text += ('5. ' + otekst.value + "\n") ;
				ztrdir.value = "u_to_u8tmil"; doztr();
				all_text += ('6. ' + otekst.value + "\n") ;
				ztrdir.value = "u_to_u8mlyalm"; doztr();
				all_text += ('7. ' + otekst.value + "\n") ;
				ztrdir.value = "u_to_u8knrra"; doztr();
				all_text += ('8. ' + otekst.value + "\n") ;
				ztrdir.value = "u_to_u8telugu"; doztr();
				all_text += ('9. ' + otekst.value + "\n") ;
				otekst.value = all_text;
				ztrdir.value = "i_to_u8hin";
}
function i_to_all_click() { 
				let all_text = ''; // ('1. ' + itekst.value + "\n") ;
				ztrdir.value = "i_to_u8hin"; doztr();
				all_text += ('1. ' + otekst.value + "\n") ;
				ztrdir.value = "i_to_u8guzrati"; doztr();
				all_text += ('2. ' + otekst.value + "\n") ;
				ztrdir.value = "i_to_u8pnz"; doztr();
				all_text += ('3. ' + otekst.value + "\n") ;
				ztrdir.value = "i_to_u8bngali"; doztr();
				all_text += ('4. ' + otekst.value + "\n") ;
				ztrdir.value = "i_to_u8odia"; doztr();
				all_text += ('5. ' + otekst.value + "\n") ;
				ztrdir.value = "i_to_u8tmil"; doztr();
				all_text += ('6. ' + otekst.value + "\n") ;
				ztrdir.value = "i_to_u8mlyalm"; doztr();
				all_text += ('7. ' + otekst.value + "\n") ;
				ztrdir.value = "i_to_u8knrra"; doztr();
				all_text += ('8. ' + otekst.value + "\n") ;
				ztrdir.value = "i_to_u8telugu"; doztr();
				all_text += ('9. ' + otekst.value + "\n") ;
				otekst.value = all_text;
				ztrdir.value = "i_to_u8hin";
}
function i_to_u8hin_click() { ztrdir.value = "i_to_u8hin"; doztr(); }
function i_to_u8tmil_click() { ztrdir.value = "i_to_u8tmil"; doztr(); }
function i_to_u8pnz_click() { ztrdir.value = "i_to_u8pnz"; doztr(); }
function i_to_u8bngali_click() { ztrdir.value = "i_to_u8bngali"; doztr(); }
function i_to_u8knrra_click() { ztrdir.value = "i_to_u8knrra"; doztr(); }
function i_to_u8mlyalm_click() { ztrdir.value = "i_to_u8mlyalm"; doztr(); }
function i_to_u8odia_click() { ztrdir.value = "i_to_u8odia"; doztr(); }
function i_to_u8telugu_click() { ztrdir.value = "i_to_u8telugu"; doztr(); }
function i_to_u8guzrati_click() { ztrdir.value = "i_to_u8guzrati"; doztr(); }
////////////
function u_to_u8hin_to_i_click() {
  ztrdir.value = "u_to_u8hin"; doztr();
  itekst.value = otekst.value;
  ztrdir.value = "i_to_u8hin"; doztr();
}
////////////
function u_to_u8hin_click() { ztrdir.value = "u_to_u8hin"; doztr(); }
function u_to_u8bngali_click() { ztrdir.value = "u_to_u8bngali"; doztr(); }
function u_to_u8pnz_click() { ztrdir.value = "u_to_u8pnz"; doztr(); }
function u_to_u8guzrati_click() { ztrdir.value = "u_to_u8guzrati"; doztr(); }
function u_to_u8odia_click() { ztrdir.value = "u_to_u8odia"; doztr(); }
function u_to_u8tmil_click() { ztrdir.value = "u_to_u8tmil"; doztr(); }
function u_to_u8telugu_click() { ztrdir.value = "u_to_u8telugu"; doztr(); }
function u_to_u8knrra_click() { ztrdir.value = "u_to_u8knrra"; doztr(); }
function u_to_u8mlyalm_click() { ztrdir.value = "u_to_u8mlyalm"; doztr(); }
function doztr() {		
		switch (ztrdir.value) {
			case "i_to_u8hin": otekst.value = i_to_u8(itekst.value, 0); break;
			case "i_to_u8bngali": otekst.value = i_to_u8(itekst.value,1); break;
			case "i_to_u8pnz": otekst.value = i_to_u8(itekst.value,2); break;
			case "i_to_u8guzrati": otekst.value = i_to_u8(itekst.value,3); break;
			case "i_to_u8odia": otekst.value = i_to_u8(itekst.value,4); break;
			case "i_to_u8tmil": otekst.value = i_to_u8(itekst.value,5); break;
			case "i_to_u8telugu": otekst.value = i_to_u8(itekst.value,6); break;
			case "i_to_u8knrra": otekst.value = i_to_u8(itekst.value,7); break;
			case "i_to_u8mlyalm": otekst.value = i_to_u8(itekst.value,8); break;
//////////

			case "u_to_u8hin": otekst.value = u_to_u8hin(itekst.value, 0); break;
			case "u_to_u8bngali": otekst.value = u_to_u8bngali(itekst.value,0); break;					
			case "u_to_u8pnz": otekst.value = u_to_u8pnz(itekst.value,0); break;
			case "u_to_u8guzrati": otekst.value = u_to_u8guzrati(itekst.value,0); break;					
			case "u_to_u8odia": otekst.value = u_to_u8odia(itekst.value,0); break;					
			case "u_to_u8tmil": otekst.value = u_to_u8tmil(itekst.value,0); break;					
			case "u_to_u8telugu": otekst.value = u_to_u8telugu(itekst.value,0); break;					
			case "u_to_u8knrra": otekst.value = u_to_u8knrra(itekst.value,0); break;					
			case "u_to_u8mlyalm": otekst.value = u_to_u8mlyalm(itekst.value,0); break;
		}
} 
</script>

<template>
  <div class="main" id="ztrapp">
      <div>
          <textarea id="ita" v-on:input="itekst_on_input" v-model="itekst" cols=80 rows=8></textarea>
      </div>
      <div>
            <select id="comboA" v-on:change="ztrdir_changed()" v-model="ztrdir">
              <option value="">select ztr</option>
              <option value="i_to_u8hin">i_to_हiनदi</option>
              <option disabled>_________</option>
              <option value="u_to_u8hin">u_to_हiनदi</option>
            </select>
      </div>
      <div class="pcdiv">
       <button @click="i_to_u8hin_click">i_to_हiनदi</button>
	   <button @click="i_to_u8tmil_click">i_to_தமiல</button>
	   <button @click="i_to_u8knrra_click">i_to_ಕನರರa</button>
	   <button @click="i_to_u8pnz_click">i_to_ਪਨਜaਬi</button>
	   <button @click="i_to_u8bngali_click">i_to_বনgaলi</button>
	   <button @click="i_to_all_click">i_to_all</button>
	   <button @click="i_to_u8hin_click">i_to_हiनदi</button>
	   <button @click="i_to_u8mlyalm_click">i_to_മലയaലമ</button>
	   <button @click="i_to_u8odia_click">i_to_oଡia</button>
	   <button @click="i_to_u8telugu_click">i_to_తeలugu</button>
	   <button @click="i_to_u8guzrati_click">i_to_guજરaતi</button>
      </div>
      <div class="pcdiv">
		<button @click="u_to_all_click">u_to_all</button>
		<button @click="u_to_u8hin_click">u_to_हiनदi</button>
		<button @click="u_to_u8hin_to_i_click">u_u8hin_i</button>
		<button @click="u_to_u8bngali_click">u_to_বনgaলi</button>
		<button @click="u_to_u8pnz_click">u_to_ਪਨਜaਬi</button>
		<button @click="u_to_u8guzrati_click">u_to_guજરaતi</button>
		<button @click="u_to_u8odia_click">u_to_oଡia</button>
		<button @click="u_to_u8tmil_click">u_to_தமiல</button>
		<button @click="u_to_u8telugu_click">u_to_తeలugu</button>
		<button @click="u_to_u8knrra_click">u_to_ಕನರರa</button>
		<button @click="u_to_u8mlyalm_click">u_to_മലയaലമ</button>
      </div>
      <div>
            <p>{{ otekst }}</p>
      </div>
  </div>
</template>

<style scoped>
#ita {
    width: 100%;
    height: 150px;
    padding: 12px 20px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 16px;
    resize: none;
  }
@media screen and (max-width: 600px) {
  .pcdiv {
    visibility: hidden;
    clear: both;
    float: left;
    margin: 10px auto 5px 20px;
    width: 28%;
    display: none;
  }
}
</style>

