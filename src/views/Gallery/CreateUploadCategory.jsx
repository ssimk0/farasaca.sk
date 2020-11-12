import React, {useEffect} from 'react';
import {SET_PAGE_TITLE, useAppContext} from "../../context/app";
import {useHistory} from "react-router-dom";
import i18n from "utils/i18n";
import UploadCategoryForm from "../../components/Gallery/UploadCategoryForm";


function CreateUploadCategory({galleryService}) {
    const {dispatch} = useAppContext();
    const history = useHistory();

    const handleCreate = values => {
        galleryService.create({...values}).then(() => {
            history.push(`/gallery`)
        })
    };

    useEffect(() => {
        dispatch({type: SET_PAGE_TITLE, value: i18n.t('pages.gallery.create')});
    }, [dispatch])

    return (
      <div className="container mx-auto py-4">
        <span className="form-title">{i18n.t("gallery.link.create")}</span>

        <UploadCategoryForm onSubmit={handleCreate}/>
      </div>
    )
}

export default CreateUploadCategory;
