import * as duztr from './duztr.js'
//export const ue_to_il = function  (ioz) {
export function ue_to_il(ioz) {
	ioz.z.value = "e_to_i"; duztr.doztr(ioz); ioz.i.value = ioz.o.value;
	let all_text = ''; // ('1. ' + ioz.i.value + "\n") ;
	ioz.z.value = "u_to_i"; duztr.doztr(ioz);
	all_text += ('0. ' + ioz.o.value + "\n(AaDHNT c wjq -> aαꟈɦṅτ ꞇ ⱱźƙ) #english #ing5 zava8.github.io -> #font -> ing5.ttf\n") ;

	ioz.z.value = "i_to_il"; duztr.doztr(ioz);
	all_text += (ioz.o.value + "\n") ;
	ioz.o.value = all_text;
}
