import PetProps from "./PetClass";

export default function Pet({ name, animal, breed }: PetProps) {
  return (
    <div>
      <img src="https://www.all-creatures.org/wm/yoda-theswamprescue2.jpg" alt="pet" className="petImage"/>
      <h1>{name}</h1>
      <h2>{animal} - {breed}</h2>
    </div>
  );
}

