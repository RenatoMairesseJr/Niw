import React, { useEffect } from 'react';
import ButtonAppBar from './Components/AppBar';
import { MenuService } from './Services/MenuServices';

export default function NavMenu() {

    const [states, setStates] = React.useState({
        fullName: "",
        userType: "",
        menuList: []
    });

    useEffect(() => {
        MenuService.fetchUserData()
            .then(d => {
                setStates({ fullName: d.fullName, userType: d.userType, menuList: d.menuList });
            })
            .catch(err => {
                console.log(err);
                setStates({ fullName: "Undefined" });
            });
    }, [])

    return (
        <ButtonAppBar
            fullName={states.fullName}
            userType={states.userType}
            menuList={states.menuList}
        />
    );
}



