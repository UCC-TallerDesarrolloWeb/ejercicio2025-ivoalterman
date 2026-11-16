/**
 * Convierte las unidades ingresadas por el usuario
 * @method convertirUnidades
 * @param {string} unidad - Unidad ingresada: metro, pie, pulgada, yarda
 * @param {number} valor - Valor numérico ingresado por el usuario (puede ser con coma)
 */
let convertirUnidades = (unidad, valor) => {
  let metro, pie, pulgada, yarda;

  if (valor.includes(",")) {
    valor = valor.replace(",", ".");
  }

  if (isNaN(valor)) {
    alert("El valor ingresado no es correcto");
    metro = "";
    pie = "";
    pulgada = "";
    yarda = "";
  } else {
    if (unidad == "unid_metro") {
      metro = valor;
      pie = 3.28 * metro;
      pulgada = 39.37 * metro;
      yarda = 1.0936 * metro;
    } else if (unidad == "unid_pie") {
      pie = valor;
      metro = 0.3048 * pie;
      pulgada = 12 * pie;
      yarda = 0.3333 * pie;
    } else if (unidad == "unid_pulgada") {
      pulgada = valor;
      //tarea
    } else {
      yarda = valor;
      //tarea
    }
  }

  document.getElementById("metro").value = Number(metro).toFixed(2);
  document.getElementById("pie").value = Math.round(pie * 100) / 100;
  document.getElementById("pulgada").value = Number(pulgada).toFixed(2);
  document.getElementById("yarda").value = Math.round(yarda * 100) / 100;
};

/**
 * Convierte grados a radianes y viceversa
 * @method convertirGR
 * @param {string} id - Grados o Radianes
 * @param {number} valor - Valor numérico ingresado por el usuario (puede ser con coma)
 */
let convertirGR = (id, valor) => {
  let cantGrados, cantRadianes;
  if (id == "grados") {
    cantGrados = valor;
    cantRadianes = (cantGrados * Math.PI) / 180;
    document.getElementById("radianes").value = cantRadianes;
  } else {
    cantRadianes = valor;
    cantGrados = (cantRadianes * 180) / Math.PI;
    document.getElementById("grados").value = cantGrados;
  }
};

let mostrarOcultarDiv = (id) => {
  // if (id == "mostrarDiv") {
  //   document.getElementsByName("unDiv")[0].style.display = "block";
  // } else {
  //   document.getElementsByName("unDiv")[0].style.display = "none";
  // }

  const mostrar = id == "mostrarDiv" ? "block" : "none";
  document.getElementsByName("unDiv")[0].style.display = mostrar;
};

let sumar = () => {
  let sum1 = document.getElementById("nums1").value;
  let sum2 = document.getElementById("nums2").value;

  if (isNaN(sum1) || isNaN(sum2)) {
    alert("Una de las variables ingresadas no es numérica");
  } else {
    document.getElementById("totalS").value = Number(sum1) + Number(sum2);
  }
};