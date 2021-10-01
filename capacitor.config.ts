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
    },
};

export default config;
