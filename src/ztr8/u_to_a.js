const u_to_a_dict = {
  all_phoniks_list: [
    'N', // 	ऀ	900	2304		inverted candrabindu
    'N', // 	ँ	901	2305		anunasika(candrabindu)
    'N', // 	ं	902	2306	anuswara	anusvara bindu
    'A', // 	ः	903	2307		visarga
    'Ae', // 	ऄ	904	2308		short a ,  e in awadh
    'A', // 	अ	905	2309	vovls
    'Aa', // 	आ	906	2310	vovls
    'i', // 	इ	907	2311	vovls
    'i', // 	ई	908	2312	vovls
    'u', // 	उ	909	2313	vovls
    'u', // 	ऊ	90A	2314	vovls
    'ri', // 	ऋ	90B	2315	vovls
    'li', // 	ऌ	90C	2316	vovls
    'A', // 	ऍ	90D	2317	no	candra e
    'e', // 	ऎ	90E	2318	no	short e
    'e', // 	ए	90F	2319	vovls
    'e', // 	ऐ	910	2320	vovls
    'Aao', // 	ऑ	911	2321		candra o
    'o', // 	ऒ	912	2322		short o
    'o', // 	ओ	913	2323
    'Ao', // 	औ	914	2324
    'k', // 	क	915	2325
    'kh', // 	ख	916	2326
    'g', // 	ग	917	2327
    'gh', // 	घ	918	2328
    'Ng', // 	ङ	919	2329
    'c', // 	च	91A	2330
    'ch', // 	छ	91B	2331
    'z', // 	ज	91C	2332
    'zh', // 	झ	91D	2333
    'nय', // 	ञ	91E	2334		nya
    't', // 	ट	91F	2335
    'th', // 	ठ	920	2336
    'd', // 	ड	921	2337
    'dh', // 	ढ	922	2338
    'n', // 	ण	923	2339		nna
    'T', // 	त	924	2340
    'Th', // 	थ	925	2341
    'D', // 	द	926	2342
    'Dh', // 	ध	927	2343
    'n', // 	न	928	2344
    'nnA', // 	ऩ	929	2345		nnna
    'p', // 	प	92A	2346
    'f', // 	फ	92B	2347
    'b', // 	ब	92C	2348
    'bh', // 	भ	92D	2349
    'm', // 	म	92E	2350
    'y', // 	य	92F	2351
    'r', // 	र	930	2352
    'rr', // 	ऱ	931	2353		rra
    'l', // 	ल	932	2354
    'll', // 	ळ	933	2355		lla
    'lll', // 	ऴ	934	2356		llla
    'v', // 	व	935	2357
    'sh', // 	श	936	2358
    'sh', // 	ष	937	2359
    's', // 	स	938	2360
    'H', // 	ह	939	2361
    'oe', // 	ऺ	93A	2362		oe
    'ui', // 	ऻ	93B	2363		ooe
    '', // 	़	93C	2364		nukta for extending the alphabet to new letters
    '!', // 	ऽ	93D	2365		Avagraha
    'a', // 	ा	93E	2366	vvs
    'i', // 	ि	93F	2367	vvs
    'i', // 	ी	940	2368	vvs
    'u', // 	ु	941	2369	vvs
    'u', // 	ू	942	2370	vvs
    'ri', // 	ृ	943	2371	vvs
    'rri', // 	ॄ	944	2372
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
    'Ao', // 	ॏ	94F	2383		aw
    'om', // 	ॐ	950	2384
    '', // 	॑	951	2385		stress sign udatta, vedic tone svarita
    '', // 	॒	952	2386		anudatta
    '`', // 	॓	953	2387		grave accent
    '\'', // 	॔	954	2388		acute accent
    'eei', // 	ॕ	955	2389		vowel sign candra long e
    'ui', // 	ॖ	956	2390		vowel sign ue
    'uui', // 	ॗ	957	2391		vowel sign uue
    'k', // 	क़	958	2392
    'kh', // 	ख़	959	2393
    'g', // 	ग़	95A	2394
    'z', // 	ज़	95B	2395
    'rr', // 	ड़	95C	2396
    'dh', // 	ढ़	95D	2397
    'ph', // 	फ़	95E	2398
    'y', // 	य़	95F	2399
    'ri', // 	ॠ	960	2400
    'lli', // 	ॡ	961	2401
    'li', // 	ॢ	962	2402
    'lli', // 	ॣ	963	2403
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
    'A', // 	ॲ	972	2418		A
    'Ao', // 	ॳ	973	2419		o
    'Ae', // 	ॴ	974	2420		oe
    'Ao', // 	ॵ	975	2421		ao
    'Ai', // 	ॶ	976	2422		ui
    'Aui', // 	ॷ	977	2423		uui
    'd', // 	ॸ	978	2424		d
    'z', // 	ॹ	979	2425		z
    'y', // 	ॺ	97A	2426		y
    'n', // 	ॻ	97B	2427		n
    'z', // 	ॼ	97C	2428		z
    '?', // 	ॽ	97D	2429		?
    'd', // 	ॾ	97E	2430		d
    'b', // 	ॿ	97F	2431		b
],
// consonants_modulo_range : [ 0x15, 0x39 ],
  hard_consonants_modulo_list : [
    0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
  ],
  vovli_modulo_list : [
    0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
  ],
};
export function u_to_a (input,isa8) {
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
          is_in_it(u_to_a_dict.hard_consonants_modulo_list, prev_char_modulo)
        ) {
           if(isa8) output += 'j'; else output += 'H';
          }
        else {
          if(isa8) output += 'j'; else output += 'H';
         }
      }
      else if(2 == curr_char_modulo){ // 'मां: ऐस्पिरेंट्स में गुरी' : 'ma: espireNts mein guri', //  ं	902 anuswara	anusvara bindu
        if( nekst_lang_code>0x11 && nekst_lang_code<0x1B && 2 < nekst_char_modulo )
        {
          output += 'n';
        }
      }
      else if (is_in_it([7,8,9,0xA,0xD,0xE,0xF,0x10,0x13,0x14],curr_char_modulo)) { //'kAi'
        if ( prev_lang_code>0 && prev_char_modulo > 0x14 && prev_char_modulo < 0x3A)
        {
          if(isa8) output += 'q'; else output += 'A';
         }
        output += u_to_a_dict.all_phoniks_list[curr_char_modulo];
      }
      else { output += u_to_a_dict.all_phoniks_list[curr_char_modulo]; }
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
// export default u_to_a
