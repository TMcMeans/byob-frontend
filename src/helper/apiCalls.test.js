import * as API from './apiCalls';

describe('API', () => {

  describe('GET', () => {
    //GET all venues
    it('/api/v1/venues should return all venues', () => {

    })

    it('/api/v1/venues should throw an error if venues not fetched', () => {

    })

    //GET all concerts
    it('/api/v1/concerts should return all concerts', () => {

    })

    it('/api/v1/concerts should throw an error if concerts not fetched', () => {

    })

    //GET a specific venue by id
    it('/api/v1/venues/:venue_id should return a specific venue by id', () => {

    })

    it('/api/v1/venues/:venue_id should throw an error if specific venue not fetched', () => {

    })

    //GET a specific concert by id 
    it('/api/v1/concerts/:concert_id should return a specific concert by id', () => {

    })

    it('/api/v1/concerts/:concert_id should throw an error if specific concert not fetched', () => {

    })

    //GET all concerts in a specific venue  
    it('/api/v1/concerts?venue=venue_id should return all concerts in a specific venue ', () => {

    })

    it('/api/v1/concerts?venue=venue_id should throw an error if concerts not fetched', () => {

    })

  })

  describe('POST', () => {
    //POST a new venue 
    it('/api/v1/venues should create a new venue', () => {

    })

    it('/api/v1/venues should return an error if venue not posted', () => {

    })

    //POST a new concert
    it('/api/v1/concerts should create a new concert', () => {

    })

    it('/api/v1/concerts should return an error if concert not posted', () => {

    })

  })

  describe('PUT', () => {
    //UPDATE (PUT) a venue
    it('/api/v1/venues/:venue_id should update  specific venue data', () => {

    })

    it('/api/v1/venues/:venue_id should throw an error if venue not updated', () => {

    })

    //UPDATE (PUT) a concert
    it('/api/v1/concerts/:concert_id should update specific concert data', () => {

    })

    it('/api/v1/concerts/:concert_id should throw an error if concert not updated', () => {

    })

  })

  describe('DELETE', () => {
    //DELETE a venue
    it('/api/v1/venues/:venue_id should delete a venue', () => {

    })

    it('/api/v1/venues/:venue_id should throw an error if venue not deleted', () => {

    })

    //DELETE a concert
    it('/api/v1/concerts/:concert_id should delete a concert', () => {

    })

    it('/api/v1/concerts/:concert_id should throw an error if concert not deleted', () => {

    })

  })
})
