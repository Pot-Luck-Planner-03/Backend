# POTLUCK BACKEND :)

##  https://potluck-planner-03.herokuapp.com/



### ----------------  ENDPOINTS  -------------------- 

### [POST] /api/auth/register  -- creates a new user
<details>
    <summary> WHAT TO SEND </summary>
    `
    {
        "username": "string",
        "password": "string"
    }
    `
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>
    `
    {
        "username": "string",
        "user_id": "integer"
    }
    `
</details>


### [POST] /api/auth/login  -- logs in an existing user
<details>
    <summary> WHAT TO SEND </summary>
    `
    {
        "username": "string",
        "password": "string"
    }
    `
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>
    `
    {
        "message": "Welcome back username",
        "user_id": integer,
        "username": "username",
        "token": "TOKEN"
    }
    `
</details>

### [GET] /api/users  -- gets list of users

<details>
    <summary> WHAT YOU GET BACK </summary>
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

