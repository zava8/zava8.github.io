<script setup>
import { ref } from 'vue'
import { i_to_u8 } from './ztr8/i_to_u8.js'
import { i_to_u8sinh } from './ztr8/i_to_u8sinh.js'

import { u_to_a } from './ztr8/u_to_a.js'
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
const itekst = ref(`#8aiueohcg #4ADHT #3kvz fb.com/ztrabc kKqQ zZjJ vVwW nNx bdf pst yrlm ->
	1. i_to_हiनदi : #8aiueohcg #4अदहत #3kvz फब.coम/zटरaबc kkkk zzzz vvww ननx बडफ पसट यरलम
	2. i_to_বনgaলi : #8aiueohcg #4অদহত #3kvz ফব.coম/zটরaবc kkkk zzzz vvww ননx বডফ পসট যরলম
	3. i_to_తeలugu : #8aiueohcg #4అదహత #3kvz ఫబ.coమ/zటరaబc kkkk zzzz vvww ననx బడఫ పసట యరలమ
	4. i_to_ಕನರರa : #8aiueohcg #4ಅದಹತ #3kvz ಫಬ.coಮ/zಟರaಬc kkkk zzzz vvww ನನx ಬಡಫ ಪಸಟ ಯರಲಮ
	5. i_to_മലയaലമ  : #8aiueohcg #4അദഹത #3kvz ഫബ.coമ/ztരaബc kkkk zzzz vvww നനx ബഡഫ പസt യരലമ
	6. i_to_தமiல : #8aiueohcg #4அDஹத #3kvz fb.coம/zடரabc kkkk zzzz vvww நநx bdf பஸட யரலம
	7. i_to_oଡia: #8aiueohcg #4ଅଦହତ #3kvz ଫବ.coମ/zଟରaବc kkkk zzzz vvww ନନx ବଡଫ ପସଟ ଯରଲମ
	8. i_to_ਪਨਜaਬi: #8aiueohcg #4ਅਦਹਤ #3kvz ਫਬ.coਮ/zਟਰaਬc kkkk zzzz vvww ਨਨx ਬਡਫ ਪਸਟ ਯਰਲਮ
	9. i_to_guજરaતi : #8aiueohcg #4અદહત #3kvz ફબ.coમ/zટરaબc kkkk zzzz vvww નનx બડફ પસટ યરલમ
हिंदी বাংলা తెలుగు ಕನ್ನಡ മലയാളം தமிழ் ଓଡିଆ ਗੁਰੂਮੁਖੀ ગુજરાતી->
	1. u_to_हiनदi : हiनदi बaनलa तeiलugu kननड मलयaलल तमiललल oडiअa guरuमukhi guzरaतi
	2. u_to_বনgaলi : হiনদi বaনলa তeiলugu কননড মলযaলল তমiললল oডiঅa guরuমuকhi guজরaতi
	3. u_to_తeలugu : హiనదi బaనలa తeiలugu కననడ మలయaలల తమiలలల oడiఅa guరuమuకhi guజరaతi
	4. u_to_ಕನರರa : ಹiನದi ಬaನಲa ತeiಲugu ಕನನಡ ಮಲಯaಲಲ ತಮiಲಲಲ oಡiಅa guರuಮuಕhi guಜರaತi
	5. u_to_മലയaലമ : ഹiനദi ബaനലa തeiലugu കനനഡ മലയaലല തമiലലല oഡiഅa guരuമuകhi guജരaതi
	6. u_to_தமiல : ஹiநDi baநலa தeiலugu கநநd ਮலயaலல தਮiலலல odiஅa guரuਮuகhi guஜரaதi
	7. u_to_oଡia : ହiନଦi ବaନଲa ତeiଲugu କନନଡ ମଲଯaଲଲ ତମiଲଲଲ oଡiଅa guରuମuକhi guଜରaତi
	8. u_to_ਪਨਜaਬi : ਹiਨਦi ਬaਨਲa ਤeiਲugu ਕਨਨਡ ਮਲਯaਲਲ ਤਮiਲਲਲ oਡiਅa guਰuਮuਕhi guਜਰaਤi
	9. u_to_guજરaતi : હiનદi બaનલa તeiલugu કનનડ મલયaલલ તમiલલલ oડiઅa guરuમuકhi guજરaતi`);
const ztrdir = ref("")
const otekst = ref("")
const olc = ref(0)
function itekst_on_input() { doztr() }
function ztrdir_changed() { doztr() }
//function u_to_u8hin_click() { ztrdir.value = "u_to_u8hin"; doztr(); } 
function i_to_all_click() { //jq_to_zk(); w_to_vzyuz();
	let all_text = ''; // ('1. ' + itekst.value + "\n") ;
	ztrdir.value = "i_to_u8hin"; doztr();
	all_text += ('1. ' + otekst.value + "\n#hindi #hin5 zava8.github.io -> #font -> hin5.ttf\n") ;
	ztrdir.value = "i_to_u8bngali"; doztr();
	all_text += ('2. ' + otekst.value + "\n#bengali #bangla5 zava8.github.io -> #font -> bangla5.ttf\n") ;
	ztrdir.value = "i_to_u8telugu"; doztr();
	all_text += ('3. ' + otekst.value + "\n#telugu #telugu5 zava8.github.io -> #font -> telugu5.ttf\n") ;
	ztrdir.value = "i_to_u8knrra"; doztr();
	all_text += ('4. ' + otekst.value + "\n#kannada #kannada5 zava8.github.io -> #font -> kannada5.ttf\n") ;
	ztrdir.value = "i_to_u8mlyalm"; doztr();
	all_text += ('5. ' + otekst.value + "\n#malayalam #malayalam5 zava8.github.io -> #font -> malayalam5.ttf\n") ;
	ztrdir.value = "i_to_u8tmil"; doztr();
	all_text += ('6. ' + otekst.value + "\n#tamil #tamil5 zava8.github.io -> #font -> tamil5.ttf\n") ;
	ztrdir.value = "i_to_u8sinh"; doztr();
	all_text += ('6a. ' + otekst.value + "\n#sinhala #sinhala5 zava8.github.io -> #font -> sinhala5.ttf\n") ;
	ztrdir.value = "i_to_u8odia"; doztr();
	all_text += ('7. ' + otekst.value + "\n#odia #odia5 zava8.github.io -> #font -> odia5.ttf\n") ;
	ztrdir.value = "i_to_u8pnz"; doztr();
	all_text += ('8. ' + otekst.value + "\n#pnzabi #pnzabi5 zava8.github.io -> #font -> pnzabi5.ttf\n") ;
	ztrdir.value = "i_to_u8guzrati"; doztr();
	all_text += ('9. ' + otekst.value + "\n#guzrati #guzrati5 zava8.github.io -> #font ->  guzrati5.ttf\n") ;
	otekst.value = all_text;
	ztrdir.value = "i_to_u8hin";
}
function u_to_all_click() {
				let all_text = ''; // ('1. ' + itekst.value + "\n") ;
				ztrdir.value = "u_to_a"; doztr();
				all_text += ('0. ' + otekst.value + "\n#english #ing5 zava8.github.io -> #font -> ing5.ttf\n") ;
				ztrdir.value = "u_to_u8hin"; doztr();
				all_text += ('1. ' + otekst.value + "\n#hindi #hin5 zava8.github.io -> #font -> hin5.ttf\n") ;
				ztrdir.value = "u_to_u8bngali"; doztr();
				all_text += ('2. ' + otekst.value + "\n#bengali #bengali5 zava8.github.io -> #font -> bengali5.ttf\n") ;
				ztrdir.value = "u_to_u8telugu"; doztr();
				all_text += ('3. ' + otekst.value + "\n#telugu #telugu5 zava8.github.io -> #font -> telugu5.ttf\n") ;
				ztrdir.value = "u_to_u8knrra"; doztr();
				all_text += ('4. ' + otekst.value + "\n#kannada #kannada5 zava8.github.io -> #font -> kannada5.ttf\n") ;
				ztrdir.value = "u_to_u8mlyalm"; doztr();
				all_text += ('5. ' + otekst.value + "\n#malayalam #malayalam5 zava8.github.io -> #font -> malayalam5.ttf\n") ;
				ztrdir.value = "u_to_u8tmil"; doztr();
				all_text += ('6. ' + otekst.value + "\n#tamil #tamil5 zava8.github.io -> #font -> tamil5.ttf\n") ;
				ztrdir.value = "u_to_u8odia"; doztr();
				all_text += ('7. ' + otekst.value + "\n#odia #odia5 zava8.github.io -> #font -> odia5.ttf\n") ;
				ztrdir.value = "u_to_u8pnz"; doztr();
				all_text += ('8. ' + otekst.value + "\n#pnzabi #pnzabi5 zava8.github.io -> #font -> pnzabi5.ttf\n") ;
				ztrdir.value = "u_to_u8guzrati"; doztr();
				all_text += ('9. ' + otekst.value + "\n#guzrati #guzrati5 zava8.github.io -> #font -> guzrati5.ttf\n") ;
				otekst.value = all_text;
				ztrdir.value = "i_to_u8hin";
}
function i_to_small() { itekst.value = itekst.value.toLowerCase(); }
function jq_to_zk() { itekst.value = itekst.value.replaceAll('j','z').replaceAll('q','k'); }
function c_to_c() { itekst.value = itekst.value.replaceAll('ꞇ','c'); }
function a_to_a() { itekst.value = itekst.value.replaceAll('α','a'); }
function n_to_n() { itekst.value = itekst.value.replaceAll('ṅ','n'); }
function ac_to_ac() { itekst.value = itekst.value.replaceAll('α','a').replaceAll('ꞇ','c'); }
function acn_to_acn() { itekst.value = itekst.value.replaceAll('α','a').replaceAll('ꞇ','c').replaceAll('ṅ','n'); }
function w_to_vzyuz() {
	itekst.value = itekst.value.replaceAll(
		//'yew','yuu').replaceAll(
		'ews','yuz').replaceAll(
		'ows','oz').replaceAll(
		'aws','az').replaceAll(
		/aw\b/g,'au').replaceAll(
		/ow\b/g,'ou').replaceAll(
		/ew/g,'yu').replaceAll(
		'w','v');
}
function jqw_hin_to_zkv() {itekst.value = itekst.value.replaceAll('ज','z').replaceAll('क','k').replaceAll('व','v'); }
function n_to_null() {itekst.value = itekst.value.replaceAll('eiन.','ei.').replaceAll('N ',' '); }
function n_to_null_output() {otekst.value = otekst.value.replaceAll('eiन.','ei.').replaceAll('N ',' '); }
//function ew_to_yu() { itekst.value = itekst.value.replaceAll('ew ','yu '); }
function x_to_z() { itekst.value = itekst.value.replaceAll(/\bx/gi,"z").replaceAll(/x/gi,"ks"); }
function i_to_caps() { itekst.value = itekst.value.toUpperCase(); }
//function macron_to_abc() { // ḵ (ṯ, ḏ, ṟ, ṉ ṟṉṭḷṇ ṅ
//	itekst.value = itekst.value.replaceAll("ṟ", "r").replaceAll("ṇ", "n").replaceAll("ṉ", "n").replaceAll("ṭ", "t").replaceAll("ḷ", "l");
//}
function macron_to_abc() {
    itekst.value = itekst.value.replace(/ṟ/g, 'r').replace(/ṅ/g, 'n').replace(/ṇ/g, 'n').replace(/ṉ/g, 'n').replace(/ṭ/g, 't').replace(/ḷ/g, 'l');
}

function i_to_u8sinh_click() { ztrdir.value = "i_to_u8sinh"; doztr(); }
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
  itekst.value = otekst.value;
}
////////////
function u_to_u8hin_click() { ztrdir.value = "u_to_u8hin"; doztr(); }
function u_to_a_click() {
	 ztrdir.value = "u_to_a"; doztr(); 
}
function u_to_u8bngali_click() { ztrdir.value = "u_to_u8bngali"; doztr(); }
function u_to_u8pnz_click() { ztrdir.value = "u_to_u8pnz"; doztr(); }
function u_to_u8guzrati_click() { ztrdir.value = "u_to_u8guzrati"; doztr(); }
function u_to_u8odia_click() { ztrdir.value = "u_to_u8odia"; doztr(); }
function u_to_u8tmil_click() { ztrdir.value = "u_to_u8tmil"; doztr(); }
function u_to_u8telugu_click() { ztrdir.value = "u_to_u8telugu"; doztr(); }
function u_to_u8knrra_click() { ztrdir.value = "u_to_u8knrra"; doztr(); }
function u_to_u8mlyalm_click() { ztrdir.value = "u_to_u8mlyalm"; doztr(); }
function doztr() {	//alert("doztr ztrdir.value is : "+ztrdir.value);	
		switch (ztrdir.value) {
			case "i_to_u8sinh": otekst.value = i_to_u8sinh(itekst.value); break;
////////////			
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
			case "u_to_u8hin":
				otekst.value = u_to_u8hin(itekst.value, 0);
				n_to_null_output();
				break;
			case "u_to_a": otekst.value = u_to_a(itekst.value, 0); break;
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
              <option value="i_to_u8hin" title="">i_to_हiनदi</option>
              <option value="u_to_u8hin">u_to_हiनदi</option>
              <option value="u_to_a">u_to_eng(kvzADHTN)</option>
              <option value="macron_to_abc">macron_to_abc</option>
			  <option disabled>_________</option>
              <option value="i_to_u8tmil" title="">i_to_தமiல</option>
              <option value="i_to_u8sinh" title="">i_to_හiනහaලa</option>
              <option value="i_to_u8knrra" title="">i_to_ಕನರರa</option>
              <option value="i_to_u8pnz" title="">i_to_ਪਨਜaਬi</option>
              <option value="i_to_u8bngali" title="">i_to_বনgaলi</option>
              <option value="i_to_u8mlyalm" title="">i_to_മലയaലമ</option>
              <option value="i_to_u8odia" title="">i_to_oଡia</option>
              <option value="i_to_u8telugu" title="">i_to_తeలugu</option>
              <option value="i_to_u8guzrati" title="">i_to_guજરaતi</option>
			  <option disabled>_________</option>
              <option value="u_to_u8bngali">u_to_বনgaলi</option>
              <option value="u_to_u8pnz">u_to_ਪਨਜaਬi</option>
              <option value="u_to_u8guzrati_click">u_to_guજરaતi</option>
              <option value="u_to_u8odia">u_to_oଡia</option>
              <option value="u_to_u8tmil">u_to_தமiல</option>
              <option value="u_to_u8telugu">u_to_తeలugu</option>
              <option value="u_to_u8knrra">u_to_ಕನರರa</option>
              <option value="u_to_u8mlyalm">u_to_മലയaലമ</option>
            </select>
			<a 
      href="https://docs.google.com/spreadsheets/d/1yZCQ7s5q3Trs82y1Jz7IxdqQsS9LJArsu_kgZmm4HPk/edit?usp=sharing"
      target="blank">1.font
    </a>
			<a 
      href="https://drive.google.com/drive/folders/1GZutiA6penz2NUY7qlC3FlPhkOQQg5pa?usp=sharing"
      target="blank">2.fbse
    </a>
      </div>
      <div class="pcdiv">
	   <button @click="i_to_u8mlyalm_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; അദഹത ബഡഫ zജകk ലമനര പസt വvxയ">i_to_മലയaലമ</button>
	   <button @click="i_to_u8tmil_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; அDஹத bdf zஜகk லமநர பஸட வvxய">i_to_தமiல</button>
	   <button @click="i_to_u8telugu_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; అదహత బడఫ zజకk లమనర పసట వvxయ">i_to_తeలugu</button>
	   <button @click="i_to_u8knrra_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; ಅದಹತ ಬಡಫ zಜಕk ಲಮನರ ಪಸಟ ವvxಯ">i_to_ಕನರರa</button>
	   <button @click="i_to_u8guzrati_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; અદહત બડફ zજકk લમનર પસટ વvxય">i_to_guજરaતi</button>
	   <button @click="i_to_u8hin_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; अदहत बडफ zजकk लमनर पसट वvxय">i_to_हiनदi</button>
	   <button @click="i_to_u8sinh_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; අදහත බඩඵ zzkk ලමනර පසට vwxය">i_to_හiනහaලa</button>
	   <button @click="i_to_u8pnz_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; ਅਦਹਤ ਬਡਫ zਜਕk ਲਮਨਰ ਪਸਟ ਵvxਯ">i_to_ਪਨਜaਬi</button>
	   <button @click="i_to_u8bngali_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; অদহত বডফ zজকk লমনর পসট vvxয">i_to_বনgaলi</button>
	   <button @click="i_to_u8odia_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; ଅଦହତ ବଡଫ zଜକk ଲମନର ପସଟ ଵvxଯ">i_to_oଡia</button>
      </div>
      <div class="pcdiv">		
		<button @click="u_to_u8hin_click" title="हिंदी বাংলা ગુજરાતી ਗੁਰੂਮੁਖੀ ଓଡିଆ தமிழ் తెలుగు ಕನ್ನಡ മലയാളം->&#010; हiनदi बaनलa guजरaतi guरuमuकhi oडiअa तमiललल तeiलugu कननड मलयaलल">u_to_हiनदi</button>		
		<button @click="u_to_u8bngali_click" title="বাংলা हिंदी ગુજરાતી ਗੁਰੂਮੁਖੀ ଓଡିଆ தமிழ் తెలుగు ಕನ್ನಡ മലയാളം->&#010; বaনলa হiনদi guজরaতi guরuমuকhi oডiঅa তমiললল তeiলugu কননড মলযaলল">u_to_বনgaলi</button>
		<button @click="u_to_u8pnz_click" title="ਗੁਰੂਮੁਖੀ বাংলা हिंदी ગુજરાતી ଓଡିଆ தமிழ் తెలుగు ಕನ್ನಡ മലയാളം->&#010; guਰuਮuਕhi ਬaਨਲa ਹiਨਦi guਜਰaਤi oਡiਅa ਤਮiਲਲਲ ਤeiਲugu ਕਨਨਡ ਮਲਯaਲਲ">u_to_ਪਨਜaਬi</button>
		<button @click="u_to_u8guzrati_click" title="ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी ଓଡିଆ தமிழ் తెలుగు ಕನ್ನಡ മലയാളം->&#010; guજરaતi guરuમuકhi બaનલa હiનદi oડiઅa તમiલલલ તeiલugu કનનડ મલયaલલ">u_to_guજરaતi</button>
		<button @click="u_to_u8odia_click" title="ଓଡିଆ ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी தமிழ் తెలుగు ಕನ್ನಡ മലയാളം->&#010; oଡiଅa guଜରaତi guରuମuକhi ବaନଲa ହiନଦi ତମiଲଲଲ ତeiଲugu କନନଡ ମଲଯaଲଲ">u_to_oଡia</button>
		<button @click="u_to_u8tmil_click" title="தமிழ் ଓଡିଆ ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी తెలుగు ಕನ್ನಡ മലയാളം->&#010; தਮiலலல odiஅa guஜரaதi guரuਮuகhi baநலa ஹiநDi தeiலugu கநநd ਮலயaலல">u_to_தமiல</button>
		<button @click="u_to_u8telugu_click" title="తెలుగు தமிழ் ଓଡିଆ ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी ಕನ್ನಡ മലയാളം->&#010; తeiలugu తమiలలల oడiఅa guజరaతi guరuమuకhi బaనలa హiనదi కననడ మలయaలల">u_to_తeలugu</button>
		<button @click="u_to_u8knrra_click" title="ಕನ್ನಡ తెలుగు தமிழ் ଓଡିଆ ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी മലയാളം->&#010; ಕನನಡ ತeiಲugu ತಮiಲಲಲ oಡiಅa guಜರaತi guರuಮuಕhi ಬaನಲa ಹiನದi ಮಲಯaಲಲ">u_to_ಕನರರa</button>
		<button @click="u_to_u8mlyalm_click" title="മലയാളം ಕನ್ನಡ తెలుగు தமிழ் ଓଡିଆ ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी->&#010; മലയaലല കനനഡ തeiലugu തമiലലല oഡiഅa guജരaതi guരuമuകhi ബaനലa ഹiനദi">u_to_മലയaലമ</button>
      </div>
	  <div>
		  <button @click="i_to_all_click" title="">i_to_all</button>
		  <button @click="u_to_all_click">u_to_all</button>
		  <button @click="u_to_u8hin_to_i_click">u_u8hin_i</button>
		  <button @click="u_to_a_click" title="unicode to modern_english(kvzADHT)">u_to_eng(kvzADHTN)</button>
		  <button @click="i_to_small">ABC_to_abc</button>
	  </div>
	  <div>
		<button @click="i_to_caps">abc_to_ABC</button>
		<button @click="jq_to_zk">jq_to_zk</button>
		<button @click="c_to_c">ꞇ_to_c</button>
		<button @click="a_to_a">α_to_a</button>
		<button @click="n_to_n">ṅ_to_n</button>
		<button @click="ac_to_ac">αꞇ_to_ac</button>
		<button @click="acn_to_acn">αꞇṅ_to_acn</button>
		<button @click="w_to_vzyuz">w_to_vzyuz</button>
		<button @click="jqw_hin_to_zkv">जकव_to_zkv</button>
		<button @click="n_to_null">n_to_null</button>
		<button @click="x_to_z">x_to_z</button>
		<button @click="macron_to_abc">மacரoந_டo_abc</button>	  
	  </div>
      <div>
            <pre>{{ otekst }}</pre>
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

