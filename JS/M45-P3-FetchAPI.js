fetch('https://api.spacexdata.com/v4/launches/latest')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})

/*Fetch Data:

fetch('https://api.spacexdata.com/v4/launches/latest'): This line initiates an HTTP GET request to the SpaceX API to retrieve information about the latest launch.

Handle the Response:

.then((response) => { return response.json() }): Once the data is fetched, this line processes the response. It takes the HTTP response, and converts it into JSON format using the .json() method.

Process and Log the Data:

.then((data) => { console.log(data); }): After the response is converted to JSON, this line logs the data to the console. */
/*async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const data = await response.json(); // Parse the JSON from the response
    console.log(data); // Handle the data
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

fetchData();
 */