// This is java Script practice for If Conditions, Switch

//If

const a = 2;
const b = 3;

if (a > b) {
    print("condition Satisfied");
}

else      //Else part is not Necessary
{
    print("Condition False");
}

//Nested If

if (a > b) {
    print("condition Satisfied");

    if (a < b) {
        print("condition Satisfied");
    }


    else      //Else part is not Necessary
    {
        print("Condition False");
    }
}

//multiple If

if (a > b) {
    print("condition Satisfied");
}
if (a < b) {
    print("condition Satisfied");
}


else      //Else part is not Necessary
{
    print("Condition False");
}

// If Else If

if (a > b) {
    print("condition Satisfied");
}
else if (a < b) {
    print("condition Satisfied");
}
else if (a==b)
{
    print("Both Numbers Are Equal")
}

else      //Else part is Necessary
{
    print("Condition False");
}


// Switch
let option = 2;
let result;

switch (option) {
  case 1:
    result = "Option 1 selected";
    break;
  case 2:
    result = "Option 2 selected";
    break;
  case 3:
    result = "Option 3 selected";
    break;
  default:
    result = "Invalid option";
}