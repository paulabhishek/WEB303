$(document).ready(function(){
  var form = $("#form");
  var username = $("#username");
  var password = $("#password");
  var passconfm = $("#passconfm");
  var term = $("#term");
  var country = $("#country");
  var submit = $("#submit");
  var txt = $("#txt");
  submit.addClass('disabled');
  submit.attr('disabled',true);

  $.each(countries,function(key,value){
  country.append(`<option value="${value.code}"> ${value.name} </option>`);
  });

  form.change(function(){
    txt.hide();
    if(username.val()){
    console.log(username.val()!=null);               
      if(password.val().length>9){
        console.log(password.val().length>9);  
        if(password.val()===passconfm.val()){
          console.log("======"); 
          console.log(password.val()===passconfm.val()); 
          if(term.is(":checked")){
            console.log(term.is(":checked"));
            if(country.val()!="select")
            {
              console.log(country.val()!="select");
            }
          }
        }
      }
      submit.removeAttr('disabled');
      submit.attr('disabled',false);
    }    
    else{
      submit.attr('disabled',true); 
    }
  });

  form.submit(function(e){
    e.preventDefault();
    txt.show();
    txt.text(`Welcome ${username.val()} ! The country code you selected is ${country.val()}`);
    submit.attr('disabled',true);     
  });
});