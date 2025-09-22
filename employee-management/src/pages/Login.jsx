import { useState } from "react";
import { requestAccessCode, validateAccessCode } from "../services/auth";

function Login() {
    const [phone, setPhone] = useState("");
    const [code, setCode] = useState("");
    const [step, setStep] = useState(1); // 1: nhập phone, 2: nhập code

    const handleRequestCode = async () => {
        await requestAccessCode(phone);
        setStep(2);
    };

    const handleValidateCode = async () => {
        const success = await validateAccessCode(phone, code);
        if (success) {
            localStorage.setItem("phone", phone);
            window.location.href = "/dashboard";
        }
    };

    return (
        <div>
            {step === 1 && (
                <>
                    <input
                        placeholder="Enter phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <button onClick={handleRequestCode}>Request Code</button>
                </>
            )}

            {step === 2 && (
                <>
                    <input
                        placeholder="Enter access code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                    />
                    <button onClick={handleValidateCode}>Login</button>
                </>
            )}
        </div>
    );
}

export default Login;
