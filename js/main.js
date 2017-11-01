$('#input-form').one('submit',function(){
    var inputq1 = encodeURIComponent($('#input-q1').val());
    var inputq2 = encodeURIComponent($('#input-q2').val());
    var q1ID = "entry.1724535799";
    var q2ID = "entry.1872902617";
    var baseURL = 'https://docs.google.com/forms/d/1Ziq8cRyH2YLh94OIJ_lK7y7xNiQN_Ft-GGGXCDa_cP8/formResponse?';
    var submitRef = '&submit=Submit';
    var submitURL = (baseURL + q1ID + "=" + inputq1 + "&" + q2ID + "=" + inputq2 + submitRef);
    console.log(submitURL);
    $(this)[0].action=submitURL;
    $('#input-feedback').text('Thank You!');
});
