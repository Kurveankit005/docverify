import connection from './db'; // Import the database connection

export const verifyPan = async (req: any, res: any) => {
    try {
        const { pan } = req.body;

        if (!pan) {
            throw new Error('Pan number is required');
        }

        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        const isValidPan = panRegex.test(pan);

        const returnObj = {
            "status": isValidPan,
            "code": isValidPan ? 200 : 400,
            "panStatus": isValidPan,
            "message": isValidPan ? "Pan is valid" : "Pan is not valid",
        }

        res.send(returnObj);

    } catch (error) {
        const returnObj = {
            "status": false,
            "code": 500,
            "error": error,
            "message": "Internal Server Error",
        }
        res.status(500).send(returnObj);
    }
}

export const verifyAdhar = async (req: any, res: any) => {
    try {
        const { adhar } = req.body;

        if (!adhar) {
            throw new Error('Adhar number is required');
        }

        const adharRegex = /^[0-9]{12}$/;
        const isValidAdhar = adharRegex.test(adhar);

        const returnObj = {
            "status": isValidAdhar,
            "code": isValidAdhar ? 200 : 400,
            "adharStatus": isValidAdhar,
            "message": isValidAdhar ? "Adhar is valid" : "Adhar is not valid",
        }

        res.send(returnObj);

    } catch (error) {
        const returnObj = {
            "status": false,
            "code": 500,
            "error": error,
            "message": "Internal Server Error",
        }
        res.status(500).send(returnObj);
    }
}

export const getData = async (req: any, res: any) => {
    try {
        const [rows] = await connection.promise().query('SELECT * FROM your_table_name'); // Replace with your actual table name
        res.json(rows);
    } catch (error) {
        res.status(500).json({
            status: false,
            code: 500,
            error: error,
            message: "Internal Server Error",
        });
    }
}
