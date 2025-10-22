const startGame = () =>{
    const gameBoard = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
        


    const result = ()=>{
        console.log('hello');
    }
    const display = ()=>{
        gameBoard.forEach(cell => {
        
            console.log(cell)
            
        });
    }
    const testForWinner = (gamePiece) =>{

        let savingGamePiece = gamePiece;
        let isThereAWinner = false;
        savingGamePiece = 'X';
        // const savingIndex = [];
        gameBoard.forEach((row, rowIndex) =>{

            

            let rowWin = row.every(matching => matching ===savingGamePiece)
            if(rowWin===true)
            {
                console.log('WINNER FOR ROW');
                
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
                            }
                        }
                    if(gameBoard[rowIndex][colIndex]=== gameBoard[rowIndex+1][colIndex+1])
                    {
                      if(gameBoard[rowIndex+1][colIndex+1]=== gameBoard[rowIndex+2][colIndex+2]) 
                            {
                                console.log('WINNDER FOR LEFT CROSS');
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

        


     


    }
    const select = (move) =>{
        gameBoard.forEach(cell =>{

            let replace = cell.findIndex(element => element===move);
            
            if(replace!= -1) cell[replace]='X';
        })
        
         display();
         testForWinner();

    }
    

    return {display, result , select};


}

const start = startGame();
start.display();

