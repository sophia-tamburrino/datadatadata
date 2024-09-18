let arrMain =
  [
    [0, 0, "Carretera", 1618.5, 3.00, 20.00],
    [0, 1, "Carretera", 1321, 3.00, 20.00],
    [1, 2, "Carretera", 2178, 3.00, 15.00],
    [1, 1, "Carretera", 888, 3.00, 15.00],
    [1, 3, "Carretera", 2470, 3.00, 15.00],
    [0, 1, "Carretera", 1513, 3.00, 350.00],
    [1, 1, "Montana", 921, 5.00, 15.00],
    [2, 0, "Montana", 2518, 5.00, 12.00],
    [0, 2, "Montana", 1899, 5.00, 20.00],
    [2, 1, "Montana", 1545, 5.00, 12.00],
    [1, 3, "Montana", 2470, 5.00, 15.00],
    [3, 0, "Montana", 2665.5, 5.00, 125.00],
    [4, 3, "Montana", 958, 5.00, 300.00],
    [0, 1, "Montana", 2146, 5.00, 7.00],
    [3, 0, "Montana", 345, 5.00, 125.00],
    [1, 4, "Montana", 615, 5.00, 15.00],
    [0, 0, "Paseo", 292, 10.00, 20.00],
    [1, 3, "Paseo", 974, 10.00, 15.00],
    [2, 0, "Paseo", 2518, 10.00, 12.00],
    [0, 1, "Paseo", 1006, 10.00, 350.00],
    [2, 1, "Paseo", 367, 10.00, 12.00],
    [0, 3, "Paseo", 883, 10.00, 7.00],
    [1, 2, "Paseo", 549, 10.00, 15.00],
    [4, 3, "Paseo", 788, 10.00, 300.00],
    [1, 3, "Paseo", 2472, 10.00, 15.00],
    [0, 4, "Paseo", 1143, 10.00, 7.00],
    [0, 0, "Paseo", 1725, 10.00, 350.00],
    [2, 4, "Paseo", 912, 10.00, 12.00],
    [1, 0, "Paseo", 2152, 10.00, 15.00],
    [0, 0, "Paseo", 1817, 10.00, 20.00],
    [0, 1, "Paseo", 1513, 10.00, 350.00],
    [0, 3, "Velo", 1493, 120.00, 7.00],
    [3, 2, "Velo", 1804, 120.00, 125.00],
    [2, 1, "Velo", 2161, 120.00, 12.00],
    [0, 1, "Velo", 1006, 120.00, 350.00],
    [2, 1, "Velo", 1545, 120.00, 12.00],
    [3, 4, "Velo", 2821, 120.00, 125.00],
    [3, 0, "Velo", 345, 120.00, 125.00],
    [4, 0, "VTT", 2001, 250.00, 300.00],
    [2, 1, "VTT", 2838, 250.00, 12.00],
    [1, 2, "VTT", 2178, 250.00, 15.00],
    [1, 1, "VTT", 888, 250.00, 15.00],
    [0, 2, "VTT", 1527, 250.00, 350.00],
    [4, 2, "VTT", 2151, 250.00, 300.00],
    [0, 0, "VTT", 1817, 250.00, 20.00]
  ]

let arrSeg = [
  [0, "Government"],
  [1, "Midmarket"],
  [2, "Channel Partners"],
  [3, "Enterprise"],
  [4, "Small Business"]
]

let arrCountry =
  [
    [0, "Canada"],
    [1, "Germany"],
    [2, "France"],
    [3, "Mexico"],
    [4, "United States of America"]
  ]

function getSeg() {
  var strOutput = "<table>";

  for (i = 0; i < arrSeg.length; i++) {
    let segProf = 0;
    for (j = 0; j < arrMain.length; j++) {
      if (arrMain[j][0] == arrSeg[i][0]) {
        segProf += Number((arrMain[j][5] - arrMain[j][4]) * arrMain[j][3]);
      }
    }
    strOutput += "<tr><td></strong>" + arrSeg[i][1] + "</strong></td><td>" + formatCurrency(segProf) + "</td></tr>";
  }
  strOutput += "</table>";
  document.getElementById('output').innerHTML = strOutput;
}

function getCountry() {
  var strOutput = "<table>"
  for (i = 0; i < arrCountry.length; i++) {
    let profit = 0
    for (j = 0; j < arrMain.length; j++) {
      if (arrCountry[i][0] == arrMain[j][1]) {
        profit += Number((arrMain[j][5] - arrMain[j][4]) * arrMain[j][3]);
      }
    }
    strOutput += "<tr><td></strong>" + arrCountry[i][1] + "<tr><td></strong>" + formatCurrency(profit) + "</td></tr>";
  }
  strOutput += "</table>";
  document.getElementById('output').innerHTML = strOutput;
}

function challenge() {
  var strOutput = "<table>";
  for (x = 0; x < arrCountry.length; x++) {

    for (i = 0; i < arrSeg.length; i++) {
      let profit = 0;
      for (j = 0; j < arrMain.length; j++) {
        if (arrMain[j][1] == arrCountry[x][0] && arrSeg[i][0] == arrMain[j][0]) {
          profit += Number((arrMain[j][5] - arrMain[j][4]) * arrMain[j][3]);
        }
      }
      strOutput += "<tr><td></strong>" + arrCountry[x][1] + "<tr><td></strong>" + arrSeg[i][1] + "<tr><td></strong>" + formatCurrency(profit);
    }
    strOutput += "<br><br>"
  }

  strOutput += "</table>";
  document.getElementById('output').innerHTML = strOutput;


}

function formatCurrency(num) {
  num = num.toString().replace(/\$|\,/g, '');
  if (isNaN(num)) {
    num = "0";
  }

  sign = (num == (num = Math.abs(num)));
  num = Math.floor(num * 100 + 0.50000000001);
  cents = num % 100;
  num = Math.floor(num / 100).toString();

  if (cents < 10) {
    cents = "0" + cents;
  }
  for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++) {
    num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
  }

  return (((sign) ? '' : '-') + '$' + num + '.' + cents);
}
