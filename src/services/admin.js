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
        
        return {
            status: res.status,
            data: data
        }
    } catch (err) {
        return err;
    }
};

export const validateToken = async (token) => {
    try {
         const res = await fetch(`${baseURl}/auth/validateToken`, {
            method: 'POST',
            headers: {
                x_authorization: token.accessToken
            }
        })
        const data = await res.json();
        
        return {
            status: res.status,
            data: data
        }
    } catch (error) {
        return error;
    }
}


