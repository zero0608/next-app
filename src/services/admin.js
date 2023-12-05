// base URl for all api calls
const baseURl = `http://localhost:5000`;

// Block login,register
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
    } catch (error) {
        return error;
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
};

export const register = async (formData) => {
    try {
        const res = await fetch(`${baseURl}/auth/register`, {
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
    } catch (error) {
        return error;
    }
}

// Service User
export const getUser = async (token) => {
    try {
        const res = await fetch(`${baseURl}/users`, {
            method: 'GET',
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
};

// Service Category

export const getCate = async (params, searchParams, baseUrl) => {
    const pageNumner = params?.slug?.[0]?.[0] ?? 1,
        limit = params?.slug?.[1]?.[1] ?? 10,
        searchTerm = (searchParams.search != undefined) ? searchParams.search : null;
    try {
        let url = `cate/${pageNumner}/${limit}`;

        if (searchTerm !== null) {
            url += `?search=${encodeURIComponent(searchTerm)}`;
        }

        const res = await fetch(`${baseURl}/${url}`, {
            method: 'GET',
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