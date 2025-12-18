let firstNumber = "";
let secondNumber = "";
let operator = "";
let enteringSecond = false;

$(".num").click(function() {
    if (!enteringSecond) {
        firstNumber += $(this).text();
        $(".wendow").text(firstNumber);
    } else {
        secondNumber += $(this).text();
        $(".wendow").text(secondNumber);
    }
});

$(".op").click(function() {
    operator = $(this).text();
    enteringSecond = true;
    $(".wendow").text("");
});

$(".clear").click(function() {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    enteringSecond = false;
    $(".wendow").text("");
});

$(".result").click(function() {
    $.ajax({
        url: "https://backendkalkulator3-d0c4fdefdbe2ahe6.polandcentral-01.azurewebsites.net",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            a: firstNumber,
            b: secondNumber,
            operator: operator
        }),
        success: function(res) {
            $(".wendow").text(res.result);
            firstNumber = res.result; // wynik staje się nowym pierwszym numerem
            secondNumber = "";
            operator = "";
            enteringSecond = false;
        },
        error: function(err) {
            console.error(err);
            alert("Błąd backendu");
        }
    });
});
