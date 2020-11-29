import React, {useState} from "react";
import {useForm} from "react-hook-form";
import i18n from "../../utils/i18n";
import {useHistory} from 'react-router-dom';

import "react-datepicker/dist/react-datepicker.css";
import Error from "../../components/Error/Error";
import {SET_ANNOUNCEMENT, useAppContext} from "../../context/app";
const DatePicker = React.lazy(() => import('react-datepicker'));

function CreateAnnouncement({announcementService}) {
  const today = new Date();
  const tomorrow = today.setDate(today.getDate() + 1)
  const {handleSubmit, register, errors} = useForm();
  const [expireAt, setExpireAt] = useState(tomorrow);
  const [error, setError] = useState(null);
  const {dispatch} = useAppContext();
  const history = useHistory();

  const onSubmit = ({message}) => {
      announcementService.create({
        message,
        expireAt
      }).then(() => {
        dispatch({type: SET_ANNOUNCEMENT, value: null})
        history.push("/")
      }, () => {
        setError(i18n.t("errors.unknown"))
      })
  }

  return (
    <div className="container mx-auto py-4">
      <span className="form-title">{i18n.t("announcement.link.create")}</span>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-4">
        <Error error={error}/>
        <div className="form-group">
          <label>
            {i18n.t("form.announcement.Message")}
          </label>
          <input
            type="text"
            name="message"
            ref={register({
              required: i18n.t("form.validationMessages.required", {field: i18n.t("form.announcement.Message")}),
            })}
            />
          <span className="input-error">
            {errors.email && errors.email.message}
          </span>
        </div>
        <div className="form-group">
          <label>
            {i18n.t("form.announcement.ExpireAt")}
          </label>
          <DatePicker
            onChange={setExpireAt}
            selected={expireAt}
            minDate={tomorrow}
          />
          <span className="input-error">
            {errors.email && errors.email.message}
          </span>
        </div>
        <button type="submit" className="btn">{i18n.t("form.announcement.Submit")}</button>
      </form>
    </div>
  )
}


export default CreateAnnouncement
