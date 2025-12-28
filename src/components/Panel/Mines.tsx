const Mines: React.FC<{ minesLeft: number }> = ({ minesLeft }) => {
  return <p className="text-5xl text-center mt-10 text-white">💣 : {minesLeft}</p>;
};
export default Mines;
