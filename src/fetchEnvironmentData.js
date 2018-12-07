import sensor from 'node-dht-sensor';

const DTH_11 = 11;
const READ_PIN = 4;

export default () => {
  return new Promise((resolve, reject) => {
    sensor.read(DTH_11, READ_PIN, function (err, temperature, humidity) {
      if (!err) {
        return resolve({
          temperature,
          humidity
        });
      }
      reject(err);
    });
  });
}
