let sumPC = 0;
    let sumPlayer = 0
    let finishGame = false;
    let limit = 21;
    let pcFloor = 17;
    let pcBust = false;
    let playerBust = false;

    while (sumPC < pcFloor) {
        let number = this.getCard();
        sumPC+=number;
        // console.log('Pc get ', number);
    }

    while (!finishGame) {
        let response = prompt('want another one? Resp whit Y or N');
        if (response.toLowerCase() == 'y' ) {
            sumPlayer
            let card = this.getCard();
            sumPlayer+=card;
            alert(`Your card it's ${card}, Total ${sumPlayer} `)
            if (sumPlayer> limit) {
                alert(`You lost, ur sum it's greater than 21`);
                finishGame = true;
            }
        }else if(response.toLowerCase() == 'n' ){
            finishGame = true;
        }else{
            printResult('invaid answer');
        }
    }

    console.log(`result its: PC ${sumPC} Player ${sumPlayer}`);
    
    pcBust = sumPC >limit;
    playerBust = sumPlayer >limit;
    if (pcBust && playerBust) {
        printResult('both lose');
    }else {
        let result = '';
        if (pcBust && !playerBust) {
            this.printResult('you win');
        }else if (!pcBust && playerBust){
            this.printResult('you lose');
        }else{
            result = sumPC>sumPlayer ? 'you lose' : sumPC == sumPlayer ? 'draw or tie by google.. no one win' : 'you win';
        }
        this.printResult(result);
    }

    function getCard() {
        // return a numer of card;
        return Math.floor(Math.random() * 13) + 1;
    }

    function printResult(text) {
        console.log(text);
    }