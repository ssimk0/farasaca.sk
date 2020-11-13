import React, {useEffect} from 'react';
import {SET_PAGE_TITLE, useAppContext} from "../context/app";
import i18n from "../utils/i18n";

function Contact() {
  const {dispatch} = useAppContext();

  useEffect(() => {
    dispatch({type: SET_PAGE_TITLE, value: i18n.t("pages.contact.menuName")});
  });

  return (
    <div className="container mx-auto pt-6">
      <div className="grid md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-bold">Kontakt</h2>
          <div className="address py-2">
            <h3 className="text-xl">Adresa</h3>
            <p>Rímskokatolícka farnosť</p>
            <p>
              Kvetná 25
            </p>
            <p> 040 15 Košice - Šaca</p>
          </div>
          <div className="contact-info">
            <h3 className="text-xl">Kontaky</h3>
            <p>
              <a href="mailto:fara@farasaca.sk" className="text-orange-500">fara@farasaca.sk</a>
            </p>
            <p>
              <a href="tel:+421905366257" className="text-orange-500">0905 366 257</a>
            </p>
            <p>
              <a href="tel:+421556841164" className="text-orange-500">055/68 41 164</a>
            </p>
          </div>
        </div>
        <div>
          {/* eslint-disable-next-line jsx-a11y/iframe-has-title */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21093.53752196114!2d21.166266875962947!3d48.63487202302324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473f1f3bf0bb1e35%3A0xae07defb6074c81c!2zUsOtbXNrb2thdG9sw61ja3kgRmFyc2vDvSDDmnJhZA!5e0!3m2!1sen!2ssk!4v1605284194949!5m2!1sen!2ssk"
            width="100%" height="100%" frameBorder="0" allowFullScreen="" aria-hidden="false"
            tabIndex="0" />
        </div>
      </div>

    </div>
  )
}


export default Contact
