const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const btn3 = document.querySelector('#btn3');
const bmw = document.querySelector('#bmw')
const audi = document.querySelector('#audi')
const continer1= document.querySelector('.container1')
const continer2= document.querySelector('.container2')



btn1.addEventListener('click', () => {
    let count = Number(bmw.textContent)
    bmw.textContent = ++count;
})
btn2.addEventListener('click', () => {
    let count = Number(audi.textContent)
    audi.textContent = ++count;
})

btn3.addEventListener('click', () => {
    
    let bCnt = Number(bmw.textContent);
        let aCnt = Number(audi.textContent);
        if (aCnt > bCnt){
            continer2.style.backgroundColor='Green'   
            localStorage.setItem('winner','Audi')
        }
        else if (aCnt === bCnt) {
           alert('Match Tie')  
           localStorage.setItem('winner','Tie')
        }
        else {
            continer1.style.backgroundColor='Green'  
            localStorage.setItem('winner','BMW') 
        } 
        //     if('click'){
            //     bmw.textContent=`0`;
            //     audi.textContent=`0`;
    // }
})


setTimeout(() => {
    let bCnt = Number(bmw.textContent);
    let aCnt = Number(audi.textContent);
    let winner;
    if (aCnt > bCnt){
        continer2.style.backgroundColor='Green'   
        winner='Audi';
    }
    else if (aCnt === bCnt) {
        alert('Match Tie')   
        winner='Tie';
    }
    else {
        continer1.style.backgroundColor='Green'  
        winner='BMW'; 
    } 
    localStorage.setItem('winner',winner)
},60000)


// localStorage.setItem('Winner',WinnerName);

// let WinnerName = JSON.parse(localStorage.getItem(()=>{
    
//         if(aCnt>bCnt){
//             WinnerNam=`Audi`
//         }
//         if(aCnt==bCnt){
//             WinnerNam=`Match Tie`
//         }
//         else{
//             WinnerNam=`BMW`
//         }
// }))



// // for the container 2
// let num2 = document.createElement('h3');
// num2.innerHTML = `0`
// num2.style.marginTop = '-65px'
// num2.style.marginLeft = '131px'
// container2.appendChild(num2);
// document.body.container2;

// let initival2 = num2.innerHTML = `0`
// let lastValue2 = '';
// btn2.addEventListener('click', () => {
//     initival2++;
//     lastValue2 = `${initival2}`;
//     num2.textContent = lastValue2;
//     console.log(lastValue2)

// })




// // for The Container 1

// let num1 = document.createElement('h3');
// num1.style.marginTop = '-65px'
// num1.style.marginLeft = '150px'
// container1.appendChild(num1);
// document.body.container1;
// let initival1 = num1.innerHTML = `0`
// let lastValue1 = '';
// btn1.addEventListener('click', () => {
//     initival1++;
//     lastValue1 = `${initival1}`;
//     num1.textContent = lastValue1

// })

// btn3.addEventListener('click', () => {

//     if (lastValue1 > lastValue2) {
//         alert('BMW winner');
//     }
//     else if (lastValue2 > lastValue1) {
//         alert('Audi winner')
//     }

//     else (lastValue1 = lastValue2)(
//         alert('Match Tied')
//     )



// })
