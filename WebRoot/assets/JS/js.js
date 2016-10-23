// JS Script
// 

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);




$(document).ready(function(){

	timer = setInterval(pngani, delay);
    pngani();


	$('resistor1').on('input',function(e){
		google.charts.setOnLoadCallback(drawBasic);
		
	});

	$('#resistor2').on('input',function(e){
		google.charts.setOnLoadCallback(drawBasic);
		
	});

	$('#inputVolt').on('input',function(e){
		google.charts.setOnLoadCallback(drawBasic);
		
	});

	$('#frequencyVal').on('input',function(e){
		google.charts.setOnLoadCallback(drawBasic);
		
	});



});




var slides = 47; //number of slides
var i = 1; //first slide
var delay = 100; //set delay
var timer;

function pngani() {
    if (i <= slides) {
        $('#show').attr('src', 'https://cdn.webaddressgoeshere.com/MosDuction/ufo/' + 'ufo00' + i + '.png');

       $('#showman').attr('src', 'https://cdn.webaddressgoeshere.com/MosDuction/man2/' + 'man00' + i + '.png');
    }
    
    if( i > slides){
    	i = 1;
    }else{
    	i++;
    }
}










function drawBasic() {




	var data = new google.visualization.DataTable();
	data.addColumn('number', 'time');
	data.addColumn('number', 'inputV');
	data.addColumn('number', 'outputV');


	function genData() {
		var array = [];
		
		var r1 = document.getElementById('resistor1').value;
		var r2 = document.getElementById('resistor2').value;
		var inputVoltage = document.getElementById('inputVolt').value;
		var freq = document.getElementById('frequencyVal').value;
		var inputV;

		for (var i = 0; i < ((2* Math.PI) ); i += ( ((2*Math.PI)) / 100) ) {
			
			time = i;

			inputV = inputVoltage * Math.sin( time );
			console.log(  +r2 / (+r1 + +r2) );
			outputV = ( inputV ) * ( +r2 / (+r1 + +r2) );

			array.push([time , inputV, outputV]);

		}


		// $('#showman').css('top', (( Math.abs(inputV - outputV) * 10)  * 400) + 'px');


		return array;
	}




	data.addRows( genData() );

	var options = {
		hAxis: {
			title: 'Time'
		},
		vAxis: {
			title: 'Voltage'
		},

		animation:{
			duration: 1000,
			easing: 'out',
		},

	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

	chart.draw(data, options);
}
