import PetProps from "./PetClass";
import './pet.css';

export default function Pet({ name, animal, breed }: PetProps) {
  return (
    <div className="pet-div">
      <img src="/pet/pige.jpg" alt="pet" className="pet-image"/>
      <h1>{name}</h1>
      <h2>{animal} - {breed}</h2>
    </div>
  );
}

