// The location argument will be the path of the current route
export default (location) => {
    let title = '';

    // Add any path matching regex here to change the page title
    switch (true) {
    case /test/.test(location):
        title = 'Microservices Test';
        break;
    default:
        title = 'Microservices';
        break;
    }

    return title;
};
