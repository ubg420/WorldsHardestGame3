var intermissions = [
    [],
    /*  L1 */["Hello"],
    /*  L2 */["LEVEL 1 COMPLETED"],
    /*  L3 */["LEVEL 2 COMPLETED"],
    /*  L4 */["LEVEL 3 COMPLETED"],
    /*  L5 */["LEVEL 4 COMPLETED"],
    /*  L6 */["LEVEL 5 COMPLETED"],
    /*  L7 */["YOU ARE JUST AWFUL AT THIS."],
    /*  L8 */["THIS IS JUST TOO EASY."],
    /*  L9 */["JUST GIVE IT UP ALREADY."],
    /* L10 */["BETTER THINK QUICK NOW."],
    /* L11 */["EASY PEASY."],
    /* L12 */["THERE'S 38 LEVELS TO GO AFTER THIS."],
    /* L13 */["NOT AS EASY AS IT LOOKS."],
    /* L14 */["NOT HARD AT ALL."],
    /* L15 */["YOU'RE A DISGRACE!"],
    /* L16 */["TRY THIS ONE ON FOR SIZE."],
    /* L17 */["HOW GOOD IS YOUR TIMING?"],
    /* L18 */["CAN YOU MAKE IT?"],
    /* L19 */["DON'T GET FRUSTRATED NOW."],
    /* L20 */["LET'S SEE YOU BEAT THIS ONE."],
    /* L21 */["COME ON NANCY BOY LET'S GO!"],
    /* L22 */["YOU'RE NOT EVEN HALF WAY DONE."],
    /* L23 */["MULTITASKING MUCH?"],
    /* L24 */["YOU WON'T BEAT THIS LEVEL."],
    /* L25 */["YOU CAN'T BE SERIOUS."],
    /* L26 */["THIS SHOULD BE FUN."],
    /* L27 */["PATIENCE IS KEY."],
    /* L28 */["WE CAN DO THIS ALL DAY."],
    /* L29 */["GET OUT OF HERE."],
    /* L30 */["OH IT'S ON NOW."],
	/* L31 */["YOU'VE GOT TO MOVE QUICKER!"],
	/* L32 */["YOU MUST BE GETTING EXHAUSTED..."],
	/* L33 */["DON'T MISS ANY..."],
	/* L34 */["HERE COMES THE THUNDER!"],
	/* L35 */["FASTER!  GO FASTER!"],
	/* L36 */["WE'RE GOING TO BE HERE FOR A WHILE..."],
	/* L37 */["NO MISTAKES ALLOWED."],
	/* L38 */["REMEMBER THIS ONE?"],
	/* L39 */["YOU WON'T BEAT THIS LEVEL."],
	/* L40 */["DON'T MISS ANY..."],
	/* L41 */["GET IN THERE."],
	/* L42 */["BACK AND FOURTH AND AROUND AND AROUND..."],
	/* L43 */["DIAGONALLY?!"],
	/* L44 */["THIS SHOULD BE FUN."],
	/* L45 */["THIS ONE TAKES SKILLS."],
	/* L46 */["YOU'D BETTER CLEAR YOUR SCHEDULE..."],
	/* L47 */["NO SKILLS?  NO WAY."],
	/* L48 */["CAN YOU MAKE IT?!"],
	/* L49 */["YOU'RE ALMOST THERE!"],
	/* L50 */["IMPOSSIBLE."],
];
var intermissionsPauses = [true,true,true,true,true,false];
function initIntermission() {
    state = "intermission";
	/*if(intermissionsPauses[realLevel]==true) 
		intermissionTimer = FPS*2;
    else */
	    intermissionTimer = 0;
    	
	finishInstructions();
}

function updateIntermission() {
    if (state == "intermission") {
        if (intermissionTimer > 0) {
            intermissionTimer--;
        } 
		else {
            state = "game";
			if((player.doorPause == false)&&(player.comeBackLevel == 0)){
			 if(player.doorPauseCounter<2)	{
              resetPlayer();
			  resetEnemies(0);
			 }
			
	
            }
			if((player.enterFromGate == false) || (player.justStarted == true)){
			 if((player.doorPause == false)&&(player.comeBackLevel == 0)){
				 
				if(player.doorPauseCounter<2){		 
                 playerAtCheck(true);
			     player.justStarted = false;
			    }
				
			 }
			} 
    		else {
			 playerAfterGate();
             player.enterFromGate = false;			 
			}
			
			
		
				 if(player.doorPauseCounter==2)
					 player.doorPauseCounter=3;
				 else {
				  if(player.doorPauseCounter==3){
					 player.doorPauseCounter=0;
					 player.alpha = 1;	
					 player.doorPause = false;
					 player.comeBackLevel = false;
				     //player.doorPauseCounter =0;
				  }
				 }
				 
			 
			initInstructions();
            justLoaded = false;
        }
    }
}

function drawIntermission() {
    drawPlainBg();
    
    // text
    const TEXT_SIZE = 26;
    canvas.fillStyle = "black";
    canvas.font = "bold " + cwh(TEXT_SIZE) + "px Arial";
    canvas.textAlign = "center";
    if (intermissions[realLevel].length == 1) {
        canvas.fillText(intermissions[realLevel][0], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 + INTERMISSION_Y_FIX) + os.y);
    } else if (intermissions[realLevel].length == 2) {
        canvas.fillText(intermissions[realLevel][0], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 - TEXT_SIZE / 2 - INTERMISSION_TEXT_SPACE + INTERMISSION_Y_FIX) + os.y);
        canvas.fillText(intermissions[realLevel][1], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 + TEXT_SIZE / 2 + INTERMISSION_TEXT_SPACE + INTERMISSION_Y_FIX) + os.y);
    } else if (intermissions[realLevel].length == 3) {
        canvas.fillText(intermissions[realLevel][0], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 - (TEXT_SIZE + INTERMISSION_TEXT_SPACE * 2) + INTERMISSION_Y_FIX) + os.y);
        canvas.fillText(intermissions[realLevel][1], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 + INTERMISSION_Y_FIX) + os.y);
        canvas.fillText(intermissions[realLevel][2], cwh(CANVAS_WIDTH / 2) + os.x, cwh(CANVAS_HEIGHT / 2 + (TEXT_SIZE + INTERMISSION_TEXT_SPACE * 2) + INTERMISSION_Y_FIX) + os.y);
    }
}

function drawPlainBg() {
	var color0, color1;
	if (level >= WALLS_RED) {
		color0 = INTERMISSION_COLOR_2_0;
		color1 = INTERMISSION_COLOR_2_1;
	} else if (level >= WALLS_PURPLE) {
		color0 = INTERMISSION_COLOR_1_0;
		color1 = INTERMISSION_COLOR_1_1;
	} else {
		color0 = INTERMISSION_COLOR_0_0;
		color1 = INTERMISSION_COLOR_0_1;
	}
	
    var grad = canvas.createLinearGradient(os.x, os.y, os.x, cwh(CANVAS_HEIGHT - BAR_HEIGHT * 2) + os.y);
    canvas.beginPath();
    canvas.rect(os.x, cwh(BAR_HEIGHT) + os.y, cwh(CANVAS_WIDTH), cwh(CANVAS_HEIGHT - BAR_HEIGHT * 2));
    grad.addColorStop(0, color0);
    grad.addColorStop(1, color1);
    canvas.fillStyle = grad;
    canvas.fill();
}