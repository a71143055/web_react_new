import React, {useState} from "react";
import "./SignUp.css"

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("남자");
    const [interests, setInterests] = useState("");

    const handleChange = (event) => {
        const{target} = event;
        switch (target.id) {
            case "name":
                setName(target.value);
                break;
            case "email":
                setEmail(target.value);
                break;
            case "password":
                setPassword(target.value);
                break;
            case "gender":
                setGender(target.value);
                break;
            case "interests":
                setInterests(target.value);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`
        이름: ${name}
        이메일: ${email}
        비밀번호: ${password}
        성별: ${gender}
        관심사: ${interests}
        `);
    }

    return(
        <div className={"signup-container"}>
            <h2>회원가입</h2>
            <form onSubmit={handleSubmit} className="signup-form">
                <label>
                    이름:
                    <input
                        type="text"
                        value={name}

                    />
                </label>
                <button></button>
                <label>
                    이메일:
                </label>
                <button></button>
                <label>
                    비밀번호:
                </label>
                <button></button>
                <label>
                    성별:
                </label>
                <button></button>
                <label>
                    관심사:
                </label>
                <button></button>
            </form>
        </div>
    );
}

export default SignUp;