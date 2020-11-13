import React from "react";
import i18n from "../../utils/i18n";
import {useForm} from "react-hook-form";

function UploadForm({onSubmit}) {
  const {handleSubmit, register, errors} = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
      <div className="form-group">
        <label>{i18n.t("form.notice.Description")}</label>
        <div>
          <input type="text" name="description"
                 ref={register({
                   required: i18n.t("form.validationMessages.required", {field: i18n.t("form.notice.Description")}),
                 })}
          />
        </div>
        <span className="input-error">
            {errors.description && errors.description.message}
        </span>
      </div>
      <div className="form-group">
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
      </div>
      <div>
        <button type="submit" className="btn">{i18n.t("form.notice.Submit")}</button>
      </div>
    </form>
  )
}

export default UploadForm
