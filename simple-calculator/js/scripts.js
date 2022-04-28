let exp = ["*", "/", "+", "-", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "C", "="]

$.each(exp, function(i, e){
  if(e == "C"){
    $("#calculator").append("<span class='button clean'>"+e+"</span>")
  } else if(e == "="){
    $("#calculator").append("<span class='button equal'>"+e+"</span>")
  } else {
    $("#calculator").append("<span class='button'>"+e+"</span>")
  }
})

let val = ""
$("#result").text(val)

$(".button").each(function(i, e){
  $(this).click(function(){
    if($(this).text() == "C"){
      val = " ";
      $("#result").text(val);
    } else if($(this).text() == "="){
      val = eval(val);
      $("#result").text(val);
    } else {
      val += $(this).text();
      $("#result").text(val);
    }
  })
})