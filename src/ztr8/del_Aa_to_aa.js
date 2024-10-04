export function Aa_to_aa (argstrobz){  // àα
	argstrobz.str.value = argstrobz.str.value.replaceAll(/A/g,"a").replaceAll(
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
