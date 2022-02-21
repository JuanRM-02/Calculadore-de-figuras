//Cuadradp
const perimetroCuadrado = (lado1) => {
    return lado1 * 4;
}
const areaCuadrado = (lado1) => {
    return lado1**2;
}

//Rectángulo
const perimetroRectangulo = (largo, ancho) => {
    (largo + largo) + (ancho + ancho);
}
const areaRectangulo = (largo, ancho) => { return largo * ancho }

//Triángulo
const perimetroTrianguio = (lado1, lado2, base) => {
    return lado1 + lado2 + base;
}
// const alturaTriangulo = (lado1, lado2, base) => {
//     return
// }
const areaTriangulo = (altura, base) => {
    return (base * altura) / 2;
}

//Círculo
const circunferencia = (diametro) => {
    const PI = Math.PI;
    return diametro * PI;
}
const radio = (diametro) => {return diametro / 2}
const diametro = (diametro) => {return diametro * 2}
const areaCirculo = (radio) => {
    const PI = Math.PI;
    return radio**2 * PI;
}