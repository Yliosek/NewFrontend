$("#calculateBtn").click(function() {
    const firstNumber = $("#firstNumberInput").val();
    const secondNumber = $("#secondNumberInput").val();
    const operation = $("#operatorSelect").val();

    $.ajax({
        url: "https://backendkalkulator3-d0c4fdefdbe2ahe6.polandcentral-01.azurewebsites.net/calculate", // 👈 pamiętaj endpoint
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify({
            a: firstNumber,
            b: secondNumber,
            operator: operation
        }),
        success: function (res) {
            $(".wendow").text(res.result);
        },
        error: function (err) {
            console.error(err);
            alert("Błąd backendu");
        }
    });
});
