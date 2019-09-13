import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/api"
});

export const insertFeedback = payload => api.post(`/feedback`, payload);
export const getAllFeedbacks = () => api.get(`/feedbacks`);
export const deleteFeedbacks = () => api.delete(`/feedbacks`);

const apis = {
  insertFeedback,
  getAllFeedbacks,
  deleteFeedbacks
};

export default apis;
