const i_to_u8sinh_dict = { I : 'i', O : 'o', E : 'e', U : 'u',C : 'c',G : 'g',
	A : 'අ', D : 'ද', H : 'හ', T : 'ත',  n : 'න', N : 'න',
	k : 'k', K : 'k', q : 'k', Q : 'k',  z : 'z', j : 'z', Z : 'z', J : 'z',
	v : 'v', V : 'v', w : 'w', W : 'w',
	t : 'ට', d : 'ඩ',  p : 'ප', P : 'ප', F: 'ඵ', f: 'ඵ',
	b : 'බ', B : 'බ', m : 'ම', M : 'ම', y : 'ය', Y : 'ය', r : 'ර', R : 'ර',
 	l : 'ල', L : 'ල',  S : 'ස', s : 'ස', 	
}
export function i_to_u8sinh(input) {
  const inputLength = input.length;
  // alert("in i_to_u8 input is " + input + " and inputLength is : "+inputLength);
  let indeks = 0; let output = ''; let curr_char = ''; let nekst_char = '';
  curr_char = input[indeks];  
  while (indeks < inputLength) {
	if(curr_char in i_to_u8sinh_dict) {
		let oc = i_to_u8sinh_dict[curr_char];
		output += oc;
	}
	else {output += curr_char;}
    indeks++ ;
	curr_char = input[indeks];
  }
  return output;
}
