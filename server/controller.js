
module.exports = {
    read: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.get_listings()
            .then(listings => res.status(200).send(listings))
            .catch(() => res.status(500).send('error'));
    },
    create: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { property_name, address, city, state, zip } = req.body;

        dbInstance.create_listing([property_name, address, city, state, zip])
            .then(() => res.status(200).send('all good'))
            .catch(() => res.status(500).send());
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;

        dbInstance.delete_listing([params.id])
            .then(() => res.status(200).send('all good'))
            .catch(() => res.status(500).send());
    }
};