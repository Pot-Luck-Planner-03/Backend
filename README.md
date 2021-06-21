# POTLUCK BACKEND :)

## https://git.heroku.com/potluck-planner-03.git


### ----------------  ENDPOINTS  -------------------- 

### [POST] /register  -- creates a new user
<details>
    <summary> WHAT TO SEND </summary>
    ```
    {
        "username": "string",
        "password": "string"
    }
    ```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>
    ```
    {
        "username": "string",
        "user_id": "integer"
    }
    ```
</details>


### [POST] /login  -- logs in an existing user
<details>
    <summary> WHAT TO SEND </summary>
    ```
    {
        "username": "string",
        "password": "string"
    }
    ```
</details>
<details>
    <summary> WHAT YOU GET BACK </summary>
    ```
    {
        "message": "Welcome back username",
        "user_id": integer,
        "username": "username",
        "token": "TOKEN"
    }
    ```
</details>

