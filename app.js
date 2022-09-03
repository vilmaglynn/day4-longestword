let enterString =document.getElementById("enterString");
let maxLengthWord = document.getElementById("maxLengthWord")
let btnfindWord = document.getElementById("btn-findWord")

function findLongestWordLength() {
	let wordsArray = enterString.value.split(' ');
	let maxLength = 0;
	let wordId;

  
	for (let i = 0; i < wordsArray.length; i++) {
		let wordLength = wordsArray[i].length;
			   console.log(`${wordsArray[i]} ${wordLength}`)
	  if (wordsArray[i].length > maxLength) {		
		maxLength = wordsArray[i].length;
		wordId =i;

	  }
	  maxLengthWord.innerHTML = (`${maxLength} ${wordsArray[wordId]}`)
	}
	

	}

	btnfindWord.addEventListener("click",findLongestWordLength )

	// findLongestWordLength("The quick brown fox jumped over the lazy dog"); 
