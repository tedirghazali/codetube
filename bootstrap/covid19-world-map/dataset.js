// COVID-19 Data
var continentData = [
{"code":"AF","name":"Africa"},
{"code":"AN","name":"Antarctica"},
{"code":"AS","name":"Asia"},
{"code":"EU","name":"Europe"},
{"code":"NA","name":"North America"},
{"code":"OC","name":"Oceania"},
{"code":"SA","name":"South America"}
];

var countryData = [
{"code":"AD","name":"Andorra","continent":"EU","cases":"370","deaths":"8","recoveries":"10","populations":"86165"},
{"code":"AE","name":"United Arab Emirates","continent":"AS","cases":"664","deaths":"6","recoveries":"61","populations":"7890924"},
{"code":"AF","name":"Afghanistan","continent":"AS","cases":"174","deaths":"4","recoveries":"2","populations":"35320445"},
{"code":"AG","name":"Antigua and Barbuda","continent":"NA","cases":"7","deaths":"0","recoveries":"0","populations":"89612"},
{"code":"AI","name":"Anguilla","continent":"NA","cases":"2","deaths":"0","recoveries":"0","populations":"0"},
{"code":"AL","name":"Albania","continent":"EU","cases":"243","deaths":"15","recoveries":"67","populations":"3215988"},
{"code":"AM","name":"Armenia","continent":"AS","cases":"532","deaths":"3","recoveries":"30","populations":"3100236"},
{"code":"AO","name":"Angola","continent":"AF","cases":"7","deaths":"2","recoveries":"0","populations":"19618432"},
{"code":"AQ","name":"Antarctica","continent":"AN","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"AR","name":"Argentina","continent":"SA","cases":"966","deaths":"26","recoveries":"240","populations":"40764561"},
{"code":"AS","name":"American Samoa","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"AT","name":"Austria","continent":"EU","cases":"10088","deaths":"128","recoveries":"1095","populations":"8419000"},
{"code":"AU","name":"Australia","continent":"OC","cases":"4763","deaths":"20","recoveries":"337","populations":"22620600"},
{"code":"AW","name":"Aruba","continent":"NA","cases":"55","deaths":"0","recoveries":"1","populations":"0"},
{"code":"AX","name":"Åland","continent":"EU","cases":"5","deaths":"0","recoveries":"0","populations":"0"},
{"code":"AZ","name":"Azerbaijan","continent":"AS","cases":"298","deaths":"5","recoveries":"26","populations":"9168000"},
{"code":"BA","name":"Bosnia and Herzegovina","continent":"EU","cases":"420","deaths":"13","recoveries":"17","populations":"3752228"},
{"code":"BB","name":"Barbados","continent":"NA","cases":"34","deaths":"0","recoveries":"0","populations":"273925"},
{"code":"BD","name":"Bangladesh","continent":"AS","cases":"51","deaths":"5","recoveries":"25","populations":"150493658"},
{"code":"BE","name":"Belgium","continent":"EU","cases":"12775","deaths":"705","recoveries":"1696","populations":"11008000"},
{"code":"BF","name":"Burkina Faso","continent":"AF","cases":"261","deaths":"14","recoveries":"32","populations":"16967845"},
{"code":"BG","name":"Bulgaria","continent":"EU","cases":"399","deaths":"8","recoveries":"17","populations":"7476000"},
{"code":"BH","name":"Bahrain","continent":"AS","cases":"567","deaths":"4","recoveries":"295","populations":"1323535"},
{"code":"BI","name":"Burundi","continent":"AF","cases":"2","deaths":"0","recoveries":"0","populations":"8575172"},
{"code":"BJ","name":"Benin","continent":"AF","cases":"9","deaths":"0","recoveries":"1","populations":"9099922"},
{"code":"BL","name":"Saint Barthélemy","continent":"NA","cases":"6","deaths":"0","recoveries":"1","populations":"0"},
{"code":"BM","name":"Bermuda","continent":"NA","cases":"27","deaths":"0","recoveries":"10","populations":"0"},
{"code":"BN","name":"Brunei","continent":"AS","cases":"129","deaths":"1","recoveries":"45","populations":"405938"},
{"code":"BO","name":"Bolivia","continent":"SA","cases":"107","deaths":"6","recoveries":"0","populations":"10088108"},
{"code":"BQ","name":"Bonaire","continent":"NA","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"BR","name":"Brazil","continent":"SA","cases":"2201","deaths":"46","recoveries":"2","populations":"196655014"},
{"code":"BS","name":"Bahamas","continent":"NA","cases":"14","deaths":"0","recoveries":"0","populations":"347176"},
{"code":"BT","name":"Bhutan","continent":"AS","cases":"4","deaths":"0","recoveries":"0","populations":"738267"},
{"code":"BV","name":"Bouvet Island","continent":"AN","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"BW","name":"Botswana","continent":"AF","cases":"4","deaths":"1","recoveries":"0","populations":"2030738"},
{"code":"BY","name":"Belarus","continent":"EU","cases":"152","deaths":"1","recoveries":"47","populations":"9473000"},
{"code":"BZ","name":"Belize","continent":"NA","cases":"3","deaths":"0","recoveries":"0","populations":"356600"},
{"code":"CA","name":"Canada","continent":"NA","cases":"8464","deaths":"95","recoveries":"1171","populations":"34482779"},
{"code":"CC","name":"Cocos [Keeling] Islands","continent":"AS","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"CD","name":"Democratic Republic of the Congo","continent":"AF","cases":"98","deaths":"8","recoveries":"2","populations":"67757577"},
{"code":"CF","name":"Central African Republic","continent":"AF","cases":"3","deaths":"0","recoveries":"0","populations":"4486837"},
{"code":"CG","name":"Republic of the Congo","continent":"AF","cases":"19","deaths":"0","recoveries":"0","populations":"4139748"},
{"code":"CH","name":"Switzerland","continent":"EU","cases":"16597","deaths":"432","recoveries":"1823","populations":"0"},
{"code":"CI","name":"Ivory Coast","continent":"AF","cases":"168","deaths":"1","recoveries":"6","populations":"20152894"},
{"code":"CK","name":"Cook Islands","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"CL","name":"Chile","continent":"SA","cases":"2449","deaths":"8","recoveries":"156","populations":"17269525"},
{"code":"CM","name":"Cameroon","continent":"AF","cases":"193","deaths":"6","recoveries":"5","populations":"20030362"},
{"code":"CN","name":"China","continent":"AS","cases":"81518","deaths":"3305","recoveries":"76052","populations":"1344130000"},
{"code":"CO","name":"Colombia","continent":"SA","cases":"906","deaths":"16","recoveries":"31","populations":"46927125"},
{"code":"CR","name":"Costa Rica","continent":"NA","cases":"347","deaths":"2","recoveries":"4","populations":"4726575"},
{"code":"CU","name":"Cuba","continent":"NA","cases":"186","deaths":"6","recoveries":"8","populations":"11253665"},
{"code":"CV","name":"Cape Verde","continent":"AF","cases":"6","deaths":"1","recoveries":"0","populations":"500585"},
{"code":"CW","name":"Curaçao","continent":"NA","cases":"11","deaths":"1","recoveries":"2","populations":"0"},
{"code":"CX","name":"Christmas Island","continent":"AS","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"CY","name":"Cyprus","continent":"EU","cases":"225","deaths":"6","recoveries":"18","populations":"1116564"},
{"code":"CZ","name":"Czech Republic","continent":"EU","cases":"3257","deaths":"31","recoveries":"45","populations":"10546000"},
{"code":"DE","name":"Germany","continent":"EU","cases":"71690","deaths":"775","recoveries":"7635","populations":"81726000"},
{"code":"DJ","name":"Djibouti","continent":"AF","cases":"30","deaths":"0","recoveries":"0","populations":"905564"},
{"code":"DK","name":"Denmark","continent":"EU","cases":"2815","deaths":"90","recoveries":"0","populations":"5574000"},
{"code":"DM","name":"Dominica","continent":"NA","cases":"12","deaths":"0","recoveries":"0","populations":"67675"},
{"code":"DO","name":"Dominican Republic","continent":"NA","cases":"1019","deaths":"51","recoveries":"5","populations":"0"},
{"code":"DZ","name":"Algeria","continent":"AF","cases":"716","deaths":"44","recoveries":"46","populations":"0"},
{"code":"EC","name":"Ecuador","continent":"SA","cases":"1966","deaths":"62","recoveries":"3","populations":"14666055"},
{"code":"EE","name":"Estonia","continent":"EU","cases":"745","deaths":"4","recoveries":"26","populations":"1340000"},
{"code":"EG","name":"Egypt","continent":"AF","cases":"710","deaths":"46","recoveries":"157","populations":"82536770"},
{"code":"EH","name":"Western Sahara","continent":"AF","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"ER","name":"Eritrea","continent":"AF","cases":"15","deaths":"0","recoveries":"0","populations":"5415280"},
{"code":"ES","name":"Spain","continent":"EU","cases":"95923","deaths":"8464","recoveries":"19259","populations":"46235000"},
{"code":"ET","name":"Ethiopia","continent":"AF","cases":"26","deaths":"0","recoveries":"2","populations":"84734262"},
{"code":"FI","name":"Finland","continent":"EU","cases":"1379","deaths":"17","recoveries":"10","populations":"5387000"},
{"code":"FJ","name":"Fiji","continent":"OC","cases":"5","deaths":"0","recoveries":"0","populations":"868406"},
{"code":"FK","name":"Falkland Islands","continent":"SA","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"FM","name":"Micronesia","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"FO","name":"Faroe Islands","continent":"EU","cases":"169","deaths":"0","recoveries":"74","populations":"0"},
{"code":"FR","name":"France","continent":"EU","cases":"51487","deaths":"3516","recoveries":"7882","populations":"65436552"},
{"code":"GA","name":"Gabon","continent":"AF","cases":"16","deaths":"1","recoveries":"0","populations":"1534262"},
{"code":"GB","name":"United Kingdom","continent":"EU","cases":"25150","deaths":"1808","recoveries":"135","populations":"62641000"},
{"code":"GD","name":"Grenada","continent":"NA","cases":"9","deaths":"0","recoveries":"0","populations":"104890"},
{"code":"GE","name":"Georgia","continent":"AS","cases":"110","deaths":"0","recoveries":"21","populations":"4486000"},
{"code":"GF","name":"French Guiana","continent":"SA","cases":"43","deaths":"0","recoveries":"0","populations":"0"},
{"code":"GG","name":"Guernsey","continent":"EU","cases":"78","deaths":"1","recoveries":"0","populations":"0"},
{"code":"GH","name":"Ghana","continent":"AF","cases":"161","deaths":"5","recoveries":"3","populations":"24965816"},
{"code":"GI","name":"Gibraltar","continent":"EU","cases":"69","deaths":"0","recoveries":"14","populations":"0"},
{"code":"GL","name":"Greenland","continent":"NA","cases":"10","deaths":"0","recoveries":"2","populations":"0"},
{"code":"GM","name":"Gambia","continent":"AF","cases":"4","deaths":"1","recoveries":"0","populations":"1776103"},
{"code":"GN","name":"Guinea","continent":"AF","cases":"22","deaths":"0","recoveries":"0","populations":"10221808"},
{"code":"GP","name":"Guadeloupe","continent":"NA","cases":"114","deaths":"5","recoveries":"22","populations":"0"},
{"code":"GQ","name":"Equatorial Guinea","continent":"AF","cases":"12","deaths":"0","recoveries":"0","populations":"720213"},
{"code":"GR","name":"Greece","continent":"EU","cases":"1314","deaths":"49","recoveries":"52","populations":"11304000"},
{"code":"GS","name":"South Georgia and the South Sandwich Islands","continent":"AN","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"GT","name":"Guatemala","continent":"NA","cases":"38","deaths":"1","recoveries":"0","populations":"14757316"},
{"code":"GU","name":"Guam","continent":"OC","cases":"69","deaths":"2","recoveries":"7","populations":"0"},
{"code":"GW","name":"Guinea-Bissau","continent":"AF","cases":"8","deaths":"0","recoveries":"0","populations":"1547061"},
{"code":"GY","name":"Guyana","continent":"SA","cases":"12","deaths":"1","recoveries":"0","populations":"756040"},
{"code":"HK","name":"Hong Kong","continent":"AS","cases":"714","deaths":"4","recoveries":"128","populations":"0"},
{"code":"HM","name":"Heard Island and McDonald Islands","continent":"AN","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"HN","name":"Honduras","continent":"NA","cases":"141","deaths":"7","recoveries":"3","populations":"7754687"},
{"code":"HR","name":"Croatia","continent":"EU","cases":"867","deaths":"6","recoveries":"67","populations":"0"},
{"code":"HT","name":"Haiti","continent":"NA","cases":"15","deaths":"0","recoveries":"0","populations":"10123787"},
{"code":"HU","name":"Hungary","continent":"EU","cases":"492","deaths":"16","recoveries":"37","populations":"9971000"},
{"code":"ID","name":"Indonesia","continent":"AS","cases":"1528","deaths":"136","recoveries":"81","populations":"242325638"},
{"code":"IE","name":"Ireland","continent":"EU","cases":"2910","deaths":"54","recoveries":"5","populations":"4487000"},
{"code":"IL","name":"Israel","continent":"AS","cases":"4831","deaths":"17","recoveries":"163","populations":"7765700"},
{"code":"IM","name":"Isle of Man","continent":"EU","cases":"60","deaths":"0","recoveries":"0","populations":"0"},
{"code":"IN","name":"India","continent":"AS","cases":"1397","deaths":"35","recoveries":"124","populations":"1241491960"},
{"code":"IO","name":"British Indian Ocean Territory","continent":"AS","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"IQ","name":"Iraq","continent":"AS","cases":"630","deaths":"46","recoveries":"152","populations":"32961959"},
{"code":"IR","name":"Iran","continent":"AS","cases":"44606","deaths":"2898","recoveries":"14656","populations":"74798599"},
{"code":"IS","name":"Iceland","continent":"EU","cases":"1135","deaths":"2","recoveries":"198","populations":"319000"},
{"code":"IT","name":"Italy","continent":"EU","cases":"105792","deaths":"12428","recoveries":"15729","populations":"60770000"},
{"code":"JE","name":"Jersey","continent":"EU","cases":"81","deaths":"2","recoveries":"0","populations":"0"},
{"code":"JM","name":"Jamaica","continent":"NA","cases":"36","deaths":"1","recoveries":"2","populations":"2709300"},
{"code":"JO","name":"Jordan","continent":"AS","cases":"268","deaths":"5","recoveries":"26","populations":"6181000"},
{"code":"JP","name":"Japan","continent":"AS","cases":"1953","deaths":"56","recoveries":"408","populations":"127817277"},
{"code":"KE","name":"Kenya","continent":"AF","cases":"59","deaths":"1","recoveries":"1","populations":"41609728"},
{"code":"KG","name":"Kyrgyzstan","continent":"AS","cases":"107","deaths":"0","recoveries":"3","populations":"5507000"},
{"code":"KH","name":"Cambodia","continent":"AS","cases":"109","deaths":"0","recoveries":"23","populations":"0"},
{"code":"KI","name":"Kiribati","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"101093"},
{"code":"KM","name":"Comoros","continent":"AF","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"KN","name":"Saint Kitts and Nevis","continent":"NA","cases":"8","deaths":"0","recoveries":"0","populations":"0"},
{"code":"KP","name":"North Korea","continent":"AS","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"KR","name":"South Korea","continent":"AS","cases":"9786","deaths":"162","recoveries":"5408","populations":"0"},
{"code":"KW","name":"Kuwait","continent":"AS","cases":"289","deaths":"0","recoveries":"73","populations":"2818042"},
{"code":"KY","name":"Cayman Islands","continent":"NA","cases":"12","deaths":"1","recoveries":"0","populations":"0"},
{"code":"KZ","name":"Kazakhstan","continent":"AS","cases":"336","deaths":"2","recoveries":"22","populations":"16558459"},
{"code":"LA","name":"Laos","continent":"AS","cases":"9","deaths":"0","recoveries":"0","populations":"6288037"},
{"code":"LB","name":"Lebanon","continent":"AS","cases":"463","deaths":"12","recoveries":"37","populations":"4259405"},
{"code":"LC","name":"Saint Lucia","continent":"NA","cases":"13","deaths":"0","recoveries":"0","populations":"176000"},
{"code":"LI","name":"Liechtenstein","continent":"EU","cases":"68","deaths":"0","recoveries":"0","populations":"36304"},
{"code":"LK","name":"Sri Lanka","continent":"AS","cases":"142","deaths":"2","recoveries":"17","populations":"20869000"},
{"code":"LR","name":"Liberia","continent":"AF","cases":"3","deaths":"0","recoveries":"0","populations":"4128572"},
{"code":"LS","name":"Lesotho","continent":"AF","cases":"0","deaths":"0","recoveries":"0","populations":"2193843"},
{"code":"LT","name":"Lithuania","continent":"EU","cases":"533","deaths":"7","recoveries":"7","populations":"3203000"},
{"code":"LU","name":"Luxembourg","continent":"EU","cases":"1988","deaths":"22","recoveries":"40","populations":"517000"},
{"code":"LV","name":"Latvia","continent":"EU","cases":"398","deaths":"0","recoveries":"1","populations":"2220000"},
{"code":"LY","name":"Libya","continent":"AF","cases":"1","deaths":"0","recoveries":"0","populations":"6422772"},
{"code":"MA","name":"Morocco","continent":"AF","cases":"617","deaths":"36","recoveries":"24","populations":"32272974"},
{"code":"MC","name":"Monaco","continent":"EU","cases":"52","deaths":"0","recoveries":"1","populations":"35427"},
{"code":"MD","name":"Moldova","continent":"EU","cases":"328","deaths":"3","recoveries":"15","populations":"3559000"},
{"code":"ME","name":"Montenegro","continent":"EU","cases":"105","deaths":"1","recoveries":"0","populations":"632261"},
{"code":"MF","name":"Saint Martin","continent":"NA","cases":"18","deaths":"1","recoveries":"2","populations":"0"},
{"code":"MG","name":"Madagascar","continent":"AF","cases":"57","deaths":"0","recoveries":"0","populations":"21315135"},
{"code":"MH","name":"Marshall Islands","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"54816"},
{"code":"MK","name":"North Macedonia","continent":"EU","cases":"329","deaths":"9","recoveries":"12","populations":"2063893"},
{"code":"ML","name":"Mali","continent":"AF","cases":"28","deaths":"2","recoveries":"0","populations":"15839538"},
{"code":"MM","name":"Myanmar [Burma]","continent":"AS","cases":"14","deaths":"1","recoveries":"0","populations":"0"},
{"code":"MN","name":"Mongolia","continent":"AS","cases":"12","deaths":"0","recoveries":"0","populations":"2800114"},
{"code":"MO","name":"Macao","continent":"AS","cases":"41","deaths":"0","recoveries":"10","populations":"0"},
{"code":"MP","name":"Northern Mariana Islands","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"MQ","name":"Martinique","continent":"NA","cases":"119","deaths":"2","recoveries":"27","populations":"0"},
{"code":"MR","name":"Mauritania","continent":"AF","cases":"6","deaths":"1","recoveries":"2","populations":"3541540"},
{"code":"MS","name":"Montserrat","continent":"NA","cases":"5","deaths":"0","recoveries":"0","populations":"0"},
{"code":"MT","name":"Malta","continent":"EU","cases":"169","deaths":"0","recoveries":"2","populations":"419000"},
{"code":"MU","name":"Mauritius","continent":"AF","cases":"143","deaths":"5","recoveries":"0","populations":"1286051"},
{"code":"MV","name":"Maldives","continent":"AS","cases":"18","deaths":"0","recoveries":"13","populations":"320081"},
{"code":"MW","name":"Malawi","continent":"AF","cases":"0","deaths":"0","recoveries":"0","populations":"15380888"},
{"code":"MX","name":"Mexico","continent":"NA","cases":"1094","deaths":"28","recoveries":"35","populations":"114793341"},
{"code":"MY","name":"Malaysia","continent":"AS","cases":"2766","deaths":"43","recoveries":"537","populations":"28859154"},
{"code":"MZ","name":"Mozambique","continent":"AF","cases":"8","deaths":"0","recoveries":"0","populations":"23929708"},
{"code":"NA","name":"Namibia","continent":"AF","cases":"11","deaths":"0","recoveries":"2","populations":"2324004"},
{"code":"NC","name":"New Caledonia","continent":"OC","cases":"16","deaths":"0","recoveries":"0","populations":"0"},
{"code":"NE","name":"Niger","continent":"AF","cases":"27","deaths":"3","recoveries":"0","populations":"16068994"},
{"code":"NF","name":"Norfolk Island","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"NG","name":"Nigeria","continent":"AF","cases":"139","deaths":"2","recoveries":"9","populations":"162470737"},
{"code":"NI","name":"Nicaragua","continent":"NA","cases":"4","deaths":"1","recoveries":"0","populations":"5869859"},
{"code":"NL","name":"Netherlands","continent":"EU","cases":"12595","deaths":"1039","recoveries":"0","populations":"16696000"},
{"code":"NO","name":"Norway","continent":"EU","cases":"4599","deaths":"36","recoveries":"0","populations":"4952000"},
{"code":"NP","name":"Nepal","continent":"AS","cases":"5","deaths":"0","recoveries":"1","populations":"30485798"},
{"code":"NR","name":"Nauru","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"NU","name":"Niue","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"NZ","name":"New Zealand","continent":"OC","cases":"600","deaths":"1","recoveries":"74","populations":"4405200"},
{"code":"OM","name":"Oman","continent":"AS","cases":"192","deaths":"0","recoveries":"34","populations":"2846145"},
{"code":"PA","name":"Panama","continent":"NA","cases":"1181","deaths":"30","recoveries":"9","populations":"3571185"},
{"code":"PE","name":"Peru","continent":"SA","cases":"1065","deaths":"30","recoveries":"394","populations":"29399817"},
{"code":"PF","name":"French Polynesia","continent":"OC","cases":"36","deaths":"0","recoveries":"1","populations":"0"},
{"code":"PG","name":"Papua New Guinea","continent":"OC","cases":"1","deaths":"0","recoveries":"0","populations":"7013829"},
{"code":"PH","name":"Philippines","continent":"AS","cases":"2084","deaths":"88","recoveries":"49","populations":"94852030"},
{"code":"PK","name":"Pakistan","continent":"AS","cases":"1914","deaths":"26","recoveries":"58","populations":"176745364"},
{"code":"PL","name":"Poland","continent":"EU","cases":"2215","deaths":"32","recoveries":"35","populations":"38216000"},
{"code":"PM","name":"Saint Pierre and Miquelon","continent":"NA","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"PN","name":"Pitcairn Islands","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"PR","name":"Puerto Rico","continent":"NA","cases":"239","deaths":"8","recoveries":"0","populations":"0"},
{"code":"PS","name":"Palestine","continent":"AS","cases":"117","deaths":"1","recoveries":"18","populations":"4019433"},
{"code":"PT","name":"Portugal","continent":"EU","cases":"7443","deaths":"160","recoveries":"43","populations":"10637000"},
{"code":"PW","name":"Palau","continent":"OC","cases":"5717","deaths":"201","recoveries":"127","populations":"20609"},
{"code":"PY","name":"Paraguay","continent":"SA","cases":"65","deaths":"3","recoveries":"1","populations":"6568290"},
{"code":"QA","name":"Qatar","continent":"AS","cases":"693","deaths":"1","recoveries":"51","populations":"1870041"},
{"code":"RE","name":"Réunion","continent":"AF","cases":"247","deaths":"0","recoveries":"6","populations":"0"},
{"code":"RO","name":"Romania","continent":"EU","cases":"2245","deaths":"82","recoveries":"220","populations":"21390000"},
{"code":"RS","name":"Serbia","continent":"EU","cases":"900","deaths":"23","recoveries":"42","populations":"0"},
{"code":"RU","name":"Russia","continent":"EU","cases":"2337","deaths":"17","recoveries":"121","populations":"141930000"},
{"code":"RW","name":"Rwanda","continent":"AF","cases":"75","deaths":"0","recoveries":"0","populations":"10942950"},
{"code":"SA","name":"Saudi Arabia","continent":"AS","cases":"1563","deaths":"10","recoveries":"165","populations":"0"},
{"code":"SB","name":"Solomon Islands","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"552267"},
{"code":"SC","name":"Seychelles","continent":"AF","cases":"10","deaths":"0","recoveries":"0","populations":"86000"},
{"code":"SD","name":"Sudan","continent":"AF","cases":"7","deaths":"2","recoveries":"1","populations":"34318385"},
{"code":"SE","name":"Sweden","continent":"EU","cases":"4435","deaths":"180","recoveries":"16","populations":"9453000"},
{"code":"SG","name":"Singapore","continent":"AS","cases":"926","deaths":"3","recoveries":"240","populations":"5183700"},
{"code":"SH","name":"Saint Helena","continent":"AF","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"SI","name":"Slovenia","continent":"EU","cases":"802","deaths":"15","recoveries":"10","populations":"2052000"},
{"code":"SJ","name":"Svalbard and Jan Mayen","continent":"EU","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"SK","name":"Slovakia","continent":"EU","cases":"363","deaths":"1","recoveries":"7","populations":"5440000"},
{"code":"SL","name":"Sierra Leone","continent":"AF","cases":"1","deaths":"0","recoveries":"0","populations":"0"},
{"code":"SM","name":"San Marino","continent":"EU","cases":"236","deaths":"26","recoveries":"13","populations":"31735"},
{"code":"SN","name":"Senegal","continent":"AF","cases":"175","deaths":"0","recoveries":"40","populations":"12767556"},
{"code":"SO","name":"Somalia","continent":"AF","cases":"3","deaths":"0","recoveries":"0","populations":"9556873"},
{"code":"SR","name":"Suriname","continent":"SA","cases":"9","deaths":"0","recoveries":"0","populations":"529419"},
{"code":"SS","name":"South Sudan","continent":"AF","cases":"0","deaths":"0","recoveries":"0","populations":"10314021"},
{"code":"ST","name":"São Tomé and Príncipe","continent":"AF","cases":"0","deaths":"0","recoveries":"0","populations":"168526"},
{"code":"SV","name":"El Salvador","continent":"NA","cases":"32","deaths":"0","recoveries":"0","populations":"6227491"},
{"code":"SX","name":"Sint Maarten","continent":"NA","cases":"6","deaths":"0","recoveries":"1","populations":"0"},
{"code":"SY","name":"Syria","continent":"AS","cases":"10","deaths":"0","recoveries":"2","populations":"20820311"},
{"code":"SZ","name":"Swaziland","continent":"AF","cases":"9","deaths":"0","recoveries":"0","populations":"1067773"},
{"code":"TC","name":"Turks and Caicos Islands","continent":"NA","cases":"5","deaths":"0","recoveries":"0","populations":"0"},
{"code":"TD","name":"Chad","continent":"AF","cases":"7","deaths":"0","recoveries":"0","populations":"11525496"},
{"code":"TF","name":"French Southern Territories","continent":"AN","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"TG","name":"Togo","continent":"AF","cases":"34","deaths":"1","recoveries":"10","populations":"6154813"},
{"code":"TH","name":"Thailand","continent":"AS","cases":"1651","deaths":"10","recoveries":"342","populations":"69518555"},
{"code":"TJ","name":"Tajikistan","continent":"AS","cases":"0","deaths":"0","recoveries":"0","populations":"6976958"},
{"code":"TK","name":"Tokelau","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"TL","name":"East Timor","continent":"OC","cases":"1","deaths":"0","recoveries":"0","populations":"1175880"},
{"code":"TM","name":"Turkmenistan","continent":"AS","cases":"0","deaths":"0","recoveries":"0","populations":"5105301"},
{"code":"TN","name":"Tunisia","continent":"AF","cases":"394","deaths":"10","recoveries":"3","populations":"0"},
{"code":"TO","name":"Tonga","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"104509"},
{"code":"TR","name":"Turkey","continent":"AS","cases":"13531","deaths":"214","recoveries":"243","populations":"73639596"},
{"code":"TT","name":"Trinidad and Tobago","continent":"NA","cases":"85","deaths":"3","recoveries":"1","populations":"1346350"},
{"code":"TV","name":"Tuvalu","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"9847"},
{"code":"TW","name":"Taiwan","continent":"AS","cases":"322","deaths":"5","recoveries":"39","populations":"0"},
{"code":"TZ","name":"Tanzania","continent":"AF","cases":"19","deaths":"1","recoveries":"1","populations":"46218486"},
{"code":"UA","name":"Ukraine","continent":"EU","cases":"645","deaths":"17","recoveries":"10","populations":"45706100"},
{"code":"UG","name":"Uganda","continent":"AF","cases":"44","deaths":"0","recoveries":"0","populations":"34509205"},
{"code":"UM","name":"U.S. Minor Outlying Islands","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"US","name":"United States","continent":"NA","cases":"189445","deaths":"4075","recoveries":"7082","populations":"311591917"},
{"code":"UY","name":"Uruguay","continent":"SA","cases":"320","deaths":"1","recoveries":"25","populations":"3368595"},
{"code":"UZ","name":"Uzbekistan","continent":"AS","cases":"167","deaths":"2","recoveries":"7","populations":"29341200"},
{"code":"VA","name":"Vatican City","continent":"EU","cases":"6","deaths":"0","recoveries":"0","populations":"0"},
{"code":"VC","name":"Saint Vincent and the Grenadines","continent":"NA","cases":"1","deaths":"0","recoveries":"1","populations":"0"},
{"code":"VE","name":"Venezuela","continent":"SA","cases":"135","deaths":"3","recoveries":"39","populations":"29278000"},
{"code":"VG","name":"British Virgin Islands","continent":"NA","cases":"3","deaths":"0","recoveries":"0","populations":"0"},
{"code":"VI","name":"U.S. Virgin Islands","continent":"NA","cases":"30","deaths":"0","recoveries":"21","populations":"0"},
{"code":"VN","name":"Vietnam","continent":"AS","cases":"207","deaths":"0","recoveries":"58","populations":"87840000"},
{"code":"VU","name":"Vanuatu","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"245619"},
{"code":"WF","name":"Wallis and Futuna","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"0"},
{"code":"WS","name":"Samoa","continent":"OC","cases":"0","deaths":"0","recoveries":"0","populations":"183874"},
{"code":"XA","name":"Akrotiri and Dhekelia","continent":"EU","cases":"5","deaths":"0","recoveries":"0","populations":"0"},
{"code":"XC","name":"Northern Cyprus","continent":"EU","cases":"70","deaths":"1","recoveries":"29","populations":"0"},
{"code":"XK","name":"Kosovo","continent":"EU","cases":"106","deaths":"1","recoveries":"1","populations":"0"},
{"code":"XS","name":"Somaliland","continent":"EU","cases":"2","deaths":"0","recoveries":"0","populations":"0"},
{"code":"XT","name":"Transnistria","continent":"EU","cases":"25","deaths":"1","recoveries":"0","populations":"0"},
{"code":"YE","name":"Yemen","continent":"AS","cases":"0","deaths":"0","recoveries":"0","populations":"24799880"},
{"code":"YT","name":"Mayotte","continent":"AF","cases":"94","deaths":"1","recoveries":"10","populations":"0"},
{"code":"ZA","name":"South Africa","continent":"AF","cases":"1353","deaths":"5","recoveries":"31","populations":"50586757"},
{"code":"ZM","name":"Zambia","continent":"AF","cases":"35","deaths":"0","recoveries":"0","populations":"13474959"},
{"code":"ZW","name":"Zimbabwe","continent":"AF","cases":"8","deaths":"1","recoveries":"0","populations":"12754378"}
];

var divisionData = [
{"code":"ac","name":"Aceh","country":"ID","cases":"5","deaths":"0","recoveries":"0"},
{"code":"ba","name":"Bali","country":"ID","cases":"19","deaths":"2","recoveries":"0"},
{"code":"bb","name":"Bangka Belitung","country":"ID","cases":"2","deaths":"0","recoveries":"0"},
{"code":"be","name":"Bengkulu","country":"ID","cases":"1","deaths":"1","recoveries":"0"},
{"code":"bt","name":"Banten","country":"ID","cases":"142","deaths":"4","recoveries":"2"},
{"code":"go","name":"Gorontalo","country":"ID","cases":"0","deaths":"0","recoveries":"0"},
{"code":"ja","name":"Jambi","country":"ID","cases":"2","deaths":"0","recoveries":"0"},
{"code":"jb","name":"Jawa Barat","country":"ID","cases":"198","deaths":"21","recoveries":"11"},
{"code":"ji","name":"Jawa Timur","country":"ID","cases":"93","deaths":"8","recoveries":"16"},
{"code":"jk","name":"Jakarta Raya","country":"ID","cases":"747","deaths":"83","recoveries":"48"},
{"code":"jt","name":"Jawa Tengah","country":"ID","cases":"93","deaths":"7","recoveries":"0"},
{"code":"kb","name":"Kalimantan Barat","country":"ID","cases":"9","deaths":"2","recoveries":"2"},
{"code":"ki","name":"Kalimantan Timur","country":"ID","cases":"20","deaths":"0","recoveries":"0"},
{"code":"kp","name":"Kepulauan Riau","country":"ID","cases":"7","deaths":"1","recoveries":"0"},
{"code":"ks","name":"Kalimantan Selatan","country":"ID","cases":"2","deaths":"0","recoveries":"0"},
{"code":"kt","name":"Kalimantan Tengah","country":"ID","cases":"9","deaths":"0","recoveries":"0"},
{"code":"ku","name":"Kalimantan Utara","country":"ID","cases":"2","deaths":"0","recoveries":"0"},
{"code":"la","name":"Lampung","country":"ID","cases":"8","deaths":"0","recoveries":"0"},
{"code":"ma","name":"Maluku","country":"ID","cases":"1","deaths":"0","recoveries":"0"},
{"code":"mu","name":"Maluku Utara","country":"ID","cases":"1","deaths":"0","recoveries":"0"},
{"code":"nb","name":"Nusa Tenggara Barat","country":"ID","cases":"4","deaths":"0","recoveries":"0"},
{"code":"nt","name":"Nusa Tenggara Timur","country":"ID","cases":"0","deaths":"0","recoveries":"0"},
{"code":"pa","name":"Papua","country":"ID","cases":"10","deaths":"0","recoveries":"0"},
{"code":"ri","name":"Riau","country":"ID","cases":"3","deaths":"0","recoveries":"1"},
{"code":"sa","name":"Sulawesi Utara","country":"ID","cases":"2","deaths":"0","recoveries":"1"},
{"code":"sb","name":"Sumatera Barat","country":"ID","cases":"11","deaths":"1","recoveries":"0"},
{"code":"sg","name":"Sulawesi Tenggara","country":"ID","cases":"3","deaths":"0","recoveries":"0"},
{"code":"sn","name":"Sulawesi Selatan","country":"ID","cases":"50","deaths":"1","recoveries":"0"},
{"code":"sr","name":"Sulawesi Barat","country":"ID","cases":"1","deaths":"0","recoveries":"0"},
{"code":"ss","name":"Sumatera Selatan","country":"ID","cases":"5","deaths":"2","recoveries":"0"},
{"code":"st","name":"Sulawesi Tengah","country":"ID","cases":"3","deaths":"0","recoveries":"0"},
{"code":"su","name":"Sumatera Utara","country":"ID","cases":"19","deaths":"1","recoveries":"0"},
{"code":"pb","name":"Papua Barat","country":"ID","cases":"2","deaths":"1","recoveries":"0"},
{"code":"yo","name":"Yogyakarta","country":"ID","cases":"23","deaths":"2","recoveries":"1"},
{"code":"al","name":"Alabama","country":"US","cases":"952","deaths":"13","recoveries":"0"},
{"code":"ak","name":"Alaska","country":"US","cases":"119","deaths":"3","recoveries":"0"},
{"code":"az","name":"Arizona","country":"US","cases":"1289","deaths":"24","recoveries":"6"},
{"code":"ar","name":"Arkansas","country":"US","cases":"508","deaths":"7","recoveries":"32"},
{"code":"ca","name":"California","country":"US","cases":"7477","deaths":"149","recoveries":"60"},
{"code":"co","name":"Colorado","country":"US","cases":"2627","deaths":"51","recoveries":"0"},
{"code":"ct","name":"Connecticut","country":"US","cases":"2571","deaths":"36","recoveries":"0"},
{"code":"de","name":"Delaware","country":"US","cases":"264","deaths":"7","recoveries":"22"},
{"code":"fl","name":"Florida","country":"US","cases":"6732","deaths":"85","recoveries":"0"},
{"code":"ga","name":"Georgia","country":"US","cases":"3817","deaths":"108","recoveries":"0"},
{"code":"hi","name":"Hawaii","country":"US","cases":"224","deaths":"1","recoveries":"5"},
{"code":"id","name":"Idaho","country":"US","cases":"525","deaths":"9","recoveries":"0"},
{"code":"il","name":"Illinois","country":"US","cases":"5994","deaths":"99","recoveries":"2"},
{"code":"in","name":"Indiana","country":"US","cases":"2159","deaths":"49","recoveries":"0"},
{"code":"ia","name":"Iowa","country":"US","cases":"424","deaths":"6","recoveries":"23"},
{"code":"ks","name":"Kansas","country":"US","cases":"428","deaths":"9","recoveries":"0"},
{"code":"ky","name":"Kentucky","country":"US","cases":"594","deaths":"17","recoveries":"0"},
{"code":"la","name":"Louisiana","country":"US","cases":"5237","deaths":"239","recoveries":"0"},
{"code":"me","name":"Maine","country":"US","cases":"303","deaths":"5","recoveries":"68"},
{"code":"md","name":"Maryland","country":"US","cases":"1660","deaths":"18","recoveries":"53"},
{"code":"ma","name":"Massachusetts","country":"US","cases":"6620","deaths":"89","recoveries":"1655"},
{"code":"mi","name":"Michigan","country":"US","cases":"7615","deaths":"259","recoveries":"0"},
{"code":"mn","name":"Minnesota","country":"US","cases":"629","deaths":"12","recoveries":"288"},
{"code":"ms","name":"Mississippi","country":"US","cases":"937","deaths":"20","recoveries":"0"},
{"code":"mo","name":"Missouri","country":"US","cases":"1327","deaths":"14","recoveries":"0"},
{"code":"mt","name":"Montana","country":"US","cases":"184","deaths":"4","recoveries":"0"},
{"code":"ne","name":"Nebraska","country":"US","cases":"153","deaths":"2","recoveries":"0"},
{"code":"nv","name":"Nevada","country":"US","cases":"1113","deaths":"26","recoveries":"0"},
{"code":"nh","name":"New Hampshire","country":"US","cases":"314","deaths":"3","recoveries":"0"},
{"code":"nj","name":"New Jersey","country":"US","cases":"18696","deaths":"267","recoveries":"0"},
{"code":"nm","name":"New Mexico","country":"US","cases":"315","deaths":"5","recoveries":"26"},
{"code":"ny","name":"New York","country":"US","cases":"75795","deaths":"1550","recoveries":"0"},
{"code":"nc","name":"North Carolina","country":"US","cases":"1498","deaths":"8","recoveries":"0"},
{"code":"nd","name":"North Dakota","country":"US","cases":"122","deaths":"3","recoveries":"25"},
{"code":"oh","name":"Ohio","country":"US","cases":"2199","deaths":"55","recoveries":"0"},
{"code":"ok","name":"Oklahoma","country":"US","cases":"565","deaths":"23","recoveries":"0"},
{"code":"or","name":"Oregon","country":"US","cases":"690","deaths":"18","recoveries":"0"},
{"code":"pa","name":"Pennsylvania","country":"US","cases":"4843","deaths":"63","recoveries":"0"},
{"code":"ri","name":"Rhode Island","country":"US","cases":"408","deaths":"4","recoveries":"0"},
{"code":"sc","name":"South Carolina","country":"US","cases":"1083","deaths":"22","recoveries":"5"},
{"code":"sd","name":"South Dakota","country":"US","cases":"108","deaths":"1","recoveries":"44"},
{"code":"tn","name":"Tennessee","country":"US","cases":"2239","deaths":"23","recoveries":"121"},
{"code":"tx","name":"Texas","country":"US","cases":"3266","deaths":"41","recoveries":"0"},
{"code":"ut","name":"Utah","country":"US","cases":"887","deaths":"5","recoveries":"0"},
{"code":"vt","name":"Vermont","country":"US","cases":"293","deaths":"13","recoveries":"0"},
{"code":"va","name":"Virginia","country":"US","cases":"1250","deaths":"27","recoveries":"0"},
{"code":"wa","name":"Washington","country":"US","cases":"5453","deaths":"195","recoveries":"0"},
{"code":"wv","name":"West Virginia","country":"US","cases":"145","deaths":"1","recoveries":"0"},
{"code":"wi","name":"Wisconsin","country":"US","cases":"1412","deaths":"28","recoveries":"0"},
{"code":"wy","name":"Wyoming","country":"US","cases":"109","deaths":"0","recoveries":"26"},
{"code":"dc","name":"District of Columbia","country":"US","cases":"495","deaths":"9","recoveries":"121"},
{"code":"as","name":"American Samoa","country":"US","cases":"0","deaths":"0","recoveries":"0"},
{"code":"gu","name":"Guam","country":"US","cases":"58","deaths":"2","recoveries":"7"},
{"code":"mp","name":"Northern Mariana Islands","country":"US","cases":"2","deaths":"0","recoveries":"0"},
{"code":"pr","name":"Puerto Rico","country":"US","cases":"239","deaths":"8","recoveries":"0"},
{"code":"um","name":"United States Minor Outlying Islands","country":"US","cases":"0","deaths":"0","recoveries":"0"},
{"code":"vi","name":"Virgin Islands, U.S.","country":"US","cases":"23","deaths":"0","recoveries":"0"}
];

var cityData = [
{"code":"wuhan","name":"Wuhan","country":"CN","cases":"50006","deaths":"2547","recoveries":"45733","populations":"11081000","latitude":"30.58333","longitude":"114.26667"},
{"code":"nycit","name":"New York City","country":"US","cases":"43139","deaths":"0","recoveries":"0","populations":"8398748","latitude":"40.71278","longitude":"-74.00597"},
{"code":"lomba","name":"Lombardia","country":"IT","cases":"43208","deaths":"7199","recoveries":"10885","populations":"10078012","latitude":"45.47907","longitude":"9.84524"},
{"code":"madri","name":"Madrid","country":"ES","cases":"27509","deaths":"3603","recoveries":"9330","populations":"6661949","latitude":"40.41678","longitude":"-3.70379"}
];

var countyData = [
{"code":"36103","name":"Suffolk","country":"US","cases":"6713","deaths":"44","recoveries":"1"},
{"code":"36119","name":"Westchester","country":"US","cases":"9967","deaths":"19","recoveries":"0"},
{"code":"36087","name":"Rockland","country":"US","cases":"2863","deaths":"18","recoveries":"0"},
{"code":"36071","name":"Orange","country":"US","cases":"1556","deaths":"12","recoveries":"0"},
{"code":"36059","name":"Nassau","country":"US","cases":"8544","deaths":"48","recoveries":"0"},
{"code":"36001","name":"Albany","country":"US","cases":"226","deaths":"1","recoveries":"0"},
{"code":"36027","name":"Dutchess","country":"US","cases":"484","deaths":"3","recoveries":"0"},
{"code":"36029","name":"Erie","country":"US","cases":"553","deaths":"10","recoveries":"62"},
{"code":"36055","name":"Monroe","country":"US","cases":"292","deaths":"8","recoveries":"0"},
{"code":"36067","name":"Onodaga","country":"US","cases":"228","deaths":"1","recoveries":"41"},
{"code":"36079","name":"Putnam","country":"US","cases":"186","deaths":"0","recoveries":"0"},
{"code":"36111","name":"Ulster","country":"US","cases":"211","deaths":"0","recoveries":"0"},
{"code":"36105","name":"Sullivan","country":"US","cases":"109","deaths":"1","recoveries":"0"},
{"code":"36091","name":"Saratoga","country":"US","cases":"108","deaths":"1","recoveries":"0"}
];

// Areas or countries
function groupAreas(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj['code']
        if (!acc[key]) {
            acc[key] = {}
        }
        acc[key].value = obj[property]
        acc[key].attrs = { "href": "#" }
        acc[key].tooltip = { "content": "<strong>"+obj['name']+"</strong><br />Confirmed cases : "+obj['cases']+"<br />Deaths : "+obj['deaths']+"<br />Recoveries : "+obj['recoveries']+"<br />Populations : "+obj['populations'] }
        return acc
    }, {})
}

var caseCountryAreas = groupAreas(countryData, 'cases');
var deathCountryAreas = groupAreas(countryData, 'deaths');
var recoveryCountryAreas = groupAreas(countryData, 'recoveries');

// Plots or cities
function groupPlots(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj['code']
        if (!acc[key]) {
            acc[key] = {}
        }
        acc[key].latitude = obj['latitude']
        acc[key].longitude = obj['longitude']
        acc[key].value = obj[property]
        acc[key].attrs = { "href": "#" }
        acc[key].tooltip = { "content": "<strong>"+obj['name']+"</strong><br />Confirmed cases : "+obj['cases']+"<br />Deaths : "+obj['deaths']+"<br />Recoveries : "+obj['recoveries']+"<br />Populations : "+obj['populations'] }
        return acc
    }, {})
}

var caseCityPlots = groupPlots(cityData, 'cases');
var deathCityPlots = groupPlots(cityData, 'deaths');
var recoveryCityPlots = groupPlots(cityData, 'recoveries');

// VMap plugin
function groupVMap(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        var key = obj['code'].toLowerCase()
        if (!acc[key]) {
            acc[key] = obj[property]
        }
        return acc
    }, {})
}

var populationVMap = groupVMap(countryData, 'populations');

// VMap regions
function groupVMapRegion(objectArray, property, countryId) {
    return objectArray.reduce(function (acc, obj) {
        if(obj['country'] == countryId) {
            var key = obj['code']
            if (!acc[key]) {
                acc[key] = obj[property]
            }
        }
        return acc
    }, {})
}

//var regionVMap = groupVMapRegion(divisionData, 'cases', 'US');

// Legend area for confirmed cases by country
var caseLegendAreaColors = [
    {
        min: 100000,
        attrs: {
            fill: "#300000"
        },
        label: "100,000+ confirmed cases"
    },
    {
        min: 10000,
        max: 99999, 
        attrs: {
            fill: "#510000"
        },
        label: "10,000-9,9999 confirmed cases"
    },
    {
        min: 1000,
        max: 9999, 
        attrs: {
            fill: "#900000"
        },
        label: "1,000–9,999 confirmed cases"
    },
    {
        min: 100,
        max: 999, 
        attrs: {
            fill: "#c80200"
        },
        label: "100–999 confirmed cases"
    },
    {
        min: 10,
        max: 99, 
        attrs: {
            fill: "#ee7070"
        },
        label: "10–99 confirmed cases"
    },
    {
        min: 1,
        max: 9, 
        attrs: {
            fill: "#ffC0C0"
        },
        label: "1–9 confirmed cases"
    },
    {
        max: 0, 
        attrs: {
            fill: "#eeeeee"
        },
        label: "No confirmed cases or no data"
    }
]

// Legend area for deaths by country
var deathLegendAreaColors = [
    {
        min: 100000,
        attrs: {
            fill: "#980043"
        },
        label: "100,000+ deaths"
    },
    {
        min: 10000,
        max: 99999, 
        attrs: {
            fill: "#dd1c77"
        },
        label: "10,000-9,9999 deaths"
    },
    {
        min: 1000,
        max: 9999, 
        attrs: {
            fill: "#df65b0"
        },
        label: "1,000–9,999 deaths"
    },
    {
        min: 100,
        max: 999, 
        attrs: {
            fill: "#c994c7"
        },
        label: "100–999 deaths"
    },
    {
        min: 10,
        max: 99, 
        attrs: {
            fill: "#d4b9da"
        },
        label: "10–99 deaths"
    },
    {
        min: 1,
        max: 9, 
        attrs: {
            fill: "#d1d0e6"
        },
        label: "1–9 deaths"
    },
    {
        max: 0, 
        attrs: {
            fill: "#e0e0e0"
        },
        label: "No deaths or no data"
    }
]

// Legend area for recoveries by country
var recoveryLegendAreaColors = [
    {
        min: 100000,
        attrs: {
            fill: "#13540d"
        },
        label: "100,000+ recoveries"
    },
    {
        min: 10000,
        max: 99999, 
        attrs: {
            fill: "#219217"
        },
        label: "10,000-9,9999 recoveries"
    },
    {
        min: 1000,
        max: 9999, 
        attrs: {
            fill: "#3edf30"
        },
        label: "1,000–9,999 recoveries"
    },
    {
        min: 100,
        max: 999, 
        attrs: {
            fill: "#80ea76"
        },
        label: "100–999 recoveries"
    },
    {
        min: 10,
        max: 99, 
        attrs: {
            fill: "#a9f1a2"
        },
        label: "10–99 recoveries"
    },
    {
        min: 1,
        max: 9, 
        attrs: {
            fill: "#caf6c6"
        },
        label: "1–9 recoveries"
    },
    {
        max: 0, 
        attrs: {
            fill: "#eafce9"
        },
        label: "No recoveries or no data"
    }
]

// Legend plot for confirmed cases by region/division
var caseLegendPlotColors = [
    {
        max :499, 
        attrs : {
            fill : "#f99200"
        },
        attrsHover :{
            transform : "s1.5",
            "stroke-width" : 1
        }, 
        label :"less than 500 confirmed cases", 
        size : 10
    },
    {
        min :500, 
        max :9999, 
        attrs : {
            fill : "#f99200"
        },
        attrsHover :{
            transform : "s1.5",
            "stroke-width" : 1
        }, 
        label :"Between 500 and 9,999 confirmed cases", 
        size : 20
    },
    {
        min :10000, 
        attrs : {
            fill : "#f99200"
        },
        attrsHover :{
            transform : "s1.5",
            "stroke-width" : 1
        }, 
        label :"More than 10,000 confirmed cases", 
	    size : 30
    }
]

// Legend plot for deaths by region/division
var deathLegendPlotColors = [
    {
        max :499, 
        attrs : {
            fill : "#ba491c"
        },
        attrsHover :{
            transform : "s1.5",
            "stroke-width" : 1
        }, 
        label :"less than 500 deaths", 
        size : 10
    },
    {
        min :500, 
        max :9999, 
        attrs : {
            fill : "#ba491c"
        },
        attrsHover :{
            transform : "s1.5",
            "stroke-width" : 1
        }, 
        label :"Between 500 and 9,999 deaths", 
        size : 20
    },
    {
        min :10000, 
        attrs : {
            fill : "#ba491c"
        },
        attrsHover :{
            transform : "s1.5",
            "stroke-width" : 1
        }, 
        label :"More than 10,000 deaths", 
	    size : 30
    }
]

// Legend plot for recoveries by region/division
var recoveryLegendPlotColors = [
    {
        max :499, 
        attrs : {
            fill : "#2579b5"
        },
        attrsHover :{
            transform : "s1.5",
            "stroke-width" : 1
        }, 
        label :"less than 500 recoveries", 
        size : 10
    },
    {
        min :500, 
        max :9999, 
        attrs : {
            fill : "#2579b5"
        },
        attrsHover :{
            transform : "s1.5",
            "stroke-width" : 1
        }, 
        label :"Between 500 and 9,999 recoveries", 
        size : 20
    },
    {
        min :10000, 
        attrs : {
            fill : "#2579b5"
        },
        attrsHover :{
            transform : "s1.5",
            "stroke-width" : 1
        }, 
        label :"More than 10,000 recoveries", 
	    size : 30
    }
]

