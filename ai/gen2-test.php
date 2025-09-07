<?php


header("Content-Type: text/event-stream");
header("Cache-Control: no-cache");


header("Access-Control-Allow-Origin: https://rinix.awnto.com");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");


if($argc>=2)
{
	ob_start();
	$mode="cmd";
}
// Initialize a cURL session

// Set the JSON payload
//$rawDataq = file_get_contents("php://input");

if( $mode != "cmd" )
{
	$input = file_get_contents('php://input') ;

	if($input)
	{
		$input_data=json_decode($input);
		$input_data->response=$input_data->prompt;
	}
	else
	{
		//$input_data['response']="none";
		$input_data=json_decode("{}");
		$input_data->prompt="Hi";
	}
}
else
{
	$input_data=json_decode("{}");
	$input_data->prompt=$argv[1];
	//print_r($argv);
}		
//echo(json_encode($input_data));

//exit ;


$ch = curl_init();

// Set the URL of the request
curl_setopt($ch, CURLOPT_URL, "http://localhost:11434/api/chat");

// Set cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, false); // Don't return the response as a string
curl_setopt($ch, CURLOPT_HEADER, false); // Don't include the header in the output

// Set the HTTP method to POST
curl_setopt($ch, CURLOPT_POST, true);

//'model' => 'deepseek-r1:1.5b',
//'model' => 'deepseek-r1:8b',
//'model' => 'deepseek-coder',
//'model' => 'gemma2:2b',
/*
$data = json_encode([
    'model' => 'gemma2:2b',
    'prompt' => $input_data->prompt
    /* "messages"=> [
      "role"=> "user",
      "content"=> "what is in this image?",
      //"images"=> ["iV_base64"]
    ] * /
  
]);


gemma3:1b
phi3
qwen3:1.7b
*/

$fdata['model']='gemma3:1b';
//$fdata['options']['temperature']=0.1;
//$fdata['prompt']= $input_data->prompt ;

$talk_no=0;

function read_chat($filename)
{
	global $talk_no , $fdata;
	//$filename = "chat.txt";

	$handle = fopen($filename, "r");
	if ($handle) {
	    while (($line = fgets($handle)) !== false) {
		//echo("$talk_no $line");
		
		$j_talk=json_decode($line);
		
		if($j_talk->role == 'ai')
			$fdata['messages'][$talk_no]['role']="assitant";
		else
			$fdata['messages'][$talk_no]['role']=$j_talk->role;
		$fdata['messages'][$talk_no]['content']=$j_talk->msg;
		
		$talk_no++;
	    }
	    fclose($handle);
	}
}
function read_text($filename)
{
	global $talk_no , $fdata;
	//$filename = "chat.txt";
	$contents = file_get_contents($filename);
	
	if($contents != "")
	{
		$fdata['messages'][$talk_no]['role']="system";
		$fdata['messages'][$talk_no]['content']=$contents;
		//echo($contents);
		
		$talk_no++;
	}
}
function read_chat_as_systext($role,$filename)
{
	global $talk_no , $fdata;
	//$filename = "chat.txt";

	$handle = fopen($filename, "r");
	if ($handle) {
	    while (($line = fgets($handle)) !== false) {
		//echo("$talk_no $line");
		
		//$j_talk=json_decode($line);
		if($line != "\n" && $line != "")
		{
			$fdata['messages'][$talk_no]['role']=$role;
			$fdata['messages'][$talk_no]['content']=$line;
			
			$talk_no++;
			
			//echo $line;
		}
	    }
	    fclose($handle);
	}
}
read_chat("system.txt");

//read_chat_as_systext("system","master.txt");

$chat_dir="chats-test";
mkdir($chat_dir);
if(isset($input_data->chat_id))
{
	read_chat("$chat_dir/".$input_data->chat_id.".txt");
}
date_default_timezone_set("Asia/Kolkata");

$fdata['messages'][$talk_no]['role']="system";
$fdata['messages'][$talk_no]['content']="current time is ".date("Y/m/d h:i:s A")." in India, user is from India";
$talk_no++;

$fdata['messages'][$talk_no]['role']="user";
$fdata['messages'][$talk_no]['content']=$input_data->prompt;

//echo(date("Y-m-d h:i:s A")."\n");
//print_r($fdata);
/*
$f2data = [
    "model" => "gemma3:1b",
    "messages" => json_decode(json_encode($fdata['messages']))
];
*/
//print_r($fdata);
//print_r($f2data);

$data = json_encode($fdata);


curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

// Set the content type to application/json
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
    'Content-Length: ' . strlen($data)
]);

// Initialize a line number counter
$lineNumber = 0;

//ob_start();
// Define the callback function
$fullresponse="";

function writeCallback($ch, $data) {
    global $lineNumber , $fullresponse;
    $lineNumber++;
    //echo "Line $lineNumber: " . $data; // Print each chunk of data with line number
    $dtr=json_decode($data);
    //print_r($dtr);
    
    	
    	echo($dtr->message->content);
    	$fullresponse.=$dtr->message->content;
    	ob_flush();
    	flush(); // Flush the output buffer
  
    
    return strlen($data);
}

// Set the write callback function
curl_setopt($ch, CURLOPT_WRITEFUNCTION, 'writeCallback');

// Execute the cURL request
curl_exec($ch);

// Check for errors
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
}

// Close the cURL session
//print_r($ch);

curl_close($ch);

if(isset($input_data->chat_id))
{
	//read_chat("chats/"$input_data->chat_id);
	$chat_file = fopen("$chat_dir/".$input_data->chat_id.".txt", "a"); // 'w' for write mode
}
else
{
	$chat_file = fopen("chat.txt", "a"); // 'w' for write mode
}
//fwrite($chat_file, $text);


$ichat['role']="user";
$ichat['time']=date("Y/m/d h:i:s A");
$ichat['msg']=$input_data->prompt;
$ichat_txt = json_encode($ichat);
fwrite($chat_file, $ichat_txt."\n");

$ichat['role']="ai";
$ichat['msg']=$fullresponse;
$ichat_txt = json_encode($ichat);
fwrite($chat_file, $ichat_txt."\n");

fclose($chat_file);

//echo($fullresponse);

?>

