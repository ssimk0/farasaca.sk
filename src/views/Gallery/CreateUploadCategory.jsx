import React, {useEffect, useState} from 'react';
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";
import {useHistory} from "react-router-dom";
import i18n from "utils/i18n";
import UploadCategoryForm from "../../components/Gallery/UploadCategoryForm";
import Error from "../../components/Error/Error";


function CreateUploadCategory({galleryService}) {
    const {dispatch} = useAppContext();
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleCreate = values => {
        galleryService.create({...values}).then(() => {
            history.push(`/gallery`)
        }, () => {
          setError('errors.unknown')
        })
    };

    useEffect(() => {
        dispatch({type: SET_PAGE_TITLE, value: i18n.t('pages.gallery.create')});
    }, [dispatch])

    return (
      <div className="container mx-auto py-4">
        <span className="form-title">{i18n.t("gallery.link.create")}</span>
        <Error error={error}/>
        <UploadCategoryForm onSubmit={handleCreate}/>
      </div>
    )
}

export default CreateUploadCategory;
