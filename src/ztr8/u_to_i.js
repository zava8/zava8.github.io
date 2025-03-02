import { usinhl2idict } from './usinhl2i_dict.js'
import { u2idict } from './u2i_dict.js'

export function u_to_i (ioz) {
	function is_in_it (list, val) {
		if (!Array.isArray(list)) { list = Object.keys(list); }
		return list.indexOf(val) !== -1;
	}
	const inputLength = ioz.i.value.length;
	let indeks = 0;
	ioz.o.value = '';
	let curr_char = ''; let nekst_char = ''; // let prev_char = ''; 
	let curr_char_code = 0; let nekst_char_code = 0; // let prev_char_code = 0; 
	let prev_lang_code = 0; let curr_lang_code = 0; let nekst_lang_code = 0;
	let prev_char_modulo = 0; let curr_char_modulo = 0; let nekst_char_modulo = 0;

	while (indeks < inputLength) {
		prev_lang_code= curr_lang_code ; // prev_char = curr_char ; 
		prev_char_modulo = curr_char_modulo; // prev_char_code = curr_char_code ;
		if (0 === indeks) { curr_char = ioz.i.value[indeks]; } else { curr_char = nekst_char ; }
		curr_char_code = curr_char.charCodeAt();
		curr_lang_code = (curr_char_code/0x80)>>0 ;
		curr_char_modulo = curr_char_code % 0x80 ;
		nekst_char = ioz.i.value[indeks + 1];
		if(indeks+1 < inputLength) {
			nekst_char_code = nekst_char.charCodeAt();
			nekst_lang_code = (nekst_char_code/0x80)>>0 ;
			nekst_char_modulo = nekst_char_code % 0x80 ;
		}
		else { nekst_char_code = nekst_lang_code = nekst_char_modulo = -1 ; }
//////////// other than sinhl bhαsα
    if (curr_lang_code>0x11 && curr_lang_code<0x1B) {
      if (is_in_it([7,8,9,0xA,0xD,0xE,0xF,0x10,0x13,0x14],curr_char_modulo)) { //इईउऊऍऎएऐओऔ
        if ( prev_lang_code>0 && prev_char_modulo > 0x14 && prev_char_modulo < 0x3A)
        {
          ioz.o.value += 'a';//कई
         }
        ioz.o.value += u2idict.all_phoniks_list[curr_char_modulo];
      }
      else { ioz.o.value += u2idict.all_phoniks_list[curr_char_modulo]; }
      indeks++ ;
    } // end oph indik lang iph
//////////// other than sinhl bhαsα
    else if (curr_lang_code == 0x1B) {
      if (is_in_it([9,0xA,0xB,0xC,0x11,0x12,0x13,0x14,0x14,0x15,0x16],curr_char_modulo)) { //sinhl इईउऊऍऎएऐओऔ
        if ( prev_lang_code == 0x1B && prev_char_modulo > 0x19 && prev_char_modulo < 0x47)
        {
          ioz.o.value += 'a';//कई
         }
        ioz.o.value += usinhl2idict.all_phoniks_list[curr_char_modulo];
      }
      else { ioz.o.value += usinhl2idict.all_phoniks_list[curr_char_modulo]; }
      indeks++ ;
    } // end oph sinhl lang iph    
    else { ioz.o.value += curr_char; indeks++ ; }
  }
}
