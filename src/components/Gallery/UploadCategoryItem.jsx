import React from "react";
import i18n from "../../utils/i18n";
import {Link} from "react-router-dom";

function UploadCategoryItem({category}) {
  return (
    <div className="grid grid-cols-1 pb-8 border-b-2 border-gray-300">
      <Link to={`/gallery/${category.slug}`}>
        <img className="py-3 px-3" src={category.thumbnail}
             alt={i18n.t("gallery.uploadImagePlaceholder")}/>
      </Link>
      <div className="self-end">
        <h4>
          {category.name}
        </h4>
        <p>
          {category.description}
        </p>
      </div>
    </div>
  )
}

export default UploadCategoryItem;
