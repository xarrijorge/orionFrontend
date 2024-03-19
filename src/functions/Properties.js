import axios from 'axios';
const URL = 'ENDPOINT'

export const addProperty = async (formData) => {
    const { firstName, lastName, email, country, password, confirmPassword } = formData;

    if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
    }
    try {
        const response = await axios.post(URL, {
            firstName,
            lastName,
            email,
            country,
            password,
        });

        console.log('Signup successful:', response.data);
        return response.data;
    } catch (error) {
        console.error('Signup failed:', error);
        throw error;
    }
};


export const updateProperty = async (formData) => {
    const { propertyName, units, location } = formData;

    try {
        const response = await axios.put(URL, {
            propertyName,
            units,
            location,
        });

        console.log('Property updated:', response.data);
        return response.data;
    } catch (error) {
        console.error('Property update failed:', error);
        throw error;
    }
}

export const archivePrperty = async (formdata) => {
    const { propertyId, propertyName, units, location } = formdata

    try {
        const response = await axios.put(`${URL}/${propertyId}/archive`, {
            propertyName,
            propertyId,
            units,
            location,
            ...formdata
        })

        return response
    } catch (error) {
        return error
    }

}

