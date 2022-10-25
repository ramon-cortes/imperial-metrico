let salida = document.getElementById('resultado');

let conversor = {
  centig: function(x) {
    x = parseFloat(x);
    return (x - 32) * (5 / 9)
  },
  fahr: function(x) {
    x = parseFloat(x);
    return (x * (9 / 5)) + 32;
  },
  centiM: function(x) {
    let cm = x.split(' ');
    
    if (cm.length < 4 && cm[1]) {
      for (let i = 0; i < 2; i++) {
        cm[i] = parseInt(cm[i]);
      }
    }
    if (cm.length <= 3) {
      cm[0] = cm[0] * 30.48
    }
    if (cm.length > 1 && cm[1] && cm[1] <= 11) {
      //Tiene pulgadas
      cm[0] += cm[1] * 2.54;
    }
    if (cm.length === 3 && cm[2]) {
      //Tiene cuartos de pulgadas
      switch (cm[2]) {
        case '1/4':
          cm[2] = (1 / 4) * 2.54;
          break;
        case '2/4':
          cm[2] = (1 / 2) * 2.54;
          break;
        case '1/2':
          cm[2] = (1 / 2) * 2.54;
          break;
        case '3/4':
          cm[2] = (3 / 4) * 2.54;
          break;
        default:
          cm[2] = 0;
      }
      cm[0] += cm[2];
    }    
    return `${cm[0]}`;
  },
  pies: function(x) {
    let ft = [];
    ft[0] = parseInt(x / 30.48);
    ft[1] = ((x / 30.48) - ft[0]) * 12;
    ft[2] = ft[1] - parseInt(ft[1]);
    ft[1] = parseInt(ft[1]);
    if (ft[2] >= 0.25 && ft[2] < 0.5) {
      ft[2] = '1/4';
    } else if (ft[2] >= 0.5 && ft[2] < 0.75) {
      ft[2] = '1/2';
    } else if (ft[2] >= 0.75 && ft[2] < 1.5) {
      ft[2] = '3/4';
    } else ft[2] = '';
    return (ft.toString()).replaceAll(',', ' ');
  },
  centiMInch: function(x) {
    return x * 2.54
  },
  km: function(x) {
    return x * 1.609344;
  },
  mill: function(x) {
    return x / 1.609344;
  },
  kmh: function(x) {
    return x * 1.852;
  },
  nudos: function(x) {
    return x / 1.852;
  },
  kilogramos: function(x) {
    return x * 0.4535924;
  },
  pounds: function(x) {
    return x / 0.4535924;
  },
  sqft: function(x) {
    return x / 0.09290304;
  },
  m2: function(x) {
    return x * 0.09290304;
  },
  hp: function(x) {
    return x * 1.341022;
  },
  kw: function(x) {
    return x / 1.341022;
  },
  ml: function(x) {
    return x * 28.41306;
  },
  gr: function(x) {
    return x * 28.34952;
  },
  foz: function(x) {
    return x / 28.41306;
  },
  oz: function(x) {
    return x / 28.34952;
  }
}

function convertir() {
  let dato = document.getElementById('input').value;
  let unidad = document.getElementById('medidas').value;

  //Confirmar que el dato y la unidad funcionan
  //salida.innerHTML = dato + ' convertir a ' + unidad;

  switch (unidad) {
    case 'Fahrenheit':
      salida.innerHTML = conversor.centig(dato) + ' Centigrados';
      break;
    case 'Centigrados':
      salida.innerHTML = conversor.fahr(dato) + ' Fahrenheit';
      break;
    case 'Pies':
      salida.innerHTML = conversor.centiM(dato) + ' Centímetros';
      break;
    case 'Centimetros':
      salida.innerHTML = conversor.pies(dato) + ' Pies';
      break;
    case 'Pulgadas':
      salida.innerHTML = conversor.centiMInch(dato) + ' Centímetros';
      break;
    case 'Millas':
      salida.innerHTML = conversor.km(dato) + ' Kilómetros';
      break;
    case 'Kilometros':
      salida.innerHTML = conversor.mill(dato) + ' Millas';
      break;
    case 'Nudos':
      salida.innerHTML = conversor.kmh(dato) + ' Km/h';
      break;
    case 'Km/h':
      salida.innerHTML = conversor.nudos(dato) + ' Nudos';
      break;
    case 'Libras':
      salida.innerHTML = conversor.kilogramos(dato) + ' Kilogramos';
      break;
    case 'Kilogramos':
      salida.innerHTML = conversor.pounds(dato) + ' Libras';
      break;
    case 'Sqft':
      salida.innerHTML = conversor.m2(dato) + ' Metros Cuadrados';
      break;
    case 'M2':
      salida.innerHTML = conversor.sqft(dato) + ' Pies Cuadrados';
      break;
    case 'KW':
      salida.innerHTML = conversor.hp(dato) + ' HP';
      break;
    case 'HP':
      salida.innerHTML = conversor.kw(dato) + ' KW';
      break;
    case 'Oz':
      salida.innerHTML = conversor.ml(dato) + ' MiliLitros' + '<br>' + conversor.gr(dato) + ' Gramos';
      break;
    case 'Ml':
      salida.innerHTML = conversor.foz(dato) + ' Onzas líquidas';
      break;
    case 'Gr':
      salida.innerHTML = conversor.oz(dato) + ' Onzas';
      break;
  }
}
