import * as API from './apiCalls';

describe('API', () => {

  describe('GET', () => {
    //GET all venues
    it('/api/v1/venues should return all venues', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          },
          ok: true
        });
      });

      const expected = 'https://byob-concerts.herokuapp.com/api/v1/venues';

      await API.fetchAllVenues();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('/api/v1/venues should throw an error if venues not fetched', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('venues not fetched');

      expect(API.fetchAllVenues()).rejects.toEqual(expected);
    })

    //GET all concerts
    it('/api/v1/concerts should return all concerts', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          },
          ok: true
        });
      });

      const expected = 'https://byob-concerts.herokuapp.com/api/v1/concerts';

      await API.fetchAllConcerts();
      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('/api/v1/concerts should throw an error if concerts not fetched', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('concerts not fetched');

      expect(API.fetchAllConcerts()).rejects.toEqual(expected);

    })

    //GET a specific venue by id
    it('/api/v1/venues/:venue_id should return a specific venue by id', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          },
          ok: true
        });
      });


      const expected = 'https://byob-concerts.herokuapp.com/api/v1/venues/1';

      await API.fetchVenue(1);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('/api/v1/venues/:venue_id should throw an error if specific venue not fetched', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('venue not fetched');

      expect(API.fetchVenue(1)).rejects.toEqual(expected);
    })

    //GET a specific concert by id 
    it('/api/v1/concerts/:concert_id should return a specific concert by id', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          },
          ok: true
        });
      });

      const expected = 'https://byob-concerts.herokuapp.com/api/v1/concerts/1';

      await API.fetchConcert(1);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('/api/v1/concerts/:concert_id should throw an error if specific concert not fetched', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('concert not fetched');

      expect(API.fetchConcert(1)).rejects.toEqual(expected);
    })

    //GET all concerts in a specific venue  
    it('/api/v1/concerts?venue=venue_id should return all concerts in a specific venue ', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          },
          ok: true
        });
      });

      const expected = 'https://byob-concerts.herokuapp.com/api/v1/concerts?venue=1';

      await API.fetchConcertsByVenue(1);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('/api/v1/concerts?venue=venue_id should throw an error if concerts not fetched', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('Concerts by venue not fetched');

      expect(API.fetchConcertsByVenue(1)).rejects.toEqual(expected);
    })

  })

  describe('POST', () => {
    //POST a new venue 
    it('/api/v1/venues should create a new venue', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          },
          ok: true
        });
      });

      const expected = 'https://byob-concerts.herokuapp.com/api/v1/venues';

      await API.postVenue({});
      expect(window.fetch).toHaveBeenCalledWith(expected, { "body": "{}", "headers": { "Content-Type": "application/json" }, "method": "POST" });

    })

    it('/api/v1/venues should return an error if venue not posted', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('venue not posted');

      expect(API.postVenue({})).rejects.toEqual(expected);
    })

    //POST a new concert
    it('/api/v1/concerts should create a new concert', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          },
          ok: true
        });
      });


      const expected = 'https://byob-concerts.herokuapp.com/api/v1/venues/1/concerts';

      await API.postConcert({}, 1);
      expect(window.fetch).toHaveBeenCalledWith(expected, { "body": "{}", "headers": { "Content-Type": "application/json" }, "method": "POST" });

    })

    it('/api/v1/concerts should return an error if concert not posted', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('concert not posted');

      expect(API.postConcert({})).rejects.toEqual(expected);
    })

  })

  describe('PUT', () => {
    //UPDATE (PUT) a venue
    it('/api/v1/venues/:venue_id should update specific venue data', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          },
          ok: true
        });
      });


      const expected = 'https://byob-concerts.herokuapp.com/api/v1/venues/1';

      await API.updateVenue({ id: 1 });
      expect(window.fetch).toHaveBeenCalledWith(expected, { "body": "{\"id\":1}", "headers": { "Content-Type": "application/json" }, "method": "PUT" });
    })

    it('/api/v1/venues/:venue_id should throw an error if venue not updated', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('venue not posted');

      expect(API.updateVenue({})).rejects.toEqual(expected);
    })

    //UPDATE (PUT) a concert
    it('/api/v1/concerts/:concert_id should update specific concert data', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          },
          ok: true
        });
      });


      const expected = 'https://byob-concerts.herokuapp.com/api/v1/concerts/1';

      await API.updateConcert({ id: 1 });
      expect(window.fetch).toHaveBeenCalledWith(expected, { "body": "{\"id\":1}", "headers": { "Content-Type": "application/json" }, "method": "PUT" });

    })

    it('/api/v1/concerts/:concert_id should throw an error if concert not updated', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('concert not posted');

      expect(API.updateConcert({})).rejects.toEqual(expected);
    })

  })

  describe('DELETE', () => {
    //DELETE a venue
    it('/api/v1/venues/:venue_id should delete a venue', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          },
          ok: true
        });
      });

      const expected = 10;

      await API.deleteVenue(10);
      expect(window.fetch).toHaveBeenCalledWith(expected);
    })

    it('/api/v1/venues/:venue_id should throw an error if venue not deleted', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('venue not deleted');

      expect(API.deleteVenue({})).rejects.toEqual(expected);
    })

    //DELETE a concert
    it('/api/v1/concerts/:concert_id should delete a concert', async () => {
      window.fetch = jest.fn().mockImplementation(() => {
        return Promise.resolve({
          json: () => {
            return Promise.resolve();
          },
          ok: true
        });
      });

      const expected = 10;

      await API.deleteConcert(10);
      expect(window.fetch).toHaveBeenCalledWith(expected);

    })

    it('/api/v1/concerts/:concert_id should throw an error if concert not deleted', () => {
      window.fetch = () => Promise.resolve({ ok: false });

      const expected = Error('concert not deleted');

      expect(API.deleteConcert({})).rejects.toEqual(expected);
    })

  })
})
