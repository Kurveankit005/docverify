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

export const verifypan=async(req:any,res:any)=>{
        try {
            const {pan} = req.body;

            const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
            let panarray= panRegex.test(pan);


            let returnobj={
                "status":true,
                "code":200,
                "panstatus":panarray,
                "message":"pan is valid",
            }

            res.send(returnobj)    

        } catch (error) {
            
            let returnobj={
                "status":false,
                "code":500,
                "error":error,
                "message":"pan is not valid",
            }
            res.send(returnobj);
        }
}

export const verifyadhar=async(req:any,res:any)=>{
    try {
        
          const {adhar}=req.body;
          
          const adharRegex = /^[0-9]{12}$/;
          let adhararray= adharRegex.test(adhar);
          let returnobj={
            "status":true,
            "code":200,
            "adharstatus":adhararray,
            "message":"adhar is valid"
          }

          res.send(returnobj);

    } catch (error) {
            
        let returnobj={
            "status":false,
            "code":500,
            "error":error,
            "message":"Method Not Allowed",
        }
        res.send(returnobj);
    }
}