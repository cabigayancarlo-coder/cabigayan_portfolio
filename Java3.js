
$(document).ready(function () {

    $("#btn1").click(function () {
        $("#head").text("Yohoo dito ang tingin!");
    });

    $("#btn1").dblclick(function () {
        $("#head").text("Welcome, Students!");
    });

    $("#btn2").click(function () {
        $(".info").hide();
        $("#message").text("Student profile is hidden.");
    });

    $("#btn3").click(function () {
        $(".info").show();
        $("#message").text("Student profile is now visible.");
    });

    $("#odd").click(function () {
        $("#table tr").css("background-color", "");
        $("#table tr:gt(0):odd").css("background-color", "lightyellow");
        $("#text").text("Odd-numbered rows are highlighted.");
    });

  
    $("#even").click(function () {
        $("#table tr").css("background-color", "");
        $("#table tr:gt(0):even").css("background-color", "lightblue");
        $("#text").text("Even-numbered rows are highlighted.");
    });

    $("#hide").click(function () {
        $("#table").hide(2500);
        $("#text").text("The student table is now hidden.");
    });

    
    $("#show").click(function () {
        $("#table").show(2500);
        $("#text").text("The student table is now visible.");
    });

    // COURSE DROPDOWN
    $("#courseSelect").change(function () {
        $("#studentCourse span").text($(this).val());
    });

});
