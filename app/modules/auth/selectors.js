const helloWorldEndpoint = state => (`${state.config.serviceHost}/lambda-service-template/helloworld`);
const engineersOnlyEndpoint = state => (`${state.config.serviceHost}/lambda-service-template/engineersonly`);
export default {
	helloWorldEndpoint,
	engineersOnlyEndpoint
};
