<img src="https://res.cloudinary.com/devsec/image/upload/v1600296145/jake-blucker-tMzCrBkM99Y-unsplash_t4fxdy.jpg" alt="jake blucker photo" >

## Cars backend (practice)

This is a practice backend for Web35 forms practice project for review of the weeks concepts. Database does not have any validation except what is listed below.

### Installation

- React -> Use the new Lambda-React app, in terminal: `npx lambda-react app-name`
- Backend -> No installation is necessary, the server has been deployed on Heroku.
- If you would like to clone and deploy this backend, you will need a dotenv file that contains:
  - PORT=????
  - MONGO_URI=??????

### Tech

Stack

- NodeJs
- ExpressJs
- MongoDB
- Heroku

Dependencies

- express
- mongoose
- helmet
- morgan
- cors
- colors

Dev-dependencies

- nodemon

### URL and end points

Root URL: [https://cars-be-practice.herokuapp.com/](https://cars-be-practice.herokuapp.com/)

| HTTP method | end point       |
| ----------: | :-------------- |
|         GET | `/api/cars/`    |
|         GET | `/api/cars/:id` |
|        POST | `/api/cars/`    |

### GET

The GET method returns the following object:

```js
{
 {
  "_id": "5f6284499b888c3ec5b3c31b",
  "vin": "1234567891234567890",
  "make": "hyundai",
  "model": "santa fe",
  "year": 2018,
  "color": "blue",
  "mileage": 43567,
  "wrecked": false,
  "autoTrans": true,
  "doors": 4,
  "createdAt": "2020-09-16T21:31:53.565Z",
  "updatedAt": "2020-09-16T21:31:53.565Z",
  "__v": 0
}
}

```

### POST

The POST method requires the following object:

```js
{
	{
	"vin":"1234567891234567890",
	"make": "hyundai",
	"model": "santa fe",
	"year": 2018,
	"color": "blue",
	"mileage": 43567,
	"wrecked": false,
	"autoTrans": true,
	"doors": 4
}
}
```

### Query the api

Use the key such that `/api/cars?color=red` to return on vehicles with color red, chain them together such as `/api/cars?color=red&autoTrans=false`

| key         | value                  |
| :---------- | :--------------------- |
| `vin`       | vehicle id number      |
| `make`      | manufacturer           |
| `model`     | car model              |
| `year`      | manugacture year       |
| `color`     | car color              |
| `mileage`   | car mileage            |
| `wrecked`   | wrecked title          |
| `autoTrans` | automatic transmission |
| `doors`     | car door number        |

### POST key:value

| key         | value                  | type    | required | unique |
| :---------- | :--------------------- | :------ | :------- | :----- |
| `vin`       | vehicle id number      | string  | true     | true   |
| `make`      | manufacturer           | string  | true     | false  |
| `model`     | car model              | string  | true     | false  |
| `year`      | manugacture year       | number  | true     | false  |
| `color`     | car color              | string  | false    | false  |
| `mileage`   | car mileage            | number  | false    | false  |
| `wrecked`   | wrecked title          | boolean | false    | false  |
| `autoTrans` | automatic transmission | boolean | false    | false  |
| `doors`     | car door number        | numbers | false    | false  |

Author info: `npx mrzacsmith`
