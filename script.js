const startGame = (() =>{
    const gameBoard = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];

    let numberOfTurns = 1;
    let isThereAWinner = false;
    let playerOneTurn = true;
    const mainBody = document.querySelector('body');
    const mainDiv = document.createElement('div');
    
    
    function testForWinner(gamePiece){

        let savingGamePiece = gamePiece;
        // savingGamePiece = 'X';

        numberOfTurns++;

        

        // const savingIndex = [];
        gameBoard.forEach((row, rowIndex) =>{

            

            let rowWin = row.every(matching => matching ===savingGamePiece)
            if(rowWin===true)
            {
                console.log('WINNER FOR ROW');
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
                                console.log('WINNDER FOR COLUMNS');
                                isThereAWinner = true;
                            }
                        }
                    if(gameBoard[rowIndex][colIndex]=== gameBoard[rowIndex+1][colIndex+1])
                    {
                      if(gameBoard[rowIndex+1][colIndex+1]=== gameBoard[rowIndex+2][colIndex+2]) 
                            {
                                console.log('WINNDER FOR LEFT CROSS');
                                isThereAWinner = true;
                            }
                    }
                    
                    

                    if(isThereAWinner == false)

                    
                        //Theres an issue with this outputting three times and cant seem to get it to work
                    {
                        if(gameBoard[rowIndex][colIndex] === gameBoard[1][1])
                    {
                        if(gameBoard[1][1] === gameBoard[2][0]) 
                            {
                                console.log('WINNDER FOR RIGHT CROSS');
                                isThereAWinner == true;
                            }
                    }
                    }
                    
                    
                    
                }
               

            })

        });

       if(numberOfTurns === 10 && isThereAWinner === false)
        {
            console.log('ITS A TIE');
        } 


     


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
         testForWinner(playerPiece);
    }
    function getPlayerChoice(){

        const getDivs = document.querySelectorAll('.TiTaToCell');

        getDivs.forEach(cell =>{

            
            cell.addEventListener('click', (e)=>{
            
        if(playerOneTurn === true )
            {
                // let input = prompt('Pick a location Player 1');
                // setSelected(input, 'X');
                console.log('HELLO X')
                cell.textContent = 'X';
                cell.style.color= 'Red';
                
                playerOneTurn = false;
            }
        else
            {
                // let input = prompt('Pick a location Player 2');
                // setSelected(input, 'O');
                console.log('HELLO O')
                cell.textContent = 'O';
                cell.style.color= 'Green';
                playerOneTurn = true;
            }


            })


        })

       

    }

    
    function createGamePad(){
        // mainDiv.style.background='Black';
        // mainDiv.textContent = 'HELLO WORLD';
        mainBody.style.height= '100vh';
        mainBody.style.alignContent= 'center';
        
        mainDiv.style.width= '400px';
        mainDiv.style.height= '400px';
        mainDiv.style.justifySelf= 'center';
       
        // mainDiv.style.border = 'solid red 2px'
        mainDiv.style.color = 'white';
        mainDiv.style.background = 'black';


          
        for(let i = 0; i<9; i++)
        {
            const creatingDivs = document.createElement('div');
            creatingDivs.classList.add('TiTaToCell');
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

        getPlayerChoice();


    }
    setDisplay();
    createGamePad();
    return {setSelected};


})();



