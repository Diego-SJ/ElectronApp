
window.onload = function () {
    const val_amp = document.getElementById("range_portadora");
    const val_Mod = document.getElementById("range_moduladora");
    const resultMod = document.getElementById("range_modulada");
    const btn_reset = document.getElementById("resetCharAndForms");
    const velocidad = 1000;

    //BTN RESET
    btn_reset.addEventListener("click", function(){
        document.getElementById("a_am").value = 0;
        document.getElementById("f_am").value = 0;
        document.getElementById("p_pm").value = 0;
        document.getElementById('range_portadora').value = 0;
        document.getElementById('range_moduladora').value = 0;
        document.getElementById('range_modulada').value = -31416;
    });

    // SEÑAL PORTADORA
    val_amp.addEventListener("change", function(){
        firstChar();
        thridChar();
    });
    
    //SEÑAL MODULADORA
    val_Mod.addEventListener("change", function(){
        secondChar();
        thridChar();
    });

    //SEÑAL MODULADA
    resultMod.addEventListener('change', function(){
        thridChar();
    });

    function firstChar(){
        const valorInput = document.getElementById("a_am");
        var dps = [];
        var portadora = new CanvasJS.Chart("chartPortadora", {
            exportEnabled: true,
            title :{
                text: "SEÑAL PORTADORA"
            },
            axisY: {
                includeZero: true
            },
            data: [{
                type: "spline",
                markerSize: 0,
                dataPoints: dps 
            }]
        });

        var xVal = 1;
        var auxXval = parseInt(valorInput.value)/10;
        var aux = 1;
        var yVal = 0;
        var updateInterval = velocidad;
        var dataLength = 2/auxXval; // number of dataPoints visible at any point

        var updateChart = function (count) {
            count = count || 1;
            // count is number of times loop runs to generate random dataPoints.
            for (var j = 0; j < count; j++) {	
                yVal = (aux%2 == 0)?200:-200;
                dps.push({
                    x: xVal,
                    y: yVal
                });
                aux++;
                xVal = aux * auxXval;
            }
            if (dps.length > dataLength) {
                dps.shift();
            }
            portadora.render();
        };

        updateChart(dataLength); 
        setInterval(function(){ updateChart() }, updateInterval); 
    }

    function secondChar(){
        const valorInputM = document.getElementById("f_am");
        var dpsM = [];
        var moduladora = new CanvasJS.Chart("chartModuladora", {
            exportEnabled: true,
            title :{
                text: "SEÑAL MODULADORA"
            },
            axisY: {
                includeZero: true
            },
            data: [{
                type: "spline",
                markerSize: 0,
                dataPoints: dpsM 
            }]
        });

        var xValM = 1;
        var auxXvalM = parseInt(valorInputM.value)/10;
        var auxM = 1;
        var yValM = 0;
        var updateIntervalM = velocidad;
        var dataLengthM = 2/auxXvalM; // number of dataPoints visible at any point

        var updateChartM = function (countM) {
            countM = countM || 1;
            // count is number of times loop runs to generate random dataPoints.
            for (var j = 0; j < countM; j++) {	
                yValM = (auxM%2 == 0)?200:-200;
                dpsM.push({
                    x: xValM,
                    y: yValM
                });
                auxM++;
                xValM = auxM * auxXvalM;
            }
            if (dpsM.length > dataLengthM) {
                dpsM.shift();
            }
            moduladora.render();
        };

        updateChartM(dataLengthM); 
        setInterval(function(){ updateChartM() }, updateIntervalM); 
    }

    function thridChar(){
        const inp_port = document.getElementById("f_am");
        const inp_mod = document.getElementById("a_am");
        var dpsPM = [];
        var chartPM = new CanvasJS.Chart("chartContainer", {
            exportEnabled: true,
            title :{
                text: "SEÑAL MODULADA PM"
            },
            axisY: {
                includeZero: false
            },
            data: [{
                type: "spline",
                markerSize: 0,
                dataPoints: dpsPM 
            }]
        });

        var xValPM = 0;
        var yValPM = 100;
        var updateIntervalPM = 1000;
        var dataLengthPM = parseInt(inp_port.value)*10; // number of dataPoints visible at any point

        var updateChartPM = function (countPM) {
            countPM = countPM || 1;
            // count is number of times loop runs to generate random dataPoints.
            for (var j = 0; j < countPM; j++) {	
                yValPM = yValPM + Math.round(5 + Math.random() *(-5-5));
                dpsPM.push({
                    x: xValPM,
                    y: yValPM
                });
                xValPM++;
            }
            if (dpsPM.length > dataLengthPM) {
                dpsPM.shift();
            }
            chartPM.render();
        };

        updateChartPM(dataLengthPM); 
        setInterval(function(){ updateChartPM() }, updateIntervalPM); 
    }
    
}
