import config from '~/config'
import { Stack as _Stack } from "contentstack";

export default {
    getEntry({contentType = "hoime", reference}){   
    const data = new Promise((resolve, reject) => {
            if(config.contentstack.api_key && config.contentstack.access_token && config.contentstack.environment){
                //initializing contentstack sdk
                var Stack = _Stack({
                    api_key: config.contentstack.api_key,
                    access_token:config.contentstack.access_token,
                    environment: config.contentstack.environment
                });
                //Query
                Stack.ContentType(contentType).Query()
                    .includeReference(reference)
                    .toJSON()
                    .find()
                    .then(function success(result) {
                        if(result){
                            resolve(result[0][0])
                        }else{
                            return reject("Internal Error")
                        }
                    }, function error(error) {
                        return reject("Internal Error")
                    })
                    .catch((err) => {console.log(err)});
            }else{
                return reject("Please provide valid config parameters")
             }

    })
    return data
   }
}
