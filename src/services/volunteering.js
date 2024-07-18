import { apiClient } from "./config";

export const apiGetVolunteering = async () => {
    return apiClient.get("/volunteering");
};

export const apiAddVolunteering = async (payload) => {
    return apiClient.post("/volunteering", payload);
};

export const apiGetVolunteeringById = async (id) => {
    return apiClient.get(`/volunteering/${id}`);
};

export const apiUpdateVolunteering = async (id) => {
    return apiClient.patch(`/volunteering/${id}`);
};

export const apiDeleteVolunteering = async (id) => {
    return apiClient.delete(`/volunteering/${id}`);
}