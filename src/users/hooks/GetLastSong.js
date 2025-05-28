export const GetLastSong = async (tokenData) => {
  const userResponse = await fetch("https://api.spotify.com/v1/me/player/recently-played?limit=5", {
    method: "GET",
    headers: { Authorization: `Bearer ${tokenData}` },
  });

  const playerRecently = await userResponse.json();

  console.log("playerRecently",playerRecently);
  

  if (playerRecently.items) {
    const playerRecentlyDetails = playerRecently.items.map((item) => ({
      name: item.track.name,
      id: item.track.id,
      artist: item.track.artists[0].name,
      albumImage: item.track.album.images[0].url,
      albumName: item.track.album.name
    }));

    console.log("playerRecentlyDetails",playerRecentlyDetails);
    

    localStorage.setItem("playerRecently", JSON.stringify(playerRecentlyDetails));
  } else {
    console.error("No playlists found");
    return [];
  }
};
