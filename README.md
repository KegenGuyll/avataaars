# React component for Avataaars

The core React component for [Avataaars Generator](https://getavataaars.com/) developed by [Kegen Guyll](https://github.com/KegenGuyll) and originally created by [Fang-Pen Lin](https://twitter.com/fangpenlin), based on the Sketch library [Avataaars](https://avataaars.com/) designed by [Pablo Stanley](https://twitter.com/pablostanley). 

<p align="center"><img src='avataaars-example.png?raw=true' style='width: 300px; height: 300px;' /></p>

## Features

 - SVG based
 - Light weight 
 - Scalable
 - Easy to use
 - Easy to integrate with custom editor
 - Comes with [official editor](https://getavataaars.com/)
 - Updated to support React 19

## Usage

First, you need to install the avataaars component package, here you run

```
yarn avataaars-kegenguyll
```

or

```
npm install npm i avataaars-kegenguyll
```

if you are using npm. Then, in your React app, import the Avataaar component and put it where you like it to be, for example

```jsx
import Avatar from 'avataaars';

export default function MyComponent() {
  return (
    <div>
      Your avatar:
      <Avatar
        style={{width: '100px', height: '100px'}}
        avatarStyle='Circle'
        topType='LongHairMiaWallace'
        accessoriesType='Prescription02'
        hairColor='BrownDark'
        facialHairType='Blank'
        clotheType='Hoodie'
        clotheColor='PastelBlue'
        eyeType='Happy'
        eyebrowType='Default'
        mouthType='Smile'
        skinColor='Light'
      />
    </div>
  );
}
```

To showcase individual pieces of the avatar you can use the Piece component, for example:

```jsx
import { Piece } from 'avataaars';

export default function MyComponent() {
  return (
    <div>
      <Piece pieceType="mouth" pieceSize="100" mouthType="Eating"/>
      <Piece pieceType="eyes" pieceSize="100" eyeType="Dizzy"/>
      <Piece pieceType="eyebrows" pieceSize="100" eyebrowType="RaisedExcited"/>
      <Piece pieceType="accessories" pieceSize="100" accessoriesType="Round"/>
      <Piece pieceType="top" pieceSize="100" topType="LongHairFro" hairColor="Red"/>
      <Piece pieceType="facialHair" pieceSize="100" facialHairType="BeardMajestic"/>
      <Piece pieceType="clothe" pieceSize="100" clotheType="Hoodie" clotheColor="Red"/>
      <Piece pieceType="graphics" pieceSize="100" graphicType="Skull" />
      <Piece pieceType="skin" pieceSize="100" skinColor="Brown" />
    </div>
  );
}
```

To explore avatar options and generate the React code, please use [Avataaars Generator](https://getavataaars.com/)

## Collect options

To build your own avatar editor, you may want to use lower level `Avatar` component along with `OptionContext`. For more details usage, please reference to source code of [avataaars-generator](https://github.com/fangpenlin/avataaars-geneator), see how it uses `OptionContext` to collection available options.
