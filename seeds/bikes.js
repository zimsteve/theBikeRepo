
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('bikes').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('bikes').insert({id: 1, name: 'Trek 5900', gears: '25-11', specs: 'The most awesomest road-bike in the world, EVER!', images: 'http://houston-bike-exchange.com/wp-content/uploads/2014/09/TREK-5900-USPS-full-OCLV110-carbon-full-Dura-Ace-52cm-Houston-Bike-Exchaange-11.jpg'}),
        knex('bikes').insert({id: 2, name: 'Giant TCR-3', gears: '25-11', specs: 'The most awesomest road-bike in the world, EVER!', images: 'https://wheeliesonline.files.wordpress.com/2012/04/full48796.jpg'}),
        knex('bikes').insert({id: 3, name: 'Merida Big-Nintey-Nine', gears: '25-11', specs: 'The most awesomest road-bike in the world, EVER!', images: 'https://chaddobbs.files.wordpress.com/2015/01/bikes-253.jpg'})
      ])
    })
}

  // knex('bikes').insert({id: 1, name: 'Trek 5900', gears: '25-11', specs: 'The most awesomest road-bike in the world, EVER!', images: ['http://houston-bike-exchange.com/wp-content/uploads/2014/09/TREK-5900-USPS-full-OCLV110-carbon-full-Dura-Ace-52cm-Houston-Bike-Exchaange-11.jpg', 'http://d2ydh70d4b5xgv.cloudfront.net/images/8/5/used-trek-5900-oclv-carbon-110-56cm-race-road-bike-great-condition-d7a301640c6cb8020b029efa17a26799.jpg', 'http://cdn.mos.bikeradar.imdserve.com/images/news/2012/06/25/1340632481455-10vehju0zbeg4-630-354.jpg', 'http://farm1.static.flickr.com/218/477588232_0bf22804d4_o.jpg', 'http://i.ebayimg.com/00/s/MTIwMFgxNjAw/z/l0IAAOSwMORW7a9H/$_1.JPG']}),
  //       knex('bikes').insert({id: 2, name: 'Giant TCR-3', gears: '25-11', specs: 'The most awesomest road-bike in the world, EVER!', images: ['https://wheeliesonline.files.wordpress.com/2012/04/full48796.jpg', 'http://i42.tinypic.com/2zfskg4.jpg']}),
  //       knex('bikes').insert({id: 3, name: 'Merida Big-Nintey-Nine', gears: '25-11', specs: 'The most awesomest road-bike in the world, EVER!', images: ['https://chaddobbs.files.wordpress.com/2015/01/bikes-253.jpg', 'http://onyourbikecycles.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/z/o/zoom-bike-picture-6aa65eeb8eec8a970c3dd3933c02e32f.jpg', 'http://d112e54l47d6r7.cloudfront.net//runtime/p3media/zoom-bike-picture-f5afc1df5325523ec50c13796dcf89f6.jpg', 'http://d112e54l47d6r7.cloudfront.net//runtime/p3media/scroller-image-cc3eb5a9d0c3808592d0f01031be60ab.jpg']})
