//Add playlists
function addPlaylist() {
    var dataService = new playlistService();
    var songsArr = [];
    $('.song').each(function () {
        var a = $(this).serializeArray();
        var returnObj = {};
        for (var i = 0; i < a.length; i++) {
            returnObj[a[i]['name']] = a[i]['value'];
        }
        if (returnObj.name !== '' && returnObj.url !== '') songsArr.push(returnObj);
    });

    var playlist = {
        'name': $('#newName').val(),
        'image': $('#newImage').val(),
        'songs': songsArr
    }
  //cleanup modal close
    clearForm();    
    $('#playlistModal').toggle();
    $('.modal-backdrop').remove();

    dataService.addPlaylists(playlist, init);
    $('#musicPlayer').hide();
}