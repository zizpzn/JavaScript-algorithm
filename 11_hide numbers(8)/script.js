function hide_numbers(phone_number) {
  let result = "";

  for (let i = 0; i < phone_number.length; i++) {
    result += i < phone_number.length - 4 ? "*" : phone_number.charAt(i);
  }

  return result;
}

// function hide_numbers(phone_number) {
//   let result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);

//   return result;
// }
