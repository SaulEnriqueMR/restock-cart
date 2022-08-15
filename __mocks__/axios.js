'use strict';

module.exports = {
  get: () => {
    return Promise.resolve({
      data: {
        "data": [
          {
            "id": 1,
            "attributes": {
              "name": "Apples",
              "country": "Italy",
              "cost": 3,
              "instock": 10,
              "createdAt": "2022-08-09T20:25:27.852Z",
              "updatedAt": "2022-08-09T20:35:37.039Z",
              "publishedAt": "2022-08-09T20:35:37.036Z"
            }
          },
          {
            "id": 2,
            "attributes": {
              "name": "Oranges",
              "country": "Spain",
              "cost": 4,
              "instock": 3,
              "createdAt": "2022-08-09T20:25:57.911Z",
              "updatedAt": "2022-08-09T20:35:48.691Z",
              "publishedAt": "2022-08-09T20:35:48.689Z"
            }
          },
          {
            "id": 3,
            "attributes": {
              "name": "Beans",
              "country": "USA",
              "cost": 2,
              "instock": 8,
              "createdAt": "2022-08-09T20:26:28.563Z",
              "updatedAt": "2022-08-09T20:35:41.166Z",
              "publishedAt": "2022-08-09T20:35:41.164Z"
            }
          },
          {
            "id": 4,
            "attributes": {
              "name": "Cabbage",
              "country": "USA",
              "cost": 1,
              "instock": 8,
              "createdAt": "2022-08-09T20:26:49.801Z",
              "updatedAt": "2022-08-09T20:35:44.458Z",
              "publishedAt": "2022-08-09T20:35:44.457Z"
            }
          }
        ],
        "meta": {
          "pagination": {
            "page": 1,
            "pageSize": 25,
            "pageCount": 1,
            "total": 4
          }
        }
      }
    });
  }
};
