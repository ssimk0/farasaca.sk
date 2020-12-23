import React, {useEffect} from 'react';
import DetailView from "../../components/Most/DetailView";
import {BASE_API_URL} from "../../api";
import {MOST_TYPE} from "../../api/upload";
import {Link} from "react-router-dom";
import i18n from "../../utils/i18n";
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";

function Most() {
  const {state, dispatch} = useAppContext();

  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t("pages.most.menuName")});
  });

  return (
    <div className="container mx-auto py-4">
      {state.user && (state.user.is_admin) ?
        (<div className="text-right block py-4">
          <Link className="btn" to={`/most/upload`}>
            {i18n.t("pages.notice.upload")}
          </Link>
        </div>) : null
      }
      <span className="form-title">{i18n.t("most.actual")}</span>
      <DetailView file={`${BASE_API_URL}/api/v1/uploads/menu/${MOST_TYPE}/latest`}/>
      <Link to="/most/archive">
        <span>{i18n.t("most.link.archive")}</span>
      </Link>
    </div>
  )
}

export default Most
