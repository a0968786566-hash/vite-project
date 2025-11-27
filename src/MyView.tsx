import React from 'react';


interface Pet {
  id: number;
  title: string;
  name: string;
}

const pets: Pet[] = [
  { id: 101, title: "dog", name: "lucky" },
  { id: 102, title: "cat", name: "kitty" },
];

export const MyView: React.FC = () => {
 

  return (
   <div className="p-4 border rounded">
      <h3>Fruit List</h3>
      <ul>
        {/* map 的用法不變，但現在 TS 知道 'fruit' 是一個 string */}
        {pets.map((pet, index) => (
          <div key={pet.id}>
            <span>{pet.title}</span>
            <input type='text' value={pet.name} />
          </div>
        ))}
      </ul>
    </div>
  );
};
