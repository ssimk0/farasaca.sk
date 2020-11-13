import React, {useEffect, useState} from "react";
import {NOTICE_TYPE} from "../../api/upload";
import Pagination from "../../components/Pagination/Pagination";
import {Link, useLocation} from "react-router-dom";
import Error from "../../components/Error/Error";
import i18n from "../../utils/i18n";
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";

function ArchiveNotice({uploadService}) {
  const [uploads, setUploads] = useState(null);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search);
  const page = query.get("page");
  const {dispatch} = useAppContext();


  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t("pages.notice.archive")});

    uploadService.getUploads({
      type: "menu",
      category: NOTICE_TYPE,
      page,
    }).then((u) => {
      setUploads(u)
    }, (err) => {
      setError(err)
    })
  }, [dispatch, page, uploadService])


  return uploads && (
    <div className="container mx-auto py-4">
      <Error error={error}/>
      <span className="form-title">{i18n.t("notice.archive")}</span>
      <div className="pt-4">
        <ul>
          {uploads.upload && uploads.upload.map((u) => (
            <li key={'most-' + u.id}>
              <Link to={`/oznamy/${u.id}`}>{u.description}</Link>
            </li>
          ))}
        </ul>
      </div>
      <Pagination page={uploads.page} total_pages={uploads.total_pages}/>
    </div>
  )
}

export default ArchiveNotice
