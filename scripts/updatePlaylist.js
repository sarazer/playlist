"use strict";
//Inserting data into the form
function returnVal(id) {
    var dataService = new playlistService();
    dataService.getPlaylist(id, loadingInfo);
    dataService.getPlaylistSongs(id, loadingSongs);

    //Fill playlist name and image form
    function loadingInfo(data) {
        $('#newPlaylistId').val(id);
        $('#newName').val(data.name);
        $('#newImage').val(data.image);
        $('#previewImage').css({
            'background': 'url('+data.image+')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center'
        })
    }

    //Fill playlist songs form
    function loadingSongs(data) {
        $('#songsFrom').html("");
        for (var i = 0; i < data.songs.length; i++) {
            var rainbow= $('#addModalTitle').text('Edit playlist');
            rainbow.addClass(rainbow);
            $('#songsFrom').append(`
            <form class="song">
                <label>Song name: <input name="name" class="newSongName" value="`+ data.songs[i].name + `"></input></label>
                <label>Song url: <input name="url" class="newSongURL" value="`+ data.songs[i].url + `"></input></label><br>
            </form>`);
            $('#savePlaylistBtn').hide();
            $('#saveEdit').show();
        };
    };
}

//Save edited playlist
function saveEditedPlaylist(id) {
    var dataService = new playlistService();

    var songArray = [];
    $('.song').each(function(){
        var a = $(this).serializeArray();
        var returnObj = {};
        for (var i = 0; i < a.length; i++) {
            returnObj[a[i]['name']] = a[i]['value'];
        }
        if (returnObj.name !== '' && returnObj.url !== '') songArray.push(returnObj);
    });
            
    var info = {
        'name': $('#newName').val(),
        'image': $('#newImage').val(),
    }

    var songs = {
        'songs': songArray
    }

    var playlist = {
        'id': $('#newPlaylistId').val(),
        'name': $('#newName').val(),
        'image': $('#newImage').val(),
        'songs': songArray
    };

    dataService.updatePlaylist(id, info);
    dataService.updatePlaylistSongs(id, songs, init)
   
   createPlayer(playlist);
}