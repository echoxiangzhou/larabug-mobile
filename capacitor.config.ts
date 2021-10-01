import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
    appId: 'com.larabug.app',
    appName: 'LaraBug',
    webDir: 'dist',
    bundledWebRuntime: false,

    plugins: {
        PushNotifications: {
            presentationOptions: ["badge", "sound", "alert"],
        },
        SplashScreen: {
            "launchShowDuration": 3000,
            "backgroundColor": "#EC3D5E",
            "androidSplashResourceName": "splash",
            "androidScaleType": "CENTER_CROP",
            "showSpinner": false,
            "splashFullScreen": true,
            "splashImmersive": true
        },
    },
};

export default config;
