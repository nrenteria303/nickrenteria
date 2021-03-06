
// +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
// +_+_+_+_+_+_+_+_+_ Home Page +_+_+_+_+_+_+_+_+_
// +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_


// +_+_+_+_+_+_+_+_+_ Variables +_+_+_+_+_+_+_+_+_
const $header = $('.header');
const $heading2 = $('#secondary-heading');
const $adult = $('#as_adult');
const $swim = $('#as_swim');


$header.on({
    mouseleave: function() {
        let adultCount = 470;
        $adult.delay(adultCount).queue(function (asWhite) { 
            $(this).css('color', 'white'); 
            asWhite();
            });
        $swim.delay(adultCount + 1140).queue(function (asWhite) { 
            $(this).css('color', 'white'); 
            asWhite();
        });
    }
});


// +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
// +_+_+_+_+_+_+_+_+_ Character Page +_+_+_+_+_+_+_+_+_
// +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_

// +_+_+_+_+_+_+_+_+_ Variables +_+_+_+_+_+_+_+_+_
const $teaserText = $('#character_preview_cont');
const $clickForInfo = $('#click_for_info');
const $characterImg = $('.character_img');
const $characterCont = $('.character_cont');
const $charBar = $('#char_bar');
const $ventureFam = $('#venture_fam');
const $osiAgents = $('#osi_agents');
const $monarchClique = $('#monarch_clique');
const $friends = $('#friends');
const $ventures = $('.venture_family');
const $osi = $('.osi');
const $monarchy = $('.monarch_crew');
const $ventureFriends = $('.venture_friend');


$clickForInfo.hide();

$('.char_sort').click(function() {
    $teaserText.hide();
    $clickForInfo.show();
    let $this = $(this);
    $('.char_sort').removeClass('char_sort_clicked');
    $this.addClass('char_sort_clicked');
	let sort_id = $this.text();

	$.ajax({
		url: "./characters.json",
		dataType: "json",
		method: "get",
		success: function(response) {
			let $container = $('.characters');

			$container.empty();
			
			for (let i = 0; i < response.length; i++) {
				if ( response[i].subset === sort_id) {
					let $characterHTML = '<div class="character_cont';
                    $characterHTML += '" id="' + response[i].contId + '">';
                    $characterHTML += '<img class="character_img" id="' + response[i].imageId + '" src="' + response[i].imageSrc + '">';
                    $characterHTML += '<div class="character_bio">';

                    if ( response[i].spoiler === true ) {
                        $characterHTML += '<div class="character_top_line">';
                    }

                    $characterHTML += '<h3 class="character_name">' + response[i].name + '</h3>';
                    
                    if ( response[i].spoiler === true ) {
                        $characterHTML += '<div class="spoiler_box"><h3 class="spoiler_text">Reveal Spoiler</h3></div>';
                        $characterHTML += '<div class="spoiled_box"><h3 class="spoiled_text">' + response[i].spoilerText + '</h3></div></div>'; // closing spoiler & top line div tag
                    }

                    $characterHTML += '<p class="character_desc">' + response[i].description + '</p>';

                    $characterHTML += '</div>'; // closing character_bio div tag
                    $characterHTML += '</div>'; // closing character_cont div tag

					$container.append($characterHTML);
                }
                const $characterBio = $('.character_bio');
                const $spoilerBox = $('.spoiler_box');
                const $spoiledBox = $('.spoiled_box');

                $characterBio.hide();
                $('.character_img').click(function() {
                    $(this).next().fadeIn(700);
                });

                $spoiledBox.hide();
                $spoilerBox.click(function() {
                    $(this).hide();
                    $spoiledBox.fadeIn(300);
                });
            } // end json array navigation
            
		} // end success function

    }); // end ajax request

});

// BELOW IS THE WAY I DID THIS WITHOUT AJAX

        // $characterBio.hide();
        // $spoiledBox.hide();

        // $characterImg.click(function() {
        //     $(this).next().fadeIn(700);
        // });

        // $spoilerBox.click(function() {
        //     $(this).hide();
        //     $(this).next().fadeIn(300);
        // });

        // $ventureFam.on("click", function () {
        //     $ventures.show();
        //     $osi.hide();
        //     $monarchy.hide();
        //     $ventureFriends.hide();
        // });

        // $osiAgents.on("click", function () {
        //     $osi.show();
        //     $ventures.hide();
        //     $monarchy.hide();
        //     $ventureFriends.hide();
        // });

        // $monarchClique.on("click", function () {
        //     $monarchy.show();
        //     $ventures.hide();
        //     $osi.hide();
        //     $ventureFriends.hide();
        // });

        // $friends.on("click", function () {
        //     $ventureFriends.show();
        //     $ventures.hide();
        //     $monarchy.hide();
        //     $osi.hide();
        // });



// +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_
// +_+_+_+_+_+_+_+_+_ TENZI GAME +_+_+_+_+_+_+_+_+_
// +_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_

// +_+_+_+_+_+_+_+_+_ Variables +_+_+_+_+_+_+_+_+_
let isStartTimeBtnClicked = false;
let isRollBtnClicked = false;
let sides = 6;
const $infoIcn = $('#info-icn');
const $rollDiceBtn = $('#roll_dice');
const $4sided = $('#4_sides');
const $6sided = $('#6_sides');
const $8sided = $('#8_sides');
const $12sided = $('#12_sides');
const $20sided = $('#20_sides');
const $startTimerBtn = $('#start_timer_btn');
const $go = $('#go');
let timeLeft = 100;
const $timerDisplay = $('#timer_display');
const $clearBtn = $('#clear_dice_boxes');
const $diceBoxes = $('.die_display_box');
const $dieNumber1 = $('#die_display_number_1');
const $freeze1 = $('#freeze_1');
const $dieNumber2 = $('#die_display_number_2');
const $freeze2 = $('#freeze_2');
const $dieNumber3 = $('#die_display_number_3');
const $freeze3 = $('#freeze_3');
const $dieNumber4 = $('#die_display_number_4');
const $freeze4 = $('#freeze_4');
const $dieNumber5 = $('#die_display_number_5');
const $freeze5 = $('#freeze_5');
const $dieNumber6 = $('#die_display_number_6');
const $freeze6 = $('#freeze_6');
const $dieNumber7 = $('#die_display_number_7');
const $freeze7 = $('#freeze_7');
const $dieNumber8 = $('#die_display_number_8');
const $freeze8 = $('#freeze_8');
const $dieNumber9 = $('#die_display_number_9');
const $freeze9 = $('#freeze_9');
const $dieNumber10 = $('#die_display_number_10');
const $freeze10 = $('#freeze_10');
let diceActive = [  $dieNumber1, 
                    $dieNumber2, 
                    $dieNumber3, 
                    $dieNumber4, 
                    $dieNumber5, 
                    $dieNumber6, 
                    $dieNumber7, 
                    $dieNumber8, 
                    $dieNumber9, 
                    $dieNumber10];
let diceFrozen = [];
const $tenziWin = $('#declare_tenzi');
const $logTenzi = $('#log_tenzi');
const $runningScore = $('#running_score');
let tenziNumber = 0;
let newRound = true;


$logTenzi.hide();
$go.hide();

$infoIcn.click( function() {
    alert('How to play: Roll the virtual dice with the "Roll Active Dice" button. Try to get all of the dice to show the same face by freezing the ones you want to keep. When they all show the same face, hit the "Tenzi!" button to win. For an extra challenge, try a time trial and see how many points you can get before the time runs out!');
});

function rollActive(sides) {
    for (let i = 0; i < diceActive.length; i ++ ) {
        diceActive[i].text(Math.floor(Math.random() * sides ) + 1);
        switch (diceActive[i].text()) {
            case '1':
                diceActive[i].addClass("dr_venture_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_girlfriend_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");
                break;
            case '2':
                diceActive[i].addClass("brock_die");
                diceActive[i].removeClass("dr_venture_die dean_die hank_die monarch_die dr_girlfriend_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");
                break;
            case '3':
                diceActive[i].addClass("hank_die");
                diceActive[i].removeClass("brock_die dean_die dr_venture_die monarch_die dr_girlfriend_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");
                break;
            case '4':
                diceActive[i].addClass("dean_die");
                diceActive[i].removeClass("brock_die dr_venture_die hank_die monarch_die dr_girlfriend_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");
                break;
            case '5':
                diceActive[i].addClass("monarch_die");
                diceActive[i].removeClass("brock_die dean_die hank_die dr_venture_die dr_girlfriend_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");
                break;
            case '6':
                diceActive[i].addClass("dr_girlfriend_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");
                break;
            case '7':
                diceActive[i].addClass("henchman_21_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die dr_girlfriend_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");  
                break;
            case '8':
                diceActive[i].addClass("henchman_24_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die dr_girlfriend_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");   
                break;
            case '9':
                diceActive[i].addClass("dr_orpheus_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_girlfriend_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");   
                break;
            case '10':
                diceActive[i].addClass("triana_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die dr_girlfriend_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");   
                break;
            case '11':
                diceActive[i].addClass("molotov_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die dr_girlfriend_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");   
                break;
            case '12':
                diceActive[i].addClass("phantom_limb_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die dr_girlfriend_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");   
                break;
            case '13':
                diceActive[i].addClass("underbheit_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die dr_girlfriend_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");   
                break;
            case '14':
                diceActive[i].addClass("jonas_sr_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die dr_girlfriend_die jonas_jr_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");   
                break;
            case '15':
                diceActive[i].addClass("jonas_jr_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die dr_girlfriend_die captain_die killenger_die kano_die action_man_die colonel_gentleman_die");   
                break;
            case '16':
                diceActive[i].addClass("captain_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die dr_girlfriend_die killenger_die kano_die action_man_die colonel_gentleman_die");  
                break; 
            case '17':
                diceActive[i].addClass("killenger_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die dr_girlfriend_die kano_die action_man_die colonel_gentleman_die");   
                break;
            case '18':
                diceActive[i].addClass("kano_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die dr_girlfriend_die action_man_die colonel_gentleman_die");  
                break; 
            case '19':
                diceActive[i].addClass("action_man_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die dr_girlfriend_die colonel_gentleman_die");  
                break; 
            case '20':
                diceActive[i].addClass("colonel_gentleman_die");
                diceActive[i].removeClass("brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die dr_girlfriend_die");   
                break;
        };
    };
}

function rmvSideBtnClick() {
    let rmvBtnElement = $(".side_btn_click");
    rmvBtnElement.removeClass("side_btn_click");
}

$4sided.click( function() { 
    if (isRollBtnClicked === true) {
        alert("You cannot switch dice after you begin rolling. To start over, please clear the dice or refresh the page.");
    } else {
        rmvSideBtnClick();
        $(this).addClass("side_btn_click");
        sides = 4;
    }
});

$6sided.click( function() {
    if (isRollBtnClicked === true) {
        alert("You cannot switch dice after you begin rolling. To start over, please clear the dice or refresh the page");
    } else {
        rmvSideBtnClick();
        $(this).addClass("side_btn_click");
        sides = 6;
    }
});

$8sided.click( function() {
    if (isRollBtnClicked === true) {
        alert("You cannot switch dice after you begin rolling. To start over, please clear the dice or refresh the page");
    } else {
        rmvSideBtnClick();
        $(this).addClass("side_btn_click");
        sides = 8;
    }
});

$12sided.click( function() {
    if (isRollBtnClicked === true) {
        alert("You cannot switch dice after you begin rolling. To start over, please clear the dice or refresh the page.");
    } else {
        rmvSideBtnClick();
        $(this).addClass("side_btn_click");
        sides = 12;
    }
});

$20sided.click( function() {
    if (isRollBtnClicked === true) {
        alert("You cannot switch dice after you begin rolling. To start over, please clear the dice or refresh the page.");
    } else {
        rmvSideBtnClick();
        $(this).addClass("side_btn_click");
        sides = 20;
    }
});

$rollDiceBtn.click(function() {
    rollActive(sides);
    isRollBtnClicked = true;
});

function gameOverAlert() {
    alert("Time's up! Your score is " + tenziNumber + ".");
}

function countDown() {
    if ( timeLeft > 0 ) {
        timeLeft -= 1;
    }
    $timerDisplay.text(timeLeft);
}

$startTimerBtn.click(function() {
    if (isStartTimeBtnClicked == true) {
        alert('You already started the timer.');
    } else if (isRollBtnClicked === true && timeLeft > 0) {
        alert('You must start the time trial before rolling the dice. To start over, please clear the dice or refresh the page.')
    } else if (timeLeft > 0) {
        isStartTimeBtnClicked = true;
        $tenziWin.hide();
        $logTenzi.show();
        $go.show().fadeOut(900);
        $timerDisplay.show();
        setInterval(countDown, 1000);
        setTimeout(gameOverAlert, ((timeLeft + .02) * 1000 ));
    }
});

function clearDice() {
    while ( diceFrozen.length > 0 ) {
        diceActive.unshift(diceFrozen.shift());
    };
    $('.freeze_btn_frozen').removeClass('freeze_btn_frozen');
    for ( let i = 0 ; i < diceActive.length + diceFrozen.length ; i += 1 ) {
        diceActive[i].removeClass("colonel_gentleman_die brock_die dean_die hank_die monarch_die dr_venture_die henchman_21_die henchman_24_die dr_orpheus_die triana_die molotov_die phantom_limb_die underbheit_die jonas_sr_die jonas_jr_die captain_die killenger_die kano_die action_man_die dr_girlfriend_die");
        diceActive[i].html('');
    };
    isRollBtnClicked = false;    
}

$clearBtn.click( function() {
    clearDice();
    newRound = true;
});

function freezeClick(diceNumber, freezeNumber) {
    freezeNumber.click(function() {
        if (diceActive.includes(diceNumber) === true) {
            diceActive.splice(diceActive.indexOf(diceNumber), 1);
            diceFrozen.push(diceNumber);
            $(this).addClass("freeze_btn_frozen");
            diceNumber.addClass("die_display_number_frozen");
        } else {
            diceFrozen.splice(diceFrozen.indexOf(diceNumber), 1);
            diceActive.push(diceNumber);
            $(this).removeClass("freeze_btn_frozen");
            diceNumber.removeClass("die_display_number_frozen");
        }
    });
}

freezeClick($dieNumber1, $freeze1);
freezeClick($dieNumber2, $freeze2);
freezeClick($dieNumber3, $freeze3);
freezeClick($dieNumber4, $freeze4);
freezeClick($dieNumber5, $freeze5);
freezeClick($dieNumber6, $freeze6);
freezeClick($dieNumber7, $freeze7);
freezeClick($dieNumber8, $freeze8);
freezeClick($dieNumber9, $freeze9);
freezeClick($dieNumber10, $freeze10);

$tenziWin.click(function() {
    if ( isRollBtnClicked === false ) {
        alert("You have to roll the dice first.")
    }
    else if ( $dieNumber1.text() === $dieNumber2.text() && $dieNumber1.text() === $dieNumber3.text() && $dieNumber1.text() === $dieNumber4.text() && $dieNumber1.text() === $dieNumber5.text() && $dieNumber1.text() === $dieNumber6.text() && $dieNumber1.text() === $dieNumber7.text() && $dieNumber1.text() === $dieNumber8.text() && $dieNumber1.text() === $dieNumber9.text() && $dieNumber1.text() === $dieNumber10.text() ) {
        alert("Congratulations, you're a winner!");
    } else {
        alert("Cheater! You're a cheater! No Tenzi!")
    }
});

$logTenzi.click(function() {
    if ( isRollBtnClicked === false ) {
        alert("You have to roll the dice first.")
    } else if ( newRound === false ) {
        alert('Please clear the dice to start a new round.');
    } else if ( $dieNumber1.text() === $dieNumber2.text() && $dieNumber1.text() === $dieNumber3.text() && $dieNumber1.text() === $dieNumber4.text() && $dieNumber1.text() === $dieNumber5.text() && $dieNumber1.text() === $dieNumber6.text() && $dieNumber1.text() === $dieNumber7.text() && $dieNumber1.text() === $dieNumber8.text() && $dieNumber1.text() === $dieNumber9.text() && $dieNumber1.text() === $dieNumber10.text() && timeLeft > 0) {
        if ( $4sided.hasClass('side_btn_click') ) {
        tenziNumber += 50;
        } else if ( $6sided.hasClass('side_btn_click') ) {
            tenziNumber += 75;
        } else if ( $8sided.hasClass('side_btn_click') ) {
            tenziNumber += 150;
        } else if ( $12sided.hasClass('side_btn_click') ) {
            tenziNumber += 500;
        } else if ( $20sided.hasClass('side_btn_click') ) {
            tenziNumber += 1000;
        }
        newRound = false;
    } else if ( isStartTimeBtnClicked == true) {
        alert("Cheater! You're a cheater! No Tenzi!");
    } else {
        alert('Please refresh the page to begin a new game.');
    }
    $runningScore.text(tenziNumber);
});
