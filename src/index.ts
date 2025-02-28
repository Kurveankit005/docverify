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