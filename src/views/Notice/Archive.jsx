import React, {useEffect, useState} from "react";
import Pagination from "../../components/Pagination/Pagination";
import {Link, useLocation, useParams} from "react-router-dom";
import Error from "../../components/Error/Error";
import i18n from "../../utils/i18n";
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";

function ArchiveNotice({uploadService}) {
  const [uploads, setUploads] = useState(null);
  const [error, setError] = useState(null);
  const query = new URLSearchParams(useLocation().search);
  const page = query.get("page");
  const {dispatch} = useAppContext();
  const {type} = useParams();


  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t("pages.notice.archive")});

    uploadService.getUploads({
      type: "menu",
      category: type,
      page,
    }).then((u) => {
      setUploads(u)
    }, (err) => {
      setError(err)
    })
  }, [dispatch, page, type, uploadService])

  const calculateWeeksFromNow = (createdAt) => {
    const createdDate = new Date(createdAt);
    const now = new Date();
    const diffInMilliseconds = now.getTime() - createdDate.getTime();
    const diffInWeeks = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24 * 7)); // Convert milliseconds to weeks
    return diffInWeeks;
  };

  console.log(uploads)
  return uploads && (
    <div className="container mx-auto py-4">
      <Error error={error}/>
      <span className="form-title">{i18n.t(`notice.${type}.archive`)}</span>
      <div className="pt-4">
        <ul>
          {uploads.data && uploads.data.map((u) => (
            <li key={'most-' + u.id}>
              <Link to={`/oznamy/${type}/${u.id}`}>{u.description} (pred {calculateWeeksFromNow(u.created_at)} týždňami)</Link>
            </li>
          ))}
        </ul>
      </div>
      <Pagination page={uploads.page} total_pages={uploads.total_pages}/>
    </div>
  )
}

export default ArchiveNotice
