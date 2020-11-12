import announcement from "../api/announcement";


const AnnouncementService = {
  active() {
    return announcement.active()
  },
  create({message, expireAt}) {
    return announcement.create({
      message,
      expire_at: expireAt
    })
  }
}

export default AnnouncementService
