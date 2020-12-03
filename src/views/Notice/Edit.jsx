import React, {useEffect, useState} from 'react';
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";
import {useHistory, useParams} from "react-router-dom";
import i18n from "utils/i18n";
import Loader from "../../components/Loader";
import UploadForm from "../../components/Upload/UploadForm";
import Error from "../../components/Error/Error";


function EditNotice({uploadService}) {
  const {dispatch} = useAppContext();
  const history = useHistory();
  const [upload, setUpload] = useState(null);
  const [error, setError] = useState(null);

  const {type, id} = useParams();
  const handleEdit = values => {
    setError(null)

    return uploadService.edit({...values, id: upload.id, type: "menu", category: type,}).then(() => {
      if (type === 'most') {
        history.push(`/${type}/${id}`)
      } else {
        history.push(`/oznamy/${type}/${id}`)
      }
    }, (err) => {
      setError(i18n.t('errors.unknown'))
    })
  };

  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t(`pages.notice.${type}detail`)});

    uploadService.getUpload({
      type: "menu",
      category: type,
      id,
    }).then((u) => setUpload(u), (err) => setError(err));

  }, [dispatch, type, id, uploadService])

  return upload === null ? <Loader/> : (
    <div className="container mx-auto py-4">
      <Error error={error}/>
      <UploadForm onSubmit={handleEdit} upload={upload}/>
    </div>
  )
}

export default EditNotice;
