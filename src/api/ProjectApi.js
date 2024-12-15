import axiosInstance from "./ApiInstance";

export const getTestcaseList = async (projectId) => {
    const response = await axiosInstance.get(`/api/testcase`, {params: {projectId}});
    return response.data;
};