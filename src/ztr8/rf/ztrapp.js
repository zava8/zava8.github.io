// const u_to_a = require('./u_to_a.js');
const ztrapp = Vue.createApp({
		data() { return {
			itekst: "adht_ADHT\nbcefgijklmnopqrsuvwxyz_\nBCEFGIJKLMNOPQRSUVWXYZ",
			otekst: "hao",
			ztrdir: "",
			olc:0,
		} },
		methods: {
			itekst_on_input() { this.doztr(); },
			ztrdir_changed() { this.doztr(); },
			u_to_all_click() {
				let all_text = ''; // ('1. ' + this.itekst + "\n") ;
				this.ztrdir = "u_to_u8hin"; this.doztr();
				all_text += ('1. ' + this.otekst + "\n") ;
				this.ztrdir = "u_to_u8guzrati"; this.doztr();
				all_text += ('2. ' + this.otekst + "\n") ;
				this.ztrdir = "u_to_u8pnz"; this.doztr();
				all_text += ('3. ' + this.otekst + "\n") ;
				this.ztrdir = "u_to_u8bngali"; this.doztr();
				all_text += ('4. ' + this.otekst + "\n") ;
				this.ztrdir = "u_to_u8odia"; this.doztr();
				all_text += ('5. ' + this.otekst + "\n") ;
				this.ztrdir = "u_to_u8tmil"; this.doztr();
				all_text += ('6. ' + this.otekst + "\n") ;
				this.ztrdir = "u_to_u8mlyalm"; this.doztr();
				all_text += ('7. ' + this.otekst + "\n") ;
				this.ztrdir = "u_to_u8knrra"; this.doztr();
				all_text += ('8. ' + this.otekst + "\n") ;
				this.ztrdir = "u_to_u8telugu"; this.doztr();
				all_text += ('9. ' + this.otekst + "\n") ;
				this.otekst = all_text;
				this.ztrdir = "i_to_u8hin";
			},
			i_to_all_click() { 
				let all_text = ''; // ('1. ' + this.itekst + "\n") ;
				this.ztrdir = "i_to_u8hin"; this.doztr();
				all_text += ('1. ' + this.otekst + "\n") ;
				this.ztrdir = "i_to_u8guzrati"; this.doztr();
				all_text += ('2. ' + this.otekst + "\n") ;
				this.ztrdir = "i_to_u8pnz"; this.doztr();
				all_text += ('3. ' + this.otekst + "\n") ;
				this.ztrdir = "i_to_u8bngali"; this.doztr();
				all_text += ('4. ' + this.otekst + "\n") ;
				this.ztrdir = "i_to_u8odia"; this.doztr();
				all_text += ('5. ' + this.otekst + "\n") ;
				this.ztrdir = "i_to_u8tmil"; this.doztr();
				all_text += ('6. ' + this.otekst + "\n") ;
				this.ztrdir = "i_to_u8mlyalm"; this.doztr();
				all_text += ('7. ' + this.otekst + "\n") ;
				this.ztrdir = "i_to_u8knrra"; this.doztr();
				all_text += ('8. ' + this.otekst + "\n") ;
				this.ztrdir = "i_to_u8telugu"; this.doztr();
				all_text += ('9. ' + this.otekst + "\n") ;
				this.otekst = all_text;
				this.ztrdir = "i_to_u8hin";
			},
			i_to_u8hin_click() { this.ztrdir = "i_to_u8hin"; this.doztr(); },
			i_to_u8tmil_click() { this.ztrdir = "i_to_u8tmil"; this.doztr(); },
			i_to_u8pnz_click() { this.ztrdir = "i_to_u8pnz"; this.doztr(); },
			i_to_u8bngali_click() { this.ztrdir = "i_to_u8bngali"; this.doztr(); },
			i_to_u8knrra_click() { this.ztrdir = "i_to_u8knrra"; this.doztr(); },
			i_to_u8mlyalm_click() { this.ztrdir = "i_to_u8mlyalm"; this.doztr(); },
			i_to_u8odia_click() { this.ztrdir = "i_to_u8odia"; this.doztr(); },
			i_to_u8telugu_click() { this.ztrdir = "i_to_u8telugu"; this.doztr(); },
			i_to_u8guzrati_click() { this.ztrdir = "i_to_u8guzrati"; this.doztr(); },
			////////////
			u_to_u8hin_to_i_click() {
				this.ztrdir = "u_to_u8hin"; this.doztr();
				this.itekst = this.otekst;
				this.ztrdir = "i_to_u8hin"; this.doztr();
			},
			////////////
			u_to_u8hin_click() { this.ztrdir = "u_to_u8hin"; this.doztr(); },
			u_to_u8bngali_click() { this.ztrdir = "u_to_u8bngali"; this.doztr(); },
			u_to_u8pnz_click() { this.ztrdir = "u_to_u8pnz"; this.doztr(); },
			u_to_u8guzrati_click() { this.ztrdir = "u_to_u8guzrati"; this.doztr(); },
			u_to_u8odia_click() { this.ztrdir = "u_to_u8odia"; this.doztr(); },
			u_to_u8tmil_click() { this.ztrdir = "u_to_u8tmil"; this.doztr(); },
			u_to_u8telugu_click() { this.ztrdir = "u_to_u8telugu"; this.doztr(); },
			u_to_u8knrra_click() { this.ztrdir = "u_to_u8knrra"; this.doztr(); },
			u_to_u8mlyalm_click() { this.ztrdir = "u_to_u8mlyalm"; this.doztr(); },
			doztr() { 
				switch(this.ztrdir) {	
					case "i_to_u8hin": this.otekst = i_to_u8(this.itekst,0); break;
					case "i_to_u8bngali": this.otekst = i_to_u8(this.itekst,1); break;
					case "i_to_u8pnz": this.otekst = i_to_u8(this.itekst,2); break;
					case "i_to_u8guzrati": this.otekst = i_to_u8(this.itekst,3); break;
					case "i_to_u8odia": this.otekst = i_to_u8(this.itekst,4); break;
					case "i_to_u8tmil": this.otekst = i_to_u8(this.itekst,5); break;
					case "i_to_u8telugu": this.otekst = i_to_u8(this.itekst,6); break;
					case "i_to_u8knrra": this.otekst = i_to_u8(this.itekst,7); break;
					case "i_to_u8mlyalm": this.otekst = i_to_u8(this.itekst,8); break;
					///////////////
					case "u_to_u8hin": this.otekst = u_to_u8hin(this.itekst,0); break;
					case "u_to_u8bngali": this.otekst = u_to_u8bngali(this.itekst,0); break;					
					case "u_to_u8pnz": this.otekst = u_to_u8pnz(this.itekst,0); break;
					case "u_to_u8guzrati": this.otekst = u_to_u8guzrati(this.itekst,0); break;					
					case "u_to_u8odia": this.otekst = u_to_u8odia(this.itekst,0); break;					
					case "u_to_u8tmil": this.otekst = u_to_u8tmil(this.itekst,0); break;					
					case "u_to_u8telugu": this.otekst = u_to_u8telugu(this.itekst,0); break;					
					case "u_to_u8knrra": this.otekst = u_to_u8knrra(this.itekst,0); break;					
					case "u_to_u8mlyalm": this.otekst = u_to_u8mlyalm(this.itekst,0); break;					

				}
			},
		},
}) 
ztrapp.mount('#ztrapp')
//////////////
// case "i_to_u8pnz": this.otekst = i_to_u8pnz(this.itekst); 					break;
// case "i_to_u8guzrati": this.otekst = i_to_u8guzrati(this.itekst); 					break;
// case "i_to_u8odia": this.otekst = i_to_u8odia(this.itekst); 					break;
// case "i_to_u8tmil": this.otekst = i_to_u8tmil(this.itekst); 					break;
// case "i_to_u8telugu": this.otekst = i_to_u8telugu(this.itekst); 					break;
// case "i_to_u8knrra": this.otekst = i_to_u8knrra(this.itekst); 					break;
// case "i_to_u8mlyalm": this.otekst = i_to_u8mlyalm(this.itekst); 					break;