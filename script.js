const startGame = (() =>{

    // Maybe this can be added to a function that sets everything up.
    //But for now this works and the restart function would just have to handle resetting everything.
    //Maybe to add more to the code have it ask for two players names.
    let gameBoard = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    let player1Name = '';
    let player2Name = '';
    let numberOfTurns = 1;
    let isThereAWinner = false;
    let playerOneTurn = true;
    const mainBody = document.querySelector('body');
    const mainDiv = document.createElement('div');
    const welcomeMessage = document.createElement('p');
    
    
    function testForWinner(gamePiece){
        let savingGamePiece = gamePiece;
        // let playerNum;
        // if(playerNumber === true)
        // {
        //     playerNum = 'Player 1';
        // }
        // else
        // {
        //     playerNum = 'Player 2'
        // }
        if(numberOfTurns >=4 && isThereAWinner == false)
        {
            gameBoard.forEach((row, rowIndex) =>{
            let rowWin = row.every(matching => matching ===savingGamePiece)
            if(rowWin===true)
            {
                 setWinner(gamePiece);
                isThereAWinner = true;
            }
            row.forEach((item, colIndex)=>{
                if(rowIndex == 0)
                {
                     if(gameBoard[rowIndex][colIndex]=== gameBoard[rowIndex+1][colIndex])
                        {
                            if(gameBoard[rowIndex+1][colIndex] ===  gameBoard[rowIndex+2][colIndex])
                            {
                                // console.log('test 1');
                                setWinner(gamePiece);
                                isThereAWinner = true;
                            }
                        }
                    if(gameBoard[rowIndex][colIndex]=== gameBoard[rowIndex+1][colIndex+1])
                    {
                      if(gameBoard[rowIndex+1][colIndex+1]=== gameBoard[rowIndex+2][colIndex+2]) 
                            {
                                setWinner(gamePiece);
                                isThereAWinner = true;
                            }
                    }
                    if(isThereAWinner === false)
                    {
                        if(gameBoard[0][2] === gameBoard[1][1])
                    {
                        if(gameBoard[1][1] === gameBoard[2][0]) 
                            {
                                setWinner(gamePiece);
                                isThereAWinner = true;
                            }
                    }
                    }
                }
            })
        });

       if(numberOfTurns === 9 && isThereAWinner === false)
        {
            alert(`It's a TIE. Try again players `);
        } 
        }
        numberOfTurns++;
    }
    function setDisplay(){

        gameBoard.forEach(cell => {
        
            console.log(cell)
            
        });
    }
    function setSelected(move, playerPiece, playerOneTurn){
        gameBoard.forEach(cell =>{

            let replace = cell.findIndex(element => element=== +move);
            
            if(replace!= -1) cell[replace]= playerPiece;
        })
        
         setDisplay();
         testForWinner(playerPiece, playerOneTurn);
    }
    function getPlayerChoice(){

       
        const getDivs = document.querySelectorAll('.TiTaToCell');
        getDivs.forEach(cell =>{

            
            cell.addEventListener('click', ()=>{
            
        if(playerOneTurn === true )
            {                
                let getCellID = cell.getAttribute('id');
                getCellID = getCellID.slice(7);

                // console.log(getCellID + ' in X');

                setSelected(getCellID, 'X', playerOneTurn);
                cell.textContent = 'X';
                cell.style.color= 'Red';
                
                playerOneTurn = false;
            }
        else
            {
                 let getCellID = cell.getAttribute('id');
                  getCellID = getCellID.slice(7);
                //   console.log(getCellID +' in O');

                setSelected(getCellID, 'O',playerOneTurn);
                cell.textContent = 'O';
                cell.style.color= 'Green';
                playerOneTurn = true;
            }


            })


        })

       

    }
    function setPlayerName(name1, name2){
       player1Name = name1; 
       player2Name = name2

       welcomeMessage.textContent= `Player 1 ('X') is ${name1} and Player 2 ('O') is ${name2}`;
    }
    function setRestartBtn(){
        const getRestartbtn = document.querySelector('.btnRestart');
        const getDivs = document.querySelectorAll('.TiTaToCell');
        getRestartbtn.addEventListener('click', ()=>{
           

            getDivs.forEach(cell =>{

                cell.textContent = '';
                
            })

        gameBoard.length = 0;
         gameBoard = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
        player1Name = '';
        player2Name = '';
        numberOfTurns = 1;
        isThereAWinner = false;
        playerOneTurn = true;

    
        })
    }
    function setWinner(winner){

        if(winner === 'X')
        {
            alert(`${winner} have won! Good Job ${player1Name} :D`)
        }
        else{
            alert(`${winner} have won! Good Job ${player2Name} :D`)
        }

        

    }
    function getStartGameInfo(){

        const getStartBtn = document.querySelector('.btnStart');
        getStartBtn.addEventListener('click', ()=>{
            let p1Name = prompt('Please enter p1\'s name');
            let p2Name = prompt('Please enter p2\'s name ')
              
        for(let i = 1; i<=9; i++)
        {
            const creatingDivs = document.createElement('div');
            creatingDivs.setAttribute('class', 'TiTaToCell');
            creatingDivs.setAttribute('id', `cellNum${i}` );
            mainDiv.appendChild(creatingDivs);
        }


        mainBody.appendChild(mainDiv);

            setPlayerName(p1Name, p2Name);
            getPlayerChoice();
            // mainDiv.style.display = 'block';
            


        setRestartBtn();
        })
        

    }
    function createGamePad(){

        
       

       
        welcomeMessage.setAttribute('class', 'welcomeMessage')
        mainBody.appendChild(welcomeMessage);

        mainDiv.setAttribute('class', 'mainContainer')

        const btnStart = document.createElement('button');
        const btnRestart = document.createElement('button');
        btnStart.setAttribute('class', 'gameBtns btnStart');
        btnRestart.setAttribute('class', 'gameBtns btnRestart');
        btnStart.textContent = 'Start';
        btnRestart.textContent = 'Restart';


        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('class', 'buttonsDiv')
        

        btnDiv.appendChild(btnStart);
        btnDiv.appendChild(btnRestart);

        mainBody.appendChild(btnDiv);



        


        

        getStartGameInfo();
        
        


    }
    setDisplay();
    createGamePad();
    return {setSelected};


})();



