export const Character = ({ character }) => {
  return (
    <div className="flex p-6">
      <img
        src={`${character.image}`}
        alt=""
        className="absolute z-10 inset-0 w-full h-full object-cover rounded-lg"
      />
    </div>
  )
}
