export function i_to_il(ioz) {
  const i_to_il_arr = ["टडपबसयरलमनफ","টডপবসযরলমনফ","ਟਡਪਬਸਯਰਲਮਨਫ",
		"ટડપબસયરલમનફ","ଟଡପବସଯରଲମନଫ","டdபbஸயரலமநf","టడపబసయరలమనఫ",
		"ಟಡಪಬಸಯರಲಮನಫ","tഡപബസയരലമനഫ"] ;
  const inputLength = ioz.i.value.length;
  ioz.o.value = ''; const oarr = Array(9).fill("");
  let indeks = 0; let curr_char = ''; let nekst_char = '';
  curr_char = ioz.i.value[indeks];  
  while (indeks < inputLength) {
	let izileven = "tdpbsyrlmnf".indexOf(curr_char);
	for (let i = 0; i < 9; i++) {
		if(izileven > -1) { oarr[i] += i_to_il_arr[i][izileven]; }
		else { oarr[i] += curr_char; }
	}
    indeks++ ;
	curr_char = ioz.i.value[indeks];
  }
  ioz.o.value =
		oarr[0] + "\n" + oarr[1] + "\n" + oarr[2] + "\n" +
		oarr[3] + "\n" + oarr[4] + "\n" + oarr[5] + "\n" +
		oarr[6] + "\n" + oarr[7] + "\n" + oarr[8] + "\n"
	;
}

// export default i_to_il
// (अ)|(क)|(ज)|(ट)|(ड)|(त)|(द)|(न)|(प)|(फ)|(ब)|(म)|(य)|(र)|(ल)|(व)|(स)|(ह)
//(?1অ)(?2ক)(?3জ)(?4ট)(?5ড)(?6ত)(?7দ)(?8ন)(?9প)(?10ব)(?11ম)(?12য)(?13র)(?14ল)(?15v)(?16স)(?17হ)(?18)
//mlyalm
//(?1അ)(?2ക)(?3ജ)(?4t)(?5ഡ)(?6ത)(?7ദ)(?8ന)(?9പ)(?10ഫ)(?11ബ)(?12മ)(?13യ)(?14ര)(?15ല)(?16വ)(?17സ)(?18ഹ)
// odia
//(?1ଅ)(?2କ)(?3ଜ)(?4ଟ)(?5ଡ)(?6ତ)(?7ଦ)(?8ନ)(?9ପ)(?10ଫ)(?11ବ)(?12ମ)(?13ଯ)(?14ର)(?15ଲ)(?16ଵ)(?17ସ)(?18ହ)
// Telugu
//(?1అ)(?2క)(?3జ)(?4ట)(?5డ)(?6త)(?7ద)(?8న)(?9ప)(?10ఫ)(?11బ)(?12మ)(?13య)(?14ర)(?15ల)(?16వ)(?17స)(?18హ)
// guzrati
//(?1અ)(?2ક)(?3જ)(?4ટ)(?5ડ)(?6ત)(?7દ)(?8ન)(?9પ)(?10ફ)(?11બ)(?12મ)(?13ય)(?14ર)(?15લ)(?16વ)(?17સ)(?18હ)

//(?1A)(?2k)(?3z)(?4t)(?5d)(?6T)(?7D)(?8n)(?9p)(?10f)(?11b)(?12m)(?13y)(?14r)(?15L)(?16v)(?17s)(?18H)
//(?19)(?20)(?21)(?22)(?23)(?24)(?25)(?26)(?27)(?28)(?29)

// curr_char = ioz.i.value[indeks];
// curr_char_code = curr_char.charCodeAt();
// curr_lang_code = (curr_char_code/0x80)>>0 ;
// curr_char_modulo = curr_char_code % 0x80 ;
// if (curr_lang_code>0x11 && curr_lang_code<0x1B) {
// 'A'.charCodeAt();  // 65
// "ર".charCodeAt(); 2736
// "ત".charCodeAt(); 2724
// String.fromCharCode(72, 69, 2736, 76, 2724); // HEરLત
// hin - 2304(128*18) - 0
// bng - 2432(128*19) - 1
// pnz - 2560(128*20) - 2
// guz - 2688(128*21) - 3
// odia - 2688(128*22) - 4
// tmil - 2688(128*23) - 5
// telugu - 2688(128*24) - 6 
// knrra - 2688(128*25) - 7
// mlyalm - 2688(128*26) - 8
