import React, {useEffect} from "react";
import AnnouncementService from "../../service/announcement";
import {SET_ANNOUNCEMENT, useAppContext} from "../../context/app";


function Announcement({announcement}) {
  const {dispatch} = useAppContext();

  useEffect(() => {
    if (announcement === null) {
      AnnouncementService.active().then((item) => dispatch({type: SET_ANNOUNCEMENT, value: item}))
    }
  }, [announcement, dispatch])

  return announcement && announcement.message ? (
    <div className="bg-indigo-500">
      <div className="max-w-screen-xl mx-auto py-4 px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between flex-wrap">
          <div className="w-0 flex-1 flex items-center">
          <span className="flex p-2 rounded-lg bg-indigo-800">
            <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"/>
            </svg>
          </span>
            <p className="ml-3 font-medium text-white truncate">
              {announcement.message}
            </p>
          </div>

        </div>
      </div>
    </div>
  ) : null
}


export default Announcement
