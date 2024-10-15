// resources.js
const pathToFolderImage = '/static/media';  // Define la ruta base correcta con 'static/media'

const resources = {
    images: {
        bqBluetooth: `${pathToFolderImage}/blocks/bqmod03.png`,
        ottoMain: `${pathToFolderImage}/otto.jpg`,
        ottoEmoji: `${pathToFolderImage}/otto_emoji.png`,
        declararModular: `${pathToFolderImage}/DECLARARMODULAR.png`,
        leerModular: `${pathToFolderImage}/LEERMODULAR.png`,
        escribirModular: `${pathToFolderImage}/ESCRIBIRMODULAR.png`,
        sensorNoise: `${pathToFolderImage}/sensor_noise.png`,
        sensorUltrasound: `${pathToFolderImage}/sensor_ultrasound.png`,
        declararCarlitto: `${pathToFolderImage}/DECLARARCARLITO.png`,
        pararCarlitto: `${pathToFolderImage}/PARARCARLITO.png`,
        movimientoCarlitto: `${pathToFolderImage}/MOVIMIENTOCARLITO.png`,
        bqmod03: `${pathToFolderImage}/blocks/bqmod03.png`,
        quote0: `${pathToFolderImage}/blocks/quote0.png`,
        quote1: `${pathToFolderImage}/blocks/quote1.png`,
    },
    dimensions: {
        bqBluetooth: { width: 208, height: 100 },
        bqmod03: { width: 208, height: 100 },
        ottoMain: { width: 30, height: 30 },
        ottoEmoji: { width: 30, height: 30 },
        sensorNoise: { width: 33, height: 33 },
        declararModular: { width: 30, height: 30 },
        leerModular: { width: 30, height: 30 },
        declararCarlitto: { width: 30, height: 30 },
        escribirModular: { width: 30, height: 30 },
        sensorUltrasound: { width: 25, height: 15 },
        pararCarlitto: { width: 30, height: 30 },
        movimientoCarlitto: { width: 30, height: 30 },
        quote0: { width: 12, height: 12 },
        quote1: { width: 12, height: 12 },
    }
};

export default resources;
