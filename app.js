const celsiusEl = document.getElementById("celcius");
const FahrenheitEl = document.getElementById("fahrenheit");
const kelvinEl = document.getElementById("kelvin");

function computeTemp() {
  const currentValue = +event.target.value;

  switch (event.target.name) {
    case "celcius":
      kelvinEl.value = currentValue + 273.15;
      FahrenheitEl.value = currentValue * 1.8 + 32;
      break;
    case "fahrenheit":
      celsiusEl.value = (currentValue - 32) / 1.8;
      kelvinEl.value = (currentValue -32) / 1.8 + 273.15;
      break;
    case "kelvin":
      celsiusEl.value = currentValue - 273.15;
      FahrenheitEl.value = (currentValue - 273.15) * 1.8 + 32;
      break;

    default:
      break;
  }
}