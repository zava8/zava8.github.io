function i1toi2(input , unicode_index) {
  const inputLength = input.length;
  //console.log("input is" + input)
  // alert("in i_to_u8 input is " + input + " and inputLength is : "+inputLength);
  let indeks = 0; let output = ''; let curr_char = ''; let nekst_char = '';
   
  while (indeks < inputLength) {
    let curr_char = input[indeks]; 
	let occ = curr_char.charCodeAt();
	// console.log("occ is" + occ)
	let occ2 = String.fromCharCode(occ + 128*unicode_index);
	//console.log("occ2 is " + occ2);
	output += occ2;
	indeks++;
  }
  return output;
}
let matra = " ा ि ी ु ू े ै ो ौ इ ई उ ऊ ए ऐ ओ औ  ग च";
let o = i1toi2(matra,1);
console.log("bangla ouput is " + o);
o = i1toi2(matra,2);
console.log("pnzabi ouput is " + o);
o = i1toi2(matra,3);
console.log("guzrati ouput is " + o);
o = i1toi2(matra,4);
console.log("odia ouput is " + o);
o = i1toi2(matra,5);
console.log("tmil ouput is " + o);
o = i1toi2(matra,6);
console.log("telugu ouput is " + o);
o = i1toi2(matra,7);
console.log("kannada ouput is " + o);
o = i1toi2(matra,8);
console.log("malayalam ouput is " + o);
