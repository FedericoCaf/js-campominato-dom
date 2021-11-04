
document.getElementById('button-play').addEventListener('click', function(){
  play();
})



function play(){
 
  const level = parseInt(document.getElementById('level').value);
   console.log(level);
   const gridLevels = [100, 81, 49]
   const cellNumbers = gridLevels[level-1];
   const cellPerRow = Math.sqrt(cellNumbers);
   console.log('cell per row',cellPerRow);

   const BOMBS_NUMBER = 16;
   const MAX_ATTEMPTS = cellNumbers - BOMBS_NUMBER;
   console.log('MAX',MAX_ATTEMPTS);
   let attempts = 0;
   const attempList = [];
   const bombs = generateBombs();
  //  console.log('bombe',bombs);

   document.querySelector('main').innerHTML = '';

   console.log('bombe',bombs);

   createSquare();

  
   function createSquare(){

    const grid = document.createElement('div');
    grid.className = 'container-grid';
    
    for (let i = 1; i <=cellNumbers; i++) {
      let square = document.createElement('div')
      square.className = 'square';
      square.innerHTML = `<span> ${i} </span>`;
      const cellSize = `calc(100% / ${cellPerRow})`;
     
      square.style.width = cellSize;
      square.style.height = cellSize;

      square.addEventListener('click', handleClickSquare);
  
      grid.append(square);
      // console.log(square);
    }
   document.querySelector('main').append(grid);
  }
 
  function handleClickSquare(event){

  const cellValue = parseInt(event.target.innerText);

   if(bombs.includes(cellValue)){
     endGame();
   }else{
     if(!attempList.includes(cellValue)){
     attempts++;
     attempList.push(cellValue);
     this.classList.add('clicked');
     if(attempts === MAX_ATTEMPTS){
       endGame();
     }
    
    }

   }
  }

  function endGame(){
    console.log('END GAME');
    const cells = document.getElementsByClassName('square');
    console.log(cells);
    for (let i = 0; i < cells.length; i++) {
      if (bombs.includes(i+1)){
        cells[i].classList.add('clicked-bomb');
      }
      cells[i].removeEventListener('click', handleClickSquare);
    }

    let msg = '';
    if(attempts == MAX_ATTEMPTS){
      msg = 'Hai vinto';
    }else{
      msg = `Hai perso, punteggio: ${attempts} `;
    }

    const messaggioFinale = document.querySelector('.container-punteggio');
    messaggioFinale.innerHTML = `<h5> ${msg} </h5>`;
    console.log('messaggio finale', msg);
    
  }

  function generateBombs(){
    const bombs = [];
    console.log('BOMBS NUMBER',BOMBS_NUMBER);
    
    while(bombs.length < BOMBS_NUMBER){
      const bomb = getRandomInt(1, cellNumbers);
      if (!bombs.includes(bomb)) bombs.push(bomb);
      
    }
    return bombs;
  }
}

function getRandomInt(min, max){
  return Math.floor(Math.random() * (max - min + 1) + min);
}
   
   

  
  






