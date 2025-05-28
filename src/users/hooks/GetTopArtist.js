export const GetTopArtist = async (tokenData) => {
    const Response = await fetch("https://api.spotify.com/v1/me/following?type=artist", {
        method: "GET",
        headers: { Authorization: `Bearer ${tokenData}` },
    });

    const data = await Response.json();

    if (data.artists && data.artists.items.length > 0) {
        const artistDetails = data.artists.items.map((item) => ({
            id: item.id,
            name: item.name,
            image: item.images[0].url,
        }));

        localStorage.setItem("artistDetails", JSON.stringify(artistDetails));
    } else {
        console.error("No artist found");
        return [];
    }
}