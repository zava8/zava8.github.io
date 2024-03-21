const u_to_u8bngali_dict = {
  all_phoniks_list: [
    'N', // 	ऀ	900	2304		inverted candrabindu
    'N', // 	ँ	901	2305		anunasika(candrabindu)
    'N', // 	ं	902	2306	anuswara	anusvara bindu
    'অ', // 	ः	903	2307		visarga
    'অe', // 	ऄ	904	2308		short a ,  e in awadh
    'অ', // 	অ	905	2309	vovls
    'অa', // 	आ	906	2310	vovls
    'i', // 	इ	907	2311	vovls
    'i', // 	ई	908	2312	vovls
    'u', // 	उ	909	2313	vovls
    'u', // 	ऊ	90A	2314	vovls
    'রi', // 	ऋ	90B	2315	vovls
    'লi', // 	ऌ	90C	2316	vovls
    'অ', // 	ऍ	90D	2317	no	candra e
    'e', // 	ऎ	90E	2318	no	short e
    'e', // 	ए	90F	2319	vovls
    'e', // 	ऐ	910	2320	vovls
    'অao', // 	ऑ	911	2321		candra o
    'o', // 	ऒ	912	2322		short o
    'o', // 	ओ	913	2323
    'অo', // 	औ	914	2324
    'ক', // 	ক	915	2325
    'কh', // 	ख	916	2326
    'g', // 	ग	917	2327
    'gh', // 	घ	918	2328
    'Ng', // 	ङ	919	2329
    'c', // 	च	91A	2330
    'ch', // 	छ	91B	2331
    'জ', // 	জ	91C	2332
    'জh', // 	झ	91D	2333
    'নয', // 	ञ	91E	2334		nya
    'ট', // 	ট	91F	2335
    'টh', // 	ठ	920	2336
    'ড', // 	ড	921	2337
    'ডh', // 	ढ	922	2338
    'ন', // 	ण	923	2339		nna
    'ত', // 	ত	924	2340
    'তh', // 	थ	925	2341
    'দ', // 	দ	926	2342
    'দh', // 	ध	927	2343
    'ন', // 	ন	928	2344
    'ননA', // 	ऩ	929	2345		nnna
    'প', // 	প	92A	2346
    'ফ', // 	फ	92B	2347
    'ব', // 	ব	92C	2348
    'বh', // 	भ	92D	2349
    'ম', // 	ম	92E	2350
    'য', // 	য	92F	2351
    'র', // 	র	930	2352
    'রর', // 	ऱ	931	2353		rra
    'ল', // 	ল	932	2354
    'লল', // 	ळ	933	2355		lla
    'ললল', // 	ऴ	934	2356		llla
    'v', // 	v	935	2357
    'সh', // 	श	936	2358
    'সh', // 	ष	937	2359
    'স', // 	স	938	2360
    'হ', // 	হ	939	2361
    'oe', // 	ऺ	93A	2362		oe
    'ui', // 	ऻ	93B	2363		ooe
    '', // 	़	93C	2364		nukta for extending the alphabet to new letters
    '!', // 	ऽ	93D	2365		Avagraha
    'a', // 	ा	93E	2366	vvs
    'i', // 	ि	93F	2367	vvs
    'i', // 	ी	940	2368	vvs
    'u', // 	ु	941	2369	vvs
    'u', // 	ू	942	2370	vvs
    'রi', // 	ृ	943	2371	vvs
    'ররi', // 	ॄ	944	2372
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
    'অo', // 	ॏ	94F	2383		aw
    'oম', // 	ॐ	950	2384
    '', // 	॑	951	2385		stress sign udatta, vedic tone svarita
    '', // 	॒	952	2386		anudatta
    '`', // 	॓	953	2387		grave accent
    '\'', // 	॔	954	2388		acute accent
    'eei', // 	ॕ	955	2389		vowel sign candra long e
    'ui', // 	ॖ	956	2390		vowel sign ue
    'uui', // 	ॗ	957	2391		vowel sign uue
    'ক', // 	क़	958	2392
    'কh', // 	ख़	959	2393
    'g', // 	ग़	95A	2394
    'জ', // 	ज़	95B	2395
    'রর', // 	ड़	95C	2396
    'ডh', // 	ढ़	95D	2397
    'পh', // 	फ़	95E	2398
    'য', // 	य़	95F	2399
    'রi', // 	ॠ	960	2400
    'ললi', // 	ॡ	961	2401
    'লi', // 	ॢ	962	2402
    'ললi', // 	ॣ	963	2403
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
    'অ', // 	ॲ	972	2418		A
    'অo', // 	ॳ	973	2419		o
    'অe', // 	ॴ	974	2420		oe
    'অo', // 	ॵ	975	2421		ao
    'অi', // 	ॶ	976	2422		ui
    'অui', // 	ॷ	977	2423		uui
    'ড', // 	ॸ	978	2424		d
    'জ', // 	ॹ	979	2425		z
    'য', // 	ॺ	97A	2426		y
    'ন', // 	ॻ	97B	2427		n
    'জ', // 	ॼ	97C	2428		z
    '?', // 	ॽ	97D	2429		?
    'ড', // 	ॾ	97E	2430		d
    'ব', // 	ॿ	97F	2431		b
],
// consonants_modulo_range : [ 0x15, 0x39 ],
  hard_consonants_modulo_list : [
    0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
  ],
  vovli_modulo_list : [
    0x15, 0x17, 0x1A, 0x1C, 0x1F, 0x21, 0x24, 0x26, 0x2A, 0x2C, 0x37, 0x58, 0x5A, 0x5B, 0x79, 0x7C, 0x7E, 0x7F,
  ],
};
module.exports = u_to_u8bngali_dict
