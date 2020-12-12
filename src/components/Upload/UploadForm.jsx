import React, {useState} from "react";
import i18n from "../../utils/i18n";
import {useForm} from "react-hook-form";

function UploadForm({onSubmit, upload={}}) {
  const {handleSubmit, register, errors} = useForm();
  const [loading, setLoading] = useState(false);

  return (
    <form onSubmit={handleSubmit((e) => {
      setLoading(true)
      onSubmit(e).then(() => setLoading(false))
    })} className="pt-4">
      <div className="form-group">
        <label>{i18n.t("form.notice.Description")}</label>
        <div>
          <input type="text" name="description"
                 defaultValue={upload.description}
                 ref={register({
                   required: i18n.t("form.validationMessages.required", {field: i18n.t("form.notice.Description")}),
                 })}
          />
        </div>
        <span className="input-error">
            {errors.description && errors.description.message}
        </span>
      </div>
      {upload.file ? null : (<div className="form-group">
        <label>{i18n.t("form.notice.File")}</label>
        <div>
          <input type="file" name="file"
                 accept="application/pdf,.pdf"
                 ref={register({
                   required: i18n.t("form.validationMessages.required", {field: i18n.t("form.notice.File")}),
                 })}
          />
        </div>
        <span className="input-error">
            {errors.file && errors.file.message}
        </span>
      </div>)}
      <div>
        <button type="submit" className="btn" disabled={loading}>{i18n.t("form.notice.Submit")}</button>
      </div>
    </form>
  )
}

export default UploadForm
