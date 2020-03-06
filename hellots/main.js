var minhaVar = "minha Variavel";
function minhaFunc(x, y) {
    return x + y;
}
//ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (i) { return i + 1; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    Matematica.prototype.multiplicacao = function (x, y) {
        return x * y;
    };
    return Matematica;
}());
var texto = "erer";
//texto = 4; error
var qualquer = 5;
