import { useState } from "react";

const NewSongForm = ({ handleAddSong }) => {
  const [title, setTitle] = useState("");

  const handleNewSongTitle = (event) => setTitle(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!title) {
      return 0;
    }
    handleAddSong(title);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">Song Title : </label>
      <input
        type="text"
        required
        placeholder="Enter a title"
        onChange={handleNewSongTitle}
        value={title}
      />
      <input type="submit" value="Add song" />
    </form>
  );
};

export default NewSongForm;
