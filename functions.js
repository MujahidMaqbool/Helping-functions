//Helping functions to get user country related data
///get user country info, country code, currency etc.. 

function ipLookUp() {
    $.ajax('https://ipapi.co/json/')
        .then(
            function success(response) {
                console.log('User\'s Country', response);
                console.log('User\'s Country', response.country);
            },
            function fail(data, status) {
                console.log('Request failed.  Returned status of',
                    status);
            }
        );
}


/////***************Print user form data. Form submitted by Ajax */
//Create a test FormData object
var formData = new FormData();
formData.append('key1', 'value1');
formData.append('key2', 'value2');

// Display the values
for (var value of formData.values()) {
    console.log(value);
}

/////***************Print user form data Endddddddd */

///Phone number validation	
//called when key is pressed in textbox
$(document).ready(function () {
    $("#phoneNumberField").keypress(function (e) {
        //if the letter is not digit then prevent user from entering chracter value
        if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
            return false;
        }
    });
});

//////////End validation////////////////////


///****************** */https://intl-tel-input.com/********************** */
// /International telephone number
// <!--for country code picker-->
/* <script src="~/Scripts/intlTelInput.min.js"></script> */

//for country code number
var input = document.querySelector("#phone");
var dialcode = document.getElementById('CountryCode');
var iti = window.intlTelInput(input, {
    //autoHideDialCode: false,
    // nationalMode: true,
    //  hiddenInput: "CountryCode",
    preferredCountries: ["dk", "de", "us", "gb"],
    separateDialCode: true,
    initialCountry: "auto",
    geoIpLookup: function (callback) {
        $.get('https://ipapi.co/json/', function () { }, "json").always(function (resp) {
            var countryCode = (resp && resp.country) ? resp.country : "";
            callback(countryCode);
        })
    },
    utilsScript: '../../../../Scripts/utils.js'
});

var countryData = iti.getSelectedCountryData();
dialcode.value = countryData.dialCode;