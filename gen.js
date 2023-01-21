function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
    document.getElementById("randomid").innerHTML = (makeid(9));
}
document.getElementById("randomid").innerHTML = (makeid(9));
console.log(makeid(9));
function make() {
    document.getElementById("randomid").innerHTML = (makeid(9));
}
function copy() {
    var text = document.getElementById("randomid").innerHTML;
    navigator.clipboard.writeText(text)
}