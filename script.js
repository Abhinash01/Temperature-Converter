const input = document.getElementById("tempInput");
const select = document.getElementById("unitSelect");
const result = document.getElementById("resultDisplay");
const button = document.getElementById("convertBtn");

button.addEventListener("click", () => {
  const temp = parseFloat(input.value);
  const conversionType = select.value;

  if (isNaN(temp)) {
    result.textContent = "Please enter a valid number.";
    return;
  }

  if (conversionType === "CtoF") {
    const fahrenheit = (temp * 9/5) + 32;
    result.textContent = `${temp}°C = ${fahrenheit.toFixed(2)}°F`;
  } else {
    const celsius = (temp - 32) * 5/9;
    result.textContent = `${temp}°F = ${celsius.toFixed(2)}°C`;
  }
});
