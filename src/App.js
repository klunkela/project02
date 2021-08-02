import './App.css';
import {usersAPI} from "./api/usersApi";
import Wrapper from "./Wrapper";

function App() {
    let ava = "https://via.placeholder.com/600/92c952"
    let testt = () => {

    }

    let show = () => {
        usersAPI.getUsers()
            .then(response => {
                console.log(response.data);
            });
    }

    let add = () => {
        usersAPI.addUser("zz", "xx", "zxc", "zxc", ava, "zz")
    }

    let add2 = () => {
        usersAPI.addUser("zxz", "xxx", "zxc", "cxc", ava, "zz")
    }

    let update = () => {
        usersAPI.updateUser(11, "zxz312", "x312xx", "zxc", "213cxc", ava, "zz")
    }


    return (
        <div>
            xD
            <button onClick={add}>add</button>
            <button onClick={add2}>add2</button>
            <button onClick={show}>show</button>
            <button onClick={update}>update</button>
            <button onClick={testt}>test</button>
<Wrapper/>
        </div>
    );
}

export default App;
