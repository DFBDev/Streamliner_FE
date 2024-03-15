let form = document.getElementById("form");
let resIndicator = document.getElementById("resIndicator")
let validText = document.createTextNode("Data has been sent!");
let invalidText = document.createTextNode("Something went wrong!");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
    //Removing potential text from previous input.
    if (resIndicator.contains(validText)) {
        resIndicator.removeChild(validText);
    }
    else if (resIndicator.contains(invalidText)) {
        resIndicator.removeChild(invalidText);
    }
    else if (resIndicator.contains(altValidText)) {
        resIndicator.removeChild(altValidText);
    };
    
    //Routing form data to fetch method and performing post request.
    const data = new URLSearchParams(new FormData(form));
    const res = await fetch('http://localhost:8080/', {method:"POST", body: data})

    //Text appendment & coloring dependant on server status code response.
    res.status == 200 ? resIndicator.appendChild(validText) : resIndicator.appendChild(invalidText);
    res.status == 200 ? resIndicator.style.color = 'Green' : resIndicator.style.color = 'Red';
})