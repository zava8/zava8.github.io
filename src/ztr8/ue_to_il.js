import * as duztr from './duztr.js'
//export const ue_to_il = function  (ioz) {
export function ue_to_il(ioz) {
	ioz.z.value = "e_to_i"; duztr.doztr(ioz); ioz.i.value = ioz.o.value;
	let all_text = ''; // ('1. ' + ioz.i.value + "\n") ;
	ioz.z.value = "u_to_i"; duztr.doztr(ioz);
	all_text += ('0. ' + ioz.o.value + "\neng:52:a-z+A-Z ing:31:a-z+αꟈɦṅᴛ (AaDHNT c wjq -> aαꟈɦṅᴛ ꞇ ⱱźƙ) zava8.github.io -> #font -> ing115.ttf\n") ;

	ioz.z.value = "i_to_il"; duztr.doztr(ioz);
	all_text += (ioz.o.value + "\n") ;
	ioz.o.value = all_text;
}
