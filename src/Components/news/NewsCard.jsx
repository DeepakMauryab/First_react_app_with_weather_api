import React from 'react';

const NewsCard = ({newsapi}) => {

    console.log(newsapi);
    // const author= newsapi.author;
    return (<>
    <div key={newsapi[0].id}>{newsapi[0].id}</div>
        {/* <div className="card" style={{ width: "18rem" }} key={newsapi.id}>
            <img src={newsapi.imageUrl} className="card-img-top" alt="News" />
            <div className="card-body">
                <h5 className="card-title">{newsapi.author}</h5>
                <p className="card-text">{newsapi.content}...</p>
                <a href={newsapi.readMoreUrl} className="btn btn-primary">Read More...</a>
            </div>
        </div> */}
    </>);
}

export default NewsCard;