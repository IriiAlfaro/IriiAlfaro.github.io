var portfolio = (function(){
    var worksItems;
    function ajaxRequest(){
        var MyGetRequest =new XMLHttpRequest();
        MyGetRequest.onreadystatechange = function(){
            if (MyGetRequest.readyState === 4 &&  MyGetRequest.status == 200){
                var jsonObj = JSON.parse(MyGetRequest.responseText);
                var itemList = "";
                for (var i = 0; i < jsonObj.Works.length; i++) { 
                    worksItems=jsonObj.Works;
                    itemList += "<li><h2 onclick='infoWorks();' id=" + worksItems[i].length + ">" + worksItems[i].name + "</h2><img src=" + worksItems[i].imgPath + "/></li>";
                };
                document.getElementById("list-works").innerHTML = itemList;
            }

            function infoWorks(worksItems) {
                // body...
                console.log("hola", worksItems);
            }
        infoWorks();
        }
        MyGetRequest.open("GET", "js/datos.json", true);
        MyGetRequest.send();
    };

    ajaxRequest();
})();

jQuery(document).ready(function ($) {
  
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });
});    
