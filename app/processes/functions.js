import axios from "axios";
import { supabase } from "../../lib/supabase";

export async function postRequest(postData) {
  try {
    const response = await axios.post(
      "https://ecocashserver.sites.tjhsst.edu",
      postData
    );
    // console.log(response.data);

    if (response.data) {
      return true;
    }
  } catch (error) {
    console.error("Error making POST request:", error);
    return false;
  }
}

export async function getRequest() {
  try {
    const response = await axios.get(
      "https://ecocashserver.sites.tjhsst.edu/mostrecent"
    );
    // console.log(response.data);

    if (response.data) {
      return true;
    }
  } catch (error) {
    console.error("Error making POST request:", error);
    return false;
  }
}

export async function getProfileInfo(id) {
  try {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw error;
    console.log(data);
    return data;
  } catch (error) {
    console.error("Error getting profile info from supabase:", error);
    return false;
  }
}
