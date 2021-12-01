
$(document).ready(function() {
    var $results = [];
    let $a_m = 0;
    let $n_z = 0;
    var $tbody = $('table tbody');
    var rows = [];
    var $table = $('table');
    var $controls = $table.find('a');
    var rowsArray = [];
    var originalOrder = [];

    var characterValue = $.getJSON("shameless.json").done(function (data) {
        $.each(data.cast, function(index, value) {
            $tbody.append(`
            <tr>
                <td class='name'>${value.name}</td>
                <td>${value.dob}</td>
                <td>${value.height}</td>
                <td>${value.spouse}</td>
            </tr>
            `);
            rowsArray.push(`
            <tr>
                <td class='name'>${value.name}</td>
                <td>${value.dob}</td>
                <td>${value.height}</td>
                <td>${value.spouse}</td>
            </tr>
            `);
            originalOrder.push(`
            <tr>
                <td class='name'>${value.name}</td>
                <td>${value.dob}</td>
                <td>${value.height}</td>
                <td>${value.spouse}</td>
            </tr>
            `);
            if(value.name[0].toLowerCase().match(/[a-mA-M]/)){
                $a_m ++;
                
            } else{
                $n_z ++;
                console.log($n_z);
            }
            $("#a-m").text("A-M (").append($a_m).append(")");
            $("#n-z").text("N-Z (").append($n_z).append(")");
            

        $("#a-m").click(function(){
            
            $("tbody").find("tr").show();
            $("tbody tr").each(function() {
                let value = $(this).children().first().text();
                console.log(value);
                console.log(value[0]);
                if(!value[0].match(/[a-mA-M]/)) {
                    $(this).hide();
                }
            });
        });
        $("#n-z").click(function(){
            
            $("tbody").find("tr").show();
            $("tbody tr").each(function() {
                let value = $(this).children().first().text();
                console.log(value);
                console.log(value[0]);
                if(!value[0].match(/[n-zN-Z]/)) {
                    $(this).hide();
                }
            });
        });                     
        });
        console.log($results);
    });
    $("input").keyup(function(key){
    $("tbody").find("tr").show();
    $("tbody tr").each(function () {
        let value = $(this).children().first().text().toLowerCase();
           console.log(value);
           if(key.target.value === "") {
               $(this).css("background-color", "");
           }
           else if(value.includes(key.target.value.toLowerCase())) {
            $(this).css("background-color", "yellow");
        } else {
            $(this).css("background-color", "");
        }
    }); });

    var sortLists = function(){
        var compare ={
            date: function(a,b){
                a = new Date(a);
                b = new Date(b);
                return a-b;
            },
            name: function(a,b){
                if ( a < b ) {
                    return -1;
                }
                else{
                    return a > b ? 1:0;
                }

            }
        };
    

    $controls.on('click', function(e){
        e.preventDefault();
        $link = $(this);
        var order = $link.data('sort');
        var column;

        if ($link.hasClass('ascending')) {
            $link.toggleClass('ascending up');
            $link.addClass('descending');
            $link.addClass('down');
            $tbody.append("<b>Appended text</b>");
            $tbody.append(rowsArray.reverse());
        }
        else if ($link.hasClass('descending')){
            $link.toggleClass('descending down');
            $tbody.append(originalOrder);
        }
        else{
            $link.addClass('ascending');
            $link.addClass('up');
            $link.parent().siblings().children('a').removeClass('descending ascending');

            if(compare.hasOwnProperty(order)){
                column = $controls.index(this);

                rowsArray.sort(function(a, b){
                    a = $(a).find('td').eq(column).text();
                    b = $(b).find('td').eq(column).text();
                    return compare[order](a, b);
                });
                $tbody.append("<b>Appended text</b>");
               $tbody.append(rowsArray);
            }
        }
    });
}();

});