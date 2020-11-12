import React, {useState} from "react";
import i18n from "../../utils/i18n";
import {Link} from "react-router-dom";
import {useAppContext} from "../../context/app";


function CreateButton() {
  const [open, setOpen] = useState(false);
  const {state} = useAppContext();

  let dropDownClass = 'absolute dropdown mt-2 py-2 w-48 bg-white rounded-lg shadow-xl text-right'

  if (!open) {
    dropDownClass += ' hidden';
  }

  return (state.user.can_edit || state.user.is_admin) && (
    <button
      className="rounded-full h-16 w-16 flex items-center justify-center shadow-md fixed bg-white plus-icon cursor-pointer"
      onClick={() => setOpen(!open)}>
      <span className="text-2xl">
        +
      </span>
      <div className={dropDownClass}>
        <Link to="/announcement/create"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">{i18n.t("announcement.link.create")}</Link>
        <Link to="/oznamy/upload"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">{i18n.t("notice.link.upload")}</Link>
        <Link to="/most/upload"
              className="block px-4 py-2 text-gray-800 hover:bg-blue-500 hover:text-white">{i18n.t("most.link.upload")}</Link>
      </div>
    </button>
  )
}

export default CreateButton
