const u_to_u8odia_dict = {
  all_phoniks_list: [
    'N', // 	ऀ	900	2304		inverted candrabindu
    'N', // 	ँ	901	2305		anunasika(candrabindu)
    'N', // 	ं	902	2306	anuswara	anusvara bindu
    'ଅ', // 	ः	903	2307		visarga
    'ଅe', // 	ऄ	904	2308		short a ,  e in awadh
    'ଅ', // 	ଅ	905	2309	vovls
    'ଅa', // 	आ	906	2310	vovls
    'i', // 	इ	907	2311	vovls
    'i', // 	ई	908	2312	vovls
    'u', // 	उ	909	2313	vovls
    'u', // 	ऊ	90A	2314	vovls
    'ରi', // 	ऋ	90B	2315	vovls
    'ଲi', // 	ऌ	90C	2316	vovls
    'ଅ', // 	ऍ	90D	2317	no	candra e
    'e', // 	ऎ	90E	2318	no	short e
    'e', // 	ए	90F	2319	vovls
    'e', // 	ऐ	910	2320	vovls
    'ଅao', // 	ऑ	911	2321		candra o
    'o', // 	ऒ	912	2322		short o
    'o', // 	ओ	913	2323
    'ଅo', // 	औ	914	2324
    'କ', // 	କ	915	2325
    'କh', // 	ख	916	2326
    'g', // 	ग	917	2327
    'gh', // 	घ	918	2328
    'Ng', // 	ङ	919	2329
    'c', // 	च	91A	2330
    'ch', // 	छ	91B	2331
    'ଜ', // 	ଜ	91C	2332
    'ଜh', // 	झ	91D	2333
    'ନଯ', // 	ञ	91E	2334		nya
    'ଟ', // 	ଟ	91F	2335
    'ଟh', // 	ठ	920	2336
    'ଡ', // 	ଡ	921	2337
    'ଡh', // 	ढ	922	2338
    'ନ', // 	ण	923	2339		nna
    'ତ', // 	ତ	924	2340
    'ତh', // 	थ	925	2341
    'ଦ', // 	ଦ	926	2342
    'ଦh', // 	ध	927	2343
    'ନ', // 	ନ	928	2344
    'ନନA', // 	ऩ	929	2345		nnna
    'ପ', // 	ପ	92A	2346
    'ଫ', // 	ଫ	92B	2347
    'ବ', // 	ବ	92C	2348
    'ବh', // 	भ	92D	2349
    'ମ', // 	ମ	92E	2350
    'ଯ', // 	ଯ	92F	2351
    'ର', // 	ର	930	2352
    'ରର', // 	ऱ	931	2353		rra
    'ଲ', // 	ଲ	932	2354
    'ଲଲ', // 	ळ	933	2355		lla
    'ଲଲଲ', // 	ऴ	934	2356		llla
    'ଵ', // 	ଵ	935	2357
    'ସh', // 	श	936	2358
    'ସh', // 	ष	937	2359
    'ସ', // 	ସ	938	2360
    'ହ', // 	ହ	939	2361
    'oe', // 	ऺ	93A	2362		oe
    'ui', // 	ऻ	93B	2363		ooe
    '', // 	़	93C	2364		nukta for extending the alphabet to new letters
    '!', // 	ऽ	93D	2365		Avagraha
    'a', // 	ा	93E	2366	vvs
    'i', // 	ि	93F	2367	vvs
    'i', // 	ी	940	2368	vvs
    'u', // 	ु	941	2369	vvs
    'u', // 	ू	942	2370	vvs
    'ରi', // 	ृ	943	2371	vvs
    'ରରi', // 	ॄ	944	2372
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
    'ଅo', // 	ॏ	94F	2383		aw
    'oମ', // 	ॐ	950	2384
    '', // 	॑	951	2385		stress sign udatta, vedic tone svarita
    '', // 	॒	952	2386		anudatta
    '`', // 	॓	953	2387		grave accent
    '\'', // 	॔	954	2388		acute accent
    'eei', // 	ॕ	955	2389		vowel sign candra long e
    'ui', // 	ॖ	956	2390		vowel sign ue
    'uui', // 	ॗ	957	2391		vowel sign uue
    'କ', // 	क़	958	2392
    'କh', // 	ख़	959	2393
    'g', // 	ग़	95A	2394
    'ଜ', // 	ज़	95B	2395
    'ରର', // 	ड़	95C	2396
    'ଡh', // 	ढ़	95D	2397
    'ପh', // 	फ़	95E	2398
    'ଯ', // 	य़	95F	2399
    'ରi', // 	ॠ	960	2400
    'ଲଲi', // 	ॡ	961	2401
    'ଲi', // 	ॢ	962	2402
    'ଲଲi', // 	ॣ	963	2403
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
    'ଅ', // 	ॲ	972	2418		A
    'ଅo', // 	ॳ	973	2419		o
    'ଅe', // 	ॴ	974	2420		oe
    'ଅo', // 	ॵ	975	2421		ao
    'ଅi', // 	ॶ	976	2422		ui
    'ଅui', // 	ॷ	977	2423		uui
    'ଡ', // 	ॸ	978	2424		d
    'ଜ', // 	ॹ	979	2425		z
    'ଯ', // 	ॺ	97A	2426		y
    'ନ', // 	ॻ	97B	2427		n
    'ଜ', // 	ॼ	97C	2428		z
    '?', // 	ॽ	97D	2429		?
    'ଡ', // 	ॾ	97E	2430		d
    'ବ', // 	ॿ	97F	2431		b
],
// consonants_modulo_range : [ 0x15, 0x39 ],
  hard_consonants_modulo_list : [
    0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
  ],
  vovli_modulo_list : [
    0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
  ],
};
export function u_to_u8odia(input,isa8) { //alert("in u_to_u8odia");
  function is_in_it (list, val) {
    if (!Array.isArray(list)) { list = Object.keys(list); }
    return list.indexOf(val) !== -1;
  }
  const inputLength = input.length; //alert(inputLength);
  let indeks = 0;
  let output = '';
  let curr_char = ''; let nekst_char = ''; // let prev_char = ''; 
  let curr_char_code = 0; let nekst_char_code = 0; // let prev_char_code = 0; 
  let prev_lang_code = 0; let curr_lang_code = 0; let nekst_lang_code = 0;
  let prev_char_modulo = 0; let curr_char_modulo = 0; let nekst_char_modulo = 0;
  // alert("u_to_u8odia_dict");
  // let u_to_u8odia_dict = u_to_u8odia_dict;
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
      // 'H', // 	ହ	939	2361
      if( 0x39 === curr_char_modulo ) {
        if(
          prev_lang_code>0x11 && prev_lang_code<0x1B &&
          is_in_it(u_to_u8odia_dict.hard_consonants_modulo_list, prev_char_modulo)
        ) {
           if(isa8) output += 'j'; else output += 'ହ';
          }
        else {
          if(isa8) output += 'j'; else output += 'ହ';
         }
      }
      else if(2 == curr_char_modulo){ 
	  //  ं	902 anuswara	anusvara bindu
        if( nekst_lang_code>0x11 && nekst_lang_code<0x1B && 2 < nekst_char_modulo )
        {
          output += 'ନ';
        }
      }
      else if (is_in_it([7,8,9,0xA,0xD,0xE,0xF,0x10,0x13,0x14],curr_char_modulo)) { //'kAi'
        if ( prev_lang_code>0 && prev_char_modulo > 0x14 && prev_char_modulo < 0x3A)
        {
          if(isa8) output += 'q'; else output += 'ଅ';
         }
        output += u_to_u8odia_dict.all_phoniks_list[curr_char_modulo];
      }
      else { output += u_to_u8odia_dict.all_phoniks_list[curr_char_modulo]; }
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
//module.exports = u_to_u8odia
