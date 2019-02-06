import React, { Component } from 'react';
import './Documentation.css';

class Documentation extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="documentation">
        <h1>Documentation</h1>
        <h2>Introduction</h2>
        <p>
          This API contains information on 26 concert venues in Denver, Colorado, and 136 concerts that occured at these venues. Each venue entry contains an address and venue name, while each concert entry contains a date, name of band that performed, and the venue where the concert took place. The information was gathered using a web scraper on data from <a href="https://www.concertarchives.org/locations/denver-co">concert archives</a>, while addresses of venues were added manually.</p>
        <h2>Base URL</h2>
        {/* Display example of base URL */}
        <p>The Base URL is the root URL for all of the API. If you ever make a request to the Concerts API and get back a 404 NOT FOUND response then double check the base URL first. The base URL is displayed below:</p>
        <pre><code>https://byob-concerts.herokuapp.com</code></pre>
        <p>The documentation below assumes you are prepending the Base URL to the endpoints in order to make requests.</p>
        <h2>Getting started</h2>
        <p>Now, let's make our first API request with the Concerts API!</p>

        <h2>Resources</h2>

        <div className="sample-request-response">
          <h3>GET</h3>
          <p>Request:</p>
          <pre><code>/api/v1/venues</code></pre>
          <p>This endpoint will return an array of all venue objects.</p>
          <p>Response:</p>
          <pre><code>{/* SAMPLE RESPONSE */}</code></pre>
          <ul>Attributes:
            <li><code>id</code> <em>number</em>-- venue unique id</li>
            <li><code>name</code> <em>string</em>-- venue name</li>
            <li><code>address</code> <em>string</em>-- venue location</li>
            <li><code>created_at</code> <em>string</em>-- venue unique creation timestamp</li>
            <li><code>updated_at</code> <em>string</em>-- venue unique update timestamp</li>
          </ul>
          <hr />

          <p> Example Request:</p>
          <pre><code>/api/v1/venues/:id</code></pre>
          <p>This endpoint will return an array a single venue object. The id of the venue is contained in the path.</p>
          <p>Example Response:</p>
          <pre><code>{/* SAMPLE RESPONSE */}</code></pre>
          <ul>Attributes:
            <li><code>id</code> <em>number</em>-- venue unique id</li>
            <li><code>name</code> <em>string</em>-- venue name</li>
            <li><code>address</code> <em>string</em>-- venue location</li>
            <li><code>created_at</code> <em>string</em>-- venue unique creation timestamp</li>
            <li><code>updated_at</code> <em>string</em>-- venue unique update timestamp</li>
          </ul>
          <hr />

          <p>Request:</p>
          <pre><code>/api/v1/concerts
</code></pre>
          <p>This endpoint will return an array that includes all concert objects. Each concert object contains a band , date, and venue property.</p>
          <p>Response:</p>
          <pre><code>{/* SAMPLE RESPONSE */}</code></pre>
          <ul>Attributes:
            <li><code>id</code> <em>number</em>-- concert unique id</li>
            <li><code>band</code> <em>string</em>-- band name</li>
            <li><code>date</code> <em>string</em>-- concert date</li>
            <li><code>venue_id</code> <em>number</em>-- corresponding venue id</li>
            <li><code>created_at</code> <em>string</em>-- concert unique creation timestamp</li>
            <li><code>updated_at</code> <em>string</em>-- concert unique update timestamp</li>
          </ul>
          <hr />

          <p>Example Request:</p>
          <pre><code>/api/v1/concerts/:id
</code></pre>
          <p>This endpoint will return an array a single concert. The id of the concert is contained in the path.</p>
          <p>Example Response:</p>
          <pre><code>{/* SAMPLE RESPONSE */}</code></pre>
          <ul>Attributes:
            <li><code>id</code> <em>number</em>-- concert unique id</li>
            <li><code>band</code> <em>string</em>-- band name</li>
            <li><code>date</code> <em>string</em>-- concert date</li>
            <li><code>venue_id</code> <em>number</em>-- corresponding venue id</li>
            <li><code>created_at</code> <em>string</em>-- concert unique creation timestamp</li>
            <li><code>updated_at</code> <em>string</em>-- concert unique update timestamp</li>
          </ul>
          <hr />

          <p>Example Request:</p>
          <pre><code>/api/v1/concerts?venue=venue_id
</code></pre>
          <p>This endpoint will return an array that includes all concerts that took place at a venue that is specificied by the user. The venue id in the query corresponds to the venue that is specificied. Each concert in the response contains a band , date, and venue property.</p>
          <p>Example Response:</p>
          <pre><code>{/* SAMPLE RESPONSE */}</code></pre>
          <ul>Attributes:
            <li><code>concerts</code> <em>array</em>-- an array of concerts by venue</li>
            <li><code>venue_id</code> <em>number</em>-- corresponding venue id</li>
            <li><code>band</code> <em>string</em>-- band name</li>
            <li><code>date</code> <em>string</em>-- concert date</li>
            <li><code>id</code> <em>number</em>-- concert unique id</li>
          </ul>
        </div>

        <div className="sample-request-response">
          <h3>POST</h3>
          <p>Request:</p>
          <pre><code>/api/v1/venues</code></pre>
          <p>This endpoint allows users to add a new venue to the database. The request must contain a name and address property in order for the post to be successful. If these properties are not included, an error with status code 422 will be returned.
          </p>
          <p>Response:</p>
          <pre><code>{/* SAMPLE RESPONSE */}</code></pre>
          <ul>Attributes:
            <li><code>name</code> <em>string</em>-- venue name</li>
            <li><code>id</code> <em>number</em>-- venue unique id</li>
            <li><code>address</code> <em>string</em>-- venue location</li>
          </ul>
          <hr />

          <p>Request:</p>
          <pre><code>/api/v1/venues/:id/concerts
</code></pre>
          <p>This endpoint allows users to add a new concert to the database to a specific venue. The request must contain a band and date property in order for the post to be successful. If these properties are not included, an error with status code 500 will be returned.
          </p>
          <p>Response:</p>
          <pre><code>{/* SAMPLE RESPONSE */}</code></pre>
          <ul>Attributes:
            <li><code>band</code> <em>string</em>-- band name</li>
            <li><code>date</code> <em>string</em>-- concert date</li>
            <li><code>venue_id</code> <em>number</em>-- corresponding venue id</li>
            <li><code>id</code> <em>number</em>-- concert unique id</li>
          </ul>
          <hr />

        </div>

        <div className="sample-request-response">
          <h3>PUT</h3>
          <p>Example Request:</p>
          <pre><code>/api/v1/venues/:id
</code></pre>
          <p>This endpoint allows users to update an existing venue in the database. The request should contain a name and address property.
          </p>
          <p>Example Response:</p>
          <pre><code>{/* SAMPLE RESPONSE */}</code></pre>
          <ul>Attributes:
          <li><code>name</code> <em>string</em>-- venue name</li>
            <li><code>id</code> <em>number</em>-- venue unique id</li>
            <li><code>address</code> <em>string</em>-- venue location</li>
          </ul>
          <hr />

          <p>Example Request:</p>
          <pre><code>/api/v1/concerts/:id
</code></pre>
          <p>This endpoint allows users to update an existing concert in the database. The request should contain a band and date property.
          </p>
          <p>Example Response:</p>
          <pre><code>{/* SAMPLE RESPONSE */}</code></pre>
          <ul>Attributes:
            <li><code>band</code> <em>string</em>-- band name</li>
            <li><code>date</code> <em>string</em>-- concert date</li>
            <li><code>venue_id</code> <em>number</em>-- corresponding venue id</li>
            <li><code>id</code> <em>number</em>-- concert unique id</li>
          </ul>
        </div>

        <div className="sample-request-response">
          <h3>DELETE</h3>
          <p>Example Request:</p>
          <pre><code>/api/v1/venues/:id
</code></pre>
          <p>
            This endpoint allows users to delete an existing venue in the database. The id of the venue to be deleted is a params of the request. If there is an error, a response with status 501 should be returned.
          </p>
          <p>Example Response:</p>
          <pre><code>{/* SAMPLE RESPONSE */}</code></pre>
          <ul>Attributes:
          <li><code>name</code> <em>string</em>-- venue name</li>
            <li><code>id</code> <em>number</em>-- venue unique id</li>
            <li><code>address</code> <em>string</em>-- venue location</li>
          </ul>
          <hr />


          <p>Example Request:</p>
          <pre><code>/api/v1/concerts/:id
</code></pre>
          <p>This endpoint allows users to delete an existing concert in the database. The id of the concert to be deleted is a params of the request. If there is an error, a response with status 501 should be returned.
          </p>
          <p>Example Response:</p>
          <pre><code>{/* SAMPLE RESPONSE */}</code></pre>
          <ul>Attributes:
            <li><code>id</code> <em>number</em>-- concert unique id</li>
          </ul>
        </div>

      </div>
    )
  }
}

export default Documentation;