import Card from "./components/Card";



function App() {

const users = [
    {
      id: 1,
      name: "Virat Kohli",
      image: "https://placehold.co/400x300?text=Virat+Kohli",
      buttonText: "View Profile",
    },
    {
      id: 2,
      name: "Rohit Sharma",
      image: "https://placehold.co/400x300?text=Rohit+Sharma",
      buttonText: "Follow",
    },
    {
      id: 3,
      name: "MS Dhoni",
      image: "https://placehold.co/400x300?text=MS+Dhoni",
      buttonText: "Explore",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 bg-gray-100 p-8">
      {users.map((user) => (
        <Card
          key={user.id}
          name={user.name}
          image={user.image}
          buttonText={user.buttonText}
        />
      ))}
    </div>
  );
}

export default App;
