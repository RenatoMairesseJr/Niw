import { FetchService } from "../../../shared/services/FetchService"
import { AppConfig } from "../../../shared/helpers/AppConfig";

const baseUrl = AppConfig.API_BASE_URL;
//const adviserCodesUrl = `${baseUrl}/api/UserDatas/GetUserData`;
const adviserCodesUrl = `http://localhost:8080/api/UserMenu/GetUserMenu`;

const fetchUserData = async () => {
    let response = await FetchService.fetchGet(adviserCodesUrl);
    if (response.status === 403) throw response;
    return await response.json();
}

export const MenuService = {
    fetchUserData,
}