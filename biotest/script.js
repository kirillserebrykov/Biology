ball = document.querySelector("#ball");
 let localStorageCount = localStorage.getItem('count') 
if (localStorageCount > 0){
  ball.innerHTML = localStorageCount
}

let Check = () =>{
  
  let ques1 = document.myForm.q_1.value
  let ques2 = document.myForm.q_2.value 
  let ques3 = document.myForm.q_3.value
  let ques4 = document.myForm.q_4.value
  let ques5 = document.myForm.q_5.value
  let count = 0
 
 
  if (ques1 == "b" || localStorageCount == 0)  count++
  if (ques2 == "a" || localStorageCount == 0) count++
  if (ques3 == "a" || localStorageCount == 0) count++ 
  if (ques4 == "a" || localStorageCount == 0) count++
  if (ques5 == "c" || localStorageCount == 0) count++
  
  console.log(count)

 
  ball.innerHTML = count*2
  localStorage.setItem('count', count*2);
 
  
}
