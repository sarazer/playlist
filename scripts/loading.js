$(document).ready(function() {
    
    //Add more songs form
    $('#addMoreSongBtn').on('click', function() {
        $('#songsFrom').append(
            `<form class="song">
                <label>Song name: <input name="name" class="newSongName" placeholder="Song name"></label>
                <label>Song url: <input name="url" class="newSongURL" placeholder="Song url end in .mp3"></label><br>
            </form>`
            );    
    });

    //Save new playlist
    $('#savePlaylistBtn').on('click', function() {
        if (validateSongs()) {
            $('#error').html('');
            addPlaylist();
        } else {
            $('#error').html('Songs url must be end mp3!');
        }
    });

    //Save edited playlist
    $('#saveEdit').on('click', function() {
        var id = $('#newPlaylistId').val();
        if (validateSongs()) {
            $('#error').html('');
            saveEditedPlaylist(id);
        } else {
            $('#error').html('Songs url must be end mp3!');
        }
    });

    //When make add the Edit button is replaced
    $('#addBtnMain').on('click', function() {
       var rainbow = $('#addModalTitle').text('Add playlist');
        rainbow.addClass(rainbow);
        clearForm();
        showTab(0);
        $('#saveEdit').hide();
        $('#savePlaylistBtn').show();
    });

    //Preview playlist image on load
    $('#newImage').on('mousemove', function() {
        $('#previewImage').css({
            'background': 'url('+$('#newImage').val()+')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center'
        })
    }
    )


    //Show all playlists
    $('#showPlaylistBtn').on('click', function() {
        init();
         $('#showPlaylistBtn').hide();
         $('#searchSongs').val('');
    });
});