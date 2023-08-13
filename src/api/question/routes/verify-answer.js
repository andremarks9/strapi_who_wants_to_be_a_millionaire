module.exports = {
  routes: [
    {
      method: "GET",
      path: "/questions/correctAnswer/:id",
      handler: "question.correctAnswer",
    },
  ],
};
