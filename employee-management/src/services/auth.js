import api from "./api";

export async function requestAccessCode(phoneNumber) {
    try {
        const res = await api.post("/createNewAccessCode", { phoneNumber });
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
}

export async function validateAccessCode(phoneNumber, accessCode) {
    try {
        const res = await api.post("/validateAccessCode", { phoneNumber, accessCode });
        return res.data.success;
    } catch (err) {
        console.error(err);
        return false;
    }
}
