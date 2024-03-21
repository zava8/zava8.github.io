const u_to_u8pnz_dict = {
  all_phoniks_list: [
    'N', // 	ऀ	900	2304		inverted candrabindu
    'N', // 	ँ	901	2305		anunasika(candrabindu)
    'N', // 	ं	902	2306	anuswara	anusvara bindu
    'ਅ', // 	ः	903	2307		visarga
    'ਅe', // 	ऄ	904	2308		short a ,  e in awadh
    'ਅ', // 	ਅ	905	2309	vovls
    'ਅa', // 	आ	906	2310	vovls
    'i', // 	इ	907	2311	vovls
    'i', // 	ई	908	2312	vovls
    'u', // 	उ	909	2313	vovls
    'u', // 	ऊ	90A	2314	vovls
    'ਰi', // 	ऋ	90B	2315	vovls
    'ਲi', // 	ऌ	90C	2316	vovls
    'ਅ', // 	ऍ	90D	2317	no	candra e
    'e', // 	ऎ	90E	2318	no	short e
    'e', // 	ए	90F	2319	vovls
    'e', // 	ऐ	910	2320	vovls
    'ਅao', // 	ऑ	911	2321		candra o
    'o', // 	ऒ	912	2322		short o
    'o', // 	ओ	913	2323
    'ਅo', // 	औ	914	2324
    'ਕ', // 	ਕ	915	2325
    'ਕh', // 	ख	916	2326
    'g', // 	ग	917	2327
    'gh', // 	घ	918	2328
    'Ng', // 	ङ	919	2329
    'c', // 	च	91A	2330
    'ch', // 	छ	91B	2331
    'ਜ', // 	ਜ	91C	2332
    'ਜh', // 	झ	91D	2333
    'ਨਯ', // 	ञ	91E	2334		nya
    'ਟ', // 	ਟ	91F	2335
    'ਟh', // 	ठ	920	2336
    'ਡ', // 	ਡ	921	2337
    'ਡh', // 	ढ	922	2338
    'ਨ', // 	ण	923	2339		nna
    'ਤ', // 	ਤ	924	2340
    'ਤh', // 	थ	925	2341
    'ਦ', // 	ਦ	926	2342
    'ਦh', // 	ध	927	2343
    'ਨ', // 	ਨ	928	2344
    'ਨਨA', // 	ऩ	929	2345		nnna
    'ਪ', // 	ਪ	92A	2346
    'ਫ', // 	फ	92B	2347
    'ਬ', // 	ਬ	92C	2348
    'ਬh', // 	भ	92D	2349
    'ਮ', // 	ਮ	92E	2350
    'ਯ', // 	ਯ	92F	2351
    'ਰ', // 	ਰ	930	2352
    'ਰਰ', // 	ऱ	931	2353		rra
    'ਲ', // 	ਲ	932	2354
    'ਲਲ', // 	ळ	933	2355		lla
    'ਲਲਲ', // 	ऴ	934	2356		llla
    'ਵ', // 	ਵ	935	2357
    'ਸh', // 	श	936	2358
    'ਸh', // 	ष	937	2359
    'ਸ', // 	ਸ	938	2360
    'ਹ', // 	ਹ	939	2361
    'oe', // 	ऺ	93A	2362		oe
    'ui', // 	ऻ	93B	2363		ooe
    '', // 	़	93C	2364		nukta for extending the alphabet to new letters
    '!', // 	ऽ	93D	2365		Avagraha
    'a', // 	ा	93E	2366	vvs
    'i', // 	ि	93F	2367	vvs
    'i', // 	ी	940	2368	vvs
    'u', // 	ु	941	2369	vvs
    'u', // 	ू	942	2370	vvs
    'ਰi', // 	ृ	943	2371	vvs
    'ਰਰi', // 	ॄ	944	2372
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
    'ਅo', // 	ॏ	94F	2383		aw
    'oਮ', // 	ॐ	950	2384
    '', // 	॑	951	2385		stress sign udatta, vedic tone svarita
    '', // 	॒	952	2386		anudatta
    '`', // 	॓	953	2387		grave accent
    '\'', // 	॔	954	2388		acute accent
    'eei', // 	ॕ	955	2389		vowel sign candra long e
    'ui', // 	ॖ	956	2390		vowel sign ue
    'uui', // 	ॗ	957	2391		vowel sign uue
    'ਕ', // 	क़	958	2392
    'ਕh', // 	ख़	959	2393
    'g', // 	ग़	95A	2394
    'ਜ', // 	ज़	95B	2395
    'ਰਰ', // 	ड़	95C	2396
    'ਡh', // 	ढ़	95D	2397
    'ਪh', // 	फ़	95E	2398
    'ਯ', // 	य़	95F	2399
    'ਰi', // 	ॠ	960	2400
    'ਲਲi', // 	ॡ	961	2401
    'ਲi', // 	ॢ	962	2402
    'ਲਲi', // 	ॣ	963	2403
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
    'ਅ', // 	ॲ	972	2418		A
    'ਅo', // 	ॳ	973	2419		o
    'ਅe', // 	ॴ	974	2420		oe
    'ਅo', // 	ॵ	975	2421		ao
    'ਅi', // 	ॶ	976	2422		ui
    'ਅui', // 	ॷ	977	2423		uui
    'ਡ', // 	ॸ	978	2424		d
    'ਜ', // 	ॹ	979	2425		z
    'ਯ', // 	ॺ	97A	2426		y
    'ਨ', // 	ॻ	97B	2427		n
    'ਜ', // 	ॼ	97C	2428		z
    '?', // 	ॽ	97D	2429		?
    'ਡ', // 	ॾ	97E	2430		d
    'ਬ', // 	ॿ	97F	2431		b
],
// consonants_modulo_range : [ 0x15, 0x39 ],
  hard_consonants_modulo_list : [
    0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
  ],
  vovli_modulo_list : [
    0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
  ],
};
module.exports = u_to_u8pnz_dict
