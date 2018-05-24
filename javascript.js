
document.getElementById('check').addEventListener('click', function(){
  var word1 = document.getElementById('get_input').value.replace(/ +/g, "").split("")
  var word = document.getElementById('get_input').value.replace(/ +/g, "").split("")
  var word2 = word.reverse()
  if (word1.join("") == word2.join("")){
    document.getElementById('result').innerHTML = "You got the Palindrome"
  }
  else {
    document.getElementById('result').innerHTML = "No Palindrome."
  }
})


document.getElementById('check_order').addEventListener('click', function(){
  var word = document.getElementById('get_input').value.replace(/ +/g, "").split("")
  document.getElementById('result').innerHTML = word.sort().join("")
})


document.getElementById('first_up').addEventListener('click', function(){
  var word = document.getElementById('get_input').value.split(" ")
  var word1 = []
  for (var i = 0; i < word.length; i++){
     word1.push(word[i].charAt(0).toUpperCase() + word[i].slice(1))
  }
  document.getElementById('result').innerHTML = word1.join(" ")
})




document.getElementById('long_string').addEventListener('click', function(){
  var input = document.getElementById('get_input').value.split(" ")
  var longest = []
  for (var i = 0; i < input.length; i++){
    if (input[i].length > longest.length){
      longest = input[i]
    }
  }
  document.getElementById('result').innerHTML = longest
})



document.getElementById('vowel_count').addEventListener('click', function(){
  var input = document.getElementById('get_input').value
  var total = input.match(/[aeiou]/gi)
  if (total !== null ){
    document.getElementById('result').innerHTML = "There are " + total.length + " vowels."
  } else {
    document.getElementById('result').innerHTML = "There is no vowels."
  }
})



document.getElementById('prime_check').addEventListener('click', function(){
  var input = parseInt(document.getElementById('get_input').value)
  var checks = [2,3,4,5,6,7,8,9,10,11,12]
  var n
  for (var i = 0; i < checks.length; i++){
    if (input !== checks[i]){
      if (input % checks[i] === 0){
        n = 0
        break
      }
    }else {
       n = 1
    }
  }

  if(n === 0){
    document.getElementById('result').innerHTML = "Not a Prime"
  } else {
    document.getElementById('result').innerHTML = "Prime"
  }
})
