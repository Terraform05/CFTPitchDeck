export interface Person {
  name: string;
  role: string;
  imageDir: string;
}

interface TeamProps {
  people: Person[];
}

const Team: React.FC<TeamProps> = ({ people }) => {
  return (
    <div>
      <div className="text-center">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
          Our Team
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:p-6">
        <ul
          role="list"
          className="flex gap-x-8 items-center justify-center overflow-x-auto space-x-6"
        >
          {people.map((person) => (
            <li key={person.name} className="flex-shrink-0">
              <div className="flex flex-col items-center gap-y-2">
                <img
                  alt={person.name}
                  src={person.imageDir}
                  className="h-16 w-16 rounded-full object-cover object-center"
                />
                <div className="text-center">
                  <h3 className="text-base font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold text-indigo-600">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;