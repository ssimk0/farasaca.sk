import React, {useEffect} from "react";
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";
import i18n from "../../utils/i18n";
import {BASE_API_URL} from "../../api";
import {Link, useParams} from "react-router-dom";
import Detail from '../../components/Notice/Detail';

function Notice() {
  const {dispatch} = useAppContext();
  const {type} = useParams();

  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t("pages.notice.menuName")});
  });

  return (
    <div className="p-4 container mx-auto">
      <span className="form-title inline-block">{i18n.t("pages.notice.actual")}</span>
      <Detail file={`${BASE_API_URL}/api/v1/uploads/menu/${type}/latest`}/>

      <Link to={`/oznamy/${type}/archive`}>
        <span>{i18n.t("notice.link.archive")}</span>
      </Link>
    </div>
  )
}

export default Notice