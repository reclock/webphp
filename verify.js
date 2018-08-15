
$(document).ready(function () {
    $("#tijiao").click(function () {
        var nameval= $("#name").val();
        var fmale = $("input[name='sex']:checked").val();
        inputdata ={"name":nameval,"male":fmale};

        $.post("sub.php",
            {dt: inputdata},
            function (data, stutus) {
                $("#name").val(data);
            }
        ); 
    });

});

