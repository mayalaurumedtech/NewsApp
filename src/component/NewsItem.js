import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class NewsItem extends Component {

  render() {
    let { title, description, imageUrl, publishedAt, newsUrl, author, source } = this.props;
    return (
      <>
        <div className="my-3">
          <Card>
            <div className="card-badge">
              <span className="badge bg-danger">{source} </span>
            </div>
            <Card.Img variant="top" src={imageUrl ? imageUrl : "https://static.toiimg.com/thumb/msid-111098953,width-1070,height-580,imgsize-2308,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{description} </Card.Text>
              <Card.Text> <small> Author :  {author ? author : "Unknow"} <br /> Date :  {new Date(publishedAt).toGMTString()} </small></Card.Text>
              <Button className="btn-sm" variant="primary" target="_blank" href={newsUrl}>Read More</Button>
            </Card.Body>
          </Card>
        </div>
      </>
    )
  }
}

export default NewsItem
