import { apiClient } from "./config"

export const apiGetAchievements = async () => {
    return apiClient.get("/achievements");
};

export const apiAddAchievement = async (id, payload) => {
    return apiClient.patch(`/skills/${id}`, payload);
};

export const apiGetAchievementById = async (id) => {
    return apiClient.get(`/achievements/${id}`);
};

export const apiUpdateAchievement = async (id) => {
    return apiClient.patch(`/achievements/${id}`);
};

export const apiDeleteAchievement = async (id) => {
    return apiClient.delete(`/achievements/${id}`);
}