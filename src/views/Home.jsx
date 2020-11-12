import React, {useEffect} from 'react';
import {SET_PAGE_TITLE, useAppContext} from '../context/app';
import i18n from "../utils/i18n";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import CreateButton from "../components/Create/CreateButton";

function Home() {
  const {dispatch} = useAppContext();

  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t("pages.home.menuName")});
  });

  return (
    <div className="home">
      <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false}
                interval={5000} className="carousel">
        <div>
          <img src="/photos/1-min.jpg" alt="img-1"/>
        </div>
        <div>
          <img src="/photos/2-min.jpg" alt="img-2"/>
        </div>
        <div>
          <img src="/photos/3-min.jpg" alt="img-3"/>
        </div>
        <div>
          <img src="/photos/4-min.jpg" alt="img-4"/>
        </div>
        <div>
          <img src="/photos/5-min.jpg" alt="img-5"/>
        </div>
      </Carousel>
      <div className="grid grid-cols-2">
        <div className="oznamy text-center">
          <a className="text-4xl font-bold" href="/oznamy">Aktualne oznamy</a>
        </div>
        <div className="most text-center">
          <a className="text-4xl font-bold" href="/most">Aktualne čislo mostu</a>
        </div>
      </div>
      <div className="py-4">
        <div className="container mx-auto">
          <h4>Online prenos</h4>
          <hr className="py-4"/>
          <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Tl8DmgdXx-U" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  title="Online Prenos" allowFullScreen className="mx-auto" />
        </div>
      </div>
      <CreateButton />
    </div>
  );
}

export default Home;
