function makeBigger() {
    alert("Hello, world!");
    document.getElementById('textarea').style.fontSize = "24pt";
}

function makeFancy() {
    alert("Make Fancy");
    document.getElementById('textarea').style.color = "blue";
    document.getElementById('textarea').style.fontWeight = "bold";
    document.getElementById('textarea').style.backgroundColor = "yellow";
    document.getElementById('textarea').style.textDecoration = "underline";
}

function boringBetty() {
    alert("Boring Betty");
    document.getElementById('textarea').style.color = "black";
    document.getElementById('textarea').style.fontWeight = "normal";
    document.getElementById('textarea').style.backgroundColor = "white";
    document.getElementById('textarea').style.textDecoration = "none";
}

function moo() {
    document.getElementById('textarea').style.textTransform = "uppercase";
    var sentence = document.getElementById('textarea').value.split(".");
    for(let i = 0; i < sentence.length-1; i++) {
        sentence[i] = sentence[i] + "-Moo"
    }
    document.getElementById('textarea').value = sentence.join(".")
}

