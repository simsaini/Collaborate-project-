function myFunction() {
    var x = document.getElementById("white");
    var y = (x.contentWindow || x.contentDocument);
    if (y.document)y = y.document;
    y.body.style.backgroundColor = "white";
}
