$(document).ready(function () {

    $.ajaxSetup({ cache: false });
    $('#searchSongs').keyup(function () {
        var dataService = new playlistService();
        if ($('#searchSongs').val().length > 1) {
            $('#mainContainer').html('');
            dataService.getPlaylists(searchPlaylist);
            $('#showPlaylistBtn').show();
        }
        if ($('#searchSongs').val() == '') {
            dataService.getPlaylists(displayAlbums);
        }
    })
    function searchPlaylist(data) {
        var input = $('#searchSongs').val();
        var resultArr = [];
    
        for (var i = 0; i < data.length; i++) {
            if (data[i].name == input) {
                resultArr.push(data[i]);
            }
        };
        displayAlbums(resultArr);
    }

    function searchPlaylist(playlists) {
        var search = $('#searchSongs').val();
        var rExpression = new RegExp(search, "i");

        $.each(playlists, function (key, value) {
            if (value.name.search(rExpression) != -1) {
                $('#mainContainer').append(`
                  <div class="discWrapper">
                      <div class="albumTitle">`+ value.name + `</div>
                      <div class="album" id="`+ value.id + `">
                          <div class="center"><i class="fa fa-play controls"></i></div>
                      </div>
                  </div>`);
                $('#' + value.id).css({
                    'background': 'url(' + value.image + ')',
                    'background-size': 'cover',
                    'background-repeat': 'no-repeat',
                    'background-position': 'center center'
                });
                //click on play button
                $('.center > .fa-play').on('click', function (event) {
                    var playlistID = $(event.currentTarget).closest('.album').attr('id');
                    createPlayer(playlists[playlistID - 1]);
                });

                //Title rounded
                $('.albumTitle').arctext({ radius: 120 });
            }
        });
    }

});
