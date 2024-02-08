const state = {
  teachers: [
    {
      id: 1,
      fio: "John Doe",
      age: 25,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      experience: "5 years",
    },
    {
      id: 2,
      fio: "Jane Doe",
      age: 30,
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      experience: "10 years",
    },
    {
      id: 3,
      fio: "Bob Smith",
      age: 35,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      experience: "15 years",
    },
  ],
  sciences: [
    {
      id: 1,
      name: "Math",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      name: "Science",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      name: "English",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      name: "History",
      description:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 5,
      name: "Geography",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,",
    },
  ],
  news: [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2022-01-01",
      file: "https://picsum.photos/id/237/200/300",
      fileType: "image",
    },
    {
      id: 2,
      title: "Ut enim ad minim veniam",
      description:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      date: "2022-01-02",
      file: "",
      fileType: "video",
    },
    {
      id: 3,
      title: "Duis aute irure dolor",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      date: "2022-01-03",
      file: "",
      fileType: "video",
    },
  ],
};

const mutations = {
  addTeacher(state, teacher) {
    state.teachers.push(teacher);
  },
};

const actions = {
  
};

export default {
  state,
  mutations,
};
