function getRandomColor() {
    // Generate random values for red, green, and blue components
    const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const g = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const b = Math.floor(Math.random() * 256); // Random value between 0 and 255
    
    // Convert RGB values to hexadecimal format
    const hexR = r.toString(16).padStart(2, '0'); // Convert red to hexadecimal and ensure 2-digit format
    const hexG = g.toString(16).padStart(2, '0'); // Convert green to hexadecimal and ensure 2-digit format
    const hexB = b.toString(16).padStart(2, '0'); // Convert blue to hexadecimal and ensure 2-digit format
    
    // Concatenate hexadecimal values to form a color code
    const hexColor = `#${hexR}${hexG}${hexB}`;
    
    return hexColor;
    }

    const body=document.querySelector('body')
    const start=document.querySelector('#start')
    const stop=document.querySelector('#stop')
    let temp
    const changecolor=function(){
        let Color=getRandomColor()
        body.style.backgroundColor=Color
    }
    let flag=false
    start.addEventListener('click',function(){
        if(!flag){
            temp=setInterval(changecolor,1000)
            flag=true
        }
    })
    stop.addEventListener('click',function(){
        if(flag){
            clearInterval(temp)
            flag=false
        }
    })