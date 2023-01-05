export default ([name, version]) => {
    if (!name) return '';

    name = name.toString();

    if (version) {
        version = `-${version.toString()}`;
    }

    return `https://registry.npmjs.org/${name}/-/${name}${version}.tgz`;
};
