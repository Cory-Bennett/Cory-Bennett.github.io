$(document).ready(function() {
    $('#candidateDiv').hide();
    $('#panelistDiv').hide();
    $("#panelist").click(function() {
        $('#panelistDiv').show();
        $('#candidateDiv').hide();
    })
    $("#candidate").click(function() {
        $('#panelistDiv').hide();
        $('#candidateDiv').show();
    })
    $('#panelistSection').click(function() {
        $('#panelistDiv').append("<div class='draggable' style=height:50px;width:100px;border:1px solid black;>Panelist</div>")
        $('.draggable').draggable();
    })
    $('#candidateSection').click(function() {
        $('#candidateDiv').append("<div class='draggable' style='height:50px;width:100px;border:1px solid black;'>Candidate</div>");
        $('.draggable').draggable();
    })
        // $('.draggable').draggable();
    /*$('.draggable').mousedown(function() {
        var $text_box = $(this).find('p');
        $text_box.fadeOut('slow')
    });*/  
    // $(function() {
    //     $("#draggable").draggable();
    // });