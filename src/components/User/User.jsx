import React from "react";
import Post from "../Post";

export default class User extends React.Component {

    constructor(props) {
        super(props);
        this.changeLikeStatus = (postId, userId) => {
            this.props.changeLikeStatus(postId, userId);
        }
    }

    render() {

        const postsList = [...this.props.posts].map( post => {
            return (
                <Post
                    userId={this.props.userId}
                    key={post.id}
                    post={post}
                    changeLikeStatus={this.changeLikeStatus}
                />
            );
        });

        return (
            <div className={'post'}>
                {postsList}
            </div>
        );
    }

}
