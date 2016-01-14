$(document).ready(function() {
    $('#candidateDiv').hide();
    $('#panelistDiv').hide();
    $("#panelist").click(function() {
        $('#panelistDiv').show();
        $('#panelistChild').show();
        $('#candidateDiv').hide();
        $('#candidateChild').hide();

    })
    $("#candidate").click(function() {
        $('#panelistDiv').hide();
        $('#panelistChild').hide();
        $('#candidateDiv').show();
        $('#candidateChild').show();
    })
    $('#panelistSection').click(function() {
        $('#panelistChild').append(
            "<div class='draggable' style='height:50px;width:100px;border:1px solid black;'>Panelist</div>"
        )
        $('.draggable').draggable();
        $( '.droppable').droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            // .html( "Dropped!" );
      }
    });
    })
    $('#candidateSection').click(function() {
        $('#candidateChild').append(
            "<div class='draggable' style='height:50px;width:100px;border:1px solid black;'>Candidate</div>"
        );
        $('.draggable').draggable();
        $('.droppable').droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            // .html( "Dropped!" );
      }
    });

    })
    // $('#candidateSection div').click(function(){
        // $(this).remove(); 
    // jsforce.browser.init({
        // console.log('jsforce init');
    //     clientId: '3MVG9KI2HHAq33RwjKIHlvM0rlEcHeN3BZ3hIRJURxgi6qvVu90OSDbjIUQK5KBnmPWMnegMLs0RjK8Z67ozr',
    //     redirectUri: 'http://cory-bennett.github.io/final'
    // });
    // jsforce.browser.on('connect', function(conn) {
    //     // console.log('jsforce connect')
    //     conn.query('SELECT Id, Name FROM CampaignMember ', function(err,
    //         res) {
    //         if (err) {
    //             return console.error(err);
    //         }
    //         console.log(res);
    //     });
    // });
})