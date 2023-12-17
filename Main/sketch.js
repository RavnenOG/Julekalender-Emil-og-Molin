let gateXArr = new Array
let gateYArr = new Array

function preload(){

}

function setup(){
createCanvas(windowWidth,windowHeight)



for(let g = 0;g<=24;g++){
    //random is a test, pls delete them again if u forget Emil
    let xRandom = Math.floor(random(windowWidth/2,windowWidth/2))
    let yRandom = Math.floor(random(windowHeight/2,windowHeight/2))

    gateXArr[g].push(xRandom)
    gateYArr[g].push(yRandom)
}

}

function draw(){
    for(let i = 0;i<=24;i++){
        let gX = gateXArr[i]
        fill(0)
        rect(gateXArr,gateYArr,20)
    }
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}