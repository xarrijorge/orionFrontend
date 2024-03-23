import axios from 'axios';
const URL = 'ENDPOINT'

export const createProperty = async (formData) => {
    try {
        // Make POST request to create property
        const response = await axios.post('/properties', formData);
        return response.data; // Return response data (e.g., newly created property details)
    } catch (error) {
        // Handle error
        if (error.response) {
            // Server responded with an error status code
            console.error('Server responded with error:', error.response.data);
            throw new Error(error.response.data.message); // Throw custom error message
        } else if (error.request) {
            // The request was made but no response was received
            console.error('No response received:', error.request);
            throw new Error('No response received from server.'); // Throw custom error message
        } else {
            // Other error occurred
            console.error('Error:', error.message);
            throw new Error('An error occurred while processing the request.'); // Throw custom error message
        }
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

