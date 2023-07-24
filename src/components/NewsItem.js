import React from 'react'
const NewsItem =(props)=> {
    let {title,description, imageUrl, newsUrl, author, date, source} =  props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{display:'flex', justifyContent:'flex-end', position: 'absolute', right: '0'}}>
            <span className="badge rounded-pill bg-primary"  >
                  {source}
            </span>
          </div>
            <img src={imageUrl?imageUrl:"https://images.hindustantimes.com/tech/img/2023/07/09/1600x900/Solar_storms_1688886825975_1688886826180.jpg"} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a rel="noreferrer"href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Explore</a>
                <p className="card-text"><small className="text-body-secondary">By {author?author: "Unknown"} on {new Date(date).toGMTString()}</small></p>

            </div>
        </div>
      </div>
    )
}

export default NewsItem
