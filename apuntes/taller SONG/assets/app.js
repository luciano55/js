const d = document,
  $form = d.getElementById("song-search");
($loader = d.querySelector(".loader")),
  ($error = d.querySelector(".error")),
  ($main = d.querySelector("main")),
  ($artist = d.querySelector(".artist")),
  ($song = d.querySelector(".song")),
  ($loader = d.querySelector(".loader"));

$form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    $loader.style.display = "block";

    let artist = e.target.artist.value.toLowerCase(), //d.getElementById("artista").value.toLowerCase(),
      song = e.target.song.value.toLowerCase(), // d.getElementById("song").value.toLowerCase(),
      $artistTemplate = "",
      $songTemplate = "",
      artistAPI = ` https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`,
      songAPI = `https://api.lyrics.ovh/v1/${artist}/${song}`,
      artistFetch = fetch(artistAPI),
      songFetch = fetch(songAPI),
      [artistRes, songRes] = await Promise.all([artistFetch, songFetch]),
      artisData = await artistRes.json(),
      songData = await songRes.json();
    //  console.log(artistRes, songRes);
    console.log(artisData, songData);
    if (artisData.artist === null) {
      $artistTemplate = `<h2> No existe el intérprete <mark>${artist}</mark></h2>`;
    } else {
      let artist = artisData.artists[0];
      $artistTemplate = `<h2>${artist.strArtist}</h2>
      <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
      <p>${artist.intBornYear}- ${artist.intDiedYear || "Presente"} </p>
      <p>${artist.strCountry}</p>
      <p>${artist.strGene}- ${artist.strStyle}
      <a href="http://${artist.strWebsite}" target="_blank">Sitio web</a>
      <p>${artist.strBiographyEN}</p>`;
    }
    if (songData.error) {
      $songTemplate = `<h2> No existe la canción <mark>${song}</mark></h2>`;
    } else {
      $songTemplate = `<h2>${song.toUpperCase()}</h2>
      <blockquote>${songData.lyrics}</blockquote>`;
    }
    $loader.style.display = "none";
    $artist.innerHTML = $artistTemplate;
    $song.innerHTML = $songTemplate;
  } catch (err) {
    console.log(err);
    $loader.style.display = "none";
    let message = err.statusText || "Ocurrió un error";
    $error.innerHTML = `<p>Error ${err.status}: ${message}<p>`;
  }
});
