
const vehiculo1 = {
  modelo: "Mustang",
  color: "Negro"
};

const vehiculo2 = {
  modelo: "Tusuru",
  color: "Azul"
};


vehiculo1.vehiculoRelacionado = vehiculo2;
vehiculo2.vehiculoRelacionado = vehiculo1;


const arregloVehiculos = [vehiculo1, vehiculo2];


arregloVehiculos.push({ modelo: "Camioneta", color: "Negro", vehiculoRelacionado: null });
arregloVehiculos[0].color = "Verde";

console.log(arregloVehiculos);

