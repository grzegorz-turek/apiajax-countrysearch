'use strict';
(function(){
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = document.getElementById('countries');
    //var countriesProperty = document.getElementById('countriesprops');

    document.getElementById('search').addEventListener('click', searchCountries); // znowu wywołanie funkcji bez ()???

    function searchCountries() {
        var countryName = document.getElementById('country-name').value;
       if(!countryName.length) {countryName = 'Poland'};
       
       fetch(url + countryName)
            .then(function(resp) {
                return resp.json();
            })
            .then(showCountriesList); // wywołanie funkcj bez ()???
    }

    function showCountriesList(resp) {
        countriesList.innerHTML = '';

        resp.forEach(function(index) {
            createLi('hEL', 'h3', index.name, '');
            createLi('liEL', 'li', index.capital, 'Capital City: ');
            createLi('liEL', 'li', index.population, 'Population: ');
            createLi('liEL', 'li', index.area, 'Area: ');
        });
    }
    
    function createLi(nodeCatcher, node, key, description) {
        var nodeCatcher = document.createElement(node);
        nodeCatcher.innerText = description + key;
        countriesList.appendChild(nodeCatcher); // Dlacego nie mogę podłączyć do countriesProperty
    }
    
/*
            resp.forEach(function(index) {
                var hEl = document.createElement('h3');
                hEl.innerText = index.name;
                countriesList.appendChild(hEl);
    
                createLi(index.capital, 'Capital City');
                createLi(index.population, 'Population');
                createLi(index.area, 'Area');
            });
        }
    
        function createLi(key, description) {
            var liEl = document.createElement('li');
            liEl.innerText = description + ': ' + key;
            countriesList.appendChild(liEl); // Dlacego nie mogę podłączyć do countriesProperty
        }
*/
/*
        resp.forEach(function(index) {
            var hEl = document.createElement('h3');
            hEl.innerText = index.name;
            countriesList.appendChild(hEl);
            var keyList = Object.keys(resp[0]);
            var ValueList = Object.values(resp[0]);
            console.log(ValueList);
            //console.log(keyList);
        });
*/
/*
            for (var i = 0; i < resp[0].length; i++) {
                var keyList = Object.keys(resp[i]);
                var ValueList = Object.values(resp[i]);
    
                createLi(ValueList[i], keyList[i]);
            }
        });
*/
/*
        resp.forEach(function(item) {
            var hEl = document.createElement('h3');
            hEl.innerText = item.name;
            countriesList.appendChild(hEl);
            var keyList = Object.keys(resp[0]);
            for (var i = 1; i <= keyList.length; i++) {
                var fullkey = ('item.' + keyList[i]).value;
                createLi(fullkey, keyList[i]);
            }
        });
*/    
})();


