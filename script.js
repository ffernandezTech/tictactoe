const startGame = (() =>{
    const gameBoard = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    let playerName = '';
    let numberOfTurns = 1;
    let isThereAWinner = false;
    let playerOneTurn = true;
    const mainBody = document.querySelector('body');
    const mainDiv = document.createElement('div');
    
    
    function testForWinner(gamePiece, playerNumber){

        let savingGamePiece = gamePiece;
        let playerNum;
        if(playerNumber === true)
        {
            // console.log('player 1 is made')
            playerNum = 'Player 1';
        }
        else
        {
            playerNum = 'Player 2'
        }

        

        
        if(numberOfTurns >=4 && isThereAWinner == false)
        {
            console.log(numberOfTurns);
            gameBoard.forEach((row, rowIndex) =>{

            

            let rowWin = row.every(matching => matching ===savingGamePiece)
            if(rowWin===true)
            {
                // console.log('test 0');
                 console.log(`${playerNum} HAS WON`);
                isThereAWinner = true;
                
            }
            row.forEach((item, colIndex)=>{

                // console.log(item +' row ' +rowIndex+' col ' + colIndex);

                // console.log('currently in ' + gameBoard[rowIndex][colIndex] + ' these are indexs being used ROW ' + rowIndex + ' This is the COL' + colIndex )
                if(rowIndex == 0)
                {

                     if(gameBoard[rowIndex][colIndex]=== gameBoard[rowIndex+1][colIndex])
                        {
                            if(gameBoard[rowIndex+1][colIndex] ===  gameBoard[rowIndex+2][colIndex])
                            {
                                // console.log('test 1');
                                console.log(`${playerNum} HAS WON`);
                                isThereAWinner = true;
                            }
                        }
                    if(gameBoard[rowIndex][colIndex]=== gameBoard[rowIndex+1][colIndex+1])
                    {
                      if(gameBoard[rowIndex+1][colIndex+1]=== gameBoard[rowIndex+2][colIndex+2]) 
                            {
                                // console.log('test 2');
                                console.log(`${playerNum} HAS WON`);
                                isThereAWinner = true;
                            }
                    }
                    
                    
                    if(isThereAWinner === false)
                    {
                        if(gameBoard[0][2] === gameBoard[1][1])
                    {
                        if(gameBoard[1][1] === gameBoard[2][0]) 
                            {
                                // console.log('test 3');
                                console.log(`${playerNum} HAS WON`);
                                isThereAWinner = true;
                            }
                    }
                    }
                    
                    
                    
                }
               

            })

        });

       if(numberOfTurns === 9 && isThereAWinner === false)
        {
            console.log('ITS A TIE');
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

            
            cell.addEventListener('click', (e)=>{
            
        if(playerOneTurn === true )
            {                
                const getCellID = cell.getAttribute('id');

                setSelected(getCellID, 'X', playerOneTurn);
                cell.textContent = 'X';
                cell.style.color= 'Red';
                
                playerOneTurn = false;
            }
        else
            {
                 const getCellID = cell.getAttribute('id');

                setSelected(getCellID, 'O',playerOneTurn);
                cell.textContent = 'O';
                cell.style.color= 'Green';
                playerOneTurn = true;
            }


            })


        })

       

    }
    function setPlayerName(name){
        playerName = name;




    }

    function getStartGameInfo(){

        const getStartBtn = document.querySelector('.btnStart');
        getStartBtn.addEventListener('click', ()=>{
            let name = prompt('Please enter your name');

            setPlayerName(name);
            



        })

    }

    
    function createGamePad(){
        // mainDiv.style.background='Black';
        // mainDiv.textContent = 'HELLO WORLD';
        mainBody.style.height= '100vh';
        mainBody.style.alignContent= 'center';

        const welcomeMessage = document.createElement('p');


        const btnStart = document.createElement('button');
        const btnRestart = document.createElement('button');

        btnStart.setAttribute('class', 'gameBtns btnStart');
        btnRestart.setAttribute('class', 'gameBtns btnRestart');

        btnStart.textContent = 'Start';
        btnRestart.textContent = 'Restart';
        

        const btnDiv = document.createElement('div');

        btnDiv.appendChild(btnStart);
        btnDiv.appendChild(btnRestart);

        

        mainBody.appendChild(btnDiv);
        btnDiv.style.justifySelf= 'center';


        
        mainDiv.style.width= '400px';
        mainDiv.style.height= '400px';
        mainDiv.style.justifySelf= 'center';
       
        // mainDiv.style.border = 'solid red 2px'
        mainDiv.style.color = 'white';
        mainDiv.style.background = 'black';


          
        for(let i = 1; i<=9; i++)
        {
            const creatingDivs = document.createElement('div');
            creatingDivs.classList.add(`TiTaToCell`);
            creatingDivs.setAttribute('id', i );
            creatingDivs.style.background= 'white';
            // creatingDivs.style.color= 'black';
            creatingDivs.style.fontSize = '50px';
            creatingDivs.style.fontWeight ='bolder';
            creatingDivs.style.display= 'flexbox';
            creatingDivs.style.display = 'grid';
            creatingDivs.style.justifyContent= 'center';
            creatingDivs.style.alignContent= 'center';

            mainDiv.appendChild(creatingDivs);


        }

        mainDiv.style.display = 'grid';
        mainDiv.style.gridTemplateColumns ='repeat(3, 120px)';
        mainDiv.style.gridTemplateRows = 'repeat(3, 120px)';
        mainDiv.style.gap='5px';

        mainDiv.style.justifyContent= 'center';
        mainDiv.style.alignContent= 'center';

        mainBody.appendChild(mainDiv);

        getStartGameInfo();
        getPlayerChoice();


    }
    setDisplay();
    createGamePad();
    return {setSelected};


})();



