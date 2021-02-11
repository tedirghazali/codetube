/*!
* Pidie v0.0.8
* (c) 2018 Tedir Ghazali
* Released under the Apache License 2.0
*/

class Pidie {

  constructor(){
    this.popover();
    this.spinner();
    this.rangeSlider();
    this.toggleSwitch();
    this.flagSelectBox();
    this.telephoneInput();
    this.searchSelectBox();
    this.tooltip();
  }

  countries() {
    return [
      { id: 'AF', name: 'Afghanistan', currency_code: 'AFN', currency_name: 'Afghani', phone: '+93', language_code: 'ps', language_name: 'پښتو', demonym: 'Afghan' }, 
      { id: 'AL', name: 'Albania', currency_code: 'ALL', currency_name: 'Lek', phone: '+355', language_code: 'sq', language_name: 'Shqip', demonym: 'Albanian' }, 
      { id: 'DZ', name: 'Algeria', currency_code: 'DZD', currency_name: 'Dinar', phone: '+213', language_code: 'ar', language_name: 'العربية', demonym: 'Algerian' }, 
      { id: 'AD', name: 'Andorra', currency_code: 'EUR', currency_name: 'Euro', phone: '+376', language_code: 'ca', language_name: 'Català', demonym: 'Andorran' }, 
      { id: 'AO', name: 'Angola', currency_code: 'AOA', currency_name: 'Kwanza', phone: '+244', language_code: 'pt', language_name: 'Português', demonym: 'Angolan' }, 
      { id: 'AG', name: 'Antigua and Barbuda', currency_code: 'XCD', currency_name: '	East Caribbean Dollar', phone: '+1268', language_code: 'en', language_name: 'English', demonym: 'Antiguan' },
      { id: 'AR', name: 'Argentina', currency_code: 'ARS', currency_name: 'Peso', phone: '+54', language_code: 'es', language_name: 'Español', demonym: 'Argentinian' }, 
      { id: 'AM', name: 'Armenia', currency_code: 'AMD', currency_name: 'Dram', phone: '+374', language_code: 'hy', language_name: 'Հայերեն', demonym: 'Armenian' }, 
      { id: 'AU', name: 'Australia', currency_code: 'AUD', currency_name: 'Dollar', phone: '	+61', language_code: 'en', language_name: 'English', demonym: 'Australian' }, 
      { id: 'AT', name: 'Austria', currency_code: 'EUR', currency_name: 'Euro', phone: '+43', language_code: 'de', language_name: 'Deutsch', demonym: 'Austrian' }, 
      { id: 'AZ', name: 'Azerbaijan', currency_code: 'AZN', currency_name: 'Manat', phone: '+994', language_code: 'az', language_name: 'Azərbaycan dili', demonym: 'Azerbaijani' }, 
      { id: 'BS', name: 'The Bahamas', currency_code: 'BSD', currency_name: 'Dollar', phone: '+1242', language_code: 'en', language_name: 'English', demonym: 'Bahamian' }, 
      { id: 'BH', name: 'Bahrain', currency_code: 'BHD', currency_name: 'Dinar', phone: '+973', language_code: 'ar', language_name: 'العربية', demonym: 'Bahraini' }, 
      { id: 'BD', name: 'Bangladesh', currency_code: 'BDT', currency_name: 'Taka', phone: '+880', language_code: 'bn', language_name: 'বাংলা', demonym: 'Bengali' }, 
      { id: 'BB', name: 'Barbados', currency_code: 'BBD', currency_name: 'Dollar', phone: '+1246', language_code: 'en', language_name: 'English', demonym: 'Barbadian' }, 
      { id: 'BY', name: 'Belarus', currency_code: 'BYR', currency_name: 'Ruble', phone: '+375', language_code: 'be', language_name: 'беларуская мова', demonym: 'Belarusian' }, 
      { id: 'BE', name: 'Belgium', currency_code: 'EUR', currency_name: 'Euro', phone: '+32', language_code: 'nl', language_name: 'Flemish', demonym: 'Belgian' }, 
      { id: 'BZ', name: 'Belize', currency_code: 'BZD', currency_name: 'Dollar', phone: '+501', language_code: 'en', language_name: 'English', demonym: 'Belizean' }, 
      { id: 'BJ', name: 'Benin', currency_code: 'XOF', currency_name: 'West Africa Franc', phone: '+229', language_code: 'fr', language_name: 'Français', demonym: 'Beninois' }, 
      { id: 'BT', name: 'Bhutan', currency_code: 'BTN', currency_name: 'Ngultrum', phone: '+975', language_code: 'dz', language_name: 'Dzongkha', demonym: 'Bhutanese' }, 
      { id: 'BO', name: 'Bolivia', currency_code: 'BOB', currency_name: 'Boliviano', phone: '+591', language_code: 'es', language_name: 'Español', demonym: 'Bolivian' }, 
      { id: 'BA', name: 'Bosnia and Herzegovina', currency_code: 'BAM', currency_name: 'Mark', phone: '+387', language_code: 'bs', language_name: 'Bosanski', demonym: 'Bosnian' }, 
      { id: 'BW', name: 'Botswana', currency_code: 'BWP', currency_name: 'Pula', phone: '+267', language_code: 'en', language_name: 'English', demonym: 'Batswana' }, 
      { id: 'BR', name: 'Brazil', currency_code: 'BRL', currency_name: 'Real', phone: '+55', language_code: 'pt', language_name: 'Português', demonym: 'Brazilian' }, 
      { id: 'BN', name: 'Brunei', currency_code: 'BND', currency_name: 'Dollar', phone: '+673', language_code: 'ms', language_name: 'Bahasa Melayu', demonym: 'Bruneian' }, 
      { id: 'BG', name: 'Bulgaria', currency_code: 'BGN', currency_name: 'Lev', phone: '+359', language_code: 'bg', language_name: 'български език', demonym: 'Bulgarian' }, 
      { id: 'BF', name: 'Burkina Faso', currency_code: 'XOF', currency_name: 'West Africa Franc', phone: '+226', language_code: 'fr', language_name: 'Français', demonym: 'Burkinabe' }, 
      { id: 'BI', name: 'Burundi', currency_code: 'BIF', currency_name: 'Franc', phone: '+257', language_code: 'fr', language_name: 'Français', demonym: 'Burundian' }, 
      { id: 'KH', name: 'Cambodia', currency_code: 'KHR', currency_name: 'Riel', phone: '+855', language_code: 'km', language_name: 'ភាសាខ្មែរ', demonym: 'Cambodian' }, 
      { id: 'CM', name: 'Cameroon', currency_code: 'XAF', currency_name: 'Central African Franc', phone: '+237', language_code: 'fr', language_name: 'Français', demonym: 'Cameroonian' }, 
      { id: 'CA', name: 'Canada', currency_code: 'CAD', currency_name: 'Dollar', phone: '+1', language_code: 'en', language_name: 'English', demonym: 'Canadian' }, 
      { id: 'CV', name: 'Cape Verde', currency_code: 'CVE', currency_name: 'Escudo', phone: '+238', language_code: 'pt', language_name: 'Português', demonym: 'Cape Verdean' }, 
      { id: 'CF', name: 'Central African Republic', currency_code: 'XAF', currency_name: 'Franc', phone: '+236', language_code: 'fr', language_name: 'Français', demonym: 'Central African' }, 
      { id: 'TD', name: 'Chad', currency_code: 'XAF', currency_name: 'Central African Franc', phone: '+235', language_code: 'fr', language_name: 'Français', demonym: 'Chadian' }, 
      { id: 'CL', name: 'Chile', currency_code: 'CLP', currency_name: 'Peso', phone: '+56', language_code: 'es', language_name: 'Español', demonym: 'Chilean' }, 
      { id: 'CN', name: 'China', currency_code: 'CNY', currency_name: 'Yuan', phone: '+86', language_code: 'zh', language_name: '华语', demonym: 'Chinese' }, 
      { id: 'CO', name: 'Colombia', currency_code: 'COP', currency_name: 'Peso', phone: '+57', language_code: 'es', language_name: 'Español', demonym: 'Colombian' }, 
      { id: 'KM', name: 'Comoros', currency_code: 'KMF', currency_name: 'Franc', phone: '+269', language_code: 'fr', language_name: 'Français', demonym: 'Comorian' }, 
      { id: 'CD', name: 'Democratic Congo', currency_code: 'CDF', currency_name: 'Franc', phone: '+243', language_code: 'fr', language_name: 'Français', demonym: 'Congolese' }, 
      { id: 'CG', name: 'Congo', currency_code: 'XAF', currency_name: 'Central African Franc', phone: '+242', language_code: 'fr', language_name: 'Français', demonym: 'Congolese' }, 
      { id: 'CR', name: 'Costa Rica', currency_code: 'CRC', currency_name: 'Colón', phone: '+506', language_code: 'es', language_name: 'Español', demonym: 'Costa Rican' }, 
      { id: 'HR', name: 'Croatia', currency_code: 'HRK', currency_name: 'Kuna', phone: '+385', language_code: 'hr', language_name: 'hrvatski', demonym: 'Croatian' }, 
      { id: 'CU', name: 'Cuba', currency_code: 'CUC', currency_name: 'Convertible Peso', phone: '+53', language_code: 'es', language_name: 'Español', demonym: 'Cuban' }, 
      { id: 'CY', name: 'Cyprus', currency_code: 'EUR', currency_name: 'Euro', phone: '+357', language_code: 'el', language_name: 'ελληνικά', demonym: 'Cypriot' }, 
      { id: 'CZ', name: 'Czech Republic', currency_code: 'CZK', currency_name: 'Koruna', phone: '+420', language_code: 'cs', language_name: 'čeština', demonym: 'Czech' }, 
      { id: 'DK', name: 'Denmark', currency_code: 'DKK', currency_name: 'Krone', phone: '+45', language_code: 'da', language_name: 'Dansk', demonym: 'Danish' }, 
      { id: 'DJ', name: 'Djibouti', currency_code: 'DJF', currency_name: 'Franc', phone: '+253', language_code: 'fr', language_name: 'Français', demonym: 'Djiboutian' }, 
      { id: 'DM', name: 'Dominica', currency_code: 'XCD', currency_name: 'East Caribbean Dollar', phone: '+1767', language_code: 'en', language_name: 'English', demonym: 'Dominican' }, 
      { id: 'DO', name: 'Dominican Republic', currency_code: 'DOP', currency_name: 'Peso', phone: '+1849', language_code: 'es', language_name: 'Español', demonym: 'Dominican' }, 
      { id: 'TL', name: 'East Timor', currency_code: 'USD', currency_name: 'United States Dollar', phone: '+670', language_code: 'pt', language_name: 'Português', demonym: 'East Timorese' }, 
      { id: 'EC', name: 'Ecuador', currency_code: 'USD', currency_name: 'United States Dollar', phone: '+593', language_code: 'es', language_name: 'Español', demonym: 'Ecuadorian' }, 
      { id: 'EG', name: 'Egypt', currency_code: 'EGP', currency_name: 'Pound', phone: '+20', language_code: 'ar', language_name: 'العربية', demonym: 'Egyptian' }, 
      { id: 'SV', name: 'El Salvador', currency_code: 'USD', currency_name: 'United States Dollar', phone: '+503', language_code: 'es', language_name: 'Español', demonym: 'Salvadoran' }, 
      { id: 'GQ', name: 'Equatorial Guinea', currency_code: 'XAF', currency_name: 'Central African Franc', phone: '+240', language_code: 'es', language_name: 'Español', demonym: 'Equatoguinean' }, 
      { id: 'ER', name: 'Eritrea', currency_code: 'ERN', currency_name: 'Nakfa', phone: '+291', language_code: 'en', language_name: 'English', demonym: 'Eritrean' }, 
      { id: 'EE', name: 'Estonia', currency_code: 'EUR', currency_name: 'Euro', phone: '+372', language_code: 'et', language_name: 'Eesti keel', demonym: 'Estonian' }, 
      { id: 'ET', name: 'Ethiopia', currency_code: 'ETB', currency_name: 'Birr', phone: '+251', language_code: 'am', language_name: 'አማርኛ', demonym: 'Ethiopian' }, 
      { id: 'FJ', name: 'Fiji', currency_code: 'FJD', currency_name: 'Dollar', phone: '+679', language_code: 'en', language_name: 'English', demonym: 'Fijian' }, 
      { id: 'FI', name: 'Finland', currency_code: 'EUR', currency_name: 'Euro', phone: '+358', language_code: 'fi', language_name: 'Suomen kieli', demonym: 'Finnish' }, 
      { id: 'FR', name: 'France', currency_code: 'XPF', currency_name: 'Franc', phone: '+33', language_code: 'fr', language_name: 'Français', demonym: 'French' }, 
      { id: 'GA', name: 'Gabon', currency_code: 'XAF', currency_name: 'Central African Franc', phone: '+241', language_code: 'fr', language_name: 'Français', demonym: 'Gabonaise' }, 
      { id: 'GM', name: 'The Gambia', currency_code: 'GMD', currency_name: 'Dalasi', phone: '+220', language_code: 'en', language_name: 'English', demonym: 'Gambian' }, 
      { id: 'GE', name: 'Georgia', currency_code: 'GEL', currency_name: 'Lari', phone: '+995', language_code: 'ka', language_name: 'ქართული', demonym: 'Georgian' }, 
      { id: 'DE', name: 'Germany', currency_code: 'EUR', currency_name: 'Euro', phone: '+49', language_code: 'de', language_name: 'Deutsch', demonym: 'German' }, 
      { id: 'GH', name: 'Ghana', currency_code: 'GHS', currency_name: 'Cedi', phone: '+233', language_code: 'en', language_name: 'English', demonym: 'Ghanaian' }, 
      { id: 'GR', name: 'Greece', currency_code: 'EUR', currency_name: 'Euro', phone: '+30', language_code: 'el', language_name: 'ελληνικά', demonym: 'Greek' }, 
      { id: 'GD', name: 'Grenada', currency_code: 'XCD', currency_name: 'East Caribbean Dollar', phone: '+1-473', language_code: 'en', language_name: 'English', demonym: 'Grenadian' }, 
      { id: 'GT', name: 'Guatemala', currency_code: 'GTQ', currency_name: 'Quetzal', phone: '+502', language_code: 'es', language_name: 'Español', demonym: 'Guatemalan' }, 
      { id: 'GN', name: 'Guinea', currency_code: 'GNF', currency_name: 'Franc', phone: '+224', language_code: 'fr', language_name: 'Français', demonym: 'Guinean' }, 
      { id: 'GW', name: 'Guinea-Bissau', currency_code: 'XOF', currency_name: 'West African Franc', phone: '+245', language_code: 'pt', language_name: 'Português', demonym: 'Bissau-Guinean' }, 
      { id: 'GY', name: 'Guyana', currency_code: 'GYD', currency_name: 'Dollar', phone: '+592', language_code: 'en', language_name: 'English', demonym: 'Guyanese' }, 
      { id: 'HT', name: 'Haiti', currency_code: '', currency_name: 'Gourde', phone: '+509', language_code: 'fr', language_name: 'Français', demonym: 'Haitian' }, 
      { id: 'HN', name: 'Honduras', currency_code: 'HNL', currency_name: 'Lempira', phone: '+504', language_code: 'es', language_name: 'Español', demonym: 'Honduran' }, 
      { id: 'HU', name: 'Hungary', currency_code: 'HUF', currency_name: 'Forint', phone: '+36', language_code: 'hu', language_name: 'Magyar', demonym: 'Hungarian' }, 
      { id: 'IS', name: 'Iceland', currency_code: 'ISK', currency_name: 'Króna', phone: '+354', language_code: 'is', language_name: 'íslenska', demonym: 'Icelandic' }, 
      { id: 'IN', name: 'India', currency_code: 'INR', currency_name: 'Rupee', phone: '+91', language_code: 'hi', language_name: 'हिन्दी', demonym: 'Indian' }, 
      { id: 'ID', name: 'Indonesia', currency_code: 'IDR', currency_name: 'Rupiah', phone: '+62', language_code: 'id', language_name: 'Bahasa Indonesia', demonym: 'Indonesian' }, 
      { id: 'IR', name: 'Iran', currency_code: 'IRR', currency_name: 'Rial', phone: '+98', language_code: 'fa', language_name: 'فارسی', demonym: 'Iranian' }, 
      { id: 'IQ', name: 'Iraq', currency_code: 'IQD', currency_name: 'Dinar', phone: '+964', language_code: 'ar', language_name: 'العربية', demonym: 'Iraqi' }, 
      { id: 'IE', name: 'Ireland', currency_code: 'EUR', currency_name: 'Euro', phone: '+353', language_code: 'en', language_name: 'English', demonym: '	Irish' }, 
      { id: 'IL', name: 'Israel', currency_code: 'ILS', currency_name: 'New Shekel', phone: '	+972', language_code: 'he', language_name: 'עִבְרִית', demonym: 'Israeli' }, 
      { id: 'IT', name: 'Italy', currency_code: 'EUR', currency_name: 'Euro', phone: '+39', language_code: 'it', language_name: 'Italiano', demonym: 'Italian' }, 
      { id: 'CI', name: 'Ivory Coast', currency_code: 'XOF', currency_name: 'West African Franc', phone: '+225', language_code: 'fr', language_name: 'Français', demonym: 'Ivorian' },
      { id: 'JM', name: 'Jamaica', currency_code: 'JMD', currency_name: 'Dollar', phone: '+1658', language_code: 'en', language_name: 'English', demonym: 'Jamaican' },
      { id: 'JP', name: 'Japan', currency_code: 'JPY', currency_name: 'Yen', phone: '', language_code: 'ja', language_name: '日本語', demonym: 'Japanese' },
      { id: 'JO', name: 'Jordan', currency_code: 'JOD', currency_name: 'Dinar', phone: '+962', language_code: 'ar', language_name: 'العربية', demonym: 'Jordanian' },
      { id: 'KZ', name: 'Kazakhstan', currency_code: 'KZT', currency_name: 'Tenge', phone: '+76', language_code: 'kk', language_name: 'Kazakh', demonym: 'Kazakhstani' },
      { id: 'KE', name: 'Kenya', currency_code: 'KES', currency_name: 'Shilling', phone: '+254', language_code: 'en', language_name: 'English', demonym: 'Kenyan' },
      { id: 'KI', name: 'Kiribati', currency_code: 'AUD', currency_name: 'Australian Dollar', phone: '+686', language_code: 'en', language_name: 'English', demonym: 'Kiribati' },
      { id: 'KP', name: 'North Korea', currency_code: 'KPW', currency_name: 'Won', phone: '+850', language_code: 'ko', language_name: '조선어', demonym: 'North Korean' },
      { id: 'KR', name: 'South Korea', currency_code: 'KRW', currency_name: 'Won', phone: '+82', language_code: 'ko', language_name: '한국어', demonym: 'South Korean' },
      { id: 'KW', name: 'Kuwait', currency_code: 'KWD', currency_name: 'Dinar', phone: '+965', language_code: 'ar', language_name: 'العربية', demonym: 'Kuwaiti' },
      { id: 'KG', name: 'Kyrgyzstan', currency_code: 'KGS', currency_name: 'Som', phone: '+996', language_code: '	ky', language_name: 'Kyrgyz', demonym: 'Kyrgyz' },
      { id: 'LA', name: 'Laos', currency_code: 'LAK', currency_name: 'Kip', phone: '+856', language_code: 'lo', language_name: 'ພາສາລາວ', demonym: 'Laotian' },
      { id: 'LV', name: 'Latvia', currency_code: 'EUR', currency_name: 'Euro', phone: '+371', language_code: 'lv', language_name: 'Latviešu Valoda', demonym: 'Latvian' },
      { id: 'LB', name: 'Lebanon', currency_code: 'LBP', currency_name: 'Pound', phone: '+961', language_code: 'ar', language_name: 'العربية', demonym: 'Lebanese' },
      { id: 'LS', name: 'Lesotho', currency_code: 'LSL', currency_name: 'Loti', phone: '+266', language_code: 'en', language_name: 'English', demonym: 'Lesotho' },
      { id: 'LR', name: 'Liberia', currency_code: 'LRD', currency_name: 'Dollar', phone: '+231', language_code: 'en', language_name: 'English', demonym: 'Liberian' },
      { id: 'LY', name: 'Libya', currency_code: 'LYD', currency_name: 'Dinar', phone: '+	218', language_code: 'ar', language_name: 'العربية', demonym: 'Libyan' },
      { id: 'LI', name: 'Liechtenstein', currency_code: 'CHF', currency_name: 'Swiss Franc', phone: '+423', language_code: 'de', language_name: 'Deutsch', demonym: 'Liechtenstein' },
      { id: 'LT', name: 'Lithuania', currency_code: 'EUR', currency_name: 'Euro', phone: '+370', language_code: 'lt', language_name: 'Lietuvių kalba', demonym: 'Lithuanian' },
      { id: 'LU', name: 'Luxembourg', currency_code: 'EUR', currency_name: 'Euro', phone: '+352', language_code: 'lb', language_name: 'Lëtzebuergesch', demonym: 'Luxembourg' },
      /*{ id: '', name: '', currency_code: '', currency_name: '', phone: '', language_code: '', language_name: '', demonym: '' }*/
    ];
  }

  // methods v0.0.8

  tooltip() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-tooltip'), function(elem){
      var tooltipText = elem.getAttribute('data-tooltip-text');
      var tooltipAlign = elem.getAttribute('data-tooltip-align');
      var tooltipElem = document.createElement('div');
      tooltipElem.classList.add('pd-tooltip-text');
      tooltipElem.innerHTML = tooltipText;
      if(tooltipAlign == ''){
        tooltipElem.classList.add('pd-tooltip-bottom');
      } else{
        tooltipElem.classList.add('pd-tooltip-'+tooltipAlign);
      }
      elem.appendChild(tooltipElem);
    })
  }
  searchSelectBox() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-search-select'), function(elem){
      var cariSelectBox = elem;
      var itemSelectBox = cariSelectBox.querySelector('.pd-flag-items');
      var selectCari = document.createElement('input');
      selectCari.type = 'search';
      selectCari.placeholder = 'Search this select item'
      selectCari.classList.add('pd-flag-search');
      itemSelectBox.insertBefore(selectCari, itemSelectBox.childNodes[0]);
      var cariItem = itemSelectBox.querySelector('input[type=search]');
      cariItem.onkeyup = function(){
        var filterItem = cariItem.value.toLowerCase();
        var listItem = itemSelectBox.getElementsByTagName('div');
        for (var i = 0; i < listItem.length; i++) {
          var valueItem = listItem[i].textContent ||listItem[i].innerText;
          if(valueItem.toLowerCase().indexOf(filterItem) > -1){
            listItem[i].style.display = "flex";
          } else{
            listItem[i].style.display = "none";
          }
          console.log('Item: '+listItem[i].innerText);
        }
      }
    })
  }
  telephoneInput() {
    var flagTelephone = this.countries();
    Array.prototype.forEach.call(document.querySelectorAll('.pd-telephone-input'), function(elem){
      var dropdownTelephone = document.createElement('div');
      dropdownTelephone.classList.add('pd-telephone-dropdown');
      var dropdownContent = '';
      dropdownContent += '<div class="pd-telephone-flag"><div class="flag flag-us"></div></div><ul class="pd-telephone-list"></ul>';
      dropdownTelephone.innerHTML = dropdownContent;
      elem.insertBefore(dropdownTelephone, elem.childNodes[0]);
      var listTelephone = elem.querySelector('.pd-telephone-list');
      var itemTelephone = '';
      flagTelephone.forEach(function(res){
        itemTelephone += '<li class="pd-telephone-item" data-dial-code="'+res.phone+'" data-country-code="'+res.id.toLowerCase()+'"><span class="flag flag-'+res.id.toLowerCase()+'"></span> <span class="pd-telephone-name">'+res.name+'</span> <span class="pd-telephone-code">'+res.phone+'</span></li>';
      })
      listTelephone.innerHTML = itemTelephone;
      var toggleTelephone = elem.querySelector('.pd-telephone-flag');
      toggleTelephone.onclick = function(e){
        e.preventDefault();
        listTelephone.classList.toggle('pd-telephone-show');
      }
      var numberTelephone = elem.querySelector('input');
      numberTelephone.value = '+1';
      Array.prototype.forEach.call(listTelephone.querySelectorAll('.pd-telephone-item'), function(element){
        element.onclick = function(e){
          e.preventDefault();
          toggleTelephone.querySelector('.flag').setAttribute('class', 'flag flag-'+this.getAttribute('data-country-code'));
          listTelephone.classList.remove('pd-telephone-show');
          numberTelephone.value = this.getAttribute('data-dial-code');
        }
      });
    })
  }
  flagSelectBox() {
    var selElmnt, flagChoose, flagItem, flagArr;
    var flagCountry = this.countries();
    Array.prototype.forEach.call(document.querySelectorAll('.pd-countries'), function(elem){
      var addCountry = '';
      addCountry += '<option value="">Select country:</option>';
      flagCountry.forEach(function(res){
        addCountry += '<option data-value="'+res.id+'" value="'+res.id+'">'+res.name+'</option>';
      })
      elem.innerHTML = addCountry;
    })
    Array.prototype.forEach.call(document.querySelectorAll('.pd-languages'), function(elem){
      var addCountry = '';
      addCountry += '<option value="">Select language:</option>';
      flagCountry.forEach(function(res){
        addCountry += '<option data-value="'+res.id+'" value="'+res.language_code+'-'+res.id+'">'+res.language_name+' ('+res.language_code+'-'+res.id+')</option>';
      })
      elem.innerHTML = addCountry;
    })
    Array.prototype.forEach.call(document.querySelectorAll('.pd-currencies'), function(elem){
      var addCountry = '';
      addCountry += '<option value="">Select currencies:</option>';
      flagCountry.forEach(function(res){
        addCountry += '<option data-value="'+res.id+'" value="'+res.currency_code+'">'+res.demonym+' '+res.currency_name+' ('+res.currency_code+')</option>';
      })
      elem.innerHTML = addCountry;
    })
    var flagSelect = document.getElementsByClassName("pd-flag-select");
    for (var i = 0; i < flagSelect.length; i++) {
      selElmnt = flagSelect[i].getElementsByTagName("select")[0];
      flagChoose = document.createElement("div");
      flagChoose.setAttribute("class", "pd-flag-selected");
      flagChoose.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      flagSelect[i].appendChild(flagChoose);
      flagItem = document.createElement("div");
      flagItem.setAttribute("class", "pd-flag-items pd-flag-hide");
      var flagHeight = flagSelect[i].getAttribute('data-height') || '300';
      flagItem.style.height = flagHeight +'px';
      for (var j = 1; j < selElmnt.length; j++) {
        flagArr = document.createElement("div");
        flagArr.style.display = 'flex';
        flagArr.style.verticalAlign = 'middle';
        flagArr.innerHTML = '<i class="flag flag-'+selElmnt.options[j].getAttribute('data-value').toLowerCase()+'"></i> <span class="pd-flag-items-item">'+selElmnt.options[j].innerHTML+'</span>';
        flagArr.setAttribute('data-country', selElmnt.options[j].innerHTML);
        flagArr.addEventListener("click", function(e) {
            var flagSame = this.parentNode.parentNode.getElementsByTagName("select")[0];
            var flagSibling = this.parentNode.previousSibling;
            for (var i = 0; i < flagSame.length; i++) {
              if (flagSame.options[i].innerHTML == this.getAttribute('data-country')) {
                flagSame.selectedIndex = i;
                flagSibling.innerHTML = this.getAttribute('data-country');
                var flagSase = this.parentNode.getElementsByClassName("pd-flag-same-selected");
                for (var k = 0; k < flagSase.length; k++) {
                  flagSase[k].removeAttribute("class");
                }
                this.setAttribute("class", "pd-flag-same-selected");
                break;
              }
            }
            flagSibling.click();
        });
        flagItem.appendChild(flagArr);
      }
      flagSelect[i].appendChild(flagItem);
      flagChoose.addEventListener("click", function(e) {
          e.stopPropagation();
          closeAllSelect(this);
          this.nextSibling.classList.toggle("pd-flag-hide");
          this.classList.toggle("pd-flag-arrow-active");
      });
    }
    function closeAllSelect(elmnt) {
      var arrNo = [];
      var flagItems = document.getElementsByClassName("pd-flag-items");
      var flagSelected = document.getElementsByClassName("pd-flag-selected");
      for (var i = 0; i < flagSelected.length; i++) {
        if (elmnt == flagSelected[i]) {
          arrNo.push(i)
        } else {
          flagSelected[i].classList.remove("pd-flag-arrow-active");
        }
      }
      for (var i = 0; i < flagItems.length; i++) {
        if (arrNo.indexOf(i)) {
          flagItems[i].classList.add("pd-flag-hide");
        }
      }
    }
    //document.addEventListener("click", closeAllSelect); 
  }
  toggleSwitch() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-toggle-switch'), function(elem){
      var switchSlider = document.createElement('span');
      switchSlider.classList.add('pd-switch-slider');
      elem.appendChild(switchSlider);
    })
  }
  rangeSlider() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-range'), function(elem){
      let sliderRange = elem.querySelector('.pd-range-slider');
      let createRange = document.createElement('div');
      createRange.classList.add('pd-range-value');
      elem.appendChild(createRange);
      createRange.innerHTML = sliderRange.getAttribute('max') / 2 || 50;
      sliderRange.onchange = function(e){
        e.preventDefault();
        sliderRange.setAttribute('title', sliderRange.value);
        createRange.innerHTML = sliderRange.value;
      }
    })
  }

  // methods v0.0.7
  spinner(options = {}){
    var settings = {
      el: options.el || '.pd-spinner',
      decrementButton: options.decrementButton || '<strong>-</strong>',
      incrementButton: options.incrementButton || '<strong>+</strong>',
      buttonsSize: options.buttonsClass || 'input-group-md',
      buttonsClass: options.buttonsClass || 'btn-outline-secondary',
      buttonsWidth: options.buttonsWidth || '35px',
      inputAlign: options.inputAlign || 'center'
    }
    var spin = document.querySelectorAll(settings.el);
    Array.prototype.forEach.call(spin, function(elem){
      var spinElm = document.createElement('div');
      spinElm.classList.add('input-group');
      spinElm.classList.add('pd-spinner-wrap');
      spinElm.classList.add(settings.buttonsSize);
      var spinItem = '';
      spinItem += '<div class="input-group-prepend">';
      spinItem += '<button type="button" style="width: '+settings.buttonsWidth+'" class="pd-spinner-decrement btn '+settings.buttonsClass+'">'+settings.decrementButton+'</button>';
      spinItem += '</div>';
      spinItem += '<input type="text" style="text-align: '+settings.inputAlign+'" class="pd-spinner-input form-control"/>';
      spinItem += '<div class="input-group-append">';
      spinItem += '<button type="button" style="width: '+settings.buttonsWidth+'" class="pd-spinner-increment btn '+settings.buttonsClass+'">'+settings.incrementButton+'</button>';
      spinItem += '</div>';
      spinElm.innerHTML = spinItem;
      spinElm.setAttribute('min', elem.getAttribute('min'));
      spinElm.setAttribute('max', elem.getAttribute('max'));
      spinElm.setAttribute('step', elem.getAttribute('step'));
      elem.parentNode.replaceChild(spinElm, elem);
    })
    Array.prototype.forEach.call(document.querySelectorAll('.pd-spinner-wrap'), function(element){
      var min = parseInt(element.getAttribute('min')) || 0;
      var max = isNaN(element.getAttribute('max')) || element.getAttribute('max') === '' ? Infinity : parseInt(element.getAttribute('max'));
      var step = parseInt(element.getAttribute('step')) || 1;
      var decButton = element.querySelector('.pd-spinner-decrement');
      var incButton = element.querySelector('.pd-spinner-increment');
      var inputSpin = element.querySelector('.pd-spinner-input');
      var numberSpin = min;
      inputSpin.value = numberSpin;
      decButton.onclick = function(e){
        e.preventDefault();
        if(inputSpin.value <= min){
          decButton.setAttribute('disabled', 'disabled');
          inputSpin.value = min;
        } else{
          decButton.removeAttribute('disabled');
          incButton.removeAttribute('disabled');
          numberSpin = parseInt(inputSpin.value) - step;
          inputSpin.value = numberSpin;
        }
      }
      incButton.onclick = function(e){
        e.preventDefault();
        if(inputSpin.value >= max){
          incButton.setAttribute('disabled', 'disabled');
          inputSpin.value = max;
        } else{
          decButton.removeAttribute('disabled');
          incButton.removeAttribute('disabled');
          numberSpin = parseInt(inputSpin.value) + step;
          inputSpin.value = numberSpin;
        }
      }
    })
  }
  popover() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-popover-wrap'), function(elem){
        var btn = elem.querySelector('.pd-popover-button');
        var isi = elem.querySelector('.pd-popover-content');
        btn.onclick = function(e){
            e.preventDefault();
            btn.classList.toggle('pd-popover-change');
            isi.classList.toggle('pd-show');
        }
    });
  }
  tryitLike(editor) {
    var tryit = document.querySelector('.pd-tryit-wrap');
    var lebar = (document.documentElement.scrollWidth / 2) - 5;
    var tinggi = document.documentElement.scrollHeight - (document.querySelector('.pd-nav').scrollHeight + 8);
    editor.setSize(lebar, tinggi);
    var dragbar = document.createElement('div');
    dragbar.classList.add('pd-tryit-dragbar');
    dragbar.style.height = (tinggi + 4) +'px';
    var hasil = tryit.querySelector('.pd-tryit-run');
    hasil.style.width = lebar +'px';
    hasil.style.height = tinggi +'px';
    tryit.insertBefore(dragbar, tryit.querySelector('.pd-tryit-result'));
    var menurun = document.querySelector('.pd-menu-run');
    menurun.addEventListener('click', function(e){
      e.preventDefault();
      var konten = (hasil.contentWindow) ? hasil.contentWindow : (hasil.contentDocument.document) ? hasil.contentDocument.document : hasil.contentDocument;
      konten.document.open();
      konten.document.write(editor.doc.getValue());  
      konten.document.close();
      if (konten.document.body && !konten.document.body.isContentEditable) {
        konten.document.body.contentEditable = true;
        konten.document.body.contentEditable = false;
      }
    })
    var menusave = document.querySelector('.pd-menu-save');
    menusave.addEventListener('click', function(e){
      e.preventDefault();
      var svTeks = editor.doc.getValue();
      var svTeksBlob = new Blob([ svTeks ], { type: 'text/html' });
      var svTeksFile = "index.html";
      var svTeksUnduh = document.createElement("a");
      svTeksUnduh.download = svTeksFile;
      svTeksUnduh.innerHTML = "Download File";
      if (window.webkitURL != null) {
        svTeksUnduh.href = window.webkitURL.createObjectURL(svTeksBlob);
      } else {
        svTeksUnduh.href = window.URL.createObjectURL(svTeksBlob);
        svTeksUnduh.onclick = destroySaveTeks;
        svTeksUnduh.style.display = "none";
        document.body.appendChild(svTeksUnduh);
      }
      svTeksUnduh.click();
    })
    function destroySaveTeks(event) {
      document.body.removeChild(event.target);
    }
  }
  parallax() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-parallax'), function(elem){
      elem.style.backgroundImage = 'url('+elem.getAttribute('data-parallax-image')+')';
    })
  }

  // methods v0.0.3 - v0.0.6
  passwordValidation() {
    var passValidate = document.querySelector('.pd-password-validation');
    passValidate.setAttribute('pattern', '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}');
    passValidate.setAttribute('title', 'Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters');
    var passMessage = document.querySelector('.pd-password-message');
    if(passMessage){
      passMessage.innerHTML = passValidate.getAttribute('title');
    }
    passValidate.addEventListener('blur', function(){
      passMessage.innerHTML = passValidate.getAttribute('title');
    });
    passValidate.addEventListener('keyup', function(){
      var passInfo = '';
      passInfo += '<h3>Password must contain the following:</h3>';
      passInfo += '<p id="pd-password-letter" class="pd-password-invalid">Only one or more <b>lowercase</b> letter</p>' 
      passInfo += '<p id="pd-password-capital" class="pd-password-invalid">Only one or more <b>capital (uppercase)</b> letter</p>' 
      passInfo += '<p id="pd-password-number" class="pd-password-invalid">Only one or more <b>number</b></p>' 
      passInfo += '<p id="pd-password-length" class="pd-password-invalid">Minimum <b>8 characters</b> letter or number</p>' 
      passMessage.innerHTML = passInfo;
      var lowerCaseLetters = /[a-z]/g;
      var letter = document.getElementById('pd-password-letter');
      if(passValidate.value.match(lowerCaseLetters)) {  
        letter.classList.remove("pd-password-invalid");
        letter.classList.add("pd-password-valid");
      } else {
        letter.classList.remove("pd-password-valid");
        letter.classList.add("pd-password-invalid");
      }
      var upperCaseLetters = /[A-Z]/g;
      var capital = document.getElementById('pd-password-capital');
      if(passValidate.value.match(upperCaseLetters)) {  
        capital.classList.remove("pd-password-invalid");
        capital.classList.add("pd-password-valid");
      } else {
        capital.classList.remove("pd-password-valid");
        capital.classList.add("pd-password-invalid");
      }
      var numbers = /[0-9]/g;
      var number = document.getElementById('pd-password-number');
      if(passValidate.value.match(numbers)) {  
        number.classList.remove("pd-password-invalid");
        number.classList.add("pd-password-valid");
      } else {
        number.classList.remove("pd-password-valid");
        number.classList.add("pd-password-invalid");
      }
      var length = document.getElementById('pd-password-length');
      if(passValidate.value.length >= 8) {
        length.classList.remove("pd-password-invalid");
        length.classList.add("pd-password-valid");
      } else {
        length.classList.remove("pd-password-valid");
        length.classList.add("pd-password-invalid");
      }
    });
  }
  productImage() {
    var wrapImageProduct = document.querySelector('.pd-product-image');
    var sliderImageProduct = document.querySelector('.pd-product-image-slider');
    var pagiImageProduct = document.createElement('div');
    pagiImageProduct.classList.add('pd-product-image-pagination');
    wrapImageProduct.appendChild(pagiImageProduct);
    var pagiItem = '';
    for(var i = 0; i < 4; i++){
      pagiItem += '<img src="'+sliderImageProduct.getElementsByClassName('pd-product-image-slide')[i].getAttribute('src')+'" data-product-image="'+i+'" width="100" height="80"/>';
    }
    pagiImageProduct.innerHTML = pagiItem;
    Array.prototype.forEach.call(document.querySelectorAll('.pd-product-image-pagination img'), function(elem){
      elem.onclick = function(e){
        e.preventDefault();
        for(var j = 0; j < 4; j++){
          sliderImageProduct.getElementsByClassName('pd-product-image-slide')[j].classList.remove('pd-product-image-active');
        }
        var no = elem.getAttribute('data-product-image');
        sliderImageProduct.getElementsByClassName('pd-product-image-slide')[no].classList.add('pd-product-image-active');
      }
    })
    var zoomImageProduct = document.querySelector('.pd-product-image-active');
    var resultImageProduct = document.createElement('div');
    resultImageProduct.classList.add('pd-product-image-zoom');
    resultImageProduct.style.visibility = 'hidden';
    resultImageProduct.style.backgroundImage = "url('" + zoomImageProduct.src + "')";
    resultImageProduct.style.backgroundSize = (zoomImageProduct.width * 2) + "px " + (zoomImageProduct.height * 2) + "px";
    sliderImageProduct.appendChild(resultImageProduct);
    zoomImageProduct.addEventListener("mousemove", moveImage);
    zoomImageProduct.addEventListener("touchmove", moveImage);
    sliderImageProduct.addEventListener("mouseout", outImage);
    function moveImage(e){
      e.preventDefault();
      resultImageProduct.style.visibility = 'visible';
      var pos = getCursorPos(e);
      var x = pos.x;
      var y = pos.y;
      var zoom = 3;
      var w = '150';
      var h = '150';
      var bw = 3;
      if (x > zoomImageProduct.width - (w / zoom)) {x = zoomImageProduct.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > zoomImageProduct.height - (h / zoom)) {y = zoomImageProduct.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      //resultImageProduct.style.left = x + "px";
      //resultImageProduct.style.top = y + "px";
      resultImageProduct.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function outImage(e){
      e.preventDefault();
      resultImageProduct.style.visibility = 'hidden';
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      a = zoomImageProduct.getBoundingClientRect();
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }
  imageMagnifier(options = {}) {
    var settings = {
      selector: options.el || '.pd-image-magnifier img',
      zoom: options.zoom || 3,
      width: options.width || '150',
      height: options.height || '150'
    }
    var img, glass, w, h, bw;
    img = document.querySelector(settings.selector);
    glass = document.createElement("div");
    glass.setAttribute("class", "pd-image-magnifier-glass");
    glass.style.visibility = 'hidden';
    glass.style.width = settings.width + 'px';
    glass.style.height = settings.height + 'px';
    img.parentElement.insertBefore(glass, img);
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * settings.zoom) + "px " + (img.height * settings.zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    glass.addEventListener("mouseout", outMagnifier);
    function outMagnifier(e){
      e.preventDefault();
      glass.style.visibility = 'hidden';
    }
    function moveMagnifier(e) {
      var pos, x, y;
      e.preventDefault();
      glass.style.visibility = 'visible';
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      if (x > img.width - (w / settings.zoom)) {x = img.width - (w / settings.zoom);}
      if (x < w / settings.zoom) {x = w / settings.zoom;}
      if (y > img.height - (h / settings.zoom)) {y = img.height - (h / settings.zoom);}
      if (y < h / settings.zoom) {y = h / settings.zoom;}
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      glass.style.backgroundPosition = "-" + ((x * settings.zoom) - w + bw) + "px -" + ((y * settings.zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }
  imageZoom() {
    var img, lens, result, cx, cy;
    img = document.querySelector('.pd-image-zoom-content');
    result = document.querySelector('.pd-image-zoom-preview');
    lens = document.createElement("div");
    lens.setAttribute("class", "pd-image-zoom-lens");
    lens.style.visibility = 'hidden';
    img.parentElement.insertBefore(lens, img);
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    lens.addEventListener("mouseout", outLens);
    function outLens(e){
      e.preventDefault();
      result.style.visibility = 'hidden';
      lens.style.visibility = 'hidden';
    }
    function moveLens(e) {
      var pos, x, y;
      e.preventDefault();
      lens.style.visibility = 'visible';
      result.style.visibility = 'visible';
      pos = getCursorPos(e);
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
      if (x < 0) {x = 0;}
      if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
      if (y < 0) {y = 0;}
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      a = img.getBoundingClientRect();
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }
  treeView() {
    var toggler = document.getElementsByClassName("pd-tree-item");
    var i;

    for (i = 0; i < toggler.length; i++) {
      toggler[i].addEventListener("click", function() {
        this.parentElement.querySelector(".pd-tree-child").classList.toggle("pd-tree-active");
        this.classList.toggle("pd-tree-item-active");
      });
    }
  }
  imageCompare() {
    var x, i;
    x = document.getElementsByClassName("pd-image-compare-overlay");
    for (i = 0; i < x.length; i++) {
      compareImages(x[i]);
    }
    function compareImages(img) {
      var slider, img, clicked = 0, w, h;
      w = img.offsetWidth;
      h = img.offsetHeight;
      document.querySelector('.pd-image-comparison').style.height = h + 'px';
      img.style.width = (w / 2) + "px";
      slider = document.createElement("div");
      slider.innerHTML = '<span class="pd-image-compare-icon">&#10094; &#10095;<span>';
      slider.setAttribute("class", "pd-image-compare-slider");
      img.parentElement.insertBefore(slider, img);
      slider.style.top = (h / 2) - (slider.offsetHeight / 2) + "px";
      slider.style.left = (w / 2) - (slider.offsetWidth / 2) + "px";
      slider.addEventListener("mousedown", slideReady);
      window.addEventListener("mouseup", slideFinish);
      slider.addEventListener("touchstart", slideReady);
      window.addEventListener("touchstop", slideFinish);
      function slideReady(e) {
        e.preventDefault();
        clicked = 1;
        window.addEventListener("mousemove", slideMove);
        window.addEventListener("touchmove", slideMove);
      }
      function slideFinish() {
        clicked = 0;
      }
      function slideMove(e) {
        var pos;
        if (clicked == 0) return false;
        pos = getCursorPos(e)
        if (pos < 0) pos = 0;
        if (pos > w) pos = w;
        slide(pos);
      }
      function getCursorPos(e) {
        var a, x = 0;
        e = e || window.event;
        a = img.getBoundingClientRect();
        x = e.pageX - a.left;
        x = x - window.pageXOffset;
        return x;
      }
      function slide(x) {
        img.style.width = x + "px";
        slider.style.left = img.offsetWidth - (slider.offsetWidth / 2) + "px";
      }
    }
  }
  quotesSlideshow() {
    var slideIndex = 1;
    var quotes = document.querySelector('.pd-quotes');
    var quoteSlide = quotes.querySelector('.pd-quotes-slideshow');
    var prevQuotes = document.createElement('span')
    prevQuotes.classList.add('pd-quotes-prev');
    var nextQuotes = document.createElement('span')
    nextQuotes.classList.add('pd-quotes-next');
    prevQuotes.innerHTML = '❮';
    nextQuotes.innerHTML = '❯';
    quoteSlide.appendChild(prevQuotes);
    quoteSlide.appendChild(nextQuotes);
    prevQuotes.onclick = function(){
      plusSlides(-1);
    }
    nextQuotes.onclick = function(){
      plusSlides(1)
    }
    var dotQuotes = document.createElement('div');
    dotQuotes.classList.add('pd-quotes-dots');
    quotes.appendChild(dotQuotes);
    var dotContent = '';
    for(var j = 1; j <= quoteSlide.querySelectorAll('.pd-quotes-slide').length;j++){
      dotContent += '<span class="pd-quotes-dot" data-quote="'+j+'"></span>';
    }
    dotQuotes.innerHTML = dotContent;
    showSlides(slideIndex);
    Array.prototype.forEach.call(dotQuotes.querySelectorAll('.pd-quotes-dot'), function(elem){
      elem.onclick = function(){
        currentSlide(elem.getAttribute('data-quote'));
      }
    })
    setInterval(function(){
      plusSlides(1)
    }, 3000)
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("pd-quotes-slide");
      var dots = document.getElementsByClassName("pd-quotes-dot");
      if (n > slides.length) {slideIndex = 1}    
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";  
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" pd-quotes-active", "");
      }
      slides[slideIndex-1].style.display = "block";  
      dots[slideIndex-1].className += " pd-quotes-active";
    }
  }
  popupChat() {
    var chatButton = document.querySelector('.pd-chat-button');
    var chatOpen = document.querySelector('.pd-chat-popup');
    chatButton.addEventListener('click', function(e){
      e.preventDefault();
      if(chatOpen.style.display == 'block'){
        chatOpen.style.display = 'none';
      } else{
        chatOpen.style.display = 'block';
      }
    })
  }
  equalHeight(kelas) {
    var sameHeight = document.querySelectorAll('.'+kelas);
    var allHeight = [];
    for(var i = 0; i < sameHeight.length; i++){
      allHeight.push(document.getElementsByClassName(kelas)[i].clientHeight);
    }
    var bagiHeight = Math.max(...allHeight);
    Array.prototype.forEach.call(sameHeight, function(elem){
      elem.style.height = bagiHeight + 'px';
    })
  }
  stickyNavigation(elemen) {
    var stickyElemen = document.querySelector(elemen);
    var stickyHeight = stickyElemen.offsetTop;
    window.onscroll = function(){
      if(window.pageYOffset > stickyHeight){
        stickyElemen.style.position = 'fixed';
        stickyElemen.style.top = '0';
        stickyElemen.style.left = '0';
        stickyElemen.style.width = '100%';
        stickyElemen.style.zIndex = '3001';
      } else{
        stickyElemen.style.position = 'relative';
      }
    }
  }
  backToTop() {
    var backToTopButton = document.querySelector('.pd-back-to-top');
    backToTopButton.style.opacity = "0.1";
    window.onscroll = function(){
      var scrollHeight = window.scrollY;
      if(scrollHeight < 100){
        backToTopButton.style.opacity = "0.1";
      } else{
        backToTopButton.style.opacity = "1";
      }
    }
    backToTopButton.addEventListener('click', function(e){
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    })
  }
  tableOfContents(options = {}) {
    var settings = {
      el: options.el || '.pd-table-of-contents',
      headings: options.headings || '.pd-heading-of-contents'
    }
    var tocPanel = document.querySelector(settings.el);
    var tocTajuk = document.querySelector(settings.headings);
    var tocJudul = document.createElement('h4');
    tocPanel.appendChild(tocJudul);
    tocPanel.style.border = '1px solid #aaaaaa';
    tocPanel.style.padding = '10px 10px 10px 10px';
    tocJudul.innerHTML = 'Table of Contents'
    tocJudul.style.textAlign = 'center';
    tocJudul.style.margin = '0px 0px 10px 0px';
    var selectorHeaders = 'h2, h3, h4, h5, h6';
    var primaryHeaderLevels = [1, 2, 3, 4, 5, 6];
    var newLevel;
    var tingkat = 0;
    var links = '';
    var headings = tocTajuk.querySelectorAll(selectorHeaders);
    var nomor = 0;
    if (headings.length < 1)
      return;
    for (var i = 0; i < headings.length; i++) {
      newLevel = parseInt(headings[i].tagName.slice(1), 10);
      //console.log(`newLevel: ${newLevel}.`);
      if (!headings[i].id) {
        headings[i].id = headings[i].innerHTML.replace( /^[^a-z]+|[^\w:.-]+/gi, '_' ).toLowerCase();
      }
      if ( newLevel > tingkat && primaryHeaderLevels.indexOf(newLevel) !== 0 ) {
        links += '<ul style="list-style-type:none;padding-left:20px;"><li>';
      } else if ( newLevel < tingkat ) {
        var hasil = tingkat - newLevel;
        if ( hasil == 2 ){
          links += '</li></ul></li></ul></li><li>';
        } else if ( hasil == 3 ){
          links += '</li></ul></li></ul></li></ul></li><li>';
        } else if ( hasil == 4 ){
          links += '</li></ul></li></ul></li></ul></li></ul></li><li>';
        } else{
          links += '</li></ul></li><li>';
        }
      } else {
        links += '</li><li>';
      }
      if(headings[i].getAttribute('data-number')){
        nomor = headings[i].getAttribute('data-number');
      }
      links += nomor+' <a href="#' + headings[i].id + '">' + toTitleCase(headings[i].innerHTML) + '</a>';
      tingkat = newLevel;
      
    }
    links += '</li></ul>';
    tocPanel.innerHTML = '<h4 style="text-align:center;margin-top:0;">Table of Contents</h4>' + links;
    function toTitleCase(str) {
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
    };
  }

  // methods v0.0.2
  togglePassword(id) {
    var passwordField = document.querySelector(id);
    var passwordInput = passwordField.querySelector('.pd-input');
    var passwordToggle = passwordField.querySelector('.pd-button');
    passwordToggle.addEventListener('click', function(){
      if(passwordInput.type === 'password'){
        passwordInput.type = 'text';
        passwordToggle.innerHTML = '<i class="pd-icon">visibility_off</i>';
      } else{
        passwordInput.type = 'password';
        passwordToggle.innerHTML = '<i class="pd-icon">visibility</i>';
      }
    })
  }
  downloadLoading(id){
    var downloadButton = document.querySelector(id);
    downloadButton.addEventListener('click', function(){
      window.scrollTo(0, 0);
      var downloadPage = document.createElement("div");
      downloadPage.classList.add('pd-download-page');
      document.body.appendChild(downloadPage);
      document.body.classList.add('pd-download-scrollbar');
      var downloadColumn = '';
      downloadColumn += '<div class="pd-download-top"></div>';
      downloadColumn += '<div class="pd-row" style="margin-top:100px">';
      downloadColumn += '<div class="pd-col-md-4 pd-download-left"></div>';
      downloadColumn += '<div class="pd-col-md-4 pd-download-center"></div>';
      downloadColumn += '<div class="pd-col-md-4 pd-download-right"></div>';
      downloadColumn += '</div>';
      downloadPage.innerHTML= downloadColumn;
      var adTop = document.querySelector('.pd-ad-top');
      if(adTop){
        adTop.classList.remove('pd-hide');
        downloadPage.querySelector('.pd-download-top').appendChild(adTop);
      }
      var adLeft = document.querySelector('.pd-ad-left');
      if(adLeft){
        adLeft.classList.remove('pd-hide');
        downloadPage.querySelector('.pd-download-left').appendChild(adLeft);
      }
      var adRight = document.querySelector('.pd-ad-right');
      if(adRight){
        adRight.classList.remove('pd-hide');
        downloadPage.querySelector('.pd-download-right').appendChild(adRight);
      }
      var downloadLink = downloadButton.getAttribute('data-download-link');
      var downloadTime = downloadButton.getAttribute('data-download-time');
      var downloadBody = downloadPage.querySelector('.pd-download-center');
      var downloadContent = '';
      downloadContent += '<div class="pd-card pd-card-body">';
      downloadContent += '<h1 class="pd-download-count">'+Number(downloadTime)+'</h1>';
      downloadContent += '<p class="pd-download-loading">Please Wait, Download Loading...</p>';
      downloadContent += '<p class="pd-download-button pd-hide"><a href="'+downloadLink+'" class="pd-button pd-button-primary" style="text-decoration:none">Download Again</a><br/><button style="margin-top:10px" class="pd-button pd-button-danger pd-download-close">Cancel</button></p>';
      downloadContent += '</div>';
      downloadBody.innerHTML = downloadContent;
      var downloadCount = downloadBody.querySelector('.pd-download-count');
      var jumlahWaktu = Number(downloadTime);
      setInterval(function(){
        jumlahWaktu--;
        if(jumlahWaktu >= 0){
          downloadCount.innerHTML = jumlahWaktu
        }
        if(jumlahWaktu === 0){
          clearInterval(jumlahWaktu);
          location.assign(downloadLink);
          downloadBody.querySelector('.pd-download-loading').classList.add('pd-hide');
          downloadBody.querySelector('.pd-download-button').classList.remove('pd-hide');
        }
      }, 1000);
      downloadBody.querySelector('.pd-download-close').addEventListener('click', function(){
        downloadPage.classList.add('pd-hide');
        document.body.classList.remove('pd-download-scrollbar');
      })
    })
  }
  demoPage(id) {
    var pageDemo = document.querySelector(id);
    pageDemo.addEventListener('click', function(){
      window.scrollTo(0, 0);
      var createDemo = document.createElement('div');
      createDemo.classList.add('pd-demo-page');
      document.body.classList.add('pd-demo-scrollbar');
      document.body.appendChild(createDemo);
      var contentDemo = '';
      contentDemo += '<div class="pd-demo-nav"><div class="pd-row">';
      contentDemo += '<div class="pd-col-md-6">';
      contentDemo += '<h1 class="pd-demo-title">'+pageDemo.getAttribute('data-demo-title')+'</h1>';
      contentDemo += '</div>';
      contentDemo += '<div class="pd-col-md-5 pd-demo-top">';
      contentDemo += '</div>';
      contentDemo += '<div class="pd-col-md-1 pd-text-right">';
      contentDemo += '<button class="pd-demo-close pd-button pd-button-outline-danger">&times</button>';
      contentDemo += '</div>';
      contentDemo += '</div></div>';
      contentDemo += '<iframe src="'+pageDemo.getAttribute('data-demo-link')+'" class="pd-demo-frame"></iframe>';
      createDemo.innerHTML = contentDemo;
      var adTop = document.querySelector('.pd-ad-top');
      if(adTop){
        adTop.classList.remove('pd-hide');
        createDemo.querySelector('.pd-demo-top').appendChild(adTop);
      }
      var tinggi = createDemo.clientHeight;
      createDemo.querySelector('.pd-demo-frame').style.height = (tinggi - 80) + 'px';
      createDemo.querySelector('.pd-demo-close').addEventListener('click', function(){
        createDemo.classList.add('pd-hide');
        document.body.classList.remove('pd-demo-scrollbar');
      })
    });
  }
  galleryLightbox() {
    var no = 0, datasrc = '', datalightbox = 0;
    var lightLength = document.querySelectorAll('.pd-gallery').length - 1;
    Array.prototype.forEach.call(document.querySelectorAll('.pd-gallery'), function(item){
      item.setAttribute('data-lightbox-item', no++);
      item.onclick = function() {
        datasrc = item.getAttribute('src');
        datalightbox = item.getAttribute('data-lightbox-item');
        lightboxOpen(datasrc, datalightbox);
      }
    })
    function lightboxOpen(src, lightbox) {
      window.scrollTo(0, 0);
      datasrc = src;
      datalightbox = lightbox;
      var lightboxPage = document.createElement('div');
      lightboxPage.classList.add('pd-lightbox');
      document.body.appendChild(lightboxPage);
      document.body.classList.add('pd-lightbox-scrollbar');
      var lightboxContent = '';
      lightboxContent += '<div class="pd-lightbox-nav"><span class="pd-lightbox-close">&times</span></div>';
      if(datalightbox != 0){
        lightboxContent += '<div class="pd-lightbox-prev">&lsaquo;</div>';
      }
      if(datalightbox != Number(lightLength)){
        lightboxContent += '<div class="pd-lightbox-next">&rsaquo;</div>';
      }
      lightboxContent += '<div class="pd-lightbox-image"><img src="'+datasrc+'" height="400"/></div>';
      lightboxContent += '<div class="pd-lightbox-thumbnail"></div>';
      lightboxPage.innerHTML = lightboxContent;
      var lightboxThumbnail = lightboxPage.querySelector('.pd-lightbox-thumbnail');
      for(var i = Number(datalightbox); i < (Number(datalightbox) + 7); i++){
        if(document.getElementsByClassName('pd-gallery')[i]){
          var lightboxThumbnailImage = document.createElement('img');
          lightboxThumbnailImage.setAttribute('src', document.getElementsByClassName('pd-gallery')[i].getAttribute('src'));
          lightboxThumbnailImage.setAttribute('data-lightbox-thumbnail-item', document.getElementsByClassName('pd-gallery')[i].getAttribute('data-lightbox-item'));
          lightboxThumbnail.appendChild(lightboxThumbnailImage);
          lightboxThumbnailImage.onclick = function(e) {
            lightboxPage.classList.add('pd-hide');
            document.body.classList.remove('pd-lightbox-scrollbar');
            var datathumb = e.target.getAttribute('data-lightbox-thumbnail-item');
            datalightbox = Number(datathumb);
            datasrc = document.getElementsByClassName('pd-gallery')[datalightbox].getAttribute('src');
            lightboxOpen(datasrc, datalightbox);
          }
        }
      }
      lightboxPage.querySelector('.pd-lightbox-close').addEventListener('click', function(){
        lightboxPage.classList.add('pd-hide');
        document.body.classList.remove('pd-lightbox-scrollbar');
      })
      if(datalightbox != 0){
        lightboxPage.querySelector('.pd-lightbox-prev').addEventListener('click', function(){
          lightboxPage.classList.add('pd-hide');
          document.body.classList.remove('pd-lightbox-scrollbar');
          var lightboxPrev = Number(datalightbox) - 1; 
          datalightbox = lightboxPrev;
          datasrc = document.getElementsByClassName('pd-gallery')[datalightbox].getAttribute('src');
          lightboxOpen(datasrc, datalightbox);
        })
      }
      if(datalightbox != Number(lightLength)){
        lightboxPage.querySelector('.pd-lightbox-next').addEventListener('click', function(){
          lightboxPage.classList.add('pd-hide');
          document.body.classList.remove('pd-lightbox-scrollbar');
          var lightboxNext = Number(datalightbox) + 1; 
          datalightbox = Number(lightboxNext);
          datasrc = document.getElementsByClassName('pd-gallery')[datalightbox].getAttribute('src');
          lightboxOpen(datasrc, datalightbox);
        })
      }
    }
  }
  modalDialog() {
    Array.prototype.forEach.call(document.querySelectorAll('.pd-modal-open'), function(elem){
      elem.onclick = function() {
        var modalCreate = document.createElement('div');
        modalCreate.classList.add('pd-modal-show');
        document.body.appendChild(modalCreate);
        document.body.classList.add('pd-modal-scrollbar');
        var modalOpen = document.getElementById(elem.getAttribute('data-target'));
        modalCreate.appendChild(modalOpen);
        var modalClose = modalCreate.querySelector('.pd-modal-close');
        modalClose.addEventListener('click', function() {
          elem.parentNode.insertBefore(modalOpen, elem.nextElementSibling);
          modalCreate.remove();
          modalDimiss.remove();
          document.body.classList.remove('pd-modal-scrollbar');
        })
        var modalDimiss = document.createElement('span');
        modalDimiss.classList.add('pd-modal-dimiss');
        modalDimiss.innerHTML = '&times;';
        modalCreate.querySelector('.pd-card-header').appendChild(modalDimiss);
        modalDimiss.addEventListener('click', function() {
          elem.parentNode.insertBefore(modalOpen, elem.nextElementSibling);
          modalCreate.remove();
          modalDimiss.remove();
          document.body.classList.remove('pd-modal-scrollbar');
        })
      }
    })
  }
  titleLink() {
    var titleLink = document.querySelector('.pd-titlelink-input input[type=text]');
    var urlLink = document.querySelector('.pd-titlelink-output input[type=text]');
    var separator = '-';
    var special = {  
      ą:"a",Ą:"A",ę:"e",Ę:"E",ó:"o",Ó:"O",ś:"s",Ś:"S",ł:"l",Ł:"L",
      ż:"z",Ż:"Z",ź:"z",Ź:"Z",ć:"c",Ć:"C",ń:"n",Ń:"N",č:"c",ď:"d",
      ň:"n",ř:"r",š:"s",ť:"t",Š:"S",Œ:"O",Ž:"Z",š:"s",œ:"o",ž:"z",
      Ÿ:"Y",ÿ:"y",µ:"U",À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",Æ:"A",
      Ç:"C",È:"E",É:"E",Ê:"E",Ë:"E",Ì:"I",Í:"I",Î:"I",Ï:"I",Ð:"D",
      Ñ:"N",Ò:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",Ù:"U",Ú:"U",Û:"U",Ü:"U",
      Ý:"Y",ß:"s",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",æ:"a",ç:"c",
      è:"e",é:"e",ê:"e",ë:"e",ì:"i",í:"i",î:"i",ï:"i",ð:"o",ñ:"n",
      ò:"o",ô:"o",õ:"o",ö:"o",ø:"o",ù:"u",ú:"u",û:"u",ü:"u",ý:"y",
      '¥':"Y",'&':"and"
    }
    var max = '';
    titleLink.addEventListener('keyup', function(){
      var editmax = '', txtmax= [], txtspe= [];
      var edittxt = titleLink.value;
      for( var i = 0, j = edittxt.length; i < j; i++ ){
				var c = edittxt.charAt(i);
				if( special.hasOwnProperty(edittxt.charAt(i))){
					txtspe.push(special[c]);
        } else{
					txtspe.push(c);
        }
			}
      var mytxt = txtspe.join('');
      var repsep = mytxt.replace(/^\s+|\s+$/g, "")
				.replace(/[_|\s]+/g, separator )
				.replace(/[^a-zA-z\u0400-\u04FF0-9-%-]+/g, "")
				.replace(/[-]+/g, separator )
				.replace(/^-+|-+$/g, "")
				.replace(/[-]+/g, separator );
      if(max != '' && mytxt.length > max){
        editmax = repsep.substring(0, max);
        txtmax = editmax.split(separator);
        txtmax.pop();
        editmax = txtmax.join(separator);
      } else{
        editmax = repsep;
      }
      var txt = editmax;
      urlLink.value = txt;
    })
  }
  generatePassword() {
    var generatePasswordInput = document.querySelector('.pd-generate-password input');
    var generatePasswordButton = document.querySelector('.pd-generate-password button');
    generatePasswordButton.addEventListener('click', function(){
      var generatePasswordChar = generatePasswordInput.getAttribute('data-generate-password') || '';
      var generatePasswordMax = generatePasswordInput.getAttribute('data-generate-max') || '';
      var characters = '', result = '';
      if(generatePasswordChar == 'all'){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+|~-={}[]:";<>?,./';
      } else if(generatePasswordChar == 'alphabet'){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      } else if(generatePasswordChar == 'uppercase'){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      } else if(generatePasswordChar == 'lowercase'){
        characters = 'abcdefghijklmnopqrstuvwxyz';
      } else if(generatePasswordChar == 'numeric'){
        characters = '1234567890';
      } else if(generatePasswordChar == 'alphanumeric'){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
      } else if(generatePasswordChar == 'special'){
        characters = '!@#$%^&*()_+|~-={}[]:";<>?,./';
      } else if(generatePasswordChar == 'alphaspecial'){
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+|~-={}[]:";<>?,./';
      } else {
        characters = '1234567890!@#$%^&*()_+|~-={}[]:";<>?,./';
      }
      for(var i = 0; i < generatePasswordMax; i++){
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      generatePasswordInput.value = result;
    })
  }

  // getters v0.0.1
  get panel(){
    return this.jendela();
  }
  get slide(){
    return this.headerSlide();
  }
  get gridList(){
    return this.listGrid();
  }
  get filterSearch(){
    return this.searchFilter();
  }
  get tabs(){
    return this.tab();
  }
  get accordionCollapse(){
    return this.collapseAccordion();
  }
  get filterSort(){
    return this.sortFilter();
  }
  get filterPagination(){
    return this.paginationFilter();
  }

  // methods v0.0.1
  jendela() {
    var panel = document.getElementById("panel");
    var pdPanel = document.querySelector(".pd-panel");
    var pdNav = document.querySelector(".pd-nav");
    var pdForm = document.querySelector(".pd-nav-search");
    var pdMenuLeft = document.querySelector(".pd-menu-left");
    var pdMenuRight = document.querySelector(".pd-menu-right");
    panel.addEventListener("click", function(){
      pdPanel.style.display = "block";
      (pdForm)? pdPanel.appendChild(pdForm): "";
      (pdMenuLeft)? pdPanel.appendChild(pdMenuLeft): "";
      (pdMenuRight)? pdPanel.appendChild(pdMenuRight): "";
      pdNav.style.height = "60px";
      pdMenuLeft.style.display = "block";
      pdMenuRight.style.display = "block";
    });
    pdPanel.addEventListener("click", function(){
      pdPanel.style.display = "none";
      (pdMenuLeft)? pdNav.appendChild(pdMenuLeft): "";
      (pdForm)? pdNav.appendChild(pdForm): "";
      (pdMenuRight)? pdNav.appendChild(pdMenuRight): "";
      pdNav.style.height = "auto";
      pdMenuLeft.style.display = "";
      pdMenuRight.style.display = "";
    });
  }
  headerSlide(){
    var headerSlider = document.querySelector('.pd-header-slide');
    var sliderItems = document.querySelector('.pd-slide-items');
    var sliderPrev = document.querySelector('.pd-slide-prev');
    var sliderNext = document.querySelector('.pd-slide-next');
    var sliderPagination = document.querySelector('.pd-slide-pagination');
    var slideWidth = headerSlider.clientWidth;
    var slideHeight = headerSlider.clientHeight;
    var slideLength = sliderItems.children.length;
    sliderItems.style.width = slideWidth * slideLength;
    var slidePagi = '';
    for(var i = 0; i < slideLength; i++){
      sliderItems.children[i].style.width = slideWidth + 'px';
      sliderItems.children[i].style.height = slideHeight + 'px';
      slidePagi += '<a href="#" class="pd-slide-pagi" data-slide="'+i+'"></a>';
    }
    sliderPagination.innerHTML = slidePagi;
    var currentIndex = 0;
    var minIndex = slideLength - 1;
    function gotoIndex(index) {
      if(index < 0){
        currentIndex = minIndex;
      } else if(index > minIndex){
        currentIndex = 0;
      } else{
        currentIndex = index;
      }
      sliderItems.style.left = '-'+ (100 * currentIndex) +'%';
    }
    function movetoIndex(e) {
      e.preventDefault();
      var linkIndex = e.target;
      stopPlayIndex();
      gotoIndex(linkIndex.getAttribute('data-slide'));
      autoPlayIndex();
    }
    var autoIndex;
    function autoPlayIndex() {
      autoIndex = setInterval(function(){
        gotoIndex(currentIndex + 1);
      }, 6000);
    }
    function stopPlayIndex() {
      clearInterval(autoIndex);
    }
    sliderPrev.addEventListener('click', function(){
      gotoIndex(currentIndex - 1);
    })
    sliderNext.addEventListener('click', function(){
      gotoIndex(currentIndex + 1);
    })
    Array.prototype.forEach.call(sliderPagination.children, function (elem) {
      elem.onclick = movetoIndex;
    });
    autoPlayIndex();
    sliderItems.addEventListener('mouseover', function(){
      stopPlayIndex();
    })
    sliderItems.addEventListener('mouseout', function(){
      autoPlayIndex();
    })
  }
  listGrid(){
    let vm = this;
    var listGridFilter = document.querySelector('.pd-filter');
    var listFilterItem = document.querySelector('.pd-list-grid');
    var listButton = document.querySelector('.pd-button-list');
    var listFilter = document.querySelector('.pd-filter-list');
    var gridButton = document.querySelector('.pd-button-grid');
    var gridFilter = document.querySelector('.pd-filter-grid');
    //var listGridItem = document.querySelector('data-product');
    listButton.addEventListener('click', function(e){
      e.preventDefault();
      vm.removeClass(listGridFilter, 'pd-row');
      vm.removeClass(listGridFilter, 'pd-filter-grid');
      vm.addClass(listGridFilter, 'pd-filter-list');
      for(var i = 1;i <= listGridFilter.children.length;i++){
        vm.removeClass(document.querySelector('.pd-list-grid:nth-child('+i+')'), 'pd-col-md-4');
      }
    })
    gridButton.addEventListener('click', function(e){
      e.preventDefault();
      vm.addClass(listGridFilter, 'pd-row');
      vm.addClass(listGridFilter, 'pd-filter-grid');
      vm.removeClass(listGridFilter, 'pd-filter-list');
      for(var i = 1;i <= listGridFilter.children.length;i++){
        vm.addClass(document.querySelector('.pd-list-grid:nth-child('+i+')'), 'pd-col-md-4');
      }
    })
  }
  hasClass(el, className) {
    if (el.classList)
      return el.classList.contains(className)
    else
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  }
  addClass(el, className) {
    if (el.classList)
      el.classList.add(className)
    else if (!this.hasClass(el, className)) el.className += " " + className
  }
  removeClass(el, className) {
    if (el.classList)
      el.classList.remove(className)
    else if (this.hasClass(el, className)) {
      var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
      el.className=el.className.replace(reg, ' ')
    }
  }
  searchFilter() {
    var verticalSearch = document.querySelector('.pd-vertical-filter input[type=search]');
    var horizontalSearch = document.querySelector('.pd-horizontal-filter input[type=search]');
    function searchItem(filter) {
      var inputCase = filter.value.toUpperCase();
      var productCase = document.querySelector('.pd-filter');
      var productItem = productCase.getElementsByClassName('pd-list-grid');
      for(var i = 0; i < productItem.length; i++){
        var titleItem = productItem[i].getElementsByClassName('pd-card-title')[0];
        if(titleItem.innerHTML.toUpperCase().indexOf(inputCase) > -1){
          productItem[i].style.display = "";
        } else{
          productItem[i].style.display = "none";
        }
      }
    }
    if(verticalSearch){
      verticalSearch.addEventListener('keyup', function(){
        searchItem(verticalSearch);
      })
    }
    if(horizontalSearch){
      horizontalSearch.addEventListener('keyup', function(){
        searchItem(horizontalSearch);
      })
    }
  }
  tab() {
    var wrapTabs = document.querySelector('.pd-tabs');
    var activeTabs = 'active';
    var titleTabs = 'pd-tabs-title';
    var contentTabs = 'pd-tabs-content';
    var tabOpen = 0;
    var numTabs = wrapTabs.querySelectorAll('.'+titleTabs).length;
    var init = checkTabs(tabOpen);
    for (var i = 0; i < numTabs; i++) {
      wrapTabs.querySelectorAll('.' + titleTabs)[i].setAttribute('data-tab', i);
      if (i === init) openTabs(i);
    }
    function checkTabs(n) {
      return (n < 0 || isNaN(n) || n > numTabs) ? 0 : n;
    }
    function resetTabs() {
      Array.prototype.forEach.call(wrapTabs.querySelectorAll('.' + contentTabs), function(item) {
          item.style.display = 'none';
      });
      Array.prototype.forEach.call(wrapTabs.querySelectorAll('.' + titleTabs), function(item) {
          item.className = removeTabs(item.className, activeTabs);
      });
    }
    function removeTabs(str, cls) {
      var reg = new RegExp('(\ )' + cls + '(\)', 'g');
      return str.replace(reg, '');
    }
    function openTabs(n) {
      resetTabs();
      var i = checkTabs(n);
      wrapTabs.querySelectorAll('.'+titleTabs)[i].className += ' ' + activeTabs;
      wrapTabs.querySelectorAll('.'+contentTabs)[i].style.display = '';
    }
    wrapTabs.addEventListener('click', function(e){
      if (e.target.className.indexOf(titleTabs) === -1) return;
      e.preventDefault();
      openTabs(e.target.getAttribute('data-tab'));
    });
  }
  collapseAccordion() {
    var elemAccordion, thisAccordion;
    var pdAccordion = document.querySelector('.pd-accordion');
    if(pdAccordion){
      elemAccordion = pdAccordion;
      thisAccordion = true;
    } else{
      elemAccordion = document.querySelector('.pd-collapse');
      thisAccordion = false;
    }
    elemAccordion.addEventListener('click', function(e){
      if (e.target.className.indexOf('pd-accordion-title') === -1) {
        return;
      }
      e.preventDefault();
      if(thisAccordion == true){
        closeAccordion();
      }
      var nextAccordion = e.target.nextElementSibling;
      var height = nextAccordion.scrollHeight;
      if (nextAccordion.style.height === '0px' || nextAccordion.style.height === '') {
        nextAccordion.style.height = height + 'px';
      } else {
        nextAccordion.style.height = 0;
      }
    })
    function closeAccordion(){
      Array.prototype.forEach.call(elemAccordion.querySelectorAll('.pd-accordion-body'), function(item) {
        item.style.height = 0;
      });
    }
    if(thisAccordion == true){
      var target = elemAccordion.querySelectorAll('.pd-accordion-body')[0];
      if (target) {
        if (thisAccordion) closeAccordion();
        target.style.height = target.scrollHeight + 'px';
      }
    }
  }
  sortFilter() {
    var sortList = document.querySelector('.pd-filter');
    var sortValue = document.querySelector('.pd-horizontal-filter select');
    var sortItem = sortList.getElementsByClassName('pd-list-grid');
    document.querySelector('.pd-filter-total').innerHTML = 'Total items: '+sortItem.length;
    sortValue.addEventListener('change', function(){
      var pindah = true, harusPindah, hitungPindah = 0, x, y;
      while (pindah) {
        pindah = false;
        for(var i = 0;i < sortItem.length;i++){
          harusPindah = false;
          x = sortItem[i].getElementsByTagName('p')[0];
          y = sortItem[i + 1].getElementsByTagName('p')[0];
          if(sortValue.value == 'low'){
            if(Number(x.innerHTML) > Number(y.innerHTML)){
              harusPindah = true;
              break;
            }
          } else if(sortValue.value == 'high'){
            if(Number(x.innerHTML) < Number(y.innerHTML)){
              harusPindah = true;
              break;
            }
          } else{

          }
        }
        if (harusPindah) {
          sortItem[i].parentNode.insertBefore(sortItem[i + 1], sortItem[i]);
          pindah = true;
          hitungPindah ++;
        } else{
          if (hitungPindah == 0 && sortValue.value == "low") {
            sortValue.value = "high";
            pindah = true;
          }
        }
      }
    }, false)
  }
  paginationFilter() {
    var pageProduct = document.querySelector('.pd-filter');
    var pageFilter = document.querySelector('.pd-filter-pagination');
    var pageItem = pageProduct.getElementsByClassName('pd-list-grid');
    var pageJumlah = pageFilter.dataset.pagination;
    var pageSemua = pageItem.length;
    var pageBagi = pageSemua / pageJumlah;
    var current = 1;
    for(var j = 0;j < pageItem.length;j++){
      pageItem[j].style.display = 'none';
    }
    if(current == 1){
      pagi();
      pageFPNL(current);
      for(var k = 0;k < 6;k++){
        pageItem[k].style.display = '';
      }
    }
    function pageFPNL(fpnlcurrent){
      if(fpnlcurrent == 1){
        document.querySelector('.pd-pagination-first').style.display = 'none';
        document.querySelector('.pd-pagination-prev').style.display = 'none';
        document.querySelector('.pd-pagination-next').style.display = '';
        document.querySelector('.pd-pagination-last').style.display = '';
      } else if(fpnlcurrent == 2){
        document.querySelector('.pd-pagination-first').style.display = 'none';
        document.querySelector('.pd-pagination-prev').style.display = '';
        document.querySelector('.pd-pagination-next').style.display = '';
        document.querySelector('.pd-pagination-last').style.display = '';
      } else if(fpnlcurrent == (pageBagi.toFixed(0) - 1)){
        document.querySelector('.pd-pagination-first').style.display = '';
        document.querySelector('.pd-pagination-prev').style.display = '';
        document.querySelector('.pd-pagination-next').style.display = '';
        document.querySelector('.pd-pagination-last').style.display = 'none';
      } else if(fpnlcurrent == pageBagi.toFixed(0)){
        document.querySelector('.pd-pagination-first').style.display = '';
        document.querySelector('.pd-pagination-prev').style.display = '';
        document.querySelector('.pd-pagination-next').style.display = 'none';
        document.querySelector('.pd-pagination-last').style.display = 'none';
      } else{
        document.querySelector('.pd-pagination-first').style.display = '';
        document.querySelector('.pd-pagination-last').style.display = '';
        document.querySelector('.pd-pagination-prev').style.display = '';
        document.querySelector('.pd-pagination-next').style.display = '';
      }
    }
    var pagePagi = document.querySelector('.pd-pagination');
    Array.prototype.forEach.call(pagePagi.children, function (elem) {
      elem.onclick = function(e){
        e.preventDefault();
        var link = e.target.getAttribute('data-pagitem');
        if(link == 'first' || link == 'prev' || link == 'next' || link == 'last'){
          pageButton(link, current);
        } else{
          pageMove(link);
        }
      };
    });
    function pageButton(button, index){
      var btnone = 1, btncurrent;
      if (button == 'first') {
        pageMove(btnone);
      } else if(button == 'prev'){
        if(index != 0){
          btncurrent = (index + 1) - 1;
          pageMove(btncurrent);
        } else{
          pageMove(btnone);
        }
      } else if(button == 'next'){
        if(index > pageBagi.toFixed(0)){
          pageMove(pageBagi.toFixed(0));
        } else{
          btncurrent = (index + 1) + 1;
          pageMove(btncurrent);
        }
      } else if(button == 'last'){
        pageMove(pageBagi.toFixed(0));
      } else{
        pageMove(index);
      }
    }
    function pageMove(index){
      if (index < 1 ) {
        current = pageBagi.toFixed(0);
      } else if (index > pageBagi.toFixed(0)) {
        current = 1;
      } else {
        current = index - 1;
      }
      Array.prototype.forEach.call(pagePagi.getElementsByClassName('pd-pagination-link'), function(item) {
        item.classList.remove('active');
      });
      pagePagi.getElementsByClassName('pd-pagination-link')[current].classList.add('active');
      var jumlahPagi = Number(pageJumlah) * current;
      var jumlahProduct = jumlahPagi + Number(pageJumlah);
      if(jumlahProduct >= Number(pageItem.length)){
        jumlahProduct = Number(pageItem.length);
      }
      pageFPNL(current + 1);
      for(var m = 0;m < pageItem.length;m++){
        pageItem[m].style.display = 'none';
      }
      for(var l = jumlahPagi;l < jumlahProduct;l++){
        pageItem[l].style.display = '';
      }
    }
    function pagi(){
      var pageContent = '';
      pageContent += '<a href="#" class="pd-pagination-item pd-pagination-first" data-pagitem="first">&laquo;</a>';
      pageContent += '<a href="#" class="pd-pagination-item pd-pagination-prev" data-pagitem="prev">&#10094;</a>';
      for(var i = 1;i <= pageBagi.toFixed(0);i++){
        if(i == current){
          pageContent += '<a href="#" class="pd-pagination-item pd-pagination-link active" data-pagitem="'+i+'">'+i+'</a>';
        }
        if(i != current ){
          pageContent += '<a href="#" class="pd-pagination-item pd-pagination-link" data-pagitem="'+i+'">'+i+'</a>';
        }
      }
      pageContent += '<a href="#" class="pd-pagination-item pd-pagination-next" data-pagitem="next">&#10095;</a>';
      pageContent += '<a href="#" class="pd-pagination-item pd-pagination-last" data-pagitem="last">&raquo;</a>';
      pageFilter.innerHTML = '<div class="pd-pagination">'+pageContent+'</div>';
    }
  }
}
