ball = document.querySelector("#ball");
//localStorage.setItem('count', count);

let Check = () =>{
  let ques1 = document.myForm.q_1.value
  let ques2 = document.myForm.q_2.value 
  let ques3 = document.myForm.q_3.value
  let ques4 = document.myForm.q_3.value
  let ques5 = document.myForm.q_3.value
  let local_count = localStorage.getItem('count')
  let count = 0
  if (ques1 == "b" || local_count == 0 )  count++
  if (ques2 == "a" || local_count == 0 ) count++
  if (ques3 == "a" || local_count == 0 ) count++ 
  if (ques4 == "a" || local_count == 0 ) count++
  if (ques5 == "a" || local_count == 0 ) count++
  //if ( local_count => 0 ) ball.innerHTML = local_count
  
  console.log(count*2)
 
  ball.innerHTML = count*2
 
  
}
ball.innerHTML = local_count