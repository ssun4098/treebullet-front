import axiosInstance from "./ApiInstance";

export const getProjectList = async (page, size) => {
    const response = await axiosInstance.get(`/api/project`, {params: {page, size}});
    return response.data;
};