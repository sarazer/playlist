

//create musicPlayer
function createPlayer(playlist) {
    var id = playlist.id;
    var dataService = new playlistService();
    dataService.getPlaylistSongs(id, displaySongsPlayer);


    function displaySongsPlayer(data) {
        var sources = data.songs;
        //create player
        $('#musicPlayer').html(`
    <div id="albumImage" class="album">
        <div class="playCenter">
        <i class="fa fa-pause"></i></div>
    </div>
    <div class="currentPlayer">
        <div><audio id="audio" controls><source src="`+sources[0]['url'] + `" type="audio/mpeg"></audio></div>
        <div id="playingNow"class="rainbow"></div>
        <div id="currentPlaylist"></div>
    </div>
    <div id="playingControls">
   <div><i class="fa fa-times" id="BtnClose"></i></div>
   <div><i class=" fa fa-pencil" data-toggle="modal" data-target="#playlistModal" id="editPlaylistBtn"></i></div>
   <div><i class=" fa fa-trash" id="deleteBtn" data-toggle="modal" data-target="#modalDelete"></i></div>
    </div>
    `);

        $('#albumImage').css({
            'background': 'url(' + playlist.image + ')',
            'background-size': 'cover',
            'background-repeat': 'no-repeat',
            'background-position': 'center center'
        })

        $('#musicPlayer').addClass('container');
        
        //make buttons functional
        $('#editPlaylistBtn').on('click', function () {
            showTab(0);
            returnVal(id);
        });

        $('#deleteBtn').on('click', function () {
            deleteModal(id)
        });

        $('#BtnClose').on('click', function () {
            $('#musicPlayer').hide();
        });

    //form playlist section
    $.each(sources, function(){
        $('#currentPlaylist').append('<p><i class="iconPlay"></i> <span class="playingIcon">'+this.name+'</span></p>');
    });

        //show finished musicPlayer
        $('#musicPlayer').slideDown('1000').css({ 'display': 'flex' });

        play(sources);
    }
};

//Play songs auto
function play(list) {
    audio.play();
    $('#albumImage').addClass('nowPlayingImage');
    $('.playingIcon').first().addClass('nowPlayingIcon');
    $('.playingIcon').first().prev('.iconPlay').addClass('  fa fa-play');

    //Preparing to change the playback
    var playlistArr = Object.values(list);
    var playlistIndex = 0;

    $(document).prop('title', playlistArr[playlistIndex]['name']);
   var rainbow= $('#playingNow').html('Now playing: ' + playlistArr[0]['name']);
    rainbow.addClass(rainbow);
    //change to button
    $('#albumImage').on('click', function() {

        if (audio.paused) {
            audio.play();
            $('#albumImage').addClass('nowPlayingImage');
            $('.playCenter').html('<i class="fa fa-pause">');
        }
        else {
            audio.pause();
            $('#albumImage').removeClass('nowPlayingImage');
             $('.playCenter').html('<i class="  fa fa-play">');
        }
    });

    //To make the playlist that you can browse into her
    $('.playingIcon').on('click', function(){
     $('.playingIcon').removeClass('nowPlayingIcon');
        $('.iconPlay').removeClass('  fa fa-play');

        $(event.currentTarget).addClass('nowPlayingIcon');
        $(event.currentTarget).prev('.iconPlay').addClass('  fa fa-play');

        var playNow = '';
        var titleNow = '';
        for (var song of playlistArr) {
            if (song.name == $(this).text()) {
                playNow = song.url;
                titleNow = song.name;
            }
        }
        $('#albumImage').addClass('nowPlayingImage');
        $('.playCenter').html('<i class="fa fa-pause">');
        $('#playingNow').html('Now playing: ' + titleNow)
        audio.setAttribute("src", playNow);
        $(document).prop('title', titleNow);
        audio.play();
    });

    //Auto play next song
    audio.onended = function(){
        if (playlistIndex < playlistArr.length - 1) {
            playlistIndex++;
        } else playlistIndex = 0;
        $('.iconPlay').removeClass('fa fa-play');
        $('#playingNow').html('Now playing: ' + playlistArr[playlistIndex]['name'])
        audio.setAttribute("src", playlistArr[playlistIndex]['url']);
        $(document).prop('title', playlistArr[playlistIndex]['name']);
        $(event.currentTarget).prev('.iconPlay').addClass('fa fa-play');
        audio.play();
    }
    
    //To ensure that the image is appropriate to the rotational playlist
    audio.onplay = function () {
        $('#albumImage').addClass('nowPlayingImage');
         $('.playCenter').html('<i class="fa fa-pause">');
    }

    audio.onpause = function () {
        $('#albumImage').removeClass('nowPlayingImage');
         $('.playCenter').html('<i class="fa fa-play">');
    }
}