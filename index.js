function home(){
	document.title="MINI GAMES";
	document.getElementById("mainPageContainer").innerHTML="";
	document.getElementById("mainPageContainer").setAttribute("class","mainPage");
	var head = document.head;
	head.removeChild(document.getElementById("stl"));
	var link = document.createElement("link");
  	link.id="stl";
 	link.type = "text/css";
  	link.rel = "stylesheet";
 	link.href = "index.css";
  	head.appendChild(link);
	document.getElementById("mainPageContainer").innerHTML=`<div class="container-fluid">
				<br><br>
			<div class="row">
				<div class="col-lg-1">
					
				</div>
				<div class=" col-lg-3" >
					<button id="home" onclick="home()">HOME</button>
					
				</div>
			</div>
		</div>
		<br><br>
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-4">
					
				</div>
				<div class="col-lg-4 " align="center">
					<h1 style="text-align:center; font-size:70px;">Ready to play?<br><span style="font-size:40px;">Mini Games</span></h1><br>
					<button onclick="hangman()" id="hang">Hang SQRBOOK</button><br><br>
					<button onclick="tic_tac_toe()" id="tictactoe">TIC-TAC-TOE</button>
				</div>
			</div>
		</div>`;
}


/***********************************hangman*********************************************************************/
var level1=[["Nayagan","Mangatha","Thuppaki","Varanam Ayiram","Padayappa"],["The Godfather","GoodFellas","Fight Club","Toy Story","Pulp Fiction"]];
var level=0;
var numOfLevels=level1.length;
var position=0;
var wordSuccess=0
var defeat=0;
var hintCount=6;
var hint=hintCount;
var points=0;
var correctAns=0;
var streak=0;
var numOfWordsMore=level1[level].length;
var space=true;
var currentWord=level1[level][0];
currentWord=currentWord.split("");

function hangman(){
level1=[["Nayagan","Mangatha","Thuppaki","Varanam Ayiram","Padayappa"],["The Godfather","GoodFellas","Fight Club","Toy Story","Pulp Fiction"]];
level=0;
numOfLevels=level1.length;
position=0;
wordSuccess=0
defeat=0;
hintCount=6;
hint=hintCount;
points=0;
correctAns=0;
streak=0;
numOfWordsMore=level1[level].length;
space=true;
currentWord=level1[level][0];
currentWord=currentWord.split("");
document.getElementById("mainPageContainer").innerHTML="";
	document.title="Hang SQRBOOK";
	// document.getElementById("mainPageContainer").setAttribute("class","mainPageContainer");
	var head = document.head;
	head.removeChild(document.getElementById("stl"));
  	var link = document.createElement("link");
  	link.id="stl";
 	link.type = "text/css";
  	link.rel = "stylesheet";
 	link.href = "hangman.css";
  	head.appendChild(link);

	// var container=document.createElement("div");
	// container.id="container";
	// var str='<div class="header" id="header"><div class="headerLeft" id="headerLeft"><button class="hint" id="hint" onclick="getHint()">Hint</button><span id="noOfHints"></span></div><div class="headerMiddle" id="headerMiddle"><h1 id="level" class="level"></h1><h3 class="notifi" id="notifi"></h3></div><div class="headerRight" id="headerRight"></div></div><div class="content" id="content"><div class="man" id="man"><img src="1.jpg"></div><div class="game" id="game"><div class="placeHolder" id="placeHolder"><span class="dash" id="dash"></span></div><div class="letters" id="letters"></div></div></div>';
	var str=`	<br><br><div class="container-fluid">
		<div class="row">
			<div class="col-lg-2" align="center">
				<button id="hangHome" onclick="home()">HOME</button><br><br>
				<button class="hint" id="hint" onclick="getHint()">Hint</button>
				<span id="noOfHints"></span>
			</div>
			<div class="col-lg-8" id="headerMiddle">
				<h1 id="level" class="level"></h1><h3 class="notifi" id="notifi"></h3>
			</div>
			<div class="col-lg-2" id="headerRight">
				
			</div>
		</div>
	</div>
	<div class="container-fluid">
		<div class="row">
				<div class="man col-xs-4  col-lg-4" id="man"><img src="1.JPG"></div>
				<div class="game col-xs-8 col-lg-8" id="game">
					<div class="row">
						<div class="placeHolder col-xs-6 col-lg-6" id="placeHolder" align="center"><span class="dash" id="dash"></span></div>
						
					</div>
					<br><br><br>
					<div class="row">
						<div class="letters col-xs-12 col-lg-8"  align="center"><span id="letters"></span></div>
					</div>
					
				</div>
		</div>
	</div>`;
	// container.innerHTML=str;
	// var header=document.createElement("div");
	// header.id="header";
	// header.setAttribute("class","header");

	// var headerLeft=document.createElement("div");
	// headerLeft.id="headerLeft";
	// headerLeft.innerHTML="<button class="hint" id="hint" onclick="getHint()">Hint</button><span id="noOfHints"></span>"
	// headerLeft.setAttribute("class","headerLeft");
	// header.appendchild(headerLeft);

	// var headerMiddle=document.createElement("div");
	// headerMiddle.id="headerMiddle";
	// headerMiddle.setAttribute("class","headerMiddle");
	// header.appendchild(headerMiddle);

	// var headerRight=document.createElement("div");
	// headerRight.id="headerRight";
	// headerRight.setAttribute("class","headerRight");
	// header.appendchild(headerRight);

	// container.appendchild(header);
	document.getElementById("mainPageContainer").innerHTML=str;
	// document.getElementById("mainPageContainer").appendChild(container);

	var count=0
	document.getElementById("level").innerHTML="LEVEL-"+(level+1);
	var h=document.createElement("h3");
	h.innerHTML="No Of Hints Available:"+hint;
	document.getElementById("noOfHints").appendChild(h);


	var p=document.createElement("h3");
	p.innerHTML=correctAns+"/"+level1[level].length+" Words";
	document.getElementById("headerRight").appendChild(p);

	var pnt=document.createElement("h3");
	pnt.innerHTML="points:"+points;
	document.getElementById("headerRight").appendChild(pnt);

	var strk=document.createElement("h3");
	strk.innerHTML="Streak:"+streak;
	document.getElementById("headerRight").appendChild(strk);


	var dash=document.getElementById("dash");
	var str=""
	for(let i=0;i<level1[level][0].length;i++){
		if(level1[level][0][i]==" "){
			str+="&emsp;";
		}
		else{
			str+=" _"
		}
	}
	dash.innerHTML=str;

	var letter=document.getElementById("letters");
	letter.innerHTML="";
	for( let n=0;n<26;n++){
		count++;
		var char=String.fromCharCode(65 + n);
		// var btn=document.createElement("button")
		// btn.id=char;
		// btn.setAttribute("onclick","validate('"+char+"',"+position+")");
		// btn.setAttribute("style","display:inline;");
		// btn.setAttribute("class","gamebtn");
		// btn.innerHTML=char;
		 if(count==6){
		 	// var br=document.createElement("br");
		 	letter.innerHTML+="<br><br><button id='"+char+"' class='gamebtn' onclick='validate(`"+char+"`)' style='display:inline;'>"+char+"</button>&emsp;";
		 	count=1;
		 }else{
		 	letter.innerHTML+="<button id='"+char+"' class='gamebtn' onclick='validate(`"+char+"`)' style='display:inline;'>"+char+"</button>&emsp;";
		 	
		 }
	}

}


// window.onload = function(){
	
// };

function getHint(){
	hint--;
	console.log(hint);
	document.getElementById("noOfHints").innerHTML="";
	var h=document.createElement("h3");
	document.getElementById("noOfHints").appendChild(h);
	if(hint>=0){
			for(let i=0;i<currentWord.length;i++){
			if(currentWord[i].includes("<") || currentWord[i]==" " || currentWord[i]=="_"){
				continue;
			}
			else{
				validate(currentWord[i].toUpperCase());
				break;
			}
		}
	}
	else{
		// alert("No more hints left out!");
		document.getElementById("notifi").innerHTML="No more hints left out!";
		document.getElementById("hint").disabled=true;
		hint=0;
	}
	h.innerHTML="No Of Hints Available:"+hint;

	
}

function updateCurrentWord(position){
	var h=document.createElement("h3");
	h.innerHTML="No Of Hints Available:"+hint;
	document.getElementById("noOfHints").innerHTML="";
	document.getElementById("noOfHints").appendChild(h);
	currentWord=level1[level][position];
	currentWord=currentWord.split("");
}



function validate(char){
	var replay=false;
	var str="";
	var flag=0;
	var btn=document.getElementById(char);
	var dash=document.getElementById("dash");
	console.log(char,position,"level:"+level,"wordSuccess:"+wordSuccess,currentWord,str)
	for(let i=0;i<currentWord.length;i++){
			if(currentWord[i].includes("<")){
				str+=currentWord[i];
				continue;
			}
			else if(char.toLowerCase()==currentWord[i].toLowerCase()){
				str+="<u>"+char+"</u>";
				currentWord[i]="<u>"+char+"</u>";
				wordSuccess++;
				flag=1
				btn.setAttribute("class","success");
				btn.disabled=true;
			}
			else if(currentWord[i]==" "){
				if(space){
					wordSuccess++;
					space=false;
				}
				str+="&emsp;";

			}

			else{
				str+="  _  ";
			
			}
			
	}
	console.log(char,position,"wordSuccess:"+wordSuccess,currentWord,str)
	dash.innerHTML=str;

		if(flag==0){
				var audio = new Audio('wrong.wav');
				audio.play();
				btn.setAttribute("class","failed");
				btn.disabled=true;
				defeat++;
				switch(defeat){
					case 1:document.getElementById("notifi").innerHTML="SQRBOOK: Please be carefull";
							break;
					case 2:document.getElementById("notifi").innerHTML="SQRBOOK: Yea we learn from our mistakes <br>hrr!! but I won't have a life to learn if you keep on making mistakes";
							break;
					case 3:document.getElementById("notifi").innerHTML="SQRBOOK: My life is in your hands";
							break;
					case 4:document.getElementById("notifi").innerHTML="SQRBOOK: I dont want to die!";
							break;
					case 5:document.getElementById("notifi").innerHTML="SQRBOOK: Two more mistakes,I am dead";
							break;
					case 6:document.getElementById("notifi").innerHTML="SQRBOOK: I lost hope in you.I am going to die.........";
							break;

				}
				var man=document.getElementById("man");
				man.innerHTML="<img src='"+(defeat+1)+".JPG'>";
		}
		else{
			var audio = new Audio('correct.mp3');
				audio.play();
			switch(defeat){
				case 0:document.getElementById("notifi").innerHTML="SQRBOOK: That's a good Start";
							break;
				case 1:document.getElementById("notifi").innerHTML="SQRBOOK: Yea Great!";
							break;
				case 2:document.getElementById("notifi").innerHTML="SQRBOOK: Keep making the right choices";
							break;
				case 3:document.getElementById("notifi").innerHTML="SQRBOOK: huhooo I got some hope";
							break;
				case 4:document.getElementById("notifi").innerHTML="SQRBOOK: Yea that's it save me from this";
							break;
				case 5:document.getElementById("notifi").innerHTML="SQRBOOK: Good choice...No more wrong choice";
							break;
				case 6:document.getElementById("notifi").innerHTML="SQRBOOK: Sorry I have Hope in You...Pls save me";
							break;
			}
			
		}
		if(defeat==7){
				// alert("You Lost");
				document.getElementById("level").innerHTML="OOOPS";
				document.getElementById("notifi").innerHTML="You Have Lost";
				document.getElementById("notifi").setAttribute("style","font-size:50px;");
				streak=0;
				var r = confirm("The word is:"+level1[level][position]+"\nDone you want to try save him again?");
				if (r == true) {
					hangman();
				} 
				// replay=true;

		}
		else if(wordSuccess==level1[level][position].length){
				// alert("you got this word correct");
				numOfWordsMore--;
				document.getElementById("notifi").innerHTML='you got the word "'+level1[level][position].toUpperCase()+'" correct<p style="text-align:center">Still '+numOfWordsMore+' more words to complete level-'+(level+1)+'</p>';
				streak++;
				points+=10;
				correctAns++;
				++position;
				wordSuccess=0;
				defeat=0;
				var man=document.getElementById("man");
				man.innerHTML="<img src='"+(1)+".jpg'>";
				if(position<level1[level].length){
					space=true;
					updateCurrentWord(position);
					nextWord(position);
				}
				else{
					// alert("you won the game");
					document.getElementById("notifi").innerHTML="Well done!\nyou completed level "+(level+1);
					position=0;
					correctAns=0;
					level++;
					space=true;
					if(level==numOfLevels){
						document.getElementById("level").innerHTML="CONGRATULATIONS!";
						document.getElementById("notifi").innerHTML="you won the game";
							var r = confirm("Done You Want To Replay?");
							if (r == true) {
								hangman();
							} 
						// replay=true;

					}
					else{
						hint-=2;
						numOfWordsMore=level1[level].length;
						document.getElementById("level").innerHTML="LEVEL-"+(level+1);
						updateCurrentWord(position);
						nextWord(position);
					}
					// replay=true;
					


				}
		}
		// if(replay){
		// 	wantReplay();
		// }

		
}
// function wantReplay(){
	// var r = confirm("Done You Want To Replay?");
	// 	if (r == true) {
	// 		location.reload();
	// 	} 
// }
function nextWord(position){
	var count=0

	document.getElementById("headerRight").innerHTML="";
	var p=document.createElement("h3");
	p.innerHTML=correctAns+"/"+level1[level].length+" Words";
	document.getElementById("headerRight").appendChild(p);

	var pnt=document.createElement("h3");
	pnt.innerHTML="points:"+points;
	document.getElementById("headerRight").appendChild(pnt);

	var strk=document.createElement("h3");
	strk.innerHTML="Streak:"+streak;
	document.getElementById("headerRight").appendChild(strk);


	var dash=document.getElementById("dash");
	var str=""
	for(let i=0;i<level1[level][position].length;i++){
		if(level1[level][position][i]==" "){
			str+="&emsp;";
		}
		else if(i==0){
			str+="_";
		}
		else{
			str+=" _"
		}
	}
	dash.innerHTML=str;

	var letter=document.getElementById("letters")
	letter.innerHTML=""
	for( let n=0;n<26;n++){
		count++;
		// var char=String.fromCharCode(65 + n);
		// var btn=document.createElement("button")
		// btn.id=char;
		// btn.setAttribute("onclick","validate('"+char+"',"+position+")");
		// btn.setAttribute("style","display:inline;");
		// btn.setAttribute("class","gamebtn");
		// btn.innerHTML=char;
		//  letter.appendChild(btn);
		 if(count==6){
		 	// var br=document.createElement("br");
		 	letter.innerHTML+="<br><br><button id='"+char+"' class='gamebtn' onclick='validate(`"+char+"`)' style='display:inline;'>"+char+"</button>&emsp;";
		 	count=1;
		 }else{
		 	letter.innerHTML+="<button id='"+char+"' class='gamebtn' onclick='validate(`"+char+"`)' style='display:inline;'>"+char+"</button>&emsp;";
		 	
		 }
	}
}
/***********************************hangman*********************************************************************/






/**********************************TIC_TAC_TOE******************************************************************/


/*****************************global********************************************/
var start=false;
var spinDone=false;
var playerValue='X';
var playerNum=1;
var players=["$","",""];
var game=["$",0,0,0,0,0,0,0,0,0];
/*****************************global********************************************/

/****************************container********************************************/
	var container=document.createElement("div");
	container.id="container";
	container.setAttribute("class","container");
/****************************container********************************************/


function tic_tac_toe(){
start=false;
spinDone=false;
playerValue='X';
playerNum=1;
players=["$","",""];
game=["$",0,0,0,0,0,0,0,0,0];
		document.title="TIC-TAC-TOE";
		container.innerHTML="";
	document.getElementById("mainPageContainer").setAttribute("class","mainPageContainer");
	var head = document.head;
	head.removeChild(document.getElementById("stl"));
  	var link = document.createElement("link");
  	link.id="stl";
 	link.type = "text/css";
  	link.rel = "stylesheet";
 	link.href = "tic_tac_toe.css";
  	head.appendChild(link);


// document.getElementById("mainPageContainer").innerHTML='<button id="tictactoeHome" onclick="home()">HOME</button>';
// 	var getName=document.createElement("div");
// 	getName.id="getName";
// 	getName.setAttribute("class","getName");
// 	getName.innerHTML="<h1 style='text-align:center;'>Welcome To<br><span style='font-size:40px;'>TIC-TAC-TOE</span></h1><form onsubmit='gamewindow()'><input type='text' id='player1' name='player1' placeholder='Nickname for player 1' required><br><br><input type='text' id='player2' name='player2' placeholder='Nickname for player 2' required><br><br><input type='submit' id='submit' value='Go To game'></form>";
// 	container.appendChild(getName);

// document.getElementById("mainPageContainer").appendChild(container);
document.getElementById("mainPageContainer").innerHTML="";
document.getElementById("mainPageContainer").innerHTML=`<br><br><div class="container-fluid">
	<div class="row">
		<div class="col-sm-1 col-lg-1">
			
		</div>
		<div class="col-sm-3 col-lg-3">
			<button id="tictactoeHome" onclick="home()">HOME</button>
		</div>
	</div>
</div>
<br><br>
<div class="container">
	<div class="row">
		<div class="col-sm-12 col-lg-12" align="center">
			<h1 style='text-align:center;'>Welcome To<br><span style='font-size:40px;'>TIC-TAC-TOE</span></h1>
			<form onsubmit='gamewindow()' >
				<input type='text' id='player1' name='player1' placeholder='Nickname for player 1' required><br><br>
				<input type='text' id='player2' name='player2' placeholder='Nickname for player 2' required><br><br>
				<input type='submit' id='submit' value='Go To game' ></form>
		</div>
	</div>
</div>`;
}

/************************gameWindow*******************************************************************************/
function gamewindow(){
players[1]=document.getElementById("player1").value.toUpperCase();
players[2]=document.getElementById("player2").value.toUpperCase();
console.log(players[1],players[2]);
document.getElementById("mainPageContainer").innerHTML="";
document.getElementById("mainPageContainer").innerHTML=`<br><br><div class="container-fluid">
	<div class="row">
		<div class="col-sm-1 col-lg-1">
			
		</div>
		<div class="col-sm-3 col-lg-3">
			<button id="tictactoeHome" onclick="home()">HOME</button>
		</div>
	</div>
</div><br><br><div class="container-fluid">
	<div class="row" id="header">
		<div class="col-lg-3" id="headerLeft" align="center">
		</div>
		<div class="col-lg-5" id="headerMiddle" align="center">
			<button onclick=startgame() class='start'>Start The Game</button><br><br><p id='notifi' style='font-size:30px;text-align:center;'></p>
		</div>
		<div class="col-lg-3" id="headerRight" align="center">
			<button id='spinner' onclick='spin()'>SPIN</button><h2 id='turn'>Spin to see who goes first</h2>
		</div>
	</div>
</div>
<br><br>
<div class="container">
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6" align="center">
			<div id="1" onclick="valid(1)" class="topLeft box"></div>
			<div id="2" onclick="valid(2)" class="topMiddle box"></div>
			<div id="3" onclick="valid(3)" class="topRight box"></div>
			<div id="4" onclick="valid(4)" class="centerLeft box"></div>
			<div id="5" onclick="valid(5)" class="centerMiddle box"></div>
			<div id="6" onclick="valid(6)" class="centerRight box"></div>
			<div id="7" onclick="valid(7)" class="bottomLeft box"></div>
			<div id="8" onclick="valid(8)" class="bottomMiddle box"></div>
			<div id="9" onclick="valid(9)" class="bottomRight box"></div>
		</div>
	</div>
</div>`;

// var container=document.createElement("div");
// container.id="container";
// container.setAttribute("class","container");
// container.innerHTML=""
/*******************header************************/
// var header=document.createElement("div");
// header.id="header";
// header.setAttribute("class","header");

// var headerLeft=document.createElement("div");
// headerLeft.id="headerLeft";
var headerLeft=document.getElementById("headerLeft");
headerLeft.innerHTML="<p style='font-size:30px;'>"+players[1]+": 'X'</p><p style='font-size:30px;'>"+players[2]+": 'O'";
// headerLeft.setAttribute("class","headerLeft");

// header.appendChild(headerLeft);

// var headerMiddle=document.createElement("div");
// headerMiddle.id="headerMiddle";
// headerMiddle.innerHTML="<button onclick=startgame() class='start'>Start The Game</button><p id='notifi' style='font-size:30px;text-align:center;'></p>";
// headerMiddle.setAttribute("class","headerMiddle");
// header.appendChild(headerMiddle);

// var headerRight=document.createElement("div");
// headerRight.id="headerRight";
// headerRight.innerHTML="<h2 id='turn'>Spin to see who goes first</h2><button id='spinner' onclick='spin()'>SPIN</button>";
// headerRight.setAttribute("class","headerRight");
// header.appendChild(headerRight);

// container.appendChild(header);

/*******************header***********************************/

/**************************game board**********************/
// var gameBoard=document.createElement("div");
// gameBoard.id="gameBoard";
// gameBoard.setAttribute("class","gameBoard");

// var topLeft=document.createElement("div");
// topLeft.id="1";
// topLeft.setAttribute("onclick","valid("+1+")");
// topLeft.setAttribute("class","topLeft box");
// gameBoard.appendChild(topLeft);

// var topMiddle=document.createElement("div");
// topMiddle.id="2";
// topMiddle.setAttribute("onclick","valid("+2+")");
// topMiddle.setAttribute("class","topMiddle box");
// gameBoard.appendChild(topMiddle);

// var topRight=document.createElement("div");
// topRight.id="3";
// topRight.setAttribute("onclick","valid("+3+")");
// topRight.setAttribute("class","topRight box");
// gameBoard.appendChild(topRight);

// var centerLeft=document.createElement("div");
// centerLeft.id="4";
// centerLeft.setAttribute("onclick","valid("+4+")");
// centerLeft.setAttribute("class","centerLeft box");
// gameBoard.appendChild(centerLeft);

// var centerMiddle=document.createElement("div");
// centerMiddle.id="5";
// centerMiddle.setAttribute("onclick","valid("+5+")");
// centerMiddle.setAttribute("class","centerMiddle box");
// gameBoard.appendChild(centerMiddle);

// var centerRight=document.createElement("div");
// centerRight.id="6";
// centerRight.setAttribute("onclick","valid("+6+")");
// centerRight.setAttribute("class","centerRight box");
// gameBoard.appendChild(centerRight);

// var bottomLeft=document.createElement("div");
// bottomLeft.id="7";
// bottomLeft.setAttribute("onclick","valid("+7+")");
// bottomLeft.setAttribute("class","bottomLeft box");
// gameBoard.appendChild(bottomLeft);

// var bottomMiddle=document.createElement("div");
// bottomMiddle.id="8";
// bottomMiddle.setAttribute("onclick","valid("+8+")");
// bottomMiddle.setAttribute("class","bottomMiddle box");
// gameBoard.appendChild(bottomMiddle);

// var bottomRight=document.createElement("div");
// bottomRight.id="9";
// bottomRight.setAttribute("onclick","valid("+9+")");
// bottomRight.setAttribute("class","bottomRight box");
// gameBoard.appendChild(bottomRight);



// container.appendChild(gameBoard);
// /**************************game board****************/


// document.getElementById("mainPageContainer").appendChild(container);

}
/************************gameWindow**********************************************************************************/







/********************************spin************************************************************/
function spin(){
	var audio = new Audio('spin.mp3');
	audio.play();
	spinDone=true;
	var y =Math.random();
	if(y<0.5){
	y =Math.floor(y)
	}
	else{
	y= Math.ceil(y)
	}
	playerNum=y+1;
	console.log(playerNum);
	if(playerNum==1){
		playerValue='X';
	}
	else{
		playerValue='O';
	}
	document.getElementById("spinner").disabled=true;
	document.getElementById("turn").innerHTML="Player-"+playerNum+" goes first";
}
/********************************spin************************************************************/





/*********************startgame*************************************************/
var done=0;
function startgame(){
	if(spinDone){
		if(done==0){
			var audio = new Audio('startup.ogg');
			audio.play();
			done=1;
		}
		
		document.getElementById("headerMiddle").innerHTML="<h1 style='font-size:50px;text-align:center;'>"+players[playerNum]+"'s turn</h1><br><br><p id='notifi' style='font-size:30px;text-align:center;'></p>";
		start=true;
		console.log(start);
	}
	else{
		var audio = new Audio('wrong.wav');
				audio.play();
		document.getElementById("notifi").innerHTML="Please spin to find Who goes first";
	}
	
}
/*********************startgame*************************************************/







/*************************valiate****************************************************/
function valid(position){
	if(!spinDone){
		var audio = new Audio('wrong.wav');
				audio.play();
		document.getElementById("notifi").innerHTML="Please spin to find Who goes first";
	}
	else if(start){
		if(playerNum==1){
				var audio = new Audio('correct.mp3');
				audio.play();
			}
			else{
				var audio = new Audio('startup.ogg');
				audio.play();
			}
		
		if(game[position]==0){
			game[position]=playerValue;
			document.getElementById(position).innerHTML="<h1 style='width:100%;height:100%;'>"+playerValue+"</h1>";
			checkWin();
		}
		else{

			document.getElementById("notifi").innerHTML="The position is selected by other player...please select other position";
		}
	}
	else{
		var audio = new Audio('wrong.wav');
				audio.play();
		document.getElementById("notifi").innerHTML="Please start the game";
	}
	console.log(game);
}
/*************************valiate****************************************************/







/******************checkWin***************************************************************/
function checkWin(){

		if((game[1]==game[2] && game[1]==game[3] &&game[1]!=0)||(game[4]==game[5] && game[4]==game[6] &&game[4]!=0)||(game[7]==game[8] && game[7]==game[9]&&game[7]!=0)||(game[1]==game[4] && game[1]==game[7]&&game[7]!=0)||(game[2]==game[5] && game[2]==game[8]&&game[2]!=0)||(game[3]==game[6] && game[3]==game[9]&&game[3]!=0)||(game[1]==game[5] && game[1]==game[9]&&game[1]!=0)||(game[3]==game[5] && game[3]==game[7]&&game[7]!=0)){
			var audio = new Audio('winning.mp3');
				audio.play();
			document.getElementById("headerMiddle").innerHTML="<h1 style='font-size:50px;text-align:center;'>Congratulations "+players[playerNum]+" <br>YOU WON</h1>";
			setTimeout(function(){
									var r = confirm("Do you want to play again?");
									if (r == true) {
										tic_tac_toe();
									}
								 },16000);
		}
		else{
			 checkDraw();
			
		}
}
/******************checkWin***************************************************************/




/******************checkDraw***************************************************************/

function checkDraw(){
	var flag=0;
	for(let i of game){
		if(i==0){
			flag=1
		}
	}
	if(flag==0){
		var audio = new Audio('correct.mp3');
		audio.play();
		document.getElementById("headerMiddle").innerHTML="<h1 style='font-size:50px;text-align:center;'>Match Draw</h1>";
		setTimeout(function(){var audio = new Audio('draw.wav');
				audio.play();},1000);
			setTimeout(function(){
									var r = confirm("Do you want to play again?");
									if (r == true) {
										tic_tac_toe();
									}
								 },3000);
	}
	else{
		if(playerNum==1){
				playerNum=2;
				playerValue='O';
			}
			else{
				playerNum=1;
				playerValue='X';
			}
		startgame();
	}
}
/******************checkDraw***************************************************************/

/**********************************TIC_TAC_TOE******************************************************************/
