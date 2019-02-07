// GET requests 
export const fetchAllVenues = async () => {
  const url = 'https://byob-concerts.herokuapp.com/api/v1/venues';
  const response = await fetch(url);
  if (response.ok) {
    const venues = await response.json();
    return venues;
  } else {
    throw new Error('venues not fetched');
  }
}

export const fetchAllConcerts = async () => {
  const url = 'https://byob-concerts.herokuapp.com/api/v1/concerts';
  const response = await fetch(url);
  if (response.ok) {
    const concerts = await response.json();
    return concerts;
  } else {
    throw new Error('concerts not fetched');
  }
}

export const fetchVenue = async (venue_id) => {
  const url = `https://byob-concerts.herokuapp.com/api/v1/venues/${venue_id}`;
  const response = await fetch(url);
  if (response.ok) {
    const venue = await response.json();
    return venue;
  } else {
    throw new Error('venue not fetched');
  }
}

export const fetchConcert = async (concert_id) => {
  const url = `https://byob-concerts.herokuapp.com/api/v1/concerts/${concert_id}`;
  const response = await fetch(url);
  if (response.ok) {
    const concert = await response.json();
    return concert;
  } else {
    throw new Error('concert not fetched');
  }
}

export const fetchConcertsByVenue = async (venue_id) => {
  const url = `https://byob-concerts.herokuapp.com/api/v1/concerts?venue=${venue_id}`;
  const response = await fetch(url);
  if (response.ok) {
    const concerts = await response.json();
    return concerts;
  } else {
    throw new Error('Concerts by venue not fetched');
  }
}

//POST requests
export const postVenue = async (venue) => {
  const url = 'https://byob-concerts.herokuapp.com/api/v1/venues';
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...venue })
  })
  if (response.ok) {
    const venue = await response.json();
    return venue;
  } else {
    throw new Error('venue not posted');
  }
}

export const postConcert = async (concert, venueId) => {
  const url = `https://byob-concerts.herokuapp.com/api/v1/venues/${venueId}/concerts`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...concert })
  })
  if (response.ok) {
    const concert = await response.json();
    return concert;
  } else {
    throw new Error('concert not posted');
  }
}

//PUT requests
export const updateVenue = async (venue) => {
  const url = `https://byob-concerts.herokuapp.com/api/v1/venues/${venue.id}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...venue })
  })
  if (response.ok) {
    const venue = await response.json();
    return venue;
  } else {
    throw new Error('venue not posted');
  }
}

export const updateConcert = async (concert) => {
  const url = `https://byob-concerts.herokuapp.com/api/v1/concerts/${concert.id}`;
  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ ...concert })
  })
  if (response.ok) {
    const concert = await response.json();
    return concert;
  } else {
    throw new Error('concert not posted');
  }
}

//DELETE requests
export const deleteVenue = async (venue_id) => {
  const url = `https://byob-concerts.herokuapp.com/api/v1/venues/${venue_id}`;
  const response = fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.ok) {
    const venue = await response.json();
    return venue;
  } else {
    throw new Error('venue not deleted')
  }
}

export const deleteConcert = async (concert_id) => {
  const url = `https://byob-concerts.herokuapp.com/api/v1/concerts?venue=${concert_id}`;
  const response = fetch(url, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if (response.ok) {
    const concert = await response.json();
    return concert;
  } else {
    throw new Error('concert not deleted')
  }
}
