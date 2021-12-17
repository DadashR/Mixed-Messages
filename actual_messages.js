const listOfAnimals = ['Wolf', 'Zebra', 'Giraffe', 'Lion', 'Cat', 'Dog', 'Horse', 'Tiger', 'Monkey'];
const listOfFirstTrait = ['attractive','ugly', 'funny', 'energetic', 'timid', 'explosive', 'generous', 'miser', 'kind'];
const listOfSecondTrait = ['anxious', 'secure', 'a chatterbox', 'serious', 'silent', 'diligent'];

const mixedMessage = () => {
    const randomIndex1 = Math.floor(Math.random() * listOfAnimals.length);
    const randomIndex2 = Math.floor(Math.random() * listOfFirstTrait.length);
    const randomIndex3 = Math.floor(Math.random() * listOfSecondTrait.length);
    // console.log(randomIndex1)
    // console.log(randomIndex2)
    // console.log(randomIndex3)
    // console.log(listOfSecondTrait.length);
    // console.log(listOfFirstTrait.length);
    // console.log(listOfAnimals.length);
    const animalChosen = listOfAnimals[randomIndex1];
    const firstTraitChosen = listOfFirstTrait[randomIndex2];
    const secondTraitChosen = listOfSecondTrait[randomIndex3];
    // console.log(animalChosen);
    // console.log(firstTraitChosen);
    // console.log(secondTraitChosen);
    console.log(`You are a ${animalChosen}! It means you are ${firstTraitChosen} and ${secondTraitChosen}!`);
};

mixedMessage();