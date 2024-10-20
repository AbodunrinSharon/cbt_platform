(function(window) {
    const document = window.document;
    const host = window.location.protocol + '//' + window.location.host + '/'; //'https://enemetronics.com.ng/';
    const EQuery = window.EQuery;
    const signals = window.signals;

    if (document == undefined) {
        throw new Error('A document is required to run');
    }
    if (EQuery == undefined) {
        alert('The application was not installed properly');
        throw new Error('EQuery need to be included');
    }
    if (signals == undefined) {
        alert('The application was not install properly');
        throw new Error('Signals needs to be included');
    }

    const countries = [{"name": "Afghanistan", "code": "AF", "timezone": "Afghanistan Standard Time", "utc": "UTC+04:30", "mobileCode": "+93"}, {"name": "Åland Islands", "code": "AX", "timezone": "FLE Standard Time", "utc": "UTC+02:00", "mobileCode": "+358-18"}, {"name": "Albania", "code": "AL", "timezone": "Central Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+355"}, {"name": "Algeria", "code": "DZ", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+213"}, {"name": "American Samoa", "code": "AS", "timezone": "UTC-11", "utc": "UTC-11:00", "mobileCode": "+1-684"}, {"name": "Andorra", "code": "AD", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+376"}, {"name": "Angola", "code": "AO", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+244"}, {"name": "Anguilla", "code": "AI", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-264"}, {"name": "Antarctica", "code": "AQ", "timezone": "Pacific SA Standard Time", "utc": "UTC-03:00", "mobileCode": "+"}, {"name": "Antigua and Barbuda", "code": "AG", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-268"}, {"name": "Argentina", "code": "AR", "timezone": "Argentina Standard Time", "utc": "UTC-03:00", "mobileCode": "+54"}, {"name": "Armenia", "code": "AM", "timezone": "Caucasus Standard Time", "utc": "UTC+04:00", "mobileCode": "+374"}, {"name": "Aruba", "code": "AW", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+297"}, {"name": "Australia", "code": "AU", "timezone": "AUS Eastern Standard Time", "utc": "UTC+10:00", "mobileCode": "+61"}, {"name": "Austria", "code": "AT", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+43"}, {"name": "Azerbaijan", "code": "AZ", "timezone": "Azerbaijan Standard Time", "utc": "UTC+04:00", "mobileCode": "+994"}, {"name": "Bahamas, The", "code": "BS", "timezone": "Eastern Standard Time", "utc": "UTC-05:00", "mobileCode": "+1-242"}, {"name": "Bahrain", "code": "BH", "timezone": "Arab Standard Time", "utc": "UTC+03:00", "mobileCode": "+973"}, {"name": "Bangladesh", "code": "BD", "timezone": "Bangladesh Standard Time", "utc": "UTC+06:00", "mobileCode": "+880"}, {"name": "Barbados", "code": "BB", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-246"}, {"name": "Belarus", "code": "BY", "timezone": "Belarus Standard Time", "utc": "UTC+03:00", "mobileCode": "+375"}, {"name": "Belgium", "code": "BE", "timezone": "Romance Standard Time", "utc": "UTC+01:00", "mobileCode": "+32"}, {"name": "Belize", "code": "BZ", "timezone": "Central America Standard Time", "utc": "UTC-06:00", "mobileCode": "+501"}, {"name": "Benin", "code": "BJ", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+229"}, {"name": "Bermuda", "code": "BM", "timezone": "Atlantic Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-441"}, {"name": "Bhutan", "code": "BT", "timezone": "Bangladesh Standard Time", "utc": "UTC+06:00", "mobileCode": "+975"}, {"name": "Boliletian Republic of Venezuela", "code": "VE", "timezone": "Venezuela Standard Time", "utc": "UTC-04:30", "mobileCode": "+58"}, {"name": "Bolivia", "code": "BO", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+591"}, {"name": "Bonaire, Sint Eustatius and Saba", "code": "BQ", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+599"}, {"name": "Bosnia and Herzegovina", "code": "BA", "timezone": "Central European Standard Time", "utc": "UTC+01:00", "mobileCode": "+387"}, {"name": "Botswana", "code": "BW", "timezone": "South Africa Standard Time", "utc": "UTC+02:00", "mobileCode": "+267"}, {"name": "Bouvet Island", "code": "BV", "timezone": "UTC", "utc": "UTC", "mobileCode": "+"}, {"name": "Brazil", "code": "BR", "timezone": "E. South America Standard Time", "utc": "UTC-03:00", "mobileCode": "+55"}, {"name": "British Indian Ocean Territory", "code": "IO", "timezone": "Central Asia Standard Time", "utc": "UTC+06:00", "mobileCode": "+246"}, {"name": "Brunei", "code": "BN", "timezone": "Singapore Standard Time", "utc": "UTC+08:00", "mobileCode": "+673"}, {"name": "Bulgaria", "code": "BG", "timezone": "FLE Standard Time", "utc": "UTC+02:00", "mobileCode": "+359"}, {"name": "Burkina Faso", "code": "BF", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+226"}, {"name": "Burundi", "code": "BI", "timezone": "South Africa Standard Time", "utc": "UTC+02:00", "mobileCode": "+257"}, {"name": "Cabo Verde", "code": "CV", "timezone": "Cape Verde Standard Time", "utc": "UTC-01:00", "mobileCode": "+238"}, {"name": "Cambodia", "code": "KH", "timezone": "SE Asia Standard Time", "utc": "UTC+07:00", "mobileCode": "+855"}, {"name": "Cameroon", "code": "CM", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+237"}, {"name": "Canada", "code": "CA", "timezone": "Eastern Standard Time", "utc": "UTC-05:00", "mobileCode": "+1"}, {"name": "Cayman Islands", "code": "KY", "timezone": "SA Pacific Standard Time", "utc": "UTC-05:00", "mobileCode": "+1-345"}, {"name": "Central African Republic", "code": "CF", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+236"}, {"name": "Chad", "code": "TD", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+235"}, {"name": "Chile", "code": "CL", "timezone": "Pacific SA Standard Time", "utc": "UTC-03:00", "mobileCode": "+56"}, {"name": "China", "code": "CN", "timezone": "China Standard Time", "utc": "UTC+08:00", "mobileCode": "+86"}, {"name": "Christmas Island", "code": "CX", "timezone": "SE Asia Standard Time", "utc": "UTC+07:00", "mobileCode": "+61"}, {"name": "Cocos (Keeling) Islands", "code": "CC", "timezone": "Myanmar Standard Time", "utc": "UTC+06:30", "mobileCode": "+61"}, {"name": "Colombia", "code": "CO", "timezone": "SA Pacific Standard Time", "utc": "UTC-05:00", "mobileCode": "+57"}, {"name": "Comoros", "code": "KM", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+269"}, {"name": "Congo", "code": "CG", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+242"}, {"name": "Congo (DRC)", "code": "CD", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+243"}, {"name": "Cook Islands", "code": "CK", "timezone": "Hawaiian Standard Time", "utc": "UTC-10:00", "mobileCode": "+682"}, {"name": "Costa Rica", "code": "CR", "timezone": "Central America Standard Time", "utc": "UTC-06:00", "mobileCode": "+506"}, {"name": "Côte d'Ivoire", "code": "CI", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+225"}, {"name": "Croatia", "code": "HR", "timezone": "Central European Standard Time", "utc": "UTC+01:00", "mobileCode": "+385"}, {"name": "Cuba", "code": "CU", "timezone": "Eastern Standard Time", "utc": "UTC-05:00", "mobileCode": "+53"}, {"name": "Curaçao", "code": "CW", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+599"}, {"name": "Cyprus", "code": "CY", "timezone": "E. Europe Standard Time", "utc": "UTC+02:00", "mobileCode": "+357"}, {"name": "Czech Republic", "code": "CZ", "timezone": "Central Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+420"}, {"name": "Democratic Republic of Timor-Leste", "code": "TL", "timezone": "Tokyo Standard Time", "utc": "UTC+09:00", "mobileCode": "+670"}, {"name": "Denmark", "code": "DK", "timezone": "Romance Standard Time", "utc": "UTC+01:00", "mobileCode": "+45"}, {"name": "Djibouti", "code": "DJ", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+253"}, {"name": "Dominica", "code": "DM", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-767"}, {"name": "Dominican Republic", "code": "DO", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-809 and 1-829"}, {"name": "Ecuador", "code": "EC", "timezone": "SA Pacific Standard Time", "utc": "UTC-05:00", "mobileCode": "+593"}, {"name": "Egypt", "code": "EG", "timezone": "Egypt Standard Time", "utc": "UTC+02:00", "mobileCode": "+20"}, {"name": "El Salvador", "code": "SV", "timezone": "Central America Standard Time", "utc": "UTC-06:00", "mobileCode": "+503"}, {"name": "Equatorial Guinea", "code": "GQ", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+240"}, {"name": "Eritrea", "code": "ER", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+291"}, {"name": "Estonia", "code": "EE", "timezone": "FLE Standard Time", "utc": "UTC+02:00", "mobileCode": "+372"}, {"name": "Ethiopia", "code": "ET", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+251"}, {"name": "Falkland Islands (Islas Malvinas)", "code": "FK", "timezone": "SA Eastern Standard Time", "utc": "UTC-03:00", "mobileCode": "+500"}, {"name": "Faroe Islands", "code": "FO", "timezone": "GMT Standard Time", "utc": "UTC", "mobileCode": "+298"}, {"name": "Fiji Islands", "code": "FJ", "timezone": "Fiji Standard Time", "utc": "UTC+12:00", "mobileCode": "+679"}, {"name": "Finland", "code": "FI", "timezone": "FLE Standard Time", "utc": "UTC+02:00", "mobileCode": "+358"}, {"name": "France", "code": "FR", "timezone": "Romance Standard Time", "utc": "UTC+01:00", "mobileCode": "+33"}, {"name": "French Guiana", "code": "GF", "timezone": "SA Eastern Standard Time", "utc": "UTC-03:00", "mobileCode": "+594"}, {"name": "French Polynesia", "code": "PF", "timezone": "Hawaiian Standard Time", "utc": "UTC-10:00", "mobileCode": "+689"}, {"name": "French Southern and Antarctic Lands", "code": "TF", "timezone": "West Asia Standard Time", "utc": "UTC+05:00", "mobileCode": "+"}, {"name": "Gabon", "code": "GA", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+241"}, {"name": "Gambia, The", "code": "GM", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+220"}, {"name": "Georgia", "code": "GE", "timezone": "Georgian Standard Time", "utc": "UTC+04:00", "mobileCode": "+995"}, {"name": "Germany", "code": "DE", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+49"}, {"name": "Ghana", "code": "GH", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+233"}, {"name": "Gibraltar", "code": "GI", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+350"}, {"name": "Greece", "code": "GR", "timezone": "GTB Standard Time", "utc": "UTC+02:00", "mobileCode": "+30"}, {"name": "Greenland", "code": "GL", "timezone": "Greenland Standard Time", "utc": "UTC-03:00", "mobileCode": "+299"}, {"name": "Grenada", "code": "GD", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-473"}, {"name": "Guadeloupe", "code": "GP", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+590"}, {"name": "Guam", "code": "GU", "timezone": "West Pacific Standard Time", "utc": "UTC+10:00", "mobileCode": "+1-671"}, {"name": "Guatemala", "code": "GT", "timezone": "Central America Standard Time", "utc": "UTC-06:00", "mobileCode": "+502"}, {"name": "Guernsey", "code": "GG", "timezone": "GMT Standard Time", "utc": "UTC", "mobileCode": "+44-1481"}, {"name": "Guinea", "code": "GN", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+224"}, {"name": "Guinea-Bissau", "code": "GW", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+245"}, {"name": "Guyana", "code": "GY", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+592"}, {"name": "Haiti", "code": "HT", "timezone": "Eastern Standard Time", "utc": "UTC-05:00", "mobileCode": "+509"}, {"name": "Heard Island and McDonald Islands", "code": "HM", "timezone": "Mauritius Standard Time", "utc": "UTC+04:00", "mobileCode": "+ "}, {"name": "Honduras", "code": "HN", "timezone": "Central America Standard Time", "utc": "UTC-06:00", "mobileCode": "+504"}, {"name": "Hong Kong SAR", "code": "HK", "timezone": "China Standard Time", "utc": "UTC+08:00", "mobileCode": "+852"}, {"name": "Hungary", "code": "HU", "timezone": "Central Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+36"}, {"name": "Iceland", "code": "IS", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+354"}, {"name": "India", "code": "IN", "timezone": "India Standard Time", "utc": "UTC+05:30", "mobileCode": "+91"}, {"name": "Indonesia", "code": "ID", "timezone": "SE Asia Standard Time", "utc": "UTC+07:00", "mobileCode": "+62"}, {"name": "Iran", "code": "IR", "timezone": "Iran Standard Time", "utc": "UTC+03:30", "mobileCode": "+98"}, {"name": "Iraq", "code": "IQ", "timezone": "Arabic Standard Time", "utc": "UTC+03:00", "mobileCode": "+964"}, {"name": "Ireland", "code": "IE", "timezone": "GMT Standard Time", "utc": "UTC", "mobileCode": "+353"}, {"name": "Israel", "code": "IL", "timezone": "Israel Standard Time", "utc": "UTC+02:00", "mobileCode": "+972"}, {"name": "Italy", "code": "IT", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+39"}, {"name": "Jamaica", "code": "JM", "timezone": "SA Pacific Standard Time", "utc": "UTC-05:00", "mobileCode": "+1-876"}, {"name": "Jan Mayen", "code": "SJ", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+47"}, {"name": "Japan", "code": "JP", "timezone": "Tokyo Standard Time", "utc": "UTC+09:00", "mobileCode": "+81"}, {"name": "Jersey", "code": "JE", "timezone": "GMT Standard Time", "utc": "UTC", "mobileCode": "+44-1534"}, {"name": "Jordan", "code": "JO", "timezone": "Jordan Standard Time", "utc": "UTC+02:00", "mobileCode": "+962"}, {"name": "Kazakhstan", "code": "KZ", "timezone": "Central Asia Standard Time", "utc": "UTC+06:00", "mobileCode": "+7"}, {"name": "Kenya", "code": "KE", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+254"}, {"name": "Kiribati", "code": "KI", "timezone": "UTC+12", "utc": "UTC+12:00", "mobileCode": "+686"}, {"name": "Korea", "code": "KR", "timezone": "Korea Standard Time", "utc": "UTC+09:00", "mobileCode": "+82"}, {"name": "Kosovo", "code": "XK", "timezone": "Central European Standard Time", "utc": "UTC+01:00", "mobileCode": "+"}, {"name": "Kuwait", "code": "KW", "timezone": "Arab Standard Time", "utc": "UTC+03:00", "mobileCode": "+965"}, {"name": "Kyrgyzstan", "code": "KG", "timezone": "Central Asia Standard Time", "utc": "UTC+06:00", "mobileCode": "+996"}, {"name": "Laos", "code": "LA", "timezone": "SE Asia Standard Time", "utc": "UTC+07:00", "mobileCode": "+856"}, {"name": "Latvia", "code": "LV", "timezone": "FLE Standard Time", "utc": "UTC+02:00", "mobileCode": "+371"}, {"name": "Lebanon", "code": "LB", "timezone": "Middle East Standard Time", "utc": "UTC+02:00", "mobileCode": "+961"}, {"name": "Lesotho", "code": "LS", "timezone": "South Africa Standard Time", "utc": "UTC+02:00", "mobileCode": "+266"}, {"name": "Liberia", "code": "LR", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+231"}, {"name": "Libya", "code": "LY", "timezone": "E. Europe Standard Time", "utc": "UTC+02:00", "mobileCode": "+218"}, {"name": "Liechtenstein", "code": "LI", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+423"}, {"name": "Lithuania", "code": "LT", "timezone": "FLE Standard Time", "utc": "UTC+02:00", "mobileCode": "+370"}, {"name": "Luxembourg", "code": "LU", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+352"}, {"name": "Macao SAR", "code": "MO", "timezone": "China Standard Time", "utc": "UTC+08:00", "mobileCode": "+853"}, {"name": "Macedonia, Former Yugoslav Republic of", "code": "MK", "timezone": "Central European Standard Time", "utc": "UTC+01:00", "mobileCode": "+389"}, {"name": "Madagascar", "code": "MG", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+261"}, {"name": "Malawi", "code": "MW", "timezone": "South Africa Standard Time", "utc": "UTC+02:00", "mobileCode": "+265"}, {"name": "Malaysia", "code": "MY", "timezone": "Singapore Standard Time", "utc": "UTC+08:00", "mobileCode": "+60"}, {"name": "Maldives", "code": "MV", "timezone": "West Asia Standard Time", "utc": "UTC+05:00", "mobileCode": "+960"}, {"name": "Mali", "code": "ML", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+223"}, {"name": "Malta", "code": "MT", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+356"}, {"name": "Man, Isle of", "code": "IM", "timezone": "GMT Standard Time", "utc": "UTC", "mobileCode": "+44-1624"}, {"name": "Marshall Islands", "code": "MH", "timezone": "UTC+12", "utc": "UTC+12:00", "mobileCode": "+692"}, {"name": "Martinique", "code": "MQ", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+596"}, {"name": "Mauritania", "code": "MR", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+222"}, {"name": "Mauritius", "code": "MU", "timezone": "Mauritius Standard Time", "utc": "UTC+04:00", "mobileCode": "+230"}, {"name": "Mayotte", "code": "YT", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+262"}, {"name": "Mexico", "code": "MX", "timezone": "Central Standard Time (Mexico)", "utc": "UTC-06:00", "mobileCode": "+52"}, {"name": "Micronesia", "code": "FM", "timezone": "West Pacific Standard Time", "utc": "UTC+10:00", "mobileCode": "+691"}, {"name": "Moldova", "code": "MD", "timezone": "GTB Standard Time", "utc": "UTC+02:00", "mobileCode": "+373"}, {"name": "Monaco", "code": "MC", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+377"}, {"name": "Mongolia", "code": "MN", "timezone": "Ulaanbaatar Standard Time", "utc": "UTC+08:00", "mobileCode": "+976"}, {"name": "Montenegro", "code": "ME", "timezone": "Central European Standard Time", "utc": "UTC+01:00", "mobileCode": "+382"}, {"name": "Montserrat", "code": "MS", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-664"}, {"name": "Morocco", "code": "MA", "timezone": "Morocco Standard Time", "utc": "UTC", "mobileCode": "+212"}, {"name": "Mozambique", "code": "MZ", "timezone": "South Africa Standard Time", "utc": "UTC+02:00", "mobileCode": "+258"}, {"name": "Myanmar", "code": "MM", "timezone": "Myanmar Standard Time", "utc": "UTC+06:30", "mobileCode": "+95"}, {"name": "Namibia", "code": "NA", "timezone": "Namibia Standard Time", "utc": "UTC+01:00", "mobileCode": "+264"}, {"name": "Nauru", "code": "NR", "timezone": "UTC+12", "utc": "UTC+12:00", "mobileCode": "+674"}, {"name": "Nepal", "code": "NP", "timezone": "Nepal Standard Time", "utc": "UTC+05:45", "mobileCode": "+977"}, {"name": "Netherlands", "code": "NL", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+31"}, {"name": "New Caledonia", "code": "NC", "timezone": "Central Pacific Standard Time", "utc": "UTC+11:00", "mobileCode": "+687"}, {"name": "New Zealand", "code": "NZ", "timezone": "New Zealand Standard Time", "utc": "UTC+12:00", "mobileCode": "+64"}, {"name": "Nicaragua", "code": "NI", "timezone": "Central America Standard Time", "utc": "UTC-06:00", "mobileCode": "+505"}, {"name": "Niger", "code": "NE", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+227"}, {"name": "Nigeria", "code": "NG", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+234"}, {"name": "Niue", "code": "NU", "timezone": "UTC-11", "utc": "UTC-11:00", "mobileCode": "+683"}, {"name": "Norfolk Island", "code": "NF", "timezone": "Central Pacific Standard Time", "utc": "UTC+11:00", "mobileCode": "+672"}, {"name": "North Korea", "code": "KP", "timezone": "Korea Standard Time", "utc": "UTC+09:00", "mobileCode": "+850"}, {"name": "Northern Mariana Islands", "code": "MP", "timezone": "West Pacific Standard Time", "utc": "UTC+10:00", "mobileCode": "+1-670"}, {"name": "Norway", "code": "NO", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+47"}, {"name": "Oman", "code": "OM", "timezone": "Arabian Standard Time", "utc": "UTC+04:00", "mobileCode": "+968"}, {"name": "Pakistan", "code": "PK", "timezone": "Pakistan Standard Time", "utc": "UTC+05:00", "mobileCode": "+92"}, {"name": "Palau", "code": "PW", "timezone": "Tokyo Standard Time", "utc": "UTC+09:00", "mobileCode": "+680"}, {"name": "Palestinian Authority", "code": "PS", "timezone": "Egypt Standard Time", "utc": "UTC+02:00", "mobileCode": "+970"}, {"name": "Panama", "code": "PA", "timezone": "SA Pacific Standard Time", "utc": "UTC-05:00", "mobileCode": "+507"}, {"name": "Papua New Guinea", "code": "PG", "timezone": "West Pacific Standard Time", "utc": "UTC+10:00", "mobileCode": "+675"}, {"name": "Paraguay", "code": "PY", "timezone": "Paraguay Standard Time", "utc": "UTC-04:00", "mobileCode": "+595"}, {"name": "Peru", "code": "PE", "timezone": "SA Pacific Standard Time", "utc": "UTC-05:00", "mobileCode": "+51"}, {"name": "Philippines", "code": "PH", "timezone": "Singapore Standard Time", "utc": "UTC+08:00", "mobileCode": "+63"}, {"name": "Pitcairn Islands", "code": "PN", "timezone": "Pacific Standard Time", "utc": "UTC-08:00", "mobileCode": "+870"}, {"name": "Poland", "code": "PL", "timezone": "Central European Standard Time", "utc": "UTC+01:00", "mobileCode": "+48"}, {"name": "Portugal", "code": "PT", "timezone": "GMT Standard Time", "utc": "UTC", "mobileCode": "+351"}, {"name": "Puerto Rico", "code": "PR", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-787 and 1-939"}, {"name": "Qatar", "code": "QA", "timezone": "Arab Standard Time", "utc": "UTC+03:00", "mobileCode": "+974"}, {"name": "Reunion", "code": "RE", "timezone": "Mauritius Standard Time", "utc": "UTC+04:00", "mobileCode": "+262"}, {"name": "Romania", "code": "RO", "timezone": "GTB Standard Time", "utc": "UTC+02:00", "mobileCode": "+40"}, {"name": "Russia", "code": "RU", "timezone": "Russian Standard Time", "utc": "UTC+03:00", "mobileCode": "+7"}, {"name": "Rwanda", "code": "RW", "timezone": "South Africa Standard Time", "utc": "UTC+02:00", "mobileCode": "+250"}, {"name": "Saint Barthélemy", "code": "BL", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+590"}, {"name": "Saint Helena, Ascension and Tristan da Cunha", "code": "SH", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+290"}, {"name": "Saint Kitts and Nevis", "code": "KN", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-869"}, {"name": "Saint Lucia", "code": "LC", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-758"}, {"name": "Saint Martin (French part)", "code": "MF", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+590"}, {"name": "Saint Pierre and Miquelon", "code": "PM", "timezone": "Greenland Standard Time", "utc": "UTC-03:00", "mobileCode": "+508"}, {"name": "Saint Vincent and the Grenadines", "code": "VC", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-784"}, {"name": "Samoa", "code": "WS", "timezone": "Samoa Standard Time", "utc": "UTC+13:00", "mobileCode": "+685"}, {"name": "San Marino", "code": "SM", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+378"}, {"name": "São Tomé and Príncipe", "code": "ST", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+239"}, {"name": "Saudi Arabia", "code": "SA", "timezone": "Arab Standard Time", "utc": "UTC+03:00", "mobileCode": "+966"}, {"name": "Senegal", "code": "SN", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+221"}, {"name": "Serbia", "code": "RS", "timezone": "Central Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+381"}, {"name": "Seychelles", "code": "SC", "timezone": "Mauritius Standard Time", "utc": "UTC+04:00", "mobileCode": "+248"}, {"name": "Sierra Leone", "code": "SL", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+232"}, {"name": "Singapore", "code": "SG", "timezone": "Singapore Standard Time", "utc": "UTC+08:00", "mobileCode": "+65"}, {"name": "Sint Maarten (D'utc'h part)", "code": "SX", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+599"}, {"name": "Slovakia", "code": "SK", "timezone": "Central Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+421"}, {"name": "Slovenia", "code": "SI", "timezone": "Central Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+386"}, {"name": "Solomon Islands", "code": "SB", "timezone": "Central Pacific Standard Time", "utc": "UTC+11:00", "mobileCode": "+677"}, {"name": "Somalia", "code": "SO", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+252"}, {"name": "South Africa", "code": "ZA", "timezone": "South Africa Standard Time", "utc": "UTC+02:00", "mobileCode": "+27"}, {"name": "South Georgia and the South Sandwich Islands", "code": "GS", "timezone": "UTC-02", "utc": "UTC-02:00", "mobileCode": "+"}, {"name": "South Sudan", "code": "SS", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+211"}, {"name": "Spain", "code": "ES", "timezone": "Romance Standard Time", "utc": "UTC+01:00", "mobileCode": "+34"}, {"name": "Sri Lanka", "code": "LK", "timezone": "Sri Lanka Standard Time", "utc": "UTC+05:30", "mobileCode": "+94"}, {"name": "Sudan", "code": "SD", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+249"}, {"name": "Suriname", "code": "SR", "timezone": "SA Eastern Standard Time", "utc": "UTC-03:00", "mobileCode": "+597"}, {"name": "Svalbard", "code": "SJ", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+47"}, {"name": "Swaziland", "code": "SZ", "timezone": "South Africa Standard Time", "utc": "UTC+02:00", "mobileCode": "+268"}, {"name": "Sweden", "code": "SE", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+46"}, {"name": "Switzerland", "code": "CH", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+41"}, {"name": "Syria", "code": "SY", "timezone": "Syria Standard Time", "utc": "UTC+02:00", "mobileCode": "+963"}, {"name": "Taiwan", "code": "TW", "timezone": "Taipei Standard Time", "utc": "UTC+08:00", "mobileCode": "+886"}, {"name": "Tajikistan", "code": "TJ", "timezone": "West Asia Standard Time", "utc": "UTC+05:00", "mobileCode": "+992"}, {"name": "Tanzania", "code": "TZ", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+255"}, {"name": "Thailand", "code": "TH", "timezone": "SE Asia Standard Time", "utc": "UTC+07:00", "mobileCode": "+66"}, {"name": "Togo", "code": "TG", "timezone": "Greenwich Standard Time", "utc": "UTC", "mobileCode": "+228"}, {"name": "Tokelau", "code": "TK", "timezone": "Tonga Standard Time", "utc": "UTC+13:00", "mobileCode": "+690"}, {"name": "Tonga", "code": "TO", "timezone": "Tonga Standard Time", "utc": "UTC+13:00", "mobileCode": "+676"}, {"name": "Trinidad and Tobago", "code": "TT", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-868"}, {"name": "Tunisia", "code": "TN", "timezone": "W. Central Africa Standard Time", "utc": "UTC+01:00", "mobileCode": "+216"}, {"name": "Turkey", "code": "TR", "timezone": "Turkey Standard Time", "utc": "UTC+02:00", "mobileCode": "+90"}, {"name": "Turkmenistan", "code": "TM", "timezone": "West Asia Standard Time", "utc": "UTC+05:00", "mobileCode": "+993"}, {"name": "Turks and Caicos Islands", "code": "TC", "timezone": "Eastern Standard Time", "utc": "UTC-05:00", "mobileCode": "+1-649"}, {"name": "Tuvalu", "code": "TV", "timezone": "UTC+12", "utc": "UTC+12:00", "mobileCode": "+688"}, {"name": "U.S. Minor Outlying Islands", "code": "UM", "timezone": "UTC-11", "utc": "UTC-11:00", "mobileCode": "+1"}, {"name": "Uganda", "code": "UG", "timezone": "E. Africa Standard Time", "utc": "UTC+03:00", "mobileCode": "+256"}, {"name": "Ukraine", "code": "UA", "timezone": "FLE Standard Time", "utc": "UTC+02:00", "mobileCode": "+380"}, {"name": "United Arab Emirates", "code": "AE", "timezone": "Arabian Standard Time", "utc": "UTC+04:00", "mobileCode": "+971"}, {"name": "United Kingdom", "code": "GB", "timezone": "GMT Standard Time", "utc": "UTC", "mobileCode": "+44"}, {"name": "United States", "code": "US", "timezone": "Pacific Standard Time", "utc": "UTC-08:00", "mobileCode": "+1"}, {"name": "Uruguay", "code": "UY", "timezone": "Montevideo Standard Time", "utc": "UTC-03:00", "mobileCode": "+598"}, {"name": "Uzbekistan", "code": "UZ", "timezone": "West Asia Standard Time", "utc": "UTC+05:00", "mobileCode": "+998"}, {"name": "Vanuatu", "code": "VU", "timezone": "Central Pacific Standard Time", "utc": "UTC+11:00", "mobileCode": "+678"}, {"name": "Vatican City", "code": "VA", "timezone": "W. Europe Standard Time", "utc": "UTC+01:00", "mobileCode": "+379"}, {"name": "Vietnam", "code": "VN", "timezone": "SE Asia Standard Time", "utc": "UTC+07:00", "mobileCode": "+84"}, {"name": "Virgin Islands, U.S.", "code": "VI", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-340"}, {"name": "Virgin Islands, British", "code": "VG", "timezone": "SA Western Standard Time", "utc": "UTC-04:00", "mobileCode": "+1-284"}, {"name": "Wallis and Futuna", "code": "WF", "timezone": "UTC+12", "utc": "UTC+12:00", "mobileCode": "+681"}, {"name": "Yemen", "code": "YE", "timezone": "Arab Standard Time", "utc": "UTC+03:00", "mobileCode": "+967"}, {"name": "Zambia", "code": "ZM", "timezone": "South Africa Standard Time", "utc": "UTC+02:00", "mobileCode": "+260"}, {"name": "Zimbabwe", "code": "ZW", "timezone": "South Africa Standard Time", "utc": "UTC+02:00", "mobileCode": "+263"}];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Webnesday', 'Thursday', 'Friday', 'Saturday'];
    const days_short = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    const log = EQuery.createLogger('ChatApp');
    const start = performance.now();

    const userAgent = navigator.userAgent;
    const platform = navigator.platform;

    const gecko = /gecko\/\d/i.test(userAgent);
    const ie_upto10 = /MSIE \d/.test(userAgent);
    const ie_11up = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent);
    const edge = /Edge\/(\d+)/.exec(userAgent);
    const ie = ie_upto10 || ie_11up || edge;
    const ie_version = ie && (ie_upto10 ? document.documentMode || 6 : +(edge || ie_11up)[1]);
    const webkit = !edge && /WebKit\//.test(userAgent);
    const qtwebkit = webkit && /Qt\/\d+\.\d+/.test(userAgent);
    const presto = /Opera\//.test(userAgent);

    const ios = !edge && /AppleWebKit/.test(userAgent) && /isMobile\/\w+/.test(userAgent);
    const android = /Android/.test(userAgent);

    const mobile = ios || android || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent);
    const mac = ios || /Mac/.test(platform);
    // let windows = /win/i.test(platform);
    if (/Mac/.test(platform)) { alert('Macbook version unavailable');return; }

    let presto_version = presto && userAgent.match(/Version\/(\d*\.\d*)/);
    if (presto_version) {
        presto_version = Number(presto_version[1]);
    }
    if (presto_version && presto_version >= 15) {
        presto = false;
        webkit = true;
    }

    let validpsw, valid, country_arr, currentTab = 0, offline = false;
    let isMobile = mobile || false;
    let logTime = () => {return '[' + /\d\d\:\d\d\:\d\d/.exec(new Date())[0] + '] ';};


    let flipCtrlCmd = mac && (qtwebkit || (presto && (presto_version == null || presto_version < 12.11)));
    let captureRightClick = gecko || (ie && ie_version >= 9);

    let shortcuts = ['newFile', 'newWindow', 'openFile', 'openWorkspace', 'openRecent', 'save', 'saveAs', 'saveToWorkspace', 'saveAll', 'export', 'undo', 'redo', 'cut', 'copy', 'paste', 'find', 'replace'];

    function createShortcutInput(name) {
        let configName = 'settings/shortcut/' + name;
        let shortcutRow = new UIRow();
    }

    let keyNames = {3: 'Pause', 8: 'Backspace', 9: 'Tab', 13: 'Enter', 16: 'Shift', 17: 'Ctrl', 18: 'Alt', 19: 'Pause', 20: 'CapsLock', 27: 'Esc', 32: 'Space', 33: 'PageUp', 34: 'PageDown', 35: 'End', 36: 'Home', 37: 'Left', 38: 'Up', 39: 'Right', 40: 'Down', 44: 'PrintScrn', 45: 'Insert', 46: 'Delete', 59: ';', 61: '=', 91: 'Mod', 92: 'Mod', 93: 'Mod', 106: '*', 107: '=', 109: '-', 110: '.', 111: '/', 145: 'ScrollLock', 173: '-', 186: ';', 187: '=', 188: ',', 189: '-', 190: '.', 191: '/', 192: '`', 219: '[', 220: '\\', 221: ']', 222: '"', 224: 'Mod', 63232: 'Up', 63233: 'Down', 63234: 'Left', 63235: 'Right', 63272: 'Delete', 63273: 'Home', 63275: 'End', 63276: 'PageUp', 63277: 'PageDown', 63302: 'Insert',};
    for (let i = 0; i < 10; i++) {
        keyNames[i + 48] = keyNames[i + 96] = String(i);
    }
    for (let i$1 = 65; i$1 <= 90; i$1++) {
        keyNames[i$1] = String.fromCharCode(i$1);
    }
    for (let i$2 = 1; i$2 <= 12; i$2++) {
        keyNames[i$2 + 111] = keyNames[i$2 + 63235] = 'F' + i$2;
    }
    let keyMap = {};
    keyMap.basic = {Left: 'goCharLeft', Right: 'goCharRight', Up: 'goLineUp', Down: 'goLineDown', End: 'goLineEnd', Home: 'goLineStartSmart', PageUp: 'goPageUp', PageDown: 'goPageDown', Delete: 'delCharAfter', Backspace: 'delCharBefore', 'Shift-Backspace': 'delCharBefore', Tab: 'defaultTab', 'Shift-Tab': 'indentAuto', Enter: 'newlineAndIndent', Insert: 'toggleOverwrite', Esc: 'singleSelection'};
    keyMap.pcDefault = {'Ctrl-A': 'selectAll', 'Ctrl-D': 'deleteLine', 'Ctrl-Z': 'undo', 'Shift-Ctrl-Z': 'redo', 'Ctrl-Y': 'redo', 'Ctrl-Home': 'goDocStart', 'Ctrl-End': 'goDocEnd', 'Ctrl-Up': 'goLineUp', 'Ctrl-Down': 'goLineDown', 'Ctrl-Left': 'goGroupLeft', 'Ctrl-Right': 'goGroupRight', 'Alt-Left': 'goLineStart', 'Alt-Right': 'goLineEnd', 'Ctrl-Backspace': 'delGroupBefore', 'Ctrl-Delete': 'delGroupAfter', 'Ctrl-S': 'save', 'Ctrl-F': 'find', 'Ctrl-G': 'findNext', 'Shift-Ctrl-G': 'findPrev', 'Shift-Ctrl-F': 'replace', 'Shift-Ctrl-R': 'replace', 'Ctrl-[': 'indentLess', 'Ctrl-]': 'indentMore', 'Ctrl-U': 'undoSelection', 'Shift-Ctrl-U': 'redoSelection', 'Alt-U': 'redoSelection', fallthrough: 'basic'}
    keyMap.emacsy = {'Ctrl-F': 'goCharRight', 'Ctrl-B': 'goCharLeft', 'Ctrl-P': 'goLineUp', 'Ctrl-N': 'goLineDown', 'Alt-F': 'goWordRight', 'Alt-B': 'goWordLeft', 'Ctrl-A': 'goLineStart', 'Ctrl-E': 'goLineEnd', 'Ctrl-V': 'goPageDown', 'Shift-Ctrl-V': 'goPageUp', 'Ctrl-D': 'delCharAfter', 'Ctrl-H': 'delCharBefore', 'Alt-D': 'delWordAfter', 'Alt-Backspace': 'delWordBefore', 'Ctrl-K': 'killLine', 'Ctrl-T': 'transposeChars', 'Ctrl-O': 'openLine',};
    keyMap.macDefault = {'Cmd-A': 'selectAll', 'Cmd-D': 'deleteLine', 'Cmd-Z': 'undo', 'Shift-Cmd-Z': 'redo', 'Cmd-Y': 'redo', 'Cmd-Home': 'goDocStart', 'Cmd-Up': 'goDocStart', 'Cmd-End': 'goDocEnd', 'Cmd-Down': 'goDocEnd', 'Alt-Left': 'goGroupLeft', 'Alt-Right': 'goGroupRight', 'Cmd-Left': 'goLineLeft', 'Cmd-Right': 'goLineRight', 'Alt-Backspace': 'delGroupBefore', 'Ctrl-Alt-Backspace': 'delGroupAfter', 'Alt-Delete': 'delGroupAfter', 'Cmd-S': 'save', 'Cmd-F': 'find', 'Cmd-G': 'findNext', 'Shift-Cmd-G': 'findPrev', 'Cmd-Alt-F': 'replace', 'Shift-Cmd-Alt-F': ',".', 'Cmd-[': 'indentLess', 'Cmd-]': 'indentMore', 'Cmd-Backspace': 'delWrappedLineLeft', 'Cmd-Delete': 'delWrappedLineRight', 'Cmd-U': 'undoSelection', 'Shift-Cmd-U': 'redoSelection', 'Ctrl-Up': 'goDocStart', 'Ctrl-Down': 'goDocEnd', fallthrough: ['basic', 'emacsy'],};

    keyMap['default'] = mac ? keyMap.macDefault : keyMap.pcDefault;

    window.URL = window.URL || window.webkitURL;
    window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;

    Number.prototype.format = function() {
        return this.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    };

    function normalizeKeyName(name) {
        let parts = name.split(/-(?!$)/);
        name = parts[parts.length - 1];
        let alt, ctrl, shift, cmd;
        for (let i = 0; i < parts.length - 1; i++) {
            let mod = parts[i];
            if (/^(cmd|meta|m)$/i.test(mod)) {
                cmd = true;
            } else if (/^a(lt)?$/i.test(mod)) {
                alt = true;
            } else if (/^(c|ctrl|control)$/i.test(mod)) {
                ctrl = true;
            } else if (/^s(hift)?$/i.test(mod)) {
                shift = true;
            } else {
                throw new Error('Unrecognized modifier name: ' + mod);
            }
        }
        if (alt) {
            name = 'Alt-' + name;
        }
        if (ctrl) {
            name = 'Ctrl-' + name;
        }
        if (cmd) {
            name = 'Cmd-' + name;
        }
        if (shift) {
            name = 'Shift-' + name;
        }
        return name;
    }

    function normalizeKeyMap(keymap) {
        let copy = {};
        for (let keyname in keymap) {
            if (keymap.hasOwnProperty(keyname)) {
                let value = keymap[keyname];
                if (/^(name|fallthrough|(de|at)tach)$/.test(keyname)) {
                    continue;
                }
                if (value == '...') {
                    delete keymap[keyname];
                    continue;
                }

                let keys = map(keyname.split(' '), normalizeKeyName);
                for (let i = 0; i < keys.length; i++) {
                    let val = void 0
                      , name = void 0;
                    if (i == keys.length - 1) {
                        name = keys.join(' ');
                        val = value;
                    } else {
                        name = keys.slice(0, i + 1).join(' ');
                        val = '...';
                    }
                    let prev = copy[name];
                    if (!prev) {
                        copy[name] = val;
                    } else if (prev != val) {
                        throw new Error('Inconsistent bindings for ' + name);
                    }
                }
                delete keymap[keyname];
            }
        }
        for (let prop in copy) {
            keymap[prop] = copy[prop];
        }
        return keymap;
    }

    function lookupKey(key, map, handle, context) {
        map = getKeyMap(map);
        let found = map.call ? map.call(key, context) : map[key];
        if (found === false) {
            return 'nothing';
        }
        if (found === '...') {
            return 'multi';
        }
        if (found != null && handle(found)) {
            return 'handled';
        }

        if (map.fallthrough) {
            if (Object.prototype.toString.call(map.fallthrough) != '[object Array]') {
                return lookupKey(key, map.fallthrough, handle, context);
            }
            for (let i = 0; i < map.fallthrough.length; i++) {
                let result = lookupKey(key, map.fallthrough[i], handle, context);
                if (result) {
                    return result;
                }
            }
        }
    }

    function isModifierKey(value) {
        let name = typeof value == 'string' ? value : keyNames[value.keyCode];
        return name == 'Ctrl' || name == 'Alt' || name == 'Shift' || name == 'Mod';
    }

    function addModifierNames(name, event, noShift) {
        let base = name;
        if (event.altKey && base != 'Alt') {
            name = 'Alt-' + name;
        }
        if ((flipCtrlCmd ? event.metaKey : event.ctrlKey) && base != 'Ctrl') {
            name = 'Ctrl-' + name;
        }
        if ((flipCtrlCmd ? event.ctrlKey : event.metaKey) && base != 'Mod') {
            name = 'Cmd-' + name;
        }
        if (!noShift && event.shiftKey && base != 'Shift') {
            name = 'Shift-' + name;
        }
        return name;
    }

    function keyName(event, noShift) {
        if (presto && event.keyCode == 34 && event['char']) {
            return false;
        }
        let name = keyNames[event.keyCode];
        if (name == null || event.altGraphKey) {
            return false;
        }
        if (event.keyCode == 3 && event.code) {
            name = event.code;
        }
        return addModifierNames(name, event, noShift);
    }

    function getKeyMap(val) {
        return typeof val == 'string' ? keyMap[val] : val;
    }

    function Notice(value) {
        this.snackbar = EQuery.elemt('div', value, 'e-snackbar show');
        setTimeout(function() {
            EQuery('.e-snackbar').remove();
        }, 3000);
        document.body.appendChild(this.snackbar);
    }

    function Text(data) {
        this.elt = EQuery.elemt('div', data, 'app-text');
        this.text = function (txt) {this.elt.innerText = txt}
    }

    function Select(data) {
        let _this = this;
        this.input = EQuery.elemt('input', null, 'app-select-input', {
            name: data.name});
        this.select = EQuery.elemt('select');
        this.panel = EQuery.elemt('div', [this.select, this.input], 'app-select', null, 'margin: 10px 0;padding: 7px');
        this.elt = EQuery.elemt('div', [this.panel], 'select');

        for (let i = 0; i < data.select.length; i++) {
            this.option = EQuery.elemt('option', String(data.select[i]), null, {
                value: i,     });
            EQuery(this.select).addChild([this.option]);
        }
        editSelect(this.panel);
        EQuery(this.input).on('input', function() {
            let txt = this.value;
            for (let i = 0; i < EQuery(_this.elt).find('.app-select-item>div').length; i++) {
                if (EQuery(_this.elt).find('.app-select-item>div')[i].innerHTML.toLowerCase().indexOf(txt.toLowerCase()) == -1) {
                    EQuery(EQuery(_this.elt).find('.app-select-item>div')[i]).hide();
                } else {
                    EQuery(EQuery(_this.elt).find('.app-select-item>div')[i]).show();
                }
            }
        });

        this.val = function() {
            return _this.select.value;
        };
    }

    function editSelect(place) {
        let elt = EQuery(place).find('select')[0];
        let input = EQuery(place).find('input')[0];
        let a = EQuery.elemt('div', null, 'app-selected');
        let b = EQuery.elemt('div', null, 'app-select-item app-select-hidden');

        a.innerText = elt.options[0].innerText;
        EQuery(input).css('width: ' + EQuery(place).find('.app-selected').getStyleValue('width'));
        for (let i = 0; i < elt.options.length; i++) {
            let c = EQuery.elemt('div', elt.options[i].innerHTML);
            b.appendChild(c);
        }
        b.firstChild.classList.add('app-same-as-selected');
        EQuery(place).addChild([a]);
        EQuery(place).addChild([b]);
        EQuery(a).click(function(event) {
            event.stopPropagation();
            input.value = '';
            input.focus();
            closeAllSelect(this);
            EQuery(input).css('z-index: 1');
            this.nextSibling.classList.toggle('app-select-hidden');
            this.classList.toggle('app-select-arrow-active');
            let d = place.querySelectorAll('.app-select-item>div');
            for (let i = 0; i < d.length; i++) {
                EQuery(d[i]).click(function(i) {
                    EQuery(input).val(this.innerHTML);
                    this.parentElement.parentElement.children[2].innerHTML = this.innerHTML;
                    for (let i = 0; i < place.querySelectorAll('.app-select-item>div').length; i++) {
                        place.querySelectorAll('.app-select-item>div')[i].classList.remove('app-same-as-selected');
                    }
                    this.classList.add('app-same-as-selected');
                });
            }
        });
        updateSelect(place);
        EQuery(document).click(closeAllSelect);
    }

    function closeAllSelect(elt) {
        let arrNo = [];
        let x = document.querySelectorAll('.app-select-item');
        let y = document.querySelectorAll('.app-selected');
        for (let i = 0; i < y.length; i++) {
            if (elt == y[i]) {
                arrNo.push(i);
            } else {
                y[i].classList.remove('app-select-arrow-active');
            }
        }
        for (let i = 0; i < x.length; i++) {
            if (arrNo.indexOf(i)) {
                x[i].classList.add('app-select-hidden');
            }
        }
        EQuery('.app-select-input').css('z-index: 0');
        EQuery('.app-select-item>div').show();
    }

    function updateSelect(place) {
        let elt = place.querySelector('select');
        let selects = [];

        for (let i = 0; i < elt.options.length; i++) {
            selects.push(elt.options[i].innerText);
        }

        EQuery(elt).click(function() {
            let index = selects.indexOf(this.selectedOptions[0].innerText);
            place.querySelector('.app-selected').innerText = elt.selectedOptions[0].innerText;
            for (let i = 0; i < getElements('.app-select-item>div').length; i++) {
                EQuery(EQuery('.app-select-item>div')[i]).removeClass('app-same-as-selected');
                EQuery(EQuery('.app-select-item>div')[index]).addClass('app-same-as-selected');
            }
        });

        EQuery(place).find('.app-select-item').click(function() {
            let selected = place.querySelector('.app-same-as-selected');
            elt.value = selects.indexOf(selected.innerText);
        });

        EQuery(window).on('load', function() {
            if (window.innerHeight > 520) {
                let height = this.innerHeight / 4;
                EQuery(place).find('.app-select-item').css('max-height: ' + height + 'px');
            } else {
                EQuery(place).find('.app-select-item').css('max-height: 300px');
            }
            EQuery(place).find('input').css('width: ' + EQuery(place).find('.app-selected').width());
        });

        EQuery(window).on(['resize', 'click'], function() {
            if (window.innerHeight > 520) {
                let height = this.innerHeight / 4;
                EQuery(place).find('.app-select-item').css('max-height: ' + height + 'px');
            } else {
                EQuery(place).find('.app-select-item').css('max-height: 300px');
            }
            EQuery(place).find('input').css('width: ' + EQuery(place).find('.app-selected').width());
        });

        if (window.innerHeight > 520) {
            let height = this.innerHeight / 4;
            EQuery(place).find('.app-select-item').css('max-height: ' + height + 'px');
        } else {
            EQuery(place).find('.app-select-item').css('max-height: 300px');
        }
    }

    function Input(data) {
        let _this = this, placeholder = (type = _name = '');
        if (data.placeholder)
            placeholder = data.placeholder;
        if (data.type)
            type = data.placeholder;
        if (data.name)
            _name = data.name;

        this.input = EQuery.elemt('input', null, 'input-root input-base-input', {placeholder: placeholder, type: type, name: _name});
        this.elt = EQuery.elemt('div', [this.input], 'input-base-root', null, 'position: relative; border-radius: 4px; border: 1px solid rgb(153, 153, 153);');
        this.val = function() {
            return EQuery(_this.input).val();
        };
    }

    function openModal(app, data) {
        if (!(this instanceof openModal)) return new openModal(app,data);
        let parent = app.display.overlay, i = 0;
        let _this = this;

        // this.close = EQuery.elemt('div', [EQuery.elemt('a', null, 'icon icon-close', null, 'color: inherit;padding: 2px;padding-top: 5px;width: 30px;height: 20px;font-size: 20px;')], null, null, 'display: flex;flex-grow: 0;flex-shrink: 0;text-align: center;position: relative;z-index: 3000;app-region: no-drag;height: 100%;margin-left: auto;');
        this.modalBottom = EQuery.elemt('div', null, 'app-modal-bottom');
        this.modalHeader = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', null, 'title', null, 'margin-left: auto')], 'app-modal-title', null, 'position: absolute;left: 50%;transform: translate(-50%, 0px);display: flex;width: 100%;')], 'app-modal-header', {id: 'dragable-header'});
        this.modalContent = EQuery.elemt('div', null, 'app-modal-content');
        this.elt = EQuery.elemt('div', null, 'app-modal', { id: 'dragable' });
        /*EQuery(this.close).click(function() {
            _this.close();
        });*/
        if (data.header !== undefined) EQuery(this.modalHeader).find('.title').text(data.header);
        EQuery(this.elt).addChild([this.modalHeader]);
        if (data.content !== undefined) {
            if (typeof data.content == 'object') {
                for (let i = 0; i < data.content.length; i++) {
                    let row = EQuery.elemt('div', null, 'app-row');
                    EQuery(this.modalContent).addChild([row]);
                    for (let col in data.content[i]) {
                        let colum = EQuery.elemt('div', null, 'app-col ' + col);
                        EQuery(row).addChild([colum]);
                        if (typeof data.content[i][col] == 'object') {
                            for (let g in data.content[i][col]) {
                                if (g == 'html') {
                                    this[g] = data.content[i][col][g];
                                    EQuery(colum).addChild([data.content[i][col][g]]);
                                } else {
                                    this[g] = data.content[i][col][g];
                                    EQuery(colum).addChild([data.content[i][col][g].elt]);
                                }
                            }
                        } else {
                            EQuery(colum).addChild([EQuery.elemt('div', data.content[i][col], 'app-modal-text')]);
                        }
                    }
                }
            } else {
                EQuery(this.modalContent).addChild([EQuery.elemt('div', data.content, 'app-modal-text')]);
            }
            EQuery(this.elt).addChild([this.modalContent]);
        }

        if (data.btns) {
            for (let btn in data.btns) {
                let _btn = EQuery.elemt('button', btn, 'app-modal-btn button-root');
                _btn.func = data.btns[btn];
                EQuery(this.modalBottom).addChild([_btn]);
                EQuery(_btn).click(function() {
                    this.func(_this);
                });
            }
            EQuery(this.elt).addChild([this.modalBottom]);
        }

        EQuery(parent).show();
        EQuery(parent).addChild([this.elt]);
        EQuery(this.elt).dragElement();

        this.close = function() {
            EQuery(parent).removeChild([_this.elt]);
            EQuery(parent).hide();
            EQuery(_this.elt).remove();
        };
    }

    function openModal2(app, data) {
        if (!(this instanceof openModal2)) return new openModal2(app,data);
        let parent = app.display.overlay, i = 0;
        let _this = this;

        this.close = EQuery.elemt('div', [EQuery.elemt('a', null, 'icon icon-close', null, 'color: inherit;padding: 2px;padding-top: 5px;width: 30px;height: 20px;font-size: 20px;cursor: pointer;')], null, null, 'display: flex;flex-grow: 0;flex-shrink: 0;text-align: center;position: relative;z-index: 3000;app-region: no-drag;height: 100%;margin-left: auto;');
        this.modalBottom = EQuery.elemt('div', null, 'app-modal-bottom');
        this.modalHeader = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', null, 'title', null, 'margin-left: auto'), this.close], 'app-modal-title', null, 'position: absolute;left: 50%;transform: translate(-50%, 0px);display: flex;width: 100%;')], 'app-modal-header', {id: 'dragable-header'});
        this.modalContent = EQuery.elemt('div', null, 'app-modal-content');
        this.elt = EQuery.elemt('div', null, 'app-modal m-sw', { id: 'dragable' });
        EQuery(this.close).click(function() {
            _this.close();
        });
        if (data.header !== undefined) EQuery(this.modalHeader).find('.title').text(data.header);
        EQuery(this.elt).addChild([this.modalHeader]);
        if (data.content !== undefined) {
            if (typeof data.content == 'object') {
                for (let i = 0; i < data.content.length; i++) {
                    let row = EQuery.elemt('div', null, 'app-row');
                    EQuery(this.modalContent).addChild([row]);
                    for (let col in data.content[i]) {
                        let colum = EQuery.elemt('div', null, 'app-col ' + col);
                        EQuery(row).addChild([colum]);
                        if (typeof data.content[i][col] == 'object') {
                            for (let g in data.content[i][col]) {
                                if (g == 'html') {
                                    this[g] = data.content[i][col][g];
                                    EQuery(colum).addChild([data.content[i][col][g]]);
                                } else {
                                    this[g] = data.content[i][col][g];
                                    EQuery(colum).addChild([data.content[i][col][g].elt]);
                                }
                            }
                        } else {
                            EQuery(colum).addChild([EQuery.elemt('div', data.content[i][col], 'app-modal-text')]);
                        }
                    }
                }
            } else {
                EQuery(this.modalContent).addChild([EQuery.elemt('div', data.content, 'app-modal-text')]);
            }
            EQuery(this.elt).addChild([this.modalContent]);
        }

        if (data.btns) {
            for (let btn in data.btns) {
                let _btn = EQuery.elemt('button', btn, 'app-modal-btn button-root');
                _btn.func = data.btns[btn];
                EQuery(this.modalBottom).addChild([_btn]);
                EQuery(_btn).click(function() {
                    this.func(_this);
                });
            }
            EQuery(this.elt).addChild([this.modalBottom]);
        }

        EQuery(parent).show();
        EQuery(parent).addChild([this.elt]);
        EQuery(this.elt).dragElement();

        this.close = function() {
            EQuery(parent).removeChild([_this.elt]);
            EQuery(parent).hide();
        };
    }

    function openBottom(app, data) {
        if (!(this instanceof openBottom)) return new openBottom(app, data);
        let parent = app.display.overlay, i = 0;
        let _this = this;

        this.close = EQuery.elemt('div', [EQuery.elemt('a', null, 'icon icon-close', null, 'color: inherit;padding: 2px;padding-top: 5px;width: 30px;height: 20px;font-size: 20px;cursor: pointer;')], null, null, 'display: flex;flex-grow: 0;flex-shrink: 0;text-align: center;position: relative;z-index: 3000;app-region: no-drag;height: 100%;margin-left: auto;');
        this.modalBottom = EQuery.elemt('div', null, 'app-bottom-bottom');
        this.modalHeader = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', null, 'title', null, 'margin-left: auto'), this.close], 'app-bottom-title', null, 'position: absolute;left: 50%;transform: translate(-50%, 0px);display: flex;width: 100%;')], 'app-bottom-header', {id: 'dragable-header'});
        this.modalContent = EQuery.elemt('div', null, 'app-bottom-content');
        this.elt = EQuery.elemt('div', null, 'app-bottom-menu');
        EQuery(this.close).click(function() {
            _this.close();
        });

        EQuery(parent).show();
        EQuery(parent.addChild([this.elt]));

        this.close = function () {
            EQuery(parent).removeChild([this._elt]);
            EQuery(parent).hide();
        }
    }

    function autoResponse(app, data) {
        if (!(this instanceof autoResponse)) return new autoResponse(app, data);

        this.btns = EQuery.elemt('div', null, null, null, '');
        this.content = EQuery.elemt('div', null, null, null, 'padding: 2px 12px;font-size: 12px;opacity: .8');
        this.header = EQuery.elemt('div', [EQuery.elemt('h3', null, null, null, 'font-size: 14px;opacity: .8;text-align: left;margin: 0;padding: 14px 20px;')]);
        this.container = EQuery.elemt('div', [this.header, this.content], null, null, 'background-color: #00000059;border-top-left-radius: 12px;border-top-right-radius: 12px;border-bottom-left-radius: 12px;border-bottom-right-radius: 12px;height: 100px;width: 100%;box-shadow: -1px -1px 6px 0px #0000005c');
        this.elt = EQuery.elemt('div', [this.container, this.btns], 'auto-reponse', null, 'position: absolute;bottom :10px;left: 0;height: auto;width: 100%;padding: 8px 16px;');

        if (!(data.header == undefined || data.header == ''))  {
            EQuery(this.header).find('h3').text(data.header);
        } else {
            EQuery(this.header).remove();
        }

        if (data.content !== undefined) {
            if (typeof data.content == 'object') {
                for (let i = 0; i < data.content.length; i++) {
                    let row = EQuery.elemt('div', null, 'app-row');
                    EQuery(this.content).addChild([row]);
                    for (let col in data.content[i]) {
                        let colum = EQuery.elemt('div', null, 'app-col ' + col);
                        EQuery(row).addChild([colum]);
                        if (typeof data.content[i][col] == 'object') {
                            for (let g in data.content[i][col]) {
                                if (g == 'html') {
                                    this[g] = data.content[i][col][g];
                                    EQuery(colum).addChild([data.content[i][col][g]]);
                                } else {
                                    this[g] = data.content[i][col][g];
                                    EQuery(colum).addChild([data.content[i][col][g].elt]);
                                }
                            }
                        } else {
                            EQuery(colum).addChild([EQuery.elemt('div', data.content[i][col], 'app-modal-text')]);
                        }
                    }
                }
            } else {
                EQuery(this.content).addChild([EQuery.elemt('div', data.content, 'app-modal-text')]);
            }
        } else {
            EQuery(this.content).remove();
        }

        if (data.btn !== undefined) {
            for (let i = 0;i < data.btn.length;i++) {
                let btn = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', data.btn[i].msg)])], null, null, 'background-color: #00000059;border: 1px #e1e1e194 solid;margin-top: 1px;padding: 4px;display: inline-block;cursor: pointer');
                EQuery(this.btns).addChild([btn]);
                EQuery(this.btns).find('div:first-child').css('border-bottom-left-radius: 12px;border-bottom-right-radius: 0px;');
                EQuery(this.btns).find('div:last-child').css('border-bottom-left-radius: 0px;border-bottom-right-radius: 12px;');
                EQuery(btn).click(data['btn'][i].func);
            }
            EQuery(this.container).css('border-bottom-left-radius: 0px;');
        } else {
            EQuery(this.btns).remove();
            EQuery(this.container).css('border-bottom-left-radius: 12px;');
        }

        if (this.btns.childElementCount == 1) {
            EQuery(this.btns.children[0]).css('border-bottom-right-radius: 12px;border-bottom-left-radius: 12px');
        }
    }

    function imageDrawer(app, file) {
        if (!(this instanceof imageDrawer)) return new imageDrawer(app, file);
        let _this = this;
        this.pace = 0;
        this.history = [];
        this.canvas = EQuery.canvas();
        this.canvas2 = EQuery.canvas();
        this.img = EQuery.elemt('img', null, null, {'src': file}, 'position: absolute;top: 0;height: 100%;width: 100%;');
        this.container = EQuery.elemt('div', [this.canvas.domElement, this.canvas2.domElement, this.img], 'app-image-container', null, 'position: relative');
        this.elt = EQuery.elemt('div', [this.container], 'app-image-root');

        EQuery(this.canvas.domElement).css('position: absolute;top: 0;height: 100%;width: 100%');
        EQuery(this.canvas2.domElement).css('position: absolute;top: 0;height: 100%;width: 100%');
        window._image = this.img;
        window._canvas = this.canvas
        window._canvas2 = this.canvas;

        this.undo = function () {

        };

        this.redo = function () {

        };

        EQuery(this.canvas.domElement).on('mousedown', function (e) {
            console.log(e.x, e.y);
        })

    }

    function ProfileSelector() {
        if (!(this instanceof ProfileSelector)) return new ProfileSelector();
        let _this = this;
        this.stats = 0;
        this.canvas = EQuery.canvas();
        this.canvas.setSize(300, 300);
        
        this.filePicker = EQuery.elemt('input', null, null, {type: 'file'});
        this.input = EQuery.elemt('input', null, null, {name: 'profile_pic', value: ''}, 'display: none');
        this.video = EQuery.elemt('video', null, null, {height: 300, width: 300}, 'display: none');
        this.img = EQuery.elemt('img', null, null, {height: 300, width: 300}, 'display: none');
        this.btn = EQuery.elemt('a', 'Open Camera', 'btn e-btn-padding e-dark-grey e-hover-opacity e-mob-left', null, 'left: 0');
        this.btn3 = EQuery.elemt('a', 'Done', 'btn e-btn-padding e-green e-hover-opacity', null, 'display: none;right: 0;');
        this.btn2 = EQuery.elemt('a', 'Upload Pic', 'btn e-btn-padding e-dark-grey e-hover-opacity', null, 'left: 50%;transform:translate(-50%, 0);');
        this.inner = EQuery.elemt('div', [this.canvas.domElement, this.img, this.video, this.btn, this.btn2, this.btn3]);
        this.elt = EQuery.elemt('div', [this.inner, this.input], null, {id: 'app-profile-selector'});

        EQuery(this.btn).click(function () {
            if (_this.stats == 0) {
                navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {_this.video.srcObject = stream;_this.video.play();}).catch(function () {Notice('Camera not found. Either unavaliable or blocked.');EQuery(_this.btn).hide();});
                EQuery(_this.video).show();
                EQuery(_this.img).hide();
                EQuery(this).text('Take a pic');
                EQuery(_this.btn3).hide();
                _this.stats = 1;
            } else if (_this.stats == 1) {
                this.canvas.drawImage(_this.video, 0, 0, 300, 300);
                EQuery(_this.video).hide();
                EQuery(_this.img).hide();
                EQuery(this).text('Retake pic?');
                _this.stats = 2;
                EQuery(_this.btn3).show();
            } else if (_this.stats == 2) {
                navigator.mediaDevices.getUserMedia({video: true}).then((stream) => {_this.video.srcObject = stream;_this.video.play();}).catch(function () {Notice('Camera not found. Either unavaliable or blocked.');EQuery(_this.btn).hide();});
                EQuery(_this.video).show();
                EQuery(this).text('Take a pic');
                EQuery(_this.btn3).hide();
                _this.stats = 1;
            }
            EQuery(_this.subB).hide();
        });

        EQuery(this.btn3).click(function () {
            if (_this.stats == 4) {
                this.stats = 3
                _this.canvas.drawImage(_this.img, 0, 0, 300, 300);

            } else {
                _this.canvas.drawImage(_this.video, 0, 0, 300, 300);
            }
            EQuery(_this.input).val(_this.canvas.dataUrl());
            this.stats = 3;
            EQuery(_this.subB).show();
        });

        EQuery(this.btn2).click(function (){_this.filePicker.click();EQuery(_this.subB).hide();});
        EQuery(this.filePicker).change(function () {
            let file = this.files[0];
            let filename = file.name;
            let ext = filename.split('.').pop().toLowerCase();
            let reader = new FileReader();
            reader.onprogress = function(event) {
                let size = '(' + Math.floor(event.total / 1000).format() + ' KB)';
                let progress = Math.floor((event.loaded / event.total) * 100) + '%';
                log(logTime(), ' Loading', filename, size, progress);
            };
            reader.onload = function(event) {
                EQuery(_this.btn2).click(function (){_this.filePicker.click()});
                _this.filePicker = EQuery.elemt('input', null, null, {type: 'file'});
                _this.img.src = event.target.result;
                EQuery(_this.img).show();
                EQuery(_this.video).hide();
                EQuery(_this.btn3).show();
                _this.stats = 4;
            };
            reader.readAsDataURL(file);
        });
    }

    function showTab(n, panel) {
        let tab = EQuery(panel.div).find('.form-tab');
        tab.hide()
        EQuery(tab[n]).show();
        EQuery(panel.subBtn).hide();
        EQuery(panel.sub2Btn).hide();
        EQuery(panel.sub3Btn).hide();
        EQuery(panel.sub4Btn).hide();
        console.log(n, tab.length)
        
        if (n == 0) {
            EQuery(panel.prevBtn).hide();
            EQuery(panel.nextBtn).show();
            EQuery(panel.nextBtn).css('width: 100%');
        } else if (1 <= n < tab.length - 3 && n !== tab.length - 3) {
            EQuery(panel.prevBtn).show();
            EQuery(panel.nextBtn).show();
            EQuery(panel.prevBtn).css('width: calc(50% - 6px)');
            EQuery(panel.nextBtn).css('width: calc(50% - 6px)');
        } if (n == 3) {
            EQuery(panel.nextBtn).hide();
            EQuery(panel.subBtn).show();
            EQuery(panel.prevBtn).show();
            EQuery(panel.prevBtn).css('width: calc(50% - 6px)');
            EQuery(panel.subBtn).css('width: calc(50% - 6px)');
        } if (n == 4) {
            EQuery(panel.nextBtn).hide();
            EQuery(panel.prevBtn).hide();
            EQuery(panel.subBtn).hide();
            EQuery(panel.dotContainer).hide()
            EQuery(panel.sub2Btn).show();
        } if (n == 6) {
            EQuery(panel.nextBtn).hide();
            EQuery(panel.prevBtn).hide();
            EQuery(panel.subBtn).hide();
            EQuery(panel.dotContainer).hide()
            EQuery(panel.sub4Btn).show();
        }
        fixStepIndicator(currentTab, panel);
    }

    function nextPrev(n, panel) {
        let tab = EQuery(panel.div).find('.form-tab');
        if (n == 1 && !validateSignupForm(panel)) return false;
        else {
            EQuery(tab[currentTab]).hide();
            currentTab += n;
            if (currentTab >= tab.length - 2) {
                EQuery(panel.subBtn).show();
                EQuery(panel.nextBtn).hide();
                return false;
            }
            showTab(currentTab, panel);
        }
    }

    function fixStepIndicator(n, panel) {
        let step = EQuery(panel.dotContainer).find('.dots');
        for (let i = 0; i < step.length; i++) {
            EQuery(step[i]).removeClass('active');
        }
        EQuery(step[n]).addClass('active');
    }

    function validateLoginForm(panel) {
        let tab = EQuery(panel.div).find('.tab');
        let input = EQuery(tab[0]).find('input');
        for (let i = 0; i < input.length; i++) {
            if (input[i].value == '') {
                EQuery(input[i]).addClass('invalid');
                valid = false;
            } else {
                valid = true;
            }
        }
        return valid;
    }

    function validateSignupForm(panel) {
        let tab = EQuery(panel.div).find('.form-tab');
        let step = EQuery(panel.dotContainer).find('.dots');
        let input = EQuery(tab[currentTab]).find('input.required');
        for (let i = 0; i < input.length; i++) {
            if (input[i].value == '') {
                EQuery(input[i]).addClass('invalid');
                valid = false;
            } else {
                valid = true;
            }
        }
        if (valid) {
            EQuery(step[currentTab]).addClass('finish');
        }
        return valid;
    }

    function validPsw(panel) {
        let input = panel.pswInput;
        let l, u, n, c;
        let lowerCaseLetters = /[a-z]/g;
        let upperCaseLetters = /[A-Z]/g;
        let numbers = /[0-9]/g;

        EQuery(input).on('keyup', function() {
            if (input.value.match(lowerCaseLetters)) {
                EQuery(panel.letter).removeClass('invalid');
                EQuery(panel.letter).addClass('valid');
                l = true;
            } else {
                EQuery(panel.letter).removeClass('valid');
                EQuery(panel.letter).addClass('invalid');
                l = false;
            }

            if (input.value.match(upperCaseLetters)) {
                EQuery(panel.capital).removeClass('invalid');
                EQuery(panel.capital).addClass('valid');
                u = true;
            } else {
                EQuery(panel.capital).removeClass('valid');
                EQuery(panel.capital).addClass('invalid');
                u = false;
            }

            if (input.value.match(numbers)) {
                EQuery(panel.number).removeClass('invalid');
                EQuery(panel.number).addClass('valid');
                n = true;
            } else {
                EQuery(panel.number).removeClass('valid');
                EQuery(panel.number).addClass('invalid');
                n = false;
            }

            if (input.value.length >= 8) {
                EQuery(panel.length).removeClass('invalid');
                EQuery(panel.length).addClass('valid');
                c = true;
            } else {
                EQuery(panel.length).removeClass('valid');
                EQuery(panel.length).addClass('invalid');
                c = false;
            }
            if (l && u && n && c)
                validpsw = true;
            else {
                validpsw = false;
            }
        });
    }

    async function getCountryNumbers() {
        //let countries = await (await fetch('./numbers.json')).json();
        window.country_arr = [];
        for (let i = 0; i < countries.length; i++) {
            let country = countries[i];
            window.country_arr.push('' + country.name + ': ' + '(' + country.mobileCode + ')');
        }
    }

    function loginPanel(elt) {
        if (!(this instanceof loginPanel)) {
            return new loginPanel(elt);
        }

        this.err = EQuery.elemt('p', null, 'error e-text-red e-text-center e-bold');

        this.type = EQuery.elemt('input', null, null, {type: 'hidden', value: 'chatapp-login', name: 'type'});

        this.subBtn = EQuery.elemt('button', 'Submit', 'btn btn-padding-large btn-green e-mob-right');

        this.btnContainer = EQuery.elemt('div', [this.subBtn], 'container', null, 'overflow: auto');

        this.checkPsw = EQuery.elemt('input', null, null, {name: 'checkbox', type: 'checkbox'});
        this.check = EQuery.elemt('span', [this.checkPsw, EQuery.elemt('span', ' Show Password')], null, null, 'text-align: left');

        this.pswInput = EQuery.elemt('input', null, null, {name: 'psw', type: 'password', placeholder: 'Password', autocomplete: 'current-password', pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'});
        this.emailInput = EQuery.elemt('input', null, null, {name: 'email', type: 'text', placeholder: 'Email', autocomplete: 'username'});
        this.tab = EQuery.elemt('div', [this.emailInput, this.pswInput, this.check], 'form-tab');

        this.div = EQuery.elemt('div', [this.err, this.tab]);
        this.heading = EQuery.elemt('h1', 'Login');
        this.loginForm = EQuery.elemt('form', [this.heading, this.div, this.type], 'regForm', {method: 'post'});

        this.qsw = EQuery.elemt('span', [EQuery.elemt('span', "Don't an account? "), EQuery.elemt('a', 'Register', null, {href: 'javascript:void(0)'})]);
        this.psw = EQuery.elemt('span', [EQuery.elemt('a', 'Forgot Password?', 'e-mob-right', {href: 'javascript:void(0)'}, 'width: 121px')]);
        this.bottom = EQuery.elemt('div', [this.qsw, this.psw], 'container', null, 'background-color: rgb(34 34 34);border-radius: 0 0 15px 15px;');

        this.container = EQuery.elemt('div', [this.loginForm, this.btnContainer, this.bottom], 'e-round-16 e-col e-shadow e-center e-round-16');

        EQuery(this.tab).show();
    }

    function logoutPanel(elt) {
        if (!(this instanceof logoutPanel)) {
            return new logoutPanel(elt);
        }

        this.err = EQuery.elemt('p', null, 'error e-text-red e-text-center e-bold');

        this.type = EQuery.elemt('input', null, null, {type: 'hidden', value: 'logout', name: 'type'});

        this.subBtn = EQuery.elemt('button', 'Submit', 'btn btn-padding-large btn-green e-mob-right');

        this.btnContainer = EQuery.elemt('div', [this.subBtn], 'container', null, 'overflow: auto');

        this.checkPsw = EQuery.elemt('input', null, null, {type: 'checkbox'});
        this.check = EQuery.elemt('span', [this.checkPsw, elemt('span', ' Show Password')], null, null, 'text-align: left');

        this.pswInput = EQuery.elemt('input', null, null, {name: 'psw', type: 'password', placeholder: 'Password', pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'});

        this.logoutLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Enter your password to logout')]);
        this.tab = EQuery.elemt('div', [this.logoutLabel, this.pswInput, this.check], 'tab');

        this.div = EQuery.elemt('div', [this.err, this.tab]);
        this.heading = EQuery.elemt('h1', 'Logout');
        this.logoutForm = EQuery.elemt('form', [this.heading, this.div, this.type], 'regForm', {method: 'post'});

        this.a = EQuery.elemt('a', 'Cancel', null, {href: 'javascript:void(0)'});
        this.qsw = EQuery.elemt('span', [EQuery.elemt('span', 'You can cancel if you want to: '), this.a]);
        this.bottom = EQuery.elemt('div', [this.qsw], 'container', null, 'background-color: #f1f1f1;border-radius: 0 0 15px 15px');

        this.container = EQuery.elemt('div', [this.logoutForm, this.btnContainer, this.bottom], 'e-white e-round-16 e-col e-shadow e-center e-round-16');

        showElemt(this.tab);
    }

    function forgotPanel(elt) {
        if (!(this instanceof forgotPanel)) {
            return new forgotPanel(elt);
        }

        this.err = EQuery.elemt('p', null, 'error e-text-red e-text-center e-bold');

        this.type = EQuery.elemt('input', null, null, {type: 'hidden',  value: 'logout',  name: 'type'});

        this.subBtn = EQuery.elemt('button', 'Finish', 'btn btn-padding-large btn-green e-mob-right', null, 'display: none');
        this.prevBtn = EQuery.elemt('button', 'Previous', 'btn btn-padding-large btn-green e-mob-left', null, 'display: none');
        this.nextBtn = EQuery.elemt('button', 'Next', 'btn btn-padding-large btn-green e-mob-right');
        this.btnContainer = EQuery.elemt('div', [this.nextBtn, this.prevBtn, this.subBtn], 'container', null, 'overflow: auto');

        this.dots4 = EQuery.elemt('span', null, 'dots');
        this.dots3 = EQuery.elemt('span', null, 'dots');
        this.dots2 = EQuery.elemt('span', null, 'dots');
        this.dots1 = EQuery.elemt('span', null, 'dots');
        this.dotContainer = EQuery.elemt('div', [this.dots1, this.dots2, this.dots3, this.dots4], null, null, 'text-align:center;margin-top:40px;');

        this.msg = EQuery.elemt('h4', [EQuery.elemt('span', 'Your password has been reset. Continue to '), EQuery.elemt('a', 'Login', null, {href: 'javascropt:void(0)'})]);
        this.tab4 = EQuery.elemt('div', [this.msg], 'form-tab');

        this.header = EQuery.elemt('h4', 'Password must contain the following:');
        this.letter = EQuery.elemt('p', 'A lowercase letter', 'invalid');
        this.capital = EQuery.elemt('p', 'A uppercase letter', 'invalid');
        this.number = EQuery.elemt('p', 'A number', 'invalid');
        this.length = EQuery.elemt('p', 'Minimum 8 Charaters', 'invalid');
        this.message = EQuery.elemt('div', [this.header, this.letter, this.capital, this.number, this.length], 'message');

        this.checkPsw = EQuery.elemt('input', null, null, {type: 'checkbox'});
        this.check = EQuery.elemt('span', [this.checkPsw, EQuery.elemt('span', ' Show Password')], null, null, 'text-align: left');
        this.pswInput = EQuery.elemt('input', null, null, {name: 'psw', type: 'password', placeholder: 'Password', pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'});
        this.pswLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Enter your new password')]);
        this.tab3 = EQuery.elemt('div', [this.pswLabel, this.pswInput, this.check, this.message], 'form-tab');

        this.resendEmail = EQuery.elemt('a', 'Resend Code', null, null, 'text-decoration: underline;display: none;cursor: pointer');
        this.resendCountdown = EQuery.elemt('div', '0s', null, null, 'font-family: monospace;color: #fff8;font-size: 10px;display: none;')
        this.codeInput = EQuery.elemt('input', null, null, {name: 'code', type: 'text', placeholder: 'Code'});
        this.codeLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Enter the six-digit code sent to your email address:')]);
        this.tab2 = EQuery.elemt('div', [this.codeLabel, this.codeInput, this.resendCountdown, this.resendEmail], 'form-tab');

        this.emailInput = EQuery.elemt('input', null, null, {name: 'email', type: 'text', placeholder: 'Email'});
        this.forgotLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Enter your email address to change your password:')]);
        this.tab1 = EQuery.elemt('div', [this.forgotLabel, this.emailInput], 'form-tab');

        this.div = EQuery.elemt('div', [this.err, this.tab1, this.tab2, this.tab3, this.tab4]);
        this.heading = EQuery.elemt('h1', 'Forgot your Password?');
        this.forgotForm = EQuery.elemt('form', [this.heading, this.div, this.type], 'regForm', {method: 'post'});

        this.qsw = EQuery.elemt('span', [EQuery.elemt('span', 'Return back to '), EQuery.elemt('a', 'Login', null, {href: 'javascript:void(0)'})]);
        this.bottom = EQuery.elemt('div', [this.qsw], 'container', null, 'background-color: rgb(34 34 34);border-radius: 0 0 15px 15px');

        this.container = EQuery.elemt('div', [this.forgotForm, this.btnContainer, this.bottom], 'e-round-16 e-col e-shadow e-center e-round-16');

        EQuery(this.tab1).show();
    }

    function signupPanel(elt) {
        if (!(this instanceof signupPanel)) return new signupPanel(elt);
        this.country_nubers = window.country_arr;
        this.profileSelector = new ProfileSelector();
        this.yearSelect = new Select({name: 'year', select: ['1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012']});
        this.monthSelect = new Select({name: 'month', select: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']});
        this.dateSelect = new Select({name: 'date',  select: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]});
        this.countrySelect = new Select({name: 'country_numbers_bad',  select: this.country_nubers});
        this.countryInput = EQuery.elemt('input', null, null, {name: 'country_numbers'}, 'display: none');

        this.err = EQuery.elemt('p', null, 'error e-text-red e-text-center e-bold');
        this.type = EQuery.elemt('input', null, null, {type: 'hidden',  value: 'signup',  name: 'type'});

        this.sub4Btn = EQuery.elemt('button', 'Submit', 'btn btn-padding-large btn-green e-mob-right');
        this.sub3Btn = EQuery.elemt('button', 'Submit', 'btn btn-padding-large btn-green e-mob-right');
        this.sub2Btn = EQuery.elemt('button', 'Submit', 'btn btn-padding-large btn-green e-mob-right');
        this.subBtn = EQuery.elemt('button', 'Submit', 'btn btn-padding-large btn-green e-mob-right');
        this.nextBtn = EQuery.elemt('button', 'Next', 'btn btn-padding-large btn-green e-mob-right');
        this.prevBtn = EQuery.elemt('button', 'Previous', 'btn btn-padding-large dark-grey e-mob-left', null, 'margin-right: 12px;');
        this.btnContainer = EQuery.elemt('div', [this.prevBtn, this.nextBtn, this.subBtn, this.sub2Btn, this.sub3Btn, this.sub4Btn], 'container', null, 'overflow: auto');

        this.dots4 = EQuery.elemt('span', null, 'dots');
        this.dots3 = EQuery.elemt('span', null, 'dots');
        this.dots2 = EQuery.elemt('span', null, 'dots');
        this.dots1 = EQuery.elemt('span', null, 'dots');
        this.dotContainer = EQuery.elemt('div', [this.dots1, this.dots2, this.dots3, this.dots4], null, null, 'text-align:center;margin-top:40px;');

        this.header = EQuery.elemt('h4', 'Password must contain the following:');
        this.letter = EQuery.elemt('p', 'A lowercase letter', 'invalid');
        this.capital = EQuery.elemt('p', 'A uppercase letter', 'invalid');
        this.number = EQuery.elemt('p', 'A number', 'invalid');
        this.length = EQuery.elemt('p', 'Minimum 8 Charaters', 'invalid');
        this.message = EQuery.elemt('div', [this.header, this.letter, this.capital, this.number, this.length], 'message', null, 'display: block');

        this.profileSelector.subB = this.sub4Btn;
        this.profileContainer = EQuery.elemt('div', [this.profileSelector.elt, this.profileSelector.input], 'e-container e-margin-bottom');
        this.profileLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Profile Pic')]);
        this.tab7 = EQuery.elemt('div', [this.profileLabel, EQuery.elemt('p', 'Take your profile pic.'), this.profileContainer], 'form-tab');

        this.resendEmail = EQuery.elemt('a', 'Resend Code', null, null, 'text-decoration: none;display: none;cursor: pointer');
        this.resendCountdown = EQuery.elemt('div', '0s', null, null, 'font-family: monospace;color: #fff8;font-size: 10px;display: none;')
        this.confirmInput = EQuery.elemt('input', null, null, {name: 'emailCode',  type: 'text',  placeholder: 'Enter six digit Code'});
        this.confirmLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Comfirm Email')]);
        this.tab6 = EQuery.elemt('div', [this.confirmLabel, EQuery.elemt('p', 'Enter six digit code sent to your email:'), this.confirmInput, this.resendCountdown, this.resendEmail], 'form-tab');

        this.usernameInput = EQuery.elemt('input', null, null, {name: 'username',  type: 'text',  placeholder: 'Enter username'});
        this.usernameLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Enter your username')]);
        this.tab5 = EQuery.elemt('div', [this.usernameLabel, EQuery.elemt('p', 'Just something people can call you:'), this.usernameInput], 'form-tab');

        this.checkPsw = EQuery.elemt('input', null, null, {type: 'checkbox'});
        this.check = EQuery.elemt('span', [this.checkPsw, EQuery.elemt('span', ' Show Password')], null, null, 'text-align: left');
        this.pswInput = EQuery.elemt('input', null, 'required', {name: 'psw',  type: 'password',  placeholder: 'Password',  pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}', autocomplete: 'current-password'});
        this.loginLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Password')]);
        this.tab4 = EQuery.elemt('div', [this.loginLabel, this.pswInput, this.check, this.message], 'form-tab');

        this.year = EQuery.elemt('div', [this.yearSelect.elt], 'year-select');
        this.yearLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Year')]);
        this.month = EQuery.elemt('div', [this.monthSelect.elt], 'month-select');
        this.monthLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Month')]);
        this.date = EQuery.elemt('div', [this.dateSelect.elt], 'date-select');
        this.birthLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Date of Birth')]);
        this.tab3 = EQuery.elemt('div', [this.birthLabel, this.date, this.monthLabel, this.month, this.yearLabel, this.year], 'form-tab');

        // this.profile = EQuery.elemt('input', null, null, { 'name': 'profile', 'type': 'file' });
        // this.profileLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Select your profile picture:')]);
        this.phoneInput = EQuery.elemt('input', null, 'required', {type: 'text',  placeholder: 'Phone No'}, 'width: 100%');
        this.phoneInput2 = EQuery.elemt('input', null, null, {name: 'phone'}, 'display: none');
        this.phoneSelect = EQuery.elemt('div', [this.countrySelect.elt], null, null, 'width: 35%');
        this.emailInput = EQuery.elemt('input', null, 'required', {name: 'email',  type: 'text',  placeholder: 'Email'});
        this.contactLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Contact Info')]);
        this.tab2 = EQuery.elemt('div', [this.contactLabel, this.emailInput, EQuery.elemt('div', [this.phoneSelect, this.countryInput, this.phoneInput, this.phoneInput2], null, null, 'display: flex')], 'form-tab');

        this.lastNameInput = EQuery.elemt('input', null, 'required', {name: 'lastname',  type: 'text',  placeholder: 'Lastname'});
        this.firstNameInput = EQuery.elemt('input', null, 'required', {name: 'firstname',  type: 'text',  placeholder: 'Firstname'});
        this.nameLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Name')]);
        this.tab1 = EQuery.elemt('div', [this.nameLabel, this.firstNameInput, this.lastNameInput], 'form-tab');

        this.div = EQuery.elemt('div', [this.err, this.tab1, this.tab2, this.tab3, this.tab4, this.tab5, this.tab6, this.tab7]);
        this.heading = EQuery.elemt('h1', 'Register');
        this.signupForm = EQuery.elemt('form', [this.heading, this.div, this.type], 'regForm', {method: 'post'});

        this.qsw = EQuery.elemt('span', [EQuery.elemt('span', 'Already have an account? '), EQuery.elemt('a', 'Login', null, {href: 'javascript:void(0)'})]);
        this.bottom = EQuery.elemt('div', [this.qsw], 'container', null, 'background-color: rgb(34 34 34);border-radius: 0 0 15px 15px;');

        this.container = EQuery.elemt('div', [this.signupForm, this.btnContainer, this.dotContainer, this.bottom], 'e-round-16 e-col e-shadow e-center e-round-16');
    }

    function openLogin(app) {
        let display = app.display;
        let panel = (app.panel[0] = new loginPanel());
        display.login = EQuery.elemt('div', [panel.container], 'clearfix', {id: 'login-container'}, 'overflow: auto');
        EQuery(display.loginContainer).removeChildren();
        EQuery(display.loginContainer).addChild([EQuery.elemt('div', [EQuery.elemt('img', null, 'app-logo', {src: './assets/logo_img2.png'})], 'app-logo-container', null, 'text-align: center'), display.login]);

        EQuery(panel.checkPsw).click(function() {
            if (panel.pswInput.attributes.type.value === 'password') {
                EQuery(panel.pswInput).attr({type: 'text'});
            } else {
                EQuery(panel.pswInput).attr({type: 'password'});
            }
        });

        EQuery(panel.qsw).find('a').click(function() {
            openRegister(app);
        });
        EQuery(panel.psw).find('a').click(function() {
            openForgetPsw(app);
        });
        EQuery(panel.subBtn).click(function() {
            subLogin();
        });
        EQuery(panel.pswInput).on(['keydown', 'keypress'], function (e) {
            if (e.keyCode == 13) subLogin()
        })

        function subLogin() {
            EQuery(panel.err).text('');
            let spinner = EQuery.elemt('div', null, 'app-spinner');
            EQuery(spinner).spinner();
            let modal = openModal(app, { content: [{ 'm2': { html: spinner }}] });
            fetch(host + 'chatapp/login/', {
                method: 'POST',
                body: new FormData(panel.loginForm)
            }).then((response)=>response.text()).then((data)=>{
                modal.close();
                if (data[0] == '{') {
                    let rawData = JSON.parse(data);
                    let entries = ['id', 'firstname', 'lastname', 'email', 'contact', 'country', 'dd', 'mm', 'yyyy', 'username', 'status', 'bio', 'confirm_email', 'confirm_sms', 'profile_pic', 'friends', 'groups'];
                    let userData = {status: '', username: '', id: 0, img: './assets/img.png'};
                    for (let i = 0;i < entries.length;i++) {
                        userData[entries[i]] = rawData[entries[i]];
                    }
                    if (app.data == null) app.data = {};
                    app.data[rawData['id']] = {userData: {}, msg: {}, contacts: {}, logged_in: true};
                    app.data[rawData['id']].userData = userData;
                    Notice('Login successful');
                    app.reload();
                } else if (data == 'err18346') {
                    EQuery(panel.err).text('An error occured while processig your request');
                } else if (data == 'err8014532') {
                    sendIPEmail(panel);
                } else if (data == 'err974032') {
                    EQuery(panel.err).text('Incorect Password!');
                } else if (data == 'err7934827') {
                    EQuery(panel.err).text('No such account. Please Register');
                } else {
                    EQuery(panel.err).text('An error occoured, try again later');
                }
                offline = false;
                updateDisplay(display);
            }).catch(()=>{
                offline = true;
                log.error(logTime() + 'Error requesting data: null');
                EQuery(panel.err).text('Check your internet connection');
                Notice('Bridge Error 1: Failed to connect to sserver');
                modal.close();
                updateDisplay(display);
            });
        }
    }

    function openRegister(app, tab) {
        currentTab = tab ? tab : 0;
        let a = 'invalid';
        let display = app.display;
        let panel = new signupPanel();
        display.register = EQuery.elemt('div', [panel.container], 'clearfix', {id: 'login-container'}, 'overflow: auto');
        EQuery(display.loginContainer).removeChildren();
        EQuery(display.loginContainer).addChild([EQuery.elemt('div', [EQuery.elemt('img', null, 'app-logo', {src: './assets/logo_img2.png'})], 'app-logo-container', null, 'padding-left: calc((100% - 200px) / 2)'), display.register]);
        EQuery(display.loginContainer).show()
        showTab(currentTab, panel);
        validPsw(panel);
        if (tab == 5) send_email();
        if (tab == 6) {
            EQuery(panel.prevBtn).hide();
            EQuery(panel.nextBtn).hide();
            EQuery(panel.subBtn).hide();
            EQuery(panel.sub2Btn).hide();
            EQuery(panel.sub3Btn).hide();
            EQuery(panel.sub4Btn).hide();
        }
        
        console.log('%cDon\'t paste any code here!!', 'color: #f00;font-weight: bold;font-size: 35px');

        EQuery(panel.qsw).find('a').click(function() {
            openLogin(app);
        });
        EQuery(panel.nextBtn).click(function() {
            nextPrev(1, panel);
        });
        EQuery(panel.prevBtn).click(function() {
            nextPrev(-1, panel);
        });
        EQuery(panel.checkPsw).click(function() {
            if (panel.pswInput.attributes.type.value === 'password') {
                EQuery(panel.pswInput).attr({type: 'text'});
            } else {
                EQuery(panel.pswInput).attr({type: 'password'});
            }
        });
        EQuery(panel.resendEmail).click(send_email);
        EQuery(panel.subBtn).click(function() {
            panel.err.innerHTML = '';
            let pass = false;
            let countryFull = EQuery(panel.countrySelect.input).val();
            let phoneVal = EQuery(panel.phoneInput).val();
            let phoneCode = countryFull.split(':')[1].replace(' ', '').replace('(', '').replace(')', '');

            if (phoneVal.indexOf(phoneCode) !== -1) {
                EQuery(panel.phoneInput2).val(phoneVal);
                pass = true;
            } else if (phoneVal.indexOf('+') !== -1) {
                Notice('Enter right phone code');
                showTab(1, panel);
                return;
            } else {
                EQuery(panel.phoneInput2).val(phoneCode + '' + Number(phoneVal));
                pass = true;
            }
            if (pass) {
                let spinner = EQuery.elemt('div', null, 'app-spinner');
                EQuery(spinner).spinner();
                let modal = openModal(app, { content: [{ 'm2': { html: spinner }}] });
                EQuery(panel.countryInput).val(countryFull.split(':')[0]);
                fetch(host + 'chatapp/register/', {
                    method: 'POST',
                    body: new FormData(panel.signupForm)
                }).then((response)=>response.text()).then((data)=>{
                    modal.close();
                    a = data;
                    if (data.indexOf('success') > -1) {
                        if (setUserData(app, panel, Number(data.replace('success', '')))) {
                            EQuery('.form-tab').hide();
                            showTab(4, panel);
                            EQuery(panel.sub2Btn).show();
                            EQuery(panel.dotContainer).hide();
                            EQuery(panel.subBtn).hide();
                            EQuery(panel.prevBtn).hide();
                            EQuery(panel.nextBtn).hide();
                        }
                    } else if (data == 'err137491') {
                        EQuery(panel.err).text('The image file is too large.');
                    } else if (data == 'err6845666') {
                        EQuery(panel.err).text('File format is incorrect');
                    } else if (data == 'err45825') {
                        EQuery(panel.err).text('Name exists. Enter another one');
                        showTab(0, panel);
                        currentTab = 0;
                    } else if (data == 'err38829') {
                        EQuery(panel.err).text('Email address exists. Enter another one');
                        showTab(1, panel);
                        currentTab = 1;
                    } else if (data == 'err01346') {
                        EQuery(panel.err).text('Password exists. Enter another one');
                    } else if (data == 'err24456453') {
                        EQuery(panel.err).text('Your request could not be processed. Try again later');
                    } else if (data == 'err7934827') {
                        EQuery(panel.err).text('An error occured while processing your request');
                    } else if (data == 'err423146532') {
                        EQuery(panel.err).text('An error occured while processing your request');
                    } else if (data == 'err38829') {
                        EQuery(panel.err).text('Name exists. Enter another one');
                        showTab(0, panel);
                    } else {
                        EQuery(panel.err).text('An error occured. Try again later');
                    }
                    offline = false;
                    updateDisplay(display);
                }).catch(()=>{
                    offline = true;
                    log.error(logTime() + 'Error requesting data: null');
                    EQuery(panel.err).text('Check your internet connection');
                    Notice('Bridge Error 1: Failed to connect to sserver');
                    modal.close();
                    updateDisplay(display);
                });
                setTimeout(function() {
                    if (a == 'invalid') {
                        offline = true;
                        updateDisplay(display);
                        Notice('Bridge Error 1: Failed to connect to server');
                        EQuery(panel.err).text('Check your internet connections');
                        modal.close()
                    }
                }, 5000);
            } else {
                Notice('Enter right phone number');
                showTab(1, panel);
                return;
            }
        });
        EQuery(panel.sub2Btn).click(function() {
            panel.err.innerHTML = '';
            let spinner = EQuery.elemt('div', null, 'app-spinner');
            EQuery(spinner).spinner();
            let modal = openModal(app, { content: [{ 'm2': { html: spinner }}] });
            fetch(host + 'chatapp/register/', {
                method: 'POST',
                body: new FormData(EQuery.elemt('form', [EQuery.elemt('input', null, null, {name: 'username', value: panel.usernameInput.value}), EQuery.elemt('input', null, null, {name: 'id', value: app.data[app.selectedID].userData.id})], null, {method: 'post'}))
            }).then((response)=>response.text()).then((data)=>{
                a = data;
                modal.close();
                if (data == 'success') {
                    app.data[app.selectedID].userData.username = panel.usernameInput.value;
                    app.save();
                    panel.err.innerHTML = '';
                    app.reload()
                } else if (data == 'err5349653') {
                    EQuery(panel.err).text('Username exists. Enter another one');
                } else if (data == 'err902405') {
                    EQuery(panel.err).text('An error occured. Try again Later');
                } else {
                    EQuery(panel.err).text('An error occured. Try again later');
                }
                offline = false;
                updateDisplay(display);
            }).catch(()=>{
                offline = true;
                updateDisplay(display);
                log.error(logTime() + 'Error requesting data: null');
                EQuery(panel.err).text('Check your internet connection');
                Notice('Bridge Error 1: Failed to connect to sserver');
                modal.close();
            });
            setTimeout(function() {
                if (a == 'invalid') {
                    offline = true;
                    updateDisplay(display);
                    Notice('Bridge Error 1: Failed to connect to server');
                    EQuery(panel.err).text('Check your internet connections');
                    modal.close();
                }
            }, 5000);
        });
        EQuery(panel.sub3Btn).click(function() {
            panel.err.innerHTML = '';

            fetch(host + 'chatapp/register/', {
                method: 'POST',
                body: new FormData(EQuery.elemt('form', [EQuery.elemt('input', null, null, {name: 'id', value: app.data[app.selectedID].userData.id}), EQuery.elemt('input', null, null, {name: 'emailCode', value: panel.confirmInput.value})], null, {method: 'post'})),
            }).then((response)=>response.text()).then((data)=>{
                a = data;
                if (data.indexOf('success') > -1) {
                    panel.err.innerHTML = '';
                    app.data[app.selectedID].userData.confirm_email = true;
                    app.save();
                    app.reload();
                } else if (data == 'err9054') {
                    EQuery(panel.err).text('Code does not exists. Send another request');
                } else if (data == 'err394689') {
                    EQuery(panel.err).text('Code expired. Send another request');
                } else {
                    EQuery(panel.err).text('An error occured. Try again later');
                }
            }).catch(()=>{
                log.error(logTime() + 'Error requesting data: null');
                EQuery(panel.err).text('Check your internet connection');
                Notice('Bridge Error 1: Failed to connect to sserver');
            });
            setTimeout(function() {
                if (a == 'invalid') {
                    Notice('Bridge Error 1: Failed to connect to server');
                    EQuery(panel.err).text('Check your internet connections');
                }
            }, 5000);
        });
        EQuery(panel.sub4Btn).click(function () {
            if (panel.profileSelector.btn3.stats == 3) {
                let profile_pic = panel.profileSelector.input.value;
                fetch(host + 'chatapp/register/', {
                    method: 'POST',
                    body: new FormData(EQuery.elemt('form', [EQuery.elemt('input', null, null, {name: 'id', value: app.data[app.selectedID].userData.id}), EQuery.elemt('input', null, null, {name: 'profile_pic', value: profile_pic})], null, {method: 'post'})),
                }).then((response)=>response.text()).then((data)=>{
                    a = data;
                    if (data.indexOf('success') > -1) {
                        panel.err.innerHTML = '';
                        app.data[app.selectedID].userData.profile_pic = profile_pic;
                        app.save();
                        Notice('Upload complete')
                        app.reload();
                    } else if (data == 'err7594803') {
                        EQuery(panel.err).text('An error occoured, please try again later.');
                    } else {
                        EQuery(panel.err).text('An error occoured, please try again later.');
                    }
                })/*.catch(function () {

                })*/
            } else {
                Notice('Complete this action first!');
            }
        });
        function send_email() {
            let countdown = 30;
            let spinner = EQuery.elemt('div', null, 'app-spinner');
            EQuery(spinner).spinner();
            let modal = openModal(app, { content: [{ 'm2': { html: spinner }}] });
            fetch(host + 'chatapp/register/', {
                method: 'POST',
                body: new FormData(EQuery.elemt('form', [EQuery.elemt('input', null, null, {name: 'confirmEmail', value: ''}), EQuery.elemt('input', null, null, {name: 'id', value: app.data[app.selectedID].userData.id})], null, {method: 'post'}))
            }).then((response)=>response.text()).then((data)=> {
                modal.close();
                EQuery(panel.btnContainer).find('button').hide();
                EQuery(panel.sub3Btn).show();
                if (data.indexOf('success') > -1) {
                    EQuery(panel.resendCountdown).show();
                    EQuery(panel.resendEmail).hide();
                    let interval = setInterval(function () {
                        EQuery(panel.resendCountdown).text('Resend in ' + countdown + 's');
                        if (countdown <= 0) {
                            EQuery(panel.resendCountdown).hide();
                            EQuery(panel.resendEmail).show();
                            clearInterval(interval);
                            countdown = 30;
                        }
                        countdown--;
                    }, 1000);
                    Notice('Code sent to email');
                } else {
                    EQuery(panel.err).text('An error occoured. Try again Later');
                }
                offline = false;
                updateDisplay(display);
            });
        }
    }

    function openForgetPsw(app, tab) {
        let display = app.display;
        let panel = new forgotPanel();
        display.login = EQuery.elemt('div', [panel.container], 'clearfix', {id: 'forgot-container'});
        EQuery(display.loginContainer).removeChildren();
        EQuery(display.loginContainer).addChild([display.login]);
        currentTab = tab ? tab : 0;
        showTab(currentTab, panel);
        validPsw(panel);

        EQuery(panel.qsw).find('a').click(function () {
            openLogin(app);
        });
        EQuery(panel.msg).find('a').click(function () {
            openLogin(app);
        })
        EQuery(panel.nextBtn).click(function() {
            if (currentTab == 0) {
                send_email();
            }
            nextPrev(1, panel);
        });
        EQuery(panel.prevBtn).click(function() {
            nextPrev(-1, panel);
        });
        EQuery(panel.checkPsw).click(function() {
            if (panel.pswInput.attributes.type.value === 'password') {
                EQuery(panel.pswInput).attr({type: 'text'});
            } else {
                EQuery(panel.pswInput).attr({type: 'password'});
            }
        });
        EQuery(panel.resendEmail).click(send_email);

        EQuery(panel.subBtn).click(function () {
            panel.err.innerHTML = '';
            let spinner = EQuery.elemt('div', null, 'app-spinner');
            EQuery(spinner).spinner();
            let modal = openModal(app, { content: [{ 'm2': { html: spinner }}] });
            fetch(host + 'chatapp/forgot-psw', {
                method: 'POST',
                body: panel.forgotForm
            }).then(response => response.text()).then(data => {
                if (data.indexOf('success') > -1) {
                    showTab(3, panel);
                } else {
                    EQuery(panel.err).text('An error occured, please try again later.');
                }
                modal.close();
            })/*.catch(()=>{
                offline = true;
                log.error(logTime() + 'Error requesting data: null');
                EQuery(panel.err).text('Check your internet connection');
                Notice('Bridge Error 1: Failed to connect to sserver');
                modal.close();
                updateDisplay(display);
            });*/
        })

        function send_email() {
            let countdown = 30;
            let spinner = EQuery.elemt('div', null, 'app-spinner');
            EQuery(spinner).spinner();
            let modal = openModal(app, { content: [{ 'm2': { html: spinner }}] });
            fetch(host + 'chatapp/forgot-psw/', {
                method: 'POST',
                body: new FormData(EQuery.elemt('form', [EQuery.elemt('input', null, null, {name: 'confirmEmail', value: ''}), EQuery.elemt('input', null, null, {name: 'id', value: app.data[app.selectedID].userData.id})], null, {method: 'post'}))
            }).then((response)=>response.text()).then((data)=> {
                modal.close();
                EQuery(panel.btnContainer).find('button').hide();
                EQuery(panel.sub3Btn).show();
                if (data.indexOf('success') > -1) {
                    EQuery(panel.resendCountdown).show();
                    EQuery(panel.resendEmail).hide();
                    let interval = setInterval(function () {
                        EQuery(panel.resendCountdown).text('Resend in ' + countdown + 's');
                        if (countdown <= 0) {
                            EQuery(panel.resendCountdown).hide();
                            EQuery(panel.resendEmail).show();
                            clearInterval(interval);
                            countdown = 30;
                        }
                        countdown--;
                    }, 1000);
                    Notice('Code sent to email');
                } else {
                    EQuery(panel.err).text('An error occoured. Try again Later');
                }
                offline = false;
                updateDisplay(display);
            });
        }
    }

    function showLogins(app, json) {
        console.log(json)
        let display = app.display;

        let err = EQuery.elemt('p', null, 'error e-text-red e-text-center e-bold');
        let type = EQuery.elemt('input', null, null, {type: 'hidden',  value: 'signup',  name: 'type'});
        
        let checkPsw = EQuery.elemt('input', null, null, {type: 'checkbox'});
        let check = EQuery.elemt('span', [checkPsw, EQuery.elemt('span', ' Show Password')], null, null, 'text-align: left');
        let pswInput = EQuery.elemt('input', null, 'required', {name: 'psw',  type: 'password',  placeholder: 'Password',  pattern: '(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}'});
        let loginLabel = EQuery.elemt('label', [EQuery.elemt('b', 'Password')]);
        let tab = EQuery.elemt('div', [loginLabel, pswInput, check], 'form-tab');

        let form = EQuery.elemt('form', [err, tab, type], 'regForm', {method: 'post'});

        let formCont = EQuery.elemt('div', [form])
        let pswCont = EQuery.elemt('div', [formCont], null, null, 'display: flex;margin-top: 20px;');

        let list = EQuery.elemt('ul');
        let listCont = EQuery.elemt('div', [list]);
        let loginsList = EQuery.elemt('div', [listCont]);

        display.login = EQuery.elemt('div', [EQuery.elemt('div', [
            EQuery.elemt('div', [loginsList], 'split-view-view visible app-col app-half top-small'),
            EQuery.elemt('div', [pswCont], 'split-view-view visible app-col app-half bottom-small')
        ], 'app-split-container')], 'clearfix', {id: 'login-list-container'}, 'overflow: auto');
        EQuery(display.loginContainer).removeChildren();
        EQuery(display.loginContainer).addChild([EQuery.elemt('div', [EQuery.elemt('img', null, 'app-logo', {src: './assets/logo_img2.png'})], 'app-logo-container', null, 'text-align: center'), display.login]);

        for (let id in json) {
            console.log(json[id])
            let userData = json[id].userData, img = json[id].profile_pic;

            let imgCont = EQuery.elemt('div', [EQuery.elemt('img', null, null, {src: img}, '')], 'imgContainer');
            let profileCont = EQuery.elemt('div')
            let elt = EQuery.elemt('div', [EQuery.elemt('div', [imgCont, profileCont], null, null, 'display: flex')], 'list-container');

            EQuery(list).addChild([EQuery.elemt('li', [elt], null, {'data-list-id': id})]);
        }

        EQuery(list).find('.list-container').click(function () {
            let id = Number(EQuery(this).attr('data-list-id'));
            consle.log(id)
        });
    }

    function fetch_sidebarGroup(app) {
        fetch(host + 'chatapp/request.php', {
            method: 'POST',
            body: new FormData(EQuery.elemt('form', [EQuery.elemt('input', null, null, {name: 'request', value: 'group'}), EQuery.elemt('input', null, null, {name: 'id', value: app.data[app.selectedID].userData.id})], null, {method: 'post'}))
        }).then((response)=>response.text()).then((data)=>{
            if (data[0] == '[') {
                return data;
            } else if (data == 'err827980') {
                Notice('Error requesting data');
                log.error('Error requesting data: ' + data);
            }
            offline = false;
            updateDisplay(app.display);
        }).catch(()=>{
            offline = true;
            updateDisplay(app.display);
            Notice('Bridge Error 1: Failed to connect to server');
            log.error(logTime() + 'Error requesting data: null');
        });

        return [];
    }

    function setUserData(app, panel, id) {
        panel.err.innerHTML = '';
        console.log('%cDon\'t paste any code here!!', 'color: #f00;font-weight: bold;font-size: 35px');
        
        let spinner = EQuery.elemt('div', null, 'app-spinner');
        EQuery(spinner).spinner();
        let modal = openModal(app, { content: [{ 'm2': { html: spinner }}] });
        fetch(host + 'chatapp/register/', {
            method: 'POST',
            body: new FormData(EQuery.elemt('form', [EQuery.elemt('input', null, null, {name: 'request', value: 'userData'}), EQuery.elemt('input', null, null, {name: 'id', value: id})], null, {method: 'post'}))
        }).then(response => response.text()).then(data => {
            modal.close();
            if (data[0] == '{') {
                let rawData = JSON.parse(data);
                let entries = ['id', 'firstname', 'lastname', 'email', 'contact', 'country', 'dd', 'mm', 'yyyy', 'username', 'status', 'bio', 'confirm_email', 'confirm_sms', 'profile_pic', 'friends', 'groups'];
                let userData = {status: '', username: '', id: 0, img: './assets/img.png'};
                for (let i = 0;i < entries.length;i++) {
                    userData[entries[i]] = rawData[entries[i]];
                }
                // modal.close()
                if (!app.data) app.data = {};
                app.data[rawData['id']] = {userData: {}, msg: {}, contacts: {}, logged_in: true};
                app.data[rawData['id']].userData = userData;
                app.save();
                setTimeout(function(){app.reload()}, 2000);
            } else if (data == 'err8279830') {
                EQuery(panel.err).text('An error occurred. Try creating a new account.');
            } else {
                EQuery(panel.err).text('An error occurred, try again later.');
            }
            offline = false;
            updateDisplay(app.display);
        })/*.catch(function () {
            offline = true;
            updateDisplay(app.display);
            EQuery(panel.err).text('Check your internet connection');
            Notice('Bridge access Error: 1');
            modal.close();
        });*/
    }

    function Storage() {
        let indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
        if (indexedDB === undefined) {
            log.warn(logTime(), 'Storage: IndexedDB not available.');
            return {init: function() {}, get: function() {}, set: function() {}, clear: function() {}};
        }
        let name = 'enemetronics-chatapp';
        let version = 1;
        let database;
        return {
            init: function(callback) {
                let request = indexedDB.open(name, version);
                request.onupgradeneeded = function(event) {
                    let db = event.target.result;
                    if (db.objectStoreNames.contains('states') === false) {
                        db.createObjectStore('states');
                    }
                };
                request.onsuccess = function(event) {
                    database = event.target.result;
                    callback();
                };
                request.onerror = function(event) {
                    log.error(logTime(), 'IndexedDB', event);
                };
            },
            get: function(callback) {
                let transaction = database.transaction(['states'], 'readwrite');
                let objectStore = transaction.objectStore('states');
                let request = objectStore.get(0);
                request.onsuccess = function(event) {
                    callback(event.target.result);
                };
            },
            set: function(data) {
                let start = performance.now();
                let transaction = database.transaction(['states'], 'readwrite');
                let objectStore = transaction.objectStore('states');
                let request = objectStore.put(data, 0);
                request.onsuccess = function() {
                    log(logTime(), 'Saved state to IndexedDB. ' + (performance.now() - start).toFixed(2) + 'ms');
                };
            },
            clear: function() {
                if (database === undefined)
                    return;
                let transaction = database.transaction(['states'], 'readwrite');
                let objectStore = transaction.objectStore('states');
                let request = objectStore.clear();
                request.onsuccess = function() {
                    log(logTime(), 'Cleared IndexedDB.');
            };
        }};
    }

    function genId() {
        return Math.floor(Math.random() * 99999999);
    }

    function Config() {
        let name = 'chatapp';

        let storage = {
            language: 'en',  exportPrecision: 6};

        if (window.localStorage[name] === undefined) {
            window.localStorage[name] = JSON.stringify(storage);
        } else {
            let data = JSON.parse(window.localStorage[name]);
            for (let key in data) {
                storage[key] = data[key];
            }
        }
        return {
            getKey: function(key) {
                return storage[key];
            },     setKey: function() {
                // key, value, key, value ...
                for (let i = 0, l = arguments.length; i < l; i += 2) {
                    storage[arguments[i]] = arguments[i + 1];
                }
                window.localStorage[name] = JSON.stringify(storage);
                log(logTime(), 'Saved config to LocalStorage.');
            },     clear: function() {
                delete window.localStorage[name];
            }};
    }

    function Command(app) {
        this.id = -1;
        this.inMemory = false;
        this.updatable = false;
        this.type = '';
        this.name = '';
        this.app = app;
    }

    Command.prototype.toJSON = function() {
        let output = {};
        output.type = this.type;
        output.id = this.id;
        output.name = this.name;
        return output;
    };

    Command.prototype.fromJSON = function(json) {
        this.inMemory = true;
        this.type = json.type;
        this.id = json.id;
        this.name = json.name;
    };

    function History(app) {
        this.app = app;
        this.undos = [];
        this.redos = [];
        this.lastCmdTime = new Date();
        this.idCounter = 0;
        this.historyDisabled = false;
        this.config = app.config;
    }

    History.prototype = {
        execute: function(cmd, optionalName) {
            let lastCmd = this.undos[this.undos.length - 1];
            let timeDifference = new Date().getTime() - this.lastCmdTime.getTime();
            let isUpdatableCmd = lastCmd && lastCmd.updatable && cmd.updatable && lastCmd.object === cmd.object && lastCmd.type === cmd.type && lastCmd.script === cmd.script && lastCmd.attributeName === cmd.attributeName;
            if (isUpdatableCmd && cmd.type === 'SetScriptValueCommand') {
                // When the cmd.type is 'SetScriptValueCommand' the timeDifference is ignored
                lastCmd.update(cmd);
                cmd = lastCmd;
            } else if (isUpdatableCmd && timeDifference < 500) {
                lastCmd.update(cmd);
                cmd = lastCmd;
            } else {
                // the command is not updatable and is added as a new part of the history
                this.undos.push(cmd);
                cmd.id = ++this.idCounter;
            }
            cmd.name = optionalName !== undefined ? optionalName : cmd.name;
            cmd.execute();
            cmd.inMemory = true;
            if (this.config.getKey('settings/history')) {
                cmd.json = cmd.toJSON();
                // serialize the cmd immediately after execution and append the json to the cmd
            }
            this.lastCmdTime = new Date();
            // clearing all the redo-commands
            this.redos = [];
            this.app.signals.historyChanged.dispatch(cmd);
        }, undo: function() {
            if (this.historyDisabled) {
                new Notice('Undo/Redo disabled while scene is playing.');
                return;
            }
            let cmd = undefined;
            if (this.undos.length > 0) {
                cmd = this.undos.pop();
                if (cmd.inMemory === false) {
                    cmd.fromJSON(cmd.json);
                }
            }
            if (cmd !== undefined) {
                cmd.undo();
                this.redos.push(cmd);
                this.app.signals.historyChanged.dispatch(cmd);
            }
            return cmd;
        }, redo: function() {
            if (this.historyDisabled) {
                new Notice('Undo/Redo disabled while scene is playing.');
                return;
            }
            let cmd = undefined;
            if (this.redos.length > 0) {
                cmd = this.redos.pop();
                if (cmd.inMemory === false) {
                    cmd.fromJSON(cmd.json);
                }
            }
            if (cmd !== undefined) {
                cmd.execute();
                this.undos.push(cmd);
                this.app.signals.historyChanged.dispatch(cmd);
            }
            return cmd;
        }, toJSON: function() {
            let history = {};
            history.undos = [];
            history.redos = [];
            if (!this.config.getKey('settings/history')) {
                return history;
            }
            // Append Undos to History
            for (let i = 0; i < this.undos.length; i++) {
                if (this.undos[i].hasOwnProperty('json')) {
                    history.undos.push(this.undos[i].json);
                }
            }
            // Append Redos to History
            for (let i = 0; i < this.redos.length; i++) {
                if (this.redos[i].hasOwnProperty('json')) {
                    history.redos.push(this.redos[i].json);
                }
            }
            return history;
        }, fromJSON: function(json) {
            if (json === undefined)
                return;
            for (let i = 0; i < json.undos.length; i++) {
                let cmdJSON = json.undos[i];
                let cmd = new Commands[cmdJSON.type](this.app);
                // creates a new object of type 'json.type'
                cmd.json = cmdJSON;
                cmd.id = cmdJSON.id;
                cmd.name = cmdJSON.name;
                this.undos.push(cmd);
                this.idCounter = cmdJSON.id > this.idCounter ? cmdJSON.id : this.idCounter;
                // set last used idCounter
            }
            for (let i = 0; i < json.redos.length; i++) {
                let cmdJSON = json.redos[i];
                let cmd = new Commands[cmdJSON.type](this.app);
                // creates a new object of type 'json.type'
                cmd.json = cmdJSON;
                cmd.id = cmdJSON.id;
                cmd.name = cmdJSON.name;
                this.redos.push(cmd);
                this.idCounter = cmdJSON.id > this.idCounter ? cmdJSON.id : this.idCounter;
                // set last used idCounter
            }
            // Select the last executed undo-command
            this.app.signals.historyChanged.dispatch(this.undos[this.undos.length - 1]);
        }, clear: function() {
            this.undos = [];
            this.redos = [];
            this.idCounter = 0;
            this.app.signals.historyChanged.dispatch();
        }, goToState: function(id) {
            if (this.historyDisabled) {
                new Notice('Undo/Redo disabled while scene is playing.');
                return;
            }
            this.app.signals.sceneGraphChanged.active = false;
            this.app.signals.historyChanged.active = false;
            let cmd = this.undos.length > 0 ? this.undos[this.undos.length - 1] : undefined;
            // next cmd to pop
            if (cmd === undefined || id > cmd.id) {
                cmd = this.redo();
                while (cmd !== undefined && id > cmd.id) {
                    cmd = this.redo();
                }
            } else {
                while (true) {
                    cmd = this.undos[this.undos.length - 1];
                    // next cmd to pop
                    if (cmd === undefined || id === cmd.id)
                        break;
                    this.undo();
                }
            }
            this.app.signals.sceneGraphChanged.active = true;
            this.app.signals.historyChanged.active = true;
            this.app.signals.sceneGraphChanged.dispatch();
            this.app.signals.historyChanged.dispatch(cmd);
        }, enableSerialization: function(id) {
            /**
             * because there might be commands in this.undos and this.redos
             * which have not been serialized with .toJSON() we go back
             * to the oldest command and redo one command after the other
             * while also calling .toJSON() on them.
             */
            this.goToState(-1);
            this.app.signals.sceneGraphChanged.active = false;
            this.app.signals.historyChanged.active = false;
            let cmd = this.redo();
            while (cmd !== undefined) {
                if (!cmd.hasOwnProperty('json')) {
                    cmd.json = cmd.toJSON();
                }
                cmd = this.redo();
            }
            this.app.signals.sceneGraphChanged.active = true;
            this.app.signals.historyChanged.active = true;
            this.goToState(id);
        },
    };

    function addShortCuts(app, opt) {
        EQuery(document).on('keydown', function(e) {
            for (let shortcuts in opt) {
                let keys = shortcuts.split(' + ');
                e.stopPropagation();
                if (e.altKey == (keys.indexOf('Alt') !== -1) && e.ctrlKey == (keys.indexOf('Ctrl') !== -1) && e.shiftKey == (keys.indexOf('Shift') !== -1) && keys.indexOf(e.key.toUpperCase()) !== -1) {
                    opt[shortcuts](app);
                    e.preventDefault();
                }
            }
        });
    }

    function addEventListeners(app) {
        let display = app.display;

        EQuery(document).on('dragover', function(event) {
            event.preventDefault();
            event.dataTransfer.dropEffect = 'copy';
        }, false);

        EQuery(document).on('dragenter', function(event) {
            event.preventDefault();
            EQuery(app.display.overlay).show();
        }, false);

        EQuery(document).on('dragend', function(event) {
            event.preventDefault();
            EQuery(app.display.overlay).hide();
        }, false);

        EQuery(document).on('drop', function(event) {
            event.preventDefault();
            if (event.dataTransfer.types[0] === 'text/plain')
                return;
            if (event.dataTransfer.items) {
                app.loader.loadItemList(event.dataTransfer.items);
            } else {
                app.loader.loadFiles(event.dataTransfer.files);
            }
        }, false);

        EQuery(document).click(function(event) {
            if (event.path) {
                let elts = event.path;
                for (let i = 0; i < elts.length; i++) {
                    if (elts[i].className !== 'menubar') {
                        app.display.titleActive = false;
                    } else {
                        app.display.titleActive = true;
                        break;
                    }
                }
            } else {
                if (EQuery(event.target).hasClass('menubar')) {
                    app.display.titleActive = false;
                } else {
                    app.display.titleActive = true;
                }
            }
            if (app.display.titleActive == false) {
                EQuery(display.menubar).find('.menubar-menu-items').hide();
            }
        });

        EQuery(display.sidebarContent).find('li').on('mouseenter', function() {
            let top = EQuery(this).findPosition().top + 12, left = 51;
            let label = EQuery(this).attr('aria-label');
            let tooltip = addTooltip(label, 'left');
            EQuery(display.contextView).css('top: ' + toCssPx(top) + ';left: ' + toCssPx(left));
            EQuery(display.contextView).addChild([tooltip]);

            EQuery(this).on('mouseleave', function() {
                EQuery(tooltip).remove();
            });
        });

        EQuery(display.mainSideListBottom).find('.app-badge').click(function() {
            // Open Profile
            openModal2(app, {
                header: 'Profile',
                btns: {
                    'Edit Profile': function (panel) {
                        app.openEditProfile();
                        panel.close();
                    },
                    Close: function(panel) {
                        panel.close();
                    }
                }
            });
        });

        EQuery(display.splitSideBar).find('#add_friend').click(function() {
            openModal2(app, {
                header: 'Add Friends',
                content: [
                    {m12: {err: new Text('')}},
                    {m12: {text: new Text('Enter the username or user id to add')}},
                    {m12: {input: new Input({placeholder: 'Username/UserId'})}},
                    {m12: {html: EQuery.elemt('div')}}
                ],
                 btns: {
                    Search: function(panel) {
                        panel.err.text('');
                        EQuery(panel.html).removeChildren()
                        let input = EQuery(panel.input.input).val();
                        let lowerC = input.match(/[a-z]/g) == null;
                        let upperC = input.match(/[A-Z]/g) == null;
                        if (lowerC && upperC) {
                            fetch(host + 'chatapp/request.php?type=friend_search&id=' + input).then(response => response.text()).then(data => {
                                if (data[0] == '[') {
                                    app.addFriend(JSON.parse(data), panel);
                                } else if (data == 'err8279830') {
                                    panel.err.text('UserId not found');
                                } else {
                                    panel.err.text('An error occurred, try again later');
                                }
                                offline = false;
                                updateDisplay(app.display);
                            }).catch(function (e) {
                                console.log(e)
                                offline = true;
                                updateDisplay(app.display);
                                panel.err.text('Check your internet connection');
                                log.error(logTime(), 'Cannot fetch requested data');
                            });
                        } else {
                            fetch(host + 'chatapp/request.php?type=friend_search&name=' + input).then((response)=>response.text()).then((data)=>{
                                if (data[0] == '[') {
                                    app.addFriend(JSON.parse(data), panel);
                                } else if (data == 'err8279830') {
                                    panel.err.text('Username not found');
                                } else {
                                    panel.err.text('An error occurred, try again later');
                                }
                                offline = false;
                                updateDisplay(display);
                            }).catch(function (e) {
                                console.log(e)
                                offline = true;
                                updateDisplay(display);
                                panel.err.text('Check your internet connection');
                                log.error(logTime(), 'Cannot fetch requested data')
                            });
                        }
                    },
                    cancel: function(panel) {
                        panel.close();
                    }
                }
            });
        });
        
        EQuery(display.splitSideBar).find('#add_group').click(function () {
            let html1 = EQuery.elemt('div', 'Create', 'e-text-center e-bold e-padding e-border-right', null, 'cursor: pointer;background-color: #00000091;border-radius: 22px'), html2 = EQuery.elemt('div', 'Join', 'e-text-center e-bold e-padding', null, 'cursor: pointer')
            let panel = openModal2(app, {
                header: 'Add Group',
                content: [
                    {'m6 dk': {html: html1}, m6: {html: html2}},
                    {'m12 block1': {text: new Text('Enter the name, link or id of the group:')}},
                    {'m12 block1': {input: new Input({placeholder: 'Group Name/Group Id'})}},
                    {'m12 block2': {text: new Text('Create group', 'font: 18px bold;')}},
                    {'m12 block2': {input: new Input('Enter group name')}}
                ],
                btns : {
                    'Continue': function (panel) {
                        panel.disableBtn();
                        panel.clearContent();
                        panel.html()
                        // panel.close();
                    },
                    'Cancel': function (panel) {
                        panel.close()
                    }
                }
            });

            EQuery(panel.modalContent).find('.app-row:has(.block1)').hide();

            EQuery(html2).click(function () {
                EQuery(html1).removeAttr('style');
                EQuery(html1).css('cursor: pointer');
                EQuery(html2).css('background-color: #00000091;border-radius: 22px;');
                EQuery(panel.modalContent).find('.app-row:has(.block1)').show();
                EQuery(panel.modalContent).find('.app-row:has(.block2)').hide();
            });

            EQuery(html1).click(function () {
                EQuery(html2).removeAttr('style');
                EQuery(html2).css('cursor: pointer');
                EQuery(html1).css('background-color: #00000091;border-radius: 22px;');
                EQuery(panel.modalContent).find('.app-row:has(.block2)').show();
                EQuery(panel.modalContent).find('.app-row:has(.block1)').hide();
            });
        });

        EQuery(display.splitSideBar).find('#settings').click(function () {
            var modal = openModal2(app, {
                header: 'Settings',
                content: [
                    {m12: {html: settingsElt(app)}}
                ]
            });
            EQuery(modal.elt).addClass('m-so');
            EQuery(modal.elt).find('li')[0].click();
        })
        
        EQuery(display.filePicker).on('change', function () {
            let files = this.files;
            app.loader.loadFiles(files);
        });

        addShortCuts(app, {});
        //addShortcut(app)
    }

    function addTooltip(title, arr) {
        let hoverContent = EQuery.elemt('div', [EQuery.elemt('div', title, 'hover-contents', null, 'white-space: pre-wrap')], 'hover-content', null, 'overflow: hidden');
        let fadeinBox = EQuery.elemt('div', [hoverContent], 'workbench-hover fadeIn compact', {role: 'tooltip'});
        let pointer = EQuery.elemt('div', null, 'hover-pointer' + arr, null, 'top: 9px');
        let hover = EQuery.elemt('div', [pointer, fadeinBox], 'workbench-hover');
        let elt = EQuery.elemt('div', [hover], 'hover-container', null, 'padding-left: 3px;margin-left: -3px');
        return elt;
    }

    function lastActive(app) {
        let tab = app.display.tabList.lastChild ? app.display.tabList.lastChild.tab : undefined;
        let tabs = eachTab(app);
        let panels = eachPanel(app);
        for (let i = 0; i < tabs.length; i++) {
            EQuery(tabs[i]).removeClass('tab-active');
            EQuery(panels[i]).removeClass('panel-active');
        }
        if (tab !== undefined) {
            tab.active = true;
            EQuery(tab.display.domHeader).addClass('tab-active');
            EQuery(tab.display.domPanel).addClass('panel-active');
        } else {
            EQuery('.tab.get-started').addClass('tab-active');
            EQuery('.app-instance.get-started').addClass('panel.active');
        }
    }

    function toCssPx(pixel) {
        return pixel + 'px';
    }

    function updateDisplay(display) {
        let width = window.innerWidth, height = window.innerHeight, sideBarWidth = Number(EQuery(display.sidebarContainer).width().replace('px', ''));

        EQuery(display.wrapper).css('height: ' + height + 'px')
        // EQuery('.app-logo-container').css('padding-left: ' + (width - 200) / 2 + 'px');

        if (width < 600) {
            EQuery(display.mainSplitChat).find('div.inactive:last-child>div').hide();
            EQuery(display.mainSplitChat).css('width: 100%');
            isMobile = true;
        } else {
            EQuery(display.mainSplitChat).find('div.inactive:last-child>div').css('display: ;');
            EQuery(display.mainSplitChat).css('width: calc(100% - 259px)');
            isMobile = false;
        }

        if (offline) {
            EQuery(display.offline).addClass('visible');
            EQuery(display.offline).removeChildren()
            EQuery(display.offline).addChild([offlineElt()]);
            EQuery(display.outerContainer).css('top: 25px;height: calc(100% - 25px)');
            EQuery(display.loginContainer).css('top: 25px;height: calc(100% - 25px)');

            if (isMobile) EQuery(display.mainSplitChat).css('top: 25px;height: calc(100% - 31px)');
        } else {
            EQuery(display.offline).removeClass('visible');
            EQuery(display.offline).removeChildren();
            EQuery(display.outerContainer).css('top: 0;height: 100%');
            EQuery(display.loginContainer).css('top: 0;height: 100%');
            EQuery(display.mainSplitChat).css('top: 0;height: calc(100% - 6px);');
        }

        EQuery(display.mainSplitChat).find('div:last-child').css('main-width: ' + toCssPx(width));
    }

    function offlineElt() {
        let offlineSvg = new EQuery.svg();
        offlineSvg.setSize(20, 20, true);
        offlineSvg.setViewBox(0, 0, 16, 16);
        offlineSvg.path('m 13 1 c -0.554688 0 -1 0.445312 -1 1 v 7.269531 c 0.148438 0.089844 0.289062 0.191407 0.414062 0.316407 l 0.414063 0.414062 h 0.34375 l 0.414063 -0.414062 c 0.375 -0.375 0.882812 -0.585938 1.414062 -0.585938 v -7 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 3 c -0.554688 0 -1 0.445312 -1 1 v 9 c 0 0.554688 0.445312 1 1 1 h 0.007812 c 0 -0.515625 0.191407 -1.027344 0.578126 -1.414062 l 0.414062 -0.414063 v -0.34375 l -0.414062 -0.414063 c -0.773438 -0.773437 -0.773438 -2.054687 0 -2.828124 c 0.375 -0.375 0.882812 -0.585938 1.414062 -0.585938 v -4 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 3 c -0.554688 0 -1 0.445312 -1 1 v 6 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -6 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 3 c -0.554688 0 -1 0.445312 -1 1 v 3 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0', '#e2f1f1');
        offlineSvg.path('m 11 10 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 1.292969 1.292969 l -1.292969 1.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 s 1.023437 0.390625 1.414062 0 l 1.292969 -1.292969 l 1.292969 1.292969 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -1.292969 -1.292969 l 1.292969 -1.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 s -0.519531 0.105469 -0.707031 0.292969 l -1.292969 1.292969 l -1.292969 -1.292969 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 0', '#e2f1f6');
        return EQuery.elemt('div', [offlineSvg.domElement, EQuery.elemt('div', 'Network unavailable', null, null, 'margin-left: 12px;margin-top: 2px;color: #e2f1f1')], null, null, 'display: flex;padding-left: calc((100% - 158px)/2);');
    }

    function appendSideList(app) {
        let display = app.display;
        let friends_arr = app.data[app.selectedID].contacts;

        let header = EQuery.elemt('div', [EQuery.elemt('h2', 'Friends')], 'app-sidelist-header');
        let scroller = EQuery.elemt('ul', null, 'app-sidelist-list');
        let sizer = EQuery.elemt('div', [header, scroller], 'app-sidelist-sizer', null, 'height: 100%');

        if (JSON.stringify(friends_arr)[2] == 'p' || JSON.stringify(friends_arr) == '{}') {
            let btn = EQuery.elemt('li', [EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('span', 'Lonely? Add some friends to chat with.')], null, null, 'width: 100%;height: 100%;padding: 6px;')], null, null, 'height: 100%;width: 100%')], 'app-sidelist-content')], 'app-sidelist-item')])]);
            EQuery(scroller).addChild([btn]);
            EQuery(btn).click(function () {
                openModal2(app, {
                    header: 'Add Friends',
                    content: [
                        {m12: {err: new Text('')}},
                        {m12: {text: new Text('Enter the username or user id to add')}},
                        {m12: {input: new Input({placeholder: 'Username/UserId'})}},
                        {m12: {html: EQuery.elemt('div')}}
                    ],
                     btns: {
                        Search: function(panel) {
                            panel.err.text('');
                            EQuery(panel.html).removeChildren()
                            let input = EQuery(panel.input.input).val();
                            let lowerC = input.match(/[a-z]/g) == null;
                            let upperC = input.match(/[A-Z]/g) == null;
                            if (lowerC && upperC) {
                                fetch(host + 'chatapp/request.php?type=friend_search&id=' + input).then(response => response.text()).then(data => {
                                    if (data[0] == '[') {
                                        app.addFriend(JSON.parse(data), panel);
                                    } else if (data == 'err8279830') {
                                        panel.err.text('UserId not found');
                                    } else {
                                        panel.err.text('An error occurred, try again later');
                                    }
                                    offline = false;
                                    updateDisplay(app.display);
                                }).catch(function (e) {
                                    console.log(e)
                                    offline = true;
                                    updateDisplay(app.display);
                                    panel.err.text('Check your internet connection');
                                    log.error(logTime(), 'Cannot fetch requested data');
                                });
                            } else {
                                fetch(host + 'chatapp/request.php?type=friend_search&name=' + input).then((response)=>response.text()).then((data)=>{
                                    if (data[0] == '[') {
                                        app.addFriend(JSON.parse(data), panel);
                                    } else if (data == 'err8279830') {
                                        panel.err.text('Username not found');
                                    } else {
                                        panel.err.text('An error occurred, try again later');
                                    }
                                    offline = false;
                                    updateDisplay(display);
                                }).catch(function (e) {
                                    console.log(e)
                                    offline = true;
                                    updateDisplay(display);
                                    panel.err.text('Check your internet connection');
                                    log.error(logTime(), 'Cannot fetch requested data')
                                });
                            }
                        },
                        cancel: function(panel) {
                            panel.close();
                        }
                    }
                });
            });
            
        }

        for (let i in friends_arr) {
            if (i == 'pending') {}
            else if (i == 'received') {}
            else {
                let username = friends_arr[i].username, id = i, status = friends_arr[i].status || 'offline', imgUrl = friends_arr[i].profile_pic, msg = lastMsg(i);
                let content;
                if (msg.status !== 'New Friend') {
                    content = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('img', null, null, {src: imgUrl})], 'img-container ' + status,)], null, null, 'width: 45px;height: 100%;padding: 2px;'), EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h2', username)], null, null, 'width: calc(100% - 45px);height: 60%;padding: 6px;display: flex;align-items: center;'), EQuery.elemt('div', [EQuery.elemt('span', (msg.fromUser == true ? 'You: ' : '') + msg.msg, null, null, 'font-size: 12px;' + (msg.pending ? 'animation: fade-msg 2s ease-in infinite;' : ''))], null, null, 'width: calc(100% - 60px);height: 40%;padding: 6px;display: flex;align-items: center;')], null, null, 'height: 100%;width: 100%')], 'app-sidelist-content');
                } else {
                    content = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('img', null, null, {src: imgUrl})], 'img-container ' + status,)], null, null, 'width: 45px;height: 100%;padding: 2px;'), EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h2', username)], null, null, 'width: calc(100% - 45px);height: 60%;padding: 6px;display: flex;align-items: center;'), EQuery.elemt('div', [EQuery.elemt('span', 'Start Chatting', null, null, 'font-style: italic;opacity: 0.4')], null, null, 'width: calc(100% - 60px);height: 40%;padding: 6px;display: flex;align-items: center;')], null, null, 'height: 100%;width: 100%')], 'app-sidelist-content');
                }

                let item = EQuery.elemt('div', [content], 'app-sidelist-item');
                EQuery(scroller).addChild([EQuery.elemt('li', [item], null, {'data-user-id': id, 'data-last-session': msg.time})]);
                
                function sortList() {
                    for (let i = 0;i < scroller.children.length;i++) {
                        let list = scroller.children[i];
                        let nextList = scroller.children[i + 1];
                        if (Number(EQuery(list).attr('data-last-session')) > Number(EQuery(nextList).attr('data-last-session'))) {
                            EQuery(scroller).appendChild(list);
                            EQuery(list).click(function() {
                                app.openChat(EQuery(this).attr('data-user-id'));
                                EQuery(scroller).find('li').removeClass('active');
                                EQuery(this).addClass('active');
                            });
                        } else {
                            // sortList();
                        }
                    }
                }

                sortList();

                EQuery(item).click(function() {
                    app.openChat(EQuery(this.parentElement).attr('data-user-id'));
                    EQuery(scroller).find('li').removeClass('active');
                    EQuery(EQuery(this)[0].parentElement).addClass('active');
                });
            }
        }
        if (friends_arr['pending'].length > 0) {
            EQuery(scroller).addChild([EQuery.elemt('li', [EQuery.elemt('div', null, null, null, 'border: 1px solid #fff5;height: 1px;margin-top: 9px;flex: auto;'), EQuery.elemt('div', 'Pending Friend request', null, null, 'margin: 0 3px'), EQuery.elemt('div', null, null, null, 'border: 1px solid #fff5;height: 1px;margin-top: 9px;flex: auto;')], null, null, 'height: 19px;color: #fff5;display: flex')]);
            for (let j = 0;j < friends_arr['pending'].length;j++) {
                let username = friends_arr['pending'][j].username, id = friends_arr['pending'][j].id, status = friends_arr['pending'][j].status || 'offline', imgUrl = friends_arr['pending'][j].profile_pic
                let content = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('img', null, null, {src: imgUrl})], 'img-container ' + status,)], null, null, 'width: 45px;height: 100%;padding: 2px;'), EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h2', username)], null, null, 'width: calc(100% - 45px);height: 60%;padding: 6px;display: flex;align-items: center;'), EQuery.elemt('div', [EQuery.elemt('span', 'Friend request pending...', null, null, 'font-style: italic;opacity: 0.4')], null, null, 'width: calc(100% - 60px);height: 40%;padding: 6px;display: flex;align-items: center;')], null, null, 'height: 100%;width: 100%')], 'app-sidelist-content');
                let item = EQuery.elemt('div', [content], 'app-sidelist-item');
                EQuery(scroller).addChild([EQuery.elemt('li', [item], null, {'data-user-id': id})]);
                EQuery(item).click(function () {
                    Notice('Friend request still pending');
                });
            }
        }
        if (friends_arr['received'].length > 0) {
            EQuery(scroller).addChild([EQuery.elemt('li', [EQuery.elemt('div', null, null, null, 'border: 1px solid #fff5;height: 1px;margin-top: 9px;flex: auto;'), EQuery.elemt('div', 'Incoming Friend request', null, null, 'margin: 0 3px'), EQuery.elemt('div', null, null, null, 'border: 1px solid #fff5;height: 1px;margin-top: 9px;flex: auto;')], null, null, 'height: 19px;color: #fff5;display: flex')]);
            for (let j = 0;j < friends_arr['received'].length;j++) {
                let username = friends_arr['received'][j].username, id = friends_arr['received'][j].id, status = friends_arr['received'][j].status || 'offline', imgUrl = friends_arr['received'][j].profile_pic;
                let content = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('img', null, null, {src: imgUrl})], 'img-container ' + status,)], null, null, 'width: 45px;height: 100%;padding: 2px;'), EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h2', username)], null, null, 'width: calc(100% - 45px);height: 60%;padding: 6px;display: flex;align-items: center;'), EQuery.elemt('div', [EQuery.elemt('span', 'Click to accept', null, null, 'font-style: italic;opacity: 0.4')], null, null, 'width: calc(100% - 60px);height: 40%;padding: 6px;display: flex;align-items: center;')], null, null, 'height: 100%;width: 100%')], 'app-sidelist-content');
                let item = EQuery.elemt('div', [content], 'app-sidelist-item');
                EQuery(scroller).addChild([EQuery.elemt('li', [item], null, {'data-user-id': id})]);
                EQuery(item).click(function () {
                    openModal2(app, {
                        header: 'Receive friend request',
                        content: [
                            {m12: {text: new Text('Do you want to receive ' + username + '\'s friend request?')}}
                        ],
                        btns: {
                            'Receive': function (panel) {
                                app.receiveFriend(id);
                                panel.close();
                            },
                            'Reject': function (panel) {
                                app.rejectFriend(id);
                                panel.close();
                            }
                        }
                    });
                });
            }
        }

        function lastMsg(id) {
            if (!JSON.stringify(app.data[app.selectedID].msg) == '{}') {
                if (!(app.data[app.selectedID].msg[id][app.data[app.selectedID].msg[id].length - 1] == undefined)) {
                    let msg = app.data[app.selectedID].msg[id][app.data[app.selectedID].msg[id].length - 1];
                    if (msg.id == app.data[app.selectedID].userData.id) {
                        return {
                            msg: msg.txt,
                            fromUser: true,
                            pending: msg.pending,
                            time: msg.time
                        };
                    } else {
                        return {
                            msg: msg.txt,
                            fromUser: false,
                            status: '',
                            time: msg.time
                        };
                    }
                } else {
                    return {msg: null, fromUser: null, status: 'New Friend', time: null};
                }
            } else {
                return {msg: null, fromUser: null, status: 'New Friend', time: null};
            }
        }

        EQuery(app.display.mainSideListTop).find('div').removeChildren();
        EQuery(app.display.mainSideListTop).find('div').addChild([EQuery.elemt('div', [sizer], 'app-sidelist-inner', null, 'height: 100%')]);
    }

    function userProfile(app) {
        let imgUrl = app.data[app.selectedID].userData.profile_pic;

        let infoBox = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('span', '@' + app.data[app.selectedID].userData.username)], 'app-badge-upper'), EQuery.elemt('div', [EQuery.elemt('span', 'Status: '), EQuery.elemt('span', ('• ' + app.data[app.selectedID].userData.status), 'app-badge-status ' + app.data[app.selectedID].userData.status)], 'app-badge-lower')], 'app-badge-infoBox');
        let imgBox = EQuery.elemt('div', [EQuery.elemt('img', null, 'app-badge-img', {src: imgUrl})], 'app-badge-imgBox');
        let badgeContainer = EQuery.elemt('div', [imgBox, infoBox], 'app-badge-container');

        EQuery(badgeContainer).click(function () {
            var modal = openModal2(app, {
                header: 'Settings',
                content: [
                    {m12: {html: settingsElt(app)}}
                ]
            });
            EQuery(modal.elt).addClass('m-so');
            EQuery(modal.elt).find('li.bottom')[0].click();
        })
        return EQuery.elemt('div', [badgeContainer], 'app-badge');
    }

    function settingsElt(app) {
        let backBtnSvg = new EQuery.svg();
        let settingsList = [
            {btn: btnElt('General', ''), content: generalElt},
            {btn: btnElt('Account', ''), content: accountElt},
            {btn: btnElt('Chats', ''), content: chatsElt},
            {btn: btnElt('Notifications', ''), content: notificationElt},
            {btn: btnElt('Help', ''), content: helpElt},
            {btn: btnElt('Profile', ''), content: profileElt, bottom: true}
        ];

        let backBtn = EQuery.elemt('button', [backBtnSvg.domElement], 'app-settings-backBtn');
        let leftList = EQuery.elemt('ul', null, 'app-settings-list');
        let rightElt = EQuery.elemt('div', null, 'app-settings-right');
        let leftElt = EQuery.elemt('div', [leftList], 'app-settings-left');
        backBtnSvg.setSize(25, 25);
        backBtnSvg.setViewBox(0, 0, 299, 511.517);
        backBtnSvg.attr({'text-rendering': 'geometricPrecision', 'image-rendering': 'optimizeQuality', 'fill-rule': 'evenodd', 'clip-rule': 'evenodd'})
        backBtnSvg.path('M286.421 75.262c36.893-64.702-15.581-96.094-51.926-60.145L25.08 215.793c-33.44 33.44-33.44 46.491 0 79.93L234.495 496.4c36.345 35.949 88.819 4.557 51.926-60.146L189.16 255.758l97.261-180.496z', '#eee');

        for (var i = 0;i < settingsList.length;i++) {
            let listElt = EQuery.elemt('li', [settingsList[i].btn], (settingsList[i].bottom ? 'bottom' : ''));
            let func = settingsList[i].content;
            EQuery(listElt).click(function () {
                EQuery('.app-settings-list li').removeClass('active');
                EQuery(this).addClass('active');
                if (isMobile) {EQuery(rightElt).addClass('active');};
                EQuery(rightElt).removeChildren();
                EQuery(rightElt).addChild([func()]);
            });
            EQuery(leftList).addChild([listElt])
        }

        EQuery(backBtn).click(function () {
            EQuery(rightElt).removeClass('active');
        });

        function btnElt(name, icon) {
            
            return EQuery.elemt('div', [
                EQuery.elemt('div', [
                    EQuery.elemt('div', icon, null, null, 'margin-left: -12px'),
                    EQuery.elemt('div', name)
                ], 'app-settings-btn-inner')
            ], 'app-settings-btn');
        }

        function generalElt() {
            let username = app.data[app.selectedID].userData.username, profile_pic = app.data[app.selectedID].userData.profile_pic, bio = app.data[app.selectedID].userData.bio, email = app.data[app.selectedID].userData.email;

            let profilePic = EQuery.elemt('img', null, null, {src: profile_pic}, 'height: 100px;width: 100px;border-radius: 50%;border: 1px solid #ccc');

            let usernameInput = EQuery.elemt('input', null, 'app-settings-content-input l2', {value: username}, 'flex: auto;margin-right: 13px')
            let usernameDoneBtn = EQuery.elemt('button', 'Done', 'app-settings-content-btn');

            let bioTxt = EQuery.elemt('div', bio, 'app-settings-content-preview', null, 'display: block');
            let bioInput = EQuery.elemt('input', null, 'app-settings-content-input', {value: bio}, 'display: none;width: 100%');
            let bioEdit = EQuery.elemt('div');
            let logoutBtn = EQuery.elemt('button', 'Log out', 'app-settings-content-btn');
            return EQuery.elemt('div', [backBtn, EQuery.elemt('div', [
                EQuery.elemt('div', [profilePic], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', [usernameInput, usernameDoneBtn], null, null, 'display: flex;margin-bottom: 16px'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Bio', 'app-settings-content-header')]), bioTxt, bioInput, bioEdit], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Email address', 'app-settings-content-header')]), EQuery.elemt('div', email, 'app-settings-content-preview')], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', null, null, null, 'border-top: 1px solid #ccc;margin: 12px 0'),
                EQuery.elemt('div', [logoutBtn, EQuery.elemt('div', 'Chats on this device will be cleared but automatically backedup.', 'app-settings-text')]),
            ])], 'app-settings-content');
        }

        function accountElt() {
            let username = app.data[app.selectedID].userData.username, profile_pic = app.data[app.selectedID].userData.profile_pic, bio = app.data[app.selectedID].userData.bio, email = app.data[app.selectedID].userData.email;

            let profilePic = EQuery.elemt('img', null, null, {src: profile_pic}, 'height: 100px;width: 100px;border-radius: 50%;border: 1px solid #ccc');

            let usernameInput = EQuery.elemt('input', null, 'app-settings-content-input l2', {value: username}, 'flex: auto;margin-right: 13px')
            let usernameDoneBtn = EQuery.elemt('button', 'Done', 'app-settings-content-btn');

            let bioTxt = EQuery.elemt('div', bio, 'app-settings-content-preview', null, 'display: block');
            let bioInput = EQuery.elemt('input', null, 'app-settings-content-input', {value: bio}, 'display: none;width: 100%');
            let bioEdit = EQuery.elemt('div');
            let logoutBtn = EQuery.elemt('button', 'Log out', 'app-settings-content-btn');
            return EQuery.elemt('div', [backBtn, EQuery.elemt('div', [
                EQuery.elemt('div', [profilePic], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', [usernameInput, usernameDoneBtn], null, null, 'display: flex;margin-bottom: 16px'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Bio', 'app-settings-content-header')]), bioTxt, bioInput, bioEdit], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Email address', 'app-settings-content-header')]), EQuery.elemt('div', email, 'app-settings-content-preview')], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', null, null, null, 'border-top: 1px solid #ccc;margin: 12px 0'),
                EQuery.elemt('div', [logoutBtn, EQuery.elemt('div', 'Chats on this device will be cleared but automatically backedup.', 'app-settings-text')]),
            ])], 'app-settings-content');
        }

        function chatsElt() {
            let username = app.data[app.selectedID].userData.username, profile_pic = app.data[app.selectedID].userData.profile_pic, bio = app.data[app.selectedID].userData.bio, email = app.data[app.selectedID].userData.email;

            let profilePic = EQuery.elemt('img', null, null, {src: profile_pic}, 'height: 100px;width: 100px;border-radius: 50%;border: 1px solid #ccc');

            let usernameInput = EQuery.elemt('input', null, 'app-settings-content-input l2', {value: username}, 'flex: auto;margin-right: 13px')
            let usernameDoneBtn = EQuery.elemt('button', 'Done', 'app-settings-content-btn');

            let bioTxt = EQuery.elemt('div', bio, 'app-settings-content-preview', null, 'display: block');
            let bioInput = EQuery.elemt('input', null, 'app-settings-content-input', {value: bio}, 'display: none;width: 100%');
            let bioEdit = EQuery.elemt('div');
            let logoutBtn = EQuery.elemt('button', 'Log out', 'app-settings-content-btn');
            return EQuery.elemt('div', [backBtn, EQuery.elemt('div', [
                EQuery.elemt('div', [profilePic], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', [usernameInput, usernameDoneBtn], null, null, 'display: flex;margin-bottom: 16px'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Bio', 'app-settings-content-header')]), bioTxt, bioInput, bioEdit], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Email address', 'app-settings-content-header')]), EQuery.elemt('div', email, 'app-settings-content-preview')], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', null, null, null, 'border-top: 1px solid #ccc;margin: 12px 0'),
                EQuery.elemt('div', [logoutBtn, EQuery.elemt('div', 'Chats on this device will be cleared but automatically backedup.', 'app-settings-text')]),
            ])], 'app-settings-content');
        }

        function notificationElt() {
            let username = app.data[app.selectedID].userData.username, profile_pic = app.data[app.selectedID].userData.profile_pic, bio = app.data[app.selectedID].userData.bio, email = app.data[app.selectedID].userData.email;

            let profilePic = EQuery.elemt('img', null, null, {src: profile_pic}, 'height: 100px;width: 100px;border-radius: 50%;border: 1px solid #ccc');

            let usernameInput = EQuery.elemt('input', null, 'app-settings-content-input l2', {value: username}, 'flex: auto;margin-right: 13px')
            let usernameDoneBtn = EQuery.elemt('button', 'Done', 'app-settings-content-btn');

            let bioTxt = EQuery.elemt('div', bio, 'app-settings-content-preview', null, 'display: block');
            let bioInput = EQuery.elemt('input', null, 'app-settings-content-input', {value: bio}, 'display: none;width: 100%');
            let bioEdit = EQuery.elemt('div');
            let logoutBtn = EQuery.elemt('button', 'Log out', 'app-settings-content-btn');
            return EQuery.elemt('div', [backBtn, EQuery.elemt('div', [
                EQuery.elemt('div', [profilePic], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', [usernameInput, usernameDoneBtn], null, null, 'display: flex;margin-bottom: 16px'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Bio', 'app-settings-content-header')]), bioTxt, bioInput, bioEdit], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Email address', 'app-settings-content-header')]), EQuery.elemt('div', email, 'app-settings-content-preview')], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', null, null, null, 'border-top: 1px solid #ccc;margin: 12px 0'),
                EQuery.elemt('div', [logoutBtn, EQuery.elemt('div', 'Chats on this device will be cleared but automatically backedup.', 'app-settings-text')]),
            ])], 'app-settings-content');
        }

        function helpElt() {
            let username = app.data[app.selectedID].userData.username, profile_pic = app.data[app.selectedID].userData.profile_pic, bio = app.data[app.selectedID].userData.bio, email = app.data[app.selectedID].userData.email;

            let profilePic = EQuery.elemt('img', null, null, {src: profile_pic}, 'height: 100px;width: 100px;border-radius: 50%;border: 1px solid #ccc');

            let usernameInput = EQuery.elemt('input', null, 'app-settings-content-input l2', {value: username}, 'flex: auto;margin-right: 13px')
            let usernameDoneBtn = EQuery.elemt('button', 'Done', 'app-settings-content-btn');

            let bioTxt = EQuery.elemt('div', bio, 'app-settings-content-preview', null, 'display: block');
            let bioInput = EQuery.elemt('input', null, 'app-settings-content-input', {value: bio}, 'display: none;width: 100%');
            let bioEdit = EQuery.elemt('div');
            let logoutBtn = EQuery.elemt('button', 'Log out', 'app-settings-content-btn');
            return EQuery.elemt('div', [backBtn, EQuery.elemt('div', [
                EQuery.elemt('div', [profilePic], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', [usernameInput, usernameDoneBtn], null, null, 'display: flex;margin-bottom: 16px'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Bio', 'app-settings-content-header')]), bioTxt, bioInput, bioEdit], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Email address', 'app-settings-content-header')]), EQuery.elemt('div', email, 'app-settings-content-preview')], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', null, null, null, 'border-top: 1px solid #ccc;margin: 12px 0'),
                EQuery.elemt('div', [logoutBtn, EQuery.elemt('div', 'Chats on this device will be cleared but automatically backedup.', 'app-settings-text')]),
            ])], 'app-settings-content');
        }

        function profileElt() {
            let username = app.data[app.selectedID].userData.username, profile_pic = app.data[app.selectedID].userData.profile_pic, bio = app.data[app.selectedID].userData.bio, email = app.data[app.selectedID].userData.email;

            let profilePic = EQuery.elemt('img', null, null, {src: profile_pic}, 'height: 100px;width: 100px;border-radius: 50%;border: 1px solid #ccc');

            let usernameInput = EQuery.elemt('input', null, 'app-settings-content-input l2', {value: username}, 'flex: auto;margin-right: 13px')
            let usernameDoneBtn = EQuery.elemt('button', 'Done', 'app-settings-content-btn');

            let bioTxt = EQuery.elemt('div', bio, 'app-settings-content-preview', null, 'display: block');
            let bioInput = EQuery.elemt('input', null, 'app-settings-content-input', {value: bio}, 'display: none;width: 100%;flex: auto;margin-right: 10px');
            let bioEdit = EQuery.elemt('div', null, null, null, 'position: absolute;top: 0;right: 0;height: 12px;width: 12px;background-color: #000;');
            let bioDoneBtn = EQuery.elemt('button', 'Done', 'app-settings-content-btn', null, 'display: none');
            let logoutBtn = EQuery.elemt('button', 'Log out', 'app-settings-content-btn');

            EQuery(usernameDoneBtn).click(function () {
                let newUsername = EQuery(usernameInput).val();
                app.data[app.selectedID].userData.username = newUsername;
                app.save();
                app.uploadData();
            });
            EQuery(bioEdit).click(function () {
                EQuery(bioTxt).hide();
                EQuery(bioInput).show();
                EQuery(bioDoneBtn).show();
            });
            EQuery(bioDoneBtn).click(function () {
                let newBio = EQuery(bioInput).val();
                app.data[app.selectedID].userData.bio = newBio;
                app.save();
                app.uploadData();
                EQuery(bioTxt).show();
                EQuery(bioInput).hide();
                EQuery(bioDoneBtn).hide();
                EQuery(bioTxt).text(newBio);
            });
            EQuery(logoutBtn).click(function () {
                app.uploadData();
                app.logout();
            });


            return EQuery.elemt('div', [backBtn, EQuery.elemt('div', [
                EQuery.elemt('div', [profilePic], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', [usernameInput, usernameDoneBtn], null, null, 'display: flex;margin-bottom: 16px'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Bio', 'app-settings-content-header')]), bioTxt, EQuery.elemt('div', [bioInput, bioDoneBtn], null, null, 'display: flex'), bioEdit], null, null, 'position: relative;margin-bottom: 16px;'),
                EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h3', 'Email address', 'app-settings-content-header')]), EQuery.elemt('div', email, 'app-settings-content-preview')], null, null, 'margin-bottom: 16px'),
                EQuery.elemt('div', null, null, null, 'border-top: 1px solid #ccc;margin: 12px 0'),
                EQuery.elemt('div', [logoutBtn, EQuery.elemt('div', 'Chats on this device will be cleared but automatically backedup.', 'app-settings-text')]),
            ])], 'app-settings-content');
        }

        return EQuery.elemt('div', [leftElt, rightElt], 'app-settings-pane');
    }

    function Main(display, app) {
        let svg = new EQuery.svg();
        svg.setSize(300, 94, true);
        svg.setViewBox(0, 0, 60, 60);
        svg.path('M44.348,12.793H2.652C1.189,12.793,0,13.983,0,15.446v43.761l9.414-9.414h34.934c1.463,0,2.652-1.19,2.652-2.653V15.446 C47,13.983,45.811,12.793,44.348,12.793z M11,22.793h12c0.553,0,1,0.448,1,1s-0.447,1-1,1H11c-0.553,0-1-0.448-1-1 S10.447,22.793,11,22.793z M36,38.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,38.793,36,38.793z M36,31.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,31.793,36,31.793z', '#007A9C');
        let chatOverlay = EQuery.elemt('div', [svg.domElement, EQuery.elemt('div', 'Your chats will appear here.')], null, null, 'position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);color: #eee8;font-size: 23px;');

        display.chatContainer = EQuery.elemt('div', null, 'app-container', null, 'position: absolute;top: 50px;background-color: rgb(15, 16, 22);height: calc(100% - 50px);width: 100%;');
        display.tabList = EQuery.elemt('div', null, 'tabs-container', {role: 'tablist'}, 'height: 50px;width: 100%;background: rgb(27,24, 37);padding: 7.5px 0');
        display.tabsContainer = EQuery.elemt('div', [display.tabList], 'tabs-actions-container', null, 'display: flex;position: relative');
        display.tabBars = EQuery.elemt('div', [display.tabsContainer], 'title tabs');
        display.mainChat = EQuery.elemt('div', [display.tabBars, display.chatContainer], null, null, 'position: relative;display: none;height: 100%;width: 100%;overflow: hidden;word-wrap: nowrap;background-color: rgb(15, 16, 22);border-radius: 12px');

        display.mainSideListTop = EQuery.elemt('div', [EQuery.elemt('div', null, 'app-sidelist-top-inner', null, 'height: 100%')], 'app-sidelist-top');
        display.mainSideListBottom = EQuery.elemt('div', [EQuery.elemt('div', null, 'app-sidelist-bottom-inner')], 'app-sidelist-bottom');

        display.mainSplitChat = EQuery.elemt('div', [display.mainChat, EQuery.elemt('div', null, 'Overlay', null, 'position: absolute;left:0;top:0;display: none;height:100%;width:100%;background-color:#0008;border-radius: 12px'), EQuery.elemt('div', [chatOverlay], 'inactive', null, 'position: absolute;left: 0;top: 0;display: inline-block;height: 100%;width: 100%;background-color: rgb(27, 24, 34);border-radius: 12px')], 'split-view-view visible e-shadow', null, 'position: absolute;height: calc(100% - 8px);width: 100%;left: 250px;margin-top: 3px; background: #222;border-radius: 12px;transition: left .2s ease-out, width .2s ease-out;');
        display.mainSplitSideList = EQuery.elemt('div', [display.mainSideListTop, display.mainSideListBottom], 'split-view-view visible e-shadow', null, 'width: 235px;height: calc(100% - 6px);margin-top: 3px;background-color: #333;border-right: #0000 solid 3px; border-radius: 12px;');
        display.mainContainer = EQuery.elemt('div', [display.mainSplitSideList, display.mainSplitChat], 'app-split-container', null, 'background-color: rgb(27, 24, 34)');
        EQuery(display.splitMain).addChild([display.mainContainer]);
    }

    function Sidebar(display, app) {
        let friendSvg = new EQuery.svg();
        friendSvg.setSize(40, 40, true);
        friendSvg.setViewBox(-10, -10, 80, 80);
        friendSvg.path('M44.348,12.793H2.652C1.189,12.793,0,13.983,0,15.446v43.761l9.414-9.414h34.934c1.463,0,2.652-1.19,2.652-2.653V15.446 C47,13.983,45.811,12.793,44.348,12.793z M11,22.793h12c0.553,0,1,0.448,1,1s-0.447,1-1,1H11c-0.553,0-1-0.448-1-1 S10.447,22.793,11,22.793z M36,38.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,38.793,36,38.793z M36,31.793H11c-0.553,0-1-0.448-1-1s0.447-1,1-1h25c0.553,0,1,0.448,1,1S36.553,31.793,36,31.793z', '#007A9C');
        friendSvg.path('M57.348,0.793H12.652C11.189,0.793,10,1.983,10,3.446v7.347h34.348c2.565,0,4.652,2.087,4.652,4.653v25.347h1.586H60V3.446 C60,1.983,58.811,0.793,57.348,0.793z', '#007A9C');

        let addGroupSvg = new EQuery.svg();
        addGroupSvg.setSize(40, 40, true);
        addGroupSvg.setViewBox(-20, -20, 170, 170);
        addGroupSvg.path('M105.36,68.94c5.04,5.72,8.09,13.23,8.09,21.45c0,17.94-14.54,32.49-32.49,32.49 c-12.45,0-23.27-7.01-28.72-17.29H37.43v6.94h-22.1v-6.94H0.01v-8.06h15.32v-7.01h7.02V74.65H7.24c-1.99,0-3.8-0.81-5.11-2.12 C0.81,71.22,0,69.41,0,67.42V41.99c0-1.77,0.64-3.4,1.71-4.66C0.64,36.07,0,34.44,0,32.66V7.24c0-1.99,0.81-3.8,2.12-5.11 C3.43,0.81,5.24,0,7.24,0H98.3c1.99,0,3.8,0.81,5.11,2.12c1.31,1.31,2.12,3.12,2.12,5.11v25.43c0,1.77-0.65,3.4-1.71,4.66 c1.07,1.26,1.71,2.89,1.71,4.66v25.43C105.53,67.93,105.47,68.44,105.36,68.94L105.36,68.94z M49.27,97.53 c-0.52-2.3-0.79-4.69-0.79-7.14c0-5.71,1.48-11.08,4.06-15.74H30.4v15.88h7.02v7.01H49.27L49.27,97.53z M26.38,96.51 c2.77,0,5.02,2.25,5.02,5.02c0,2.77-2.25,5.02-5.02,5.02c-2.77,0-5.02-2.25-5.02-5.02C21.36,98.76,23.6,96.51,26.38,96.51 L26.38,96.51z M14.17,13.03h5.35v13.85h-5.35V13.03L14.17,13.03z M87.69,50.46c2.34,0,4.24,1.9,4.24,4.24c0,2-1.38,3.67-3.24,4.12 c1.68,0.41,3.31,0.95,4.88,1.61c2.45,1.03,4.75,2.34,6.86,3.91V41.99c0-0.58-0.24-1.12-0.63-1.5c-0.3-0.3-0.69-0.51-1.12-0.59 c-0.13,0.01-0.26,0.01-0.38,0.01H7.24c-0.13,0-0.26,0-0.38-0.01c-0.43,0.08-0.82,0.29-1.12,0.59C5.34,40.87,5.1,41.4,5.1,41.99 v25.43c0,0.58,0.24,1.12,0.63,1.5c0.39,0.39,0.92,0.63,1.5,0.63H55.8c2.94-3.48,6.58-6.34,10.7-8.35 c4.35-2.12,9.23-3.31,14.39-3.31c1.48,0,2.94,0.1,4.37,0.29c-1.1-0.77-1.81-2.04-1.81-3.48C83.45,52.36,85.35,50.46,87.69,50.46 L87.69,50.46z M71.54,50.46c2.34,0,4.24,1.9,4.24,4.24c0,2.34-1.9,4.24-4.24,4.24c-2.34,0-4.24-1.9-4.24-4.24 C67.3,52.36,69.2,50.46,71.54,50.46L71.54,50.46z M43.75,47.78h5.35v13.85h-5.35V47.78L43.75,47.78z M28.96,47.78h5.35v13.85h-5.35 V47.78L28.96,47.78z M14.17,47.78h5.35v13.85h-5.35V47.78L14.17,47.78z M87.69,15.71c2.34,0,4.24,1.9,4.24,4.24 c0,2.34-1.9,4.24-4.24,4.24c-2.34,0-4.24-1.9-4.24-4.24C83.45,17.61,85.35,15.71,87.69,15.71L87.69,15.71z M71.54,15.71 c2.34,0,4.24,1.9,4.24,4.24c0,2.34-1.9,4.24-4.24,4.24c-2.34,0-4.24-1.9-4.24-4.24C67.3,17.61,69.2,15.71,71.54,15.71L71.54,15.71z M43.75,13.03h5.35v13.85h-5.35V13.03L43.75,13.03z M28.96,13.03h5.35v13.85h-5.35V13.03L28.96,13.03z M96.59,87.39v6.03 c0,1.23-1.01,2.23-2.23,2.23h-8.18v8.18c0,1.23-1.01,2.23-2.23,2.23h-6.03c-1.23,0-2.23-1.01-2.23-2.23v-8.18h-8.18 c-1.23,0-2.23-1.01-2.23-2.23v-6.03c0-1.23,1.01-2.23,2.23-2.23h8.18v-8.18c0-1.23,1.01-2.23,2.23-2.23h6.03 c1.23,0,2.23,1.01,2.23,2.23v8.18h8.18C95.59,85.16,96.59,86.16,96.59,87.39L96.59,87.39z M6.85,34.76 c0.13-0.01,0.26-0.01,0.38-0.01H98.3c0.13,0,0.26,0,0.38,0.01c0.43-0.08,0.82-0.29,1.12-0.59c0.39-0.39,0.63-0.92,0.63-1.5V7.24 c0-0.58-0.24-1.12-0.63-1.51c-0.39-0.39-0.92-0.63-1.5-0.63H7.24c-0.58,0-1.12,0.24-1.51,0.63C5.34,6.12,5.1,6.65,5.1,7.24v25.43 c0,0.58,0.24,1.12,0.63,1.5C6.03,34.47,6.42,34.68,6.85,34.76L6.85,34.76z M97.96,68.85c-1.93-1.5-4.06-2.76-6.34-3.72 c-3.29-1.38-6.92-2.14-10.72-2.14c-2.37,0-4.67,0.3-6.87,0.86c-11.79,3.08-20.49,13.8-20.49,26.55c0,15.15,12.28,27.44,27.43,27.44 c15.15,0,27.44-12.28,27.44-27.44C108.4,81.66,104.32,73.88,97.96,68.85L97.96,68.85z', '#007A9C');

        let addFriendSvg = new EQuery.svg();
        addFriendSvg.setSize(40, 40, true);
        addFriendSvg.setViewBox(-2.5, -2.5, 25, 25);
        addFriendSvg.path('m14.5 10c2.4853 0 4.5 2.0147 4.5 4.5s-2.0147 4.5-4.5 4.5-4.5-2.0147-4.5-4.5 2.0147-4.5 4.5-4.5zm-4.2428 1c-.78538.9509-1.2572 2.1704-1.2572 3.5 0 1.3031.45316 2.5003 1.2105 3.4427-.395.0384-.79965.0573-1.2105.0573-1.85474 0-3.58303-.386-4.86501-1.2034-1.30218-.8303-2.13499-2.1054-2.13499-3.7966 0-1.0625045.82291147-1.9189054 1.85928963-1.9945647l.14944037-.0054353zm4.2428 1c-.2454222 0-.4496.1769086-.4919429.4101355l-.0080571.0898645v1.5h-1.5c-.2761 0-.5.2239-.5.5 0 .2454222.1769086.4496.4101355.4919429l.0898645.0080571h1.5v1.5c0 .2761.2239.5.5.5.2454222 0 .4496-.1769086.4919429-.4101355l.0080571-.0898645v-1.5h1.5c.2761 0 .5-.2239.5-.5 0-.2454222-.1769086-.4496-.4101355-.4919429l-.0898645-.0080571h-1.5v-1.5c0-.2761-.2239-.5-.5-.5zm-5.5-10c2.2091 0 4 1.79086 4 4s-1.7909 4-4 4c-2.20914 0-4-1.79086-4-4s1.79086-4 4-4z', '#007A9C');

        let settingsSvg = new EQuery.svg();
        settingsSvg.setSize(40, 40, true);
        settingsSvg.setViewBox(-50.5, -60.5, 500.4, 500.4);
        settingsSvg.path('M128.8,130c-3.6-2.8-8.4-2-11.2,1.6c-0.4,0.8-1.2,1.6-2,2.4c-0.8,0.8-1.6,2-2,2.8c-2.8,3.6-2,8.4,1.6,11.2 c1.6,1.2,3.2,1.6,4.8,1.6c2.4,0,4.8-1.2,6.4-3.2c0.4-0.8,1.2-1.6,2-2.4c0.8-0.8,1.6-2,2-2.8C133.2,137.6,132.4,132.8,128.8,130z', '#007A9C');
        settingsSvg.path('M108,204.4c0-8.8,1.2-18,3.2-26c1.2-4.4-1.2-8.8-5.6-10c-4.4-1.2-8.8,1.2-10,5.6c-2.4,9.2-4,19.6-4,30 c0,23.2,6.8,45.6,19.2,64.4c1.6,2.4,4,3.6,6.8,3.6c1.6,0,3.2-0.4,4.4-1.2c3.6-2.4,4.8-7.6,2-11.2 C113.6,243.6,108,224.8,108,204.4z', '#007A9C');
        settingsSvg.path('M208,140.4c-35.2,0-64,28.8-64,64s28.8,64,64,64s64-28.8,64-64S243.2,140.4,208,140.4z M208,252.4c-26.4,0-48-21.6-48-48 c0-26.4,21.6-48,48-48c26.4,0,48,21.6,48,48C256,230.8,234.4,252.4,208,252.4z', '#007A9C');
        settingsSvg.path('M396,175.2l-41.2-12c-3.2-12.4-8.4-24.4-14.8-35.6l21.6-38.4c3.2-6.4,2-14-2.8-18.8l-19.6-19.6c-5.2-5.2-13.2-6-19.2-2.4 l-38,21.2C272,64,261.2,59.2,250.4,56L238,12.8c-1.6-7.2-8-12-15.2-12h-28c-7.2,0-13.6,4.8-15.2,12L168,53.2 c-12.4,3.2-24.4,7.6-36,13.6l-40-22c-6.4-3.2-14-2-18.8,2.8L53.6,67.2c-5.2,5.2-6,13.2-2.4,19.2l19.6,36.8 c-7.2,12-13.2,25.2-16.8,39.6l-42,12c-7.2,1.6-12,8-12,15.2v28c0,7.2,4.8,13.6,12,15.2l41.6,12.4C56.8,258,62,270,68.4,281.2 l-21.6,38.4c-3.2,6.4-2,14,2.8,18.8L69.2,358c5.2,5.2,13.2,6,19.2,2.4l38-21.2c12,6.8,25.6,12.4,40,16l11.6,40.4 c1.6,7.2,8,12,15.2,12h28c7.2,0,13.6-4.8,15.2-12l12.4-43.2c12.4-3.6,24-9.2,35.6-16l37.2,20.8c6.4,3.2,14,2,18.8-2.8l19.6-19.6 c5.2-5.2,6-13.2,2.4-19.2l-21.6-39.2c5.6-10.4,9.6-21.2,12.8-32l40.8-11.6c3.6,0,6.8-1.2,9.2-3.6c2.8-2.8,4.8-6.8,4.8-10.8v-28 C408,183.2,403.2,176.8,396,175.2z M391.6,217.2l-46.8,13.2c-2.8,0.8-4.8,3.2-5.6,6c-3.2,12-8,24.4-14.4,36c-1.2,2.4-1.2,5.2,0,8 l24,43.2l-19.2,19.2h-0.4L288,320.4c-2.8-1.6-5.6-1.2-8.4,0.4c-12.4,8-25.6,14-39.2,17.6c-2.8,0.8-4.8,2.8-5.6,5.6l-13.6,47.6 l-27.6,0.4v-0.4l-12.8-45.2c-0.8-2.8-3.2-5.2-6-5.6c-16.4-3.6-31.2-9.2-44-17.2c-1.2-0.8-2.8-1.2-4.4-1.2c-1.2,0-2.8,0.4-4,1.2 l-42,23.6L60.8,328v-0.4l23.6-42c1.6-2.4,1.2-5.6,0-8C76.8,265.2,71.2,252,68,238c-0.8-2.8-2.8-5.2-5.6-6L16,218l-0.4-27.6H16 l46.4-13.2c2.8-0.8,4.8-3.2,5.6-5.6c4-16,10-30,18.4-43.2c1.6-2.4,1.6-5.6,0.4-8L64.4,79.2l19.2-19.6H84l43.2,24 c2.4,1.2,5.2,1.2,8,0c12.8-7.2,26-12,40-15.2c2.8-0.8,5.2-2.8,6-5.6L194,17.6l27.6-0.4v0.4L236,64.4c0.8,2.8,2.8,4.8,5.6,5.6 c12.8,3.2,24.8,8.4,36,15.6c2.4,1.6,5.6,1.6,8,0l42-23.6l19.6,19.2v0.4l-23.6,42c-1.6,2.4-1.2,5.6,0,8 c7.6,12.4,13.2,25.6,16.8,39.6c0.8,2.8,2.8,5.2,5.6,6l46.4,13.2v26.4C392,216.8,391.6,216.8,391.6,217.2z', '#007A9C');
        

        let sidebar_friendsBtn = EQuery.elemt('div', [friendSvg.domElement], 'active');
        let sidebar_addFriend = EQuery.elemt('div', [addFriendSvg.domElement], null, {id: 'add_friend'});
        let sidebar_addGroup = EQuery.elemt('div', [addGroupSvg.domElement], null, {id: 'add_group'});
        let sidebar_settings = EQuery.elemt('div', [settingsSvg.domElement], null, {id: 'settings'});

        let sidebarContent = {
            Friends: {click: function() {app.switchTo('friends');}, elt: sidebar_friendsBtn},
            servers: app.data.logged_in ? fetch_sidebarGroup(app) : [],
            'Add Friend': {click: function () {}, elt: sidebar_addFriend},
            'Add Group': {click: function () {}, elt: sidebar_addGroup},
            'Settings': {click: function () {}, elt: sidebar_settings}
        };

        display.sidebarList = EQuery.elemt('ul', null, 'actions-container', {role: 'toolbar'}, 'overflow: auto');

        display.sidebar = EQuery.elemt('div', [EQuery.elemt('div', [display.sidebarList], 'action-bar vertial')], null, null, 'height: 100%');

        display.sidebarContent = EQuery.elemt('div', [display.sidebar], 'content', null, 'height: 100%');
        display.sidebarContainer = EQuery.elemt('div', [display.sidebarContent], 'part activitybar', null, 'background-color: rgb(27, 24, 34);width: 48px;height: calc(100% - 30px);padding-top: 25px;padding-bottom: 25px;');

        for (let btn in sidebarContent) {
            let obj = sidebarContent[btn];
            if (btn !== 'servers') {
                addSideBtn(display, btn, obj);
            } else {
                for (let i = 0; i < obj.length; i++) {
                    addSideBtn(display, obj[i].name, obj[i]);
                }
            }
        }
        EQuery(display.splitSideBar).addChild([display.sidebarContainer]);
    }

    function addSideBtn(display, name, obj) {
        let sizer = EQuery.elemt('div', [obj.elt], 'action-label');
        let container = EQuery.elemt('li', [sizer], 'action-item', {'aria-label': name}, name == 'Settings' ? 'position: absolute;bottom: 5px' : '');
        EQuery(display.sidebarList).addChild([container]);
        EQuery(container).click(function() {
            // obj.click();
        });
    }

    function Display(app) {
        let d = this;
        this.filePicker = EQuery.elemt('input', null, null, {hidden: '', type: 'file', multiple: ''})
        this.loginContainer = EQuery.elemt('div', null, 'app-position-absolute app-fullscreen', {id: 'app-login-container'}, 'background-color: #1b1822;transition: all 0.5s;z-index: 5;');
        this.fileImporter = EQuery.elemt('input', null, null, {type: 'file',  multiple: ''});
        this.contextView = EQuery.elemt('div', null, 'context-view', {role: 'presentation'}, 'position: absolute;width: initial;z-index: 2500;');
        this.preview = EQuery.elemt('div', null, null, {role: 'presentation'});
        this.splitMain = EQuery.elemt('div', null, 'split-view-view visible', null, 'top: 0px;left: 50px;height: 100%;width: calc(100% - 50px)');
        this.splitSideBar = EQuery.elemt('div', null, 'split-view-view visible', null, 'top: 0;left: 0;height: 100%;width: 50px;');
        this.splitContainer = EQuery.elemt('div', [this.splitSideBar, this.splitMain], 'app-split-container', null, 'display: none');
        this.offline = EQuery.elemt('div', null, 'split-view-view', null, 'height: 25px');
        this.outerContainer = EQuery.elemt('div', [this.splitContainer], 'split-view-view visible', null, 'position: fixed;top: 0px;height: 100%;transition: all 0.5s;z-index: 4;');
        this.outerSplitContainer = EQuery.elemt('div', [this.offline, this.outerContainer], 'app-split-container');
        this.overlay = EQuery.elemt('div', null, 'app-overlay');
        this.container = EQuery.elemt('div', [this.outerSplitContainer, this.preview, this.contextView, this.overlay, this.loginContainer], 'sash-container scrollable-element clearfix', null, 'height: 100%;width: 100%');
        this.wrapper = EQuery.elemt('div', [this.container], (isMobile ? 'mobile-view ' : '') + 'clearfix', {id: 'container'}, 'background-color: rgb(27, 24, 34);min-height: 400px;');

        Sidebar(d, app);
        Main(d, app);
        updateDisplay(d);

        log(logTime(), 'Initiizing display');
    }

    function chatElt(app, id) {
        let _this = this;
        let imgSrc = app.data[app.selectedID].contacts[id].profile_pic;
        let username = app.data[app.selectedID].contacts[id].username;
        let status = app.data[app.selectedID].contacts[id].status;
        let fill = '#7383bf';
        let inputHeight = 29;

        let menuSvg = new EQuery.svg();
        menuSvg.setSize(35, 35);
        menuSvg.setViewBox(-64, -64, 640, 640);
        menuSvg.css('background-color: rgb(27, 24, 37');
        menuSvg.path('M491.277,107.347H20.723c-8.566,0-15.51-6.944-15.51-15.51V15.51C5.213,6.944,12.157,0,20.723,0 h470.553c8.566,0,15.51,6.944,15.51,15.51v76.326C506.787,100.403,499.843,107.347,491.277,107.347z M36.234,76.326h439.533V31.021 H36.234V76.326z', fill);
        menuSvg.path('M491.277,242.232H20.723c-8.566,0-15.51-6.944-15.51-15.51v-76.326c0-8.566,6.944-15.51,15.51-15.51 h470.553c8.566,0,15.51,6.944,15.51,15.51v76.326C506.787,235.288,499.843,242.232,491.277,242.232z M36.234,211.211h439.533 v-45.305H36.234V211.211z', fill);
        menuSvg.path('M491.277,377.117H20.723c-8.566,0-15.51-6.944-15.51-15.51V285.28c0-8.566,6.944-15.51,15.51-15.51 h470.553c8.566,0,15.51,6.944,15.51,15.51v76.326C506.787,370.173,499.843,377.117,491.277,377.117z M36.234,346.096h439.533 v-45.305H36.234V346.096z', fill);
        menuSvg.path('M491.277,512H20.723c-8.566,0-15.51-6.944-15.51-15.51v-76.326c0-8.566,6.944-15.51,15.51-15.51 h315.93c8.566,0,15.51,6.944,15.51,15.51c0,8.566-6.944,15.51-15.51,15.51H36.234v45.305h439.533v-45.305H430.49 c-8.566,0-15.51-6.944-15.51-15.51c0-8.566,6.944-15.51,15.51-15.51h60.786c8.566,0,15.51,6.944,15.51,15.51v76.326 C506.787,505.056,499.843,512,491.277,512z', fill);
        menuSvg.rect(20.723, 15.51, 470.55, 76.326, fill);
        menuSvg.rect(20.723, 285.28, 470.55, 76.326, fill);

        let moreSvg = new EQuery.svg();
        moreSvg.setSize(35, 35);
        moreSvg.setViewBox(-6, -6, 85, 85);
        moreSvg.css('backgroud-color: rgb(27, 24, 37');
        moreSvg.circle(29, 7, 7, fill);
        moreSvg.circle(29, 29, 7, fill);
        moreSvg.circle(29, 51, 7, fill);
        
        let docSvg = new EQuery.svg();
        docSvg.setSize(25, 25);
        docSvg.css('background-color: #0000')
        docSvg.setViewBox(-80, -80, 500.591, 500.591);
        docSvg.path('M52.575,320.395c-0.693,0-1.391-0.015-2.09-0.043c-12.979-0.54-25.361-6.071-34.865-15.576 c-9.504-9.504-15.035-21.886-15.576-34.864c-0.549-13.213,4.115-25.456,13.133-34.475L221.581,27.033 c11.523-11.523,27.197-17.483,44.096-16.78c16.676,0.693,32.594,7.81,44.822,20.037c12.228,12.229,19.346,28.147,20.037,44.823 c0.703,16.911-5.256,32.571-16.781,44.096L156.711,276.255c-2.928,2.927-7.676,2.928-10.607,0c-2.928-2.93-2.928-7.678,0-10.608 l157.045-157.047c8.523-8.522,12.928-20.194,12.4-32.865c-0.537-12.906-6.098-25.279-15.658-34.84 c-9.559-9.56-21.932-15.119-34.838-15.656c-12.67-0.533-24.344,3.876-32.865,12.399L23.784,246.044 c-12.596,12.594-11.498,34.184,2.443,48.125c6.836,6.837,15.672,10.813,24.881,11.195c8.975,0.349,17.229-2.734,23.244-8.752 l169.441-169.439c7.422-7.422,6.691-20.229-1.629-28.549c-4.113-4.114-9.414-6.505-14.924-6.733 c-5.289-0.212-10.115,1.595-13.625,5.106L95.536,215.08c-2.93,2.927-7.678,2.928-10.607,0c-2.93-2.93-2.93-7.678,0-10.607 L203.008,86.39c6.512-6.512,15.322-9.9,24.855-9.486c9.281,0.385,18.127,4.332,24.906,11.114 c14.17,14.167,14.9,36.49,1.631,49.762L84.959,307.22C76.418,315.76,64.985,320.395,52.575,320.395z', fill);

        let emojiSvg = new EQuery.svg();
        emojiSvg.setSize(25, 25);
        emojiSvg.css('background-color: #0000')
        emojiSvg.setViewBox(-80, -80, 500.591, 500.591);
        emojiSvg.path('M52.575,320.395c-0.693,0-1.391-0.015-2.09-0.043c-12.979-0.54-25.361-6.071-34.865-15.576 c-9.504-9.504-15.035-21.886-15.576-34.864c-0.549-13.213,4.115-25.456,13.133-34.475L221.581,27.033 c11.523-11.523,27.197-17.483,44.096-16.78c16.676,0.693,32.594,7.81,44.822,20.037c12.228,12.229,19.346,28.147,20.037,44.823 c0.703,16.911-5.256,32.571-16.781,44.096L156.711,276.255c-2.928,2.927-7.676,2.928-10.607,0c-2.928-2.93-2.928-7.678,0-10.608 l157.045-157.047c8.523-8.522,12.928-20.194,12.4-32.865c-0.537-12.906-6.098-25.279-15.658-34.84 c-9.559-9.56-21.932-15.119-34.838-15.656c-12.67-0.533-24.344,3.876-32.865,12.399L23.784,246.044 c-12.596,12.594-11.498,34.184,2.443,48.125c6.836,6.837,15.672,10.813,24.881,11.195c8.975,0.349,17.229-2.734,23.244-8.752 l169.441-169.439c7.422-7.422,6.691-20.229-1.629-28.549c-4.113-4.114-9.414-6.505-14.924-6.733 c-5.289-0.212-10.115,1.595-13.625,5.106L95.536,215.08c-2.93,2.927-7.678,2.928-10.607,0c-2.93-2.93-2.93-7.678,0-10.607 L203.008,86.39c6.512-6.512,15.322-9.9,24.855-9.486c9.281,0.385,18.127,4.332,24.906,11.114 c14.17,14.167,14.9,36.49,1.631,49.762L84.959,307.22C76.418,315.76,64.985,320.395,52.575,320.395z', fill);

        let sendSvg = new EQuery.svg();
        sendSvg.setSize(30, 30);
        sendSvg.setViewBox(0, 0, 24, 24);
        sendSvg.css('background-color: #0000;')
        sendSvg.path('M19.2111 2.06722L3.70001 5.94499C1.63843 6.46039 1.38108 9.28612 3.31563 10.1655L8.09467 12.3378C9.07447 12.7831 10.1351 12.944 11.1658 12.8342C11.056 13.8649 11.2168 14.9255 11.6622 15.9053L13.8345 20.6843C14.7139 22.6189 17.5396 22.3615 18.055 20.3L21.9327 4.78886C22.3437 3.14517 20.8548 1.6563 19.2111 2.06722ZM8.92228 10.517C9.85936 10.943 10.9082 10.9755 11.8474 10.6424C12.2024 10.5165 12.5417 10.3383 12.8534 10.1094C12.8968 10.0775 12.9397 10.0446 12.982 10.0108L15.2708 8.17974C15.6351 7.88831 16.1117 8.36491 15.8202 8.7292L13.9892 11.018C13.9553 11.0603 13.9225 11.1032 13.8906 11.1466C13.6617 11.4583 13.4835 11.7976 13.3576 12.1526C13.0244 13.0918 13.057 14.1406 13.4829 15.0777L15.5 19.8567C15.751 20.0673 16.0586 20.0393 16.1147 19.8149L19.9925 4.30379C20.0372 4.12485 19.8751 3.96277 19.6962 4.00751L4.18509 7.88528C3.96065 7.94138 3.93264 8.249 4.14324 8.34473L8.92228 10.517Z', fill, {'fill-rule': 'evenodd', 'clip-rule': 'evenodd'})
        
        this.chat = EQuery.elemt('div', null, 'app-chatbox');
        this.infoBottom = EQuery.elemt('div', [EQuery.elemt('span', null, 'txt'), EQuery.elemt('div', null, 'dot'), EQuery.elemt('div', null, 'dot'), EQuery.elemt('div', null, 'dot')], 'app-chat-info', null, 'display: none');
        this.chatInner = EQuery.elemt('div', [this.chat, this.infoBottom], 'app-chat-inner');
        this.chatInput = EQuery.elemt('textarea');
        this.chatDocBtn = EQuery.elemt('button', [docSvg.domElement], 'app-chat-input-btn', {'aria-label': 'Attact File', 'aria-label-pos': 'top'});
        this.emojiBtn = EQuery.elemt('button', [emojiSvg.domElement], 'app-chat-input-btn', {'aria-label': 'Emojis', 'aria-label-pos': 'top'});
        this.sendBtn = EQuery.elemt('button', [sendSvg.domElement], 'app-chat-sendBtn');
        this.sendBtnOuter = EQuery.elemt('div', [this.sendBtn], 'app-chat-sendBtn-outer');
        this.chatInputContainer = EQuery.elemt('div', [this.emojiBtn, this.chatDocBtn, EQuery.elemt('div', [this.chatInput], 'app-chat-input'), this.sendBtnOuter], 'app-chat-input-container');
        this.chatContainer = EQuery.elemt('div', [this.chatInner, this.chatInputContainer], 'app-chat-container');

        this.moreBtn = EQuery.elemt('div', [moreSvg.domElement], 'tab-header-btn');
        this.userContainer = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('img', null, null, {src: imgSrc})], 'tab-img-container ' + status), EQuery.elemt('div', [EQuery.elemt('span', username)], 'tab-username')], 'user-header');
        this.menuBtn = EQuery.elemt('button', [menuSvg.domElement], 'tab-header-btn');
        this.header = EQuery.elemt('div', [isMobile ? this.menuBtn : EQuery.elemt('span'), this.userContainer, EQuery.elemt('div', [this.moreBtn], null, null, 'margin-left: auto')], 'tab-header');
        this.elt = EQuery.elemt('div', [this.chatContainer], null, null, 'position: relative;top: 0;left: 0;height:100%;width: 100%');

        
        let sendMsg = this.sendMsg = function () {
            if (_this.chatInput.value !== '') {
                let chatId = genId();
                app.data[app.selectedID].msg[id] ? app.data[app.selectedID].msg[id] : app.data[app.selectedID].msg[id] = [];
                app.data[app.selectedID].msg[id].push({id: app.data[app.selectedID].userData.id, txt: _this.chatInput.value, time: new Date().getTime(), pending: true, msgData: chatId});
                app.save();
                
                let src = app.data[app.selectedID].userData.profile_pic, username = app.data[app.selectedID].userData.username, txt = _this.chatInput.value, time = new Date();
                
                let head = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('img', null, null, {src: src}), EQuery.elemt('div', username)], 'app-chat-head-inner')], 'app-chat-head');
                let body = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('pre', txt)])], 'app-chat-body');
                let foot = EQuery.elemt('div', [EQuery.elemt('div', (app.data[app.selectedID].opt.date_short ? days_short : days)[time.getDay()] + /\d\d:\d\d/.exec(time)[0])], 'app-chat-foot');
                let elt_ = EQuery.elemt('div', [head, body, foot], 'app-chat-msg pending', {'data-chat-id': chatId, 'data-send-time': time.getTime()});
                EQuery(_this.chat).addChild([elt_]);
                
                _this.chatInput.value = '';

                fetch(host + 'chatapp/request.php', {
                    method: 'POST',
                    body: new FormData(EQuery.elemt('form', [EQuery.elemt('input', null, null, {name: 'sender_id', value: app.selectedID}), EQuery.elemt('input', null, null, {name: 'receiver_id', value: id}), EQuery.elemt('input', null, null, {name: 'msg', value: txt}), EQuery.elemt('input', null, null, {name: 'chat_id', value: chatId}), EQuery.elemt('input', null, null, {name: 'send', value: 'msg'})], null, {method: 'post'}))
                }).then(response => response.text()).then(data => {
                    console.log(data)
                    if (data.indexOf('success') > -1) {
                        log(logTime(), 'Message sent!');
                    } else {
                        Notice('An error occcured');
                    }
                })
            } else {
                log.warn(logTime(), 'Input empty. Message request will be discarded.');
            }
            EQuery('div.auto-reponse').remove();
        };
        
        EQuery(this.chatInput).on(['keypress', 'keyup', 'change'], function () {
            let lines = this.value.split('\n').length;
            if (1 < lines && lines < 4) {
                EQuery(this).css('height: ' + (24 * lines) + 'px');
                EQuery(_this.chatInputContainer).find('.app-chat-input').css('top: ' + (-24 * lines) + 'px;height: ' + ((24 * lines) + 16) + 'px');
            }
            
            if (this.value == '' && lines == 1) {
                EQuery(this).css('height: 29px');
                EQuery(_this.chatInputContainer).find('.app-chat-input').css('margin-top: 0;height: 45px');
            }
        });

        addShortCuts(app, {
            'Ctrl + ENTER': sendMsg,
            'Ctrl + U': function () {app.display.filePicker.click()}
        });
        
        EQuery(this.moreBtn).click(function () {
            openBottom(app, {
                header: {txt: username, img: imgSrc},
                content: {
                    row: [
                        {'col12': EQuery.elemt('div', null, 'e-padding')},
                        {'col12': EQuery.elemt('div', [
                                EQuery.elemt('button'),
                                EQuery.elemt('button'),
                                EQuery.elemt('button')
                            ], 'e-padding')}
                    ],
                    list: {
                        'Clear chat': '',
                        'Export chat': '',
                        'Set as star friend': '',
                    }
                }
            })
        });
        EQuery(this.sendBtn).click(sendMsg);
        EQuery(this.chatDocBtn).click(function () {app.display.filePicker.click()});
    }

    function LoadingManager(onLoad, onProgress, onError) {
        let _this = this;
        let isLoading = false;
        let itemsLoaded = 0;
        let itemsTotal = 0;
        let urlModifier = undefined;
        const handlers = [];

        this.onStart = undefined;
        this.onLoad = onLoad;
        this.onProgress = onProgress;
        this.onError = onError;
        this.itemStart = function(url) {
            itemsTotal++;
            if (isLoading === false) {
                if (_this.onStart !== undefined) {
                    _this.onStart(url, itemsLoaded, itemsTotal);
                }
            }
            isLoading = true;
        };

        this.itemEnd = function(url) {
            itemsLoaded++;
            if (_this.onProgress !== undefined) {
                _this.onProgress(url, itemsLoaded, itemsTotal);
            }
            if (itemsLoaded === itemsTotal) {
                isLoading = false;
                if (_this.onLoad !== undefined) {
                    _this.onLoad();
                }
            }
        };
        this.itemError = function(url) {
            if (_this.onError !== undefined) {
                _this.onError(url);
            }
        };
        this.resolveURL = function(url) {
            if (urlModifier) {
                return urlModifier(url);
            }
            return url;
        };
        this.setURLModifier = function(transform) {
            urlModifier = transform;
            return this;
        };
        this.addHandler = function(regex, loader) {
            handlers.push(regex, loader);
            return this;
        };
        this.removeHandler = function(regex) {
            const index = handlers.indexOf(regex);
            if (index !== -1) {
                handlers.splice(index, 2);
            }
            return this;
        };
        this.getHandler = function(file) {
            for (let i = 0, l = handlers.length; i < l; i += 2) {
                const regex = handlers[i];
                const loader = handlers[i + 1];
                if (regex.global)
                    regex.lastIndex = 0;
                if (regex.test(file)) {
                    return loader;
                }
            }
            return null;
        };
    }

    function FileLoader(app) {
        this.app = app;
    }

    FileLoader.prototype.loadFile = function(file) {
        let filename = file.name;
        let ext = filename.split('.').pop().toLowerCase();
        let reader = new FileReader();
        reader.onprogress = function(event) {
            let size = '(' + Math.floor(event.total / 1000).format() + ' KB)';
            let progress = Math.floor((event.loaded / event.total) * 100) + '%';
            log(logTime(), ' Loading', filename, size, progress);
        };
        reader.onload = function(event) {
            app.fromFile(event.target.result, filename.split('.')[0], ext);
        };
        reader.readAsDataURL(file);
    };

    FileLoader.prototype.loadFiles = function(files, filesMap) {
        if (files.length > 0) {
            let filesMap = filesMap || this.createFileMap(files);
            let manager = new LoadingManager();
            manager.setURLModifier(function(url) {
                url = url.replace(/^(\.?\/)/, '');
                let file = filesMap[url];
                if (file) {
                    log(logTime(), 'Loading: ', url);
                    return URL.createObjectURL(file);
                }
                return url;
            });
            for (let i = 0; i < files.length; i++) {
                this.loadFile(files[i], manager);
            }
        }
    };

    FileLoader.prototype.createFileMap = function(files) {
        let map = {};
        for (let i = 0; i < files.length; i++) {
            let file = files[i];
            map[file.name] = file;
        }
        return map;
    };

    FileLoader.prototype.loadItemList = function(items) {
        let _this = this;
        this.getFilesFromItemList(items, function(files, filesMap) {
            _this.loadFiles(files, filesMap);
        });
    };

    FileLoader.prototype.getFilesFromItemList = function(items, onDone) {
        let itemsCount = 0;
        let itemsTotal = 0;
        let files = [];
        let filesMap = {};

        function onEntryHandled() {
            itemsCount++;
            if (itemsCount === itemsTotal) {
                onDone(files, filesMap);
            }
        }

        function handleEntry(entry) {
            if (entry.isDirectory) {
                let reader = entry.createReader();
                reader.readEntries(function(entries) {
                    for (let i = 0; i < entries.length; i++) {
                        handleEntry(entries[i]);
                    }
                    onEntryHandled();
                });
            } else if (entry.isFile) {
                entry.file(function(file) {
                    files.push(file);
                    filesMap[entry.fullPath.substr(1)] = file;
                    onEntryHandled();
                });
            }
            itemsTotal++;
        }

        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            if (item.kind === 'file') {
                handleEntry(item.webkitGetAsEntry());
            }
        }
    };

    function App(elt) {
        let Signal = signals.Signal;
        this.chat = false;
        this.version = '1.0.2';
        this.data = {'0': {userData: {status: '', username: '', id: 1, img: undefined, confirm_email: false, confirmSms: true}, msg: {}, contacts: {}, remember: true, logged_in: true, opt: {date_short: true}}};
        log(logTime(), `ChatApp v ${this.version}.\n Start date: ${new Date()}`);
        this.config = new Config(this);
        this.storage = new Storage();
        this.history = new History(this);
        this.display = new Display(this);
        this.loader = new FileLoader(this);
        this.display.wrapper.app = this;
        this.panel = [];
        EQuery(elt).addChild([this.display.wrapper]);
        addEventListeners(this);

        this.signals = {
            editorCleared: new Signal(),
            savingStarted: new Signal(),
            savingFinished: new Signal(),
            historyChanged: new Signal(),
            windowResize: new Signal()
        };
    };

    App.prototype.fromJSON = function(json) {
        this.history.fromJSON(json.history);
        this.scripts = json.scripts;
        
        this.fromSettings();
        console.log(json)
        for (let id in json) {
            if (json[id].logged_in) {
                this.data = json;
                app.selectedID = id;
                if (!json[id].msg || json[id].msg == undefined) {
                    json[id].msg = {};
                }
                if (!json[id].contacts || json[id].contacts == undefined || JSON.stringify(json[id].contacts) == '{}') {
                    json[id].contacts = {pending: [], received: []};
                }
                if (!json[id].opt || json[id].opt == undefined) {
                    json[id].opt = {date_short: true};
                }
                if (json[id].userData.firstname == undefined) {
                    openRegister(app);
                    return;
                }
                if (json[id].userData.username == '') {
                    alert('gdfss')
                    openRegister(app, 4);
                    return;
                }
                if (!json[id].userData.confirm_email || json[id].userData.confirm_email == 'false') {
                    openRegister(app, 5);
                    return;
                }
                if (!json[id].userData.profile_pic || json[id].userData.profile_pic == undefined || json[id].userData.profile_pic == 'undefined') {
                    openRegister(app, 6);
                    return;
                }
                this.beginUI(id);
                this.fetchData();
                return;
            } else {
                openLogin(app);
                return;
            }
        }

        showLogins(app, json);

    };

    App.prototype.fromWSS = function(data) {

    };

    App.prototype.fetchData = function () {
        let id = 0;
        log(logTime(), 'Retriving updates from server...');
        for (let i in app.data) {
            if (app.data[i].logged_in == true) {
                id = i;
                break;
            }
        }
        
        
        
        log(logTime(), 'Updating. app status');
        fetch(host + 'chatapp/request.php', {
            method: 'POST',
            body: new FormData(EQuery.elemt('form', [EQuery.elemt('input', null, null, {name: 'type', value: 'request_userData'}), EQuery.elemt('input', null, null, {name: 'id', value: id,})], null, {method: 'post'}))
        }).then(response=>response.text()).then(data => {
            offline = false;
            if (data[0] == '{') {
                let json = JSON.parse(data.replaceAll('"false"', 'false').replaceAll('"true"', 'true'));
                let entries = ['userData', 'contacts', 'msg'];
                for (let i = 0;i < entries.length;i++) {
                    console.log(json[entries[i]])
                    //app.data[id][entries[i]] = json[entries[i]];
                }
            } else if (data == 'err8279830') {
                Notice('Account is invalid. Terminating...');
                app.clear();
                app.reload();
            } else {
                log.warn(logTime(), 'UserData could not be retrived. It could rather be a result of bad connection or server faliure.');
                log(logTime(), 'Running initial userData'); 
                Notice('Unable to fetch user data, try restarting the app');
                console.log(data)
            }
            offline = false;
            updateDisplay(app.display);
            appendSideList(app);
        }).catch(function () {
            offline = true;
            log.warn(logTime(), 'Cannot communicate with server');
            Notice('You are currently offline');
            updateDisplay(app.display);
            appendSideList(app);
        });
    };

    App.prototype.uploadData = function () {

    };

    App.prototype.beginUI = function () {
        let display = this.display;
        EQuery(display.loginContainer).removeChildren();
        EQuery(display.loginContainer).hide();
        EQuery(display.splitContainer).show();

        EQuery(display.mainSideListBottom).find('.app-sidelist-bottom-inner').removeChildren();
        EQuery(display.mainSideListBottom).find('.app-sidelist-bottom-inner').addChild([userProfile(this)]); 
        
        app.save();
    };

    App.prototype.previewLoadScreen = function() {
        let display = this.display;
        let logo = EQuery.elemt('img', null, 'loadscreen-logo', {src: './assets/logo_img1.png'});
        let logoContainer = EQuery.elemt('div', [logo], 'loadscreen', null, 'position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);');
        let fullscreen = EQuery.elemt('div', [logoContainer], 'app-position-absolute app-fullscreen', {id: 'load-screen'}, 'background-color: #1c1c1c;z-index: 999');
        EQuery(display.container).addChild([fullscreen]);
        setTimeout(function() {
            EQuery('#load-screen').css('animation: fadeout 0.5s ease-out');
            setTimeout(function() {
                EQuery('#load-screen').remove();
            }, 500);
        }, 2000);
        log(logTime(), 'Initializing app...');
    };

    App.prototype.fromSettings = function() {
    
    };
    
    App.prototype.fromFile = function (file, filename, ext) {
        if (this.chat == true) {
            let toolbar = EQuery.elemt('div');
            let canvas = imageDrawer(app, file);
            let fileModal = openModal2(this, {
                header: 'Upload File',
                content: [
                    {m12: {html: EQuery.elemt('div', [EQuery.elemt('div', '', 'app-text'), EQuery.elemt('div', (filename + '.' + ext), 'app-text', null, 'margin-left: auto;font-family: monospace')], null, null, 'display: flex')}},
                    {m12: {html: toolbar}},
                    {m12: {html: canvas.elt}}
                ],
                btns: {
                    'Send': function (panel) {
                        app.sendFile(panel, canvas);
                    },
                    'cancel': function (panel) {
                        panel.close();
                    }
                }
            });
        } else {
            let svg = new EQuery.svg();
            svg.setSize(200, 200);
            svg.setViewBox(0, 0, 32, 32);
            svg.path('M16,30.5C8,30.5,1.5,24,1.5,16S8,1.5,16,1.5S30.5,8,30.5,16S24,30.5,16,30.5z M16,2.5   C8.6,2.5,2.5,8.6,2.5,16c0,7.4,6.1,13.5,13.5,13.5c7.4,0,13.5-6.1,13.5-13.5C29.5,8.6,23.4,2.5,16,2.5z M23.5,15.6c-0.3,0-0.5-0.2-0.5-0.5v-4.2c0-0.5-0.4-0.9-0.9-0.9H10.9c-0.5,0-0.9,0.4-0.9,0.9v1.6    c0,0.3-0.2,0.5-0.5,0.5S9,12.7,9,12.5v-1.6C9,9.8,9.8,9,10.9,9h11.3c1,0,1.9,0.8,1.9,1.9v4.2C24,15.4,23.8,15.6,23.5,15.6z M22.1,24H10.9c-1,0-1.9-0.8-1.9-1.9v-7.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v7.5c0,0.5,0.4,0.9,0.9,0.9    h11.3c0.5,0,0.9-0.4,0.9-0.9v-1.5c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v1.5C24,23.2,23.2,24,22.1,24z', '#aBABAB');
            svg.path('M23.1,24.5H11.9c-0.8,0-1.4-0.6-1.4-1.4V14v-2.2c0-0.8,0.6-1.4,1.4-1.4h11.3c0.8,0,1.4,0.6,1.4,1.4v11.3    C24.5,23.9,23.9,24.5,23.1,24.5z', '#ff2a68');
            svg.path('M23.3,18.6', 'none', {'stroke': '#000000', 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-miterlimit': 10});
            openModal2(this, {
                content: [
                    {'m12': {html: EQuery.elemt('div', [svg.domElement], null, null, 'text-align: center')}},
                    {'m12': {text: new Text('Looks like you loaded a file in while not in a chat. It will be discard.')}}
                ],
                btns: {
                    'Okay': function (panel) {
                        panel.close();
                    }
                }
            });
        }
    }

    App.prototype.openChat = function(id) {
        let msg = this.data[app.selectedID].msg[id];
        let _this = this;
        this.chat = true;
        let overlay = EQuery(this.display.mainSplitChat).find('.Overlay');
        EQuery(overlay).css('display: none');
        EQuery(this.display.mainSplitChat).find('div:not(.app-container)').hide();
        EQuery(this.display.mainSplitChat).find('div:first-child').show();
        EQuery(this.display.chatContainer).removeChildren();
        EQuery(this.display.chatContainer).addClass('active');

        let elt = new chatElt(app,id);
        EQuery(this.display.chatContainer).addChild([elt.elt]);

        EQuery(this.display.tabList).removeChildren();
        EQuery(this.display.tabList).addChild([elt.header]);
        if (isMobile) {
            EQuery(this.display.mainSplitChat).addClass('chat-overlay');
            EQuery(elt.menuBtn).click(function() {
                EQuery(_this.display.mainSplitChat).toggleClass('chat-overlay');
                EQuery(overlay).toggleShow();
                _this.chat = _this.chat == true ? false : true;
            });
            EQuery(overlay).click(function() {
                EQuery(_this.display.mainSplitChat).toggleClass('chat-overlay');
                EQuery(overlay).toggleShow();
                _this.chat = _this.chat == true ? false : true;
            });
        }
        
        if (msg) {
            for (let i = 0;i < msg.length;i++) {
                let txt = msg[i].txt, username = msg[i].id == app.data[app.selectedID].userData.id ? app.data[app.selectedID].userData.username : app.data.contacts[id].username, time = new Date(msg[i].time), src =  msg[i].id == app.data[app.selectedID].userData.id ? app.data[app.selectedID].userData.profile_pic : app.data.contacts[id].profile_pic;
                let head = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('img', null, null, {src: src}), EQuery.elemt('div', username)], 'app-chat-head-inner')], 'app-chat-head');
                let body = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('pre', txt)])], 'app-chat-body');
                let foot = EQuery.elemt('div', [EQuery.elemt('div', (app.data.opt.date_short ? days_short : days)[time.getDay()] + ' ' + /\d\d:\d\d/.exec(time)[0])], 'app-chat-foot');
                let elt_ = EQuery.elemt('div', [head, body, foot], 'app-chat-msg' + (msg[i].pending ? ' pending' : ''), {'data-chat-id': msg[i].msgData, 'data-send-time': msg[i].time});
                EQuery(elt.chat).addChild([elt_]);
            }
        } else {
            let autoresponse = new autoResponse(app, {
                header: 'There is nothing here...',
                content: [{m12: {html: EQuery.elemt('div', [EQuery.elemt('div', 'This is your first chat with  ' + app.data[app.selectedID].contacts[id].username)])}}],
                btn: [{msg: 'Say Hi “🖐“', func: function () {
                    elt.chatInput.value = 'Hi 🖐';
                    elt.sendMsg();
                }}]
            });
            EQuery(elt.chat).addChild([autoresponse.elt]);
        }
    };

    App.prototype.addFriend = function (data, panel) {
        let display = this.display;
        EQuery(panel.modalContent).find('input').val('');
        let parent = panel.html;
        EQuery(parent).removeChildren()
        for (let i = 0;i < data.length;i++) {
            let username = data[i].username, id = data[i].id, status = data[i].status || 'offline', imgUrl = data[i].profile_pic, bio = data[i].bio;
            let content = EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('img', null, null, {src: imgUrl})], 'img-container ' + status,)], null, null, 'width: 45px;height: 100%;padding: 2px;'), EQuery.elemt('div', [EQuery.elemt('div', [EQuery.elemt('h2', username)], null, null, 'width: calc(100% - 45px);height: 60%;padding: 3px;display: flex;align-items: center;'), EQuery.elemt('div', [EQuery.elemt('span', bio, null, null, 'font-style: italic;opacity: 0.4')], null, null, 'width: calc(100% - 45px);height: 40%;padding: 3px;display: flex;align-items: center;')], null, null, 'height: 100%;width: 100%')], 'app-sidelist-content');
            let item = EQuery.elemt('div', [content], 'app-sidelist-item');
            let container = EQuery.elemt('div', [item], 'e-box e-shadow', {'data-user-id': data[0].id, selected: true}, 'background-color: #333;border-radius: 12px;margin-bottom: 6px');
            EQuery(parent).addChild([container]);

            EQuery(container).click(function () {
                if (id == app.selectedID) {
                    Notice('You cannot add yourself as friend');
                } else {
                    fetch(host + 'chatapp/request.php', {
                        method: 'POST',
                        body: new FormData(EQuery.elemt('form', [EQuery.elemt('input', null, null, {name: 'send', value: 'friendRequest'}), EQuery.elemt('input', null, null, {name: 'id', value: app.selectedID}), EQuery.elemt('input', null, null, {name: 'friend_id', value: id})], null, {method: 'post'}))
                    }).then(response=>response.text()).then(data => {
                        if (data == 'success') {
                            Notice('Friend request sent');
                            app.data[app.selectedID].contacts.pending.push({id: id, username: username, status: status, bio: bio, profile_pic: imgUrl})
                            app.save();
                        } else if (data == 'err02414') {
                            Notice('Friend request already sent!');
                        }else {
                            Notice('An error occurred during request');
                        }
                        offline = false;
                        updateDisplay(display);
                    }).catch(function (e) {console.log(e)
                        offline = true;
                        updateDisplay(display);
                        Notice('Check your internet connection');
                    });
                }
            });
        }
    };

    App.prototype.receiveFriend = function (id) {
        let spinner = EQuery.elemt('div', null, 'app-spinner');
        EQuery(spinner).spinner();
        let modal = openModal(app, { content: [{ 'm2': { html: spinner }}] });
        fetch(host + 'chatapp/request.php', {
            method: 'POST',
            body: new FormData(EQuery.elemt('form', [EQuery.elemt('input', null, null, {name: 'friend_id', value: id}), EQuery.elemt('input', null, null, {name: 'id', value: app.selectedID}), EQuery.elemt('input', null, null, {name: 'type', value: 'accept_friend_request'})], null, {method: 'post'}))
        }).then(response => response.text()).then(data => {
            console.log(data);
            if (data == 'success') {
                Notice('Friend request received');
            } else {
                Notice('An error occoured');
            }
            modal.close();
        });
    };

    App.prototype.rejectFriend = function (id) {};

    App.prototype.switchTo = function() {};

    App.prototype.reload = function () {app.save();setTimeout(function () {if (isMobile) window.location = 'index.html';else window.location.reload()}, 2000)};

    App.prototype.save = function() {
        let timeout;
        clearTimeout(timeout);
        app.signals.savingStarted.dispatch();
        timeout = setTimeout(function() {
            app.storage.set(app.data);
            app.signals.savingFinished.dispatch();
        }, 100);
    };

    App.prototype.clear = function() {
        app.storage.clear();
    };

    const app = (window.app = new App('#app-mount'));
    app.storage.init(function() {
        let spinner = EQuery.elemt('div', null, 'app-spinner');
        EQuery(spinner).spinner();
        app.previewLoadScreen();
        // let modal = openModal(app, { content: [{ 'm2': { html: spinner }, 'm10': { text: new Text('Fetching backups from indexedDB...') } }] });
        getCountryNumbers();
        log(logTime(), 'Reading data from indexedDB');
        app.storage.get(function(state) {
            if (state !== undefined) {
                app.fromJSON(state);
            } else {
                openLogin(app);
                app.data = null;
                log(logTime(), 'No data found');
            }
            let millis = performance.now() - start;
            log(logTime(), 'Execution complete. Execution time: ' + (millis).toFixed(2) + 'ms.');
            (Math.floor(millis / 1000) > 5 ? log.warn(logTime(), 'Can\'t keep up. Execution took more than 5 seconds!') : {});
            // modal.close();
        });
    });

    console.log('%cDon\'t paste any code here!!', 'color: #f00;font-weight: bold;font-size: 35px');

    EQuery(window).on(['resize', 'load'], onWindowResize, false);
    onWindowResize();

    function onWindowResize() {
        app.signals.windowResize.dispatch();
        updateDisplay(app.display);
    }

    // ServiceWorker
    if ('serviceWorker' in navigator) {
        try {
            navigator.serviceWorker.register(host + 'chatapp/sw.js');
        } catch (error) {
            log.error(logTime(), error);
        }
    }
})(this);
