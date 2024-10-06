import { i_to_il } from './i_to_il.js'
import { i_to_ilsinh } from './i_to_ilsinh.js'

import { u_to_i } from './u_to_i.js'
import { u_to_u8hin } from './u_to_u8hin.js'
import { u_to_u8pnz } from './u_to_u8pnz.js'
import { u_to_u8guzrati } from './u_to_u8guzrati.js'
import { u_to_u8bngali } from './u_to_u8bngali.js'
import { u_to_u8odia } from './u_to_u8odia.js'

import { u_to_u8tmil } from './u_to_u8tmil.js'
import { u_to_u8telugu } from './u_to_u8telugu.js'
import { u_to_u8mlyalm } from './u_to_u8mlyalm.js'
import { u_to_u8knrra } from './u_to_u8knrra.js'
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
export const doztr = function  (ioz){	// alert("doztr ioz.z.value is : "+ioz.z.value);	
		switch (ioz.z.value) {
			case "e_to_i":
				//alert("doztr::e_to_i ioz.i.value is : "+ioz.i.value);
				e_to_i.e_to_i(ioz);
				break;
			case "u_to_i":
				u_to_i(ioz);
				n_to_null_output(ioz);
				break;
////////////			
			case "i_to_ilsinh": ioz.o.value = i_to_ilsinh(ioz.i.value); break;
////////////			
			case "i_to_ilhin": i_to_il(ioz, 0); break;
			case "i_to_ilbngali": i_to_il(ioz,1); break;
			case "i_to_ilpnz": i_to_il(ioz,2); break;
			case "i_to_ilguzrati": i_to_il(ioz,3); break;
			case "i_to_ilodia": i_to_il(ioz,4); break;
			case "i_to_iltmil": i_to_il(ioz,5); break;
			case "i_to_iltelugu": i_to_il(ioz,6); break;
			case "i_to_ilknrra": i_to_il(ioz,7); break;
			case "i_to_ilmlyalm": i_to_il(ioz,8); break;
//////////
			case "u_to_u8hin":				
				ioz.o.value = u_to_u8hin(ioz.i.value, 0);
				break;
			case "u_to_u8bngali": ioz.o.value = u_to_u8bngali(ioz.i.value,0); break;					
			case "u_to_u8pnz": ioz.o.value = u_to_u8pnz(ioz.i.value,0); break;
			case "u_to_u8guzrati": ioz.o.value = u_to_u8guzrati(ioz.i.value,0); break;					
			case "u_to_u8odia": ioz.o.value = u_to_u8odia(ioz.i.value,0); break;					
			case "u_to_u8tmil": ioz.o.value = u_to_u8tmil(ioz.i.value,0); break;					
			case "u_to_u8telugu": ioz.o.value = u_to_u8telugu(ioz.i.value,0); break;					
			case "u_to_u8knrra": ioz.o.value = u_to_u8knrra(ioz.i.value,0); break;					
			case "u_to_u8mlyalm": ioz.o.value = u_to_u8mlyalm(ioz.i.value,0); break;
		}
}
