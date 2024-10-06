import { i_to_il } from './i_to_il.js'

import { u_to_i } from './u_to_i.js'
////////////////
import * as e_to_i from './e_to_i.js'
////////////////
function n_to_null_output(ioz) {
	//otekst.value = otekst.value.replaceAll('eiन.','ei.').replaceAll(/ṅ\b/g,"").replaceAll(/ṅ\./g,".");
	ioz.i.value = ioz.o.value = ioz.o.value.replaceAll(
		"ṅ.",".").replaceAll(
		"ṅv","mv").replaceAll(
		"ṅ([।\"])","$1").replaceAll(
		/ṅ(\s)/g,"$1");
}
///////
export const doztr = function  (ioz){
		switch (ioz.z.value) {
			case "e_to_i":
				e_to_i.e_to_i(ioz);
				break;
			case "u_to_i":
				u_to_i(ioz);
				n_to_null_output(ioz);
				break;
			case "i_to_il": i_to_il(ioz); break;
		}
}
