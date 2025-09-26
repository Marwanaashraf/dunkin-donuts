import axios from "axios";
import { supabaseUrl } from "../supabaseClient";
import { headers } from "./options";

export async function getOffers() {
  try {
    let { data } = await axios.get(`${supabaseUrl}/rest/v1/drinks`, {
      headers,
      params: {
        select: "*",
        discount: `gt.0`,
      },
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}
