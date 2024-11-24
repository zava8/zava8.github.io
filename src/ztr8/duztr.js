import { i_to_il } from './i_to_il.js'

import { u_to_i } from './u_to_i.js'
////////////////
import * as e_to_i from './e_to_i.js'
////////////////
function n_to_null_output(ioz) {
	ioz.i.value = ioz.o.value = ioz.o.value.replaceAll(
		/αα([^a-zꟈɦṅᴛ])/g,"α$1").replaceAll(
		//ṅ([^aefghilmnoquwxyɦᴛtT])/ig,"$1").replaceAll(
		/ṅ$/g,"").replaceAll(
		/ṅ([\s\.!])/g,"$1").replaceAll(
		/ṅ([bp])/g,"m$1");
}
///////
export const doztr = function  (ioz){
		switch (ioz.z.value) {
			case "e_to_i":
				e_to_i.e_to_i(ioz);
				break;
			case "u_to_i":
				ioz.i.value = ioz.i.value.replaceAll(/ⱱ/g,'v');
				u_to_i(ioz);
				n_to_null_output(ioz);
				break;
			case "i_to_il": i_to_il(ioz); break;
		}
}

//1. 1. सvтṅтर बhαरт kα सबसe सफल oर सkसम परदhαन मṅтरi нei मoदi zi. iनke बαरe मe kuch बoलनe oर लikhनe सe पнलe बнuт सoꞇनα पडтα нei. eसα kरiसhमαi vयkтiтv नнi दekhα kiसi vयkтi यα नeтα मe. मαтरबhuमi ke लie पuरन रuप सe समरपiт iस मнαन vयkтi ko koटi koटi परनαम. #vowelहiनदi

