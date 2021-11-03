
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
   const bombs = generateBombs();
  //  console.log('bombe',bombs);

   document.querySelector('main').innerHTML = '';

   console.log('bombe',bombs);

   createSquare();
   
   function createSquare(){

    const grid = document.createElement('div');
    grid.className = 'container-grid';
    
    for (let i = 1; i <=cellNumbers; i++) {
      let square = document.createElement('div');
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
    console.log('event', event.target.innerText);
    const squareClicked = parseInt(event.target.innerText);
    console.log('square clicked', squareClicked);
    if(bombs.includes(squareClicked)){
      this.classList.add('clicked-bomb') 

      for (let i = 1; i <= cellNumbers; i++) {
        if(bombs.includes(i)){
          this.classList.add('clicked-bomb');
        } 
      }
    }

   
    this.classList.add('clicked');
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
   
   

  
  






