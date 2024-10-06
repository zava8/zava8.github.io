// ñṅ
export const Nn_to_nn = function  (ioz){ ioz.i.value = ioz.i.value.replaceAll(
		/N/g,"n").replaceAll(
		/n([cgk])\b/ig,"ṅ$1").replaceAll(/\bn/ig,"ñ").replaceAll(
		/([a-z])nk/ig,"$1ṅk").replaceAll(/oung/ig,"ouṅg").replaceAll(
		/ginge/ig,"giñge").replaceAll(/([ht])inge/ig,"$1iñge").replaceAll(/([fyc])ring/ig,"$1riñg").replaceAll(
		/engin/ig,"eñgin").replaceAll(/ngth/ig,"ñgth").replaceAll(
		/ange([^dr])/ig,"añge$1").replaceAll(
		/\bt([ai])ng([ei])/ig,"t$1ñg$2").replaceAll(/\bangi/ig,"añgi").replaceAll(
		/inge/ig,"iñge").replaceAll(/ing/ig,"iṅg").replaceAll(
		/nge\b/ig,"ñge").replaceAll(
		/ngel/ig,"ñgel").replaceAll(/([dr])ang([ei])/ig,"$1añg$2").replaceAll(
		/([lv])eng/ig,"$1eñg").replaceAll(/chang([ei])/ig,"chañg$1").replaceAll(/sseng/ig,"sseñg").replaceAll(
		/nger/ig,"ṅger").replaceAll(
		/([a-z])ng/ig,"$1ṅg").replaceAll(
		/sync/ig,"syṅc").replaceAll(/anchor/ig,"aṅchor").replaceAll(/linco/ig,"liṅco").replaceAll(
		/sincl/ig,"siṅcl").replaceAll(
		/\buncle(s?)\b/ig,"uṅcle$1").replaceAll(/menco/ig,"meṅco").replaceAll(/([iu])nct/ig,"$1ṅct").replaceAll(
		/nc([hyei])/ig,"ñc$1").replaceAll(
		/inc([^hueioay])/ig,"iṅc$1").replaceAll(
		/inc([aeiou])/ig,"iñc$1").replaceAll(
		/([a-z])unc([^hyei])/ig,"$1uṅc$2").replaceAll(
		/enc([^eiyh])/ig,"eñc$1").replaceAll(
		/([ao])nc([^hyei])/ig,"$1ṅc$2").replaceAll(
		/ṅ/g,"N").replaceAll(/ñ/g,"n"
		);
}
// àα
export const Aa_to_aa = function (ioz){ ioz.i.value = ioz.i.value.replaceAll(
	/A/g,"a").replaceAll(
	/aft/ig,"αft").replaceAll(/aw([kf\s])/ig,"αw$1").replaceAll(
	/\bar([cekmst])\b/ig,"αr$1").replaceAll(/guar/ig,"guαr").replaceAll(
	/ijab/ig,"ijαb").replaceAll(/ebab/ig,"ebαb").replaceAll(
	/ihad/ig,"iɦαꟈ").replaceAll(/ebab/ig,"ebαb").replaceAll(
	/ia([ck])/ig,"iα$1").replaceAll(
	/\ba/ig,"à").replaceAll(
	/ai\b/g,"αi").replaceAll(
	/uar([bce-su-z])/ig,"uàr$1").replaceAll(
	/([a-z])a\b/ig,"$1α").replaceAll(
	/a([w])\b/ig,"α$1").replaceAll(
	/\ba([ntsmd])\b/ig,"à$1").replaceAll(
	/ar([aiey])/ig,"àr$1").replaceAll(
	/([^uheio\s])arre([^lasn])/ig,"$1αrre$2").replaceAll(
	/([eio\s])ar/ig,"$1àr").replaceAll(
	/i([lgn])ar([^y])/ig,"i$1αr$2").replaceAll(
	///////
	/([^beiuohlgn])ar([^y])/ig,"$1αr$2").replaceAll(
	/bar([^oiuer])/ig,"bαr$1").replaceAll(
	///////
	/era([\b\s])/ig,"erα$1").replaceAll(
	/([bcdfɦ\b\s])all([^yo])/ig,"$1αll$2").replaceAll(
	/ava/ig,"αvα").replaceAll(
	/([^\b\soe])ard/ig,"$1αrd").replaceAll(
	/([ag])raph/ig,"$1rαph").replaceAll(
	/las([skmt])/ig,'lαs$1');
}

export const Ww_to_vv = function (ioz){ ioz.i.value = ioz.i.value.replaceAll(
		/W/g,"w").replaceAll(
		/away/ig,"àⱱày").replaceAll(/war([ey])/ig,"ⱱàr$1").replaceAll(/wa([nrs])/ig,"ⱱα$1").replaceAll(
		/who/ig,"ẃɦo").replaceAll(/wr/ig,"ẃr").replaceAll(/\bw/ig,"ⱱ").replaceAll(
		/w\b/ig,"ẃ").replaceAll(
		/swer/ig,"sẃer").replaceAll(/two/ig,"tẃo").replaceAll(/([^aeo])w/ig,"$1ⱱ").replaceAll(
		/\baw([^efknr])/ig,"àⱱ$1").replaceAll(
		/aw([efknr])/ig,"αẃ$1").replaceAll(
		/([a-z])aw/ig,"$1αẃ").replaceAll(
		/([eo])w/ig,"$1ẃ").replaceAll(
		/ẃ/g,"w").replaceAll(/ⱱ/g,"W");
}
export const Hh_to_hh = function (ioz){ ioz.i.value = ioz.i.value.replaceAll(
		/H/g,"h").replaceAll(
		/\bh/g,"H").replaceAll(
		/([^kgcjztdpbsw])h/ig,"$1H");
}
export const e_to_i = function (ioz) {
	Hh_to_hh(ioz);
	Nn_to_nn(ioz); 
	Ww_to_vv(ioz);	
	Aa_to_aa(ioz);
	ioz.i.value = ioz.i.value.replaceAll(/j/ig,'ź');
	ioz.i.value = ioz.i.value.replaceAll(/q/ig,'ƙ');
	ioz.i.value = ioz.i.value.replaceAll(/c/ig,'ꞇ');
	ioz.i.value = ioz.i.value.replaceAll(
		/à/g,'a').replaceAll(
		/H/g,'ɦ').replaceAll(
		/N/g,'ṅ').replaceAll(
		/W/g,'ⱱ').replaceAll('ज्ञ', 'gy');
	ioz.o.value = ioz.i.value ;
}		
