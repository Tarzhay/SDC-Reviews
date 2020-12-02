# SDC Reviews - CRUD APIs

**CREATE** <br />
  `POST` /api/reviews/:id

  `Parameters`
    productId - integer
    username - string
    productName - string
    reviewTitle - string
    reviewText - string
    reviewDate - date
    broadAgeAppeal - integer
    lengthOfPlay - integer
    quality - integer
    value - integer
    average - decimal
    wouldRecommend - integer
    verified - integer

  `Default Response`: 201 CREATED

    `[
      {
        "id": 1,
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
    ]`

   `Unable to post review`: 400 BAD REQUEST

**READ** <br />
  `GET` /api/reviews/:id

  `Parameters`
    productId - integer

  `Default Response`: 200 OK

    `[
      {
        "id": 6,
        "productId": 1,
        "username": "Cobra (unidentified)",
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
    ]`

  `Unable to Retreive Reviews`: 400 BAD REQUEST

**UPDATE** <br />
  `PATCH` /api/reviews/:id/:id

  `Parameters`
    id - integer
    productId - integer
    username - string
    reviewTitle - string
    reviewText - string
    broadAgeAppeal - integer
    lengthOfPlay - integer
    quality - integer
    value - integer
    average - decimal
    wouldRecommend - integer

    `Default Response`: 200 OK

    `[
      {
        "id": 6,
        "productId": 1,
        "username": "Cobra (unidentified)",
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
    ]`

  `Unable to update review`: 400 BAD REQUEST

**DELETE** <br />
  `DELETE` /api/reviews/:id/:id

  `Parameters`
      id - integer,
      productId - integer

  `Default Response`: 200 OK

    `[
      {
        "id": 6,
        "productId": 1,
        "username": "Cobra (unidentified)",
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
    ]`

  `Unable to delete review`: 400 BAD REQUEST
