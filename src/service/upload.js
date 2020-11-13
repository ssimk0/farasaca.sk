import upload, {GALLERY_TYPE} from "../api/upload";


const UploadService = {
  async upload(images, category) {
    for (const image of images) {
      const formData = new FormData();
      formData.append('file', image)
      await upload.upload(formData, category, GALLERY_TYPE);
    }
  },
  uploadOne(file, category, description = null) {
    const formData = new FormData();
    formData.append('file', file)
    formData.append('description', description)
    return upload.upload(formData, category, GALLERY_TYPE);
  },
  getUploads({type, page, category}) {
    return upload.listUploads({page, type, category});
  },
  getUpload({type, category, id}) {
    return upload.getUpload({type, category, id})
  }
}


export default UploadService
