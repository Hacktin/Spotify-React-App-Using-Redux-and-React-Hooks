import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Input, Button, Form, FormGroup, Table, Container } from "reactstrap";

import * as actions from "../../react/action/SpotifyAction";

function Playlist() {
  const { PlayLists } = useSelector(state => ({
    ...state.GetPlayListItemsReducer
  }));

  const dispatch = useDispatch();

  function GetPlaylist(event) {
    const musician = event.target.elements.q.value;
    actions.GetPlayListItems(dispatch, musician);
    event.preventDefault();
  }

 

  return(
      <div>
           <Container fluid>
        <Form onSubmit={GetPlaylist}>
          <FormGroup>
            <Input type="text" className="mr-sm-2" name="q" />
          </FormGroup>
          <FormGroup>
            <Button>Search</Button>
          </FormGroup>
        </Form>
     
        </Container>

     <Container fluid>
        <Table dark responsive size="sm">
          <thead>
            <tr>
              <th>Name</th>
              <th>Photo</th>
              <th>Popularity</th>
            </tr>
          </thead>
          <tbody>
            {PlayLists.map(item => (
              <tr key={item.id}>
                <td>
                  <a href={item.external_urls.spotify}>{item.name}</a>
                </td>
                <td>
                  {item.images.map(image => (
                    // eslint-disable-next-line jsx-a11y/alt-text
                    <img
                      key={image.id}
                      src={image.url}
                      width="50px;"
                      height="50px;"
                    />
                  ))}
                </td>
                <td>{item.popularity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </div>
     
  )


}

export default Playlist
