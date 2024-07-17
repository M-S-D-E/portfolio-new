import { apiClient } from "./config";

export const apiAddExperiences = async () => {
    return apiClient.post("/experiences");
    };