import React from "react";

function Links() {


  return(
    <div className="container mx-auto pt-6 links">
      <div className="grid md:grid-cols-3">
        <div className="  flex flex-wrap content-center">
          <a href="https://www.ke-arcidieceza.sk" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <img src="/links/200px-Košická_arcidiecéza.png" alt="abuke"/>
          </a>
        </div>
        <div className="flex flex-wrap content-center">
          <a href="https://upcke.sk" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <img src="/links/upcke.jpg" alt="upcke"/>
          </a>
        </div>
        <div className="flex flex-wrap content-center">
          <a href="https://www.tkkbs.sk" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <img src="/links/tkkbs.jpg" alt="tkkbs"/>
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-3 pt-6">
        {
          // row 2
        }
        <div className="flex flex-wrap content-center">
          <a href="https://lumen.sk" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <img src="/links/lumen.png" alt="lumen"/>
          </a>
        </div>
        <div className="  flex flex-wrap content-center" >
          <a href="https://tvlux.sk" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <img src="/links/lux.jpg" alt="lux"/>
          </a>
        </div>
        <div className="flex flex-wrap content-center">
          <a href="https://www.vaticannews.va/sk.html" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <img src="/links/vat.jpg" alt="vat"/>
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-3 pt-6">
        {
          // row 3
        }
        <div className="flex flex-wrap content-center">
          <a href="https://tvnoe.cz" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <img src="/links/noe.png" alt="noe"/>
          </a>
        </div>
        <div className="flex flex-wrap content-center" >
          <a href="https://radiomaria.sk" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <img src="/links/maria.png" alt="maria"/>
          </a>
        </div>
        <div className="flex flex-wrap content-center">
          <a href="http://katechizmus.sk" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <img src="/links/kkc.jpg" alt="kkc"/>
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-3 pt-6">
        {
          // row 4
        }
        <div className="flex flex-wrap content-center">
          <a href="https://breviar.sk" target="_blank" rel="noopener noreferrer" className="mx-auto">
            <img src="/links/breviar.png" alt="breviar"/>
          </a>
        </div>
      </div>
    </div>
  )
}


export default Links
