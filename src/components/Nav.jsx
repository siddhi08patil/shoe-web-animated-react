import React from 'react'

const Nav = () => {
  return (
    <>
    
      <div className="alert alert-primary text-center half-height" role="alert">
  If cupons avaliable <a href="#" className="alert-link">10% of heavy</a>. discount
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>

<div id='nav'>
    <div id='leftside'>
    <h5>Instant</h5>
    <h5>AllCollection</h5>
    <h5>Store</h5>
    <h5>Guide</h5>
    </div>
    <div id='middle'>
    <img src="shoe-removebg-preview.png"  height="90px" width="130px"/>
    </div>
    <div id='lastone'><form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
    </form></div>
    
</div>
    </>
  )
}

export default Nav
