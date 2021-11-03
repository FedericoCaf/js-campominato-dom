
const buttonPlay = document.getElementById('button-play');
buttonPlay.addEventListener('click', function(){

   const containerGrid = document.querySelector('.container-grid');
   const mainTitle = document.getElementById('main-title');
   containerGrid.innerHTML = '';
   mainTitle.innerHTML = '';
  
  if(detectChange() === 'Easy'){

    for(let i=0; i<100; i++){  
      const squareEasy = createSquare(containerGrid);
      squareEasy.addEventListener('click', function(){
      this.classList.add('clicked');
     })
  }
  }
 
  if(detectChange() === 'Hard') {
    for(let i=0; i<81; i++){
      const squareHard = createSquareHard(containerGrid);
      squareHard.addEventListener('click', function(){
      this.classList.add('clicked');
     })
       
    }
  }
  if(detectChange() === 'Crazy') {
    for(let i=0; i<49; i++){
      const squareCrazy = createSquareCrazy(containerGrid);
      squareCrazy.addEventListener('click', function(){
      this.classList.add('clicked');
     })
    
    }
  }

})


function createSquare(target){
  let squareEasy = document.createElement('div');
  squareEasy.className = 'square easy';
  target.append(squareEasy);
  return squareEasy;
}
function createSquareHard(target){
  let squareHard = document.createElement('div');
  squareHard.className = 'square hard';
  target.append(squareHard);
  return squareHard;
}
function createSquareCrazy(target){
  let squareCrazy = document.createElement('div');
  squareCrazy.className = 'square crazy';
  target.append(squareCrazy);
  return squareCrazy;
}


function detectChange() {
  let opzioneSelect = document.getElementById("difficolta").value;
  // console.log(opzioneSelect);
  // console.log('Easy');
  if(opzioneSelect == 1) return 'Easy';
  if(opzioneSelect == 2) return 'Hard';
  if(opzioneSelect == 3) return 'Crazy';

}
let opzioneScelta = detectChange();
console.log(opzioneScelta);
