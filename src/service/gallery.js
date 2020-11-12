import gallery, {GALLERY_TYPE} from "../api/gallery";

const GalleryService = {
    async upload(images, category) {
      for(const image of images) {
        const formData = new FormData();
        formData.append('file', image)
        await gallery.upload(formData, category, GALLERY_TYPE);
      }
    },
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
