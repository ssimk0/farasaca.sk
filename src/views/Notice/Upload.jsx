import UploadForm from "../../components/Upload/UploadForm";
import React, {useEffect} from "react";
import i18n from "../../utils/i18n";
import {useHistory, useParams} from "react-router-dom";
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";

function Upload({uploadService}) {
  const history = useHistory();
  const {dispatch} = useAppContext();
  const {type} = useParams();

  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t("pages.notice.upload")});
  });

  function handleSubmit({file, description}) {
    uploadService.uploadOne(file[0], type, description).then(() => {
      history.push("/oznamy/" + type)
    })
  }

  return (
    <div className="container mx-auto py-4">
      <span className="form-title">{i18n.t("notice.link.upload")}</span>
      <UploadForm onSubmit={handleSubmit}/>
    </div>
  )
}


export default Upload
