const GREETING = 'Rodolphe';

module.exports = async (req, res) => {
    res.send({
        greeting: GREETING,
    });
};
