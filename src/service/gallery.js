import gallery, {GALLERY_TYPE} from "../api/upload";

const GalleryService = {
    getCategoryUploads(category) {
        return gallery.listUploads({
            type: GALLERY_TYPE,
            p: 1,
            s: 9999,
            category
        });
    },
    getUploadsCategories() {
        return gallery.list(GALLERY_TYPE);
    },
    create({name, description}) {

        return gallery.createCategory({
            name,
            description,
            type: GALLERY_TYPE,
            subPath: name.toLowerCase().replace(' ', '-')
        })
    }
};

export default GalleryService;
