// var video = document.getElementById("cameraStream");
// var canvas = document.getElementById("photoCanvas");
// var fvideo = document.getElementById("fcameraStream");
// var fcanvas = document.getElementById("fphotoCanvas");
// var context = canvas.getContext("2d");
// var cameraStream;
// var fcameraStream;
// Variables Values
let footRadio = "";
let alcoholRadio = "";
let spouseRadio;
let genderRadio = "";
let regEmailValue = "";
let fnameValue = "";
let mnameValue = "";
let lnameValue = "";
let dobirthValue = "";
let nationalityValue = "";
let countryValue = "";
let passNumValue = "";
let datePassValue = "";
let exPassValue = "";
let cityValue = "";
let mobileValue = "";
let dietaryValue = "";
let sizeValue = "";

let ffootRadio = "";
let falcoholRadio = "";
let fspouseRadio;
let fgenderRadio = "";
let fregEmailValue = "";
let ffnameValue = "";
let fmnameValue = "";
let flnameValue = "";
let fdobirthValue = "";
let fnationalityValue = "";
let fcountryValue = "";
let fpassNumValue = "";
let fdatePassValue = "";
let fexPassValue = "";
let fcityValue = "";
let fmobileValue = "";
let fdietaryValue = "";
let fsizeValue = "";
const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

let email = "";
// function setEmailVaue(event) {
//   console.log(event.target.value);
// }
let thankYou = document.getElementById("thankYou");
let exportSec = document.getElementById("exportSec");
// login Fields
let loginSection = document.getElementById("login");
let emailError = document.getElementById("emailError");
let invalidEmail = document.getElementById("invalidEmail");
let loginEmail = document.getElementById("email");
// Registration fields
let regSection = document.getElementById("register");

let fname = document.getElementById("fname");
let mname = document.getElementById("mname");
let lname = document.getElementById("lname");
let dobirth = document.getElementById("dobirth");
let nationality = document.getElementById("nationality");
let country = document.getElementById("country");
let passNum = document.getElementById("passNum");
let datePass = document.getElementById("datePass");
let exPass = document.getElementById("exPass");
let city = document.getElementById("city");
let mobile = document.getElementById("mobile");
let eaddress = document.getElementById("eaddress");
let dietary = document.getElementById("dietary");
let size = document.getElementById("size");
let male = document.getElementById("male");
let female = document.getElementById("female");
let yes = document.getElementById("yes");
let no = document.getElementById("no");
let veg = document.getElementById("veg");
let nonveg = document.getElementById("nonveg");
let spouseYes = document.getElementById("spouseYes");
let spouseNo = document.getElementById("spouseNo");
document.addEventListener("DOMContentLoaded", function () {
  loginEmail.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
      emailError.style.display = "block";
    } else if (!regex.test(this.value)) {
      emailError.style.display = "none";
      invalidEmail.style.display = "block";
    } else {
      console.log("true");
      invalidEmail.style.display = "none";
      emailError.style.display = "none";
      email = this.value;
    }
  });
  //   Registraion Fields
  eaddress.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
      emailError.style.display = "block";
    } else if (!regex.test(this.value)) {
      emailError.style.display = "none";
      invalidEmail.style.display = "block";
    } else {
      invalidEmail.style.display = "none";
      emailError.style.display = "none";
      regEmailValue = this.value;
    }
  });
  fname.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      fnameValue = this.value;
    }
  });
  mname.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      mnameValue = this.value;
    }
  });
  lname.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      lnameValue = this.value;
    }
  });
  dobirth.addEventListener("input", function () {
    console.log(this.value + " Date of birth");
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      dobirthValue = this.value;
    }
  });
  nationality.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      nationalityValue = this.value;
    }
  });
  country.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      countryValue = this.value;
    }
  });
  passNum.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      passNumValue = this.value;
    }
  });
  datePass.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      datePassValue = this.value;
    }
  });
  exPass.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      exPassValue = this.value;
    }
  });
  city.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      cityValue = this.value;
    }
  });
  mobile.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      mobileValue = this.value;
    }
  });
  dietary.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      dietaryValue = this.value;
    }
  });
  size.addEventListener("input", function () {
    // console.log(this.value);
    if (this.value == "") {
      invalidEmail.style.display = "none";
    } else {
      invalidEmail.style.display = "none";
      sizeValue = this.value;
    }
  });
});
// /////////////////////// fEMALE

let ffname = document.getElementById("ffname");
let fmname = document.getElementById("fmname");
let flname = document.getElementById("flname");
let fdobirth = document.getElementById("fdobirth");
let fnationality = document.getElementById("fnationality");
let fcountry = document.getElementById("fcountry");
let fpassNum = document.getElementById("fpassNum");
let fdatePass = document.getElementById("fdatePass");
let fexPass = document.getElementById("fexPass");
let fcity = document.getElementById("fcity");
let fmobile = document.getElementById("fmobile");
let feaddress = document.getElementById("feaddress");
let fdietary = document.getElementById("fdietary");
let fsize = document.getElementById("fsize");
let fmale = document.getElementById("fmale");
let ffemale = document.getElementById("ffemale");
let fyes = document.getElementById("fyes");
let fno = document.getElementById("fno");
let fveg = document.getElementById("fveg");
let fnonveg = document.getElementById("fnonveg");

//   Registraion Fields
feaddress.addEventListener("input", function () {
  // console.log(this.value);
  if (this.value == "") {
    invalidEmail.style.display = "none";
    emailError.style.display = "block";
  } else if (!regex.test(this.value)) {
    emailError.style.display = "none";
    invalidEmail.style.display = "block";
  } else {
    invalidEmail.style.display = "none";
    emailError.style.display = "none";
    fregEmailValue = this.value;
  }
});
ffname.addEventListener("input", function () {
  // console.log(this.value);
  if (this.value == "") {
    invalidEmail.style.display = "none";
  } else {
    invalidEmail.style.display = "none";
    ffnameValue = this.value;
  }
});
fmname.addEventListener("input", function () {
  // console.log(this.value);
  if (this.value == "") {
    invalidEmail.style.display = "none";
  } else {
    invalidEmail.style.display = "none";
    fmnameValue = this.value;
  }
});
flname.addEventListener("input", function () {
  // console.log(this.value);
  if (this.value == "") {
    invalidEmail.style.display = "none";
  } else {
    invalidEmail.style.display = "none";
    flnameValue = this.value;
  }
});
fdobirth.addEventListener("input", function () {
  if (this.value == "") {
  } else {
    fdobirthValue = this.value;
  }
});
fnationality.addEventListener("input", function () {
  // console.log(this.value);
  if (this.value == "") {
  } else {
    fnationalityValue = this.value;
  }
});
fcountry.addEventListener("input", function () {
  // console.log(this.value);
  if (this.value == "") {
  } else {
    fcountryValue = this.value;
  }
});
fpassNum.addEventListener("input", function () {
  // console.log(this.value);
  if (this.value == "") {
  } else {
    fpassNumValue = this.value;
  }
});
fdatePass.addEventListener("input", function () {
  // console.log(this.value);
  if (this.value != "") {
    fdatePassValue = this.value;
  } else {
  }
});
fexPass.addEventListener("input", function () {
  // console.log(this.value);
  if (this.value == "") {
  } else {
    fexPassValue = this.value;
  }
});
fcity.addEventListener("input", function () {
  // console.log(this.value);
  if (this.value == "") {
  } else {
    fcityValue = this.value;
  }
});
fmobile.addEventListener("input", function () {
  if (this.value == "") {
  } else {
    fmobileValue = this.value;
  }
});
fdietary.addEventListener("input", function () {
  if (this.value == "") {
  } else {
    fdietaryValue = this.value;
  }
});
fsize.addEventListener("input", function () {
  if (this.value == "") {
  } else {
    fsizeValue = this.value;
  }
});
let farrInputs = [
  feaddress,
  ffname,
  fmname,
  flname,
  fdobirth,
  fnationality,
  fcountry,
  fpassNum,
  fdatePass,
  fexPass,
  fcity,
  fmobile,
  fdietary,
  fsize,
];

let arrInputs = [
  eaddress,
  fname,
  mname,
  lname,
  dobirth,
  nationality,
  country,
  passNum,
  datePass,
  exPass,
  city,
  mobile,
  dietary,
  size,
];

function exportFile() {
  fetch("http://3.121.77.69/api/Form/DownloadExcel", {
    method: "GET",
    headers: {
      "Content-Type": "application/vnd.ms-excel",
    },
  })
    .then((response) => {
      // Create a blob object from the response
      return response.blob();
    })
    .then((blob) => {
      // Create a temporary URL for the blob object
      const url = URL.createObjectURL(blob);

      // Create a link element and click on it to trigger the download
      const link = document.createElement("a");
      link.href = url;
      link.download = "example.xlsx";
      link.click();

      // Clean up the temporary URL
      URL.revokeObjectURL(url);
    })
    .catch((error) => {
      console.error("Error downloading Excel sheet:", error);
    });
}
let sizesPopup = document.getElementById("sizesPopup");
function showSizesPopup() {
  sizesPopup.style.display = "flex";
  setTimeout(() => {
    sizesPopup.style.display = "none";
  }, 5000);
}
function showFemale() {
  document.getElementById("showFemale").style.display = "flex";
}
function hideFemale() {
  document.getElementById("showFemale").style.display = "none";
}


const emails = ["admin@admin.com", "admin@asdmin.com"];
 
// login btn
document.getElementById("submitBtn").addEventListener("click", (e) => {
  console.log(e);
  if (email != "") {
    if(email == "admin112345@admin12345.com"){
      loginSection.classList.add("fadeOut");
      regSection.style.display = "none";
      exportSec.classList.add("fadeIn");
    }
    else{
      fetch(`http://3.121.77.69/api/Form/CheckEmail?email=${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        if (response.ok) {
          loginSection.style.display = "none";
          thankYou.classList.add("fadeIn");
        } else {
          loginSection.style.display = "none";
          regSection.style.display = "flex";
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
    
    }
  } else {
    emailError.style.display = "block";
  }
});

let regForm = document.getElementById("regForm");

let maleValue = male.value;
let femaleValue = female.value;

let yesValue = yes.value;
let noValue = no.value;

let vegValue = veg.value;
let nonvegValue = nonveg.value;

let spouseInputValue = false;
let spuseyesValue = spouseYes.checked;
let spouseNoValue = spouseNo.checked;
function returnValues() {
  if (male.checked == false && female.checked == false) {
  } else if (male.checked == true && female.checked == false) {
    genderRadio = maleValue;
  } else {
    genderRadio = femaleValue;
  }

  // alcohol
  if (yes.checked == false && no.checked == false) {
  } else if (yes.checked == true && no.checked == false) {
    alcoholRadio = yesValue;
  } else {
    alcoholRadio = noValue;
  }

  // food
  if (veg.checked == false && nonveg.checked == false) {
  } else if (veg.checked == true && nonveg.checked == false) {
    footRadio = vegValue;
  } else {
    footRadio = nonvegValue;
  }
  // spouse
  if (spouseYes.checked == false && spouseNo.checked == false) {
  } else if (spouseYes.checked == true && spouseNo.checked == false) {
    spouseRadio = 'yes';
    spuseyesValue = true;
    spouseInputValue = true;
  } else {
    spouseRadio = "no";
    spouseNoValue = true;
    spouseInputValue = true;
    document.getElementById("showFemale").style.display = "none";
  }

  if (fmale.checked == false && ffemale.checked == false) {
  } else if (fmale.checked == true && ffemale.checked == false) {
    fgenderRadio = maleValue;
  } else {
    fgenderRadio = femaleValue;
  }

  // alcohol
  if (fyes.checked == false && fno.checked == false) {
  } else if (fyes.checked == true && fno.checked == false) {
    falcoholRadio = yesValue;
  } else {
    falcoholRadio = noValue;
  }

  // food
  if (fveg.checked == false && fnonveg.checked == false) {
  } else if (fveg.checked == true && fnonveg.checked == false) {
    ffootRadio = vegValue;
  } else {
    ffootRadio = nonvegValue;
  }
}

let file;

const formData = new FormData();
let pssPhoto = document.getElementById("pssPhoto");
function uploadPhoto() {
  var fileInput = document.getElementById("imageInput");
  console.log(fileInput);
  file = fileInput.files["0"];
  formData.append("PassportCopy", file);
  console.log(fileInput.files["0"]);
}
let ffile
function uploadFPhoto() {
  var fileInput = document.getElementById("fimageInput");
  console.log(fileInput);
  ffile = fileInput.files["0"];
  formData.append("SpousePassportCopy", file);
  console.log(fileInput.files["0"]);
}

function showPhoto() {
  pssPhoto.style.display = "flex";
  setTimeout(() => {
    pssPhoto.style.display = "none";
  }, 1000);
}
function takePhoto() {
  inputImage.click();
}
// register btn
document.getElementById("regSubmitBtn").addEventListener("click", (e) => {
  // gender
  returnValues();
  arrInputs.forEach((input) => {
    if (input.value == "") {
      input.style.borderColor = "red";
    }
  });

  console.log(spouseNoValue);
  if (spouseNoValue) {
    if (
      regEmailValue &&
      fnameValue &&
      mnameValue &&
      lnameValue &&
      dobirthValue &&
      nationalityValue &&
      countryValue &&
      passNumValue &&
      datePassValue &&
      exPassValue &&
      cityValue &&
      mobileValue &&
      dietaryValue &&
      sizeValue &&
      genderRadio &&
      alcoholRadio &&
      footRadio &&
      spouseInputValue&&
      file
    ) {
      if(spouseRadio == 'yes'){
        spuseyesValue = true;
        spouseInputValue = true;
        formData.append("isSpouse", true);
      } else if(spouseRadio == 'no') {
        spouseNoValue = true;
        spouseInputValue = true;
        document.getElementById("showFemale").style.display = "none";
        formData.append("isSpouse", false);
      }
      formData.append("MiddleName", mnameValue);
      formData.append("LastName", lnameValue);
      formData.append("Gender", genderRadio);
      formData.append("ExpiryDate", exPassValue);
      formData.append("TshirtSize", sizeValue);
      formData.append("DietaryRequirements", dietaryValue);
 
      formData.append("IssueDate", datePassValue);

      formData.append("MobileNumber", mobileValue);
      formData.append("Alcohol", alcoholRadio);

      formData.append("CountryResidence", countryValue);

      formData.append("DateOfBirth", dobirthValue);
      formData.append("FirstName", fnameValue);
      formData.append("PassportNumber", passNumValue);
      formData.append("Nationality", nationalityValue);
      formData.append("CityOfDeparture", cityValue);
      formData.append("Food", footRadio);
      // formData.append("isSpouse", spouseRadio);
      formData.append("Email", regEmailValue);
      console.log(formData);
      fetch("http://3.121.77.69/api/Form/submit", {
        method: "POST",
        body: formData,
      })
        .then(function (response) {
          if (response.ok) {
            regSection.classList.add("fadeOut");
            thankYou.classList.add("fadeIn");
          } else {
            console.log(response);
            alert("Invalid username or password!");
          }
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    } else {
      console.log(formData);

    }
  }
  let ffalag = false;
  let falag = false;
  if (spuseyesValue) {
    console.log("spauseYEs");
    farrInputs.forEach((input) => {
      console.log(input.value);

      if (input.value == "") {
        input.style.borderColor = "red";
        ffalag = false;
      }
      else{
        ffalag = true;
      }
    });
    farrInputs.forEach((input) => {
      console.log(input.value);
      if (input.value == "") {
        input.style.borderColor = "red";
      falag = false;
      }
      else{
        falag = true;
      }
    });
    
    if (ffalag && falag && file && ffile )
     {
      if(spouseRadio == "yes"){
        spuseyesValue = true;
        spouseInputValue = true;
        formData.append("isSpouse", true);
      } else if(spouseRadio == "no") {
        spouseNoValue = true;
        spouseInputValue = true;
        document.getElementById("showFemale").style.display = "none";
        formData.append("isSpouse", false);
      }
      formData.append("MiddleName", mnameValue);
      formData.append("LastName", lnameValue);
      formData.append("Gender", genderRadio);
      formData.append("ExpiryDate", exPassValue);
      formData.append("TshirtSize", sizeValue);
      formData.append("DietaryRequirements", dietaryValue);
      formData.append('SpouseCountryResidence', fcountryValue);
      formData.append('SpouseDateOfBirth', fdobirthValue);
      formData.append('SpouseFirstName', ffnameValue);
      formData.append("IssueDate", datePassValue);
      formData.append('SpouseEmail', fregEmailValue);
      formData.append('SpouseNationality', fnationalityValue);
      formData.append("MobileNumber", mobileValue);
      formData.append("Alcohol", alcoholRadio);
      formData.append('SpouseDietaryRequirements', fdietaryValue);
      formData.append('SpousePassportNumber', fpassNumValue);
      formData.append("CountryResidence", countryValue);
      formData.append('SpouseIssueDate', fdatePassValue);
      formData.append('SpouseFood', ffootRadio);
      formData.append('SpouseMiddleName', fmnameValue);
      formData.append('SpouseExpiryDate', fexPassValue);
      formData.append('SpouseLastName', flnameValue);
      formData.append('SpouseTshirtSize', fsizeValue);
      formData.append('SpouseAlcohol', falcoholRadio);
      formData.append("DateOfBirth", dobirthValue);
      formData.append("FirstName", fnameValue);
      formData.append("PassportNumber", passNumValue);
      formData.append("Nationality", nationalityValue);
      formData.append('SpouseCityOfDeparture', fcityValue);
      formData.append("CityOfDeparture", cityValue);
      formData.append("Food", footRadio);
      formData.append("SpouseGender", fgenderRadio);
      formData.append("SpouseMobileNumber", fmobileValue);
      
      formData.append("Email", regEmailValue);
     
      console.log(formData);
      fetch("http://3.121.77.69/api/Form/submit", {
        method: "POST",
        body: formData,
      })
        .then(function (response) {
          if (response.ok) {
            regSection.classList.add("fadeOut");
            thankYou.classList.add("fadeIn");
          } else {
            console.log(response);
            alert("Invalid username or password!");
          }
        })
        .catch(function (error) {
          console.error("Error:", error);
        });
    } else {
      console.log(formData);

      alert("Please enter");
    }
  }
});
