/**
 * 
 *  Document     : controller.js
 *  Created on   : 13 April, 2016, 4:45:25 PM
 *  Author       : Ujjal Dey
 *  Organization : IIT Khatagpur
 *  
 */
 function initializeSimulation() {
    PUMA560.init();
    animate();
}
//  action will take place when windo resize
function onWindowResize() {
    console.log(Date() + " resize");
}
if (window.addEventListener) {
    window.addEventListener('load', initializeSimulation, false);
    //    window.addEventListener('resize', onWindowResize, false);
} else if (window.attachEvent) {
    window.attachEvent('onload', initializeSimulation);
} else {
    window.onload = initializeSimulation;
}

function sliderChange() {
    var sliderVal = document.getElementById("slider1").value;
    document.getElementById("rangeValue1").value = sliderVal;
    PUMA560.link2Mesh.rotation.y = +sliderVal * (Math.PI / 180);
   
     var sliderVal2 = document.getElementById("slider2").value;
    document.getElementById("rangeValue2").value = sliderVal2;
    PUMA560.Link3Mesh.rotation.x= +sliderVal2 * (Math.PI / 180);
    
    var sliderVal3 = document.getElementById("slider3").value;
    document.getElementById("rangeValue3").value = sliderVal3;
    PUMA560.Link4Mesh.rotation.x= +sliderVal3 * (Math.PI / 180);
    
    var sliderVal4 = document.getElementById("slider4").value;
    document.getElementById("rangeValue4").value = sliderVal4;
    PUMA560.BoxL5.rotation.y= +sliderVal4 * (Math.PI / 180);
    
    var sliderVal5 = document.getElementById("slider5").value;
    document.getElementById("rangeValue5").value = sliderVal5;
    PUMA560.Cylinder3L5.rotation.x= +sliderVal5 * (Math.PI / 180);
    
      var sliderVal6 = document.getElementById("slider6").value;
    document.getElementById("rangeValue6").value = sliderVal6;
    PUMA560.CylinderL6.rotation.x= +sliderVal6 * (Math.PI / 180);
    
    render();
    
}
function getslidervalue() {
    t1 = document.getElementById("rangeValue1").value;
    t2 = document.getElementById("rangeValue2").value;
    t3 = document.getElementById("rangeValue3").value;
    t4 = document.getElementById("rangeValue4").value;
    t5 = document.getElementById("rangeValue5").value;
    t6 = document.getElementById("rangeValue6").value;
    tmat();
}
function pumachange() {
    // change due to theta 
    var th1Val = document.getElementById("th1").value;
    PUMA560.link2Mesh.rotation.y = +th1Val * (Math.PI / 180);

    var th2Val = document.getElementById("th2").value;
    PUMA560.Link3Mesh.rotation.x = +th2Val * (Math.PI / 180);

    var th3Val = document.getElementById("th3").value;
    PUMA560.Link4Mesh.rotation.x = +th3Val * (Math.PI / 180);

    var th4Val = document.getElementById("th4").value;
    PUMA560.BoxL5.rotation.y = +th4Val * (Math.PI / 180);

    var th5Val = document.getElementById("th5").value;
    PUMA560.Cylinder3L5.rotation.x = +th5Val * (Math.PI / 180);

    var th6Val = document.getElementById("th6").value;
    PUMA560.CylinderL6.rotation.x = +th6Val * (Math.PI / 180);

    var data = [trace1];
    var layout = {
        autosize: true,
        width: 340,
        height: 300,
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0
        }
       // plot_bgcolor: 'black'
    };
    Plotly.newPlot('graph-view', data, layout, {displayModeBar: false});
}
function clearslidervalue() {
    // content.reset();
    //myFunction();
    // s1=0;
    document.getElementById("slider1").value = 0;
    document.getElementById("rangeValue1").value = 0;
    document.getElementById("slider2").value = 0;
    document.getElementById("rangeValue2").value = 0;
    document.getElementById("slider3").value = 0;
    document.getElementById("rangeValue3").value = 0;
    document.getElementById("slider4").value = 0;
    document.getElementById("rangeValue4").value = 0;
    document.getElementById("slider5").value = 0;
    document.getElementById("rangeValue5").value = 0;
    document.getElementById("slider6").value = 0;
    document.getElementById("rangeValue6").value = 0;
    sliderChange();
}