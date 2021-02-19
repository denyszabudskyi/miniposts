import React from "react";
import Like from "../Like";

export default class Post extends React.Component {

    constructor(props) {
        super(props);
        this.changeLikeStatus = (postId, userId) => {
            this.props.changeLikeStatus(postId, userId);
        }
    }

    render() {
        const {like, id} = this.props.post;
        return (
            <Like
                userId={this.props.userId}
                postId={id}
                like={like}
                changeLikeStatus={this.changeLikeStatus}
            />
        );
    }

}
