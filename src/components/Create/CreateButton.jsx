import React, {useState} from "react";
import i18n from "../../utils/i18n";
import {Link} from "react-router-dom";
import {MASS_TYPE, NOTICE_TYPE, READINGS_TYPE} from "../../api/upload";


function CreateButton({user}) {
  const [open, setOpen] = useState(false);

  let dropDownClass = 'absolute dropdown mt-2 py-2 w-48 bg-white rounded-lg shadow-xl text-right'

  if (!open) {
    dropDownClass += ' hidden';
  }

  return user && (user.can_edit || user.is_admin) ? (
    <button
      className="rounded-full h-16 w-16 flex items-center justify-center shadow-md fixed bg-white plus-icon cursor-pointer"
      onClick={() => setOpen(!open)}>
      <span className="text-2xl">
        +
      </span>
      <div className={dropDownClass}>
        <Link to="/announcement/create"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">{i18n.t("announcement.link.create")}</Link>
        <Link to="/articles/create"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">{i18n.t("articles.link.create")}</Link>
        <Link to={`/oznamy/upload/${NOTICE_TYPE}`}
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">{i18n.t("notice.link.upload")}</Link>
        <Link to={`/oznamy/upload/${MASS_TYPE}`}
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">{i18n.t("notice.link.uploadMass")}</Link>
        <Link to={`/oznamy/upload/${READINGS_TYPE}`}
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">{i18n.t("notice.link.uploadReadings")}</Link>
        <Link to="/most/upload"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">{i18n.t("most.link.upload")}</Link>
      </div>
    </button>
  ) : <div />
}

export default CreateButton
