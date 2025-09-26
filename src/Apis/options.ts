import { supabaseKey } from "../supabaseClient";

export let headers = {
  apikey: supabaseKey,
  Authorization: `Bearer ${supabaseKey}`,
};
