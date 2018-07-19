"use strict";
//delete playlists
function deleteModal(id){  
    $("#yesButton").on("click", function(){
        deleteAlbums(id);
    });
};

//delete playlist
function deleteAlbums(id) {
    var dataService = new playlistService();
    dataService.deletePlaylist(id, init);
    $('#musicPlayer').hide(); 
    $(document).prop('title', 'Music Player');
}
