"use strict";
// get all playlists
function init() {
    var dataService = new playlistService();
    dataService.getPlaylists(displayAlbums);
}

//render playlists
function displayAlbums(playlists) {
    $('#mainContainer').html('');
    for (var playlist of playlists) {
        var pId = playlist.id;
        var pName = playlist.name;
        var pImage = playlist.image;
        $('#mainContainer').append(`
        <div class="discWrapper">
            <div class="albumTitle">`+ pName + `</div>
            <div class="album" id="`+ pId + `">
                <div class="center">
               <i class=' fa fa-pencil controls editButton' data-toggle="modal" data-target="#playlistModal"></i>
               <i class=' fa fa-trash controls deleteButton' data-toggle="modal" data-target="#modalDelete"></i>
               <i class=' fa fa-play controls playButton'></i>
                </div>
              </div>
        </div>`);
        $('#' + pId).css({
            'background': 'url(' + pImage + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center'
        });
    }
    //click on play button
    $('.center > .fa-play').on('click', function (event) {
        var playlistID = $(event.currentTarget).closest('.album').attr('id');
        for (var playlist of playlists) {
            if (playlist.id == playlistID) {
                createPlayer(playlist);
            }
        }
    });
    //click on delete button
    $('.deleteButton').on('click', function () {
        var playlistID = $(event.currentTarget).closest('.album').attr('id');
        deleteModal(playlistID);
    })

    //click on edit button
    $('.editButton').on('click', function () {
        $('#addModalTitle').text('Edit playlist');
        showTab(0);
        var playlistID = $(event.currentTarget).closest('.album').attr('id');
        returnVal(playlistID);
    })

    //Title rounded
    $('.albumTitle').arctext({ radius: 120 });
};
// //search playlist by name
function searchPlaylist(data) {
    var input = $('#searchSongs').val();
    var result = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].name == input) {
            result.push(data[i]);
        }
    };
    displayAlbums(result);
}
//make the form empty on reload
function clearForm() {
    $('#playlistModal form :input').val("");
    $('#playlistModal form :input').removeClass('invalid');
    $('#previewImage').css('background', '');
}