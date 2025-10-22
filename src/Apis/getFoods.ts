import axios from "axios";
import { supabaseUrl } from "../supabaseClient";
import { headers } from "./options";

export async function getAllFoods() {
  try {
    let { data } = await axios.get(`${supabaseUrl}/rest/v1/foods`, {
      headers,
      params: {
        select: "*",
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
