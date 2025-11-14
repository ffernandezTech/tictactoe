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

    // add this to a funcion of its own later
    const mainBody = document.querySelector('body');
    const mainDiv = document.querySelector('.mainContainer')
    const gridContainerDiv = document.createElement('div');
    const welcomeMessage = document.createElement('p');

    //creating btns to control game state.
    const btnStart = document.querySelector('.btnStart')
    const btnRestart = document.createElement('button');
    
    
    function testForWinner(gamePiece){

        // move this check for winner somewhere else.
        if(numberOfTurns >3)
        {
            gameBoard.forEach((row, rowIndex) =>{
            let rowWin = row.every(matching => matching ===gamePiece)
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

       if(numberOfTurns === 9)
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
    function setSelected(move, playerPiece){
        gameBoard.forEach(cell =>{

            let replace = cell.findIndex(element => element=== +move);
            
            if(replace!= -1) cell[replace]= playerPiece;
        })
        
         setDisplay();

         if(isThereAWinner === false) testForWinner(playerPiece, playerOneTurn);
    }
    function getPlayerChoice(){

       
        const getTiTaToDivs = document.querySelectorAll('.TiTaToCell');
        getTiTaToDivs.forEach(titatoDiv =>{

            
            titatoDiv.addEventListener('click', ()=>{
            if(titatoDiv.textContent !== 'X' && titatoDiv.textContent !== 'O')
            {
                if(playerOneTurn === true )
                {                
                    let getDivID = titatoDiv.getAttribute('id');
                    getDivID = getDivID.slice(6);

                    console.log(getDivID + ' in X');
                    
                    
                        
                            
                    titatoDiv.textContent = 'X';
                    titatoDiv.style.color= 'Red';
                   setTimeout(() => {
                     setSelected(getDivID, 'X');
                   }, 50);
                    
                    playerOneTurn = false;
                        
                    
                }
            else
                {
                
                        let getDivID = titatoDiv.getAttribute('id');
                        getDivID = getDivID.slice(6);
                      console.log(getDivID +' in O');

                        titatoDiv.textContent = 'O';
                        titatoDiv.style.color= 'Green';
                        setTimeout(() => {
                     setSelected(getDivID, 'O');
                   }, 50);
                        playerOneTurn = true;
                    

                }
            }


            })


        })

       

    }
    function setPlayerName(name1, name2){
       player1Name = name1; 
       player2Name = name2

       welcomeMessage.textContent= `Player 1 ('X') is ${name1} and Player 2 ('O') is ${name2}`;
       welcomeMessage.style.color = 'white';
    }
    function setRestartBtn(){
        const getRestartbtn = document.querySelector('.btnRestart');
       
        getRestartbtn.addEventListener('click', setFullReset);

    }
    function setFullReset(){
        // console.log('HELLO FROM RESET FUn')
        const getDivs = document.querySelectorAll('.TiTaToCell');
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
        getStartBtn.addEventListener('click', function getingStarted(){
            

            if(btnStart.textContent === 'Start')
            {
                
                btnStart.textContent = 'New Game';

                let p1Name = prompt('Please enter p1\'s name');
                let p2Name = prompt('Please enter p2\'s name ');

                gridContainerDiv.style.visibility ='visible';
                setPlayerName(p1Name, p2Name);
                getPlayerChoice();
                
       
            }
            else{
                setFullReset();
                btnStart.textContent = 'Start';

                
                gridContainerDiv.style.visibility ='hidden';
                welcomeMessage.textContent = '';
                
                
       
            }
            
        
       
    

     
       
            // mainDiv.style.display = 'block';


        
        
        })
       
        

    }
    function createGamePad(){
        welcomeMessage.setAttribute('class', 'welcomeMessage')
        gridContainerDiv.setAttribute('class', 'gridContainer')
     

        
        btnRestart.setAttribute('class', 'gameBtns btnRestart');
        btnRestart.textContent = 'Restart';
        btnRestart.style.visibility = 'hidden';


        const btnDiv = document.createElement('div');
        btnDiv.setAttribute('class', 'buttonsDiv')
        

        btnDiv.appendChild(btnRestart);

        
        mainDiv.appendChild(welcomeMessage);
        mainDiv.appendChild(btnDiv);
        mainDiv.appendChild(gridContainerDiv);
         for(let i = 1; i<=9; i++)
        {
            const creatingDivs = document.createElement('div');
            creatingDivs.setAttribute('class', 'TiTaToCell');
            creatingDivs.setAttribute('id', `divNum${i}` );
            gridContainerDiv.appendChild(creatingDivs);
        }

        mainBody.appendChild(mainDiv);
        


        


        

        
        
        


    }
    
    createGamePad();
    getStartGameInfo();
    setRestartBtn();
   
    // setDisplay();
    
    return {setSelected};


})();



