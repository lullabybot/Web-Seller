const logReq = ((req, res, next) => {
    try {
        console.log('terjadi request ke Path: ', req.path);
        next();
    } catch (error) {
        // Menampilkan error jika terjadi kesalahan
        console.error('Terjadi kesalahan:', error);
        res.status(500).json({ error: 'Terjadi kesalahan dalam server' });
    }
});

export default logReq;
