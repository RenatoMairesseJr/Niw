import { FetchService } from "../../../shared/services/FetchService"
import { AppConfig } from "../../../shared/helpers/AppConfig";

const baseUrl = AppConfig.API_BASE_URL;
//const adviserCodesUrl = `${baseUrl}/api/UserDatas/GetUserData`;
const apiUrl = `http://localhost:5000/api/NumberIntoWords/`;

const convertNumber = async (name, number) => {
    let response = await FetchService.fetchGet(apiUrl + name + "/"+number);
    if (response.status === 403) throw response;
    return await response.json();
}

export const HomeService = {
    convertNumber
}