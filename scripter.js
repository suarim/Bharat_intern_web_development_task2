function convertTemperature() {
    
    let temperature = parseFloat(document.getElementById("temperature").value);

    
    let unit = document.getElementById("unit").value;

    
    if (!isNaN(temperature)) {
        
        if (unit === "celsius") {
            
            let fahrenheit = (temperature * 9/5) + 32;

            
            document.getElementById("converted-temperature").textContent = fahrenheit.toFixed(2);
            document.getElementById("result-unit").textContent = "°F";
        } else if (unit === "fahrenheit") {
            
            let celsius = (temperature - 32) * 5/9;


            document.getElementById("converted-temperature").textContent = celsius.toFixed(2);
            document.getElementById("result-unit").textContent = "°C";
        }
        else if (unit === "kelvin") {
            
            let k = temperature - 273.15;

            document.getElementById("converted-temperature").textContent = k.toFixed(2);
            document.getElementById("result-unit").textContent = "°C";
        }
        else if (unit === "ck") {
            
            let y = temperature + 273.15;

            
            document.getElementById("converted-temperature").textContent = y.toFixed(2);
            document.getElementById("result-unit").textContent = "K";
        }
        else if (unit === "kf") {
            
            let z = (temperature - 273.15) * 9/5 + 32.
            
            document.getElementById("converted-temperature").textContent = z.toFixed(2);
            document.getElementById("result-unit").textContent = "°F";
        }
        else if (unit === "fk") {
            
            let p =  (temperature - 32) * 5 / 9 + 273.15
            
            document.getElementById("converted-temperature").textContent = p.toFixed(2);
            document.getElementById("result-unit").textContent = "K";
        }


    } else {
        // If the input is not a valid number, display an error message
        document.getElementById("converted-temperature").textContent = "Please Enter a Valid Temperature";
        document.getElementById("result-unit").textContent = "";
    }
}
