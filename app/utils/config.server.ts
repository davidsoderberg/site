import https from 'https';
import { config as dotConfig } from "dotenv";
dotConfig();
interface config {
  PREVIEW_SECRET: string;
  RAINDROP_CLIENT_ID: string;
  RAINDROP_CLIENT_SECRET: string;
  RAINDROP_COLLECTION_ID: string;
}

export const getConfig = async () => {
  const config: config = await new Promise(function (resolve, reject) {
    https
      .get(
        `https://${process.env.DOPPLER_SERVICE_TOKEN}@api.doppler.com/v3/configs/config/secrets/download?format=json`,
        (res) => {
          let secrets = '';
          res.on('data', (data) => (secrets += data));
          res.on('end', () => resolve(JSON.parse(secrets)));
        }
      )
      .on('error', (e) => reject(e));
  });
  return config;
};
