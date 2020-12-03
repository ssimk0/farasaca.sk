import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import Error from "../../components/Error/Error";
import {BASE_API_URL} from "../../api";
import i18n from "../../utils/i18n";
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";
import Detail from "../../components/Notice/Detail";


function DetailNotice({uploadService}) {
  const [upload, setUpload] = useState(null);
  const [error, setError] = useState(null);
  const {state, dispatch} = useAppContext();
  const {type, id} = useParams();

  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t(`pages.notice.${type}detail`)});

    uploadService.getUpload({
      type: "menu",
      category: type,
      id,
    }).then((u) => {
      setUpload(u)
    }, (err) => {
      setError(err)
    })
  }, [dispatch, id, type, uploadService])


  return upload && (
    <div className="container py-4 mx-auto">
      <Error error={error}/>
      <Link to={`/oznamy/${type}/archive`} className="block">{i18n.t("notice.link.back")}</Link>
      {state.user && (state.user.can_edit || state.user.is_admin) ? (
        <div className="text-right">
          <Link to={`/oznamy/${type}/${id}/edit`} className="btn">{i18n.t("notice.link.edit")}</Link>
        </div>
      ) : null
      }
      <span className="form-title">{upload.description}</span>
      <div className="py-4">
        <Detail file={`${BASE_API_URL}/api/v1/uploads/menu/${type}/${upload.id}/download`}/>
      </div>

    </div>
  )
}


export default DetailNotice
