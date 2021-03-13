import React from "react";
import { Card, Icon, Label, Image, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import moment from "moment";

function PostCard({
  post: { body, createdAt, id, username, likeCount, commentCount, likes },
}) {
    function likePost(){
        console.log('liked')
    }
  return (
    <Card fluid>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://i.pinimg.com/originals/17/2e/05/172e05d2a862ff36a5d17d3ed7c978d2.png"
        />
        <Card.Header>{username}</Card.Header>
        <Card.Meta as={Link} to={`/posts/${id}`}>
          {moment(createdAt).fromNow(true)}
        </Card.Meta>
        <Card.Description>{body}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button as="div" labelPosition="right" onClick={likePost}>
          <Button color="orange" basic>
            <Icon name="heart" />
          </Button>
          <Label basic color="orange" pointing="left">
            {likeCount}
          </Label>
        </Button>
      </Card.Content>
    </Card>
  );
}

export default PostCard;
