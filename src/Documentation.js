import React, { Component } from 'react';
import './Documentation.css';
// import * as apiCalls from './helper/apiCalls';

class Documentation extends Component {
  constructor() {
    super()
    this.state = {
      sampleVenues: [],
      sampleConcerts: [],
      sampleOneVenue: [],
      sampleOneConcert: [],
      sampleConcertsByVenue: {},
      samplePostVenue: {},
      samplePostConcert: {},
      sampleUpdateVenue: {},
      sampleUpdateConcert: {},
      sampleDeleteVenue: {},
      sampleDeleteConcert: {}
    }
  }

  // componentDidMount = async () => {
  //   const allVenues = await apiCalls.fetchAllVenues();
  //   const allConcerts = await apiCalls.fetchAllConcerts();
  //   const venueById = await apiCalls.fetchVenue(1);
  //   const concertById = await apiCalls.fetchConcert(1);
  //   const concertsByVenue = await apiCalls.fetchConcertsByVenue(1);
  //   const postedVenue = await apiCalls.postVenue({ name: 'Baller Venue', address: '321 Fake St.' });
  //   const postedConcert = await apiCalls.postConcert({ band: 'Nonos', date: 'Jan. 19, 1999' }, 1);
  //   const updatedVenue = await apiCalls.updateVenue({ name: 'The Dive', address: '123 Dive St.', id: 1 });
  //   const updatedConcert = await apiCalls.updateConcert({ band: 'Nononos', date: 'Jan. 20, 1999', venue_id: 1, id: 1 });
  //   const deletedVenue = await apiCalls.deleteVenue(1);
  //   const deletedConcert = await apiCalls.deleteConcert(1);

  //   this.setState({
  //     sampleVenues: allVenues,
  //     sampleConcerts: allConcerts,
  //     sampleOneVenue: venueById,
  //     sampleOneConcert: concertById,
  //     sampleConcertsByVenue: concertsByVenue,
  //     samplePostVenue: postedVenue,
  //     samplePostConcert: postedConcert,
  //     sampleUpdateVenue: updatedVenue,
  //     sampleUpdateConcert: updatedConcert,
  //     sampleDeleteVenue: deletedVenue,
  //     sampleDeleteConcert: deletedConcert
  //   })
  // }

  render() {
    return (
      <div className="documentation">
        <h2>Introduction</h2>
        <p>
          This API contains information on 26 concert venues in Denver, Colorado, and 136 concerts that occured at these venues. Each venue entry contains an address and venue name, while each concert entry contains a date, name of band that performed, and the venue where the concert took place. The information was gathered using a web scraper on data from <a href="https://www.concertarchives.org/locations/denver-co">concert archives</a>, while addresses of venues were added manually.</p>
        <h2>Base URL</h2>
        <p>The Base URL is the root URL for all of the API. If you ever make a request to the Concerts API and get back a 404 NOT FOUND response then double check the base URL first. The base URL is displayed below:</p>
        <pre><code>https://byob-concerts.herokuapp.com</code></pre>
        <p>The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.</p>
        <h2>Getting started</h2>
        <p>Now, let's make our first API request with the Concerts API!</p>

        <h2>Resources</h2>

        <div className="sample-request-response">
          <h3 className="methods">GET</h3>
          <p>Request:</p>
          <pre><code>/api/v1/venues</code></pre>
          <p>This endpoint will return an array of all venue objects.</p>
          <p>Response:</p>
          <pre><code className="response-code">
          HTTP / 200 OK <br />
          "Content-Type": "application/json" <br />
          "id": 1,
          "name": "Soiled Dove Underground", <br />
          "address": "7401 E 1st Ave, Denver, CO 80230", <br />
          "created_at": "2019-02-05T14:51:49.359Z", <br />
          "updated_at": "2019-02-05T14:51:49.359Z"
          </code></pre>
          <ul>Attributes:
            <li><code className="list-code">id</code> <em>number</em>-- venue unique id</li>
            <li><code className="list-code">name</code> <em>string</em>-- venue name</li>
            <li><code className="list-code">address</code> <em>string</em>-- venue location</li>
            <li><code className="list-code">created_at</code> <em>string</em>-- venue unique creation timestamp</li>
            <li><code className="list-code">updated_at</code> <em>string</em>-- venue unique update timestamp</li>
          </ul>
          <hr />

          <p>Example Request:</p>
          <pre><code>/api/v1/venues/:id</code></pre>
          <p>This endpoint will return an array a single venue object. The id of the venue is contained in the path.</p>
          <p>Example Response:</p>
          <pre><code className="response-code">
          HTTP / 200 OK <br />
          "Content-Type": "application/json" <br />
          "id": 1,
          "name": "Soiled Dove Underground", <br />
          "address": "7401 E 1st Ave, Denver, CO 80230", <br />
          "created_at": "2019-02-05T14:51:49.359Z", <br />
          "updated_at": "2019-02-05T14:51:49.359Z"
          </code></pre>
          <ul>Attributes:
            <li><code className="list-code">id</code> <em>number</em>-- venue unique id</li>
            <li><code className="list-code">name</code> <em>string</em>-- venue name</li>
            <li><code className="list-code">address</code> <em>string</em>-- venue location</li>
            <li><code className="list-code">created_at</code> <em>string</em>-- venue unique creation timestamp</li>
            <li><code className="list-code">updated_at</code> <em>string</em>-- venue unique update timestamp</li>
          </ul>
          <hr />

          <p>Request:</p>
          <pre><code>/api/v1/concerts</code></pre>
          <p>This endpoint will return an array that includes all concert objects. Each concert object contains a band , date, and venue property.</p>
          <p>Response:</p>
          <pre><code className="response-code">
          HTTP / 200 OK <br />
          "Content-Type": "application/json" <br />
          "id": 1,
          "band": "Lucid Vision", <br />
          "date": "Jan 18, 2019", <br />
          "venue_id": 2, <br />
          "created_at": "2019-02-05T14:51:49.389Z", <br />
          "updated_at": "2019-02-05T14:51:49.389Z"
          </code></pre>
          <ul>Attributes:
            <li><code className="list-code">id</code> <em>number</em>-- concert unique id</li>
            <li><code className="list-code">band</code> <em>string</em>-- band name</li>
            <li><code className="list-code">date</code> <em>string</em>-- concert date</li>
            <li><code className="list-code">venue_id</code> <em>number</em>-- corresponding venue id</li>
            <li><code className="list-code">created_at</code> <em>string</em>-- concert unique creation timestamp</li>
            <li><code className="list-code">updated_at</code> <em>string</em>-- concert unique update timestamp</li>
          </ul>
          <hr />

          <p>Example Request:</p>
          <pre><code>/api/v1/concerts/:id</code></pre>
          <p>This endpoint will return an array a single concert. The id of the concert is contained in the path.</p>
          <p>Example Response:</p>
          <pre><code className="response-code">
          HTTP / 200 OK <br />
          "Content-Type": "application/json" <br />
          "id": 1, <br />
          "band": "Lucid Vision", <br />
          "date": "Jan 18, 2019", <br />
          "venue_id": 2, <br />
          "created_at": "2019-02-05T14:51:49.389Z", <br />
          "updated_at": "2019-02-05T14:51:49.389Z"
          </code></pre>
          <ul>Attributes:
            <li><code className="list-code">id</code> <em>number</em>-- concert unique id</li>
            <li><code className="list-code">band</code> <em>string</em>-- band name</li>
            <li><code className="list-code">date</code> <em>string</em>-- concert date</li>
            <li><code className="list-code">venue_id</code> <em>number</em>-- corresponding venue id</li>
            <li><code className="list-code">created_at</code> <em>string</em>-- concert unique creation timestamp</li>
            <li><code className="list-code">updated_at</code> <em>string</em>-- concert unique update timestamp</li>
          </ul>
          <hr />

          <p>Example Request:</p>
          <pre><code>/api/v1/concerts?venue=venue_id</code></pre>
          <p>This endpoint will return an array that includes all concerts that took place at a venue that is specificied by the user. The venue id in the query corresponds to the venue that is specificied. Each concert in the response contains a band , date, and venue property.</p>
          <p>Example Response:</p>
          <pre><code className="response-code">
          HTTP / 200 OK <br />
          "Content-Type": "application/json" <br />
          "concerts": [ <br />
               
              "venue_id": 1, <br />
              "band": "Stanley Jordon", <br />
              "date": "Jan 18, 2019", <br />
              "id": 2 ]
          </code></pre>
          <ul>Attributes:
            <li><code className="list-code">concerts</code> <em>array</em>-- an array of concerts by venue</li>
            <li><code className="list-code">venue_id</code> <em>number</em>-- corresponding venue id</li>
            <li><code className="list-code">band</code> <em>string</em>-- band name</li>
            <li><code className="list-code">date</code> <em>string</em>-- concert date</li>
            <li><code className="list-code">id</code> <em>number</em>-- concert unique id</li>
          </ul>
        </div>

        <div className="sample-request-response">
          <h3 className="methods">POST</h3>
          <p>Request:</p>
          <pre><code>/api/v1/venues</code></pre>
          <p>This endpoint allows users to add a new venue to the database. The request must contain a name and address property in order for the post to be successful. If these properties are not included, an error with status code 422 will be returned.
          </p>
          <p>Response:</p>
          <pre><code className="response-code">
          HTTP / 201 CREATED <br />
          "Content-Type": "application/json" <br />
          "name": "Baller Venue", <br />
          "address": "321 Fake St.", <br />
          "id": 29
          </code></pre>
          <ul>Attributes:
            <li><code className="list-code">name</code> <em>string</em>-- venue name</li>
            <li><code className="list-code">id</code> <em>number</em>-- venue unique id</li>
            <li><code className="list-code">address</code> <em>string</em>-- venue location</li>
          </ul>
          <hr />

          <p>Request:</p>
          <pre><code>/api/v1/venues/:id/concerts</code></pre>
          <p>This endpoint allows users to add a new concert to the database to a specific venue. The request must contain a band and date property in order for the post to be successful. If these properties are not included, an error with status code 500 will be returned.
          </p>
          <p>Response:</p>
          <pre><code className="response-code">
          HTTP / 201 CREATED <br />
          "Content-Type": "application/json" <br />
          "band": "Nonos", <br />
          "date": "Jan. 19, 1999", <br />
          "venue_id": 1, <br />
          "id": 139
          </code></pre>
          <ul>Attributes:
            <li><code className="list-code">band</code> <em>string</em>-- band name</li>
            <li><code className="list-code">date</code> <em>string</em>-- concert date</li>
            <li><code className="list-code">venue_id</code> <em>number</em>-- corresponding venue id</li>
            <li><code className="list-code">id</code> <em>number</em>-- concert unique id</li>
          </ul>
          <hr />

        </div>

        <div className="sample-request-response">
          <h3 className="methods">PUT</h3>
          <p>Example Request:</p>
          <pre><code>/api/v1/venues/:id</code></pre>
          <p>This endpoint allows users to update an existing venue in the database. The request should contain a name and address property.
          </p>
          <p>Example Response:</p>
          <pre><code className="response-code">
          HTTP / 202 ACCEPTED <br />
          "Content-Type": "application/json" <br />
          "name": "The Dive", <br />
          "address": "123 Dive St.", <br />
          "id": 1
          </code></pre>
          <ul>Attributes:
          <li><code className="list-code">name</code> <em>string</em>-- venue name</li>
            <li><code className="list-code">id</code> <em>number</em>-- venue unique id</li>
            <li><code className="list-code">address</code> <em>string</em>-- venue location</li>
          </ul>
          <hr />

          <p>Example Request:</p>
          <pre><code>/api/v1/concerts/:id</code></pre>
          <p>This endpoint allows users to update an existing concert in the database. The request should contain a band and date property.
          </p>
          <p>Example Response:</p>
          <pre><code className="response-code">
          HTTP / 202 ACCEPTED <br />
          "Content-Type": "application/json" <br />
          "band": "Nononos", <br />
          "date": "Jan. 20, 1999", <br />
          "venue_id": 1, <br />
          "id": 1
          </code></pre>
          <ul>Attributes:
            <li><code className="list-code">band</code> <em>string</em>-- band name</li>
            <li><code className="list-code">date</code> <em>string</em>-- concert date</li>
            <li><code className="list-code">venue_id</code> <em>number</em>-- corresponding venue id</li>
            <li><code className="list-code">id</code> <em>number</em>-- concert unique id</li>
          </ul>
        </div>

        <div className="sample-request-response">
          <h3 className="methods">DELETE</h3>
          <p>Example Request:</p>
          <pre><code>/api/v1/venues/:id</code></pre>
          <p>
            This endpoint allows users to delete an existing venue in the database. The id of the venue to be deleted is a params of the request. If there is an error, a response with status 501 should be returned.
          </p>
          <p>Example Response:</p>
          <pre><code className="response-code">
          HTTP / 202 ACCEPTED <br />
          "Content-Type": "application/json" <br />
          "venue": 1
          </code></pre>
          <ul>Attributes:
            <li><code className="list-code">venue</code> <em>number</em>-- venue unique id</li>
            <li><code className="list-code">address</code> <em>string</em>-- venue location</li>
          </ul>
          <hr />


          <p>Example Request:</p>
          <pre><code>/api/v1/concerts/:id</code></pre>
          <p>This endpoint allows users to delete an existing concert in the database. The id of the concert to be deleted is a params of the request. If there is an error, a response with status 501 should be returned.
          </p>
          <p>Example Response:</p>
          <pre><code className="response-code">
          HTTP / 202 ACCEPTED <br />
          "Content-Type": "application/json" <br />
          "id": 1
          </code></pre>
          <ul>Attributes:
            <li><code className="list-code">id</code> <em>number</em>-- concert unique id</li>
          </ul>
        </div>

      </div>

    )
  }
}

export default Documentation;