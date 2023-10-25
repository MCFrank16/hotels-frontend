import {  RequestHandler } from '@/utils/RequestHandler';

const endpoint: string = 'https://6537fd16a543859d1bb11bd3.mockapi.io/api/v1';

/**
 * Retrieves a list of rooms from the mockapi.io endpoint.
 */

const getAllRooms = (query: string) => {
    return RequestHandler({
        url: `${endpoint}/rooms?${query}`,
        method: 'GET'
    })
}

/**
 * Retrieves a single room from the mockapi.io endpoint.
 */

const getSingleRoom = (id: string) => {
    return RequestHandler({
        url: `${endpoint}/rooms/${id}`,
        method: 'GET'
    })
}

export {
    getAllRooms,
    getSingleRoom
}
