import React, {useEffect} from "react";
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";
import i18n from "../../utils/i18n";
import {BASE_API_URL} from "../../api";
import {Link, useParams} from "react-router-dom";
import Detail from '../../components/Notice/Detail';

function Notice() {
  const {state, dispatch} = useAppContext();
  const {type} = useParams();

  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t(`pages.notice.${type}MenuName`)});
  });

  return (
    <div className="p-4 container mx-auto">
      {state.user && (state.user.is_admin) ?
        (<div className="text-right block py-4">
          <Link className="btn" to={`/oznamy/upload/${type}`}>
            {i18n.t("pages.notice.upload")}
          </Link>
        </div>) : null
      }
      <span className="form-title inline-block">{i18n.t(`pages.notice.${type}Actual`)}</span>
      <Detail file={`${BASE_API_URL}/api/v1/uploads/menu/${type}/latest`}/>

      <Link to={`/oznamy/${type}/archive`}>
        <span>{i18n.t("notice.link.archive")}</span>
      </Link>
    </div>
  )
}

export default Notice
