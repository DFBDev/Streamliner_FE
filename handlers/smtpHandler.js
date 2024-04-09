//Version 1.0.0
let form2 = document.getElementById("form2");
let altValidText = document.createTextNode("Email has been sent!");

form2.addEventListener("submit", async (event2) => {
    event2.preventDefault();

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
    const data2 = new URLSearchParams(new FormData(form2));
    const res2 = await fetch('http://localhost:8080/smtp', {method:"POST", body: data2})
    
    //Text appendment & coloring dependant on server status code response.
    res2.status == 204 ? resIndicator.appendChild(altValidText) : resIndicator.appendChild(altInvalidText);
    res2.status == 204 ? resIndicator.style.color = 'Green' : resIndicator.style.color = 'Red';
})