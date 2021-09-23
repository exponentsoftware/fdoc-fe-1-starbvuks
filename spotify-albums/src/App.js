import { useState } from "react";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

import Albums from "./components/Albums";

function App() {
  const albums = [
    {
      id: 1,
      artist: "Kanye West & Kid Cudi",
      album_title: "Kids See Ghosts",
      album_cover: "/ksg.png",
    },
    {
      id: 2,
      artist: "Bjork",
      album_title: "Homogenic",
      album_cover:
        "https://upload.wikimedia.org/wikipedia/en/a/af/Bj%C3%B6rk_-_Homogenic.png",
    },
    {
      id: 3,
      artist: "FKA Twigs",
      album_title: "LP1",
      album_cover:
        "https://upload.wikimedia.org/wikipedia/en/7/77/FKA_twigs_-_LP1.png",
    },
    {
      id: 3,
      artist: "Neutral Milk Hotel",
      album_title: "In The Aeroplane Over The Sea",
      album_cover:
        "https://upload.wikimedia.org/wikipedia/en/8/83/In_the_aeroplane_over_the_sea_album_cover_copy.jpg",
    },
    {
      id: 3,
      artist: "Animal Collective",
      album_title: "Strawberry Jam",
      album_cover:
        "https://upload.wikimedia.org/wikipedia/en/3/39/Animal_Collective_-_Strawberry_Jam_cover.png",
    },
  ];

  return (
    <div className="App">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg"
        alt="spotify"
        style={{ width: "18vw", margin: "0 0 7vh 2vw" }}
      />
      <div>
        <Head>Albums</Head>
        <Albums albums={albums} />
      </div>
    </div>
  );
}

export default App;

const Head = styled.span`
  color: #fbfbfb;
  font-weight: 500; 
  font-size: 1.3rem;
  margin: 0 2vw;
`;
