        let you = 0;
        let computer = 0;
    function computerMove(argument) {
 		let randomNumber = Math.random();
        finalResult(argument,randomNumber);
 	    }  

 	function finalResult(argument,randomNumber){
 	 	if(argument === 'Rock'){
 	 		 if(randomNumber >= 0 && randomNumber < 1/3){
            document.querySelector('.description').innerHTML = 'You picked <b>Rock</b>. <br> Computer picked <b>Rock</b>.<br> Tie';    
 	 	    document.querySelector('.result').innerHTML = `You:  ${you}. <br> Computer: ${computer}`;
 	 	  }
 	 	  else if(randomNumber >= 1/3 && randomNumber < 2/3){
            computer++;
 	 	  	document.querySelector('.description').innerHTML = `You picked <b>Rock</b>.<br>Computer picked <b>Paper</b>.<br> You Lose`;
            document.querySelector('.result').innerHTML = `You:  ${you}. <br> Computer: ${computer}`;

 	 	  }

 	 	  else if(randomNumber >= 2/3 && randomNumber < 1){
            you++
 	 	  	document.querySelector('.description').innerHTML = `You picked <b>Rock</b>.<br>Computer picked <b>Scissor</b>.<br>You Win `;
            document.querySelector('.result').innerHTML = `You:  ${you}. <br> Computer: ${computer}`;

 	 	  }
 	 	}

 	 	if(argument === 'Paper'){
 	 		 if(randomNumber >= 0 && randomNumber < 1/3){
             you++
 	 	  	document.querySelector('.description').innerHTML = 'You picked <b>Paper</b>.<br>Computer picked <b>Rock</b>.<br>You Win';
            document.querySelector('.result').innerHTML = `You:  ${you}. <br> Computer: ${computer}`;

 	 	  }
 	 	  else if(randomNumber >= 1/3 && randomNumber < 2/3){
 	 	  	document.querySelector('.description').innerHTML = 'You picked <b>Paper</b>.<br>Computer picked <b>Paper</b>.<br>Tie';
            document.querySelector('.result').innerHTML = `You:  ${you}. <br> Computer: ${computer}`;

 	 	  }
 	 	  else if(randomNumber >= 2/3 && randomNumber < 1){
            computer++;
 	 	  	document.querySelector('.description').innerHTML = 'You picked <b>Paper</b>. <br>Computer picked <b>Scissor</b>. <br>You Lose';
            document.querySelector('.result').innerHTML = `You:  ${you}. <br> Computer: ${computer}`;

 	 	  }
 	 	}

 	 	if(argument === 'Scissor'){
 	 		 if(randomNumber >= 0 && randomNumber < 1/3){
            computer++;
 	 	  	document.querySelector('.description').innerHTML = 'You picked <b>Scissor</b>.<br>Computer picked <b>Rock</b>.<br>You Lose';
            document.querySelector('.result').innerHTML = `You:  ${you}. <br> Computer: ${computer}`;
 	 	  }
 	 	  else if(randomNumber >= 1/3 && randomNumber < 2/3){
             you++
 	 	  	document.querySelector('.description').innerHTML = 'You picked <b>Scissor</b>.<br>Computer picked <b>Paper</b>. <br>You Win';
            document.querySelector('.result').innerHTML = `You:  ${you}. <br> Computer: ${computer}`;
 	 	  }
 	 	  else if(randomNumber >= 2/3 && randomNumber < 1){
 	 	  	document.querySelector('.description').innerHTML = 'You picked <b>Scissor</b>. <br> Computer picked <b>Scissor</b>. <br>Tie';
            document.querySelector('.result').innerHTML = `You:  ${you}. <br> Computer: ${computer}`;
 	 	  }
 	 	}
 	 	 
 	 }