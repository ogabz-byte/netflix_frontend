import React from "react";
import Main from "../Component/Main";
import Row from "../Component/Row";
import requests from "../Request";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="POPULAR" fetchURL={requests.requestPopular} />
      <Row rowID="2" title="TRENDING" fetchURL={requests.requestTrending} />
      <Row rowID="3" title="TOP RATED" fetchURL={requests.requestTopRated} />
      <Row
        rowID="4"
        title="NOW PLAYING"
        fetchURL={requests.requestNowplaying}
      />
      <Row rowID="5" title="UP COMING" fetchURL={requests.requestUpcoming} />
      <Row rowID="6" title="HORROR" fetchURL={requests.requesHorror} />
    </>
  );
};

export default Home;
