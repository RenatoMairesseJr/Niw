import React, { useEffect } from 'react';
import ButtonAppBar from './Components/AppBar';
import { MenuService } from './Services/MenuServices';

export default function NavMenu() {

    const [states, setStates] = React.useState({
        menuList: [],
        name: "'"
    });

    useEffect(() => {
        MenuService.fetchUserData()
            .then(d => {

                if (d.status === 0) {
                    setStates({ menuList: d.dataReturn.menuList, name: d.dataReturn.name });
                }
                
            })
            .catch(err => {
                console.log(err);
                setStates({ name: "Undefined" });
            });
    }, [])

    return (
        <ButtonAppBar
            menuList={states.menuList}
            name={states.name}
        />
    );
}



