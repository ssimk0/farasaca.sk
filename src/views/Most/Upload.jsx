import UploadForm from "../../components/Upload/UploadForm";
import React, {useEffect} from "react";
import i18n from "../../utils/i18n";
import {MOST_TYPE} from "../../api/upload";
import {useHistory} from "react-router-dom";
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";

function UploadMost({uploadService}) {
  const history = useHistory();
  const {dispatch} = useAppContext();

  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t("pages.most.upload")});
  });

  function handleSubmit({file, description}) {
    if (file && file.length > 0) {
      uploadService.uploadOne(file[0], MOST_TYPE, description).then(() => {
        history.push("/most")
      })
    }
  }

  return (
    <div className="container mx-auto py-4">
      <span className="form-title">{i18n.t("most.link.upload")}</span>
      <UploadForm onSubmit={handleSubmit}/>
    </div>
  )
}


export default UploadMost
