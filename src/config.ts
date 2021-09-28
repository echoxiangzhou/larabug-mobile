export default {

    /**
     * The key is used for encrypting / decrypting stuff
     */
    key: process.env.VUE_APP_KEY,

    /**
     * Version number being displayed in the app
     */
    version: process.env.VUE_APP_VERSION,

    /**
     * API url used in the services
     */
    apiUrl: process.env.VUE_APP_API_URL,

}