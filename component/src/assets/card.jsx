import React from 'react'

class card extends React.Component{
    render(){
    return(
        <>


     <div className="card" style={{width: "18rem"}}>
  <img src="https://www.autoshippers.co.uk/blog/wp-content/uploads/bugatti-centodieci.jpg" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{this.props.title}</h5>
    <p className="card-text">{this.props.des}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
}
}

export default card