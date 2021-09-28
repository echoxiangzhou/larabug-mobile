import config from "@/config";
import CryptoJS from "crypto-js";

class Crypto {
    encrypt(text: string) {
        return CryptoJS.AES.encrypt(text, config.key).toString();
    }

    decrypt(cipher: any) {
        if (!cipher) {
            return '';
        }

        try {
            const bytes = CryptoJS.AES.decrypt(cipher, config.key);
            return bytes.toString(CryptoJS.enc.Utf8);
        } catch (error) {
            return '';
        }
    }
}

export default Crypto;