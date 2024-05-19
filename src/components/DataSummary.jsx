import React from 'react'
import image1 from '../img/image0.png'; 
import image2 from '../img/Image2.jpeg';
import image3 from '../img/Image3.jpeg'; 
import image4 from '../img/Image4.jpeg';  

function DataSummary() {
  return (
    <div className='mt-32 w-4/5'>
      <h2 className='ml-8 mb-4 text-2xl font-bold text-center'>Data Summary</h2>
      <div className="ml-8">
        <img src={image1} className="w-full  my-2" alt="Description of image 1" />
        <img src={image2} className="w-full my-2" alt="Description of image 2" />
        <img src={image3} className="w-full  my-2" alt="Description of image 3" />
        <img src={image4} className="w-full my-2 last-image" alt="Description of image 4" />
      </div>
      <div className='p-16'></div> 
    </div>
    
  )
}

export default DataSummary