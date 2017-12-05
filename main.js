$(document).ready( function(){
  var questions = ["What is a 'magic number' in javascript?", "What is a rest param?", "What is an arrow function?", "What does babel do?", "What is object destructuring?"]
  var answers = ["A magic number is a literal value without a clear definition. Use const helps avoid this problem.", "Answer 1", "Answer 2", "Answer 3", "Object destructing is "]
  var i = 0;
  var h = '<h4>' + questions[i] + '</h4>'
  $('.question').append(h) 

  function clearAnswers() {
    $('.answer').empty();
    $('.question').empty();
  }

  function checkIndex(){
    if (i > questions.length - 1) {
      i = 0;
    }
  }

  function checkFirst(){
    if (i < questions.length -1) {
      i = 4;
    }
  }

  $('.show-answer').on('click', function(){  
      var p = '<p>' + answers[i] + '</p>' 
      $('.answer').append(p)
     })

  $('.card').on('click', function(){
      clearAnswers()
      i += 1;
      checkIndex()
      var h = '<h4>' + questions[i] + '</h4>'
      $('.question').append(h)   
  });

  $('.prev-card').on('click', function(){
    clearAnswers();
    i -= 2;
    checkFirst()
    console.log(i)
    var h = '<h4>' + questions[i] + '</h4>'
    $('.question').append(h)   
   
    });



});


