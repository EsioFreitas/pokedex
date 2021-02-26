const selectPockemonColor = (type: string): string => {
  switch (type.toLowerCase()) {
    case "normal":
      return "#B8B8A8";
    case "fighting":
      return "#F7913D";
    case "flying":
      return "#B8B8A8";
    case "poison":
      return "#E090F8";
    case "ground":
      return "#C8A000";
    case "bug":
      return "#A0C888";
    case "ghost":
      return "#A97CF8";
    case "steel":
      return "#B8B8D0";
    case "fire":
      return "#F87070";
    case "grass":
      return "#90d990";
    case "water":
      return "#6998F7";
    case "electric":
      return "#E0E130";
    case "psychic":
      return "#F662A8";
    case "ice":
      return "#3BD8CF";
    case "dragon":
      return "#689828";
    case "fairy":
      return "#F473D4";
    case "unknown":
      return "#B8B8A8";
    case "shadow":
    case "dark":
      return "#8F8888";
    default:
      return "#ccc"
  }

}

export default selectPockemonColor