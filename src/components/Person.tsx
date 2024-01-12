import React, { FC, useState, ChangeEvent } from "react";

// enums are used to say that a given prop can only assume a given set of values
export enum hairColor {
  Blonde = "blonde hair logic here",
  Brown = "brown hair logic here",
  Pink = "pink hair logic here",
}

interface Props {
  name: string;
  age: number;
  isMarried: boolean;
  getName?: (name: string) => string;
  // Defining types for a function's argument, as well as for its return value
  // "?" means a given prop is optional (does not necessarily need to be passed down by the parent component)
  hairColor: hairColor;
}

const Person: FC<Props> = (props) => {
  const [country, setCountry] = useState<string | null>("");
  // We add the "|" union sign (OR) in case we decide to assign a null value to country for some reason

  // "types" are somewhat similar to "enums"
  type NameType = "Fabio" | "Pedro" | "Lucas";
  const nameforType: NameType = "Lucas";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  return (
    <div className="personalInfo">
      <h3>{props.name}</h3>
      <h3>{props.age}</h3>
      <h3>{props.isMarried ? "true" : "false"}</h3>
      <h3>{props.hairColor}</h3>

      <input placeholder="Your coutry here..." onChange={handleChange} />
      {/* If the handleChange function was defined inside the <input/> tag, there would be non need to assign a type to the onChange event*/}
      {/* <input placeholder="Your coutry here..." onChange={(event)=>{setCountry(event.target.value)}} /> */}
      <br />
      <h3>{country}</h3>
    </div>
  );
};

export default Person;
