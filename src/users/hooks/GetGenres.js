export const GetGenres = async (tokenData) => {
  const userResponse = await fetch("https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=4", {
    method: "GET",
    headers: { Authorization: `Bearer ${tokenData}` },
  });

  const userGenres= await userResponse.json();

  if (userGenres.items) {
    const listGenres = userGenres.items.map((item) => ({
        id: item.id,
        genres: item.genres[0],
    }));

    localStorage.setItem("listGenres", JSON.stringify(userGenres));

  } else {
    console.error("No genres found");
    return [];
  }
};