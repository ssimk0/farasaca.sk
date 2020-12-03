import React, {useEffect, useState} from 'react';
import DetailView from "../../components/Most/DetailView";
import {Link, useParams} from "react-router-dom";
import {MOST_TYPE} from "../../api/upload";
import Error from "../../components/Error/Error";
import {BASE_API_URL} from "../../api";
import i18n from "../../utils/i18n";
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";


function DetailMost({uploadService}) {
  const [upload, setUpload] = useState(null);
  const [error, setError] = useState(null);
  const {id} = useParams();
  const {state, dispatch} = useAppContext();


  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t("pages.most.detail")});

    uploadService.getUpload({
      type: "menu",
      category: MOST_TYPE,
      id,
    }).then((u) => {
      setUpload(u)
    }, (err) => {
      setError(err)
    })
  }, [dispatch, id, uploadService])


  return upload && (
    <div className="container py-4 mx-auto">
      <Error error={error} />
      <Link to="/most/archive" className="block">{i18n.t("most.link.back")}</Link>
      {state.user && (state.user.can_edit || state.user.is_admin) ? (
        <div className="text-right">
          <Link to={`/most/${id}/edit`} className="btn">{i18n.t("notice.link.edit")}</Link>
        </div>
      ) : null
      }
      <span className="form-title">{upload.description}</span>
      <div className="py-4">
        <DetailView file={`${BASE_API_URL}/api/v1/uploads/menu/${MOST_TYPE}/${upload.id}/download`}/>
      </div>
    </div>
  )
}


export default DetailMost
