let coursesArray = [
  {
    title: "JavaScript Complex",
    monthDuration: 5,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
    ],
  },
  {
    title: "Java Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "git",
      "java core",
      "java advanced",
    ],
  },
  {
    title: "Python Complex",
    monthDuration: 6,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "angular",
      "aws",
      "docker",
      "python core",
      "python advanced",
    ],
  },
  {
    title: "QA Complex",
    monthDuration: 4,
    hourDuration: 909,
    modules: ["html", "css", "js", "mysql", "mongodb", "git", "QA/QC"],
  },
  {
    title: "FullStack",
    monthDuration: 7,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "node.js",
      "python",
      "java",
    ],
  },
  {
    title: "Frontend",
    monthDuration: 4,
    hourDuration: 909,
    modules: [
      "html",
      "css",
      "js",
      "mysql",
      "mongodb",
      "react",
      "angular",
      "aws",
      "docker",
      "git",
      "sass",
    ],
  },
];

for (const item of coursesArray) {
  const divBlock = document.createElement("div");
  divBlock.classList.add("item");
  document.body.appendChild(divBlock);

  const titleName = document.createElement("h2");
  titleName.innerText = `${item.title}`;
  titleName.classList.add("heading");

  const divDuration = document.createElement("div");
  divDuration.classList.add("description");

  const month = document.createElement("p");
  month.innerText = `${item.monthDuration} months`;

  const hour = document.createElement("p");
  hour.innerText = `${item.hourDuration} hours`;
  divDuration.append(month, hour);

  const listModules = document.createElement("ul");

  listModules.classList.add("list");
  for (const module of item.modules) {
    const linkModule = document.createElement("li");
    linkModule.innerText = `${module}`;
    linkModule.classList.add("link");
    listModules.append(linkModule);
  }
  divBlock.append(titleName, divDuration, listModules);
}
