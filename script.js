const svg = document.getElementById("svg-canvas");

window.addEventListener("resize", resizeSvg);

function resizeSvg(){

    svg.setAttribute("viewBox", `0 0 ${window.innerWidth} ${window.innerHeight}`);
    
    for(let circle of svg.children){
        circle.setAttribute('r', Math.min(window.innerWidth, window.innerHeight) * 0.1);
    }

    for(let rect of svg.children){
        rect.setAttribute('width', Math.min(window.innerWidth, window.innerHeight) * 0.1);
        rect.setAttribute('height', Math.min(window.innerWidth, window.innerHeight) * 0.06);
    }

}
