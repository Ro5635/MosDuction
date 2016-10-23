<?php
//Include the experimental html tag functions
include($_SERVER['DOCUMENT_ROOT'].'/../PHPIncludes/Libraries/HTMLTagExperimental.php');



echo '<body>';

// include($_SERVER['DOCUMENT_ROOT'].'/../PHPIncludes/Views/pages/home/INC_TopPageGreeting.php');


?>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

<section>

	<div id="backgroundImagetarget">

		<article id="instructins">

			<h1 id="pageHeading" class="animated rollIn" >MosDuction</h1>

		</article>

		<article id="scope1" class="scope">

			<div id="chart_div"></div>
			<div id="chart2_div"></div>

		</article>

		<article id="gameDisplay">

			<img id="show" class="animated lightSpeedin " src="https://cdn.webaddressgoeshere.com/MosDuction/ufo/ufo001.png" >
		
			<img id="showman" class="animated lightSpeedin " src="https://cdn.webaddressgoeshere.com/MosDuction/man/man001.png" >
		</article>

<!-- 	<article id="scope2"  class="scope">

		<div id="chart2_div"></div>

	</article> -->


</div><!-- backgroud image target end -->

<article id="controlls">

	Input voltage (pp):
	<input type="text" id="inputVolt" value="15" placeholder="">
	<br>

	Resistor 1:
	<input type="range" min="1" max="1000" id="resistor1" value="150"  placeholder="">

	<br>
	Resistor 2:
	<input type="range" min="1" max="1000" id="resistor2" value="	" placeholder="">

	<br>
	Frequency:
	<input type="text" id="frequencyVal" value="100" placeholder="">




</article>
	



</section>




