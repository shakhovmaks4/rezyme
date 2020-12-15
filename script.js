setTimeout(function(){
		const t = [
	'Привет, меня зовут Максим.\n',]

function typeText(){
	let line = 0; /*начальная линия,то есть привет мир*/
	let count = 0; /*счетчик позиции элемента*/
	let out = ''; /*вывод*/
	let htmlhi = document.querySelector('.hi ');//вызываем наш див где будем писать 
	function typeLine(){
		// рисуем строки
		let interval = setTimeout(function(){
			out += t[line][count]; // записали первый элемент в первую строку для вывода
			htmlhi.innerHTML = out; 
			count++;
			/*
			Проверки!
			не закончилась ли строка?
			*/
			if(count>=t[line].length){
				count = 0;
				line++;
				if(line==t.length){
					clearTimeout(interval); //остановил таймаут
					return true;
				}
			}
			typeLine();
		},80)
	}
	typeLine();
}

typeText();



const t2 = [
	'Мне 24 года.\n',
]

function typeText2(){
	let line2 = 0; /*начальная линия,то есть привет мир*/
	let count2 = 0; /*счетчик позиции элемента*/
	let out2 = ''; /*вывод*/
	let htmlhi2 = document.querySelector('.hi2 ');//вызываем наш див где будем писать 
	function typeLine2(){
		// рисуем строки
		let interval2 = setTimeout(function(){
			out2 += t2[line2][count2]; // записали первый элемент в первую строку для вывода
			htmlhi2.innerHTML = out2; 
			count2++;
			/*
			Проверки!
			не закончилась ли строка?
			*/
			if(count2>=t2[line2].length){
				count2 = 0;
				line2++;
				if(line2==t2.length){
					clearTimeout(interval2); //остановил таймаут
					return true;
				}
			}
			typeLine2();
		},80)
	}
	typeLine2();
}

typeText2();

const t3 = [
	'И я хочу стать частью вашей команды!\n',
]
function typeText3(){
	let line3 = 0; /*начальная линия,то есть привет мир*/
	let count3 = 0; /*счетчик позиции элемента*/
	let out3 = ''; /*вывод*/
	let htmlhi3 = document.querySelector('.hi3 ');//вызываем наш див где будем писать 
	function typeLine3(){
		// рисуем строки
		let interval3 = setTimeout(function(){
			out3 += t3[line3][count3]; // записали первый элемент в первую строку для вывода
			htmlhi3.innerHTML = out3; 
			count3++;
			/*
			Проверки!
			не закончилась ли строка?
			*/
			if(count3>=t3[line3].length){
				count3 = 0;
				line3++;
				if(line3==t3.length){
					clearTimeout(interval3); //остановил таймаут
					return true;
				}
			}
			typeLine3();
		},80)
	}
	typeLine3();
}

typeText3();
	},1000);