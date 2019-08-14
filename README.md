# _ShortLink_

Bitly like project, made for a 6 months internship  to learn :
- Django Rest Framework
- ReactJS & Redux 
- JSON Web Token

## How to use
###### For a DEBUG / DEV use

First create a postgreSQL Database with the name / username & password of your choosing.

Then you will need to create a ".env" file in the project root :

```dotenv
SECRET_KEY = your_secret_key

POSTGRES_USER=db_user
POSTGRES_PASSWORD=db_password
POSTGRES_DB=db_name
```


Once its done, install the requirements.txt (following command should work)
```commandline
pip install -r requirements.txt
```

After that, you can run the server with those commands 
```commandline
./backend/manage.py migrate
./backend/manage.py runserver
```

See the README.md in the frontend directory for React

## Actual progression:
#### ToDo List:
- Refresh Token logic
- User Registration
- CSS
- Tests
- Use Docker

#### Done:
- Shorten link
- Login / Logout
- Bind link to users (when they shorten them)
- Redirect after login / logout
- Basic error message for shorten link & login
- Redirect to the full link
- Add redirect count

#### Partially Done:
- User 'account' (to see shorten link, redirect count)
    - Backend send all user's links
    - Unable to display it on the frontend