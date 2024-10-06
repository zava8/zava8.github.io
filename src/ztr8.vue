<script setup>
import { ref } from 'vue'
import { ue_to_il } from './ztr8/ue_to_il.js'
import { u_to_i } from './ztr8/u_to_i.js'
import * as e_to_i from './ztr8/e_to_i.js'
import * as duztr from './ztr8/duztr.js'
////////////////
const itekst = ref("");
const otekst = ref("");
const ztrdir = ref("");
const olc = ref(0);
const ioz = { i: itekst , o: otekst , z: ztrdir } ;
function itekst_on_input() { duztr.doztr(ioz); }
function ztrdir_changed() { duztr.doztr(ioz); }
function i_to_small() { itekst.value = itekst.value.toLowerCase(); }
function jq_to_zk() { itekst.value = itekst.value.replaceAll('j','z').replaceAll('q','k'); }

// ////////uniꞇode_to_iṅglish (AHNDT->aɦṅꟈτ)
function A_to_a() { itekst.value = itekst.value.replaceAll('A','a'); }
function A_to_ahin() { itekst.value = itekst.value.replaceAll('A','अ'); }
function H_to_hh() { itekst.value = itekst.value.replaceAll('H','ɦ'); }
function N_to_nn() { itekst.value = itekst.value.replaceAll('N','ṅ'); }
function D_to_dd() { itekst.value = itekst.value.replaceAll('D','ꟈ'); }
function T_to_tt() { itekst.value = itekst.value.replaceAll('T','τ'); }
function Jj_to_zz() { itekst.value = itekst.value.replaceAll(/j/ig,'ź'); }
function Qq_to_kk() { itekst.value = itekst.value.replaceAll(/q/ig,'ƙ'); }									
function Cc_to_cc() { itekst.value = itekst.value.replaceAll(/c/ig,'ꞇ'); }									
		
// ////////iṅglish_to_English below

function ww_to_w() { itekst.value = itekst.value.replaceAll('ⱱ','w'); }
function cc_to_c() { itekst.value = itekst.value.replaceAll('ꞇ','c'); }
function aa_to_a() { itekst.value = itekst.value.replaceAll('α','a'); }
function a_to_A() { itekst.value = itekst.value.replaceAll('a','A'); }
function nn_to_n() { itekst.value = itekst.value.replaceAll('ṅ','n'); }
function aacc_to_ac() { itekst.value = itekst.value.replaceAll('α','a').replaceAll('ꞇ','c'); }
function acnw_to_acnw()
{ itekst.value = itekst.value.replaceAll('α','a').replaceAll('ꞇ','c').replaceAll('ṅ','n').replaceAll('ⱱ','w'); }
// ////////iṅglish_to_English above

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
function x_to_z() { itekst.value = itekst.value.replaceAll(/\bx/gi,"z").replaceAll(/x/gi,"ks"); }
function i_to_caps() { itekst.value = itekst.value.toUpperCase(); }
function macron_to_abc() {
    itekst.value = itekst.value.replace(/ṟ/g, 'r').replace(/ṅ/g, 'n').replace(/ṇ/g, 'n').replace(/ṉ/g, 'n').replace(/ṭ/g, 't').replace(/ḷ/g, 'l');
}
</script>

<template>
  <div class="main" id="ztrapp">
      <div>
          <textarea id="ita" v-on:input="itekst_on_input" v-model="itekst" cols=80 rows=8></textarea>
      </div>
      <div>
		  <button @click="ue_to_il(ioz)" class="bggreen">ue_to_il</button>
			<a 
				href="https://docs.google.com/spreadsheets/d/1yZCQ7s5q3Trs82y1Jz7IxdqQsS9LJArsu_kgZmm4HPk/edit?usp=sharing"
				target="blank">1.font
				</a>
			<a 
				href="https://drive.google.com/drive/folders/1GZutiA6penz2NUY7qlC3FlPhkOQQg5pa?usp=sharing"
				target="blank">2.fbse
				</a>    
			<a href="https://vk.com/zava810" target="blank">vk</a>
			<a href="https://t.me/zava810" target="blank">टeलegरαम</a>
			<a href="https://x.com/etphor" target="blank">x</a>
			<a href="https://fb.com/ztrabc" target="blank">फaꞇeबook</a>    
            <select class="hidan" id="comboA" v-on:change="ztrdir_changed()" v-model="ztrdir">
              <option value="">select ztr</option>
              <option value="i_to_ilhin" title="">i_to_हiनदi</option>
              <option value="u_to_u8hin">u_to_हiनदi</option>
              <option value="u_to_a">u_to_eng(kvzADHTN)</option>
              <option value="macron_to_abc">macron_to_abc</option>
			  <option disabled>_________</option>
              <option value="i_to_iltmil" title="">i_to_தமiல</option>
              <option value="i_to_ilsinh" title="">i_to_හiනහaලa</option>
              <option value="i_to_ilknrra" title="">i_to_ಕನರರa</option>
              <option value="i_to_ilpnz" title="">i_to_ਪਨਜaਬi</option>
              <option value="i_to_ilbngali" title="">i_to_বনgaলi</option>
              <option value="i_to_ilmlyalm" title="">i_to_മലയaലമ</option>
              <option value="i_to_ilodia" title="">i_to_oଡia</option>
              <option value="i_to_iltelugu" title="">i_to_తeలugu</option>
              <option value="i_to_ilguzrati" title="">i_to_guજરaતi</option>
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
      </div>
      <div>
		uniꞇode_to_iṅglish (अहṅदत=AHNDT=aɦṅꟈτ≠αhndt):<br/>
		<button @click="A_to_a">A_to_a</button>
		<button @click="A_to_ahin">A_to_अ</button>
		<button @click="H_to_hh">H_to_ɦ</button>
		<button @click="N_to_nn">N_to_ṅ</button>
		<button @click="D_to_dd">D_to_ꟈ</button>
		<button @click="T_to_tt">T_to_τ</button>
	  </div>
      <div>
		English_to_iṅglish(AaDHNT c wjq -> aαꟈɦṅτ ꞇ ⱱźƙ):<br/>
		<button @click="Aa_to_aa">Aa_to_α</button>
		<button @click="Nn_to_nn">Nn_to_ṅ</button>
		<button @click="Hh_to_hh">Hh_to_ɦ</button>
		<button @click="Ww_to_vv">Ww_to_ⱱ</button>
		<button @click="Jj_to_zz">Jj_to_ź</button>
		<button @click="Qq_to_kk">Qq_to_ƙ</button>
		<button @click="Cc_to_cc">Cc_to_ꞇ</button>
	  </div>
      <div>
		iṅglish_to_English:<br/>
		<button @click="cc_to_c">ꞇ_to_c</button>
		<button @click="aa_to_a">α_to_a</button>
		<button @click="a_to_A">a_to_A</button>
		<button @click="nn_to_n">ṅ_to_n</button>
		<button @click="ww_to_w">ⱱ_to_w</button>
		<button @click="aacc_to_ac">αꞇ_to_ac</button>
		<button @click="acnw_to_acnw">αꞇṅⱱ_to_acnw</button>
	  </div>
      <div>
            <pre>{{ otekst }}</pre>
      </div>
            <div class="hidan">
	   <button @click="i_to_ilmlyalm_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; അദഹത ബഡഫ zജകk ലമനര പസt വvxയ">i_to_മലയαലമ</button>
	   <button @click="i_to_iltmil_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; அDஹத bdf zஜகk லமநர பஸட வvxய">i_to_தமiல</button>
	   <button @click="i_to_iltelugu_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; అదహత బడఫ zజకk లమనర పసట వvxయ">i_to_తeలugu</button>
	   <button @click="i_to_ilknrra_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; ಅದಹತ ಬಡಫ zಜಕk ಲಮನರ ಪಸಟ ವvxಯ">i_to_kನರರα</button>
	   <button @click="i_to_ilguzrati_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; અદહત બડફ zજકk લમનર પસટ વvxય">i_to_guzરαતi</button>
	   <button @click="i_to_ilhin_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; अदहत बडफ zजकk लमनर पसट वvxय">i_to_हiनदi</button>
	   <button @click="i_to_ilsinh_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; අදහත බඩඵ zzkk ලමනර පසට vwxය">i_to_හiනhαලα</button>
	   <button @click="i_to_ilpnz_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; ਅਦਹਤ ਬਡਫ zਜਕk ਲਮਨਰ ਪਸਟ ਵvxਯ">i_to_ਪਨzαਬi</button>
	   <button @click="i_to_ilbngali_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; অদহত বডফ zজকk লমনর পসট vvxয">i_to_বṅgαলi</button>
	   <button @click="i_to_ilodia_click" title="ADHT bdf jzkq lmnr pst vwxy->&#010; ଅଦହତ ବଡଫ zଜକk ଲମନର ପସଟ ଵvxଯ">i_to_oଡiα</button>
      </div>
      <div class="hidan">		
		<button @click="u_to_u8hin_click" title="हिंदी বাংলা ગુજરાતી ਗੁਰੂਮੁਖੀ ଓଡିଆ தமிழ் తెలుగు ಕನ್ನಡ മലയാളം->&#010; हiनदi बaनलa guजरaतi guरuमuकhi oडiअa तमiललल तeiलugu कननड मलयaलल">u_to_हiनदi</button>		
		<button @click="u_to_u8bngali_click" title="বাংলা हिंदी ગુજરાતી ਗੁਰੂਮੁਖੀ ଓଡିଆ தமிழ் తెలుగు ಕನ್ನಡ മലയാളം->&#010; বaনলa হiনদi guজরaতi guরuমuকhi oডiঅa তমiললল তeiলugu কননড মলযaলল">u_to_বṅgαলi</button>
		<button @click="u_to_u8pnz_click" title="ਗੁਰੂਮੁਖੀ বাংলা हिंदी ગુજરાતી ଓଡିଆ தமிழ் తెలుగు ಕನ್ನಡ മലയാളം->&#010; guਰuਮuਕhi ਬaਨਲa ਹiਨਦi guਜਰaਤi oਡiਅa ਤਮiਲਲਲ ਤeiਲugu ਕਨਨਡ ਮਲਯaਲਲ">u_to_ਪਨzαਬi</button>
		<button @click="u_to_u8guzrati_click" title="ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी ଓଡିଆ தமிழ் తెలుగు ಕನ್ನಡ മലയാളം->&#010; guજરaતi guરuમuકhi બaનલa હiનદi oડiઅa તમiલલલ તeiલugu કનનડ મલયaલલ">u_to_guzરαતi</button>
		<button @click="u_to_u8odia_click" title="ଓଡିଆ ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी தமிழ் తెలుగు ಕನ್ನಡ മലയാളം->&#010; oଡiଅa guଜରaତi guରuମuକhi ବaନଲa ହiନଦi ତମiଲଲଲ ତeiଲugu କନନଡ ମଲଯaଲଲ">u_to_oଡiα</button>
		<button @click="u_to_u8tmil_click" title="தமிழ் ଓଡିଆ ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी తెలుగు ಕನ್ನಡ മലയാളം->&#010; தਮiலலல odiஅa guஜரaதi guரuਮuகhi baநலa ஹiநDi தeiலugu கநநd ਮலயaலல">u_to_தமiல</button>
		<button @click="u_to_u8telugu_click" title="తెలుగు தமிழ் ଓଡିଆ ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी ಕನ್ನಡ മലയാളം->&#010; తeiలugu తమiలలల oడiఅa guజరaతi guరuమuకhi బaనలa హiనదi కననడ మలయaలల">u_to_తeలugu</button>
		<button @click="u_to_u8knrra_click" title="ಕನ್ನಡ తెలుగు தமிழ் ଓଡିଆ ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी മലയാളം->&#010; ಕನನಡ ತeiಲugu ತಮiಲಲಲ oಡiಅa guಜರaತi guರuಮuಕhi ಬaನಲa ಹiನದi ಮಲಯaಲಲ">u_to_kನರರα</button>
		<button @click="u_to_u8mlyalm_click" title="മലയാളം ಕನ್ನಡ తెలుగు தமிழ் ଓଡିଆ ગુજરાતી ਗੁਰੂਮੁਖੀ বাংলা हिंदी->&#010; മലയaലല കനനഡ തeiലugu തമiലലല oഡiഅa guജരaതi guരuമuകhi ബaനലa ഹiനദi">u_to_മലയαലമ</button>
		<button @click="u_to_a_click" title="unicode to modern_english(kvzADHT)">u_to_iṅg</button>
      </div>
	  <div class="hidan">
		  <button @click="i_to_all_click" title="">i_to_all</button>
		  <button @click="ui_to_hin_click">ui_to_हiन</button>
		  <button @click="i_to_small">ABC_to_abc</button>
		  <button @click="i_to_caps">abc_to_ABC</button>
	  </div>
	  <div class="hidan">
		<button @click="jq_to_zk">jq_to_zk</button>
		<button @click="w_to_vzyuz">w_to_vzyuz</button>
		<button @click="jqw_hin_to_zkv">जकव_to_zkv</button>
		<button @click="n_to_null">n_to_null</button>
		<button @click="x_to_z">x_to_z</button>
		<button @click="macron_to_abc">மacரoந_டo_abc</button>	  
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
 .bggreen {
	background-color: #0f0;
 }
 .hidan {visibility: hidden;}
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

