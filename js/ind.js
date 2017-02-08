/**
 * Created by user on 06.02.17.
 */

var test;
test=10;
test=test+10;
var test2=2;
test2=test*test;
test=test-test2;
console.log('asdf');
console.log(test);
test=test*4;
console.log(test);
test=test/10;
console.log(test);
if (test<1000){
    console.log('variable is equal 1000');
}
else{
    console.log(test);
    console.log('variable is less than 1000');
}
function power(test){
    var test2=test*test;
    return test2;

}
$(document).ready(function(){

   // $('.header').hide(2000);
   // $('.header').show(3000);
    //$('.header').slideDown(3000)
   // $('.header').slideUp(3000);

$('.gallery a').colorbox({maxWidth: '90%', height:'90%'});


});
$(window).load(function() {
    $('.flexslider').flexslider({
        animation: "slide"
    });
});