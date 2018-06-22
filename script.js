function captureElements() {
    var sourceText = document.getElementById('source').value;
    var previewDiv = document.getElementById('preview');
    previewDiv.innerHTML = marked(sourceText);
};

let source = document.getElementById('source').value

function oneSecondHasElapsed(){
//    if (source) {
        setTimeout('captureElements()', 6000);
    // console.log ( "test timer");
}







//function autoClick(){
//    window.onload = function(){
//        document.getElementById('clickButton').click();
//      }
//}



//function delayCounter() {

//    var typingTimer;
  //  var doneTypingInterval = 1000;
    //var doneTyping = 0;
   // var sourceText = document.getElementById('source').value;
    
  //  sourceText.keyup(function(){
  //      clearTimeout(typingTimer);
  //      if (sourceText.value()) {
  //          typingTimer = setTimeout(doneTyping, doneTypingInterval);
  //      }
 //   });
    

//}

