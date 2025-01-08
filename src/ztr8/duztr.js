import { i_to_il } from './i_to_il.js'

import { u_to_i } from './u_to_i.js'
////////////////
import * as e_to_i from './e_to_i.js'
////[ɦꟈđꞇṅᴀ]ɦԃ¢ńàᴀ α
// //  पांच (में) में, डाँगी आँगन चम्मच छाछ छछूंदर चचेरा चाचा 
function n_to_null_output(ioz) {
	ioz.i.value = ioz.o.value = ioz.o.value.replaceAll(
		/([a-zàԃɦńᴛ])α/g,"$1α").replaceAll(
		//ń([^aefghilmnoquwxyɦᴛtT])/ig,"$1").replaceAll(
		////ć[cċ]h/ig,"cch").replaceAll(
		/ń$/g,"").replaceAll(
		/ń([),\s\.!\?naeiouhć])/g,"$1").replaceAll(
		/ń([bp])/g,"m$1").replaceAll(
		/ń([^kg])/g,"n$1");
}
///////
export const doztr = function  (ioz){
		switch (ioz.z.value) {
			case "e_to_i": e_to_i.e_to_i(ioz); break;
			case "u_to_i":
				//ioz.i.value = ioz.i.value.replaceAll(/ⱱ/g,'v');
				u_to_i(ioz);
				n_to_null_output(ioz);
				break;
			case "i_to_il": i_to_il(ioz); break;
		}
}

//1. 1. सvтṅтर बhαरт kα सबसe सफल oर सkसम परदhαन मṅтरi ɦei मoदi zi. iनke बαरe मe kuch बoलनe oर लikhनe सe पɦलe बɦuт सoćनα सoꞇनα पडтα ɦei. eसα kरiसhमαi vयkтiтv नɦi दekhα kiसi vयkтi यα नeтα मe. मαтरबhuमi ke लie पuरन रuप सe समरपiт iस मɦαन vयkтi ko koटi koटi परनαम. #vowelहiनदi

