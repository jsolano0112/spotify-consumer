export const GetPlaylist = async (tokenData) => {
  const userResponse = await fetch("https://api.spotify.com/v1/me/playlists", {
    method: "GET",
    headers: { Authorization: `Bearer ${tokenData}` },
  });

  const userPlaylist = await userResponse.json();

  if (userPlaylist.items) {
    const playlistDetails = userPlaylist.items.map((item) => ({
      name: item.name,
      id: item.id,
    }));

    localStorage.setItem("nameplaylist", JSON.stringify(playlistDetails));
  } else {
    console.error("No playlists found");
    return [];
  }
};

