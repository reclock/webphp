// function ver(){
//    var fname =  document.getElementById("name").value;
//     if(fname != "root"){
//         document.getElementById("name").value = "admin";
//     }
// }
$(document).ready(function () {
    $("#tijiao").click(function () {
        $.post("sub.php",
            { name: "zheng" },
            function (data, stutus) {
                $("#name").val(data);
            }
        );
    });
});
