import NewsService from "@/service/news.js";

const state = {
  news: [],
};

const mutations = {
  getNewsSuccess(state, news) {
    state.news = news;
  },
};

const actions = {
  // GET
  getNews(context) {
    return new Promise(() => {
      NewsService.getNews().then((res) => {
        context.commit("getNewsSuccess", res.data);
      });
    });
  },

  // POST
  postNews(context, news) {
    return new Promise((resolve) => {
      NewsService.postNews(news).then((res) => {
        resolve(res);
      });
    });
  },

  // PUT
  putNews(context, news) {
    return new Promise((resolve) => {
      NewsService.putNews(news).then((res) => {
        resolve(res);
      });
    });
  },

  // DELETE
  deleteNews(context, news) {
    NewsService.deleteNews(news);
  },
};

export default {
  state,
  mutations,
  actions,
};
