import * as React from "react";
import c from "classnames";
import "./main.scss";
import { LikeTwo } from "../../assets/icons";

class Buttons extends React.Component {
  state = {
    like: 0,
    dislike: 0,
    likeActive: false,
    dislikeActive: false
  };

  setDislike() {
    this.setState({
      dislikeActive: !this.state.dislikeActive,
      dislike: this.state.dislikeActive
        ? this.state.dislike - 1
        : this.state.dislike + 1
    });
  }
  setLike() {
    this.setState({
      likeActive: !this.state.likeActive,
      like: this.state.likeActive ? this.state.like - 1 : this.state.like + 1
    });
  }

  handleLike() {
    if (this.state.dislikeActive) {
      this.setLike();
      this.setDislike();
    }
    this.setLike();
  }

  handleDislike() {
    if (this.state.likeActive) {
      this.setDislike();
      this.setLike();
    }
    this.setDislike();
  }

  render() {
    return (
      <div className="like_wrapper">
        <button
          onClick={() => this.handleLike()}
          className={`${c({ ["active"]: this.state.likeActive })} like_btn`}
        >
          <div className={`${c({ ["active"]: this.state.likeActive })} rotate_btn two`}><LikeTwo/></div>
          <span>{this.state.like}</span>
        </button>
        <button
          className={`${c({ ["active"]: this.state.dislikeActive })} like_btn`}
          onClick={() => this.handleDislike()}
        >
          <div className={`${c({ ["active"]: this.state.dislikeActive })} rotate_btn`}><LikeTwo/></div>
          <span>{this.state.dislike}</span>
        </button>
      </div>
    );
  }
}

export default Buttons