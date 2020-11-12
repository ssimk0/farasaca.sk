import UploadForm from "../../components/Upload/UploadForm";
import React from "react";
import i18n from "../../utils/i18n";
import {NOTICE_TYPE} from "../../api/gallery";
import {useHistory} from "react-router-dom";

function Upload({uploadService}) {
  const history = useHistory();

  function handleSubmit({file}) {
    uploadService.upload([file], NOTICE_TYPE).then(() => {
      history.push("/oznamy")
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
