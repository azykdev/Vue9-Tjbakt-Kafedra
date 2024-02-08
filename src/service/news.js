import axios from "./axios";

const NewsService = {
  // GET
  getNews() {
    return axios.get("/news");
  },

  // POST
  postNews(news) {
    return axios.post("/news", news);
  },

  // PUT
  putNews(news) {
    return axios.put(`/news/${news.id}`, news);
  },

  // DELETE
  deleteNews(news) {
    return axios.delete(`/news/${news.id}`);
  },
};

export default NewsService;
