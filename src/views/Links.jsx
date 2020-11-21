import React from "react";

function Links() {


  return(
    <div className="container mx-auto pt-6 links">
      <div className="grid md:grid-cols-3">
        <div>
          <a href="https://www.ke-arcidieceza.sk" target="_blank" rel="noopener noreferrer">
            <img src="/links/200px-Košická_arcidiecéza.png" alt="abuke"/>
          </a>
        </div>
        <div>
          <a href="https://upcke.sk" target="_blank" rel="noopener noreferrer">
            <img src="/links/upcke.jpg" alt="upcke"/>
          </a>
        </div>
        <div>
          <a href="https://www.tkkbs.sk" target="_blank" rel="noopener noreferrer">
            <img src="/links/tkkbs.jpg" alt="tkkbs"/>
          </a>
        </div>
      </div>
    </div>
  )
}


export default Links
