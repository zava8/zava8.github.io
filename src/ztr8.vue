<script setup>
import { ref } from 'vue'
import { ue_to_il } from './ztr8/ue_to_il.js'
import { u_to_i } from './ztr8/u_to_i.js'
import * as e_to_i from './ztr8/e_to_i.js'
import * as duztr from './ztr8/duztr.js'
////////////////
const itekst = ref(
`small_English(26) = singlish(26) : a-z
india_iṅglish(31) = a-z + 5àđнтṅ
cricket_zileven indiàn_làṅguàges_zileven chàràcters 6yrlmnf5tdpbs:
	0. a-z + 5àđнтṅ -> font ing115.ttf
	1. 6यरलमनफ5टडपबस -> font hin115.ttf
	2. 6যরলমনফ5টডপবস -> ফoনট baṅgla115.ttf
	3. 6ਯਰਲਮਨਫ5ਟਡਪਬਸ -> ਫoਨਟ gurumukhi115.ttf
	4. 6યરલમનફ5ટડપબસ -> ફoનટ gujraᴛi115.ttf
	5. 6ଯରଲମନଫ5ଟଡପବସ -> ଫoନଟ odia115.ttf
	6. 6யரலமநf5டdபbஸ -> foநட ᴛàmil115.ttf
	7. 6యరలమనఫ5టడపబస -> ఫoనట ᴛelugu115.ttf
	8. 6ಯರಲಮನಫ5ಟಡಪಬಸ -> ಫoನಟ kànnàda115.ttf
	9. 6യരലമനഫ5tഡപബസ -> ഫoനt màlàyalàm115.ttf
	L. 6යරලමනඵ5ටඩපබස -> ඵoනට sinhàla115.ttf
	J. 6y라lㅁㄴf5ㅌ다ㅍ바ㅅ -> foㄴㅌ koreàn115.ttf
	B. 6йрлмнф5тдпБс -> фoнт russiàn115.ttf
	W.
	E.
	F.
	10.
8aiueoꞇgh_8àđнтṅkvz 6yrlmnf5tdpbs(th dh ph bh sh). त=ᴛ≠t
`
);
const otekst = ref("");
const ztrdir = ref("");
const olc = ref(0);
const ioz = { i: itekst , o: otekst , z: ztrdir } ;
function itekst_on_input() { duztr.doztr(ioz); }
function ztrdir_changed() { duztr.doztr(ioz); }
function i_to_small() { itekst.value = itekst.value.toLowerCase(); }
//function jq_to_zk() { itekst.value = itekst.value.replaceAll('j','z').replaceAll('q','k'); }

// ////////English_to_нiṅglish (ANHDT->अṅहदत)
function EtoH_A() { itekst.value = itekst.value.replaceAll('A','अ'); }
function EtoH_H() { itekst.value = itekst.value.replaceAll('H','ह'); }
function EtoH_D() { itekst.value = itekst.value.replaceAll('D','द'); }
function EtoH_T() { itekst.value = itekst.value.replaceAll('T','त'); }
function EtoH5() {
	itekst.value = itekst.value.replaceAll(
		'A','अ').replaceAll(
		'N','ṅ').replaceAll(
		'H','ह').replaceAll(
		'D','द').replaceAll(
	'T','त');
}
// ////////English_to_iṅglish (AHNDT->àнṅꟈт)
function Etoi_A() { itekst.value = itekst.value.replaceAll('A','à'); }
function Etoi_H() { itekst.value = itekst.value.replaceAll('H','н'); }
function Etoi_N() { itekst.value = itekst.value.replaceAll('N','ṅ'); }
function Etoi_D() { itekst.value = itekst.value.replaceAll('D','đ'); } // ꟈ
function Etoi_T() { itekst.value = itekst.value.replaceAll('T','т'); }									
function Etoi_c() { itekst.value = itekst.value.replaceAll(/c/ig,'ꞇ'); }									
function Etoi6() {
	itekst.value = itekst.value.replaceAll(
		'A','à').replaceAll(
		'N','ṅ').replaceAll(
		'H','н').replaceAll(
		'D','đ').replaceAll(
		'T','т').replaceAll(
	/c/ig,'ꞇ');
}	
// ////////iṅglish31_to_English52 below ꟈᴀ
function itoE_A() { itekst.value = itekst.value.replaceAll('à','A').replaceAll('ᴀ','A'); }
function itoE_N() { itekst.value = itekst.value.replaceAll('ṅ','N'); }
function itoE_H() { itekst.value = itekst.value.replaceAll('н','H').replaceAll('ɦ','H'); }
function itoE_D() { itekst.value = itekst.value.replaceAll('đ','D').replaceAll('ꟈ','D'); }

function itoE_T() { itekst.value = itekst.value.replaceAll('ᴛ','T'); }
function itoE_c() { itekst.value = itekst.value.replaceAll('ꞇ','c'); }
function itoE6() {
	itekst.value = itekst.value.replaceAll(
		'à','A').replaceAll(
		'ᴀ','A').replaceAll(
		'ṅ','N').replaceAll(
		'н','H').replaceAll(
		'ɦ','H').replaceAll(
		'đ','D').replaceAll(
		'ꟈ','D').replaceAll(
		'т','T').replaceAll(
	'ꞇ','c');
}
// ////////iṅglish_to_English above
//////// i4i3
function D4toD3() { itekst.value = itekst.value.replaceAll('ꟈ','đ'); }
function D3toD4() { itekst.value = itekst.value.replaceAll('đ','ꟈ'); }
function H3toH4() { itekst.value = itekst.value.replaceAll('н','ɦ'); }
function H4toH3() { itekst.value = itekst.value.replaceAll('ɦ','н'); }
function A3toA4() { itekst.value = itekst.value.replaceAll('à','ᴀ'); }
function A4toA3() { itekst.value = itekst.value.replaceAll('ᴀ','à'); }
////////
//////// qvj kwz
function qtok() { itekst.value = itekst.value.replaceAll('q','k'); }
function wtov() { itekst.value = itekst.value.replaceAll('w','v'); }
function jtoz() { itekst.value = itekst.value.replaceAll('j','z'); }
function ktoq() { itekst.value = itekst.value.replaceAll('k','q'); }
function ztoj() { itekst.value = itekst.value.replaceAll('z','j'); }
function qvjtokwz() { itekst.value = itekst.value.replaceAll('q','k').replaceAll('v','w').replaceAll('j','z'); }
function kvztoqwj() { itekst.value = itekst.value.replaceAll('k','q').replaceAll('v','w').replaceAll('z','j'); }
////////
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
			<a href="https://t.me/zava810" target="blank">telegram</a>
			<a href="https://x.com/etphor" target="blank">x</a>
			<a href="https://fb.com/ztrabc" target="blank">fàꞇebook</a>    
			<a href="https://zava8.vercel.app" target="blank">login</a>    
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
		English52_to_нiṅglish31 (ANHDT->अṅहदत):<br/>
		<button @click="EtoH_A">A -> अ</button>
		<button @click="EtoH_H">H -> ह</button>
		<button @click="EtoH_D">D-> द</button>
		<button @click="EtoH_T">T -> त</button>
		<button @click="EtoH5">ANHDT -> अṅहदत</button>

	  </div>
      <div>
		English52_to_iṅglish31:(ANHDT->àṅнꟈᴛ ᴀ=A=à≠a):<br/>
		<button @click="Etoi_A">A -> à</button>
		<button @click="Etoi_N">N -> ṅ</button>
		<button @click="Etoi_H">H -> н</button>
		<button @click="Etoi_D">D -> đ</button>
		<button @click="Etoi_T">T -> т</button>
		<button @click="Etoi_c">Cc -> ꞇ</button>
		<button @click="Etoi6">ANHDTc -> àṅнđтꞇ</button>
	  </div>
      <div>
		iṅglish31_to_English52:(àṅнđᴛ->ANHDT ꟈ=D=đ≠d ɦ=н=H≠h):<br/>
		<button @click="itoE_A">à -> A</button>
		<button @click="itoE_N">ṅ -> N</button>
		<button @click="itoE_H">н -> H</button>
		<button @click="itoE_D">đ -> D</button>
		<button @click="itoE_T">т -> T</button>
		<button @click="itoE_c">ꞇ -> c</button>
		<button @click="itoE6">àṅнđтꞇ -> ANHDTc</button>
	  </div>
      <div>
		ꟈ=D=đ≠d ɦ=н=H≠h:<br/>
		<button @click="D4toD3">ꟈ -> đ</button>
		<button @click="D3toD4">đ -> ꟈ</button>
		<button @click="H3toH4">н -> ɦ</button>
		<button @click="H4toH3">ɦ -> н</button>
		<button @click="A3toA4">à -> ᴀ</button>
		<button @click="A4toA3">ᴀ -> à</button>
	  </div>
	  <div>
		w:wote crow what W(hex)=8+5=dblun=13(decimᴀl). z:zug zune zuly zileven=8+3=J(hex)=11(decimᴀl)<br/>
		k:kuick kuestion to kueen<br/>
		<button @click="wtov">w -> v</button>
		<button @click="qtok">q -> k</button>
		<button @click="jtoz">j -> z</button>
		<button @click="ztoj">z -> j</button>
		<button @click="qvjtokwz">qvj -> kwz</button>
		<button @click="ztoj">z -> j</button>
		<button @click="kvztoqwj">kvz -> qwj</button>
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
.bggreen {	background-color: #0f0; }
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

