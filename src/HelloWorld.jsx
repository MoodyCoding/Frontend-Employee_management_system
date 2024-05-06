import ListEmployeeComponent from "./components/ListEmployeeComponent";

function HelloWorld() {
  const dummyData = [
    {
      id: 1,
      firstName: "Yashraj",
      lastName: "Samani",
      email: "yashraj@gmail.com",
    },
    {
      id: 3,
      firstName: "Piyush",
      lastName: "Singh",
      email: "piyush@gmail.com",
    },
    {
      id: 2,
      firstName: "Juned",
      lastName: "Khan",
      email: "juned@gmail.com",
    },
  ];

  return <h1 className="text-center">Hello World!</h1>;
}

export default HelloWorld;
