# Music Trends and Racial Injustice App

## Overview

This project aims to demonstrate the correlation between music trends and data on racial injustice for a specific locale and time frame. It's built using Vite, Superbase, and TypeScript.

## Prerequisites

- Node.js
- npm
- Superbase account

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git

   ## CRUD Operations
   ```

### Songs

#### Create

- **Function**: `insertSong()`
  - **Description**: Inserts a new song into the `songs` table.
  - **Usage**: Call this function to add a new song entry.
  - **Parameters**: None
  - **Returns**: Logs the inserted song data or an error.

#### Read

- **Function**: `fetchAllSongs()`
  - **Description**: Fetches all songs from the `songs` table.
  - **Usage**: Call this function to retrieve all song entries.
  - **Parameters**: None
  - **Returns**: Logs the fetched song data or an error.

#### Update

- **Function**: `updateSongPopularity(songId: number, newScore: number)`
  - **Description**: Updates the `popularity_score` of a song based on its `song_id`.
  - **Usage**: Call this function to update the popularity score of a specific song.
  - **Parameters**:
    - `songId`: The ID of the song to update.
    - `newScore`: The new popularity score.
  - **Returns**: Logs the updated song data or an error.

#### Delete

- **Function**: `deleteSong(songId: number)`
  - **Description**: Deletes a song based on its `song_id`.
  - **Usage**: Call this function to remove a specific song entry.
  - **Parameters**:
    - `songId`: The ID of the song to delete.
  - **Returns**: Logs the deleted song data or an error.
# my-music-trends-app
