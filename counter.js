// initial value

let count = 0;

// select value and buttons

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

console.log(buttons);

buttons.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("ten") && styles.contains("decrease")) {
      count -= 10;
    } else if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("ten") && styles.contains("increase")) {
      count += 10;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }

    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }

    if (count === 666) {
      value.style.color = "white";
      value.style.backgroundColor = "red";
    } else {
      value.style.backgroundColor = "";
    }

    value.textContent = count;
    console.log(e.currentTarget.classList);
  });
});
