import convict from 'convict';


const config = convict({
    julie: {
        apiToken: {
            doc:     'The julie API token',
            default: null,
            format:  String,
            env:     'julie_API_TOKEN'
        }
    }
});


export default config;
