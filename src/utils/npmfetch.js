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

// JSDelivr API
// https://github.com/jsdelivr/data.jsdelivr.com
async function $get(query, options) {
    try {
        const response = await fetch(
            URL_JSDELIVR + query,
            Object.assign({}, options, {
                method: 'GET',
            })
        );
        return response.json();
    } catch (error) {
        return [error];
    }
}

// Get single npm package by name
async function $package(name) {
    try {
        return await npm.getObject(name);
    } catch (error) {
        return [error];
    }
}

// Get list npm packages by name, keysword, author
async function $search(query, page, hitsPerPage) {
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
            'repository',
            'lastPublisher',
            'changelogFilename',
        ],
        analyticsTags: ['jsdelivr'],
    };
    try {
        return npm.search(query, options).then(response => {
            return {
                response,
                query,
            };
        });
    } catch (error) {
        return [error];
    }
}

export default {
    $search,
    $get,
    $package,
};
