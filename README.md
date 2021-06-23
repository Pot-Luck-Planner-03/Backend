# POTLUCK BACKEND :)

##  https://potluck-planner-03.herokuapp.com/



### ----------------  ENDPOINTS  -------------------- 

### [POST] /api/auth/register  -- creates a new user

<details>
    <summary>WHAT TO SEND </summary>

```JSON
{
    "username": "string",
    "password": "string"
}
```
</details>

<details>
    <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "username": "string",
    "user_id": "integer"
}
```
</details>


### [POST] /api/auth/login  -- logs in an existing user
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "username": "string",
    "password": "string"
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "message": "Welcome back username",
    "user_id": "integer",
    "username": "username",
    "token": "TOKEN"
}
```
</details>

### [GET] /api/users  -- gets list of users

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
[
    {
        "user_id": 1,
        "username": "RZA"
    },
    {
        "user_id": 2,
        "username": "GZA"
    },
    {
        "user_id": 3,
        "username": "ODB"
    }
]
```
</details>

### [GET] /api/users/:id  -- gets user by ID

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "user_id": 1,
    "username": "RZA"
}
```
</details>

### [PUT] /api/users/:id  -- edit existing user
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "username": "string",
    "password": "string"
}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "user_id": 1,
    "username": "RZA"
}
```
</details>

### [GET] /api/potlucks  -- get an array of potlucks

<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
[
    {
        "potluck_id": 1,
        "potluck_name": "Tasty Foodz Partay",
        "organizer": 3,
        "potluck_description": "bring the tastiest food pls.  NO BAD FOOD",
        "potluck_date": "2021-07-15T06:00:00.000Z",
        "potluck_time": "06:00:00",
        "potluck_location": "1403 Park Ave, Long Beach CA"
    },
    {
        "potluck_id": 2,
        "potluck_name": "Yum Yum Food Time",
        "organizer": 1,
        "potluck_description": "yumyumyumyumyumyumyum",
        "potluck_date": "2021-08-20T06:00:00.000Z",
        "potluck_time": "05:00:00",
        "potluck_location": "1111 E 2222 S, SLC UT"
    },
    {
        "potluck_id": 3,
        "potluck_name": "MM..FOOD",
        "organizer": 5,
        "potluck_description": "got more cheese than doritos, cheetos, or fritos",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "45 S 5th Ave, New York NY"
    }
]
```
</details>

### [GET] /api/potlucks/:id  -- gets potluck by ID

<details>
     <summary>WHAT YOU GET BACK</summary>

```JSON
{
    "potluck_id": 3,
    "potluck_name": "MM..FOOD",
    "details": {
        "organizer": "Raekwon",
        "potluck_description": "got more cheese than doritos, cheetos, or fritos",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "45 S 5th Ave, New York NY"
    }
}
```
</details>

### [POST] /api/potlucks  -- creates a new potluck
<details>
    <summary> WHAT TO SEND </summary>

```JSON
{
    "potluck_name": "string",
    "potluck_description": "optional string",
    "potluck_date": "2021-07-28  must be this format",
    "potluck_time": "12:00:00 must be this format",
    "potluck_location": "string",
    "organizer": "integer"

}
```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>

```JSON
{
    "potluck_id": 3,
    "potluck_name": "MM..FOOD",
    "details": {
        "organizer": "Raekwon",
        "potluck_description": "got more cheese than doritos, cheetos, or fritos",
        "potluck_date": "2021-07-28T06:00:00.000Z",
        "potluck_time": "07:30:00",
        "potluck_location": "45 S 5th Ave, New York NY"
    }
}
```
</details>