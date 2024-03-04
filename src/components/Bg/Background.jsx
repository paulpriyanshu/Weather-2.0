import React from 'react'

function Background() {
  return (
    <div className="z-10 overflow-hidden fixed" >
      {/* className="absolute inset-0 overflow-hidden z-0" */}
        {/* <div class="content">
       <h1>Welcome to My Website</h1>
        <p>This is some sample content.</p>
       </div> */}
    <video loop autoPlay muted className="object-cover" playbackRate="0.5" >
      <source src="/videoplayback.mp4" type="video/mp4" />
    
      </video> 
      {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center z-10">
       
      </div>
       */}

   
    </div>
  )
}

export default Background
