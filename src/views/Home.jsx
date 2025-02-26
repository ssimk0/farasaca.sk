import React, { useEffect } from 'react';
import { SET_PAGE_TITLE, useAppContext } from '../context/app';
import { toast } from 'react-toastify';
import i18n from "../utils/i18n";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CreateButton from "../components/Create/CreateButton";
import ArticlesHome from "../components/Articles/ArticlesHome";
import { Link, useLocation } from "react-router-dom";
import { NOTICE_TYPE } from "../api/upload";

function Home({ articleService }) {
  const { dispatch, state } = useAppContext();
  const query = new URLSearchParams(useLocation().search);
  const err = query.get("error");

  useEffect(() => {
    dispatch({ type: SET_PAGE_TITLE, value: i18n.t("pages.home.menuName") });
    if (["sessionExpired"].indexOf(err) > -1) {
      toast.error(i18n.t(`errors.${err}`))
    }
  }, [dispatch, err]);

  return (
    <div className="home">
      <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showThumbs={false} showStatus={false}
        interval={5000} className="carousel">
        <div>
          <img src="/photos/1-min.jpg" alt="img-1" />
        </div>
        <div>
          <img src="/photos/2-min.jpg" alt="img-2" />
        </div>
        <div>
          <img src="/photos/3-min.jpg" alt="img-3" />
        </div>
        <div>
          <img src="/photos/4-min.jpg" alt="img-4" />
        </div>
        <div>
          <img src="/photos/5-min.jpg" alt="img-5" />
        </div>
      </Carousel>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="oznamy text-center">
          <Link className="text-4xl font-bold" to={`/oznamy/${NOTICE_TYPE}`}>Aktualne oznamy</Link>
        </div>
        <div className="most text-center">
          <Link className="text-4xl font-bold" to="/most">Aktualne čislo mostu</Link>
        </div>
      </div>
      <div className="py-4">
        <div className="container mx-auto px-2">
          <h3>Aktuality</h3>
          <hr className="py-4" />
          <div className="grid grid-cols-1 md:grid-cols-4">
            <div className="py-4">
              <a href="https://lc.kbs.sk">
                <img src="https://lc.kbs.sk/?img=2&colors=fff;3B82F6;#000;#000" alt="lit-calendar" className="mx-auto md:mx-0" />
              </a>
            </div>
            <div className="md:col-span-3">
              <ArticlesHome articleService={articleService} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="container mx-auto">

        </div>
      </div>
      <div className="py-4">
        <div className="container mx-auto px-2">
          <h4>Podpora</h4>
          <hr className="py-4" />
          <div>
            Ak nás chcete podporiť možete tak urobiť priamo na účet farnosti.
            <p className="pt-1">
              IBAN účtu farnosti je: <strong className="text-bold">SK95 0900 0000 0004 4944 5368</strong>,
            </p>
            <p className="pb-1">
              IBAN filialky Mala Ida je: <strong className="text-bold">SK05 0900 0000 0006 6030 9177.</strong>
            </p>
            PBZ za štedrosť.
          </div>
        </div>
      </div>
      <CreateButton user={state.user} />
    </div>
  );
}

export default Home;
