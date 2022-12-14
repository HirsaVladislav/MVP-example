import fs from "fs";
import { pipeline } from "stream";
import * as url from 'url';

export const getPresenter = (req, res) => {
  const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
  res.setHeader('Content-Type', 'application/javascript');
  const readStream = fs.createReadStream(__dirname + '../../presenter/index.js');
  pipeline(readStream, res, (err) => err && console.log(err));
};