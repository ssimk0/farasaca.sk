import {SET_PAGE_TITLE, useAppContext} from "../../context/app";
import React, {useEffect} from "react";
import i18n from "../../utils/i18n";
import Detail from "../../components/Notice/Detail";
import {BASE_API_URL} from "../../api";
import {MASS_TYPE} from "../../api/upload";
import {Link} from "react-router-dom";


function Mass() {
  const {dispatch} = useAppContext();

  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t("pages.notice.massMenuName")});
  });

  return (
    <div className="p-4 container mx-auto">
      <span className="form-title inline-block">{i18n.t("pages.notice.actual")}</span>
      <Detail file={`${BASE_API_URL}/api/v1/uploads/menu/${MASS_TYPE}/latest`}/>

      <Link to="/oznamy/archive">
        <span>{i18n.t("notice.link.archive")}</span>
      </Link>
    </div>
  )
}

export default Mass
