import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameCriticScore = ({ score }: Props) => {
  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge colorScheme={color} fontSize="12px" padding={1} borderRadius="4px">
      {score}
    </Badge>
  );
};

export default GameCriticScore;
