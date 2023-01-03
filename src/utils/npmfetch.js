const algoliasearch = require('algoliasearch');
const algolia = algoliasearch(
    'OFCNCOG2CU',
    'f54e21fa3a2a0160595bb058179bfb1e',
    {
        protocol: 'https:',
    }
);
const npm = algolia.initIndex('npm-search');
const URL_JSDELIVR = 'https://data.jsdelivr.com/v1';

const $fetch = async (url, options) => {
    try {
        const response = await fetch(url, options);
        return response.json();
    } catch (error) {
        return [error];
    }
};

function $get(query, options) {
    return $fetch(
        URL_JSDELIVR + query,
        Object.assign({}, options, {
            method: 'GET',
        })
    );
}

async function $search(query, page, hitsPerPage) {
    // return Promise.resolve().then(() => {
    // let parsed = parseQuery(query);
    const options = {
        page,
        hitsPerPage,
        attributesToHighlight: [],
        attributesToRetrieve: [
            'deprecated',
            'description',
            'githubRepo',
            'homepage',
            'keywords',
            'license',
            'name',
            'objectID',
            'owner',
            'version',
            'popular',
            'created',
            'modified',
            'lastPublisher',
            'changelogFilename',
        ],
        analyticsTags: ['jsdelivr'],
    };
    // "query=vue
    // &page=0&hitsPerPage=10&attributesToHighlight=%5B%5D&attributesToRetrieve=%5B%22deprecated%22%2C%22description%22%2C%22githubRepo%22%2C%22homepage%22%2C%22keywords%22%2C%22license%22%2C%22name%22%2C%22objectID%22%2C%22owner%22%2C%22version%22%2C%22popular%22%2C%22created%22%2C%22modified%22%2C%22lastPublisher%22%2C%22changelogFilename%22%5D&optionalFacetFilters=%5B%22_searchInternal.popularAlternativeNames%3Avue%22%5D"

    // if (parsed.facetFilters) {
    //     options.facetFilters = parsed.facetFilters;
    // }
    // {"query":"","page":0,"hitsPerPage":10,"attributesToHighlight":[],"attributesToRetrieve":["deprecated","description","githubRepo","homepage","keywords","license","name","objectID","owner","version","popular","created","modified","lastPublisher","changelogFilename"],"optionalFacetFilters":"keyswords[vue]"}:

    // THIS IS IT
    // options.facetFilters = [
    //     'keywords:vuejs',
    //     'keywords:plugin',
    //     'keywords:stripe',
    // ];

    // options.facetFilters = [{ keywords: ['vue'] }];

    // {"query":"","page":0,"hitsPerPage":10,"attributesToHighlight":[],"attributesToRetrieve":["deprecated","description","githubRepo","homepage","keywords","license","name","objectID","owner","version","popular","created","modified","lastPublisher","changelogFilename"],"facetFilters":[{"keywords":["vue"]}]}:

    // query += 'vue';
    try {
        return npm.search(query, options).then(response => {
            // An exact match should always come first.
            // response.hits.sort((a, b) => {
            //     return a.name === parsed.query ? -1 : b.name === parsed.query;
            // });

            return {
                response,
                query,
            };
        });
    } catch (error) {
        return error;
    }
    // });
}

// module.exports.getByName = name => {
//     return npm.getObject(name).then(pkg => {
//         return $.extend(true, {}, pkg);
//     });
// };

// const ATTR_REGEXP = /\s*(?:[a-z]+)\s*:\s*(?:.(?![a-z]*\s*:))*/gi;
// const QUERY_REGEXP = /^((?:(?:[^\s:]+(?![a-z]*\s*:))\s*)*)/i;
// const filterMapping = {
//     author: 'owner.name',
//     type: 'moduleTypes',
// };

// function parseQuery(queryString) {
//     let query = queryString.match(QUERY_REGEXP)[0].trim();
//     let substr = queryString.substr(query.length);
//     let filters = [];
//     let match;

//     while ((match = ATTR_REGEXP.exec(substr)) !== null) {
//         let temp = match[0].split(':');

//         if (filterMapping[temp[0].trim()]) {
//             filters.push(filterMapping[temp[0].trim()] + ':' + temp[1].trim());
//         }
//     }

//     return {
//         query,
//         facetFilters: filters.join(','),
//     };
// }

export default {
    $get,
    $search,
};

// export default {
//     npm: $npm,
//     install: (Vue, options) => {
//         Object.assign(opts, options);
//         Vue.prototype.$npm = {
//             search,
//         };
//     },
// };
