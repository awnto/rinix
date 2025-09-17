
var a_fade_in_value=0;
function fade_in_input()
{
	return;
	scroller();
	a_fade_in_value=1;
	
	var a_in=a_gid("myInput");
	var a_in_b=a_gid("myInput_button");
	//var a_in_c=a_gid("myInput_clean");
	var a_bar=a_gid("a_bar");
	var a_logo=a_gid("awnto_logo");
	var a_res=a_gid("a_result");
	
	a_res.style.height="calc(100% - 180px)";
	a_res.style.bottom="calc(180px)";
	
	a_in.style.left = "10px";
	a_in.style.width = "calc(100% - 70px )";
	
	
	a_in.style.height = "80px";
	a_bar.style.height = "180px";
	
	//a_in.style.width = "calc(100% - 100px )";
	a_in.style.left = "10px";
	a_in.style.bottom = "10px";
	
	a_logo.style.bottom="110px";
	a_logo.style.height="60px";
	a_logo.style.width="60px";
	
	a_in.focus();
	
	scroller_bottom(need_scroller_bottom);
	
	
}

var a_layout="land";

window.addEventListener('resize', fade_out_input);
var open_a_menu_var=0;
function open_a_menu()
{
	var a_pan=a_gid("a_panel");
	a_pan.style.height="100%";
	a_pan.style.top="0px";
	
	var a_menu=a_gid("a_bar_menu");
	if(a_layout=="land")
	{
		a_menu.style.background = "lightgreen";
	
		setTimeout(function() {
		  // Your code here
		  a_menu.style.background = "linear-gradient(to left, rgba(173, 216, 230, 1), rgba(255, 182, 193, 1))";
		  
		}, 200);
	}

	
	open_a_menu_var=1;
}
function close_a_menu()
{
	if(a_layout=="port")
	{
		var a_pan=a_gid("a_panel");
		a_pan.style.height="60px";
		a_pan.style.top="calc( 100% - 60px)";
	}	
	open_a_menu_var=0;
}
function toggle_a_menu()
{
	if(open_a_menu_var==0)
		open_a_menu();
	else
		close_a_menu();
}

function fade_out_input()
{
	scroller();
	a_fade_in_value=0;
	var a_in=a_gid("myInput");
	var a_in_b=a_gid("myInput_button");
	//var a_in_c=a_gid("myInput_clean");
	var a_bar=a_gid("a_bar");
	var a_logo=a_gid("awnto_logo");
	var a_res=a_gid("a_result");
	
	var a_pan=a_gid("a_panel");
	
	
	var doc_wi = window.innerWidth;
	var doc_hi = window.innerHeight;
	
	if(doc_wi>doc_hi && doc_wi > 600)
	{
		a_layout="land";
	}
	else
	{
		a_layout="port";
	}


	
	if(a_layout=="land")
	{
	
		var l_wi= doc_wi/3;
		var l_off= doc_wi - l_wi ;
		
		var l_wi_px= l_wi+"px" ;
		var l_off_px= l_off+"px" ;
	
		a_res.style.bottom="calc(0px)";
		a_res.style.left=l_wi_px;
		a_res.style.width=(l_off-20)+"px";
		a_res.style.height="calc(100% )";
		
		a_pan.style.bottom="0px";
		a_pan.style.top="0px";
		a_pan.style.height="100%";
		
		a_pan.style.left="0px";
		a_pan.style.right=l_off_px;
		
		a_pan.style.width=l_wi_px;
		
		a_bar.style.right="0px";
		a_bar.style.left="0px";
	}
	else
	{
		
		a_pan.style.height="60px";
		a_pan.style.top="calc( 100% - 60px )";
		a_pan.style.width="calc( 100%  )";
		a_pan.style.bottom="0px";
		
		
		a_res.style.height="calc(100% - 80px)";
		a_res.style.bottom="calc(60px)";
		a_res.style.left="0px";
		a_res.style.width="calc( 100% - 20px )";
	
	}
	
	a_in.style.left = "60px";
	a_in.style.width = "calc(100% - 120px )";
	
	a_in.style.bottom = "10px";
	a_in_b.style.bottom = "10px";
	//a_in_c.style.bottom = "60px";
	a_in.style.height = "20px";
	a_bar.style.height = "60px";
	
	a_in_b.style.left="calc(100% - 50px )";
	//a_in_c.style.left="calc(100% - 50px )";
	
	a_logo.style.bottom="10px";
	a_logo.style.left="10px";
	a_logo.style.height="40px";
	a_logo.style.width="40px";
	
	if(open_a_menu_var==1)
	{
		open_a_menu();
	}
	
	
	scroller_bottom(need_scroller_bottom);
	
}
    
    var userInput = document.getElementById("a_bar");
    var userInput2 = document.getElementById("myInput");
    
userInput2.addEventListener("mouseenter", function() {
	
	fade_in_input();
});
userInput.addEventListener("mouseenter", function() {
	
	fade_in_input();
});
userInput.addEventListener("click", function() {
	
	fade_in_input();
});

userInput.addEventListener("mouseleave", function() {

	
	fade_out_input();
});


function showClean()
{
	var a_in=a_gid("myInput");
	a_in.value="";
}
    
function thinking(valx)
{
	var thinker = a_gid("awnto_logo");
	if(valx=="run")
	{
		//console.log(thinker.style.animation);
		thinker.style.animation = "";

		thinker.style.animationPlayState = "running";
		
	}
	else
	{
		thinker.style.animationPlayState = "paused";
		  // Stop the animation
		  thinker.style.animation = "none";

		  // Trigger reflow to ensure transition works
		  //void thinker.offsetWidth;

		  // Animate back to 0deg
		  //thinker.style.transform = "rotate(0deg)";	
	}
}
thinking("stop");

function generateRandomString(length) {
  length--;
  const characters = 'abcdefghijklmnopqrstuvwxyz123456';
  let result = '';
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return "a"+result;
}

// Example usage:
var chat_id = generateRandomString(128); // e.g., "aB3kL9xYzQ"
console.log("chat_id="+chat_id);

    var is_searching=0;
    function on_search_wait(x,ele)
    {
    	if(is_searching==0)
    		performSearch(x,ele);
    	else
    		alert("Already Running Please Wait");
    }
   

    function showSearch() {
    
    	a_gid("myInput").focus();
    
    	
    	need_scroller=1;
    	scroller_do();
    	var userInput = document.getElementById('myInput').value;
    	if(userInput!="")
    	{
    		if(is_searching==0)
    		{
    			fade_out_input();
		    
		    //alert( userInput);
		    //scroller();
		    set_page_url(userInput);
		    	
		    const responseContainer = document.getElementById('response');
		    
		    while (responseContainer.firstChild) {
			  responseContainer.removeChild(responseContainer.firstChild);
			}
		    
		    const lineElement = document.createElement('div');
		    lineElement.classList.add('a_chat_user');
		    lineElement.innerText =userInput;
		    
		    
		    responseContainer.appendChild(lineElement);
		    //a_glert(lineElement.offsetHeight);
		    
		    const breakElement = document.createElement('div');
		    //breakElement.style.height=""+lineElement.offsetHeight+"px";
		    breakElement.classList.add('a_chat_break');
		    responseContainer.appendChild(breakElement);
		    
		    //scroller_do();
			    on_search_wait(userInput,responseContainer);
			//showClean();
			scroller_bottom(0);
          	}
          	else
    			a_glert("Already Running Please Wait");
          }
          else
          {
          	a_glert("Please Enter valid input");
          }
          
     }
     
     function showPage(x) {
    
    	
    	
    	need_scroller=1;
    	scroller_do();
    	var userInput = x;
    	//document.getElementById('myInput').value=x;
    	if(userInput!="")
    	{
    		if(is_searching==0)
    		{
    		
    			set_page_url(x);
    			
    			fade_out_input();
		    
		    document.title = "RNX OS Docs";
		    //alert( userInput);
		    //scroller();
		    const responseContainer = document.getElementById('response');
		    
		    responseContainer.innerHTML="";
		    
		    const lineElement = document.createElement('div');
		    lineElement.classList.add('a_chat_user');
		    lineElement.innerText =userInput;
		    
		    
		    responseContainer.appendChild(lineElement);
		    //a_glert(lineElement.offsetHeight);
		    
		    
		    
		    const breakElement = document.createElement('div');
		    //breakElement.style.height=""+lineElement.offsetHeight+"px";
		    breakElement.classList.add('a_chat_break');
		    responseContainer.appendChild(breakElement);
		    
		    //scroller_do();
			    on_search_wait(userInput,responseContainer);
			//showClean();
			scroller_bottom(0);
          	}
          	else
    			a_glert("Already Running Please Wait");
          }
          else
          {
          	a_glert("Please Enter valid input");
          }
          
     }
     
    //on_search_wait('Hi');
    //on_search_wait('Why is the sky blue?');

const params = new URLSearchParams(window.location.search);

const ap_page = params.get("page"); // "John"
if(ap_page)
	showPage(ap_page);
else
	showPage("docs");
document.getElementById('myInput').value="docs";
//showPage_onele(a_gid("a_bar_menu"),"page");
showPage_onele(a_gid("a_bar_menu"),"menu");

//console.log(a_gid("a_bar_menu"));
function showPage_onele(ele,x) {
    
    	
    	need_scroller=1;
    	scroller_do();
    	var userInput = x;
    	//document.getElementById('myInput').value=x;
    	if(userInput!="")
    	{
		    const responseContainer = ele;//document.getElementById('response');
		    
		    
		   	performSearch(x,ele)
		    
		    
          }
          	
}

     

function downloadFile(url)//, filename) 
{
  const a = document.createElement('a');
  a.href = url;
  //a.download = filename || '';
  a.style.display = 'none'; // Hide the 
  document.body.appendChild(a);
  a.click(); // Trigger download
  document.body.removeChild(a); // Clean up
}

function backgroundDownload(url)//, filename) 
{
  fetch(url)
    .then(response => response.blob())
    .then(blob => {
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      //a.download = filename || 'download';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(blobUrl); // Clean up
    })
    .catch(error => {
      console.error('Download failed:', error);
    });
}

function set_page_url(x)
{
	//history.pushState(null, '', '?page='+v_val.page);
	history.replaceState(null, '', '?page='+x);
}

class awnto_ms_pop{

	//var is_thinking = 0;
	//var is_thinked = 0;

	//var is_writing_code = 0;

	//var counting=0;
	//var lineresponse = "";
    
    
    
    constructor(responseContainer)
    {
    	
    	//this.is_thinking = 0;
    	//this.is_thinked = 0;
    
   	//this.counting=0;
   	//this.is_writing_code = 0;
   	this.responseContainer = responseContainer;
   	
   	this.msgBox= document.createElement('div');
	this.msgBox.classList.add('lineElement');
	this.responseContainer.appendChild(this.msgBox);
	
	this.coder_view_active=0;// 1 for code; 2 for header ; 3 thinking; 
	this.coder_view_active_last=0;
	
	
	this.wait_string="";
	
	this.matched_string={};
	this.matched_string.count=0;
	
	this.matched_string.val={};
	
	
	var st_hd1=this.searcher_create(4); // high type1
	this.searcher_add_on(st_hd1,"**");
	this.searcher_add_off(st_hd1,"**");
	
	st_hd1=this.searcher_create(1); // high code
	this.searcher_add_on(st_hd1,"```");
	this.searcher_add_off(st_hd1,"```");
	//this.searcher_add_off(st_hd1,"\n```");
	
	st_hd1=this.searcher_create(3); // thinking
	this.searcher_add_on(st_hd1,"<think>");
	this.searcher_add_off(st_hd1,"</think>");
	
	
	st_hd1=this.searcher_create(2); // hight type2
	this.searcher_add_on(st_hd1,"`");
	this.searcher_add_off(st_hd1,"`");
	
	
	
	st_hd1=this.searcher_create(6); // pre codes
	this.searcher_add_on(st_hd1,"<pre>");
	this.searcher_add_off(st_hd1,"</pre>");
	
	st_hd1=this.searcher_create(7); // pre codes
	this.searcher_add_on(st_hd1,"<text>");
	this.searcher_add_off(st_hd1,"</text>");
	
	
	st_hd1=this.searcher_create(5); // html codes
	this.searcher_add_on(st_hd1,"<");
	this.searcher_add_off(st_hd1,">");
	
	
    }
    
    searcher_create(code)
    {
    	var ret = this.matched_string.count;
    	this.matched_string.count++;
    	this.matched_string.val[ret]={};
    	this.matched_string.val[ret].oncount=0;
    	this.matched_string.val[ret].offcount=0;
    	this.matched_string.val[ret].breaked=0;
    	this.matched_string.val[ret].on={};
    	this.matched_string.val[ret].off={};
    	this.matched_string.val[ret].off_type={};
    	//this.matched_string.val[ret].break={};
    	
    	this.matched_string.val[ret].code=code;
    	
    	
    	return ret;
    }
    searcher_add_on(x,str)
    {
    	this.matched_string.val[x].on[this.matched_string.val[x].oncount]=str;
    	this.matched_string.val[x].oncount++;
    }
    searcher_add_off(x,str,type=0)
    {
    	this.matched_string.val[x].off[this.matched_string.val[x].offcount]=str;
    	this.matched_string.val[x].off_type[this.matched_string.val[x].offcount]=type;
    	this.matched_string.val[x].offcount++;
    }
    	perform_message_char(c)
    	{
    		var matched_len=0;
    		var locked=0;
    		
    		this.wait_string+=c;
    		
    		var pri_mwait=0;
    		
		  
		  //console.log(c);
		  
		  if(this.coder_view_active == 0)
		  {
			  for(let ct=0;ct< this.matched_string.count; ct++)
			  {
			  	for(let cton=0; cton < this.matched_string.val[ct].oncount; cton++)
			  	{
			  		var cmp=this.matched_string.val[ct].on[cton];
			  		if(this.wait_string.length <= cmp.length)
			  		{
			  			var cmp_match=1;
			  			for (let i = 0; i < this.wait_string.length; i++) {
			  				if(cmp[i] != this.wait_string[i])
			  				{
			  					cmp_match=0;
			  				}
			  			}
			  			if(cmp_match==1 && pri_mwait==0 )
			  			{
			  				if(this.wait_string.length == cmp.length)
			  				{
			  					// locked
			  					console.log("locked:"+this.wait_string);
			  					this.matched_string.val[ct].breaked=0;
			  					this.coder_view_active=this.matched_string.val[ct].code;
			  					this.perform_message_lock_unlock(this.coder_view_active,1);
			  					this.wait_string="";
			  					locked=0;
			  				}
			  				else
			  				{
			  					matched_len=this.wait_string.length;
			  				}
			  				pri_mwait=1;
			  			}
			  			
			  		
			  		}
			  		else if(pri_mwait==0)
			  		{
			  			var cmp_match=1;
			  			for (let i = 0; i < cmp.length; i++) {
			  				if(cmp[i] != this.wait_string[i])
			  				{
			  					cmp_match=0;
			  				}
			  			}
			  			if(cmp_match==1 )
			  			{
			  				//if(this.wait_string.length == cmp.length)
			  				{
			  					// locked
			  					console.log("wlocked:"+this.wait_string);
			  					this.matched_string.val[ct].breaked=0;
			  					this.coder_view_active=this.matched_string.val[ct].code;
			  					this.perform_message_lock_unlock(this.coder_view_active,1);
			  					this.perform_message_data(this.wait_string.slice(cmp.length))
			  					this.wait_string="";
			  					locked=0;
			  				}
			  				//else
			  				//{
			  				//	matched_len=this.wait_string.length;
			  				//}
			  			}
			  		}
			  	
			  	}
			  }
		  
		  }
		  else
		  {
			  for(let ct=0;ct< this.matched_string.count; ct++)
			  {
			  	for(let cton=0; cton < this.matched_string.val[ct].offcount; cton++)
			  	{
			  		if(this.coder_view_active==this.matched_string.val[ct].code)
			  		{
				  		var cmp=this.matched_string.val[ct].off[cton];
				  		var cmp_type=this.matched_string.val[ct].off_type[cton];
				  		if(this.wait_string.length <= cmp.length)
				  		{
				  			var cmp_match=1;
				  			for (let i = 0; i < this.wait_string.length; i++) {
				  				if(cmp[i] != this.wait_string[i])
				  				{
				  					cmp_match=0;
				  				}
				  			}
				  			if(cmp_match==1 )
				  			{
				  				if(this.wait_string.length == cmp.length)
				  				{
				  					if(cmp_type == 0)
				  					{
					  					// unlocked
					  					console.log("unlocked:"+this.wait_string);
					  					this.perform_message_lock_unlock(this.coder_view_active,0);
					  					this.coder_view_active=0;
					  				}
					  				else if(cmp_type == "break")
					  				{
					  					this.matched_string.val[ct].breaked++;
					  					console.log("break_"+(this.matched_string.val[ct].breaked)+":"+this.wait_string);
					  				}
				  					this.wait_string="";
				  				}
				  				else
				  				{
				  					matched_len=this.wait_string.length;
				  				}
				  			}
				  			
				  		
				  		}
			  		}
			  	
			  	}
			  }
		  }
		  
		  
		  if(matched_len == 0)
		  {
		  	//console.log("pass:"+this.wait_string);
		  	this.perform_message_data(this.wait_string)
		  	this.wait_string="";
		  }
		  
		  

    	}
    	perform_message(text)
    	{

    		
		for (let i = 0; i < text.length; i++) {
		  
		  this.perform_message_char(text[i]);
		}

    	}
    	perform_message_lock_unlock(code,bool)
	{
		if(bool == 1)
		{
			this.coder_inner="";
		}
		else
		{
			//console.log("coder_inner="+this.coder_inner);
		}
		
			  if(code==1 )
			  {
			  	if( bool == 1)
			  	{
				  	this.coderEle = document.createElement('pre');
				  	this.coderEle.classList.add('a_coder_view');
				  	this.msgBox.appendChild(this.coderEle);
				  	this.coder_view_code="";
				  	this.coder_view_code_type="";
				  	this.coder_view_active_header=0 ;
			  	}
			  	/*
			  	else
			  	{
			  		//console.log(this.coderEle.innerText);
			  		const codeInner = this.coderEle.querySelector('.a_coder_view_area');
					console.log(codeInner.innerText);
			  	}
			  	*/
			  }
			  else if(code==2 && bool == 1 )
			  {
			  	this.coderEle = document.createElement('span');
			  	this.coderEle.classList.add('a_codec_head_type1');
			  	this.msgBox.appendChild(this.coderEle);
			  	
			  }
			  else if(code==3 && bool == 1 )
			  {
			  	this.coderEle = document.createElement('div');
			  	this.coderEle.classList.add('a_think');
			  	this.msgBox.appendChild(this.coderEle);
			  	
			  }
			  else if(code==4 && bool == 1 )
			  {
			  	this.coderEle = document.createElement('span');
			  	this.coderEle.classList.add('a_codec_head_type2');
			  	this.msgBox.appendChild(this.coderEle);
			  	
			  }
			  else if(code==5 && bool == 0 )
			  {
			  	//this.coderEle = document.createElement('span');
			  	//this.msgBox.appendChild(this.coderEle);
			  	//this.coderEle.innerText="Loading "+this.coder_inner;
			  	
			  	const aarg = this.coder_inner ;
				//const aparts = aarg.split(/[\s]+/);
				const aparts = aarg.match(/(?:[^\s"]+|"[^"]*")+/g)
				console.log(aparts.length+""+aparts);
				
				var v_val={};
				var v_arg=aparts[0];
				for(var i = 1 ; i < aparts.length ; i++ )
				{
				
					//const text = "key=value";
					const sparts = aparts[i].split(/=(.+)/);
					//console.log(sparts); // ["key", "value"]
					if(sparts[1])
					{
						const unquoted = sparts[1].replace(/^"(.*)"$/, '$1');
						//const unquoted = sparts[1];
						v_val[sparts[0]]=unquoted;
					}

				}
				//console.log(v_val);
				if(v_arg == "link")
				{
					
					this.coderEle = document.createElement('span');
					this.coderEle.classList.add('a_codex_link');
					
					if(v_val.view)
			  		{
			  			if(v_val.view=="inline")
			  			{
			  				this.coderEle.classList.add('a_block_inline');
			  			}
			  			
			  		}
			  		else
			  		{
			  				this.coderEle.classList.add('a_codex_link_div');
			  		}
			  		if(v_val.icon)
			  		{
			  			var icon = document.createElement('i');
			  			icon.classList.add('fas');
			  			if(v_val.icon=="menu")
			  			{
			  				icon.classList.add('fa-bars');
			  			}
			  			else if(v_val.icon=="video")
			  			{
							icon.classList.add('fa-play');
			  			}
			  			else if(v_val.icon=="download")
			  			{
							icon.classList.add('fa-download');
			  			}
			  			else if(v_val.icon=="install")
			  			{
							icon.classList.add('fa-bolt');
			  			}
			  			else
			  			{
							icon.classList.add("fa-"+v_val.icon);
			  			}
			  			var icon_text = document.createElement('span');
			  			icon_text.innerText=" "+v_val.name;
			  			this.coderEle.appendChild(icon);
			  			this.coderEle.appendChild(icon_text);
			  		}
			  		else
			  		{
			  			this.coderEle.innerText=v_val.name;
			  		}
					
					
			  		this.msgBox.appendChild(this.coderEle);
			  		
			  		
			  		this.coderEle.addEventListener('click', () => {
			  			close_a_menu();
			  			console.log(v_val);
			  			
			  			if(v_val.page)
			  			{
			  				

			  				showPage(v_val.page);
			  			}
			  			else if(v_val.url)
			  			{
			  				if(v_val.type=="download")
					  		{
								//this.coderEle.classList.add('a_codex_link_div');
								downloadFile(v_val.url);
							}
							else
							{
				  				window.open(v_val.url, '_blank');
				  			}
			  				//alert(v_val.url);

			  			}
			  			else if(v_val.action)
			  			{
			  				if(v_val.action=="open_menu")
			  				{
			  					open_a_menu();
			  				}
			  			}
					});
			  		
			  		
			  		
				}
				else if(v_arg == "head")
				{
					this.coderEle = document.createElement('div');
					this.coderEle.classList.add('a_codex_head');
			  		this.msgBox.appendChild(this.coderEle);
			  		this.coderEle.innerText=v_val.name;
			  		
				}
				else if(v_arg == "img")
				{
					this.coderEle = document.createElement('img');
					this.coderEle.classList.add('a_codex_img');
			  		this.msgBox.appendChild(this.coderEle);
			  		this.coderEle.src="assets/"+v_val.src;
			  		if(v_val.width)
			  		{
			  			this.coderEle.style.width=v_val.width+"px";
			  		}
			  		if(v_val.view)
			  		{
			  			if(v_val.view=="round")
			  			{
			  				this.coderEle.classList.add('a_codex_img_round');
			  			}
			  		}
			  		
				}
				else if(v_arg == "title")
				{
					//this.coderEle = document.createElement('div');
					//this.coderEle.classList.add('a_codex_head');
			  		//this.msgBox.appendChild(this.coderEle);
			  		if(v_val.name)
			  		{
				  		//this.coderEle.innerText=v_val.name;
				  		document.title = v_val.name;

				  	}
			  		
				}
				else if(v_arg == "load")
				{
					//this.coderEle = document.createElement('div');
					//this.coderEle.classList.add('a_codex_head');
			  		//this.msgBox.appendChild(this.coderEle);
			  		if(v_val.page)
			  		{
				  		//this.coderEle.innerText=v_val.name;
				  		//document.title = v_val.name;
				  		
				  		showPage_onele(this.msgBox,v_val.page);

				  	}
			  		
				}
				
			  	
			  }
			  else if(code==6 && bool == 1 )
			  {
			  	this.coderEle = document.createElement('pre');
			  	this.msgBox.appendChild(this.coderEle);
			  	
			  	
			  	
			  }
	}
	perform_message_data(line)
	{
		//console.log(line);
		if(line !="")
		{
			  //const text = document.createTextNode(line);
			  this.coder_inner+=line;
			  
			  {
			  
				  if(this.coder_view_active==1)
				  {
				  	//this.coder_view_code+=line;
				  	//this.coderEle.value=this.coder_view_code;
				  	if(this.coder_view_active_header==0)
				  	{
				  		if(line=="\n")
				  		{
				  			this.coder_view_active_header=2;
				  			this.coder_view_active_header=1;
					  		const headEle = document.createElement('div');
					  		this.coderEle.appendChild(headEle);
					  		
					  		
					  		
					  		const headEle_cc = document.createElement('span');
					  		headEle_cc.classList.add('a_coder_view_head');
						  	headEle_cc.innerText="Code";
						  	headEle.appendChild(headEle_cc);
						  	
						  	const headEle_data = document.createElement('span');
					  		headEle_data.classList.add('a_coder_view_head_data');
						  	headEle_data.innerText=this.coder_view_code_type.toUpperCase();
						  	headEle.appendChild(headEle_data);
						  	
						  	
						  	
						  	//headEle_data.style.left=headEle_cc.offsetWidth;
						  	
						  	/*
						  	const headEle_c1 = document.createElement('div');
					  		headEle_c1.classList.add('a_coder_view_head_space');
						  	headEle_c1.innerText="  ";
						  	//headEle_c1.style.width=headEle_cc.offsetWidth;
						  	headEle.appendChild(headEle_c1);
						  	*/
						  	
						  	this.coderEleData = document.createElement('div');
						  	this.coderEleData.classList.add('a_coder_view_area');
						  	this.coderEle.appendChild(this.coderEleData);
			const coderEleData = this.coderEleData ;			  	
						  	const headEle_copy = document.createElement('span');
					  		headEle_copy.classList.add('a_coder_view_head_copy');
						  	headEle_copy.innerText="Copy";
						  	headEle.appendChild(headEle_copy);
						  	headEle_copy.addEventListener('click', () => {
							  //this.coderEleData.innerText = 'You clicked me!';
							  //const text = textDiv.innerText;
							  navigator.clipboard.writeText(coderEleData.innerText)
							    .then(() => {
							      //console.log('Text copied to clipboard!');
							      headEle_copy.innerHTML="Copied";
							    })
							    .catch(err => {
							      console.error('Failed to copy text: ', err);
							      headEle_copy.innerText="Copy Err";
							    });
							});
						  	
					  	
				  		}
				  		else
				  		{
				  			this.coder_view_code_type+=line;
				  		}
				  	}
				  	else
				  	{
				  		this.coder_view_code+=line;
				  		//this.headEle_ct.value=this.coder_view_code;
					  const textEle = document.createElement('span');
					  textEle.innerText=line;
					  this.coderEleData.appendChild(textEle);
					}
				  	
				  	
				  }
				  else if(this.coder_view_active==7)
				  {
				  	
					  const textEle = document.createElement('span');
					  textEle.innerText=line;
					  this.msgBox.appendChild(textEle);
					  this.coder_view_active_last=0;
				  }
				  else if(this.coder_view_active == 5)
				  {
				  	//const textEle = document.createElement('span');
					//textEle.innerText=line;
				  	//this.coderEle.appendChild(textEle);
				  }
				  else if(this.coder_view_active > 0)
				  {
				  	const textEle = document.createElement('span');
					textEle.innerText=line;
				  	this.coderEle.appendChild(textEle);
				  }
				  
			}
		}
				    
	}


}
    
function performSearch(x,ele) {
    is_searching = 1;
    
    thinking('run');
    
    var is_thinking = 0;
    var is_thinked = 0;
    
    var counting=0;
    					
    
    const main_responseContainer = ele;//document.getElementById('response');
    
   // const responseContainer_user = document.createElement('div');
   // responseContainer_user.classList.add('a_chat_user');
    //main_responseContainer.appendChild(responseContainer_user);
    
    //main_responseContainer.innerHTML="";
    	
    
    const responseContainer = document.createElement('div');
    
    responseContainer.classList.add('a_chat_ai');
    main_responseContainer.appendChild(responseContainer);
    
    
    
    //const responseContainer = document.getElementById('response');
    let lineNumber = 0;
    //a_glert("Searching ...");

    fetch('pages/'+x+'.apage', {
        //method: 'POST',
      //  headers: {
       //     'Content-Type': 'application/json'
      //  },
      //  body: JSON.stringify({
            //prompt: x ,
      //      chat_id: chat_id
      //  })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.body.getReader();
    })
    .then(reader => {
        const decoder = new TextDecoder();
        //const lineElement = document.createElement('div');
        //lineElement.classList.add('lineElement');
        lineresponse = "";
        
        var ms_pop = new awnto_ms_pop(responseContainer);
        
        scroller();
        const processText = () => {
            reader.read().then(({ done, value }) => {
                if (done) {
                    is_searching = 0;
                    thinking('stop');
                    
                    scroller();
                    
                    //const breakElement = document.createElement('div');
		    //breakElement.classList.add('a_chat_break_end');
		    //main_responseContainer.appendChild(breakElement);
                    scroller_do();
                    
                    /*
                    const padElement = document.createElement('div');
                    padElement.innerHTML = "<hr>";
                            responseContainer.appendChild(padElement);
                    //scroller_do();
                    
                    //a_glert("Search done");
                    scroller_do();
                    */
                    return;
                }
                const text = decoder.decode(value, { stream: true });
                //text.split('\n').forEach(line => {
                
                var line = text;
                
                    if (line) {
                        try {
                        
                        	//a_glert("Thinking ...");
                        	
                           
		                    scroller();
		            
		            ms_pop.perform_message(line);
		            
		            
                            scroller_do();
                        } catch (e) {
                            console.error('Error parsing JSON:', e);
                        }
                    }
                //});
                processText();
            });
        };
        processText();
    })
    .catch(error => {
    	thinking('stop');
    	//var ms_pop_err = new awnto_ms_pop(responseContainer);
    	//ms_pop_err.perform_message("Page Error\n");
    	responseContainer.innerHTML="Error in Loading";
    	//console.log(responseContainer);
        console.error('awnto Error:', error);
       
        a_glert('Error:', error);
        is_searching = 0;
        thinking('stop');
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Call the performSearch function when the page is loaded
   // performSearch('initial search query');
   a_body();
});

// You can now call performSearch from any other function
function on_other_event() {
   // performSearch('search query from other event');
}


function a_body()
{
	awnto_server_glert_create();
	fade_out_input();
	a_gid("myInput").focus();
	a_loop();
}


var win_x=0;
var win_y=0;
var a_chat_spacer=0;
var my_input_last_value="";
function a_loop()
{

	if(window.innerWidth != win_x || window.innerHeight != win_y )
	{
		win_x = window.innerWidth ;
		win_y = window.innerHeight ;
		//a_glert(win_x+':'+win_y);
		scroller_bottom(need_scroller_bottom);
	}
	
	
	var a_res=a_gid('response');
	var a_spc=a_gid('a_chat_spacer');
	
	var a_chat_spacer_n=0;
	
	var seprator=180;
	if(a_fade_in_value==1)
	{
		seprator=300;
	}
	if( a_res.offsetHeight + seprator >= win_y)
	{
		a_chat_spacer_n=0;
	}
	else
	{
		a_chat_spacer_n=win_y - seprator - a_res.offsetHeight;
	
	}
	if(a_chat_spacer != a_chat_spacer_n )
	{
		a_chat_spacer=a_chat_spacer_n;
		a_spc.style.height=""+(a_chat_spacer)+"px";
		scroller_bottom(need_scroller_bottom);
	}
	
	var a_in=a_gid('myInput');
	if( a_in.value !="" && my_input_last_value != a_in.value)
	{
		fade_in_input();
		my_input_last_value = a_in.value;
	}
	
	scroller_l();
	
	setTimeout(a_loop,100);
}
var need_scroller=0;
var need_scroller_bottom=0;
//scroller_bottom(need_scroller_bottom);
function scroller_l()
{

	var element = a_gid("response");
	var height = element.offsetHeight;
	var a_result = a_gid("a_result");
	var scroll = a_result.scrollTop;
	
	need_scroller_bottom = a_result.scrollHeight - a_result.scrollTop - a_result.clientHeight;
	//console.log(scrollPositionFromBottom);
}
function scroller()
{

	var element = a_gid("response");
	var height = element.offsetHeight;
	var a_result = a_gid("a_result");
	var scroll = a_result.scrollTop;
	
	need_scroller_bottom = a_result.scrollHeight - a_result.scrollTop - a_result.clientHeight;
	//console.log(scrollPositionFromBottom);
	
	
	if( need_scroller_bottom  <= 10 )
	{
		need_scroller=1;
	}
	else
	{
		need_scroller=0;
	}
	
	/*
	if( scroll + a_result.offsetHeight  > height )
	{
		need_scroller=1;
	}
	else
	{
		need_scroller=0;
	}
	*/
	//a_glert("nsrll:"+need_scroller+";"+scroll+";"+a_result.offsetHeight+";"+height+";"+ ( scroll + a_result.offsetHeight - height) );
	//console.log("nsrll:"+need_scroller+";"+scroll+";"+a_result.offsetHeight+";"+height+";"+ ( scroll + a_result.offsetHeight - height));

}
function scroller_bottom(x)
{

	return;
		var a_result = a_gid("a_result");
		
		//need_scroller_bottom = a_result.scrollHeight - a_result.scrollTop - a_result.clientHeight;
		var scroll=a_result.scrollHeight - x - a_result.clientHeight;
		//a_glert(scroll);
		a_result.scrollTo({
		    top: scroll,
		});
}
function scroller_do()
{
	return ;
	if(need_scroller==1)
	{
		var element = a_gid("response");
		var a_result = a_gid("a_result");
		var scroll = element.offsetHeight - a_result.offsetHeight + 100;
		
		
		a_result.scrollTo({
		    top: scroll,
		});
		/*
		a_result.scrollTo({
		    top: scroll,
		    behavior: 'smooth' // Optional: smooth scrolling
		});
		*/
		
	}
	//a_glert("nsrll:"+need_scroller);
}



function a_gid(x)
{
	// function return element direct by id
	return document.getElementById(x);
}
function awnto_server_glert_create()
{

	var div = document.createElement("div");
    
    	div.id = "a_glert" ;
    	div.style = "background-color: green;";
   	//div.style.width = "100px";
   	div.style.position="fixed";
   	div.style.right="0px";
   	div.style.top="130px";
    	//div.style.height = "40px";
    	div.innerHTML="Loading";
    	document.body.appendChild(div);  
    	
    	
    	div.style.display = 'none' ;
    	
    	//a_glert("Loading ...");
    	
}


var a_glert_st = 0 ;
function a_glert(x)
{
	a_glert_t(x,3000);
}
function a_glert_t(x,y)
{
	//await new Promise(r => setTimeout(r, 1000));
	a_glert_st++ ;
	a_gid('a_glert').innerHTML = x ;
	
	if(a_gid('a_glert').style.display != 'block')
		a_gid('a_glert').style.display = 'block' ;
	setTimeout(a_glert_out,y);
}
function a_glert_out()
{
	a_glert_st-- ;
	if(a_glert_st == 0)
	{
		a_gid('a_glert').style.display = 'none' ;
	}
}

a_gid('myInput').addEventListener("keydown", function(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevent newline
      showSearch();         // Submit the form
    }
  });


// Push a dummy state to the history stack
history.pushState(null, '', location.href);

// Listen for back/forward navigation
window.addEventListener('popstate', function () {
  // Immediately push the same state again to block back
  history.pushState(null, '', location.href);
});




/*
window.addEventListener('beforeunload', function (e) {
  e.preventDefault(); // Required for some browsers
  e.returnValue = ''; // Triggers the confirmation dialog
});
*/
