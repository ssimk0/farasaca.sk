import React, {useEffect, useState} from 'react';
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";
import {useHistory, useParams} from "react-router-dom";
import i18n from "utils/i18n";
import UploadForm from "components/Gallery/UploadForm";
import {GALLERY_TYPE} from "../../api/upload";


function Upload({uploadService}) {
    const {dispatch} = useAppContext();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const {category} = useParams();

    const handleCreate = images => {
        setLoading(true)
        uploadService.upload(images, category).then(() => {
            setLoading(false)
            history.push(`/gallery`)
        }, () => {
            setLoading(false)
        })
    };

    useEffect(() => {
        dispatch({type: SET_PAGE_TITLE, value: i18n.t('pages.gallery.upload')});
    }, [dispatch])

    return (
      <div className="container mx-auto py-4">
        <span className="form-title">{i18n.t("gallery.link.upload")}</span>
        <UploadForm onSubmit={handleCreate} type={GALLERY_TYPE} loading={loading}/>
      </div>
    )
}

export default Upload;
