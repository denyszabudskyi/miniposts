import React from "react";

export default class Like extends React.Component {

    constructor(props) {
        super(props);
        this.changeLikeStatus = (postId, userId) => {
            this.props.changeLikeStatus(postId, userId);
        }
    }

    render() {

        const postId = this.props.postId;
        const likeStatus = this.props.like;
        const userId = this.props.userId;

        return (
            <div
                className={`like ${likeStatus}`}
                onClick={() => this.changeLikeStatus(postId, userId, likeStatus)}
            >
                like
            </div>
        );
    }

}
