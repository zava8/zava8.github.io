/*
  const i_to_il_arr = ["टडपबसयरलमनफअद","টডপবসযরলমনফঅদ","ਟਡਪਬਸਯਰਲਮਨਫਅਦ",
		"ટડપબસયરલમનફઅદ","ଟଡପବସଯରଲମନଫଅଦ","டdபbஸயரலமநfஅԃ","టడపబసయరలమనఫఅద",
		"ಟಡಪಬಸಯರಲಮನಫಅದ","tഡപബസയരലമനഫഅദ","ටඩපබසයරලමනඵàԃ","ㅌ다ㅍ바ㅅy라lㅁㄴfàԃ","тдпБсйрлмɦфàԃ"] ;
  const i_to_il_arr = ["टडपबसयरलमनफदअ","টডপবসযরলমনফদঅ","ਟਡਪਬਸਯਰਲਮਨਫਦਅ",
		"ટડપબસયરલમનફદઅ","ଟଡପବସଯରଲମନଫଦଅ","டdபbஸயரலமநfԃஅ","టడపబసయరలమనఫదఅ",
		"ಟಡಪಬಸಯರಲಮನಫದಅ","tഡപബസയരലമനഫദഅ","ටඩපබසයරලමනඵԃà","ㅌ다ㅍ바ㅅy라lㅁㄴfԃà","тдпБсйрлмɦфԃà"] ;
	const i_to_il_arr = ["टडपबसयरलमनफदअ","টডপবসযরলমনফদঅ","ਟਡਪਬਸਯਰਲਮਨਫਦਅ",
		"ટડપબસયરલમનફદઅ","ଟଡପବସଯରଲମନଫଦଅ","டdபbஸயரலமநfԃஅ","టడపబసయరలమనఫదఅ",
		"ಟಡಪಬಸಯರಲಮನಫದಅ","tഡപബസയരലമനഫദà","ටඩපබසයරලමනඵԃà","ㅌ다ㅍ바ㅅy라lㅁㄴfԃà","тдпБсйрлмɦфԃà"] ;
*/
///////[ɦꟈđꞇṅᴀ]ɦԃćńà
export function i_to_il(ioz) {
	const i_to_il_arr = ["टडपबसयरलमनफद","টডপবসযরলমনফদ","ਟਡਪਬਸਯਰਲਮਨਫਦ",
		"ટડપબસયરલમનફદ","ଟଡପବସଯରଲମନଫଦ","டdபbஸயரலமநfԃ","టడపబసయరలమనఫద",
		"ಟಡಪಬಸಯರಲಮನಫದ","tഡപബസയരലമനഫദ","ටඩපබසයරලමනඵԃ","ㅌㄸㅍㅂㅅㅑㄹ을ㅁㄴfԃ","тдпБсйрлмɦфԃ"] ;
// mondly.com/blog/learn-russian-alphabet-pronunciation/ cmmc caci calcium
  const inputLength = ioz.i.value.length;
  ioz.o.value = ''; const oarr = Array(12).fill("");
  let indeks = 0; let curr_char = ''; let nekst_char = '';
  curr_char = ioz.i.value[indeks];
  let hinchars = "tdpbsyrlmnf"; // ԃ
  while (indeks < inputLength) {
	// let izileven = "tdpbsyrlmnfԃà".indexOf(curr_char);
	let izileven = hinchars.indexOf(curr_char); 
	for (let i = 0; i < hinchars.length; i++) {
		if(izileven > -1) { oarr[i] += i_to_il_arr[i][izileven]; }
		else { oarr[i] += curr_char; }
	}
    indeks++ ;
	curr_char = ioz.i.value[indeks];
  }
  ioz.o.value =
		"1. " + oarr[0] + " #vowelहiनदi\nअदहत=ADHT=ᴀԃɦᴛ ᴀ=A=à ԃ=D≠d ᴛ≠t ɦ≠h N=ṅ≠n zava8.github.io -> font -> hin115.ttf \n8aiueohcg 8àԃɦᴛṅkvz 5टडपबस(टh डh पh बh सh) 6यरलमनफ\n" +
		"2. " + oarr[1] + "\nzava8.github.io -> font -> bengali115.ttf \n" +
		"7. " + oarr[6] + "\nzava8.github.io -> font -> ᴛelugu115.ttf \n" +
		"J. " + oarr[10] + "\n#korean zava8.github.io -> font -> koreàn115.ttf \n" +
		"6. " + oarr[5] + "\nzava8.github.io -> font -> ᴛàmil115.ttf \n" +
		"8. " + oarr[7] + "\nzava8.github.io -> font -> kànnàda115.ttf \n" +
		"9. " + oarr[8] + "\nzava8.github.io -> font -> màlàyalàm115.ttf \n" +
		"B. " + oarr[11] + "\n#russiàn zava8.github.io -> font -> russiàn115.ttf \n" +
		"5. " + oarr[4] + "\nzava8.github.io -> font -> odia115.ttf \n" +
		"L. " + oarr[9] + "\nzava8.github.io -> font -> sinɦàla115.ttf \n" +
		"3. " + oarr[2] + "\nzava8.github.io -> font -> pnzabi115.ttf \n" +
		"4. " + oarr[3] + "\nzava8.github.io -> font -> guzraᴛi115.ttf \n" ;
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
