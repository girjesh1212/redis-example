# Redis Example
This contains a small example of redis to get started with it.

## How to start

- Clone the repository using "git clone"
- Run the command **npm install** in root directory of this project to install dependencies
- Start the server using the command **node server.js**


<br><br>

# Available routes
There are two routes available in this project.

## Base url 
http:localhost:5000

## GET /users/test 
This route is a test route to confirm everything is working.

### Response 
| Response code| Response Type | Example |
|:---------|:--------------|:--------|
| 200    |  Success | { msg: 'Test route works' }| 


<br><br><br>


## GET / 
This route fetches posts from open source API and send in response.

### Response 
| Response code| Response Type | Example |
|:---------|:--------------|:--------|
| 200    |  Success | List of posts | 
| 500    |  Error fetching database | { msg: 'Oops! Something broke on server side' } | 