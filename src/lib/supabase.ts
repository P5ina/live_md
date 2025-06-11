import { PUBLIC_SUPABASE_KEY } from "$env/static/public";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ahtxddmhgawanpdfkeum.supabase.co";
export const supabase = createClient(supabaseUrl, PUBLIC_SUPABASE_KEY);
