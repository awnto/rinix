


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
    <title>RNX Docs</title>
    
    <link rel="icon" href="assets/awnto-prize.png" >


  <!-- Open Graph Title -->
  <meta property="og:title" content="RNX Docs" />

  <!-- Open Graph Description (optional but recommended) -->
  <meta property="og:description" content="RNX Docs" />

  <!-- Open Graph Image (logo or preview image) -->
  <meta property="og:image" content="assets/awnto-prize.png" />

  <!-- Open Graph Type -->
  <meta property="og:type" content="website" />
  
  <style>
<?php
	require("docs.css");
?>
  </style>
  

</head>
<body>
<div id="a_result">

	<div id="a_welcome">
	Welcome to Awnto RNX Linux <br> <span class="a_think" >RNX OS Docs</span>
	</div>
	
	    <div id="response"></div>
	    <div id="a_chat_spacer"></div>

</div>
<div id="a_panel">

	<div id="a_bar_menu" ></div>
	
	<div id="a_bar" >
		<img onclick="toggle_a_menu()" id="awnto_logo" src="assets/awnto-prize.png" />
		
		<textarea id="myInput" rows="1" placeholder=" Enter Page ID" ></textarea>
		
	    <button class="a_bar_button" id="myInput_button" onclick="showSearch()"><i class="fas fa-paper-plane" ></i></button>
	    <!--
	    <button class="a_bar_button" id="myInput_clean" onclick="showClean()"><i class="fas fa-broom clean-icon"></i></button>
	    -->
	    <div id ="myInput_info">
<pre>Response:
  <span class="a_think">Thinking</span>
  Answer</pre>    	
	    </div>
	</div>
</div>

    <script>
<?php
	require("docs.js");
?>
    </script>
</body>
</html>



