const u_to_u8hin_dict = {
  all_phoniks_list: [
    'N', // 	ऀ	900	2304		inverted candrabindu
    'N', // 	ँ	901	2305		anunasika(candrabindu)
    'N', // 	ं	902	2306	anuswara	anusvara bindu
    'अ', // 	ः	903	2307		visarga
    'अe', // 	ऄ	904	2308		short a ,  e in awadh
    'अ', // 	अ	905	2309	vovls
    'अa', // 	आ	906	2310	vovls
    'i', // 	इ	907	2311	vovls
    'i', // 	ई	908	2312	vovls
    'u', // 	उ	909	2313	vovls
    'u', // 	ऊ	90A	2314	vovls
    'रi', // 	ऋ	90B	2315	vovls
    'लi', // 	ऌ	90C	2316	vovls
    'अ', // 	ऍ	90D	2317	no	candra e
    'e', // 	ऎ	90E	2318	no	short e
    'e', // 	ए	90F	2319	vovls
    'e', // 	ऐ	910	2320	vovls
    'अao', // 	ऑ	911	2321		candra o
    'o', // 	ऒ	912	2322		short o
    'o', // 	ओ	913	2323
    'अo', // 	औ	914	2324
    'क', // 	क	915	2325
    'कh', // 	ख	916	2326
    'g', // 	ग	917	2327
    'gh', // 	घ	918	2328
    'Ng', // 	ङ	919	2329
    'c', // 	च	91A	2330
    'ch', // 	छ	91B	2331
    'ज', // 	ज	91C	2332
    'जh', // 	झ	91D	2333
    'नय', // 	ञ	91E	2334		nya
    'ट', // 	ट	91F	2335
    'टh', // 	ठ	920	2336
    'ड', // 	ड	921	2337
    'डh', // 	ढ	922	2338
    'न', // 	ण	923	2339		nna
    'त', // 	त	924	2340
    'तh', // 	थ	925	2341
    'द', // 	द	926	2342
    'दh', // 	ध	927	2343
    'न', // 	न	928	2344
    'ननA', // 	ऩ	929	2345		nnna
    'प', // 	प	92A	2346
    'फ', // 	फ	92B	2347
    'ब', // 	ब	92C	2348
    'बh', // 	भ	92D	2349
    'म', // 	म	92E	2350
    'य', // 	य	92F	2351
    'र', // 	र	930	2352
    'रर', // 	ऱ	931	2353		rra
    'ल', // 	ल	932	2354
    'लल', // 	ळ	933	2355		lla
    'ललल', // 	ऴ	934	2356		llla
    'व', // 	व	935	2357
    'सh', // 	श	936	2358
    'सh', // 	ष	937	2359
    'स', // 	स	938	2360
    'ह', // 	ह	939	2361
    'oe', // 	ऺ	93A	2362		oe
    'ui', // 	ऻ	93B	2363		ooe
    '', // 	़	93C	2364		nukta for extending the alphabet to new letters
    '!', // 	ऽ	93D	2365		Avagraha
    'a', // 	ा	93E	2366	vvs
    'i', // 	ि	93F	2367	vvs
    'i', // 	ी	940	2368	vvs
    'u', // 	ु	941	2369	vvs
    'u', // 	ू	942	2370	vvs
    'रi', // 	ृ	943	2371	vvs
    'ररi', // 	ॄ	944	2372
    'e', // 	ॅ	945	2373		candra e
    'ei', // 	ॆ	946	2374		short e
    'e', // 	े	947	2375
    'ei', // 	ै	948	2376
    'o', // 	ॉ	949	2377		candra o
    'oe', // 	ॊ	94A	2378		short o
    'o', // 	ो	94B	2379	vvs
    'o', // 	ौ	94C	2380	vvs
    '', // 	्	94D	2381	virama	VIRAMA halant suppresses inherent vowel
    '', // 	ॎ	94E	2382		prishthamatra e , combines with e to form ai, with aa to form o,and with o to form au
    'अo', // 	ॏ	94F	2383		aw
    'oम', // 	ॐ	950	2384
    '', // 	॑	951	2385		stress sign udatta, vedic tone svarita
    '', // 	॒	952	2386		anudatta
    '`', // 	॓	953	2387		grave accent
    '\'', // 	॔	954	2388		acute accent
    'eei', // 	ॕ	955	2389		vowel sign candra long e
    'ui', // 	ॖ	956	2390		vowel sign ue
    'uui', // 	ॗ	957	2391		vowel sign uue
    'क', // 	क़	958	2392
    'कh', // 	ख़	959	2393
    'g', // 	ग़	95A	2394
    'ज', // 	ज़	95B	2395
    'रर', // 	ड़	95C	2396
    'डh', // 	ढ़	95D	2397
    'पh', // 	फ़	95E	2398
    'य', // 	य़	95F	2399
    'रi', // 	ॠ	960	2400
    'ललi', // 	ॡ	961	2401
    'लi', // 	ॢ	962	2402
    'ललi', // 	ॣ	963	2403
    '.', // 	।	964	2404
    '.', // 	॥	965	2405
    '0', // 	०	966	2406
    '1', // 	१	967	2407
    '2', // 	२	968	2408
    '3', // 	३	969	2409
    '4', // 	४	96A	2410
    '5', // 	५	96B	2411
    '6', // 	६	96C	2412
    '7', // 	७	96D	2413
    '8', // 	८	96E	2414
    '9', // 	९	96F	2415
    '_', // 	॰	970	2416		abbreviation sign
    '__', // 	ॱ	971	2417		high spacing dot
    'अ', // 	ॲ	972	2418		A
    'अo', // 	ॳ	973	2419		o
    'अe', // 	ॴ	974	2420		oe
    'अo', // 	ॵ	975	2421		ao
    'अi', // 	ॶ	976	2422		ui
    'अui', // 	ॷ	977	2423		uui
    'ड', // 	ॸ	978	2424		d
    'ज', // 	ॹ	979	2425		z
    'य', // 	ॺ	97A	2426		y
    'न', // 	ॻ	97B	2427		n
    'ज', // 	ॼ	97C	2428		z
    '?', // 	ॽ	97D	2429		?
    'ड', // 	ॾ	97E	2430		d
    'ब', // 	ॿ	97F	2431		b
],
// consonants_modulo_range : [ 0x15, 0x39 ],
  hard_consonants_modulo_list : [
    0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
  ],
  vovli_modulo_list : [
    0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
  ],
};
export function u_to_u8hin (input,isa8) {
  function is_in_it (list, val) {
    if (!Array.isArray(list)) { list = Object.keys(list); }
    return list.indexOf(val) !== -1;
  }
  const inputLength = input.length;
  let indeks = 0;
  let output = '';
  let curr_char = ''; let nekst_char = ''; // let prev_char = ''; 
  let curr_char_code = 0; let nekst_char_code = 0; // let prev_char_code = 0; 
  let prev_lang_code = 0; let curr_lang_code = 0; let nekst_lang_code = 0;
  let prev_char_modulo = 0; let curr_char_modulo = 0; let nekst_char_modulo = 0;
  // alert("u_to_u8hin_dict");
  // let u_to_u8hin_dict = u_to_u8hin_dict;
  while (indeks < inputLength) {
    if (0 === indeks) {
      prev_lang_code= curr_lang_code ; // prev_char = curr_char ; 
      prev_char_modulo = curr_char_modulo; // prev_char_code = curr_char_code ;
      curr_char = input[indeks];
      curr_char_code = curr_char.charCodeAt();
      curr_lang_code = (curr_char_code/0x80)>>0 ;
      curr_char_modulo = curr_char_code % 0x80 ;
    }
    else {
      prev_lang_code= curr_lang_code ; // prev_char = curr_char ;
      prev_char_modulo = curr_char_modulo; // prev_char_code = curr_char_code ;
      curr_char = nekst_char ;
      curr_char_code = curr_char.charCodeAt();
      curr_lang_code = (curr_char_code/0x80)>>0 ;
      curr_char_modulo = curr_char_code % 0x80 ;
    }
    nekst_char = input[indeks + 1];
    if(indeks+1 < inputLength) {
      nekst_char_code = nekst_char.charCodeAt();
      nekst_lang_code = (nekst_char_code/0x80)>>0 ;
      nekst_char_modulo = nekst_char_code % 0x80 ;
    }
    else {
      nekst_char_code = -1 ;
      nekst_lang_code = -1 ;
      nekst_char_modulo = -1 ;
    }
    if (curr_lang_code>0x11 && curr_lang_code<0x1B) {
      // 'H', // 	ह	939	2361
      if( 0x39 === curr_char_modulo ) {
        if(
          prev_lang_code>0x11 && prev_lang_code<0x1B &&
          is_in_it(u_to_u8hin_dict.hard_consonants_modulo_list, prev_char_modulo)
        ) {
           if(isa8) output += 'j'; else output += 'ह';
          }
        else {
          if(isa8) output += 'j'; else output += 'ह';
         }
      }
      else if(2 == curr_char_modulo){ // 'मां: ऐस्पिरेंट्स में गुरी' : 'ma: espireNts mein guri', //  ं	902 anuswara	anusvara bindu
        if( nekst_lang_code>0x11 && nekst_lang_code<0x1B && 2 < nekst_char_modulo )
        {
          output += 'न';
        }
      }
      else if (is_in_it([7,8,9,0xA,0xD,0xE,0xF,0x10,0x13,0x14],curr_char_modulo)) { //'kAi'
        if ( prev_lang_code>0 && prev_char_modulo > 0x14 && prev_char_modulo < 0x3A)
        {
          if(isa8) output += 'q'; else output += 'अ';
         }
        output += u_to_u8hin_dict.all_phoniks_list[curr_char_modulo];
      }
      else { output += u_to_u8hin_dict.all_phoniks_list[curr_char_modulo]; }
      indeks++ ;
    } // end oph indik lang iph
    else {
      output += curr_char;
      indeks++ ;
    }
  }
  //alert(output);
  if(isa8) output = output.toLowerCase();
  return output;
}
// export default u_to_u8hin
