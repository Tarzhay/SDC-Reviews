# SDC Reviews - CRUD APIs

### Add a review for a product <br />
`POST` /api/reviews/:id

**Path Parameters**<br />
`id` Product ID

`Default Response`: 201 CREATED<br />
`Request Body`: Expects JSON<br />
```json
    {
      "productId": 1,
      "username": "Whale, baleen",
      "productName": "Settlers of Gadol",
      "reviewTitle": "Aliquam qu",
      "reviewText": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
      "reviewDate": "2019-09-06T07:00:00.000Z",
      "broadAgeAppeal": 2,
      "lengthOfPlay": 2,
      "quality": 2,
      "value": 2,
      "average": 2,
      "wouldRecommend": 1,
      "verified": 1
    }
  ```

`Unable to post review`: 400 BAD REQUEST

### Get review data for product <br />
`GET` /api/reviews/:id

**Path Parameters**<br />
`id` Product ID

`Default Response`: 200 OK<br />
`RETURNS`<br />
```json
    {
      "productId": 1,
      "productName": "Settlers of Gadol",
      "reviewTitle": "Integer al",
      "reviewText": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
      "reviewDate": "2019-09-16T07:00:00.000Z",
      "broadAgeAppeal": 5,
      "lengthOfPlay": 1,
      "quality": 2,
      "value": 1,
      "average": 2.25,
      "wouldRecommend": null,
      "verified": 1
    }
```

`Unable to Retreive Reviews`: 400 BAD REQUEST

### Update a review for a product <br />
`PATCH` /api/reviews/:id/:id

**Path Parameters**<br />
`id` Product ID<br />
`id` Review ID

`Default Response`: 200 OK<br />
`Request Body` Expects JSON with any of the following keys<br />
```json
    {
      "productId": 1,
      "productName": "Settlers of Gadol",
      "reviewTitle": "Integer al",
      "reviewText": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
      "reviewDate": "2019-09-16T07:00:00.000Z",
      "broadAgeAppeal": 5,
      "lengthOfPlay": 1,
      "quality": 2,
      "value": 1,
      "average": 2.25,
      "wouldRecommend": null,
      "verified": 1
    }
```


`Unable to update review`: 400 BAD REQUEST

### Delete a review for a product <br />
  `DELETE` /api/reviews/:id/:id

**Path Parameters**<br />
`id` Product ID<br />
`id` Review ID<br />

`Default Response`: 200 OK<br />
`Request Body` Expects JSON with the following two keys<br />
```json
    {
      "id": 6,
      "productId": 1,
    }
```


`Unable to delete review`: 400 BAD REQUEST
