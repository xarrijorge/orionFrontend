import axios from 'axios';
const URL = 'ENDPOINT/api/property/add'

const signUp = async (formData) => {
    const { propertyName, units, location } = formData;

    try {
        const response = await axios.post(URL, {
            propertyName,
            units,
            location,
        });

        return response.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export default signUp;