
setInterval(()=>{
  let hour = document.getElementsByClassName("hour")[0];
  let minute = document.getElementsByClassName("minute")[0];
  let second = document.getElementsByClassName("second")[0];
  let am = document.querySelector(".am")
  console.log(am)
  let time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  if(h>=12) am.innerText = "PM";
  if(s<10) s=`0${s}`
  if(m<10) m=`0${m}`
  if(h<10) h=`0${h}`
  hour.innerText = h;
  minute.innerText = m;
  second.innerText = s;
} , 1000)
//console.log(s)
//console.log(time);
//console.log(hour)