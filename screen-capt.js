// Tombol
// var prev = document.getElementsByClassName('component_base')[0].click();  // prev
var next = document.getElementsByClassName('component_base')[1];  // next

// Declare function
let canv = document.createElement("script"); 
let jspdf = document.createElement("script");
let div = document.createElement("script");


// Download jpg
canv.onload = function () {

    let n = document.getElementsByClassName('slides_label')[0].innerHTML.substr(4, 5);
    for (var i=1; i<=n+1; i++) {
        var t = i*2000;
        setTimeout(run, t);
        setTimeout(test, t+1000);
    }
    
};


function test() {
    next.click();
}

function run() {
    var container = document.getElementById("playerView");; // full page 
    html2canvas(container, { allowTaint: true }).then(function (canvas) {

        var link = document.createElement("img");
        document.body.appendChild(link);
        link.download = "html_image.jpg";
        link.src = canvas.toDataURL();
        link.style = "display: none;";
        // link.id = "ambil";
        // link.target = '_blank';                
        // link.click();
    });
}


// append to html body
jspdf.src = 'https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js';
canv.src = 'https://cdn.jsdelivr.net/npm/html2canvas@1.0.0-rc.5/dist/html2canvas.min.js';
div.src = 'https://code.jquery.com/jquery-1.12.3.min.js';

document.body.appendChild(jspdf);
document.body.appendChild(canv);
document.body.appendChild(div);
