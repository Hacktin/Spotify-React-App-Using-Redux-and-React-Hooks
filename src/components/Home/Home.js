import React from "react";
import {Container,Jumbotron} from 'reactstrap'

function Home() {
  return (
    <div>
      <Container fluid>
        <Jumbotron>
          <h1>Spotify PlayList and Artist Generator</h1>
          <hr></hr>

          <h4>Options</h4>
          <ul>
            <li>
              <a href="/artist">Artist</a>
            </li>
            <li>
              <a href="/playlist">PlayList</a>
            </li>
          </ul>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default React.memo(Home)