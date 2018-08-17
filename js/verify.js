
$(document).ready(function () {
    $("#tijiao").click(function () {
        var nameval = $("#name").val();
        var fmale = $("input[name='sex']:checked").val();
        inputdata = { "name": nameval, "male": fmale };

        $.post("phpscript/sub.php",
            { dt: inputdata },
            function (data, status) {
                $("#name").val(data);
            }
        );
    });
    $("#getdate").click(function(){
        $.post(
            "phpscript/getdata.php",
            {dt:"123"},
            function(datt,status){
                $("#setdata").val(datt);
                $("#text").val(datt);
            }
        );
    });
});


