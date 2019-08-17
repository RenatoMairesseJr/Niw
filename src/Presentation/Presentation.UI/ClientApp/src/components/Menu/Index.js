import React, { useEffect } from 'react';
import ButtonAppBar from './Components/AppBar';
import { MenuService } from './Services/MenuServices';

export default function NavMenu() {

    const [states, setStates] = React.useState({
        menuList: []//["Home", "About"]
    });

    useEffect(() => {
        MenuService.fetchUserData()
            .then(d => {

                if (d.status === 0) {
                    setStates({ menuList: d.dataReturn.menuList });
                }
                
            })
            .catch(err => {
                console.log(err);
                setStates({ fullName: "Undefined" });
            });
    }, [])

    return (
        <ButtonAppBar
            menuList={states.menuList}
        />
    );
}



