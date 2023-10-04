// songController.ts
import { supabase } from './db';

//inserts data in to the song table
export const insertSong = async () => {
  const { data, error } = await supabase
    .from('songs')
    .insert([
      { song_name: 'Jay Z', artist_id: 1, genre_id: 1, popularity_score: 90 }
    ]);

  if (error) {
    console.error('Error inserting song:', error);
  } else {
    console.log('Inserted song:', data);
  }
};
//gets all the data (in this case songs) from the songs table
export const fetchAllSongs = async () => {
  const { data, error } = await supabase
    .from('songs')
    .select('*');

  if (error) {
    console.error('Error fetching songs:', error);
  } else {
    console.log('Fetched songs:', data);
  }
};
//this will update the propularity_score of a song based on its song_id
export const updateSongPopularity = async (songId: number, newScore: number) => {
  const { data, error } = await supabase
    .from('songs')
    .update({ popularity_score: newScore })
    .eq('song_id', songId)
    .select();

  if (error) {
    console.error('Error updating song:', error);
  } else {
    console.log('Updated song:', data);
  }
};
//this will delete a single row of data from the songs table, you will have to give the id
export const deleteSong = async (songId: number) => {
  const { data, error } = await supabase
    .from('songs')
    .delete()
    .eq('song_id', songId);

  if (error) {
    console.error('Error deleting song:', error);
  } else {
    console.log('Deleted song:', data);
  }
};

