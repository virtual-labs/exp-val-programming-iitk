/**
 * 
 *  Document     : controller.js
 *  Created on   : 13 sEPTEMBER, 2020, 4:45:25 PM
 *  Author       : Ujjal Dey
 *  Organization : IIT KhaRagpur
 *  
 */
 var th1 = [0];
  var th2 = [0];
   var th3 = [0];
    var th4 = [0];
	 var th5 = [0];
	  var th6 = [0];
 var J1, J2, J3, J4, J5, J6, i;
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

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
//var i
function pumachange() {
     // change due to theta 
     
		 
    PUMA560.link2Mesh.rotation.y = 0 * (Math.PI / 180);
	//render();
	//alert(i)
	// }
	sleep(1000).then(() => {
   //var th2Val = document.getElementById("th2").value;
    PUMA560.Link3Mesh.rotation.x = -90 * (Math.PI / 180);
})

   
sleep(1600).then(() => {
    //var th3Val = document.getElementById("th3").value;
    PUMA560.Link4Mesh.rotation.x = -90 * (Math.PI / 180);
})
sleep(2400).then(() => {
    //var th4Val = document.getElementById("th4").value;
    PUMA560.BoxL5.rotation.y = 0 * (Math.PI / 180);
})

sleep(3200).then(() => {
   // var th5Val = document.getElementById("th5").value;
    PUMA560.Cylinder3L5.rotation.x = 0 * (Math.PI / 180);
})

sleep(3600).then(() => {
    //var th6Val = document.getElementById("th6").value;
    PUMA560.CylinderL6.rotation.x = 0 * (Math.PI / 180);
})
	t1=t4=t5=t6=0;
			  t2 = t3 = (-90);
			 tmat();
}

function pumacalibrate() {
     
	 alert("Wait for the Calibration of ROBOT Joints");
	 
    PUMA560.link2Mesh.rotation.y = + 10 * (Math.PI / 180);
	pumachange();
	
	sleep(1000).then(() => {
   //var th2Val = document.getElementById("th2").value;
    PUMA560.Link3Mesh.rotation.x = - 100 * (Math.PI / 180);
})
   
sleep(1600).then(() => {
    //var th3Val = document.getElementById("th3").value;
    PUMA560.Link4Mesh.rotation.x = -85 * (Math.PI / 180);
	
	PUMA560.Link3Mesh.rotation.x = -90 * (Math.PI / 180);
})
sleep(2400).then(() => {
    //var th4Val = document.getElementById("th4").value;
    PUMA560.BoxL5.rotation.y = +5 * (Math.PI / 180);
	PUMA560.link2Mesh.rotation.y = - 10 * (Math.PI / 180);
})

sleep(3200).then(() => {
   // var th5Val = document.getElementById("th5").value;
    PUMA560.Cylinder3L5.rotation.x = 13 * (Math.PI / 180);
	PUMA560.Link4Mesh.rotation.x = - 90 * (Math.PI / 180);
	PUMA560.BoxL5.rotation.y = -5 * (Math.PI / 180);
})

sleep(3600).then(() => {
    //var th6Val = document.getElementById("th6").value;
    PUMA560.CylinderL6.rotation.x = 0 * (Math.PI / 180);
	PUMA560.Cylinder3L5.rotation.x = - 13 * (Math.PI / 180);
	pumachange();
})
	
}
//val cOMMANDS
$(document).ready(function(){
  $("#execute").click(function(){
    var rpm=25;
     var cmd = $("#th1").val();
	  
	 var length=cmd.length;
	 var N_th_3 = cmd.substring(12, 16);
	 var P_th_3 = cmd.substring(12, 15);
	 
	  var N_th_2 = cmd.substring(12, 15);
	 var P_th_2 = cmd.substring(12, 14);
	 
	 var N_th_1 = cmd.substring(12, 14);
	 var P_th_1 = cmd.substring(12, 13);
	 var joint = cmd.substring(9, 10);
	 
	 if(cmd == "DO READY"){
     		  pumachange();
			  
     } 
	 else if(cmd == "CALI"){
     		  pumacalibrate();
     } 
	 
     else if(cmd == "DO DRIVE 1" + "," + " " + N_th_3 + "," + " " + rpm){
     		  PUMA560.link2Mesh.rotation.y = +N_th_3 * (Math.PI / 180);
			  t1=N_th_3;
			  th1.push(t1);
				  tmat();
				 alert(th1);
			  
     } 
	 	 else if(cmd == "DO DRIVE 1" + "," + " " + P_th_3 + "," + " " + rpm){
     	 		  PUMA560.link2Mesh.rotation.y = +P_th_3 * (Math.PI / 180);
				  t1=P_th_3;
				 //myFunction();
				tmat();
				 th1.push(t1);
     }
	 	 else if(cmd == "DO DRIVE 1" + "," + " " + N_th_2 + "," + " " + rpm){
     	 		  PUMA560.link2Mesh.rotation.y = +N_th_2 * (Math.PI / 180);
				  t1=N_th_2;
				  tmat();
				   th1.push(t1);
     } 
	 	 else if(cmd == "DO DRIVE 1" + "," + " " + P_th_2 + "," + " " + rpm){
     	 		  PUMA560.link2Mesh.rotation.y = +P_th_2 * (Math.PI / 180);
				  t1=P_th_2;
				  tmat();
				   th1.push(t1);
     } 
	 	 	 else if(cmd == "DO DRIVE 1" + "," + " " + N_th_1 + "," + " " + rpm){
     	 		  PUMA560.link2Mesh.rotation.y = +N_th_1 * (Math.PI / 180);
				  t1=N_th_1;
				  tmat();
				   th1.push(t1);
     } 
	  else if(cmd == "DO DRIVE 1" + "," + " " + P_th_1 + "," + " " + rpm){
     	 		  PUMA560.link2Mesh.rotation.y = +P_th_1 * (Math.PI / 180);
				  t1=P_th_1;
				  tmat();
				  th1.push(t1);
     } 
	 
	 //2nd joint
     else if (cmd == "DO DRIVE 2" + "," + " " + N_th_3 + "," + " " + rpm){
    		  PUMA560.Link3Mesh.rotation.x = -(Math.PI / 2) + N_th_3 * (Math.PI / 180);
			  t2=N_th_3-90;
				  tmat();
				  th2.push(t2);
     }
	  else if (cmd == "DO DRIVE 2" + "," + " " + P_th_3 + "," + " " + rpm){
    		  PUMA560.Link3Mesh.rotation.x = -(Math.PI / 2) + P_th_3 * (Math.PI / 180);
			  t2=P_th_3-90;
				  tmat();
				  th2.push(t2);
     }
	  else if (cmd == "DO DRIVE 2" + "," + " " + N_th_2 + "," + " " + rpm){
    		  PUMA560.Link3Mesh.rotation.x = -(Math.PI / 2) + N_th_2 * (Math.PI / 180);
			  	t2=N_th_2-90;
				  tmat();
				  th2.push(t2);
     }
	  else if (cmd == "DO DRIVE 2" + "," + " " + P_th_2 + "," + " " + rpm){
    		  PUMA560.Link3Mesh.rotation.x = -(Math.PI / 2) + P_th_2 * (Math.PI / 180);
			  	 t2=P_th_2-90;
				  tmat();
				  th2.push(t2);
     }
	  else if (cmd == "DO DRIVE 2" + "," + " " + N_th_1 + "," + " " + rpm){
    		  PUMA560.Link3Mesh.rotation.x = -(Math.PI / 2) + N_th_1 * (Math.PI / 180);
			  t2=N_th_1-90;
				  tmat();
				  th2.push(t2);
     }
	  else if (cmd == "DO DRIVE 2" + "," + " " + P_th_1 + "," + " " + rpm){
    		  PUMA560.Link3Mesh.rotation.x = -(Math.PI / 2) + P_th_1 * (Math.PI / 180);
			  t2=P_th_1-90;
				  tmat();
				  th2.push(t2);
     }
	 
	 //3rd Joint
	  else if (cmd == "DO DRIVE 3" + "," + " " + N_th_3 + "," + " " + rpm){
    		  PUMA560.Link4Mesh.rotation.x = -(Math.PI / 2) + N_th_3 * (Math.PI / 180);
			  t3=N_th_3-90;
				  tmat();
				  th3.push(t3);
     }
	  else if (cmd == "DO DRIVE 3" + "," + " " + P_th_3 + "," + " " + rpm){
    		  PUMA560.Link4Mesh.rotation.x = -(Math.PI / 2) + P_th_3 * (Math.PI / 180);
			  t3=P_th_3-90;
				  tmat();
				  th3.push(t3);
     }
	  else if (cmd == "DO DRIVE 3" + "," + " " + N_th_2 + "," + " " + rpm){
    		  PUMA560.Link4Mesh.rotation.x = -(Math.PI / 2) + N_th_2 * (Math.PI / 180);
			  t3=N_th_2-90;
				  tmat();
				  th3.push(t3);
     }
	  else if (cmd == "DO DRIVE 3" + "," + " " + P_th_2 + "," + " " + rpm){
    		  PUMA560.Link4Mesh.rotation.x = -(Math.PI / 2) + P_th_2 * (Math.PI / 180);
			  t3=P_th_2-90;
				  tmat();
				  th3.push(t3);
     }
	  else if (cmd == "DO DRIVE 3" + "," + " " + N_th_1 + "," + " " + rpm){
    		  PUMA560.Link4Mesh.rotation.x = -(Math.PI / 2) + N_th_1 * (Math.PI / 180);
			  t3=N_th_1-90;
				  tmat();
				  th3.push(t3);
     }
	  else if (cmd == "DO DRIVE 3" + "," + " " + P_th_1 + "," + " " + rpm){
    		  PUMA560.Link4Mesh.rotation.x = -(Math.PI / 2) + P_th_1 * (Math.PI / 180);
			  t3=P_th_1-90;
				  tmat();
				  th3.push(t3);
     }
	 
	  //4th Joint
	  else if (cmd == "DO DRIVE 4" + "," + " " + N_th_3 + "," + " " + rpm){
    		  PUMA560.BoxL5.rotation.y = +N_th_3 * (Math.PI / 180);
			  t4=N_th_3;
				tmat();
				th4.push(t4);
     }
	  else if (cmd == "DO DRIVE 4" + "," + " " + P_th_3 + "," + " " + rpm){
    		  PUMA560.BoxL5.rotation.y = +P_th_3 * (Math.PI / 180);
			  t4=P_th_3;
				tmat();
				th4.push(t4);
			  
     }
	  else if (cmd == "DO DRIVE 4" + "," + " " + N_th_2 + "," + " " + rpm){
    		  PUMA560.BoxL5.rotation.y = +N_th_2 * (Math.PI / 180);
			  t4=N_th_2;
				tmat();
				th4.push(t4);
     }
	  else if (cmd == "DO DRIVE 4" + "," + " " + P_th_2 + "," + " " + rpm){
    		  PUMA560.BoxL5.rotation.y = +P_th_2 * (Math.PI / 180);
			  t4=P_th_2;
				tmat();
				th4.push(t4);
     }
	  else if (cmd == "DO DRIVE 4" + "," + " " + N_th_1 + "," + " " + rpm){
    		  PUMA560.BoxL5.rotation.y = +N_th_1 * (Math.PI / 180);
			  t4=N_th_1;
				tmat();
				th4.push(t4);
     }
	  else if (cmd == "DO DRIVE 4" + "," + " " + P_th_1 + "," + " " + rpm){
    		  PUMA560.BoxL5.rotation.y = +P_th_1 * (Math.PI / 180);
			  t4=P_th_1;
				tmat();
				th4.push(t4);
     }
	 
	  //5th Joint
	  else if (cmd == "DO DRIVE 5" + "," + " " + N_th_3 + "," + " " + rpm){
    		  PUMA560.Cylinder3L5.rotation.x = +N_th_3 * (Math.PI / 180);
			  t5=N_th_3;
				tmat();
				th5.push(t5);
     }
	  else if (cmd == "DO DRIVE 5" + "," + " " + P_th_3 + "," + " " + rpm){
    		  PUMA560.Cylinder3L5.rotation.x = +P_th_3 * (Math.PI / 180);
			  t5=P_th_3;
				tmat();
		th5.push(t5);
     }
	  else if (cmd == "DO DRIVE 5" + "," + " " + N_th_2 + "," + " " + rpm){
    		  PUMA560.Cylinder3L5.rotation.x = +N_th_2 * (Math.PI / 180);
			  t5=N_th_2;
				tmat();
			th5.push(t5);
     }
	  else if (cmd == "DO DRIVE 5" + "," + " " + P_th_2 + "," + " " + rpm){
    		  PUMA560.Cylinder3L5.rotation.x = +P_th_2 * (Math.PI / 180);
			  t5=P_th_2;
				tmat();
			th5.push(t5);
     }
	  else if (cmd == "DO DRIVE 5" + "," + " " + N_th_1 + "," + " " + rpm){
    		  PUMA560.Cylinder3L5.rotation.x = +N_th_1 * (Math.PI / 180);
			  t5=N_th_1;
				tmat();
								th5.push(t5);
     }
	  else if (cmd == "DO DRIVE 5" + "," + " " + P_th_1 + "," + " " + rpm){
    		  PUMA560.Cylinder3L5.rotation.x = +P_th_1 * (Math.PI / 180);
			  t5=P_th_1;
				tmat();
								th5.push(t5);
     }
	 
	 //6th Joint
	  else if (cmd == "DO DRIVE 6" + "," + " " + N_th_3 + "," + " " + rpm){
    		  PUMA560.CylinderL6.rotation.x = +N_th_3 * (Math.PI / 180);
			  t6=N_th_3;
				tmat();
			th6.push(t6);
     }
	  else if (cmd == "DO DRIVE 6" + "," + " " + P_th_3 + "," + " " + rpm){
    		  PUMA560.CylinderL6.rotation.x = +P_th_3 * (Math.PI / 180);
			  t6=P_th_3;
				tmat();
							th6.push(t6);
     }
	  else if (cmd == "DO DRIVE 6" + "," + " " + N_th_2 + "," + " " + rpm){
    		  PUMA560.CylinderL6.rotation.x = +N_th_2 * (Math.PI / 180);
			  t6=N_th_2;
				tmat();
							th6.push(t6);
     }
	  else if (cmd == "DO DRIVE 6" + "," + " " + P_th_2 + "," + " " + rpm){
    		  PUMA560.CylinderL6.rotation.x = +P_th_2 * (Math.PI / 180);
			  t6=P_th_2;
				tmat();
							th6.push(t6);
     }
	  else if (cmd == "DO DRIVE 6" + "," + " " + N_th_1 + "," + " " + rpm){
    		  PUMA560.CylinderL6.rotation.x = +N_th_1 * (Math.PI / 180);
			  t6=N_th_1;
				tmat();
							th6.push(t6);
     }		
	  else if (cmd == "DO DRIVE 6" + "," + " " + P_th_1 + "," + " " + rpm){
    		  PUMA560.CylinderL6.rotation.x = +P_th_1 * (Math.PI / 180);
			  t6=P_th_1;
				tmat();
							th6.push(t6);
     }
	 else if (cmd == "HERE P1"){
    		 
//J1 = 0;		//var i;
//for (i=0;i<th1.length;i++){
	// i=th1.length-1
J1 = th1[th1.length-1];
J2 = th2[th2.length-1];
J3 = th3[th3.length-1];
J4 = th4[th4.length-1];
J5 = th5[th5.length-1];
J6 = th6[th6.length-1];
//}
//var j=th1.length-1
alert("The current position Of the end-effector is saved as P1");

}
else if (cmd == "MOVE P1"){
    		 PUMA560.link2Mesh.rotation.y  = +J1 * (Math.PI / 180);
			  sleep(1000).then(() => {
       PUMA560.Link3Mesh.rotation.x =  J2 * (Math.PI / 180);
}) 
sleep(1600).then(() => {
    PUMA560.Link4Mesh.rotation.x = J3 * (Math.PI / 180);
})
sleep(2400).then(() => {
    PUMA560.BoxL5.rotation.y = J4 * (Math.PI / 180);
})
sleep(3200).then(() => {
     PUMA560.Cylinder3L5.rotation.x = J5 * (Math.PI / 180);
})
sleep(3600).then(() => {
    PUMA560.CylinderL6.rotation.x = J6 * (Math.PI / 180);
})
t1=J1;t2=J2-90;t3=J3-90;t4=J4;t5=J5;t6=J6;
			  tmat();
     }
	 
	 else {
		 alert("Wrong Command (Check comma/space/RPM value)");
	 }
  });
});
var value
$(document).ready(function(){
    $("#execute").click(function(){
        value = $("#th1").val();
        $("#menu").append('<li>' + value + '</li>');
        //e.preventDefault();
    });
});