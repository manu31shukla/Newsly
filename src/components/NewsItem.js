import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
    return (
      <div className='my-3'>
        <div className="card shadow" >
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-primary text-light" style={{zIndex:1, left:'90%'}}>{source}
         <span className="visually-hidden">sources</span>
         </span>
          <img src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"} className="card-img-top" alt="..." style={{ maxHeight: '200px', objectFit: 'cover' }}  />
          <div className="card-body" style={{maxHeight: '300px'}}>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
