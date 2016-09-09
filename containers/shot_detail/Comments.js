import React, { Component } from 'react'

export default class ShotDetailComments extends Component {
  render() {
    return (
      <div id="comments-section">
        <h2 className="count section ">
          7 Responses
        </h2>
        <div className="comments-sort">
            <a className="oldest selected" href="/shots/2950378-Become-Seller?comments_sort=oldest">oldest</a>
            <a className="newest " href="/shots/2950378-Become-Seller?comments_sort=newest">newest</a>
            <a className="liked " href="/shots/2950378-Become-Seller?comments_sort=liked">liked</a>
        </div>
        <ol id="comments" className="comments">
          <li id="comment-5558831" className="response comment group " data-user-id="499731">
            <h2>
              <a className="url hoverable" rel="contact" href="/kalee"><img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/499731/avatars/small/0c0c6bcc5b08375cf9cd57e6f449e1e2.png?1463147584"/> Ka Lee</a>
            </h2>
            <div className="comment-body">
              <p>This is beautiful! Great flow! </p>
            </div>
            <span className="comment-meta-likes">
              <a className="likes-list" href="/comments/5558831/likes">2</a><span className="hide">likes</span>
            </span>
            <p className="comment-meta">
            <a href="#comment-5558831" className="posted">about 12 hours ago</a>
              <span className="sep">|</span>
                <a className="likes" href="/comments/5558831/likes">Like?</a>
            </p>
          </li>
          <li id="comment-5559013" className="response comment group " data-user-id="371472">
            <h2>
              <a className="url hoverable" rel="contact" href="/borderbabe2412"><img className="photo" src="https://d13yacurqjgara.cloudfront.net/users/371472/avatars/small/a4160ddac21f0f65b96b8871e32a43c0.jpg?1453169928"/> Tayler Dea</a>
            </h2>
            <div className="comment-body">
              <p>Its beautiful!</p>
            </div>
            <span className="comment-meta-likes">
              <a className="likes-list" href="/comments/5559013/likes">1</a><span className="hide">likes</span>
            </span>
            <p className="comment-meta">
              <a href="#comment-5559013" className="posted">about 11 hours ago</a>
              <span className="sep">|</span>
              <a className="likes" href="/comments/5559013/likes">Like?</a>
            </p>
          </li>
        </ol>
      </div>
    )
  }
}