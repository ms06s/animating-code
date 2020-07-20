let html = document.querySelector('#html')
let style = document.querySelector('#style')
let string = `/*
*i
*am
*iron
*man
*green iron man!*/
body {
  color: green;
}
.taiji {
  width: 200px; 
  height: 200px;
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,1,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}

.taiji::before {
  content: '';
  display: block;
  width: 100px;
  height: 100px;
  position: relative;
  top: 0%;
  left: 50%;
  transform: translate(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,1,1) 25%, rgba(0,0,0,1) 100%);
  
}

.taiji::after {
  content: '';
  display: block;
  width: 100px;
  height: 100px;
  position: relative;
  top: 0%;
  left: 50%;
  transform: translate(-50%);
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,1,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
@keyframes rotate {
  from {transform: none;}
  to {transform: rotate(360deg)}
}

.taiji {
  animation: 4s linear 0s infinite rotate;
}
`
let write = ''
let writeStyle = ''
let n = -1

function step() {
  setTimeout(() => {
    n += 1
    if (n < string.length) {
      if (string[n] === '\n') {
        write += '<br>'
      }
      if (string[n] === ' ') {
        write += '&nbsp;'
      } else {
        write += string[n]
      }
      //write += string[n]
      html.innerHTML = write
      //console.log(write)
      writeStyle += string[n]
      style.innerHTML = writeStyle
      html.scrollTo(0, 99999)
      window.scrollTo(0, 99999)
      step()
    }
    //console.log(style)
  }, 0)
}
step()
