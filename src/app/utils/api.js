import Axios from 'axios';

module.exports = {
    fetchSources: function (category) {
        var encodedURI = window.encodeURI('https://newsapi.org/v1/sources?category=' + category);

        return Axios.get(encodedURI)
            .then(function (response) {
                // console.log('hey', response)
                return response.data.sources;
            })
    }
}


