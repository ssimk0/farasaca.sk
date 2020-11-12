import React from "react";
import i18n from "../../utils/i18n";

function UploadForm({onSubmit}) {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();

      onSubmit({
        file: new FormData(e.target).get("file"),
      })
    }} className="pt-4">
      <div className="form-group">
        <label>{i18n.t("form.notice.File")}</label>
        <div>
          <input type="file" name="file"/>
        </div>
      </div>
      <div>
        <button type="submit" className="btn">{i18n.t("form.notice.Submit")}</button>
      </div>
    </form>
  )
}

export default UploadForm
