// base URl for all api calls
const baseURl = `http://localhost:5000`;

export const login = async (formData) => {
    try {
        const res = await fetch(`${baseURl}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)

        })

        const data = await res.json();
        
        return data
    } catch (err) {
        console.log('Have a error when call api. Internal Server Error' + err);
    }
}