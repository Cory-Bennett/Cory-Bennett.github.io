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
        $('<div id="draggable">Panelist</div>').appendTo(
            '#panelistDiv');
    })
    $('#candidateSection').click(function() {
        $('#candidateDiv').append("<div>Candidate</div>").draggable();
    })
        $('#candidateSection').draggable();
    $('#candidateSection').mousedown(function() {
        var $text_box = $(this).find('p');
        $text_box.fadeOut('slow')
    });  
    // $(function() {
    //     $("#draggable").draggable();
    // });
})