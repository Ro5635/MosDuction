// JS Script

google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawBasic);
google.charts.setOnLoadCallback(drawBasic2);



function drawBasic() {




	var data = new google.visualization.DataTable();
	data.addColumn('number', 'X');
	data.addColumn('number', 'Y');


	function genData() {
		var array = [];

		for (var i = 0; i < 10; i++) {
			var x = i,
			y = Math.floor(Math.random() * 50)

			array.push([x, y]);
		}
		return array;
	}




	data.addRows( genData() );

	var options = {
		hAxis: {
			title: 'X'
		},
		vAxis: {
			title: 'Y'
		},

		animation:{
			duration: 1000,
			easing: 'out',
		},

	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

	chart.draw(data, options);
}



function drawBasic2() {




	var data = new google.visualization.DataTable();
	data.addColumn('number', 'X');
	data.addColumn('number', 'Y');


	function genData() {
		var array = [];

		for (var i = 0; i < 10; i++) {
			var x = i,
			y = Math.floor(Math.random() * 50)

			array.push([x, y]);
		}
		return array;
	}




	data.addRows( genData() );

	var options = {
		hAxis: {
			title: 'X'
		},
		vAxis: {
			title: 'Y'
		},

		animation:{
			duration: 1000,
			easing: 'out',
		},

	};

	var chart = new google.visualization.LineChart(document.getElementById('chart2_div'));

	chart.draw(data, options);
}


