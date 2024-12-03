import React ,{useState} from 'react'

const Store = () => {
    const [bouncing, setBouncing] = useState(null);
  
    const handleImageClick = (index) => {
      setBouncing(index); // Set the index of the clicked image
      setTimeout(() => {
        setBouncing(null); // Remove the bounce after the animation ends
      }, 600); // Match the duration of the bounce animation
    }
  
  return (
    <div>
      <h2 id='text'>New Arrival At Store</h2>
      <div id="all">
      <img src="sd.jpeg"  height="300px" width="300px" alt="" className={bouncing === 0 ? 'bounce' : ''}
        onClick={() => handleImageClick(0)} />
      <img src="sd2.jpeg"  height="300px" width="300px" alt="" className={bouncing === 1 ? 'bounce' : ''}
        onClick={() => handleImageClick(1)} />
      <img src="sd3.jpeg" height="300px" width="300px" alt="" className={bouncing === 2 ? 'bounce' : ''}
        onClick={() => handleImageClick(2)} />
      <img src="sd4.jpeg" height="300px" width="300px" alt="" className={bouncing === 3 ? 'bounce' : ''}
        onClick={() => handleImageClick(3)}/>
      <img src="sd5.jpeg" height="300px" width="300px" alt="" className={bouncing === 4 ? 'bounce' : ''}
        onClick={() => handleImageClick(4)} />
      <img src="sd6.jpeg" height="300px" width="300px" alt="" className={bouncing === 5 ? 'bounce' : ''}
        onClick={() => handleImageClick(5)} />
      <img src="sd7.jpeg" height="300px" width="250px" alt="" className={bouncing === 6 ? 'bounce' : ''}
        onClick={() => handleImageClick(6)}/>
      <img src="sd8.jpeg" height="300px" width="300px" alt="" className={bouncing === 7 ? 'bounce' : ''}
        onClick={() => handleImageClick(7)}/>
      <img src="sd9.jpeg" height="300px" width="300px" alt="" className={bouncing === 8 ? 'bounce' : ''}
        onClick={() => handleImageClick(8)}/>
      <img src="sd10.jpeg" height="300px" width="300px" alt="" className={bouncing === 9 ? 'bounce' : ''}
        onClick={() => handleImageClick(9)} />
      </div> 
    </div>
  )
}

export default Store
