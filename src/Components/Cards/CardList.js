import React from 'react';
import Card from './Card';
import SomeText from './ExampleText'

const ContainerList = ({ ExampleText }) => {
  return (
    <div>
    {
      ExampleText.map((key) => {
        return (
          <Card 
          key={key}
          title={SomeText[key].title}
          username={SomeText[key].username}
          text={SomeText[key].text}
          />
        )
      })
    }
    </div>
  )
}

export default ContainerList;
