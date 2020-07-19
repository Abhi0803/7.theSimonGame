// var gamePattern = [];
// var userClickedPattern = [];
// var buttonColors = ["red", "blue", "green", "yellow"];
// var level = 0;
// var start = false;
// var click = 0;
//
//
// $("h2").hide();
// $("body").on("keydown", function() {
//   if (!start) {
//     $("h1").text("Level " + level);
//     nextSequence();
//     start = true;
//     $("h2").hide();
//   }
// });
//
// $(".btn").on("click", handlerFunction);
//
//
// function nextSequence() {
//   level++;
//   userClickedPattern = [];
//   $("h1").text("Level " + level);
//   var randomNumber = Math.floor(Math.random() * (3 + 1));
//
//   var randomChosenColor = buttonColors[randomNumber];
//   // console.log(randomChosenColor);
//
//   gamePattern.push(randomChosenColor);
//   console.log("Game " + gamePattern);
//
//   $("#" + randomChosenColor).fadeIn(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeIn(200);
//
//   playSound(randomChosenColor);
//
//
// }
//
// function handlerFunction() {
//   click++;
//   var userChosenColor = $(this).attr("id");
//   // console.log($(this).attr("id"));
//
//   userClickedPattern.push(userChosenColor);
//   console.log("User " + userClickedPattern);
//
//   playSound(userChosenColor);
//
//   buttonAnimation(userChosenColor);
//   console.log(click, level);
//   if (click === level) {
//     win();
//   }
// }
//
// // ---------------------------------Angela's Method----------------------------
// // if (gamePattern[level - 1] === userClickedPattern[level - 1]) {
// //   console.log("success");
// //
// //   if (userClickedPattern.length === gamePattern.length) {
// //     setTimeout(function() {
// //       nextSequence();
// //     }, 1000);
// //   }
// //
// // } else{
// //   console.log("Wrong");
// // }
// // }
//
// function playSound(name) {
//   var audio = new Audio("../sounds/" + name + ".mp3");
//   audio.play();
// }
//
// function buttonAnimation(name) {
//   $("." + name).addClass("pressed");
//
//   setTimeout(function() {
//     $("." + name).removeClass("pressed");
//
//   }, 100);
// }
//
// function win() {
//   if (JSON.stringify(gamePattern) === JSON.stringify(userClickedPattern)) {
//     console.log("success");
//     setTimeout(function() {
//       nextSequence();
//     }, 1000);
//     userClickedPattern = [];
//     click = 0;
//   }else {
//     lose();
//   }
// }
//
// function lose() {
//   console.log("Fail");
//   $("h1").html("Game Over");
//   $("h2").show();
//   reset();
//   $("body").addClass("game-over");
//   setTimeout(function() {
//     $("body").removeClass("game-over");
//   }, 800);
//   playSound("wrong");
//   // $("body").on("click", function(){$("h1").text("Press A Key to Start");});
// }
//
// function reset(){
//   start = false;
//   level = 0;
//   click = 0;
//   gamePattern = [];
// }


// ---------------------------------------MINIFIED VERSION------------------------
var gamePattern=[],userClickedPattern=[],buttonColors=["red","blue","green","yellow"],level=0,start=!1,click=0;function nextSequence(){level++,userClickedPattern=[],$("h1").text("Level "+level);var e=Math.floor(4*Math.random()),n=buttonColors[e];gamePattern.push(n),console.log("Game "+gamePattern),$("#"+n).fadeIn(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeIn(200),playSound(n)}function handlerFunction(){click++;var e=$(this).attr("id");userClickedPattern.push(e),console.log("User "+userClickedPattern),playSound(e),buttonAnimation(e),console.log(click,level),click===level&&win()}function playSound(e){new Audio("../sounds/"+e+".mp3").play()}function buttonAnimation(e){$("."+e).addClass("pressed"),setTimeout(function(){$("."+e).removeClass("pressed")},100)}function win(){JSON.stringify(gamePattern)===JSON.stringify(userClickedPattern)?(console.log("success"),setTimeout(function(){nextSequence()},1e3),userClickedPattern=[],click=0):lose()}function lose(){console.log("Fail"),$("h1").html("Game Over"),$("h2").show(),reset(),$("body").addClass("game-over"),setTimeout(function(){$("body").removeClass("game-over")},800),playSound("wrong")}function reset(){start=!1,level=0,click=0,gamePattern=[]}$("h2").hide(),$("body").on("keydown",function(){start||($("h1").text("Level "+level),nextSequence(),start=!0,$("h2").hide())}),$(".btn").on("click",handlerFunction);
