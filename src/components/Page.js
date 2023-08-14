import React from "react";
import Card from "./Card";

import JSONData from "./JSON";

function createCard(data){
  return (
  <Card
    key = {data.key}
    designation = {data.designation}
    fee = {data.fee}
    name = {data.name}
    age = {data.age}
    location = {data.location}
    bio = {data.bio}
    lastDate = {data.lastDate}
    profile = {data.profile}
  />
  )
}



function Page() {
  return (
    <div className="flex">
      {JSONData.map(createCard)}
    </div>
  );
}

export default Page;
