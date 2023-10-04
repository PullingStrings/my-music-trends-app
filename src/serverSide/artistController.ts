// artistController.ts
import { supabase } from './db';

export const insertArtist = async () => {
  const { data, error } = await supabase
    .from('artists')
    .insert([
      { artist_name: 'Jay Z', popularity_score: 80 }
    ]);

  if (error) {
    console.error('Error inserting artist:', error);
  } else {
    console.log('Inserted artist:', data);
  }
};
